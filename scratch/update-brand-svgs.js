const fs = require('fs');
const path = require('path');

// 1. Isotype Standard (SVG with CSS classes for responsive/theming usage)
const isotypeInlineSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" class="isotype-icon">
  <path class="iso-sun" fill="#8E1B2E" d="M 12,34 A 20,20 0 0,1 52,34 Z"/>
  <rect class="iso-line-1" fill="#1F1114" x="6" y="40" width="52" height="5"/>
  <rect class="iso-line-2" fill="#1F1114" x="18" y="50" width="28" height="3"/>
</svg>`;

// 2. Isotype Positive (sobre fondo crema #EEE6DA)
const isotypePositiveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <!-- Eidos Render — Isotipo Horizonte Doble Línea (Positivo) -->
  <path fill="#8E1B2E" d="M 12,34 A 20,20 0 0,1 52,34 Z"/>
  <rect fill="#1F1114" x="6" y="40" width="52" height="5"/>
  <rect fill="#1F1114" x="18" y="50" width="28" height="3"/>
</svg>`;

// 3. Isotype Negative (sobre fondo carbón #1F1114 o granate #8E1B2E)
const isotypeNegativeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <!-- Eidos Render — Isotipo Horizonte Doble Línea (Negativo) -->
  <path fill="#EEE6DA" d="M 12,34 A 20,20 0 0,1 52,34 Z"/>
  <rect fill="#EEE6DA" x="6" y="40" width="52" height="5"/>
  <rect fill="#EEE6DA" x="18" y="50" width="28" height="3"/>
</svg>`;

// 4. Isotype Monochrome
const isotypeMonochromeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <!-- Eidos Render — Isotipo Horizonte Doble Línea (Monocromo) -->
  <path fill="#1F1114" d="M 12,34 A 20,20 0 0,1 52,34 Z"/>
  <rect fill="#1F1114" x="6" y="40" width="52" height="5"/>
  <rect fill="#1F1114" x="18" y="50" width="28" height="3"/>
</svg>`;

// 5. Favicon: sol + línea 1 (con fondo oscuro pulido para contraste en pestañas claras y oscuras)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <rect width="64" height="64" fill="#1F1114"/>
  <path fill="#C02A43" d="M 12,34 A 20,20 0 0,1 52,34 Z"/>
  <rect fill="#EEE6DA" x="6" y="40" width="52" height="5"/>
</svg>`;

// Write all SVGs
fs.writeFileSync('favicon.svg', faviconSvg, 'utf8');
fs.writeFileSync('assets/brand/favicon.svg', faviconSvg, 'utf8');
fs.writeFileSync('assets/brand/isotype.svg', isotypePositiveSvg, 'utf8');
fs.writeFileSync('assets/brand/isotype-positive.svg', isotypePositiveSvg, 'utf8');
fs.writeFileSync('assets/brand/isotype-negative.svg', isotypeNegativeSvg, 'utf8');
fs.writeFileSync('assets/brand/isotype-monochrome.svg', isotypeMonochromeSvg, 'utf8');
fs.writeFileSync('assets/brand/isotype-dark.svg', isotypeNegativeSvg, 'utf8');

console.log('Brand SVGs and Favicon updated successfully.');
