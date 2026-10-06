const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/[locale]/(marketing)/resources/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');
const target = `const formattedDate = new Date(resource.publishedAt).toLocaleDateString("en-US", {`;
const replacement = `const formattedDate = new Date(resource.publishedAt).toLocaleDateString(p.locale === "ne" ? "ne-NP" : "en-US", {`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(filePath, content);
  console.log("Updated", filePath);
}
