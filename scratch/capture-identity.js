const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const fileUrl = 'file:///' + path.join(cwd, '_tests/identity/01-isotype.html').replace(/\\/g, '/');
const outDir = path.join(cwd, '_tests/identity/screenshots');
const userDir = path.join(cwd, 'scratch/chrome-identity-profile');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outFile = path.join(outDir, '01-isotype-lockups.png');
const cmd = `"${chromePath}" --headless --disable-gpu --user-data-dir="${userDir}" --window-size=1440,1100 "--screenshot=${outFile}" "${fileUrl}"`;
console.log('Capturing identity test harness...');
execSync(cmd, { stdio: 'inherit' });
console.log('Saved:', outFile);
