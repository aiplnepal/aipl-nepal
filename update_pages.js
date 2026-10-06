const fs = require('fs');
const path = require('path');

const pages = [
  'app/[locale]/(marketing)/about/page.tsx',
  'app/[locale]/(marketing)/quality/page.tsx',
  'app/[locale]/(marketing)/resources/page.tsx',
  'app/[locale]/(marketing)/career/page.tsx'
];

pages.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('import { getDictionary')) {
    content = 'import { getDictionary, Locale } from "@/lib/i18n/dictionaries";\n' + content;
  }
  
  content = content.replace(/export default function ([A-Za-z0-9_]+)\(\) \{/g, 'export default async function $1({ params }: { params: Promise<{ locale: string }> }) {\n  const { locale: localeStr } = await params;\n  const locale = localeStr as Locale;\n  const dict = await getDictionary(locale);\n');
  
  content = content.replace(/<([A-Za-z0-9_]+) \/>/g, '<$1 dict={dict} />');
  
  fs.writeFileSync(filePath, content);
});

console.log("Updated pages");
