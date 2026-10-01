const fs = require('fs');
let c = fs.readFileSync('real-estate-launch.html', 'utf8');
c = c.replace(/'Space Grotesk'/g, "'Barlow Condensed'");
c = c.replace(/'Archivo'/g, "'Amiri'");
fs.writeFileSync('real-estate-launch.html', c, 'utf8');
console.log('Updated font-family in real-estate-launch.html');
