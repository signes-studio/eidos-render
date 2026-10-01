const fs = require('fs');

let content = fs.readFileSync('scratch/sync-international-app-redesign.js', 'utf8');

content = content.replace(/<div class="text-reveal-flow" style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">/g, '<div class="contact-buttons-group text-reveal-flow">');
content = content.replace(/<div class="services-header"[^>]*>/g, '<div class="services-header">');
content = content.replace(/<div class="service-details-inner"[^>]*>/g, '<div class="service-details-inner">');
content = content.replace(/<div class="portfolio-header"[^>]*>/g, '<div class="portfolio-header">');
content = content.replace(/<div class="video-section-grid"[^>]*>/g, '<div class="video-section-grid">');
content = content.replace(/<div class="reels-grid"[^>]*>/g, '<div class="reels-grid">');
content = content.replace(/<div class="feature-split"[^>]*>/g, '<div class="feature-split">');
content = content.replace(/<div class="feature-cards-grid"[^>]*>/g, '<div class="feature-cards-grid">');
content = content.replace(/<div class="text-reveal-flow" style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">/g, '<div class="contact-buttons-group text-reveal-flow">');

fs.writeFileSync('scratch/sync-international-app-redesign.js', content, 'utf8');
console.log('Cleaned sync-international-app-redesign.js successfully.');

// Run the script to write the new files
require('./sync-international-app-redesign.js');
console.log('Regenerated international pages.');
