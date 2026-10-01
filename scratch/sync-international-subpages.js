const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function writeFile(relPath, content) {
  const fullPath = path.join(root, relPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Synced:', relPath);
}

// ============================================================================
// PROJECTS DATA (Verified against actual files in img/)
// ============================================================================
const listProjects = [
  {
    num: "01",
    name_es: "Edificio Residencial Urbano",
    name_en: "Urban Residential Building",
    name_de: "Urbanes Wohnensemble",
    name_fr: "Ensemble Résidentiel Urbain",
    sub_es: "Obra Nueva Plurifamiliar · Fachada Principal",
    sub_en: "New Multi-Family Scheme · Main Facade",
    sub_de: "Neubau Mehrfamilienhaus · Hauptfassade",
    sub_fr: "Programme Neuf Collectif · Façade Principale",
    loc_es: "VALENCIA, ES",
    loc_en: "VALENCIA, ES",
    loc_de: "VALENCIA, ES",
    loc_fr: "VALENCE, ES",
    img: "img/render-fachada-edificio-obra-nueva-800.webp"
  },
  {
    num: "02",
    name_es: "Zonas Comunes & Piscina Infinity",
    name_en: "Communal Amenities & Infinity Pool",
    name_de: "Gartenanlagen & Infinity-Pool",
    name_fr: "Espaces Communs & Piscine Infinity",
    sub_es: "Paisajismo · Solárium · Luz de Atardecer",
    sub_en: "Landscaping · Sun Deck · Golden Hour",
    sub_de: "Landschaftsarchitektur · Sonnendeck · Abendlicht",
    sub_fr: "Aménagement Paysager · Solarium · Lumière Dorée",
    loc_es: "MADRID, ES",
    loc_en: "MADRID, ES",
    loc_de: "MADRID, ES",
    loc_fr: "MADRID, ES",
    img: "img/infografia-exterior-zonas-comunes-obra-nueva-800.webp"
  },
  {
    num: "03",
    name_es: "Villa en Ladera Costera",
    name_en: "Hillside Coastal Villa",
    name_de: "Zeitgenössische Küstenvilla",
    name_fr: "Villa en Flanc de Colline",
    sub_es: "Vivienda Unifamiliar · Piscina Desbordante · Integración",
    sub_en: "Single-Family Villa · Infinity Pool · Coastal Integration",
    sub_de: "Einfamilienvilla · Infinity-Pool · Landschaftsintegration",
    sub_fr: "Résidence Individuelle · Piscine Débordante · Vue Panoramique",
    loc_es: "ALICANTE, ES",
    loc_en: "ALICANTE, ES",
    loc_de: "ALICANTE, ES",
    loc_fr: "ALICANTE, ES",
    img: "img/render-exterior-vivienda-unifamiliar-piscina-800.webp"
  },
  {
    num: "04",
    name_es: "Penthouse Doble Altura",
    name_en: "Double-Height Penthouse",
    name_de: "Penthouse mit Galerie",
    name_fr: "Penthouse Double Hauteur",
    sub_es: "Interiorismo Residencial Prime · Luz Natural",
    sub_en: "Prime Residential Interior · Daylight Atmosphere",
    sub_de: "Innenarchitektur · Offener Grundriss · Kuratierte Materialien",
    sub_fr: "Architecture d'Intérieur · Volumes Épurés · Matériaux Nobles",
    loc_es: "MADRID, ES",
    loc_en: "MADRID, ES",
    loc_de: "MADRID, ES",
    loc_fr: "MADRID, ES",
    img: "img/infografia-3d-salon-moderno-doble-altura-800.webp"
  },
  {
    num: "05",
    name_es: "Cocina de Autor con Isla Central",
    name_en: "Architectural Kitchen & Island",
    name_de: "Designerküche mit Kochinsel",
    name_fr: "Cuisine d'Auteur avec Îlot",
    sub_es: "Materiales Nobles · Roble Natural · Microcemento",
    sub_en: "Natural Oak · Continuous Surfaces · Warm Light",
    sub_de: "Naturholz · Fugenlose Flächen · Warmes Licht",
    sub_fr: "Chêne Naturel · Lignes Continues · Lumière Chaude",
    loc_es: "VALENCIA, ES",
    loc_en: "VALENCIA, ES",
    loc_de: "VALENCIA, ES",
    loc_fr: "VALENCE, ES",
    img: "img/render-cocina-moderna-isla-madera-800.webp"
  },
  {
    num: "06",
    name_es: "Master Suite & Vestidor",
    name_en: "Master Suite & Dressing Room",
    name_de: "Master Suite & Ankleide",
    name_fr: "Master Suite & Dressing",
    sub_es: "Atmósfera Serena · Texturas Textiles · Noche y Día",
    sub_en: "Refined Finishes · Serene Atmosphere · Morning Light",
    sub_de: "Feine Texturen · Ruhige Atmosphäre · Morgenlicht",
    sub_fr: "Matières Textiles · Atmosphère Apaisée · Lumière Matinale",
    loc_es: "SUITE PRIME",
    loc_en: "PRIME SUITE",
    loc_de: "PRIME SUITE",
    loc_fr: "SUITE PRIME",
    img: "img/infografia-dormitorio-principal-render-inmobiliario-800.webp"
  },
  {
    num: "07",
    name_es: "Baño Principal Minimalista",
    name_en: "Minimalist Master Bath",
    name_de: "Minimalistisches Master-Bad",
    name_fr: "Salle de Bain Principale Épurée",
    sub_es: "Ducha a Ras de Suelo · Grifería Empotrada",
    sub_en: "Flush Walk-in Shower · Concealed Brassware",
    sub_de: "Bodengleiche Dusche · Unterputz-Armaturen",
    sub_fr: "Douche à l'Italienne · Robinetterie Encastrée",
    loc_es: "DETALLE",
    loc_en: "DETAIL",
    loc_de: "DETAIL",
    loc_fr: "DÉTAIL",
    img: "img/render-bano-moderno-ducha-minimalista-800.webp"
  },
  {
    num: "08",
    name_es: "Zona de Estudio & Lectura",
    name_en: "Study & Library Nook",
    name_de: "Arbeits- & Bibliotheksbereich",
    name_fr: "Espace Bureau & Bibliothèque",
    sub_es: "Mobiliario a Medida · Soluciones Integradas",
    sub_en: "Bespoke Joinery · Integrated Architectural Solutions",
    sub_de: "Maßgefertigte Einbauten · Integrierte Lösungen",
    sub_fr: "Mobilier Sur Mesure · Intégration Architecturale",
    loc_es: "INTERIOR",
    loc_en: "INTERIOR",
    loc_de: "INNENBEREICH",
    loc_fr: "INTÉRIEUR",
    img: "img/render-zona-estudio-armarios-empotrados-800.webp"
  }
];

const gridProjects = [
  {
    num: "01",
    name_es: "Edificio Residencial Urbano",
    name_en: "Urban Residential Building",
    name_de: "Urbanes Wohnensemble",
    name_fr: "Ensemble Résidentiel Urbain",
    sub_es: "Obra Nueva Plurifamiliar · Dirección Visual · Integración Urbana",
    sub_en: "Multi-Family New Build · Visual Direction · Urban Integration",
    sub_de: "Mehrfamilienhaus · Visuelle Regie · Urbane Integration",
    sub_fr: "Logement Collectif · Direction Artistique · Insertion Urbaine",
    loc_es: "Valencia, ES",
    loc_en: "Valencia, ES",
    loc_de: "Valencia, ES",
    loc_fr: "Valence, ES",
    imgWebp: "img/render-fachada-edificio-obra-nueva.webp",
    img1600: "img/render-fachada-edificio-obra-nueva-1600.jpg",
    layout: "full",
    ratio: "ratio-21-9"
  },
  {
    num: "02",
    name_es: "Zonas Comunes & Piscina Infinity",
    name_en: "Communal Amenities & Infinity Pool",
    name_de: "Gartenanlagen & Infinity-Pool",
    name_fr: "Espaces Communs & Piscine Infinity",
    sub_es: "Piscinas & Paisajismo",
    sub_en: "Rooftop Pool · Solarium",
    sub_de: "Landschaftsarchitektur · Solarium",
    sub_fr: "Aménagement Paysager · Solarium",
    loc_es: "Madrid, ES",
    loc_en: "Madrid, ES",
    loc_de: "Madrid, ES",
    loc_fr: "Madrid, ES",
    imgWebp: "img/infografia-exterior-zonas-comunes-obra-nueva.webp",
    img1600: "img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg",
    layout: "split-left",
    ratio: "ratio-4-5"
  },
  {
    num: "03",
    name_es: "Villa en Ladera Costera",
    name_en: "Hillside Coastal Villa",
    name_de: "Zeitgenössische Küstenvilla",
    name_fr: "Villa en Flanc de Colline",
    sub_es: "Arquitectura Unifamiliar · Costa Blanca",
    sub_en: "Single-Family Villa · Topographic Integration",
    sub_de: "Einfamilienvilla · Hangintegration · Meerblick",
    sub_fr: "Résidence Individuelle · Intégration Topographique",
    loc_es: "Alicante, ES",
    loc_en: "Alicante, ES",
    loc_de: "Alicante, ES",
    loc_fr: "Alicante, ES",
    imgWebp: "img/render-exterior-vivienda-unifamiliar-piscina.webp",
    img1600: "img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg",
    layout: "split-right",
    ratio: "ratio-16-9"
  },
  {
    num: "04",
    name_es: "Penthouse Doble Altura",
    name_en: "Double-Height Penthouse",
    name_de: "Penthouse mit Galerie",
    name_fr: "Penthouse Double Hauteur",
    sub_es: "Interiorismo Prime · Atmósfera Diurna",
    sub_en: "Prime Residential Interior · Daylight Atmosphere",
    sub_de: "Innenarchitektur · Offener Grundriss · Kuratierte Materialien",
    sub_fr: "Architecture d'Intérieur · Volumes Épurés · Matériaux Nobles",
    loc_es: "Madrid, ES",
    loc_en: "Madrid, ES",
    loc_de: "Madrid, ES",
    loc_fr: "Madrid, ES",
    imgWebp: "img/infografia-3d-salon-moderno-doble-altura.webp",
    img1600: "img/infografia-3d-salon-moderno-doble-altura-1600.jpg",
    layout: "full",
    ratio: "ratio-21-9"
  },
  {
    num: "05",
    name_es: "Cocina de Autor con Isla",
    name_en: "Architectural Kitchen & Island",
    name_de: "Designerküche mit Kochinsel",
    name_fr: "Cuisine d'Auteur avec Îlot",
    sub_es: "Madera & Piedra Natural",
    sub_en: "Natural Oak · Continuous Surfaces",
    sub_de: "Naturholz · Fugenlose Flächen",
    sub_fr: "Chêne Naturel · Lignes Continues",
    loc_es: "Valencia, ES",
    loc_en: "Valencia, ES",
    loc_de: "Valencia, ES",
    loc_fr: "Valence, ES",
    imgWebp: "img/render-cocina-moderna-isla-madera.webp",
    img1600: "img/render-cocina-moderna-isla-madera-1600.jpg",
    layout: "half",
    ratio: "ratio-16-9"
  },
  {
    num: "06",
    name_es: "Master Suite Residencial",
    name_en: "Master Suite & Dressing",
    name_de: "Master Suite & Ankleide",
    name_fr: "Master Suite Résidentielle",
    sub_es: "Atmósfera Serena · Texturas",
    sub_en: "Serene Atmosphere · Custom Textures",
    sub_de: "Ruhige Atmosphäre · Feine Texturen",
    sub_fr: "Atmosphère Apaisée · Matières Nobles",
    loc_es: "Prime",
    loc_en: "Prime",
    loc_de: "Prime",
    loc_fr: "Prime",
    imgWebp: "img/infografia-dormitorio-principal-render-inmobiliario.webp",
    img1600: "img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg",
    layout: "half",
    ratio: "ratio-16-9"
  }
];

// ============================================================================
// SERVICES DATA
// ============================================================================
const servicesData = {
  en: {
    kicker: "Integrated Practice",
    title: "One vision.<br>All commercial facets.",
    subtitle: "We develop the complete visual and marketing ecosystem required for real estate developments to present, differentiate, and sell out. Scaled precisely to each project's architectural ambition.",
    items: [
      {
        num: "01",
        title: "Direction & Brand Identity",
        href: "services/branding.html",
        whatWeDo: "We craft the creative narrative, positioning, and visual identity of the development before rendering production commences.",
        deliver: "Commercial naming, visual brand guidelines, typographic hierarchy, colour palettes, and architectural hoarding design.",
        why: "To establish an unmistakable luxury identity that commands premium square-metre value and preserves aesthetic coherence across every touchpoint."
      },
      {
        num: "02",
        title: "3D Architectural Visualization",
        href: "services/3d-rendering.html",
        whatWeDo: "Photorealistic modeling and rendering from architectural drawings and BIM models. We produce comprehensive visual suites: daylight & twilight exterior elevations, expansive interiors, communal amenities, and fine materiality vignettes.",
        deliver: "Native 4K resolution CGI for editorial publications and large-format physical sales collateral, perfectly matched to accurate geo-located sunlight.",
        why: "To communicate architectural intent before construction begins, validate forms, and evoke absolute conviction in discerning buyers and investment committees."
      },
      {
        num: "03",
        title: "3D Cinematic Film & Reels",
        href: "services/3d-video.html",
        whatWeDo: "Cinematic architectural walkthroughs, fluid motion sequences, and high-impact vertical (9:16) and horizontal (16:9) reels.",
        deliver: "Ultra HD master files with bespoke colour grading, atmospheric soundscapes, and digital-first cuts tailored for sales suites and private client previews.",
        why: "To reveal the true volumetric qualities of the scheme, deepen emotional resonance, and dramatically increase dwell time and commercial retention."
      },
      {
        num: "04",
        title: "Commercial Sales Collateral",
        href: "services/marketing-collateral.html",
        whatWeDo: "We translate technical blueprints into intuitive, high-end sales tools that empower sales agents and inspire private clients.",
        deliver: "Hardcover and digital interactive sales dossiers, fully styled 2D and 3D floor plans, neighbourhood maps, and individual apartment specification cards.",
        why: "To streamline agent negotiations and furnish prospective buyers with impeccably crafted documentation that reinforces their purchase certainty."
      },
      {
        num: "05",
        title: "Development Websites",
        href: "services/real-estate-web.html",
        whatWeDo: "Bespoke digital platforms engineered for luxury property developments, optimized for speed, architectural clarity, and qualified inquiry generation.",
        deliver: "Fast-loading web platform featuring interactive floor-by-floor unit selectors, downloadable brochures, precise analytics, and direct sales CRM integration.",
        why: "To serve as the primary digital flagship of the development, capturing and converting both domestic and international high-net-worth inquiries."
      },
      {
        num: "06",
        title: "Buyer Acquisition Campaigns",
        href: "services/acquisition.html",
        whatWeDo: "Hyper-targeted acquisition campaigns across Google Ads and Meta Ads utilizing the 3D imagery and video assets produced for the development.",
        deliver: "Targeted geolocated campaigns, continuous creative optimization, and transparent reporting on qualified buyer leads.",
        why: "To drive qualified commercial interest from day one of launch and accelerate unit reservation velocity."
      }
    ]
  },
  de: {
    kicker: "Ganzheitliches Leistungsbild",
    title: "Eine Vision.<br>Alle Bausteine.",
    subtitle: "Wir entwickeln das vollständige visuelle und kommerzielle System, das ein Neubauprojekt benötigt, um sich abzuheben und erfolgreich vermarktet zu werden. Präzise abgestimmt auf die architektonische Dimension jedes Vorhabens.",
    items: [
      {
        num: "01",
        title: "Kreativdirektion & Markenidentität",
        href: "leistungen/branding.html",
        whatWeDo: "Wir definieren das kreative Leitmotiv, die Positionierung und das visuelle Erscheinungsbild des Projekts, bevor die 3D-Produktion beginnt.",
        deliver: "Projekt-Naming, Markenhandbuch, typografisches System, Farbwelten und Gestaltungsrichtlinien für Showroom und Baustellenbanner.",
        why: "Schaffung einer unverwechselbaren Immobilienmarke, die den wahren Wert des Quadratmeters widerspiegelt und höchste Konsistenz sichert."
      },
      {
        num: "02",
        title: "3D-Architekturvisualisierung",
        href: "leistungen/3d-rendering.html",
        whatWeDo: "Präzise 3D-Modellierung und fotorealistisches Rendering auf Basis von Ausführungs- und BIM-Plänen. Umfassende Bildserien: Außenansichten bei Tag und Dämmerung, anspruchsvolles Interieur, Gemeinschaftszonen und konstruktive Details.",
        deliver: "Native 4K-Renderings für hochwertige Druckwerke und Großflächenwerbung, mit naturgetreuer Licht- und Materialberechnung.",
        why: "Vermittlung der architektonischen Qualität vor Baubeginn, Absicherung von Volumetrien und Erzeugung emotionaler Kaufbereitschaft bei Eigennutzern und Investoren."
      },
      {
        num: "03",
        title: "3D-Film & Animation",
        href: "leistungen/3d-video.html",
        whatWeDo: "Cinematische Architekturfilme, kontinuierliche virtuelle Rundgänge und dynamische Sequenzen in horizontalem 16:9 und vertikalem 9:16 Format.",
        deliver: "Hochauflösende Master-Dateien mit cinematischem Color-Grading, ambientem Sounddesign und optimierten Schnitten für Vertriebspräsentationen und Online-Kampagnen.",
        why: "Veranschaulichung der räumlichen Zusammenhänge, maximale emotionale Bindung und gesteigerte Verweildauer bei Kaufinteressenten."
      },
      {
        num: "04",
        title: "Verkaufsunterlagen & Exposés",
        href: "leistungen/vermarktungsunterlagen.html",
        whatWeDo: "Wir überführen technische Ausführungspläne in ansprechende und verkaufsfördernde Vertriebswerkzeuge für Makler und Vertriebsteams.",
        deliver: "Redaktionelle Verkaufsdossiers (interaktives PDF und Printlayout), möblierte 2D/3D-Grundrisse, Lagepläne und typologische Factsheets.",
        why: "Entlastung des Vertriebs und Bereitstellung einer transparenten Dokumentation, die die Kaufentscheidung nachhaltig festigt."
      },
      {
        num: "05",
        title: "Projekt-Websites",
        href: "leistungen/projekt-website.html",
        whatWeDo: "Maßgeschneiderte Webplattformen für Neubauprojekte, optimiert für architektonische Klarheit und die Generierung qualifizierter Anfragen.",
        deliver: "Performante Website mit interaktivem Wohnungsfinder nach Etagen, Exposé-Download und direkter Anbindung an das Kunden-CRM.",
        why: "Zentraler digitaler Knotenpunkt der Vermarktung zur Kanalisierung aller nationalen und internationalen Anfragen."
      },
      {
        num: "06",
        title: "Gezielte Käuferakquise",
        href: "leistungen/digitale-vermarktung.html",
        whatWeDo: "Zielgerichtete Ansprache solventer Eigennutzer und Kapitalanleger über Google Ads und Meta Ads mit Render-basierten Werbemitteln.",
        deliver: "Segmentierte Kampagnen nach Region und Kaufabsicht, dynamische Bildtests und transparente Berichte über qualifizierte Kontakte.",
        why: "Aktivierung des Vertriebsflusses ab Tag eins des Vermarktungsstarts zur Beschleunigung der Reservierungsquote."
      }
    ]
  },
  fr: {
    kicker: "Prestation Globale",
    title: "Une même vision.<br>Toutes les dimensions.",
    subtitle: "Nous concevons l'ensemble des composantes visuelles et commerciales nécessaires au rayonnement et au succès d'un programme immobilier. Une démarche dimensionnée à l'exigence de chaque projet.",
    items: [
      {
        num: "01",
        title: "Direction Artistique & Identité",
        href: "services/branding.html",
        whatWeDo: "Nous définissons le récit de marque, le positionnement et l'univers visuel du programme avant d'entamer la production 3D.",
        deliver: "Naming du programme, charte graphique, règles typographiques, palettes chromatiques et habillage de bulle de vente et palissades.",
        why: "Créer une marque immobilière forte qui valorise le prix au mètre carré et assure une élégance sans faille sur tous les supports."
      },
      {
        num: "02",
        title: "Perspectives 3D Architecturales",
        href: "services/rendu-3d.html",
        whatWeDo: "Modélisation rigoureuse et rendu photoréaliste à partir des plans d'architecte et fichiers BIM. Réalisation de séries complètes : façades diurnes et crépusculaires, intérieurs épurés, jardins et détails de matières.",
        deliver: "Rendus en résolution native 4K pour éditions d'art et panneaux de chantier, bénéficiant d'un éclairage géographique rigoureux.",
        why: "Donner vie au projet avant l'ouverture du chantier, valider les volumes et convaincre acquéreurs et comités d'investissement."
      },
      {
        num: "03",
        title: "Film 3D & Animation Cinématographique",
        href: "services/video-3d.html",
        whatWeDo: "Animations architecturales cinématiques, parcours virtuels continus et formats verticaux (9:16) et horizontaux (16:9).",
        deliver: "Fichiers haute définition avec étalonnage soigné, bande sonore immersive et déclinaisons optimisées pour l'espace de vente et le digital.",
        why: "Révéler la volumétrie réelle de l'opération, susciter l'émotion et prolonger l'attention des acquéreurs potentiels."
      },
      {
        num: "04",
        title: "Supports Commerciaux & Plaquettes",
        href: "services/supports-commerciaux.html",
        whatWeDo: "Nous transformons les plans techniques en outils d'aide à la vente clairs, séduisants et valorisants pour les commercialisateurs.",
        deliver: "Plaquettes de prestige (PDF interactif et mise en page d'impression), plans 2D/3D meublés et texturés, plans de situation et fiches typologiques.",
        why: "Faciliter la vente et offrir aux acquéreurs un dossier complet et prestigieux qui conforte leur décision d'achat."
      },
      {
        num: "05",
        title: "Sites Web de Promotion",
        href: "services/site-web-immobilier.html",
        whatWeDo: "Conception et développement sur mesure de la plateforme web du programme, optimisée pour la présentation architecturale et la conversion de leads.",
        deliver: "Site ultra-rapide avec sélecteur interactif de logements par étage, plans téléchargeables et synchronisation CRM.",
        why: "Constituer le navire amiral digital de l'opération et capter les demandes qualifiées nationales et internationales."
      },
      {
        num: "06",
        title: "Acquisition d'Acquéreurs Qualifiés",
        href: "services/acquisition.html",
        whatWeDo: "Ciblage précis d'acquéreurs résidents et d'investisseurs via Google Ads et Meta Ads au moyen des perspectives 3D conçues pour l'opération.",
        deliver: "Stratégie par bassin géographique et profil patrimonial, tests créatifs et reporting transparent des contacts qualifiés.",
        why: "Accélérer le rythme de commercialisation dès le premier jour de lancement et atteindre rapidement le seuil de pré-commercialisation."
      }
    ]
  }
};

// ============================================================================
// TEMPLATE GENERATOR FOR PROJECTS PAGES
// ============================================================================
function generateProjectsHtml(lang, depth) {
  const rootRel = depth === 1 ? '../' : '../../';
  const prefix = depth === 1 ? '' : '../';

  const t = {
    en: {
      lang: 'en',
      title: 'Curated 3D Projects | Eidos Render',
      desc: 'Selected 3D architectural visualisations, villas, and residential developments across Europe.',
      kicker: 'Production Archive',
      h1: 'Selected Projects.',
      intro: 'A curated selection of residential developments, signature villas, and landmark spaces. Each commission approached with uncompromising architectural fidelity.',
      viewLabel: 'View:',
      viewList: 'Typographic List',
      viewGrid: 'Editorial Grid',
      ctaKicker: 'Direct Engagement',
      ctaTitle: 'From the drawing board to launch.',
      ctaBtn: "LET'S DISCUSS THE PROJECT →",
      navProjects: 'Projects',
      navServices: 'Services',
      navProcess: 'Process',
      navStudio: 'Studio',
      navContact: 'Contact',
      navCta: "LET'S DISCUSS THE PROJECT →",
      links: {
        projects: prefix + 'projects.html',
        services: prefix + 'services.html',
        process: prefix + './#proceso',
        studio: prefix + './#estudio',
        contact: prefix + 'contact.html',
        langEs: rootRel + 'proyectos.html',
        langEn: prefix + 'projects.html',
        langDe: rootRel + 'de/projekte.html',
        langFr: rootRel + 'fr/projets.html'
      }
    },
    de: {
      lang: 'de',
      title: 'Ausgewählte 3D-Projekte | Eidos Render',
      desc: 'Kuratierte Auswahl an 3D-Architekturvisualisierungen, Villen und Wohnanlagen in ganz Europa.',
      kicker: 'Projektarchiv',
      h1: 'Ausgewählte Projekte.',
      intro: 'Eine anspruchsvolle Auswahl an Wohnbauprojekten, Villen und Landmark-Entwicklungen. Jeder Auftrag ausgeführt mit tiefem Respekt vor der Architektur.',
      viewLabel: 'Ansicht:',
      viewList: 'Typografische Liste',
      viewGrid: 'Editorial-Raster',
      ctaKicker: 'Direkter Dialog',
      ctaTitle: 'Vom Entwurf zum Verkaufsstart.',
      ctaBtn: 'PROJEKT BESPRECHEN →',
      navProjects: 'Projekte',
      navServices: 'Leistungen',
      navProcess: 'Prozess',
      navStudio: 'Studio',
      navContact: 'Kontakt',
      navCta: 'PROJEKT BESPRECHEN →',
      links: {
        projects: prefix + 'projekte.html',
        services: prefix + 'leistungen.html',
        process: prefix + './#prozess',
        studio: prefix + './#estudio',
        contact: prefix + 'kontakt.html',
        langEs: rootRel + 'proyectos.html',
        langEn: rootRel + 'en/projects.html',
        langDe: prefix + 'projekte.html',
        langFr: rootRel + 'fr/projets.html'
      }
    },
    fr: {
      lang: 'fr',
      title: 'Sélection de Projets 3D | Eidos Render',
      desc: 'Sélection de rendus 3D architecturaux, villas contemporaines et programmes immobiliers en Europe.',
      kicker: 'Archives de Production',
      h1: 'Projets Sélectionnés.',
      intro: 'Une sélection exigeante de réalisations résidentielles, villas contemporaines et projets d\'exception. Chaque mission abordée dans le strict respect de l\'architecture.',
      viewLabel: 'Affichage :',
      viewList: 'Liste Typographique',
      viewGrid: 'Grille Éditoriale',
      ctaKicker: 'Échange Direct',
      ctaTitle: 'Du dessin architectural au lancement.',
      ctaBtn: 'PARLONS DU PROJET →',
      navProjects: 'Projets',
      navServices: 'Services',
      navProcess: 'Méthode',
      navStudio: 'Studio',
      navContact: 'Contact',
      navCta: 'PARLONS DU PROJET →',
      links: {
        projects: prefix + 'projets.html',
        services: prefix + 'services.html',
        process: prefix + './#prozess',
        studio: prefix + './#estudio',
        contact: prefix + 'contact.html',
        langEs: rootRel + 'proyectos.html',
        langEn: rootRel + 'en/projects.html',
        langDe: rootRel + 'de/projekte.html',
        langFr: prefix + 'projets.html'
      }
    }
  }[lang];

  const canonical = depth === 1 
    ? `https://eidosrender.es/${lang}/${lang === 'de' ? 'projekte' : (lang === 'fr' ? 'projets' : 'projects')}`
    : `https://eidosrender.es/${lang}/${lang === 'de' ? 'projekte' : (lang === 'fr' ? 'projets' : 'projects')}/`;

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N6R4S8NC');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}">
  <link rel="canonical" href="${canonical}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/proyectos">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/projects">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/projekte">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/projets">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/projects">

  <!-- Multilingual & Geo-routing -->
  <script src="${rootRel}js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.desc}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="${rootRel}favicon.png">
  <link rel="shortcut icon" href="${rootRel}favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="${rootRel}apple-touch-icon.png">

  <!-- Tipografía Editorial (Prata + Barlow Condensed + Amiri) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@400;500;600;700&family=Prata&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="${rootRel}style.css">
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="${prefix}./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="${t.links.projects}" class="active">${t.navProjects}</a></li>
          <li><a href="${t.links.services}">${t.navServices}</a></li>
          <li><a href="${t.links.process}">${t.navProcess}</a></li>
          <li><a href="${t.links.studio}">${t.navStudio}</a></li>
          <li><a href="${t.links.contact}">${t.navContact}</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="${t.links.langEs}" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          ${lang === 'en' ? '<span class="active" data-lang="en">EN</span>' : `<a href="${t.links.langEn}" data-lang="en" onclick="window.setLang('en')">EN</a>`}
          <span class="lang-divider">/</span>
          ${lang === 'de' ? '<span class="active" data-lang="de">DE</span>' : `<a href="${t.links.langDe}" data-lang="de" onclick="window.setLang('de')">DE</a>`}
          <span class="lang-divider">/</span>
          ${lang === 'fr' ? '<span class="active" data-lang="fr">FR</span>' : `<a href="${t.links.langFr}" data-lang="fr" onclick="window.setLang('fr')">FR</a>`}
        </div>

        <a href="${t.links.contact}" class="nav-cta">
          ${t.navCta}
        </a>
      </div>

      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Language selector">
        <a href="${t.links.langEs}" data-lang="es" onclick="window.setLang('es')">ES</a>
        ${lang === 'en' ? '<span class="active" data-lang="en">EN</span>' : `<a href="${t.links.langEn}" data-lang="en" onclick="window.setLang('en')">EN</a>`}
        ${lang === 'de' ? '<span class="active" data-lang="de">DE</span>' : `<a href="${t.links.langDe}" data-lang="de" onclick="window.setLang('de')">DE</a>`}
        ${lang === 'fr' ? '<span class="active" data-lang="fr">FR</span>' : `<a href="${t.links.langFr}" data-lang="fr" onclick="window.setLang('fr')">FR</a>`}
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="${t.links.projects}" class="active">${t.navProjects}</a></li>
        <li><a href="${t.links.services}">${t.navServices}</a></li>
        <li><a href="${t.links.process}">${t.navProcess}</a></li>
        <li><a href="${t.links.studio}">${t.navStudio}</a></li>
        <li><a href="${t.links.contact}">${t.navContact}</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <!-- Floating Hover Preview (List View) -->
  <div class="project-hover-preview" aria-hidden="true">
    <img src="" alt="Project Preview">
  </div>

  <main style="padding-top: var(--nav-h);">

    <!-- Section Header -->
    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 32px;">
          <div>
            <div class="kicker crimson">
              <span class="kicker-dot"></span>
              ${t.kicker}
            </div>
            <h1 class="display-title" style="margin-bottom: 16px;">
              ${t.h1}
            </h1>
            <p class="body-large body-muted" style="max-width: 680px;">
              ${t.intro}
            </p>
          </div>

          <!-- Dual View Switcher -->
          <div class="view-switcher" aria-label="Toggle view mode">
            <span style="font-family: var(--font-condensed); font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--signal-text);">${t.viewLabel}</span>
            <button class="view-btn active" data-view="list">${t.viewList}</button>
            <button class="view-btn" data-view="grid">${t.viewGrid}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 01. TYPOGRAPHIC LIST VIEW (Active by default) -->
    <section class="section bg-paper projects-list-view" style="padding-top: 60px;">
      <div class="container">
        <div class="editorial-list">
${listProjects.map(p => `          <div class="editorial-row" data-image="${rootRel}${p.img}">
            <span class="row-num">${p.num}</span>
            <div>
              <h2 class="row-title">${p['name_' + lang]}</h2>
            </div>
            <div class="row-meta">${p['sub_' + lang]}</div>
            <div class="row-type" style="font-family: var(--font-condensed); font-size: 0.78rem; letter-spacing: 0.1em; color: var(--signal-text);">${p['loc_' + lang]}</div>
            <div class="row-arrow">↗</div>
          </div>`).join('\n')}
        </div>
      </div>
    </section>

    <!-- 02. ARCHITECTURAL GRID VIEW (Asymmetrical layout matching Spanish version) -->
    <section class="section bg-paper projects-grid-view" style="display: none; padding-top: 60px;">
      <div class="container">
        <div style="display: flex; flex-direction: column; gap: 80px;">

          <!-- 01 Full Bleed 21:9 -->
          <article class="project-card">
            <div class="project-media-wrap ratio-21-9">
              <picture>
                <source srcset="${rootRel}${gridProjects[0].imgWebp}" type="image/webp">
                <img src="${rootRel}${gridProjects[0].img1600}" alt="${gridProjects[0]['name_' + lang]}" loading="lazy">
              </picture>
            </div>
            <div class="project-meta-row">
              <div style="display: flex; gap: 20px; align-items: baseline;">
                <span class="project-num">01</span>
                <div>
                  <h3 class="project-title">${gridProjects[0]['name_' + lang]}</h3>
                  <div class="project-specs">${gridProjects[0]['sub_' + lang]}</div>
                </div>
              </div>
              <div class="project-specs">${gridProjects[0]['loc_' + lang]}</div>
            </div>
          </article>

          <!-- 02 & 03 Split Asimétrico (4:5 + 16:9) -->
          <div class="grid-12">
            <article class="project-card" style="grid-column: span 5;">
              <div class="project-media-wrap ratio-4-5">
                <picture>
                  <source srcset="${rootRel}${gridProjects[1].imgWebp}" type="image/webp">
                  <img src="${rootRel}${gridProjects[1].img1600}" alt="${gridProjects[1]['name_' + lang]}" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 16px; align-items: baseline;">
                  <span class="project-num">02</span>
                  <div>
                    <h3 class="project-title" style="font-size: 1.4rem;">${gridProjects[1]['name_' + lang]}</h3>
                    <div class="project-specs">${gridProjects[1]['sub_' + lang]}</div>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card" style="grid-column: span 7; align-self: flex-end;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="${rootRel}${gridProjects[2].imgWebp}" type="image/webp">
                  <img src="${rootRel}${gridProjects[2].img1600}" alt="${gridProjects[2]['name_' + lang]}" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 16px; align-items: baseline;">
                  <span class="project-num">03</span>
                  <div>
                    <h3 class="project-title" style="font-size: 1.4rem;">${gridProjects[2]['name_' + lang]}</h3>
                    <div class="project-specs">${gridProjects[2]['sub_' + lang]}</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- 04 Full Bleed 21:9 -->
          <article class="project-card">
            <div class="project-media-wrap ratio-21-9">
              <picture>
                <source srcset="${rootRel}${gridProjects[3].imgWebp}" type="image/webp">
                <img src="${rootRel}${gridProjects[3].img1600}" alt="${gridProjects[3]['name_' + lang]}" loading="lazy">
              </picture>
            </div>
            <div class="project-meta-row">
              <div style="display: flex; gap: 20px; align-items: baseline;">
                <span class="project-num">04</span>
                <div>
                  <h3 class="project-title">${gridProjects[3]['name_' + lang]}</h3>
                  <div class="project-specs">${gridProjects[3]['sub_' + lang]}</div>
                </div>
              </div>
              <div class="project-specs">${gridProjects[3]['loc_' + lang]}</div>
            </div>
          </article>

          <!-- 05 & 06 Split 6-6 -->
          <div class="grid-12">
            <article class="project-card" style="grid-column: span 6;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="${rootRel}${gridProjects[4].imgWebp}" type="image/webp">
                  <img src="${rootRel}${gridProjects[4].img1600}" alt="${gridProjects[4]['name_' + lang]}" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 16px; align-items: baseline;">
                  <span class="project-num">05</span>
                  <div>
                    <h3 class="project-title" style="font-size: 1.4rem;">${gridProjects[4]['name_' + lang]}</h3>
                    <div class="project-specs">${gridProjects[4]['sub_' + lang]}</div>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card" style="grid-column: span 6;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="${rootRel}${gridProjects[5].imgWebp}" type="image/webp">
                  <img src="${rootRel}${gridProjects[5].img1600}" alt="${gridProjects[5]['name_' + lang]}" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 16px; align-items: baseline;">
                  <span class="project-num">06</span>
                  <div>
                    <h3 class="project-title" style="font-size: 1.4rem;">${gridProjects[5]['name_' + lang]}</h3>
                    <div class="project-specs">${gridProjects[5]['sub_' + lang]}</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>

    <!-- Closing Callout -->
    <section class="section-sm bg-ink" style="color: var(--paper); border-top: 1px solid var(--line-dark);">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; gap: 40px; flex-wrap: wrap;">
        <div>
          <span class="kicker crimson">
            <span class="kicker-dot"></span>
            ${t.ctaKicker}
          </span>
          <h2 class="display-sub" style="margin-bottom: 8px;">${t.ctaTitle}</h2>
          <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 580px;">
            ${t.intro}
          </p>
        </div>
        <div>
          <a href="${t.links.contact}" class="btn-editorial btn-crimson">
            ${t.ctaBtn}
          </a>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="logo" style="margin-bottom: 16px;">
            <span>EIDOS RENDER</span>
            <span class="logo-dot"></span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.65); max-width: 380px;">
            Visual partner for real estate developments. From architectural project to commercial market launch.
          </p>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="${t.links.projects}">${t.navProjects}</a></li>
            <li><a href="${t.links.services}">${t.navServices}</a></li>
            <li><a href="${t.links.process}">${t.navProcess}</a></li>
            <li><a href="${t.links.studio}">${t.navStudio}</a></li>
            <li><a href="${t.links.contact}">${t.navContact}</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Contact</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li>Valencia, Spain</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 Eidos Render. All rights reserved.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="${t.links.langEs}" onclick="window.setLang('es')">ES</a> ·
            ${lang === 'en' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">EN</span>' : `<a href="${t.links.langEn}" onclick="window.setLang('en')">EN</a>`} ·
            ${lang === 'de' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">DE</span>' : `<a href="${t.links.langDe}" onclick="window.setLang('de')">DE</a>`} ·
            ${lang === 'fr' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">FR</span>' : `<a href="${t.links.langFr}" onclick="window.setLang('fr')">FR</a>`}
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script src="${rootRel}main.js" defer></script>
</body>
</html>
`;
}

// ============================================================================
// TEMPLATE GENERATOR FOR SERVICES PAGES
// ============================================================================
function generateServicesHtml(lang, depth) {
  const rootRel = depth === 1 ? '../' : '../../';
  const prefix = depth === 1 ? '' : '../';
  const data = servicesData[lang];

  const t = {
    en: {
      lang: 'en',
      title: 'Real Estate Launch Services | Eidos Render',
      desc: 'Complete architectural visual and commercial suite for high-end residential developments across Europe.',
      navProjects: 'Projects',
      navServices: 'Services',
      navProcess: 'Process',
      navStudio: 'Studio',
      navContact: 'Contact',
      navCta: "LET'S DISCUSS THE PROJECT →",
      viewSpecific: 'VIEW DEDICATED PAGE →',
      whatWeDo: 'What We Do',
      whatWeDeliver: 'What We Deliver',
      whyItMatters: 'Why It Matters',
      scaleKicker: 'Tailored Scope',
      scaleTitle: 'Every development demands its own scale.',
      scaleDesc: 'We size our creative engagement precisely to the architectural ambition, production volume, and marketing timelines of each project.',
      scaleCta: "LET'S DISCUSS THE PROJECT →",
      links: {
        projects: prefix + 'projects.html',
        services: prefix + 'services.html',
        process: prefix + './#proceso',
        studio: prefix + './#estudio',
        contact: prefix + 'contact.html',
        langEs: rootRel + 'servicios.html',
        langEn: prefix + 'services.html',
        langDe: rootRel + 'de/leistungen.html',
        langFr: rootRel + 'fr/services.html'
      }
    },
    de: {
      lang: 'de',
      title: 'Leistungen & Vermarktungssystem | Eidos Render',
      desc: 'Ganzheitliches visuelles und kommerzielles System für anspruchsvolle Neubau- und Immobilienprojekte in Europa.',
      navProjects: 'Projekte',
      navServices: 'Leistungen',
      navProcess: 'Prozess',
      navStudio: 'Studio',
      navContact: 'Kontakt',
      navCta: 'PROJEKT BESPRECHEN →',
      viewSpecific: 'ZUR DETAILSEITE →',
      whatWeDo: 'Was Wir Tun',
      whatWeDeliver: 'Was Wir Liefern',
      whyItMatters: 'Der Mehrwert',
      scaleKicker: 'Maßgeschneiderte Dimension',
      scaleTitle: 'Jedes Projekt hat seine eigene Dimension.',
      scaleDesc: 'Wir passen den Umfang unserer Begleitung exakt an das Bauvolumen, den Bildbedarf und die Vertriebsziele jedes Vorhabens an.',
      scaleCta: 'PROJEKT BESPRECHEN →',
      links: {
        projects: prefix + 'projekte.html',
        services: prefix + 'leistungen.html',
        process: prefix + './#prozess',
        studio: prefix + './#estudio',
        contact: prefix + 'kontakt.html',
        langEs: rootRel + 'servicios.html',
        langEn: rootRel + 'en/services.html',
        langDe: prefix + 'leistungen.html',
        langFr: rootRel + 'fr/services.html'
      }
    },
    fr: {
      lang: 'fr',
      title: 'Services & Système de Lancement | Eidos Render',
      desc: 'Écosystème visuel et commercial complet pour programmes immobiliers et agences d\'architecture en Europe.',
      navProjects: 'Projets',
      navServices: 'Services',
      navProcess: 'Méthode',
      navStudio: 'Studio',
      navContact: 'Contact',
      navCta: 'PARLONS DU PROJET →',
      viewSpecific: 'VOIR LA PAGE DÉDIÉE →',
      whatWeDo: 'Notre Intervention',
      whatWeDeliver: 'Ce Que Nous Livrons',
      whyItMatters: 'Valeur Ajoutée',
      scaleKicker: 'Dimension Sur Mesure',
      scaleTitle: 'Chaque opération possède sa propre échelle.',
      scaleDesc: 'Nous ajustons notre accompagnement selon l\'envergure architecturale, le volume de production et les impératifs commerciaux de chaque opération.',
      scaleCta: 'PARLONS DU PROJET →',
      links: {
        projects: prefix + 'projets.html',
        services: prefix + 'services.html',
        process: prefix + './#prozess',
        studio: prefix + './#estudio',
        contact: prefix + 'contact.html',
        langEs: rootRel + 'servicios.html',
        langEn: rootRel + 'en/services.html',
        langDe: rootRel + 'de/leistungen.html',
        langFr: prefix + 'services.html'
      }
    }
  }[lang];

  const canonical = depth === 1 
    ? `https://eidosrender.es/${lang}/${lang === 'de' ? 'leistungen' : 'services'}`
    : `https://eidosrender.es/${lang}/${lang === 'de' ? 'leistungen' : 'services'}/`;

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N6R4S8NC');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}">
  <link rel="canonical" href="${canonical}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/servicios">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/services">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/leistungen">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/services">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/services">

  <!-- Multilingual & Geo-routing -->
  <script src="${rootRel}js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.desc}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="${rootRel}favicon.png">
  <link rel="shortcut icon" href="${rootRel}favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="${rootRel}apple-touch-icon.png">

  <!-- Tipografía Editorial (Prata + Barlow Condensed + Amiri) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@400;500;600;700&family=Prata&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="${rootRel}style.css">
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="${prefix}./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="${t.links.projects}">${t.navProjects}</a></li>
          <li><a href="${t.links.services}" class="active">${t.navServices}</a></li>
          <li><a href="${t.links.process}">${t.navProcess}</a></li>
          <li><a href="${t.links.studio}">${t.navStudio}</a></li>
          <li><a href="${t.links.contact}">${t.navContact}</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="${t.links.langEs}" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          ${lang === 'en' ? '<span class="active" data-lang="en">EN</span>' : `<a href="${t.links.langEn}" data-lang="en" onclick="window.setLang('en')">EN</a>`}
          <span class="lang-divider">/</span>
          ${lang === 'de' ? '<span class="active" data-lang="de">DE</span>' : `<a href="${t.links.langDe}" data-lang="de" onclick="window.setLang('de')">DE</a>`}
          <span class="lang-divider">/</span>
          ${lang === 'fr' ? '<span class="active" data-lang="fr">FR</span>' : `<a href="${t.links.langFr}" data-lang="fr" onclick="window.setLang('fr')">FR</a>`}
        </div>

        <a href="${t.links.contact}" class="nav-cta">
          ${t.navCta}
        </a>
      </div>

      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Language selector">
        <a href="${t.links.langEs}" data-lang="es" onclick="window.setLang('es')">ES</a>
        ${lang === 'en' ? '<span class="active" data-lang="en">EN</span>' : `<a href="${t.links.langEn}" data-lang="en" onclick="window.setLang('en')">EN</a>`}
        ${lang === 'de' ? '<span class="active" data-lang="de">DE</span>' : `<a href="${t.links.langDe}" data-lang="de" onclick="window.setLang('de')">DE</a>`}
        ${lang === 'fr' ? '<span class="active" data-lang="fr">FR</span>' : `<a href="${t.links.langFr}" data-lang="fr" onclick="window.setLang('fr')">FR</a>`}
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="${t.links.projects}">${t.navProjects}</a></li>
        <li><a href="${t.links.services}" class="active">${t.navServices}</a></li>
        <li><a href="${t.links.process}">${t.navProcess}</a></li>
        <li><a href="${t.links.studio}">${t.navStudio}</a></li>
        <li><a href="${t.links.contact}">${t.navContact}</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <!-- Section Header -->
    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="kicker crimson">
          <span class="kicker-dot"></span>
          ${data.kicker}
        </div>
        <h1 class="display-title" style="margin-bottom: 20px;">
          ${data.title}
        </h1>
        <p class="body-large body-muted" style="max-width: 720px;">
          ${data.subtitle}
        </p>
      </div>
    </section>

    <!-- DETAILED SERVICE BLOCKS -->
    <section class="section bg-paper">
      <div class="container">
${data.items.map(item => `        <article class="service-block-row" style="padding: 64px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--signal-text);">${item.num}</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px;">${item.title}</h2>
            <div style="margin-bottom: 16px;">
              <a href="${prefix}${item.href}" class="link-draw">${t.viewSpecific}</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker signal" style="margin-bottom: 6px; display: block;">${t.whatWeDo}</span>
              <p class="body-regular body-muted">${item.whatWeDo}</p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker signal" style="margin-bottom: 6px; display: block;">${t.whatWeDeliver}</span>
              <p class="body-regular body-muted">${item.deliver}</p>
            </div>
            <div>
              <span class="kicker signal" style="margin-bottom: 6px; display: block;">${t.whyItMatters}</span>
              <p class="body-regular body-muted">${item.why}</p>
            </div>
          </div>
        </article>`).join('\n\n')}
      </div>
    </section>

    <!-- Closing Callout -->
    <section class="section-sm bg-ink" style="color: var(--paper); border-top: 1px solid var(--line-dark);">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; gap: 40px; flex-wrap: wrap;">
        <div>
          <span class="kicker crimson">
            <span class="kicker-dot"></span>
            ${t.scaleKicker}
          </span>
          <h2 class="display-sub" style="margin-bottom: 8px;">${t.scaleTitle}</h2>
          <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 580px;">
            ${t.scaleDesc}
          </p>
        </div>
        <div>
          <a href="${t.links.contact}" class="btn-editorial btn-crimson">
            ${t.scaleCta}
          </a>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="logo" style="margin-bottom: 16px;">
            <span>EIDOS RENDER</span>
            <span class="logo-dot"></span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.65); max-width: 380px;">
            Visual partner for real estate developments. From architectural project to commercial market launch.
          </p>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="${t.links.projects}">${t.navProjects}</a></li>
            <li><a href="${t.links.services}">${t.navServices}</a></li>
            <li><a href="${t.links.process}">${t.navProcess}</a></li>
            <li><a href="${t.links.studio}">${t.navStudio}</a></li>
            <li><a href="${t.links.contact}">${t.navContact}</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Contact</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li>Valencia, Spain</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 Eidos Render. All rights reserved.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="${t.links.langEs}" onclick="window.setLang('es')">ES</a> ·
            ${lang === 'en' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">EN</span>' : `<a href="${t.links.langEn}" onclick="window.setLang('en')">EN</a>`} ·
            ${lang === 'de' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">DE</span>' : `<a href="${t.links.langDe}" onclick="window.setLang('de')">DE</a>`} ·
            ${lang === 'fr' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">FR</span>' : `<a href="${t.links.langFr}" onclick="window.setLang('fr')">FR</a>`}
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script src="${rootRel}main.js" defer></script>
</body>
</html>
`;
}

// ============================================================================
// TEMPLATE GENERATOR FOR CONTACT PAGES
// ============================================================================
function generateContactHtml(lang, depth) {
  const rootRel = depth === 1 ? '../' : '../../';
  const prefix = depth === 1 ? '' : '../';

  const t = {
    en: {
      lang: 'en',
      title: 'Contact | Eidos Render',
      desc: 'Direct consultation for real estate developers and architects. Start your project assessment.',
      kicker: 'Direct Consultation',
      h1: 'From the project<br>to launch.<br>Let’s talk.',
      intro: 'If you are preparing a property development and want to define its imagery, commercial collateral, and market launch strategy, tell us about your scheme.',
      emailLabel: 'Direct Email',
      phoneLabel: 'Direct Phone',
      reachLabel: 'Studio & Coverage',
      reachText: 'Valencia, Spain.<br>We actively collaborate with developers and architects across the UK, Germany, France, Switzerland, and Spain.',
      responseLabel: 'Response Time',
      responseText: 'We reply within 24 business hours to arrange an initial drawing review or exploratory briefing call.',
      formKicker: 'Assessment Form',
      formTitle: 'Development Scope',
      lblNom: 'Full Name *',
      phNom: 'e.g. Alistair Vance',
      lblEmp: 'Developer / Architectural Practice',
      phEmp: 'e.g. Primrose Developments',
      lblMail: 'Corporate Email *',
      phMail: 'a.vance@primrose.co.uk',
      lblTel: 'Contact Phone',
      phTel: '+44 20 7946 0958',
      lblMsg: 'Development Outline (Location, Units, Target Launch) *',
      phMsg: '32 coastal luxury apartments, planning approved, target sales launch Q3...',
      btnSubmit: 'REQUEST PROJECT ASSESSMENT →',
      navProjects: 'Projects',
      navServices: 'Services',
      navProcess: 'Process',
      navStudio: 'Studio',
      navContact: 'Contact',
      navCta: "LET'S DISCUSS THE PROJECT →",
      links: {
        projects: prefix + 'projects.html',
        services: prefix + 'services.html',
        process: prefix + './#proceso',
        studio: prefix + './#estudio',
        contact: prefix + 'contact.html',
        langEs: rootRel + 'contacto.html',
        langEn: prefix + 'contact.html',
        langDe: rootRel + 'de/kontakt.html',
        langFr: rootRel + 'fr/contact.html'
      }
    },
    de: {
      lang: 'de',
      title: 'Kontakt | Eidos Render',
      desc: 'Direkter Dialog für Bauträger und Architekturbüros. Erhalten Sie eine fundierte Ersteinschätzung für Ihr Projekt.',
      kicker: 'Direkter Dialog',
      h1: 'Vom Projekt<br>zum Launch.<br>Sprechen wir.',
      intro: 'Wenn Sie eine Quartiersentwicklung oder ein Wohnbauvorhaben vorbereiten und Bildsprache, Vertriebsunterlagen und Markteinführung planen, stellen Sie uns Ihr Vorhaben vor.',
      emailLabel: 'Direkte E-Mail',
      phoneLabel: 'Direkttelefon',
      reachLabel: 'Studio & Einzugsgebiet',
      reachText: 'Valencia, Spanien.<br>Betreuung von Bauprojekten in ganz Deutschland, Österreich, der Schweiz und Europa.',
      responseLabel: 'Reaktionszeit',
      responseText: 'Wir antworten innerhalb von 24 Arbeitsstunden zur Abstimmung einer ersten Planprüfung oder eines Vorgesprächs.',
      formKicker: 'Projekteinschätzung',
      formTitle: 'Details zum Bauvorhaben',
      lblNom: 'Vor- und Nachname *',
      phNom: 'z. B. Maximilian Weber',
      lblEmp: 'Bauträger / Architekturbüro',
      phEmp: 'z. B. Weber Immobilien GmbH',
      lblMail: 'Geschäftliche E-Mail *',
      phMail: 'm.weber@weber-immo.de',
      lblTel: 'Telefonnummer',
      phTel: '+49 30 12345678',
      lblMsg: 'Projektbeschreibung (Standort, Anzahl Einheiten, Zeitplan) *',
      phMsg: 'Wohnensemble mit 24 Einheiten, geplanter Vertriebsstart Q4...',
      btnSubmit: 'PROJEKTEINSCHÄTZUNG ANFORDERN →',
      navProjects: 'Projekte',
      navServices: 'Leistungen',
      navProcess: 'Prozess',
      navStudio: 'Studio',
      navContact: 'Kontakt',
      navCta: 'PROJEKT BESPRECHEN →',
      links: {
        projects: prefix + 'projekte.html',
        services: prefix + 'leistungen.html',
        process: prefix + './#prozess',
        studio: prefix + './#estudio',
        contact: prefix + 'kontakt.html',
        langEs: rootRel + 'contacto.html',
        langEn: rootRel + 'en/contact.html',
        langDe: prefix + 'kontakt.html',
        langFr: rootRel + 'fr/contact.html'
      }
    },
    fr: {
      lang: 'fr',
      title: 'Contact Direct | Eidos Render',
      desc: 'Échange confidentiel pour promoteurs immobiliers et architectes. Obtenez une étude de votre projet.',
      kicker: 'Échange Confidentiel',
      h1: 'Du projet<br>au lancement.<br>Parlons-en.',
      intro: 'Si vous préparez une opération immobilière et souhaitez définir son image, ses outils de vente et sa stratégie de commercialisation, partagez-nous votre vision.',
      emailLabel: 'E-mail Direct',
      phoneLabel: 'Téléphone Direct',
      reachLabel: 'Studio & Rayonnement',
      reachText: 'Valence, Espagne.<br>Nous collaborons étroitement avec promoteurs et architectes en France, Suisse, Belgique et dans toute l\'Europe.',
      responseLabel: 'Délai de Réponse',
      responseText: 'Nous vous répondons sous 24 heures ouvrées afin d\'organiser une première revue de plans ou un échange exploratoire.',
      formKicker: 'Formulaire d\'Étude',
      formTitle: 'Détails de l\'Opération',
      lblNom: 'Nom & Prénom *',
      phNom: 'ex. Alexandre Laurent',
      lblEmp: 'Promoteur / Agence d\'Architecture',
      phEmp: 'ex. Laurent Promotion',
      lblMail: 'E-mail Professionnel *',
      phMail: 'a.laurent@promotion.fr',
      lblTel: 'Téléphone',
      phTel: '+33 1 42 68 00 00',
      lblMsg: 'Présentation de l\'Opération (Ville, Nb de lots, Planning) *',
      phMsg: 'Programme résidentiel de 28 logements, permis purgé, lancement commercial prévu T3...',
      btnSubmit: 'DEMANDER UNE ÉTUDE DU PROJET →',
      navProjects: 'Projets',
      navServices: 'Services',
      navProcess: 'Méthode',
      navStudio: 'Studio',
      navContact: 'Contact',
      navCta: 'PARLONS DU PROJET →',
      links: {
        projects: prefix + 'projets.html',
        services: prefix + 'services.html',
        process: prefix + './#prozess',
        studio: prefix + './#estudio',
        contact: prefix + 'contact.html',
        langEs: rootRel + 'contacto.html',
        langEn: rootRel + 'en/contact.html',
        langDe: rootRel + 'de/kontakt.html',
        langFr: prefix + 'contact.html'
      }
    }
  }[lang];

  const canonical = depth === 1 
    ? `https://eidosrender.es/${lang}/${lang === 'de' ? 'kontakt' : 'contact'}`
    : `https://eidosrender.es/${lang}/${lang === 'de' ? 'kontakt' : 'contact'}/`;

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N6R4S8NC');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}">
  <link rel="canonical" href="${canonical}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/contacto">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/contact">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/kontakt">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/contact">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/contact">

  <!-- Multilingual & Geo-routing -->
  <script src="${rootRel}js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.desc}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="${rootRel}favicon.png">
  <link rel="shortcut icon" href="${rootRel}favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="${rootRel}apple-touch-icon.png">

  <!-- Tipografía Editorial (Prata + Barlow Condensed + Amiri) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@400;500;600;700&family=Prata&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="${rootRel}style.css">
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="${prefix}./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="${t.links.projects}">${t.navProjects}</a></li>
          <li><a href="${t.links.services}">${t.navServices}</a></li>
          <li><a href="${t.links.process}">${t.navProcess}</a></li>
          <li><a href="${t.links.studio}">${t.navStudio}</a></li>
          <li><a href="${t.links.contact}" class="active">${t.navContact}</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="${t.links.langEs}" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          ${lang === 'en' ? '<span class="active" data-lang="en">EN</span>' : `<a href="${t.links.langEn}" data-lang="en" onclick="window.setLang('en')">EN</a>`}
          <span class="lang-divider">/</span>
          ${lang === 'de' ? '<span class="active" data-lang="de">DE</span>' : `<a href="${t.links.langDe}" data-lang="de" onclick="window.setLang('de')">DE</a>`}
          <span class="lang-divider">/</span>
          ${lang === 'fr' ? '<span class="active" data-lang="fr">FR</span>' : `<a href="${t.links.langFr}" data-lang="fr" onclick="window.setLang('fr')">FR</a>`}
        </div>

        <a href="${t.links.contact}" class="nav-cta">
          ${t.navCta}
        </a>
      </div>

      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Language selector">
        <a href="${t.links.langEs}" data-lang="es" onclick="window.setLang('es')">ES</a>
        ${lang === 'en' ? '<span class="active" data-lang="en">EN</span>' : `<a href="${t.links.langEn}" data-lang="en" onclick="window.setLang('en')">EN</a>`}
        ${lang === 'de' ? '<span class="active" data-lang="de">DE</span>' : `<a href="${t.links.langDe}" data-lang="de" onclick="window.setLang('de')">DE</a>`}
        ${lang === 'fr' ? '<span class="active" data-lang="fr">FR</span>' : `<a href="${t.links.langFr}" data-lang="fr" onclick="window.setLang('fr')">FR</a>`}
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="${t.links.projects}">${t.navProjects}</a></li>
        <li><a href="${t.links.services}">${t.navServices}</a></li>
        <li><a href="${t.links.process}">${t.navProcess}</a></li>
        <li><a href="${t.links.studio}">${t.navStudio}</a></li>
        <li><a href="${t.links.contact}" class="active">${t.navContact}</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <section class="section bg-paper" style="padding: clamp(80px, 10vw, 140px) 0;">
      <div class="container">
        
        <div class="grid-12">
          
          <!-- Direct Channels & Studio Information -->
          <div style="grid-column: 1 / 6;">
            <div class="kicker crimson">
              <span class="kicker-dot"></span>
              ${t.kicker}
            </div>
            
            <h1 class="display-title" style="margin-bottom: 28px; line-height: 1.05;">
              ${t.h1}
            </h1>
            
            <p class="body-large body-muted" style="margin-bottom: 48px;">
              ${t.intro}
            </p>

            <div style="display: flex; flex-direction: column; gap: 28px; border-top: 1px solid var(--line); padding-top: 36px;">
              <div>
                <span class="kicker signal" style="margin-bottom: 6px; display: block;">${t.emailLabel}</span>
                <a href="mailto:info@eidosrender.es" class="link-draw" style="font-size: 1.3rem; font-family: var(--font-display); text-transform: none; letter-spacing: 0;">
                  info@eidosrender.es
                </a>
              </div>

              <div>
                <span class="kicker signal" style="margin-bottom: 6px; display: block;">${t.phoneLabel}</span>
                <a href="tel:+34614459144" class="link-draw" style="font-size: 1.15rem;">
                  +34 614 45 91 44
                </a>
              </div>

              <div>
                <span class="kicker signal" style="margin-bottom: 6px; display: block;">${t.reachLabel}</span>
                <p class="body-regular body-muted">
                  ${t.reachText}
                </p>
              </div>

              <div>
                <span class="kicker signal" style="margin-bottom: 6px; display: block;">${t.responseLabel}</span>
                <p class="body-regular body-muted">
                  ${t.responseText}
                </p>
              </div>
            </div>
          </div>

          <!-- Minimalist Form (Bottom-line only) -->
          <div style="grid-column: 7 / 13;">
            <div style="border: 1px solid var(--line); padding: clamp(36px, 5vw, 64px); background-color: var(--paper-pure);">
              <div class="kicker signal" style="margin-bottom: 24px;">${t.formKicker}</div>
              <h2 class="display-sub" style="font-size: 1.6rem; margin-bottom: 32px;">${t.formTitle}</h2>
              
              <form class="form-minimal" method="POST" action="${rootRel}enviar.php">
                <div class="field-group">
                  <label for="${lang}-nom">${t.lblNom}</label>
                  <input type="text" id="${lang}-nom" name="nombre" required placeholder="${t.phNom}">
                  <span class="field-error">Please complete this field.</span>
                </div>

                <div class="field-group">
                  <label for="${lang}-emp">${t.lblEmp}</label>
                  <input type="text" id="${lang}-emp" name="empresa" placeholder="${t.phEmp}">
                </div>

                <div class="field-group">
                  <label for="${lang}-mail">${t.lblMail}</label>
                  <input type="email" id="${lang}-mail" name="email" required placeholder="${t.phMail}">
                  <span class="field-error">Please enter a valid email.</span>
                </div>

                <div class="field-group">
                  <label for="${lang}-tel">${t.lblTel}</label>
                  <input type="tel" id="${lang}-tel" name="telefono" placeholder="${t.phTel}">
                </div>

                <div class="field-group">
                  <label for="${lang}-msg">${t.lblMsg}</label>
                  <textarea id="${lang}-msg" name="mensaje" rows="4" required placeholder="${t.phMsg}"></textarea>
                  <span class="field-error">Please provide project details.</span>
                </div>

                <div style="padding-top: 16px;">
                  <button type="submit" class="btn-editorial btn-crimson" style="width: 100%; justify-content: center;">
                    ${t.btnSubmit}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="logo" style="margin-bottom: 16px;">
            <span>EIDOS RENDER</span>
            <span class="logo-dot"></span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.65); max-width: 380px;">
            Visual partner for real estate developments. From architectural project to commercial market launch.
          </p>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="${t.links.projects}">${t.navProjects}</a></li>
            <li><a href="${t.links.services}">${t.navServices}</a></li>
            <li><a href="${t.links.process}">${t.navProcess}</a></li>
            <li><a href="${t.links.studio}">${t.navStudio}</a></li>
            <li><a href="${t.links.contact}">${t.navContact}</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Contact</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li>Valencia, Spain</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 Eidos Render. All rights reserved.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="${t.links.langEs}" onclick="window.setLang('es')">ES</a> ·
            ${lang === 'en' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">EN</span>' : `<a href="${t.links.langEn}" onclick="window.setLang('en')">EN</a>`} ·
            ${lang === 'de' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">DE</span>' : `<a href="${t.links.langDe}" onclick="window.setLang('de')">DE</a>`} ·
            ${lang === 'fr' ? '<span style="color: var(--crimson-on-dark); font-weight: 700;">FR</span>' : `<a href="${t.links.langFr}" onclick="window.setLang('fr')">FR</a>`}
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script src="${rootRel}main.js" defer></script>
</body>
</html>
`;
}

// ============================================================================
// SYNC ALL SUBPAGES
// ============================================================================
console.log('--- Generating English Subpages ---');
writeFile('en/projects.html', generateProjectsHtml('en', 1));
writeFile('en/projects/index.html', generateProjectsHtml('en', 2));
writeFile('en/services.html', generateServicesHtml('en', 1));
writeFile('en/services/index.html', generateServicesHtml('en', 2));
writeFile('en/contact.html', generateContactHtml('en', 1));
writeFile('en/contact/index.html', generateContactHtml('en', 2));

console.log('--- Generating German Subpages ---');
writeFile('de/projekte.html', generateProjectsHtml('de', 1));
writeFile('de/projekte/index.html', generateProjectsHtml('de', 2));
writeFile('de/leistungen.html', generateServicesHtml('de', 1));
writeFile('de/leistungen/index.html', generateServicesHtml('de', 2));
writeFile('de/kontakt.html', generateContactHtml('de', 1));
writeFile('de/kontakt/index.html', generateContactHtml('de', 2));

console.log('--- Generating French Subpages ---');
writeFile('fr/projets.html', generateProjectsHtml('fr', 1));
writeFile('fr/projets/index.html', generateProjectsHtml('fr', 2));
writeFile('fr/services.html', generateServicesHtml('fr', 1));
writeFile('fr/services/index.html', generateServicesHtml('fr', 2));
writeFile('fr/contact.html', generateContactHtml('fr', 1));
writeFile('fr/contact/index.html', generateContactHtml('fr', 2));

console.log('All international subpages generated with verified assets successfully.');
