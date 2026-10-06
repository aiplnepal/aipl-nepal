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
  [`import { quality } from './quality';`, `import { quality } from './quality';\nimport { resources } from './resources';`],
  [`  quality,\n} as const;`, `  quality,\n  resources,\n} as const;`]
]);

replaceFileContent('content/locales/ne/index.ts', [
  [`import { quality } from './quality';`, `import { quality } from './quality';\nimport { resources } from './resources';`],
  [`  quality,\n} as const;`, `  quality,\n  resources,\n} as const;`]
]);

// 1. ResourcesHero
replaceFileContent('components/resources/ResourcesHero.tsx', [
  [/Resources/g, '{dict.resources.hero.label}'],
  [/Agricultural Knowledge for Better Farming Decisions\./g, '{dict.resources.hero.title}'],
  [/Practical insights, soil science, and crop management strategies drawn from AIPL&apos;s extensive work with farmers across Nepal\./g, '{dict.resources.hero.description}']
]);

// 2. FeaturedResource
replaceFileContent('components/resources/FeaturedResource.tsx', [
  [/Featured Article/g, '{dict.resources.featured.label}'],
  [/Read Article/g, '{dict.resources.featured.readArticle}']
]);

// 3. ResourceList
replaceFileContent('components/sections/ResourceList.tsx', [
  [/Resource Library/g, '{dict.resources.list.title}'],
  [/placeholder="Search articles..."/g, 'placeholder={dict.resources.list.searchPlaceholder}'],
  [/No articles found\./g, '{dict.resources.list.noArticles}'],
  [/Try a different search term or category filter\./g, '{dict.resources.list.tryDifferent}'],
  [/Read Article/g, '{dict.resources.list.readArticle}'],
  [/Showing \{filtered\.length\} of \{resources\.length\} resources/g, '{dict.resources.list.showing} {filtered.length} {dict.resources.list.of} {resources.length} {dict.resources.list.resources}']
]);

// 4. PracticalKnowledge
replaceFileContent('components/resources/PracticalKnowledge.tsx', [
  [/From Knowledge to Better Farming\./g, '{dict.resources.practicalKnowledge.title}'],
  [/At AIPL, we believe that providing high-quality agricultural products is only half the equation\. The other half is ensuring farmers have the technical knowledge to use them effectively\./g, '{dict.resources.practicalKnowledge.p1}'],
  [/Our resource library is built from our direct experience supporting organic farming transitions and soil health management across Nepal\. We focus on practical, actionable information that leads to measurable improvements in crop yield and soil vitality\./g, '{dict.resources.practicalKnowledge.p2}'],
  [/<h4 className="font-bold text-gray-900 text-lg mb-2">Technical Understanding<\/h4>/g, '<h4 className="font-bold text-gray-900 text-lg mb-2">{dict.resources.practicalKnowledge.points[0].title}</h4>'],
  [/Learning the science behind soil health, nutrient profiles, and pest behavior\./g, '{dict.resources.practicalKnowledge.points[0].description}'],
  [/<h4 className="font-bold text-gray-900 text-lg mb-2">Appropriate Application<\/h4>/g, '<h4 className="font-bold text-gray-900 text-lg mb-2">{dict.resources.practicalKnowledge.points[1].title}</h4>'],
  [/Understanding exactly when, how, and why to apply specific agricultural products for maximum efficacy\./g, '{dict.resources.practicalKnowledge.points[1].description}'],
  [/<h4 className="font-bold text-gray-900 text-lg mb-2">Sustainable Results<\/h4>/g, '<h4 className="font-bold text-gray-900 text-lg mb-2">{dict.resources.practicalKnowledge.points[2].title}</h4>'],
  [/Making farming decisions that protect soil health for future generations while improving current harvests\./g, '{dict.resources.practicalKnowledge.points[2].description}']
]);

// 5. KnowledgeCTA
replaceFileContent('components/resources/KnowledgeCTA.tsx', [
  [/Put Knowledge Into Practice/g, '{dict.resources.cta.title}'],
  [/Agricultural knowledge is most useful when it leads to practical action\. AIPL provides the technical services and soil-friendly products necessary to implement these strategies on your farm\./g, '{dict.resources.cta.description}'],
  [/Explore AIPL Services/g, '{dict.resources.cta.exploreServices}'],
  [/Contact AIPL/g, '{dict.resources.cta.contactUs}']
]);

console.log("Done");
