const fs = require('fs');
const path = require('path');

const dirs = [
  'components/sections'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Add dict to props if not present
    if (content.includes('export function ') && !content.includes('{ dict }: { dict: any }')) {
      content = content.replace(/export function ([A-Za-z0-9_]+)\(\) \{/g, 'export function $1({ dict }: { dict: any }) {');
    }

    fs.writeFileSync(filePath, content);
  });
});

console.log("Updated components in sections to accept dict prop");
