const fs = require('fs');
const path = require('path');

const targetDirs = ['de/leistungen', 'en/services', 'fr/services', 'servicios'];
targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    if (!f.endsWith('.html')) return;
    const p = path.join(dir, f);
    const content = fs.readFileSync(p, 'utf8');
    const lines = content.split('\n');
    lines.forEach((l, i) => {
      if (l.includes('Space Grotesk')) {
        console.log(`${p}:${i+1}: ${l.trim()}`);
      }
    });
  });
});
