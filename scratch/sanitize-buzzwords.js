const fs = require('fs');

function replaceInFile(filePath, searchStr, replaceStr) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced in ${filePath}`);
  } else {
    console.log(`String not found in ${filePath}`);
  }
}

// 1. reforma-de-piso.html
replaceInFile(
  'reforma-de-piso.html',
  'te preparamos los renders en menos de 72 horas para que comiences a comercializarlo de inmediato.',
  'valoramos los renders necesarios para que comiences a comercializarlo sobre proyecto.'
);
replaceInFile(
  'reforma-de-piso.html',
  'Solicitar Presupuesto de Reforma',
  'Hablemos del Proyecto'
);

// 2. renders-para-house-flipping.html
replaceInFile(
  'renders-para-house-flipping.html',
  'Borradores listos en 72 horas para que puedas lanzar el anuncio en Idealista, Fotocasa o tu web de inmediato y testear el precio de salida.',
  'Borradores ágiles para que puedas lanzar el anuncio en Idealista, Fotocasa o tu web sobre proyecto y testear el precio de salida.'
);

// 3. blog/home-staging-virtual.html
replaceInFile(
  'blog/home-staging-virtual.html',
  'Todo el proceso se ejecuta digitalmente en 72 horas.',
  'Todo el proceso se ejecuta digitalmente con agilidad y precisión.'
);

console.log('Sanitization completed.');
