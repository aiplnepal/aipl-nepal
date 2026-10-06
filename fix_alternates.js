const fs = require('fs');
const path = require('path');

const marketingDir = path.join(__dirname, 'app', '[locale]', '(marketing)');
const pages = ['career', 'contact', 'products', 'quality', 'resources'];

for (const p of pages) {
  const filePath = path.join(marketingDir, p, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if missing
    if (!content.includes('import { getAlternates } from "@/lib/seo";')) {
      content = content.replace(
        'import type { Metadata } from "next";',
        'import { getAlternates } from "@/lib/seo";\nimport type { Metadata } from "next";'
      );
    }
    
    // Replace alternates
    const regex = /alternates: \{\s*canonical: `https:\/\/aipl\.com\.np\/\$\{locale === 'ne' \? '' : locale \+ '\/'\}(.*?)`,\s*\},/g;
    content = content.replace(regex, (match, pathValue) => {
      return `alternates: getAlternates('/${pathValue}', locale),`;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${p}/page.tsx`);
  }
}
