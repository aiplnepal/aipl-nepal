const fs = require('fs');

function replaceFileContent(file, replacements) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  let newContent = content;
  replacements.forEach(([search, replace]) => {
    newContent = newContent.replace(search, replace);
  });
  if (newContent !== content) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
}

// Update index exports
replaceFileContent('content/locales/en/index.ts', [
  [`import { about } from './about';`, `import { about } from './about';\nimport { products } from './products';`],
  [`  about,\n} as const;`, `  about,\n  products,\n} as const;`]
]);

replaceFileContent('content/locales/ne/index.ts', [
  [`import { about } from './about';`, `import { about } from './about';\nimport { products } from './products';`],
  [`  about,\n} as const;`, `  about,\n  products,\n} as const;`]
]);

// 1. ProductsHero
replaceFileContent('components/products/ProductsHero.tsx', [
  [/AIPL Products/g, '{dict.products.hero.label}'],
  [/Biological Solutions for Sustainable Yields\./g, '{dict.products.hero.title}'],
  [/Our agricultural product portfolio is engineered to support soil health, enhance crop resilience, and drive biological productivity across Nepal\./g, '{dict.products.hero.description}']
]);

// 2. ProductIntroduction
replaceFileContent('components/products/ProductIntroduction.tsx', [
  [/Advanced biological inputs derived from indigenous resources\./g, '{dict.products.introduction.title}'],
  [/AIPL produces bio-fertilizers and bio-pesticides utilizing indigenous resources and state-of-the-art microbial laboratories\. Our focus is on transforming soil health and natural resources into sustainable economic opportunities for local communities\./g, '{dict.products.introduction.p1}'],
  [/We believe that true agricultural advancement comes from restoring the biological balance of the soil environment, reducing reliance on harsh chemical interventions, and promoting organic farming practices that benefit both the farmer and the ecosystem\./g, '{dict.products.introduction.p2}']
]);

// 3. ScientificApproach
replaceFileContent('components/products/ScientificApproach.tsx', [
  [/Quality & Methodology/g, '{dict.products.scientificApproach.label}'],
  [/Rooted in Microbiology\./g, '{dict.products.scientificApproach.title}'],
  [/AIPL's product development begins in our microbial laboratories, where we isolate and cultivate beneficial indigenous bacteria such as Rhizobium and Azotobacter\./g, '{dict.products.scientificApproach.p1}'],
  [/We maintain strict quality control standards to ensure that every batch of bio-fertilizer or bio-pesticide contains active, viable microbial populations capable of thriving in the field\. Our scientific approach ensures consistent performance, helping farmers achieve reliable results while adhering to sustainable agricultural practices\./g, '{dict.products.scientificApproach.p2}'],
  [/\* Official laboratory certifications and regulatory approvals are maintained in accordance with national agricultural standards\./g, '{dict.products.scientificApproach.footnote}']
]);

console.log("Done");
