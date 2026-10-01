const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, '..', 'assets', 'fonts');
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

async function downloadFont(url, filename) {
  const dest = path.join(fontsDir, filename);
  console.log(`Downloading ${filename} from ${url}...`);
  const res = await fetch(url, {
    headers: {
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
  // 1. Syncopate (700)
  console.log('Fetching Syncopate 700...');
  const syncopate = await extractFontUrls('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
  for (const f of syncopate.fontFaces) {
    if (f.weight === '700' && f.style === 'normal') {
      await downloadFont(f.url, 'syncopate-700.woff2');
    }
  }

  // 2. Bodoni Moda (400, 500)
  console.log('Fetching Bodoni Moda 400 & 500...');
  const bodoni = await extractFontUrls('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400;1,6..96,500&display=swap');
  for (const f of bodoni.fontFaces) {
    const suffix = f.style === 'italic' ? '-italic' : '';
    await downloadFont(f.url, `bodoni-moda-${f.weight}${suffix}.woff2`);
  }

  // 3. Prata (400)
  console.log('Fetching Prata...');
  const prata = await extractFontUrls('https://fonts.googleapis.com/css2?family=Prata&display=swap');
  for (const f of prata.fontFaces) {
    await downloadFont(f.url, 'prata-400.woff2');
  }

  // 4. Jost (300, 400)
  console.log('Fetching Jost 300 & 400...');
  const jost = await extractFontUrls('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;1,300;1,400&display=swap');
  for (const f of jost.fontFaces) {
    const suffix = f.style === 'italic' ? '-italic' : '';
    await downloadFont(f.url, `jost-${f.weight}${suffix}.woff2`);
  }

  // Generate self-hosted assets/fonts.css
  const fontsCss = `/* ==========================================================================
   EIDOS RENDER — Self-Hosted Luxury Typography System
   Font-display: swap | Zero external network calls
   Families: Syncopate (700), Bodoni Moda (400-500), Prata (400), Jost (300-400)
   ========================================================================== */

/* 1. Syncopate 700 — Wordmark, Navegación, Botones, Etiquetas, Metadatos (MAYÚSCULAS) */
@font-face {
  font-family: 'Syncopate';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('fonts/syncopate-700.woff2') format('woff2');
}

/* 2. Bodoni Moda 400 & 500 — Titulares Grandes (56-200px) */
@font-face {
  font-family: 'Bodoni Moda';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/bodoni-moda-400.woff2') format('woff2');
}

@font-face {
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/bodoni-moda-400-italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Bodoni Moda';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('fonts/bodoni-moda-500.woff2') format('woff2');
}

@font-face {
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url('fonts/bodoni-moda-500-italic.woff2') format('woff2');
}

/* 3. Prata 400 — Entradillas, Manifiesto, Citas y Cifras Grandes (20-40px) */
@font-face {
  font-family: 'Prata';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/prata-400.woff2') format('woff2');
}

/* 4. Jost 300 & 400 — Texto Corrido (16-18px) */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('fonts/jost-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Jost';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url('fonts/jost-300-italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/jost-400.woff2') format('woff2');
}

@font-face {
  font-family: 'Jost';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('fonts/jost-400-italic.woff2') format('woff2');
}
`;

  fs.writeFileSync(path.join(__dirname, '..', 'assets', 'fonts.css'), fontsCss, 'utf8');
  console.log('Successfully wrote assets/fonts.css with self-hosted definitions.');
}

main().catch(console.error);
