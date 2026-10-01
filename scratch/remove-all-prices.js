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
    console.log('Updated:', relPath);
  }
}

// 1. index.html (ES)
replaceInFile('index.html', [
  {
    search: '"description": "Proyectos integrales de lanzamiento comercial para promociones inmobiliarias desde 12.000 €"',
    replace: '"description": "Proyectos integrales de lanzamiento comercial para promociones inmobiliarias"'
  },
  {
    search: `<div class="kicker crimson">Inversión Estimada</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Proyectos integrales.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.8rem, 6vw, 4.8rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.03em; margin-bottom: 16px;">
            DESDE 12.000 € <span style="font-size: clamp(1.2rem, 2vw, 1.8rem); font-weight: 500; color: var(--signal);">+ IVA</span>
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Punto de partida de referencia para promociones que requieren dirección y despliegue coordinado. Presupuesto final según alcance, escala y volumen de producción.
          </p>`,
    replace: `<div class="kicker crimson">Dimensión & Alcance</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Proyectos integrales a medida.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 700; color: var(--paper); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 16px;">
            CALIBRADO A LA ESCALA DEL PROYECTO
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            No creemos en paquetes cerrados ni presupuestos genéricos. Cada promoción inmobiliaria se analiza y dimensiona de forma individual en función del número de tipologías, complejidad volumétrica, material comercial requerido y mercados objetivo.
          </p>`
  },
  {
    search: `<div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.02em; margin-bottom: 16px;">
            DESDE 600 €/MES <span style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); font-weight: 500; color: var(--signal);">+ IVA</span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Inversión publicitaria aparte. Gestión continuada de campañas, renovación de creatividades con material 3D y optimización de contactos cualificados.
          </p>`,
    replace: `<div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: var(--paper); line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;">
            CAMPAÑAS Y GESTIÓN ACTIVA
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Gestión continuada de captación publicitaria, renovación sistemática de creatividades con material 3D y optimización de contactos cualificados según el ritmo de ventas de cada fase de comercialización.
          </p>`
  },
  {
    search: 'Google Ads · Meta Ads · Optimización · Reporting',
    replace: 'Google Ads · Meta Ads · Optimización · Reporting Transparente'
  }
]);

// 2. en/index.html (EN)
replaceInFile('en/index.html', [
  {
    search: '"description": "Comprehensive real estate launch systems from €12,000"',
    replace: '"description": "Comprehensive visual and commercial launch systems for property developments"'
  },
  {
    search: `<div class="kicker crimson">Estimated Investment</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Comprehensive projects.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.8rem, 6vw, 4.8rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.03em; margin-bottom: 16px;">
            FROM €12,000 <span style="font-size: clamp(1.2rem, 2vw, 1.8rem); font-weight: 500; color: var(--signal);">+ VAT</span>
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Baseline benchmark for developments requiring coordinated direction and production across 3D, branding, collateral, and web. Final proposal tailored to scope and asset volume.
          </p>`,
    replace: `<div class="kicker crimson">Scope & Tailored Engagement</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Bespoke comprehensive projects.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 700; color: var(--paper); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 16px;">
            TAILORED TO PROJECT SCALE
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            We reject generic packages and rigid templates. Every development is evaluated individually based on architectural complexity, unit typology variants, commercial collateral requirements, and target buyer markets.
          </p>`
  },
  {
    search: `<div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.02em; margin-bottom: 16px;">
            FROM €600/MONTH <span style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); font-weight: 500; color: var(--signal);">+ VAT</span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Media ad spend billed separately. Continuous campaign management, asset rotation with 3D renderings, and lead flow optimization throughout sales milestones.
          </p>`,
    replace: `<div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: var(--paper); line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;">
            ACTIVE CAMPAIGN MANAGEMENT
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Continuous acquisition campaign management, ongoing creative rotation using 3D renders and video, and proactive lead flow optimization calibrated to your sales velocity targets.
          </p>`
  }
]);

// 3. de/index.html (DE)
replaceInFile('de/index.html', [
  {
    search: '"description": "Ganzheitliche Launch-Systeme für Immobilienprojekte ab 12.000 €"',
    replace: '"description": "Ganzheitliche Launch-Systeme für Immobilienprojekte und Bauträger"'
  },
  {
    search: `<div class="kicker crimson">Geschätzte Investition</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Ganzheitliche Projekte.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.8rem, 6vw, 4.8rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.03em; margin-bottom: 16px;">
            AB 12.000 € <span style="font-size: clamp(1.2rem, 2vw, 1.8rem); font-weight: 500; color: var(--signal);">zzgl. MwSt.</span>
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Orientierungsrahmen für Entwicklungen, die eine koordinierte visuelle Ausrichtung und ganzheitliche Produktion erfordern. Individuelles Angebot je nach Umfang und Produktionsvolumen.
          </p>`,
    replace: `<div class="kicker crimson">Umfang & Dimensionierung</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Ganzheitliche Projekte nach Maß.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 700; color: var(--paper); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 16px;">
            INDIVIDUELL KALIBRIERT
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Wir arbeiten ohne starre Pauschalen oder generische Pakete. Jedes Immobilienprojekt wird individuell anhand des Bauvolumens, der Typologienvielfalt, der erforderlichen Vertriebsunterlagen und der Zielmärkte kalkuliert.
          </p>`
  },
  {
    search: `<div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.02em; margin-bottom: 16px;">
            AB 600 €/MONAT <span style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); font-weight: 500; color: var(--signal);">zzgl. MwSt.</span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Werbebudget separat. Laufende Kampagnenbetreuung, zyklische Erneuerung der Anzeigenmittel mit 3D-Material und Optimierung qualifizierter Käuferanfragen.
          </p>`,
    replace: `<div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: var(--paper); line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;">
            AKTIVE KAMPAGNENFÜHRUNG
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Laufende Betreuung der digitalen Akquise, kontinuierliche Erneuerung der Werbemittel mit 3D-Material und Conversion-Optimierung entlang aller Vertriebsphasen.
          </p>`
  }
]);

// 4. fr/index.html (FR)
replaceInFile('fr/index.html', [
  {
    search: '"description": "Systèmes intégrés de lancement commercial pour programmes immobiliers à partir de 12 000 €"',
    replace: '"description": "Systèmes intégrés de lancement commercial pour programmes immobiliers et promoteurs"'
  },
  {
    search: `<div class="kicker crimson">Investissement Estimé</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Projets intégraux.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.8rem, 6vw, 4.8rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.03em; margin-bottom: 16px;">
            À PARTIR DE 12 000 € <span style="font-size: clamp(1.2rem, 2vw, 1.8rem); font-weight: 500; color: var(--signal);">HT</span>
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Point de repère pour les programmes nécessitant une direction artistique et une production coordonnée. Proposition sur-mesure selon la volumétrie et le nombre de typologies.
          </p>`,
    replace: `<div class="kicker crimson">Dimensionnement & Sur-Mesure</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Projets intégraux sur-mesure.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 700; color: var(--paper); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 16px;">
            CALIBRÉ SELON L'ÉCHELLE DU PROJET
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Nous refusons les formules rigides et les forfaits standardisés. Chaque programme immobilier est étudié et chiffré individuellement selon la volumétrie architecturale, le nombre de typologies, les supports requis et les marchés cibles.
          </p>`
  },
  {
    search: `<div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.02em; margin-bottom: 16px;">
            À PARTIR DE 600 €/MOIS <span style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); font-weight: 500; color: var(--signal);">HT</span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Budget publicitaire média en sus. Gestion suivie des campagnes, renouvellement des créations 3D et optimisation des contacts qualifiés.
          </p>`,
    replace: `<div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; color: var(--paper); line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 16px;">
            PILOTAGE ACTIF DES CAMPAGNES
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Gestion continue des campagnes d'acquisition, renouvellement régulier des créations publicitaires avec les rendus 3D et optimisation du flux d'acquéreurs qualifiés selon vos objectifs de vente.
          </p>`
  }
]);

// 5. servicios.html & servicios/index.html
['servicios.html', 'servicios/index.html'].forEach(f => {
  replaceInFile(f, [
    {
      search: `Proyectos integrales desde 12.000 € + IVA · Gestión de campañas desde 600 €/mes + IVA.<br>
            Dimensionamos nuestra intervención según el volumen de producción y el momento de cada proyecto.`,
      replace: `Dimensionamos nuestra intervención según la escala arquitectónica, el volumen de producción y las necesidades comerciales de cada proyecto.`
    },
    {
      search: `Proyectos integrales desde 12.000 € + IVA · Gestión de campañas desde 600 €/mes + IVA.<br>`,
      replace: ``
    }
  ]);
});

// 6. servicios/captacion.html
replaceInFile('servicios/captacion.html', [
  {
    search: `<span class="kicker crimson">Gestión Mensual</span>
            <div class="display-num" style="color: var(--crimson); margin-bottom: 8px;">Desde 600 €/mes <span style="font-size: 1rem; color: var(--signal);">+ IVA</span></div>
            <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 520px;">
              Inversión publicitaria aparte. La gestión se adapta a la envergadura de la promoción y el ritmo de ventas requerido.
            </p>`,
    replace: `<span class="kicker crimson">Gestión Continuada</span>
            <div class="display-sub" style="color: var(--paper); margin-bottom: 8px;">Campañas y Optimización Activa</div>
            <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 520px;">
              Inversión publicitaria gestionada de forma transparente. La intensidad de las campañas se modula según el ritmo de comercialización y los objetivos de venta de cada fase.
            </p>`
  }
]);

// 7. real-estate-launch.html
replaceInFile('real-estate-launch.html', [
  {
    search: `<div class="price-wrap">
              <div class="price-prefix">Desde</div>
              <div class="price-main">12.000 € <span>+ IVA</span></div>
              <div class="price-detail">
                Presupuesto definitivo según alcance, escala de la promoción y volumen de producción. Punto de partida orientativo dimensionado a las necesidades de cada proyecto.
              </div>
            </div>`,
    replace: `<div class="price-wrap">
              <div class="price-prefix">Presupuesto</div>
              <div class="price-main">A Medida</div>
              <div class="price-detail">
                Presupuesto individual según alcance, escala de la promoción y volumen de producción arquitectónica. Cada proyecto se dimensiona de forma personalizada.
              </div>
            </div>`
  },
  {
    search: `<div class="monthly-price">
          Desde 600 €/mes
        </div>

        <div class="monthly-note">
          + IVA · Inversión publicitaria aparte · Tarifa orientativa según alcance
        </div>`,
    replace: `<div class="monthly-price">
          Gestión Activa
        </div>

        <div class="monthly-note">
          Inversión publicitaria aparte · Dimensionado según ritmo de ventas y mercados objetivo
        </div>`
  }
]);

// 8. llms.txt & llms-full.txt
replaceInFile('llms.txt', [
  {
    search: `- **Indicative Investment**:
  - Comprehensive launch campaigns from €12,000 + VAT (dimensioned to project volume and asset scope).
  - Monthly acquisition management from €600/month + VAT (ad spend excluded).`,
    replace: `- **Engagement Scope**:
  - Comprehensive launch campaigns tailored and quoted individually based on project volume, typology count, and asset scope.
  - Ongoing monthly acquisition management scaled to campaign intensity and sales targets (ad spend excluded).`
  }
]);

replaceInFile('llms-full.txt', [
  {
    search: `- **Indicative Investment**:
  - Full Commercial Launch Program: from €12,000 + VAT.
  - Monthly Acquisition Management: from €600/month + VAT (media budget billed separately).`,
    replace: `- **Engagement Scope**:
  - Full Commercial Launch Program: Bespoke proposals dimensioned to project typology variants, architectural complexity, and asset volume.
  - Monthly Acquisition Management: Tailored monthly retainer calibrated to marketing milestones and sales velocity targets (media budget billed separately).`
  }
]);

// 9. Clean up legacy pricing text in Spanish landing and blog pages
const legacyPages = [
  'obra-nueva.html',
  'vivienda-unifamiliar.html',
  'reforma-de-piso.html',
  'renders-alicante.html',
  'renders-bilbao.html',
  'renders-madrid.html',
  'renders-malaga.html',
  'renders-para-house-flipping.html',
  'renders-sevilla.html',
  'renders-valencia.html'
];

legacyPages.forEach(p => {
  replaceInFile(p, [
    { search: '<span class="dropdown-header">Tarifas & Catálogo</span>', replace: '<span class="dropdown-header">Servicios & Alcance</span>' },
    { search: '<span>Precios cerrados para promotoras y arquitectos</span>', replace: '<span>Soluciones integrales para promotoras y arquitectos</span>' },
    { search: 'Paquetes y Tarifas', replace: 'Servicios de Lanzamiento' },
    { search: 'Ver Paquetes y Tarifas', replace: 'Ver Servicios' },
    { search: 'Precios Cerrados', replace: 'Proyectos a Medida' },
    { search: 'Precios Fijos', replace: 'Proyectos a Medida' },
    { search: 'Precios Transparentes', replace: 'Presupuesto a Medida' },
    { search: '"priceRange": "€€€",', replace: '' },
    { search: 'Precios cerrados y plazos optimizados para que puedas arrancar tus campañas de marketing inmobiliario', replace: 'Propuestas a medida y plazos optimizados para que puedas arrancar tus campañas de comercialización' },
    { search: 'Tarifas cerradas y plazos de entrega estrictos', replace: 'Planificación rigurosa y plazos de entrega coordinados' },
    { search: 'tarifas cerradas sin desviaciones', replace: 'presupuestos a medida y coordinación rigurosa' },
    { search: '¿Cuánto cuesta un render 3D para una promoción en Málaga o Marbella?', replace: '¿Cómo se dimensiona y presupuesta la visualización 3D de una promoción en Málaga o Marbella?' },
    { search: '"name": "¿Cuánto cuesta un render 3D para una promoción en Málaga o Marbella?",', replace: '"name": "¿Cómo se dimensiona la visualización 3D para una promoción en Málaga?",' }
  ]);
});

// Blog directory
const blogDir = path.join(root, 'blog');
if (fs.existsSync(blogDir)) {
  fs.readdirSync(blogDir).forEach(b => {
    if (b.endsWith('.html')) {
      replaceInFile(path.join('blog', b), [
        { search: '<span class="dropdown-header">Tarifas & Catálogo</span>', replace: '<span class="dropdown-header">Servicios & Alcance</span>' },
        { search: '<span>Precios cerrados para promotoras y arquitectos</span>', replace: '<span>Soluciones integrales para promotoras y arquitectos</span>' },
        { search: 'Paquetes y Tarifas', replace: 'Servicios de Lanzamiento' }
      ]);
    }
  });
}

console.log('Price removal complete.');
