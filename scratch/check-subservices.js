const fs = require('fs');

const subservices = [
  'servicios/infografia-3d.html',
  'servicios/video-3d.html',
  'servicios/branding.html',
  'servicios/material-comercial.html',
  'servicios/web-real-estate.html',
  'servicios/captacion.html',
  'en/services/3d-rendering.html',
  'de/leistungen/3d-rendering.html',
  'fr/services/rendu-3d.html'
];

subservices.forEach(p => {
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, 'utf8');
    const title = c.match(/<title>(.*?)<\/title>/)?.[1];
    const hasSchema = c.includes('application/ld+json');
    const hasCss = c.includes('style.css');
    console.log(`${p.padEnd(38)} | Exists: YES | Schema: ${hasSchema ? 'YES' : 'NO '} | Title: ${title?.slice(0, 40)}`);
  } else {
    console.log(`${p.padEnd(38)} | Exists: NO`);
  }
});
