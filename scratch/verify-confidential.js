const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const banned = ['madbit', 'rozafa', 'gare des mines', 'kora lumen', 'kategora', 'altea hills'];
let issues = 0;

function scan(dir) {
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.git', 'scratch'].includes(item)) continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (item.endsWith('.html') && !item.includes('real-estate-launch')) {
      const txt = fs.readFileSync(full, 'utf8').toLowerCase();
      for (const b of banned) {
        if (txt.includes(b)) {
          console.error(`Found banned '${b}' in: ${path.relative(root, full)}`);
          issues++;
        }
      }
    }
  }
}

scan(root);
if (issues === 0) {
  console.log('CONFIDENTIALITY AUDIT PASSED: ZERO confidential project names found in public files.');
} else {
  console.log(`FOUND ${issues} confidentiality violations.`);
}
