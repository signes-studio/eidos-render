const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const oldFontRegex = /<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?family=Archivo[^"]*"\s+rel="stylesheet">/g;
const newFontTag = '<link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@400;500;600;700&family=Prata&display=swap" rel="stylesheet">';

let updatedCount = 0;

function walkDir(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    if (entry === 'node_modules' || entry === '.git' || entry === 'scratch' || entry.startsWith('.')) continue;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walkDir(full);
    } else if (entry.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');
      if (oldFontRegex.test(content)) {
        content = content.replace(oldFontRegex, newFontTag);
        fs.writeFileSync(full, content, 'utf8');
        updatedCount++;
      }
    }
  }
}

walkDir(root);
console.log(`Updated fonts in ${updatedCount} HTML files.`);
