const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === '_tests' || file.startsWith('.')) continue;
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
console.log(`Processing ${htmlFiles.length} HTML files...`);

const horizonSvg28 = `<svg class="isotype-icon" viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
          <path class="iso-sun" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
          <rect class="iso-line-1" x="6" y="40" width="52" height="5" />
          <rect class="iso-line-2" x="18" y="50" width="28" height="3" />
        </svg>`;

const horizonSvg32 = `<svg class="isotype-icon" viewBox="0 0 64 64" width="32" height="32" aria-hidden="true">
          <path class="iso-sun" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
          <rect class="iso-line-1" x="6" y="40" width="52" height="5" />
          <rect class="iso-line-2" x="18" y="50" width="28" height="3" />
        </svg>`;

let updatedFilesCount = 0;

htmlFiles.forEach(filePath => {
  const relPath = path.relative('.', filePath).replace(/\\/g, '/');
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Compute depth for assets/fonts.css relative link
  const depth = (relPath.match(/\//g) || []).length;
  let fontRelPath = 'assets/fonts.css';
  if (depth === 1) fontRelPath = '../assets/fonts.css';
  if (depth === 2) fontRelPath = '../../assets/fonts.css';

  // 1. Ensure fonts.css is in head
  if (!content.includes('assets/fonts.css')) {
    content = content.replace('</head>', `  <link rel="stylesheet" href="${fontRelPath}">\n</head>`);
    modified = true;
  }

  // 2. Replace older isotype SVGs (circle or earlier versions) with Horizonte doble línea
  // Pattern 1: <svg class="isotype-icon" viewBox="0 0 32 32" ... </svg>
  const oldSvgPattern = /<svg[^>]*class=["'][^"']*isotype-icon[^"']*["'][^>]*>[\s\S]*?<\/svg>/gi;
  if (oldSvgPattern.test(content)) {
    // Check if it's already using 64 64 and M 12,34
    if (!content.includes('M 12,34 A 20,20 0 0,1 52,34 Z')) {
      content = content.replace(oldSvgPattern, (match) => {
        if (match.includes('width="32"') || match.includes('height="32"')) {
          return horizonSvg32;
        }
        return horizonSvg28;
      });
      modified = true;
    }
  }

  // Pattern 2: Logo without isotype-icon class (like old navs with plain svg)
  const plainLogoPattern = /<a\s+href="[^"]*"\s+class="logo"[^>]*>([\s\S]*?)<span\s+class="logo-text">EIDOS\s+RENDER<\/span>\s*<\/a>/gi;
  if (plainLogoPattern.test(content) && !content.includes('M 12,34 A 20,20 0 0,1 52,34 Z')) {
    content = content.replace(plainLogoPattern, (match, inner) => {
      // Reconstruct clean lockup with 28px gap and new SVG
      const hrefMatch = match.match(/href="([^"]*)"/);
      const href = hrefMatch ? hrefMatch[1] : 'index.html';
      return `<a href="${href}" class="logo" aria-label="Eidos Render Inicio">\n        ${horizonSvg28}\n        <span class="logo-text">EIDOS RENDER</span>\n      </a>`;
    });
    modified = true;
  }

  // 3. Clean forbidden fonts in inline style or style blocks
  // Replace 'IBM Plex Mono', monospace
  if (content.includes('IBM Plex Mono')) {
    content = content.replace(/'IBM Plex Mono',\s*monospace/g, "var(--font-prata), Georgia, serif");
    content = content.replace(/IBM Plex Mono/g, "Prata");
    modified = true;
  }

  // Replace 'Space Grotesk', sans-serif on headings
  if (content.includes('Space Grotesk')) {
    // If on h1, h2, h3 -> Bodoni Moda
    content = content.replace(/font-family:\s*'Space Grotesk',\s*sans-serif;/g, (match, offset, str) => {
      // Look at nearby context to determine if it's a heading or a small meta/label
      const before = str.substring(Math.max(0, offset - 100), offset);
      if (before.includes('<h') || before.includes('section-title') || before.includes('heading')) {
        return "font-family: var(--font-bodoni), Georgia, serif; letter-spacing: -0.015em; font-weight: 400;";
      } else {
        return "font-family: var(--font-syncopate), sans-serif; letter-spacing: 0.12em; font-weight: 700;";
      }
    });
    content = content.replace(/'Space Grotesk',\s*sans-serif/g, "var(--font-bodoni), Georgia, serif");
    content = content.replace(/Space Grotesk/g, "Bodoni Moda");
    modified = true;
  }

  // In real-estate-launch.html, replace Barlow Condensed
  if (relPath === 'real-estate-launch.html') {
    if (content.includes('Barlow Condensed')) {
      content = content.replace(/'Barlow Condensed',\s*sans-serif/g, "var(--font-syncopate), sans-serif");
      modified = true;
    }
    if (content.includes("'Amiri',sans-serif")) {
      content = content.replace(/'Amiri',sans-serif/g, "var(--font-jost), sans-serif");
      modified = true;
    }
    // Update root tokens in real-estate-launch
    if (content.includes('--charcoal:#1E1C1A;')) {
      content = content.replace(
        '--charcoal:#1E1C1A;\n  --cream:#EFE9DC;\n  --accent:#B5294E;\n  --ink:var(--charcoal);\n  --paper:var(--cream);',
        '--night:#1F1114;\n  --bone:#EEE6DA;\n  --accent:#8E1B2E;\n  --charcoal:var(--night);\n  --cream:var(--bone);\n  --ink:var(--night);\n  --paper:var(--bone);\n  --font-syncopate:\'Syncopate\',sans-serif;\n  --font-bodoni:\'Bodoni Moda\',serif;\n  --font-prata:\'Prata\',serif;\n  --font-jost:\'Jost\',sans-serif;'
      );
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedFilesCount++;
    console.log(`Updated: ${relPath}`);
  }
});

console.log(`\nCompleted! Total updated files: ${updatedFilesCount}`);
