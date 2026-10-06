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

replaceFileContent('components/sections/Hero.tsx', [
  [/Agricultural Investment Private Limited/g, '{dict.home.hero.subtitle}'],
  [/Revitalizing Agriculture\. <br className="hidden sm:block" \/>\s*<span className="text-forest">Empowering Farmers\.<\/span>/, '{dict.home.hero.title.line1} <br className="hidden sm:block" />\n                <span className="text-forest">{dict.home.hero.title.line2}</span>'],
  [/Transforming the conventional approach of Nepalese farmers by introducing modern, sustainable, and technologically integrated agricultural practices\./g, '{dict.home.hero.description}'],
  [/&quot;सामान्य किसानहरूका लागि दिगो कृषि प्रणाली&quot;/g, '{dict.home.hero.nepaliQuote}'],
  [/Explore Products/g, '{dict.home.hero.exploreProducts}'],
  [/Our Impact/g, '{dict.home.hero.ourImpact}']
]);

replaceFileContent('components/sections/TrustStrip.tsx', [
  [/100% Organic & Biological/g, '{dict.home.trustStrip.organic}'],
  [/Manufactured in Nepal/g, '{dict.home.trustStrip.nepal}'],
  [/Expert Farmer Support/g, '{dict.home.trustStrip.support}'],
  [/Scientifically Formulated/g, '{dict.home.trustStrip.scientific}']
]);

replaceFileContent('components/sections/ArsdStory.tsx', [
  [/The ARSD Campaign/g, '{dict.home.arsdStory.label}'],
  [/Agriculture Revitalizing Sustainable Development for Layman Farmers/g, '{dict.home.arsdStory.title}'],
  [/Our core initiative is designed to transition traditional farming into a commercially viable, scientifically backed enterprise\. We focus on soil restoration, biological pest management, and comprehensive farmer education\./g, '{dict.home.arsdStory.description}'],
  [/Soil Health Restoration/g, '{dict.home.arsdStory.list.soil}'],
  [/Increased Crop Yields/g, '{dict.home.arsdStory.list.yield}'],
  [/Modern Tech Integration/g, '{dict.home.arsdStory.list.tech}'],
  [/Learn About ARSD/g, '{dict.home.arsdStory.learnMore}']
]);

replaceFileContent('components/sections/AgriculturalSolutions.tsx', [
  [/Core Methodology/g, '{dict.home.agriculturalSolutions.label}'],
  [/Biological Solutions for Modern Agriculture/g, '{dict.home.agriculturalSolutions.title}'],
  // For array items, I can just replace the whole array with dict items, but the array is defined outside the component.
  // Wait, I should move the array inside the component or just map over dict.home.agriculturalSolutions.solutions
]);

replaceFileContent('components/sections/SmartFarming.tsx', [
  [/Technology/g, '{dict.home.smartFarming.label}'],
  [/Smart Farming Management System \(SFMS\)/g, '{dict.home.smartFarming.title}'],
  [/Integrating IoT-enabled environmental monitoring and data analytics to provide actionable insights for precision agriculture\./g, '{dict.home.smartFarming.description}']
]);

replaceFileContent('components/sections/ProductHighlights.tsx', [
  [/Featured Products/g, '{dict.home.productHighlights.label}'],
  [/Engineered for Nepalese Soil/g, '{dict.home.productHighlights.title}'],
  [/Our bio-fertilizers and crop care solutions are formulated specifically to address the unique agricultural challenges of Nepal\./g, '{dict.home.productHighlights.description}'],
  [/Explore All Products/g, '{dict.common.productLayout.exploreAll}']
]);

replaceFileContent('components/sections/FarmerEmpowerment.tsx', [
  [/Our Commitment/g, '{dict.home.farmerEmpowerment.label}'],
  [/Empowering the Layman Farmer/g, '{dict.home.farmerEmpowerment.title}'],
  [/AIPL is dedicated to providing comprehensive support beyond product supply\. We offer technical training, soil testing services, and continuous agronomic guidance\./g, '{dict.home.farmerEmpowerment.description}'],
  [/Technical Training/g, '{dict.home.farmerEmpowerment.points.training}'],
  [/Soil Analysis/g, '{dict.home.farmerEmpowerment.points.soil}'],
  [/Ongoing Support/g, '{dict.home.farmerEmpowerment.points.support}']
]);

replaceFileContent('components/sections/ResourcePreview.tsx', [
  [/Knowledge Base/g, '{dict.home.resourcePreview.label}'],
  [/Agricultural Insights & Guides/g, '{dict.home.resourcePreview.title}'],
  [/Access authoritative information on modern farming techniques, crop management, and biological agriculture\./g, '{dict.home.resourcePreview.description}'],
  [/Read Article/g, '{dict.home.resourcePreview.readArticle}'],
  [/View All Resources/g, '{dict.home.resourcePreview.viewAll}']
]);

replaceFileContent('components/sections/CTABanner.tsx', [
  [/Ready to transform your agricultural yield\?/g, '{dict.home.ctaBanner.title}'],
  [/Connect with our agronomic experts to develop a customized biological farming strategy for your land\./g, '{dict.home.ctaBanner.description}'],
  [/Contact Our Experts/g, '{dict.home.ctaBanner.contactUs}'],
  [/Find a Dealer/g, '{dict.home.ctaBanner.findDealer}']
]);
