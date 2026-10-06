const fs = require('fs');

function fix(file, replaces) {
  if (!fs.existsSync(file)) return;
  let c = fs.readFileSync(file, 'utf-8');
  replaces.forEach(r => {
    c = c.replace(r[0], r[1]);
  });
  fs.writeFileSync(file, c);
}

fix('components/products/ProductCard.tsx', [
  [/\(comp\) =>/g, '(comp: any) =>']
]);

fix('app/[locale]/(marketing)/contact/page.tsx', [
  [/export default function ContactPage\(\) \{/g, 'export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {\n  const { locale: localeStr } = await params;\n  const locale = localeStr as Locale;\n  const dict = await getDictionary(locale);\n'],
  [/<ContactForm \/>/g, '<ContactForm dict={dict} />'],
  [/<DealerLocator dealers=\{dealers\} \/>/g, '<DealerLocator dealers={dealers} dict={dict} />']
]);

fix('app/[locale]/(marketing)/page.tsx', [
  [/<FarmerEmpowerment \/>/g, '<FarmerEmpowerment dict={dict} />'],
  [/<CTABanner \/>/g, '<CTABanner dict={dict} />'],
  [/<ResourcePreview \/>/g, '<ResourcePreview dict={dict} />']
]);

fix('app/[locale]/(marketing)/products/page.tsx', [
  [/export default async function ProductsIndexPage\(\) \{/g, 'export default async function ProductsIndexPage({ params }: { params: Promise<{ locale: string }> }) {\n  const { locale: localeStr } = await params;\n  const locale = localeStr as Locale;\n  const dict = await getDictionary(locale);\n'],
  [/<ProductsHero \/>/g, '<ProductsHero dict={dict} />'],
  [/<ScientificApproach \/>/g, '<ScientificApproach dict={dict} />'],
  [/<CTABanner \/>/g, '<CTABanner dict={dict} />']
]);

fix('app/[locale]/(marketing)/resources/[slug]/page.tsx', [
  [/<CTABanner \/>/g, '<CTABanner dict={dict} />']
]);

fix('components/sections/FarmerEmpowerment.tsx', [
  [/export function FarmerEmpowerment\(\) \{/g, 'export function FarmerEmpowerment({ dict }: { dict?: any }) {']
]);

fix('components/sections/ResourcePreview.tsx', [
  [/export function ResourcePreview\(\) \{/g, 'export function ResourcePreview({ dict }: { dict?: any }) {']
]);

fix('components/sections/DealerLocator.tsx', [
  [/export function DealerLocator\(\{ dealers \}: DealerLocatorProps\) \{/g, 'export function DealerLocator({ dealers, dict }: DealerLocatorProps & { dict?: any }) {']
]);

fix('components/resources/ResourceList.tsx', [
  [/export function ResourceList\(\{ resources, dict \}: \{ resources: Resource\[\], dict\?: any \}\) \{/g, 'export function ResourceList({ resources, dict }: { resources: any[], dict?: any }) {'],
  [/export function ResourceList\(\{ resources \}: \{ resources: Resource\[\] \}\) \{/g, 'export function ResourceList({ resources, dict }: { resources: any[], dict?: any }) {']
]);

console.log("Fixed errors");
