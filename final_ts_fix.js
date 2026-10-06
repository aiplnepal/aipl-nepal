const fs = require('fs');

function fix(file, replaces) {
  if (!fs.existsSync(file)) return;
  let c = fs.readFileSync(file, 'utf-8');
  replaces.forEach(r => {
    c = c.replace(r[0], r[1]);
  });
  fs.writeFileSync(file, c);
}

fix('components/sections/ResourceList.tsx', [
  [/export function ResourceList\(\{ resources \}: \{ resources: Resource\[\] \}\) \{/g, 'export function ResourceList({ resources, dict }: { resources: any[], dict?: any }) {']
]);

fix('app/[locale]/(marketing)/resources/[slug]/page.tsx', [
  [/export default async function ResourceDetailPage\(\) \{/g, 'export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {\n  const { slug, locale: localeStr } = await params;\n  const locale = localeStr as Locale;\n  const dict = await getDictionary(locale);\n']
]);

// app/[locale]/(marketing)/page.tsx
// I will just add dict={dict} where missing manually in the next step.

console.log("Fixed more TS errors");
