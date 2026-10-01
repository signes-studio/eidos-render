const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const fileUrl = 'file:///' + path.join(cwd, 'index.html').replace(/\\/g, '/');
const outDir = path.join(cwd, '_tests/motion/screenshots');
const userDir = path.join(cwd, 'scratch/chrome-motion-profile');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outFile = path.join(outDir, 'index-production-hero.png');
const cmd = `"${chromePath}" --headless --disable-gpu --user-data-dir="${userDir}" --window-size=1440,900 "--screenshot=${outFile}" "${fileUrl}"`;
console.log('Running capture of index.html...');
execSync(cmd, { stdio: 'inherit' });
console.log('Saved:', outFile);
