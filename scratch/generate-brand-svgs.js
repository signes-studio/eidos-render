const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'assets', 'brand');
if (!fs.existsSync(brandDir)) fs.mkdirSync(brandDir, { recursive: true });

// Colors
const CHARCOAL = '#1E1C1A';
const CREAM = '#EFE9DC';
const ACCENT = '#8E1B2E';
const ACCENT_ON_DARK = '#D9788E';

// --------------------------------------------------------------------------
// PROPOSAL A: Encuadre Arquitectónico (Viewfinder Frame + Center Point)
// --------------------------------------------------------------------------
function getSvgA(strokeColor, dotColor, bg = null, size = 32) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}" fill="none">
  ${bg ? `<rect width="32" height="32" fill="${bg}"/>` : ''}
  <!-- Corner Top-Left -->
  <path d="M 4 11 L 4 4 L 11 4" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" class="iso-path iso-tl"/>
  <!-- Corner Top-Right -->
  <path d="M 21 4 L 28 4 L 28 11" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" class="iso-path iso-tr"/>
  <!-- Corner Bottom-Left -->
  <path d="M 4 21 L 4 28 L 11 28" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" class="iso-path iso-bl"/>
  <!-- Corner Bottom-Right -->
  <path d="M 21 28 L 28 28 L 28 21" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" class="iso-path iso-br"/>
  <!-- Center Focal Point -->
  <circle cx="16" cy="16" r="2.5" fill="${dotColor}" class="iso-dot"/>
</svg>`;
}

// --------------------------------------------------------------------------
// PROPOSAL B: E Estructural (Decreasing Slab Cantilevers)
// --------------------------------------------------------------------------
function getSvgB(strokeColor, accentColor, bg = null, size = 32) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}" fill="none">
  ${bg ? `<rect width="32" height="32" fill="${bg}"/>` : ''}
  <!-- Vertical Spine -->
  <line x1="6" y1="5" x2="6" y2="27" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" class="iso-path iso-spine"/>
  <!-- Cantilever 1 (Top - 20px) -->
  <line x1="6" y1="6" x2="26" y2="6" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" class="iso-path iso-slab-1"/>
  <!-- Cantilever 2 (Upper Mid - 15px) -->
  <line x1="6" y1="13" x2="21" y2="13" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" class="iso-path iso-slab-2"/>
  <!-- Cantilever 3 (Lower Mid - 10px) -->
  <line x1="6" y1="20" x2="16" y2="20" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" class="iso-path iso-slab-3"/>
  <!-- Cantilever 4 (Base Anchor - 5px with Accent dot) -->
  <line x1="6" y1="26" x2="11" y2="26" stroke="${strokeColor}" stroke-width="2" stroke-linecap="square" class="iso-path iso-slab-4"/>
  <circle cx="12.5" cy="26" r="1.5" fill="${accentColor}" class="iso-dot"/>
</svg>`;
}

// --------------------------------------------------------------------------
// PROPOSAL C: Horizonte Óptico (Circle Bisected by Horizon Line)
// --------------------------------------------------------------------------
function getSvgC(strokeColor, horizonColor, bg = null, size = 32) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}" fill="none">
  ${bg ? `<rect width="32" height="32" fill="${bg}"/>` : ''}
  <!-- Optics Circle -->
  <circle cx="16" cy="16" r="11" stroke="${strokeColor}" stroke-width="2" class="iso-path iso-circle"/>
  <!-- Horizon Line -->
  <line x1="2" y1="16" x2="30" y2="16" stroke="${horizonColor}" stroke-width="2" stroke-linecap="square" class="iso-path iso-horizon"/>
</svg>`;
}

// --------------------------------------------------------------------------
// FULL LOGOTYPE WITH TYPOGRAPHY (EIDOS RENDER)
// --------------------------------------------------------------------------
function getFullLogo(isotypeSvgInner, textColor, bg = null, width = 240, height = 40) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" fill="none">
  ${bg ? `<rect width="${width}" height="${height}" fill="${bg}"/>` : ''}
  <g transform="translate(4, ${Math.floor((height - 32) / 2)})">
    ${isotypeSvgInner}
  </g>
  <text x="46" y="${Math.floor(height / 2) + 6}" font-family="'Special Gothic Condensed', 'Barlow Condensed', sans-serif" font-size="18" font-weight="600" letter-spacing="0.18em" fill="${textColor}">EIDOS RENDER</text>
</svg>`;
}

// Save all brand files
console.log('Writing brand files...');

// Proposal A files
fs.writeFileSync(path.join(brandDir, 'isotype-a-positive.svg'), getSvgA(CHARCOAL, ACCENT, CREAM));
fs.writeFileSync(path.join(brandDir, 'isotype-a-negative.svg'), getSvgA(CREAM, ACCENT_ON_DARK, CHARCOAL));
fs.writeFileSync(path.join(brandDir, 'isotype-a-monochrome.svg'), getSvgA(CHARCOAL, CHARCOAL));
fs.writeFileSync(path.join(brandDir, 'favicon-a-16.svg'), getSvgA(CHARCOAL, ACCENT, null, 16));
fs.writeFileSync(path.join(brandDir, 'favicon-a-32.svg'), getSvgA(CHARCOAL, ACCENT, null, 32));

// Proposal B files
fs.writeFileSync(path.join(brandDir, 'isotype-b-positive.svg'), getSvgB(CHARCOAL, ACCENT, CREAM));
fs.writeFileSync(path.join(brandDir, 'isotype-b-negative.svg'), getSvgB(CREAM, ACCENT_ON_DARK, CHARCOAL));
fs.writeFileSync(path.join(brandDir, 'isotype-b-monochrome.svg'), getSvgB(CHARCOAL, CHARCOAL));
fs.writeFileSync(path.join(brandDir, 'favicon-b-16.svg'), getSvgB(CHARCOAL, ACCENT, null, 16));
fs.writeFileSync(path.join(brandDir, 'favicon-b-32.svg'), getSvgB(CHARCOAL, ACCENT, null, 32));

// Proposal C files
fs.writeFileSync(path.join(brandDir, 'isotype-c-positive.svg'), getSvgC(CHARCOAL, ACCENT, CREAM));
fs.writeFileSync(path.join(brandDir, 'isotype-c-negative.svg'), getSvgC(CREAM, ACCENT_ON_DARK, CHARCOAL));
fs.writeFileSync(path.join(brandDir, 'isotype-c-monochrome.svg'), getSvgC(CHARCOAL, CHARCOAL));
fs.writeFileSync(path.join(brandDir, 'favicon-c-16.svg'), getSvgC(CHARCOAL, ACCENT, null, 16));
fs.writeFileSync(path.join(brandDir, 'favicon-c-32.svg'), getSvgC(CHARCOAL, ACCENT, null, 32));

console.log('Brand files written successfully.');
