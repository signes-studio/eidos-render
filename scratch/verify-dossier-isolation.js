const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
let issues = 0;

// 1. Check real-estate-launch.html has noindex
const dossierHtml = fs.readFileSync(path.join(root, 'real-estate-launch.html'), 'utf8');
if (!dossierHtml.includes('noindex')) {
  console.error('ERROR: real-estate-launch.html missing noindex meta tag!');
  issues++;
} else {
  console.log('PASS: real-estate-launch.html has noindex.');
}

// 2. Check robots.txt disallows real-estate-launch
if (fs.existsSync(path.join(root, 'robots.txt'))) {
  const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
  if (!robots.includes('real-estate-launch')) {
    console.error('ERROR: robots.txt does not disallow real-estate-launch!');
    issues++;
  } else {
    console.log('PASS: robots.txt disallows real-estate-launch.');
  }
}

// 3. Check no links to real-estate-launch in other files
function scanLinks(dir) {
  for (const item of fs.readdirSync(dir)) {
    if (['node_modules', '.git', 'scratch'].includes(item)) continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) scanLinks(full);
    else if (item.endsWith('.html') && item !== 'real-estate-launch.html') {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('real-estate-launch')) {
        console.error(`ERROR: Link or mention of real-estate-launch found in: ${path.relative(root, full)}`);
        issues++;
      }
      if (content.includes('img/dossier')) {
        console.error(`ERROR: img/dossier asset referenced in public file: ${path.relative(root, full)}`);
        issues++;
      }
    }
  }
}

scanLinks(root);

if (issues === 0) {
  console.log('ALL AUDITS PASSED: real-estate-launch is completely isolated, unindexed, with zero public links or leaked dossier images.');
} else {
  console.log(`FOUND ${issues} issues in dossier isolation audit.`);
}
