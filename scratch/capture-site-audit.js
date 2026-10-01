const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const outDir = path.join(cwd, '_tests/site-audit');
fs.mkdirSync(outDir, { recursive: true });

const pages = [
  { name: '01-index-desktop', file: 'index.html', size: '1440,900' },
  { name: '01-index-mobile', file: 'index.html', size: '390,844' },
  { name: '02-contacto-desktop', file: 'contacto.html', size: '1440,1050' },
  { name: '02-contacto-mobile', file: 'contacto.html', size: '390,920' },
  { name: '03-proyectos-desktop', file: 'proyectos.html', size: '1440,1100' },
  { name: '04-servicios-desktop', file: 'servicios.html', size: '1440,1100' },
  { name: '05-en-index-desktop', file: 'en/index.html', size: '1440,900' }
];

for (const p of pages) {
  const fileUrl = 'file:///' + path.join(cwd, p.file).replace(/\\/g, '/');
  const outFile = path.join(outDir, `${p.name}.png`);
  const userDir = path.join(cwd, 'scratch/chrome-audit-profile');
  console.log(`Auditing and capturing ${p.name}...`);
  const cmd = `"${chromePath}" --headless --disable-gpu --user-data-dir="${userDir}" --window-size=${p.size} "--screenshot=${outFile}" "${fileUrl}"`;
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`Saved: ${outFile}`);
  } catch (e) {
    console.error(`Error on ${p.name}:`, e.message);
  }
}
console.log('Site audit capture complete.');
