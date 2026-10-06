const fs = require('fs');

let file = fs.readFileSync('components/layout/Footer.tsx', 'utf-8');

file = file.replace(/export function Footer\(\) {/g, 'export function Footer({ dict, locale }: { dict: any; locale: string }) {');

file = file.replace(/const footerLinks = \[\s*\{ href: "\/", label: "Home" \},\s*\{ href: "\/about", label: "About" \},\s*\{ href: "\/products", label: "Products" \},\s*\{ href: "\/quality", label: "Quality & Impact" \},\s*\{ href: "\/resources", label: "Resources" \},\s*\{ href: "\/contact", label: "Contact" \},\s*\];/g, '');

file = file.replace(/export function Footer\(\{ dict, locale \}: \{ dict: any; locale: string \}\) {/g, `export function Footer({ dict, locale }: { dict: any; locale: string }) {
  const footerLinks = [
    { href: \`/\${locale}\`, label: dict.common.nav.home },
    { href: \`/\${locale}/about\`, label: dict.common.nav.about },
    { href: \`/\${locale}/products\`, label: dict.common.nav.products },
    { href: \`/\${locale}/quality\`, label: dict.common.nav.quality },
    { href: \`/\${locale}/resources\`, label: dict.common.nav.resources },
    { href: \`/\${locale}/contact\`, label: dict.common.nav.contact },
  ];`);

file = file.replace(/Fertilizers, bio pesticides, and crop care products trusted by\s*farmers and dealers across Nepal\./g, '{dict.common.footer.description}');
file = file.replace(/>\s*Quick Links\s*</g, '>{dict.common.footer.quickLinks}<');
file = file.replace(/>\s*Contact Us\s*</g, '>{dict.common.footer.contactUs}<');

file = file.replace(/All Rights Reserved\./g, '{dict.common.footer.rights}');

fs.writeFileSync('components/layout/Footer.tsx', file);
