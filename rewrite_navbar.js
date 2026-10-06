const fs = require('fs');

let file = fs.readFileSync('components/layout/Navbar.tsx', 'utf-8');

file = file.replace(/export function Navbar\(\) {/g, 'import { useCookies } from "next-client-cookies";\n\nexport function Navbar({ dict, locale }: { dict: any; locale: string }) {');

file = file.replace(/const navLinks = \[\s*\{ href: "\/about", label: "About" \},\s*\{ href: "\/products", label: "Products" \},\s*\{ href: "\/quality", label: "Quality & Impact" \},\s*\{ href: "\/resources", label: "Resources" \},\s*\{ href: "\/career", label: "Career" \},\s*\];/g, '');

file = file.replace(/const pathname = usePathname\(\);/g, `const pathname = usePathname();
  const navLinks = [
    { href: \`/\${locale}/about\`, label: dict.common.nav.about },
    { href: \`/\${locale}/products\`, label: dict.common.nav.products },
    { href: \`/\${locale}/quality\`, label: dict.common.nav.quality },
    { href: \`/\${locale}/resources\`, label: dict.common.nav.resources },
    { href: \`/\${locale}/career\`, label: dict.common.nav.career },
  ];
  const switchLocale = (newLocale) => {
    document.cookie = \`NEXT_LOCALE=\${newLocale}; path=/; max-age=31536000\`;
    const newPath = pathname.replace(\`/\${locale}\`, \`/\${newLocale}\`);
    window.location.href = newPath;
  };`);

file = file.replace(/href="\/"/g, 'href={`/${locale}`}');
file = file.replace(/href="\/contact"/g, 'href={`/${locale}/contact`}');
file = file.replace(/>Contact Us</g, '>{dict.common.nav.contact}<');

// Replace Language Dropdown desktop
file = file.replace(
  /<div className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer">\s*<Globe className="h-4 w-4" \/>\s*<span>EN<\/span>\s*<ChevronDown className="h-4 w-4 text-gray-400" \/>\s*<\/div>/g,
  `<div className="relative group">
            <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer p-2">
              <Globe className="h-4 w-4" />
              <span>{dict.common.languageOptions[locale as keyof typeof dict.common.languageOptions]}</span>
              <ChevronDown className="h-4 w-4 text-gray-400 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <button onClick={() => switchLocale('en')} className={\`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 \${locale === 'en' ? 'font-semibold text-forest' : 'text-gray-700'}\`}>English</button>
                <button onClick={() => switchLocale('ne')} className={\`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 \${locale === 'ne' ? 'font-semibold text-forest' : 'text-gray-700'}\`}>नेपाली</button>
              </div>
            </div>
          </div>`
);

// Replace Language Dropdown mobile
file = file.replace(
  /<div className="flex items-center gap-2 text-base font-medium text-gray-700 py-3 min-h-\[44px\]">\s*<Globe className="h-5 w-5 text-gray-500" \/>\s*<span>Language: English<\/span>\s*<\/div>/g,
  `<div className="flex flex-col gap-2 py-3">
                  <div className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <span>{locale === 'en' ? 'Language' : 'भाषा'}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => switchLocale('en')} className={\`py-2 rounded-md border \${locale === 'en' ? 'border-forest bg-forest/5 text-forest font-semibold' : 'border-gray-200 text-gray-600'}\`}>English</button>
                    <button onClick={() => switchLocale('ne')} className={\`py-2 rounded-md border \${locale === 'ne' ? 'border-forest bg-forest/5 text-forest font-semibold' : 'border-gray-200 text-gray-600'}\`}>नेपाली</button>
                  </div>
                </div>`
);

fs.writeFileSync('components/layout/Navbar.tsx', file);
