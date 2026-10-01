const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const outDir = path.join(cwd, '_tests/motion/screenshots');
fs.mkdirSync(outDir, { recursive: true });

const tasks = [
  { name: '05-seccion-mid', file: '_tests/motion/05-seccion.html?state=mid', size: '1440,900' },
  { name: '05-seccion-complete', file: '_tests/motion/05-seccion.html?state=complete', size: '1440,900' },
  { name: '06-planos-center', file: '_tests/motion/06-planos.html', size: '1440,900' },
  { name: '06-planos-offset', file: '_tests/motion/06-planos.html?state=offset', size: '1440,900' }
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
console.log('Capture 5 & 6 complete.');
