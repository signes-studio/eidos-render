const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dossierDir = path.join(__dirname, '..', 'img', 'dossier');
const outDir = path.join(__dirname, '..', 'img', 'projects');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(dossierDir);

async function optimize() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const inputPath = path.join(dossierDir, file);
    // Create clean slug name
    let cleanName = file
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9\-_]/g, '-')
      .replace(/-+/g, '-')
      .toLowerCase();
    
    // Strip original extension from base
    const baseName = cleanName.replace(/\.(jpg|jpeg|png)$/, '');

    console.log(`Processing ${file} -> ${baseName}`);

    // Generate 1920px webp & jpg
    await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(outDir, `${baseName}-1920.webp`));

    await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 84, progressive: true })
      .toFile(path.join(outDir, `${baseName}-1920.jpg`));

    // Generate 1000px webp & jpg
    await sharp(inputPath)
      .resize({ width: 1000, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(outDir, `${baseName}-1000.webp`));

    await sharp(inputPath)
      .resize({ width: 1000, withoutEnlargement: true })
      .jpeg({ quality: 84, progressive: true })
      .toFile(path.join(outDir, `${baseName}-1000.jpg`));
  }
  console.log('Optimization complete!');
}

optimize().catch(console.error);
