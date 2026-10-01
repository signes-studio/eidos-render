const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const tasks = [
  {
    name: 'color-dashboard',
    file: '_tests/color/index.html',
    out: '_tests/color/screenshots/color-dashboard.png',
    size: '1600,1200'
  },
  {
    name: 'color-burdeos-desktop',
    file: '_tests/color/burdeos.html',
    out: '_tests/color/screenshots/burdeos-desktop.png',
    size: '1440,1100'
  },
  {
    name: 'color-burdeos-mobile',
    file: '_tests/color/burdeos.html',
    out: '_tests/color/screenshots/burdeos-mobile.png',
    size: '390,844'
  },
  {
    name: 'color-granate-desktop',
    file: '_tests/color/granate.html',
    out: '_tests/color/screenshots/granate-desktop.png',
    size: '1440,1100'
  },
  {
    name: 'color-granate-mobile',
    file: '_tests/color/granate.html',
    out: '_tests/color/screenshots/granate-mobile.png',
    size: '390,844'
  },
  {
    name: 'color-frambuesa-desktop',
    file: '_tests/color/frambuesa.html',
    out: '_tests/color/screenshots/frambuesa-desktop.png',
    size: '1440,1100'
  },
  {
    name: 'color-frambuesa-mobile',
    file: '_tests/color/frambuesa.html',
    out: '_tests/color/screenshots/frambuesa-mobile.png',
    size: '390,844'
  },
  {
    name: 'brand-all-proposals',
    file: 'assets/brand/index.html',
    out: 'assets/brand/screenshots/brand-all-proposals.png',
    size: '1440,3800'
  }
];

const cwd = process.cwd();

for (const task of tasks) {
  const absPath = path.join(cwd, task.file).replace(/\\/g, '/');
  const fileUrl = 'file:///' + absPath;
  const outPath = path.join(cwd, task.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${task.size} "--screenshot=${outPath}" "${fileUrl}"`;
  console.log(`Capturing ${task.name}...`);
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`  -> Saved to ${task.out}`);
  } catch (err) {
    console.error(`  Error capturing ${task.name}:`, err.message);
  }
}
console.log('All screenshots completed!');
