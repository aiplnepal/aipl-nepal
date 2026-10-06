const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/[locale]/(marketing)/resources/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /<ArrowLeft className="h-4 w-4" \/> Back to Resources/,
  '<ArrowLeft className="h-4 w-4" /> {dict.resources?.detail?.backToResources || "Back to Resources"}'
);

content = content.replace(
  /Related Reading/,
  '{dict.resources?.detail?.relatedReading || "Related Reading"}'
);

content = content.replace(
  /View All Resources <ArrowRight/g,
  '{dict.resources?.detail?.viewAllResources || "View All Resources"} <ArrowRight'
);

content = content.replace(
  />\s*View All Resources\s*<\/Link>/,
  '>\n                {dict.resources?.detail?.viewAllResources || "View All Resources"}\n              </Link>'
);

content = content.replace(
  /Read Article <ArrowRight/g,
  '{dict.resources?.detail?.readArticle || "Read Article"} <ArrowRight'
);

content = content.replace(
  /Coming soon./g,
  '{dict.resources?.detail?.contentComingSoon || "Content coming soon."}'
);

fs.writeFileSync(filePath, content);
console.log('Replaced resource page text');
