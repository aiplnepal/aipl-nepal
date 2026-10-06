const fs = require('fs');

const pagesToUpdate = [
  'app/[locale]/(marketing)/page.tsx',
  'app/[locale]/(marketing)/contact/page.tsx',
  'app/[locale]/(marketing)/products/page.tsx',
  'app/[locale]/(marketing)/resources/[slug]/page.tsx'
];

pagesToUpdate.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('import { getDictionary')) {
    content = 'import { getDictionary, Locale } from "@/lib/i18n/dictionaries";\n' + content;
  }
  
  // Convert to async if not already
  if (!content.includes('async function')) {
    content = content.replace(/export default function ([A-Za-z0-9_]+)\(\) \{/g, 'export default async function $1({ params }: { params: Promise<{ locale: string }> }) {\n  const { locale: localeStr } = await params;\n  const locale = localeStr as Locale;\n  const dict = await getDictionary(locale);\n');
  } else {
    // If it takes params already (e.g. products/page.tsx or resources/[slug]/page.tsx), we just need to get the dict.
    // Replace `const { locale } = await params;` with fetching dict too.
    if (!content.includes('const dict = await getDictionary(locale)')) {
      content = content.replace(/const \{ locale \} = await params;/g, 'const { locale } = await params;\n  const dict = await getDictionary(locale as Locale);');
      // Fix for slug page
      content = content.replace(/const \{ slug, locale \} = await params;/g, 'const { slug, locale } = await params;\n  const dict = await getDictionary(locale as Locale);');
    }
  }

  // Add dict prop to custom components (heuristic: start with uppercase, not HTML tags)
  // Just find common components that we modified
  const components = [
    'Hero', 'ArsdStory', 'ProductHighlights', 'AgriculturalSolutions', 'TrustStrip',
    'TestimonialRow', 'WhyAIPL', 'CTABanner', 'ProductsHero', 'ScientificApproach',
    'ProductCard', 'ContactForm', 'DealerLocator'
  ];

  components.forEach(comp => {
    const regex = new RegExp(`<${comp}(?!\\w)`, 'g');
    content = content.replace(regex, `<${comp} dict={dict}`);
  });

  fs.writeFileSync(filePath, content);
});

// Update components with existing props to accept dict
const componentsToUpdate = [
  'components/resources/FeaturedResource.tsx',
  'components/resources/ResourceList.tsx',
  'components/resources/ResourcePreview.tsx',
  'components/products/ProductCard.tsx',
];

componentsToUpdate.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // replace { resource: Resource } with { resource: Resource, dict?: any }
  content = content.replace(/\{ resource \}: \{ resource: Resource \}/g, '{ resource, dict }: { resource: Resource, dict?: any }');
  // replace { resources: Resource[] } with { resources: Resource[], dict?: any }
  content = content.replace(/\{ resources \}: \{ resources: Resource\[\] \}/g, '{ resources, dict }: { resources: Resource[], dict?: any }');
  // product card
  content = content.replace(/\{ product \}: \{ product: Product \}/g, '{ product, dict }: { product: any, dict?: any }');
  
  fs.writeFileSync(filePath, content);
});

console.log("Fixed missing dict props");
