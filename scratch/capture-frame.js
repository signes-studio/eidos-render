const { execSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const fileUrl = 'file:///' + path.join(cwd, '_tests/motion/05-seccion-complete.html').replace(/\\/g, '/');
const outFile = path.join(cwd, '_tests/motion/screenshots/05-seccion-complete.png');
const userDir = path.join(cwd, 'scratch/chrome-motion-profile');

const cmd = `"${chromePath}" --headless --disable-gpu --user-data-dir="${userDir}" --window-size=1440,900 "--screenshot=${outFile}" "${fileUrl}"`;
execSync(cmd, { stdio: 'inherit' });
console.log('Saved:', outFile);
