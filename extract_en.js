const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('content/products').filter(f => f.endsWith('.ts') && f !== 'index.ts');

const extracted = {};

files.forEach(f => {
  const content = fs.readFileSync(path.join('content/products', f), 'utf-8');
  const slugMatch = content.match(/slug:\s*"([^"]+)"/);
  const nameMatch = content.match(/name:\s*"([^"]+)"/);
  const taglineMatch = content.match(/tagline:\s*"([^"]+)"/);
  const descMatch = content.match(/description:\s*([\s\S]*?)(?=,\n\s*[a-zA-Z]+:)/); // match multi-line description
  
  if (slugMatch) {
    const slug = slugMatch[1];
    
    // Naive extraction for lists
    const componentsMatch = content.match(/components:\s*\[(.*?)\]/s);
    const useCasesMatch = content.match(/useCases:\s*\[(.*?)\]/s);
    const agriculturalPurposeMatch = content.match(/agriculturalPurpose:\s*\[(.*?)\]/s);
    const benefitsMatch = content.match(/benefits:\s*\[(.*?)\]/s);
    const safetyInfoMatch = content.match(/safetyInfo:\s*"([^"]+)"/);

    const parseList = (str) => {
      if (!str) return undefined;
      return str.split(',').map(s => s.trim().replace(/^"|"$/g, '').replace(/\\"/g, '"')).filter(Boolean);
    };

    let desc = '';
    if (descMatch) {
      desc = descMatch[1].trim();
      if (desc.startsWith('"') && desc.endsWith('"')) {
        desc = desc.substring(1, desc.length - 1);
      }
    }

    extracted[slug] = {
      name: nameMatch ? nameMatch[1] : '',
      tagline: taglineMatch ? taglineMatch[1] : '',
      description: desc,
      components: componentsMatch ? parseList(componentsMatch[1]) : undefined,
      useCases: useCasesMatch ? parseList(useCasesMatch[1]) : [],
      agriculturalPurpose: agriculturalPurposeMatch ? parseList(agriculturalPurposeMatch[1]) : undefined,
      benefits: benefitsMatch ? parseList(benefitsMatch[1]) : undefined,
      safetyInfo: safetyInfoMatch ? safetyInfoMatch[1] : undefined,
    };
  }
});

fs.writeFileSync('content/locales/en/products.ts', `export const products = ${JSON.stringify(extracted, null, 2)};\n`);
