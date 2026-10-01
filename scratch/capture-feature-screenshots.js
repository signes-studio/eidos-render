const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();

const outDir = path.join(cwd, '_tests/features/screenshots');
fs.mkdirSync(outDir, { recursive: true });

const features = [
  { id: '01-hero', file: '_tests/features/01-hero.html', deskH: 900, mobH: 844 },
  { id: '02-layer-scrub', file: '_tests/features/02-layer-scrub.html', deskH: 950, mobH: 844 },
  { id: '03-comparator', file: '_tests/features/03-comparator.html', deskH: 950, mobH: 844 },
  { id: '04-horizontal-gallery', file: '_tests/features/04-horizontal-gallery.html', deskH: 900, mobH: 844 },
  { id: '05-contact-curtain', file: '_tests/features/05-contact-curtain.html', deskH: 1400, mobH: 1200 }
];

for (const f of features) {
  const url = 'file:///' + path.join(cwd, f.file).replace(/\\/g, '/');
  
  // Desktop
  const outDesk = path.join(outDir, `${f.id}-desktop.png`);
  console.log(`Capturing ${f.id} Desktop...`);
  try {
    execSync(`"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=1440,${f.deskH} "--screenshot=${outDesk}" "${url}"`, { stdio: 'inherit' });
    console.log(`  -> Saved ${outDesk}`);
  } catch (e) {
    console.error(`  Error in ${f.id} Desktop:`, e.message);
  }

  // Mobile
  const outMob = path.join(outDir, `${f.id}-mobile.png`);
  console.log(`Capturing ${f.id} Mobile...`);
  try {
    execSync(`"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=390,${f.mobH} "--screenshot=${outMob}" "${url}"`, { stdio: 'inherit' });
    console.log(`  -> Saved ${outMob}`);
  } catch (e) {
    console.error(`  Error in ${f.id} Mobile:`, e.message);
  }
}
console.log('All feature screenshots captured successfully!');
