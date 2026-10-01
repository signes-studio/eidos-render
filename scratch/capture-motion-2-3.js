const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const outDir = path.join(cwd, '_tests/motion/screenshots');
fs.mkdirSync(outDir, { recursive: true });

const tasks = [
  { name: '03-sol-horizonte-day', file: '_tests/motion/03-sol-horizonte.html', size: '1440,900' },
  { name: '03-sol-horizonte-crossing', file: '_tests/motion/03-sol-horizonte.html?state=crossing', size: '1440,900' },
  { name: '03-sol-horizonte-night', file: '_tests/motion/03-sol-horizonte.html?state=night', size: '1440,900' },
  { name: '02-sombra-noon', file: '_tests/motion/02-sombra.html', size: '1440,900' },
  { name: '02-sombra-afternoon', file: '_tests/motion/02-sombra.html?state=afternoon', size: '1440,900' }
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
console.log('Capture 2 & 3 complete.');
