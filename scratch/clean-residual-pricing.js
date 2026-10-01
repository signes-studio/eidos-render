const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function replaceInFile(relPath, transforms) {
  const fullPath = path.join(root, relPath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');
  let original = content;

  transforms.forEach(t => {
    if (typeof t.search === 'string') {
      content = content.split(t.search).join(t.replace);
    } else {
      content = content.replace(t.search, t.replace);
    }
  });

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Cleaned:', relPath);
  }
}

// 1. 404.html
replaceInFile('404.html', [
  { search: '<span class="dropdown-header">Tarifas & Catálogo</span>', replace: '<span class="dropdown-header">Servicios & Alcance</span>' },
  { search: '<span>Precios cerrados para promotoras y arquitectos</span>', replace: '<span>Soluciones integrales para promotoras y arquitectos</span>' },
  { search: 'Paquetes y Tarifas', replace: 'Servicios de Lanzamiento' }
]);

// 2. renders-*.html
const localPages = [
  'renders-alicante.html',
  'renders-bilbao.html',
  'renders-madrid.html',
  'renders-malaga.html',
  'renders-sevilla.html',
  'renders-valencia.html'
];

localPages.forEach(p => {
  replaceInFile(p, [
    { search: 'Precios cerrados y entregas ágiles.', replace: 'Soluciones visuales y lanzamientos coordinados.' },
    { search: 'Precios cerrados y plazos optimizados', replace: 'Presupuestos a medida y plazos optimizados' },
    { search: 'Precios cerrados y rigor', replace: 'Presupuesto a medida y rigor' },
    { search: 'Madrid · B2B · Precios Cerrados', replace: 'Madrid · Real Estate Launch · Proyectos a Medida' },
    { search: 'Sevilla · Andalucía · Precios Cerrados', replace: 'Sevilla · Andalucía · Proyectos a Medida' },
    { search: 'Valencia · Estudio Local · Precios Fijos', replace: 'Valencia · Estudio de Lanzamiento · Proyectos a Medida' }
  ]);
});

// renders-malaga.html specific
replaceInFile('renders-malaga.html', [
  {
    search: 'Trabajamos con paquetes de precio cerrado (<a href="https://eidosrender.es/servicios" class="text-link">Inversor, Promotora y Marketing Pro</a>), por lo que siempre sabrás el coste exacto antes de empezar. El precio depende del número de vistas y el nivel de detalle, sin sorpresas ni costes ocultos.',
    replace: 'Trabajamos con presupuestos personalizados según el alcance del proyecto, el número de imágenes exteriores e interiores requeridas y los materiales comerciales necesarios para el lanzamiento, sin desviaciones ni costes imprevistos.'
  },
  {
    search: 'Trabajamos con paquetes de precio cerrado (Inversor, Promotora y Marketing Pro), por lo que siempre sabrás el coste exacto antes de empezar. El precio depende del número de vistas y el nivel de detalle, sin sorpresas ni costes ocultos.',
    replace: 'Trabajamos con presupuestos personalizados según el alcance del proyecto, el número de imágenes exteriores e interiores requeridas y los materiales comerciales necesarios para el lanzamiento, sin desviaciones ni costes imprevistos.'
  }
]);

// blog/como-elegir-estudio-render.html
replaceInFile('blog/como-elegir-estudio-render.html', [
  {
    search: '<strong>Tarifas cerradas por paquete:</strong> Presupuestos con desglose claro que incluyan revisiones',
    replace: '<strong>Presupuestos transparentes a medida:</strong> Propuestas con desglose claro que incluyan revisiones'
  }
]);

console.log('Residual pricing clean completed.');
