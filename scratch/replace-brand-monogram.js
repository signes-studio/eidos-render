const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === '_tests' || file.startsWith('.')) continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles('.');
const horizonSvg28 = `<svg class="isotype-icon" viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
          <path class="iso-sun" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
          <rect class="iso-line-1" x="6" y="40" width="52" height="5" />
          <rect class="iso-line-2" x="18" y="50" width="28" height="3" />
        </svg>`;

let count = 0;

htmlFiles.forEach(file => {
  const relPath = path.relative('.', file).replace(/\\/g, '/');
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  const isSubdir = relPath.startsWith('blog/') || relPath.startsWith('servicios/') || relPath.startsWith('contacto/');
  const targetHref = isSubdir ? '../index.html' : 'index.html';

  // Replace brand-monogram
  const brandMonogramRegex = /<a[^>]*class=["'][^"']*brand-monogram[^"']*["'][^>]*>[\s\S]*?<\/a>/gi;
  if (brandMonogramRegex.test(content)) {
    content = content.replace(brandMonogramRegex, `<a href="${targetHref}" class="logo" aria-label="Eidos Render Inicio">\n        ${horizonSvg28}\n        <span class="logo-text">EIDOS RENDER</span>\n      </a>`);
    modified = true;
  }

  // Update assets/brand/index.html to remove any forbidden fonts
  if (relPath === 'assets/brand/index.html') {
    content = content.replace(/Special Gothic Condensed/g, 'Syncopate');
    content = content.replace(/Special Gothic/g, 'Syncopate');
    content = content.replace(/Barlow Condensed/g, 'Syncopate');
    content = content.replace(/Viga/g, 'Bodoni Moda');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log(`Updated brand monogram in: ${relPath}`);
  }
});

console.log(`Completed updating ${count} files.`);
