const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, '..', 'assets', 'fonts');
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

async function downloadFont(url, filename) {
  const dest = path.join(fontsDir, filename);
  console.log(`Downloading ${filename} from ${url}...`);
  const res = await fetch(url, {
    headers: {
      // User-agent to request woff2
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.statusText}`);
  const buf = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buf));
  console.log(`Saved ${filename} (${buf.byteLength} bytes)`);
}

async function extractFontUrls(cssUrl) {
  const res = await fetch(cssUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const css = await res.text();
  const fontFaces = [];
  const regex = /@font-face\s*{([^}]+)}/g;
  let match;
  while ((match = regex.exec(css)) !== null) {
    const block = match[1];
    const familyMatch = block.match(/font-family:\s*['"]?([^'";]+)['"]?/);
    const weightMatch = block.match(/font-weight:\s*([0-9]+)/);
    const styleMatch = block.match(/font-style:\s*([a-z]+)/);
    const urlMatch = block.match(/url\((https:\/\/[^)]+)\)/);
    if (familyMatch && urlMatch) {
      fontFaces.push({
        family: familyMatch[1],
        weight: weightMatch ? weightMatch[1] : '400',
        style: styleMatch ? styleMatch[1] : 'normal',
        url: urlMatch[1]
      });
    }
  }
  return { css, fontFaces };
}

async function main() {
  // 1. Special Gothic
  console.log('Fetching Special Gothic...');
  const sg = await extractFontUrls('https://fonts.googleapis.com/css2?family=Special+Gothic:wght@400;700&display=swap');
  for (const f of sg.fontFaces) {
    const ext = f.url.includes('.woff2') ? 'woff2' : 'ttf';
    const name = `special-gothic-${f.weight}.${ext}`;
    await downloadFont(f.url, name);
    f.local = name;
  }

  // 2. Barlow Condensed (for display & condensed metadata)
  console.log('Fetching Barlow Condensed...');
  const bc = await extractFontUrls('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');
  for (const f of bc.fontFaces) {
    const ext = f.url.includes('.woff2') ? 'woff2' : 'ttf';
    const name = `barlow-condensed-${f.weight}.${ext}`;
    await downloadFont(f.url, name);
    f.local = name;
  }

  // 3. Prata (for refined serif contrast in manifesto)
  console.log('Fetching Prata...');
  const pr = await extractFontUrls('https://fonts.googleapis.com/css2?family=Prata&display=swap');
  for (const f of pr.fontFaces) {
    const ext = f.url.includes('.woff2') ? 'woff2' : 'ttf';
    const name = `prata-400.${ext}`;
    await downloadFont(f.url, name);
    f.local = name;
  }

  // 4. Viga (for statement numerals)
  console.log('Fetching Viga...');
  const vg = await extractFontUrls('https://fonts.googleapis.com/css2?family=Viga&display=swap');
  for (const f of vg.fontFaces) {
    const ext = f.url.includes('.woff2') ? 'woff2' : 'ttf';
    const name = `viga-400.${ext}`;
    await downloadFont(f.url, name);
    f.local = name;
  }

  // Generate self-hosted fonts.css
  let localCss = `/* ==========================================================================
   EIDOS RENDER — Self-Hosted Typography
   Font Display: swap | Zero external requests to Google CDN
   ========================================================================== */

/* 1. Special Gothic (Text & UI) */
@font-face {
  font-family: 'Special Gothic';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/special-gothic-400.woff2') format('woff2'),
       url('fonts/special-gothic-400.ttf') format('truetype');
}

@font-face {
  font-family: 'Special Gothic';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('fonts/special-gothic-700.woff2') format('woff2'),
       url('fonts/special-gothic-700.ttf') format('truetype');
}

/* 2. Special Gothic Condensed / Barlow Condensed (Display Headlines & Tabular Metadata) */
@font-face {
  font-family: 'Special Gothic Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/barlow-condensed-400.woff2') format('woff2');
}

@font-face {
  font-family: 'Special Gothic Condensed';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('fonts/barlow-condensed-500.woff2') format('woff2');
}

@font-face {
  font-family: 'Special Gothic Condensed';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('fonts/barlow-condensed-600.woff2') format('woff2');
}

@font-face {
  font-family: 'Special Gothic Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('fonts/barlow-condensed-700.woff2') format('woff2');
}

/* Fallback mapping alias */
@font-face {
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/barlow-condensed-400.woff2') format('woff2');
}

@font-face {
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('fonts/barlow-condensed-600.woff2') format('woff2');
}

/* 3. Prata (Manifesto Contrast Sentence) */
@font-face {
  font-family: 'Prata';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/prata-400.woff2') format('woff2');
}

/* 4. Viga (Statement Big Numerals) */
@font-face {
  font-family: 'Viga';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/viga-400.woff2') format('woff2');
}
`;

  fs.writeFileSync(path.join(__dirname, '..', 'assets', 'fonts.css'), localCss, 'utf8');
  console.log('Created assets/fonts.css with self-hosted font definitions.');
}

main().catch(console.error);
