const fs = require('fs');

function fix(file, replaces) {
  if (!fs.existsSync(file)) return;
  let c = fs.readFileSync(file, 'utf-8');
  replaces.forEach(r => {
    c = c.replace(r[0], r[1]);
  });
  fs.writeFileSync(file, c);
}

fix('components/sections/ProductHighlights.tsx', [
  [/export function ProductHighlights\(\) \{/g, 'export function ProductHighlights({ dict }: { dict?: any }) {']
]);

fix('components/sections/ResourcePreview.tsx', [
  [/export function ResourcePreview\(\) \{/g, 'export function ResourcePreview({ dict }: { dict?: any }) {']
]);

fix('components/products/ProductIntroduction.tsx', [
  [/export function ProductIntroduction\(\) \{/g, 'export function ProductIntroduction({ dict }: { dict?: any }) {']
]);

fix('components/products/ScientificApproach.tsx', [
  [/export function ScientificApproach\(\) \{/g, 'export function ScientificApproach({ dict }: { dict?: any }) {']
]);

// Let's check if ProductsPage passes dict to ProductIntroduction
fix('app/[locale]/(marketing)/products/page.tsx', [
  [/<ProductIntroduction \/>/g, '<ProductIntroduction dict={dict} />']
]);

// And fix resources/[slug]/page.tsx line 171
// I need to see what's on line 171. It probably has <CTABanner dict={dict} /> but dict is not defined because I didn't add the getDictionary code to that function, or maybe it's in `generateStaticParams`. Let's just fix it.
