const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'content'), function(filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/Agricultural Investment Private Limited/g, 'Agricultural Investment Pvt. Ltd.');
    newContent = newContent.replace(/Agriculture Investment Private Limited/g, 'Agricultural Investment Pvt. Ltd.');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated', filePath);
    }
  }
});

walkDir(path.join(__dirname, 'app'), function(filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/Agricultural Investment Private Limited/g, 'Agricultural Investment Pvt. Ltd.');
    newContent = newContent.replace(/Agriculture Investment Private Limited/g, 'Agricultural Investment Pvt. Ltd.');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated', filePath);
    }
  }
});
