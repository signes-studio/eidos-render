const https = require('https');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, '../assets/fonts');
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  const cssUrl = 'https://fonts.googleapis.com/css2?family=Special+Gothic:ital,wght,wdth@0,400..700,75..125;1,400..700,75..125&display=swap';
  const req = https.get(cssUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
  }, res => {
    let css = '';
    res.on('data', d => css += d);
    res.on('end', async () => {
      // Parse font faces
      const blocks = css.split('@font-face').slice(1);
      let i = 0;
      for (const block of blocks) {
        const urlMatch = block.match(/url\((https:\/\/[^)]+\.woff2)\)/);
        const styleMatch = block.match(/font-style:\s*([^;]+);/);
        const style = styleMatch ? styleMatch[1].trim() : 'normal';
        const isLatin = block.includes('U+0000-00FF') || !block.includes('unicode-range');
        
        if (urlMatch) {
          const url = urlMatch[1];
          const fileName = `special-gothic-${style}-${isLatin ? 'latin' : 'ext'}.woff2`;
          const dest = path.join(fontsDir, fileName);
          console.log(`Downloading ${url} -> ${fileName}...`);
          await downloadFile(url, dest);
          i++;
        }
      }
      console.log(`Downloaded ${i} font files for Special Gothic.`);
    });
  });
}

run().catch(console.error);
