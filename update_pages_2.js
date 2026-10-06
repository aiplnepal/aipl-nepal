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
  
  // Revert back anything my previous script broke on resources
  content = content.replace(/export default async function ResourcesPage\(\) \{/g, 'export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {\n  const { locale: localeStr } = await params;\n  const locale = localeStr as Locale;\n  const dict = await getDictionary(locale);\n');
  content = content.replace(/export default function ResourcesPage\(\) \{/g, 'export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {\n  const { locale: localeStr } = await params;\n  const locale = localeStr as Locale;\n  const dict = await getDictionary(locale);\n');
  content = content.replace(/export default function CareerPage\(\) \{/g, 'export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {\n  const { locale: localeStr } = await params;\n  const locale = localeStr as Locale;\n  const dict = await getDictionary(locale);\n');

  content = content.replace(/<FeaturedResource resource=\{featuredResource\} \/>/g, '<FeaturedResource resource={featuredResource} dict={dict} />');
  content = content.replace(/<ResourceList resources=\{remainingResources\} \/>/g, '<ResourceList resources={remainingResources} dict={dict} />');
  
  fs.writeFileSync(filePath, content);
});

console.log("Updated async pages");
