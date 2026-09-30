const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const htmlFiles = [];
function findHtml(dir) {
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.git', 'scratch'].includes(item)) continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      findHtml(full);
    } else if (item.endsWith('.html')) {
      htmlFiles.push(full);
    }
  }
}

findHtml(rootDir);

let totalIssues = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relFile = path.relative(rootDir, file);
  const fileDir = path.dirname(file);

  // Check <img> src
  const srcMatches = content.matchAll(/(?:src|poster)=["']([^"']+)["']/g);
  for (const match of srcMatches) {
    const assetUrl = match[1];
    if (assetUrl.startsWith('http') || assetUrl.startsWith('//') || assetUrl.startsWith('data:') || assetUrl.startsWith('mailto:') || assetUrl.startsWith('tel:')) continue;
    
    // Clean query/hashes
    const cleanAsset = assetUrl.split('?')[0].split('#')[0];
    const resolvedPath = path.resolve(fileDir, decodeURIComponent(cleanAsset));
    if (!fs.existsSync(resolvedPath)) {
      console.error(`[BROKEN ASSET] In ${relFile}: ${assetUrl} -> ${resolvedPath}`);
      totalIssues++;
    }
  }

  // Check href internal links
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);
  for (const match of hrefMatches) {
    const href = match[1];
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('data:') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue;

    const cleanHref = href.split('?')[0].split('#')[0];
    if (!cleanHref) continue;

    let resolvedPath = path.resolve(fileDir, decodeURIComponent(cleanHref));
    // If no extension, test with .html or /index.html
    if (!fs.existsSync(resolvedPath)) {
      if (fs.existsSync(resolvedPath + '.html')) {
        resolvedPath = resolvedPath + '.html';
      } else if (fs.existsSync(path.join(resolvedPath, 'index.html'))) {
        resolvedPath = path.join(resolvedPath, 'index.html');
      } else {
        console.error(`[BROKEN LINK] In ${relFile}: ${href} -> ${resolvedPath}`);
        totalIssues++;
      }
    }
  }
}

if (totalIssues === 0) {
  console.log(`ALL CHECKED: ${htmlFiles.length} HTML files verified. Zero broken assets or internal links!`);
} else {
  console.log(`FOUND ${totalIssues} issues.`);
}
