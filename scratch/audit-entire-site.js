const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === '_tests' || file === 'chrome-cdp-profile' || file.startsWith('.')) continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles('.');
console.log(`Found ${htmlFiles.length} HTML files.`);

const forbiddenWordsOutsideRealEstateLaunch = ['madbit', 'gare des mines', 'rozafa'];
const confidentialHits = [];
const priceHits = [];
const externalFontHits = [];
const forbiddenFontHits = [];
const logoAuditHits = [];

const priceRegex = /(\b\d+[\.,]?\d*\s*€|\b€\s*\d+|\b\d+\s*EUR\b|\bprecios?\b|\btarifas?\b)/i;
const forbiddenFontsRegex = /(Inter|Roboto|Poppins|Montserrat|Space Grotesk|DM Sans|Outfit|Manrope|Plus Jakarta|Open Sans|system-ui|IBM Plex Mono|JetBrains Mono|Space Mono|Special Gothic|Barlow|Viga)/i;

htmlFiles.forEach(file => {
  const relPath = path.relative('.', file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // 1. Confidential check
  if (relPath !== 'real-estate-launch.html') {
    forbiddenWordsOutsideRealEstateLaunch.forEach(word => {
      if (content.toLowerCase().includes(word.toLowerCase())) {
        confidentialHits.push({ file: relPath, word });
      }
    });
  }

  // 2. Price check (look specifically for numbers followed by €/EUR or explicit pricing plans)
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    // Check for actual currency numbers or pricing mentions
    if (/(\d+[\.,]?\d*\s*€|€\s*\d+|\d+\s*EUR\b|\bprecios?\s*(desde|cerrado|fijo|de\s*paquete)|lista\s*de\s*precios)/i.test(line)) {
      priceHits.push({ file: relPath, lineNum: idx + 1, text: line.trim() });
    }
  });

  // 3. External font links
  if (content.includes('fonts.googleapis.com') || content.includes('fonts.gstatic.com')) {
    externalFontHits.push(relPath);
  }

  // 4. Forbidden fonts in inline style, head or CSS
  const fontMatches = content.match(/\b(Inter|Roboto|Poppins|Montserrat|Space Grotesk|DM Sans|Outfit|Manrope|Plus Jakarta|Open Sans|IBM Plex Mono|JetBrains Mono|Space Mono|Special Gothic|Barlow Condensed|Barlow|Viga)\b/g);
  if (fontMatches) {
    // Filter out words that appear in Spanish text like "inter" unless it's a font reference
    const genuineFontMatches = fontMatches.filter(m => {
      // Check if it's Barlow in real-estate-launch or actual font declaration
      if (m === 'Barlow' && relPath === 'real-estate-launch.html') return false;
      return true;
    });
    if (genuineFontMatches.length > 0) {
      forbiddenFontHits.push({ file: relPath, matches: Array.from(new Set(genuineFontMatches)) });
    }
  }

  // 5. Logo check
  const hasHorizonSvg = content.includes('M 12,34 A 20,20 0 0,1 52,34 Z') || content.includes('isotype-icon');
  const hasWordmark = content.includes('EIDOS RENDER');
  logoAuditHits.push({ file: relPath, hasHorizonSvg, hasWordmark });
});

console.log('\n=== 1. CONFIDENTIAL HITS ===');
console.log(confidentialHits.length ? confidentialHits : 'Clean: 0 hits.');

console.log('\n=== 2. PRICE HITS ===');
console.log(priceHits.length ? priceHits : 'Clean: 0 hits.');

console.log('\n=== 3. EXTERNAL GOOGLE FONTS HITS ===');
console.log(externalFontHits.length ? externalFontHits : 'Clean: 0 hits (all self-hosted).');

console.log('\n=== 4. FORBIDDEN FONTS HITS ===');
console.log(forbiddenFontHits.length ? forbiddenFontHits : 'Clean: 0 hits.');

console.log('\n=== 5. LOGO AUDIT (Pages without new horizon SVG) ===');
const missingLogo = logoAuditHits.filter(x => !x.hasHorizonSvg);
console.log(missingLogo.length ? missingLogo : 'All pages have updated SVG logo.');
