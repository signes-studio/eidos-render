const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();

const outDir = path.join(cwd, '_tests/redesign');
fs.mkdirSync(outDir, { recursive: true });

const tasks = [
  {
    name: 'index-hero-desktop',
    url: 'file:///' + path.join(cwd, 'index.html').replace(/\\/g, '/'),
    out: path.join(outDir, '01-hero-desktop.png'),
    size: '1440,900'
  },
  {
    name: 'index-hero-mobile',
    url: 'file:///' + path.join(cwd, 'index.html').replace(/\\/g, '/'),
    out: path.join(outDir, '01-hero-mobile.png'),
    size: '390,844'
  },
  {
    name: 'index-gallery-horizontal',
    url: 'file:///' + path.join(cwd, 'index.html').replace(/\\/g, '/'),
    out: path.join(outDir, '02-horizontal-gallery.png'),
    size: '1440,1800'
  },
  {
    name: 'index-layers-comparator',
    url: 'file:///' + path.join(cwd, 'index.html').replace(/\\/g, '/'),
    out: path.join(outDir, '03-layers-comparator.png'),
    size: '1440,2400'
  },
  {
    name: 'index-contact-footer',
    url: 'file:///' + path.join(cwd, 'index.html').replace(/\\/g, '/'),
    out: path.join(outDir, '04-contact-footer.png'),
    size: '1440,1600'
  }
];

for (const t of tasks) {
  console.log(`Capturing ${t.name}...`);
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${t.size} "--screenshot=${t.out}" "${t.url}"`;
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`  -> Saved ${t.out}`);
  } catch (e) {
    console.error(`  Error in ${t.name}:`, e.message);
  }
}
console.log('Test screenshots complete!');
