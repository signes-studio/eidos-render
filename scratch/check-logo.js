const fs = require('fs');

const content = fs.readFileSync('servicios.html', 'utf8');
const match = content.match(/<a[^>]*class=["'][^"']*logo[^"']*["'][\s\S]*?<\/a>/i);
if (match) {
  console.log('Logo match:\n', match[0]);
} else {
  console.log('No logo match found.');
}

const footerMatch = content.match(/<div[^>]*class=["'][^"']*footer-brand[^"']*["'][\s\S]*?<\/div>/i) ||
                    content.match(/<a[^>]*class=["'][^"']*footer-logo[^"']*["'][\s\S]*?<\/a>/i);
if (footerMatch) {
  console.log('\nFooter match:\n', footerMatch[0]);
}
