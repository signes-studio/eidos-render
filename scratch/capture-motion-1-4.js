const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const outDir = path.join(cwd, '_tests/motion/screenshots');
fs.mkdirSync(outDir, { recursive: true });

const tasks = [
  { name: '01-lamas-closed', file: '_tests/motion/01-lamas.html?state=closed', size: '1440,900' },
  { name: '01-lamas-mid', file: '_tests/motion/01-lamas.html?state=mid', size: '1440,900' },
  { name: '01-lamas-open', file: '_tests/motion/01-lamas.html', size: '1440,900' },
  { name: '04-forjados-mid', file: '_tests/motion/04-forjados.html?state=mid', size: '1440,900' },
  { name: '04-forjados-completed', file: '_tests/motion/04-forjados.html?state=completed', size: '1440,900' }
];

const userDir = path.join(cwd, 'scratch/chrome-motion-profile');

for (const t of tasks) {
  const fileUrl = 'file:///' + path.join(cwd, t.file).replace(/\\/g, '/');
  const outFile = path.join(outDir, `${t.name}.png`);
  console.log(`Capturing ${t.name}...`);
  const cmd = `"${chromePath}" --headless --disable-gpu --user-data-dir="${userDir}" --window-size=${t.size} "--screenshot=${outFile}" "${fileUrl}"`;
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`Saved: ${outFile}`);
  } catch (e) {
    console.error(`Error on ${t.name}:`, e.message);
  }
}
console.log('Capture 1 & 4 complete.');
