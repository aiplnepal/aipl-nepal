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
  [/export async function ProductHighlights\(\) \{/g, 'export async function ProductHighlights({ dict }: { dict?: any }) {']
]);

fix('components/sections/ResourcePreview.tsx', [
  [/export async function ResourcePreview\(\) \{/g, 'export async function ResourcePreview({ dict }: { dict?: any }) {']
]);

fix('components/products/ProductIntroduction.tsx', [
  [/export function ProductIntroduction\(\) \{/g, 'export function ProductIntroduction({ dict }: { dict?: any }) {']
]);

fix('components/products/ScientificApproach.tsx', [
  [/export function ScientificApproach\(\) \{/g, 'export function ScientificApproach({ dict }: { dict?: any }) {']
]);

console.log("Fixed missing dict props again");
