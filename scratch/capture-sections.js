const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const outDir = path.join(cwd, '_tests/motion/screenshots');
const userDir = path.join(cwd, 'scratch/chrome-motion-profile');

const targets = [
  { name: 'prod-manifiesto', url: 'file:///' + path.join(cwd, 'index.html#estudio').replace(/\\/g, '/'), y: 800 },
  { name: 'prod-servicios-forjados', url: 'file:///' + path.join(cwd, 'index.html#servicios').replace(/\\/g, '/'), y: 2200 },
  { name: 'prod-proceso-seccion', url: 'file:///' + path.join(cwd, 'index.html#proceso').replace(/\\/g, '/'), y: 3800 },
  { name: 'prod-solar-contacto', url: 'file:///' + path.join(cwd, 'index.html#contacto').replace(/\\/g, '/'), y: 4600 }
];

targets.forEach(t => {
  const outFile = path.join(outDir, `${t.name}.png`);
  // Using virtual-time-budget to allow render and scroll to settle
  const cmd = `"${chromePath}" --headless --disable-gpu --user-data-dir="${userDir}" --window-size=1440,900 --virtual-time-budget=1500 "--screenshot=${outFile}" "${t.url}"`;
  console.log(`Capturing ${t.name}...`);
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`Saved: ${outFile}`);
  } catch (e) {
    console.error(`Error capturing ${t.name}:`, e.message);
  }
});
