const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const target = `const formattedDate = new Date(resource.publishedAt).toLocaleDateString("en-US", {`;
  const replacement = `const formattedDate = new Date(resource.publishedAt).toLocaleDateString(locale === "ne" ? "ne-NP" : "en-US", {`;
  
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(filePath, content);
    console.log("Updated", filePath);
  }
}

processFile(path.join(__dirname, 'components/sections/ResourceList.tsx'));
processFile(path.join(__dirname, 'components/resources/FeaturedResource.tsx'));
