const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function buildHomePage(lang) {
  const content = {
    en: {
      lang: 'en',
      title: 'Eidos Render | Architectural Visualisation & Real Estate Launch',
      desc: 'High-end 3D architectural visualisation, art direction, and launch collateral for property developments and signature architecture across Europe.',
      canonical: 'https://eidosrender.es/en/',
      ogDesc: 'Visual partner for property developments. From architectural design to market launch.',
      
      navProjects: 'Projects',
      navServices: 'Services',
      navStudio: 'Studio',
      navProcess: 'Process',
      navContact: 'Contact',
      navCta: 'LET’S TALK →',
      
      heroKicker: 'VISUAL STUDIO & REAL ESTATE LAUNCH DIRECTION',
      heroL1: 'WE START FROM ARCHITECTURE.',
      heroL2: 'WE SHAPE ITS IMAGE.',
      heroL3: 'AND WE BRING IT TO MARKET.',
      heroPartner: 'Visual partner for property developers, architectural studios, and luxury developments.',
      heroTags: 'ARCHITECTURE · IMAGE · IDENTITY · COLLATERAL · DIGITAL · ACQUISITION',
      heroBtn: 'LET’S DISCUSS THE PROJECT →',
      
      mTitle: 'THE RENDER IS THE PRODUCT',
      mLead: 'A render is not a technical illustration. It is the primary commercial asset of a real estate development.',
      mP: 'In modern property marketing, the buyer acquires what they see before the foundation is poured. We approach visualisation with architectural rigor and commercial purpose: framing spaces, crafting atmosphere, and defining the visual narrative that accelerates sales.',
      
      galKicker: 'SELECTED ARCHITECTURE',
      galTitle: 'DEVELOPMENT DOSSIERS',
      p1Type: 'Collective Residential · Valencia',
      p1Title: 'Edificio Viveros',
      p1Desc: 'Full exterior and interior 3D campaign for a high-end 24-apartment development overlooking the historic royal gardens.',
      p2Type: 'Signature Villa · Alicante',
      p2Title: 'Villa Moraira',
      p2Desc: 'Sunlight simulation, Mediterranean materiality, and lifestyle CGI for an exclusive coastal cliff residence.',
      p3Type: 'Interiors & Atmosphere · Valencia',
      p3Title: 'Balcones del Turia',
      p3Desc: 'Sensory interior visualisation highlighting bespoke carpentry, natural textures, and open-plan spatial flow.',
      p4Type: 'Refurbishment · Valencia',
      p4Title: 'Ático Gran Vía',
      p4Desc: 'Heritage penthouse renovation CGI, blending classical moldings with contemporary design for off-plan presale.',
      viewAllProjects: 'VIEW PROJECTS ARCHIVE →',
      
      servKicker: 'END-TO-END CAPABILITIES',
      servTitle: 'ONE STUDIO. THE COMPLETE LAUNCH CYCLE.',
      s1Title: '01 3D Visualisation & CGI',
      s1Desc: 'Photorealistic exterior, interior, and landscape renders. Cinematic lighting studies and spatial fidelity in 4K resolution.',
      s2Title: '02 3D Video & Virtual Tours',
      s2Desc: 'Fluid architectural walkthroughs, cinematic cuts, and vertical video assets designed for digital campaigns and presentations.',
      s3Title: '03 Brand Identity',
      s3Desc: 'Naming, narrative, brand marks, and typography tailored to communicate the prestige of the architectural vision.',
      s4Title: '04 Sales Collateral & Brochures',
      s4Desc: 'Editorial-grade sales dossiers, brochures, flat plans, and specification sheets ready for VIP investor meetings.',
      s5Title: '05 Real Estate Websites',
      s5Desc: 'Bespoke, high-performance promotion websites with unit selectors, interactive floor plans, and direct lead channels.',
      s6Title: '06 Digital Acquisition',
      s6Desc: 'Targeted campaign direction and high-intent buyer acquisition designed to generate qualified leads from day one.',
      servBtn: 'LET’S DISCUSS THE PROJECT →',
      
      layerKicker: 'METHODOLOGY IN DETAIL',
      layerTitle: 'FROM SKETCH TO RENDER. FOUR PRECISION PASSES.',
      layerSub: 'Scroll through the interactive viewport to inspect how each technical layer is sculpted from raw geometry to photographic grade.',
      l1Num: '01',
      l1Name: 'CLAY',
      l1Detail: 'Volumetric calibration, camera optics & architectural alignment.',
      l2Num: '02',
      l2Name: 'MATERIALITY',
      l2Detail: 'Physically based rendering (PBR), texture haptics & real stone grains.',
      l3Num: '03',
      l3Name: 'LIGHTING',
      l3Detail: 'Solar azimuth, atmospheric diffusion & warm interior accents.',
      l4Num: '04',
      l4Name: 'FINAL RENDER',
      l4Detail: 'Photographic post-production, optical color grading & atmospheric depth.',
      
      compKicker: 'ATMOSPHERIC COMPARATOR',
      compTitle: 'SOLAR STUDY: DAY VS. NIGHT',
      compSub: 'Drag the vertical divider to evaluate how architectural surfaces respond to daylight clarity and evening warmth.',
      compTag1: 'NATURAL DAYLIGHT',
      compTag2: 'DUSK & INTERIOR ATMOSPHERE',
      
      studioKicker: 'ARCHITECTURAL RIGOR',
      studioTitle: 'ARCHITECTURE, NOT JUST SOFTWARE.',
      st1Title: 'Architectural Grounding',
      st1Desc: 'We read and interpret technical plans, BIM models, and architectural specifications without communication loss.',
      st2Title: 'Art Direction',
      st2Desc: 'Every composition, focal length, and material reflection is curated to elevate the perceived value of the property.',
      st3Title: 'Single Dedicated Partner',
      st3Desc: 'From the initial CAD delivery to the sales launch, you work with a unified team committed to your development calendar.',
      
      procKicker: 'METHODOLOGY',
      procTitle: 'FOUR PHASES. ZERO FRICTION.',
      pr1Num: '01',
      pr1Title: 'Analysis & Geometry',
      pr1Desc: 'Review of CAD/BIM drawings, volume modeling, and camera angle selection aligned with marketing priorities.',
      pr2Num: '02',
      pr2Title: 'Materiality & Light',
      pr2Desc: 'Assignment of real finish palettes, sun path calculation, and atmospheric lighting tests for client approval.',
      pr3Num: '03',
      pr3Title: 'Integral Production',
      pr3Desc: 'High-resolution 4K rendering, video animation sequences, brand collateral design, and web asset preparation.',
      pr4Num: '04',
      pr4Title: 'Delivery & Launch',
      pr4Desc: 'Final asset handover optimized for print, digital billboards, web platforms, and commercial sales offices.',
      procBtn: 'PLAN YOUR LAUNCH →',
      
      contactKicker: 'DIRECT STUDIO CONTACT',
      contactTitle: 'FROM ARCHITECTURAL PROJECT<br>TO MARKET LAUNCH.<br><span style="color: var(--accent-on-dark);">LET’S TALK.</span>',
      contactText: 'If you are preparing a property development and want to define its imagery, commercial collateral, and launch strategy, share your project with us.',
      contactBtn: 'LET’S DISCUSS THE PROJECT →',
      contactHq: 'Headquarters · Valencia, Spain',
      contactScope: 'Coverage · Spain · United Kingdom · Germany · France · Switzerland',
      
      footerAbout: 'Visual and creative partner for property developments. From architectural design to commercial launch.',
      footerNav: 'Navigation',
      footerCaps: 'Capabilities',
      footerContact: 'Direct Contact',
      footerRights: '© 2026 Eidos Render. All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookies Policy',
      faq: 'Frequently Asked Questions'
    },
    de: {
      lang: 'de',
      title: 'Eidos Render | 3D-Architekturvisualisierung & Immobilien-Launch',
      desc: 'High-End 3D-Architekturvisualisierung, visuelle Regie und Vermarktungsunterlagen für anspruchsvolle Bauträger und Architekturbüros in Europa.',
      canonical: 'https://eidosrender.es/de/',
      ogDesc: 'Visueller Partner für Immobilienentwickler. Vom Architekturentwurf zum Verkaufsstart.',
      
      navProjects: 'Projekte',
      navServices: 'Leistungen',
      navStudio: 'Studio',
      navProcess: 'Prozess',
      navContact: 'Kontakt',
      navCta: 'PROJEKT BESPRECHEN →',
      
      heroKicker: 'VISUELLES STUDIO & IMMOBILIEN-LAUNCH-REGIE',
      heroL1: 'WIR GEHEN VON DER ARCHITEKTUR AUS.',
      heroL2: 'WIR FORMEN IHR BILD.',
      heroL3: 'UND FÜHREN SIE AN DEN MARKT.',
      heroPartner: 'Visueller Partner für Bauträger, Architekturbüros und hochwertige Neubauprojekte.',
      heroTags: 'ARCHITEKTUR · BILD · IDENTITÄT · VERMARKTUNG · DIGITAL · KUNDENGEWINNUNG',
      heroBtn: 'PROJEKT BESPRECHEN →',
      
      mTitle: 'DAS RENDER IST DAS PRODUKT',
      mLead: 'Ein Rendering ist keine bloße technische Zeichnung. Es ist das wichtigste Vertriebsinstrument eines Bauvorhabens.',
      mP: 'Auf dem modernen Immobilienmarkt kauft der Kunde, was er fühlt, bevor der erste Stein gesetzt wird. Wir verbinden architektonische Präzision mit verkaufspsychologischer Bildsprache: präzise Blickachsen, atmosphärisches Licht und ein klares Narrativ, das den Verkauf beschleunigt.',
      
      galKicker: 'AUSGEWÄHLTE ARCHITEKTUR',
      galTitle: 'PROJEKT-DOSSIERS',
      p1Type: 'Wohnanlage · Valencia',
      p1Title: 'Edificio Viveros',
      p1Desc: 'Komplette 3D-Visualisierungskampagne für eine hochwertige Wohnanlage mit 24 Einheiten direkt am königlichen Stadtpark.',
      p2Type: 'Architektenvilla · Alicante',
      p2Title: 'Villa Moraira',
      p2Desc: 'Lichtstudie, mediterrane Natursteinmaterialien und Lifestyle-Renderings für ein exklusives Klippenanwesen an der Küste.',
      p3Type: 'Interieur & Lebensart · Valencia',
      p3Title: 'Balcones del Turia',
      p3Desc: 'Atmosphärische Innenraumvisualisierung mit maßgefertigten Holzelementen und fließendem Raumkonzept.',
      p4Type: 'Sanierung · Valencia',
      p4Title: 'Ático Gran Vía',
      p4Desc: 'Historisches Penthouse nach Denkmalschutzsanierung: Verbindung klassischer Stuckaturen mit zeitgenössischer Architektur.',
      viewAllProjects: 'PROJEKTARCHIV ANSEHEN →',
      
      servKicker: 'GESAMTE BANDBREITE',
      servTitle: 'EIN STUDIO. DER GESAMTE LAUNCH-ZYKLUS.',
      s1Title: '01 3D-Visualisierung & Renders',
      s1Desc: 'Fotorealistische Außen- und Innenperspektiven. Kinematografische Lichtführung und absolute Detailtreue in 4K-Auflösung.',
      s2Title: '02 3D-Video & Virtuelle Rundgänge',
      s2Desc: 'Fließende Kamerafahrten, filmische Schnitte und vertikale Videoformate für digitale Kampagnen und Vor-Ort-Präsentationen.',
      s3Title: '03 Markenidentität & Branding',
      s3Desc: 'Naming, Projektgeschichte, Logos und Typografie, die die architektonische Wertigkeit auf den Punkt bringen.',
      s4Title: '04 Vermarktungsunterlagen & Exposés',
      s4Desc: 'Hochwertige Verkaufsdossiers, Exposés, Grundrissaufbereitungen und Baubeschreibungen für anspruchsvolle Investoren.',
      s5Title: '05 Projekt-Websites',
      s5Desc: 'Maßgeschneiderte, performante Verkaufs-Websites mit Wohnungsfinder, interaktiven Grundrissen und direkter Lead-Erfassung.',
      s6Title: '06 Digitale Vermarktung',
      s6Desc: 'Zielgerichtete Kampagnenführung zur Gewinnung solventer Kaufinteressenten ab Verkaufsfreigabe.',
      servBtn: 'PROJEKT BESPRECHEN →',
      
      layerKicker: 'METHODIK IM DETAIL',
      layerTitle: 'VOM ENTWURF ZUM RENDER. VIER PRÄZISIONSSCHRITTE.',
      layerSub: 'Scrollen Sie durch den interaktiven Bereich, um zu sehen, wie jede Ebene von der Geometrie bis zum finalen Bild aufgebaut wird.',
      l1Num: '01',
      l1Name: 'CLAY-MODELL',
      l1Detail: 'Volumetrische Kalibrierung, Kameraperspektive & Ausrichtung.',
      l2Num: '02',
      l2Name: 'MATERIALITÄT',
      l2Detail: 'PBR-Texturen, Oberflächenhaptik und echte Steinmaserungen.',
      l3Num: '03',
      l3Name: 'BELEUCHTUNG',
      l3Detail: 'Sonnenstand, atmosphärische Streuung & warme Innenraumakzente.',
      l4Num: '04',
      l4Name: 'FINALES RENDER',
      l4Detail: 'Fotografische Postproduktion, Farbkorrektur & atmosphärische Tiefe.',
      
      compKicker: 'LICHTSTUDIE',
      compTitle: 'LICHTVERGLEICH: TAG VS. NACHT',
      compSub: 'Verschieben Sie den Regler, um die Wirkung natürlicher Sonnenstrahlen und warmer Abendbeleuchtung zu vergleichen.',
      compTag1: 'NATÜRLICHES TAGESLICHT',
      compTag2: 'DÄMMERUNG & INTERIEURBELEUCHTUNG',
      
      studioKicker: 'ARCHITEKTINISCHER ANSPRUCH',
      studioTitle: 'ARCHITEKTUR, NICHT NUR SOFTWARE.',
      st1Title: 'Architekturverständnis',
      st1Desc: 'Wir lesen und verstehen Ausführungspläne, BIM-Modelle und Materialspezifikationen ohne Informationsverlust.',
      st2Title: 'Kreative Regie',
      st2Desc: 'Jeder Bildausschnitt, jede Brennweite und jede Reflexion wird kuratiert, um den Wert des Projekts spürbar zu machen.',
      st3Title: 'Fester Ansprechpartner',
      st3Desc: 'Vom ersten CAD-Datensatz bis zum Verkaufsstart begleitet Sie ein eingespieltes Team mit direktem Draht.',
      
      procKicker: 'METODOLOGIE',
      procTitle: 'VIER PHASEN. ABSOLUTE VERLÄSSLICHKEIT.',
      pr1Num: '01',
      pr1Title: 'Analyse & Geometrie',
      pr1Desc: 'Sichtung der CAD/BIM-Daten, Modellierung der Volumina und Festlegung der marketingrelevanten Blickwinkel.',
      pr2Num: '02',
      pr2Title: 'Material & Lichtführung',
      pr2Desc: 'Zuweisung realer Baustoffe, Sonnenstandsberechnung und atmosphärische Lichtproben zur Freigabe.',
      pr3Num: '03',
      pr3Title: 'Integrale Produktion',
      pr3Desc: 'Rendering in hochauflösendem 4K, Videoschnitt, Gestaltung des Exposés und Aufbereitung für den Vertrieb.',
      pr4Num: '04',
      pr4Title: 'Übergabe & Launch',
      pr4Desc: 'Bereitstellung aller finalen Medienformate für Web, Print, Bauschilder und Vertriebsmeetings.',
      procBtn: 'LAUNCH PLANEN →',
      
      contactKicker: 'DIREKTER KONTAKT',
      contactTitle: 'VOM ARCHITEKTURENTWURF<br>ZUM VERKAUFSSTART.<br><span style="color: var(--accent-on-dark);">SPRECHEN WIR.</span>',
      contactText: 'Wenn Sie ein Neubauprojekt planen und Bildsprache, Vermarktungsmaterialien sowie Launch-Strategie festlegen möchten, stellen Sie uns Ihr Projekt vor.',
      contactBtn: 'PROJEKT BESPRECHEN →',
      contactHq: 'Hauptsitz · Valencia, Spanien',
      contactScope: 'Aktionsradius · Spanien · Deutschland · Schweiz · Vereinigtes Königreich · Frankreich',
      
      footerAbout: 'Visueller Partner für Immobilienentwickler. Vom Architekturentwurf zum Verkaufsstart.',
      footerNav: 'Navigation',
      footerCaps: 'Leistungen',
      footerContact: 'Direkter Kontakt',
      footerRights: '© 2026 Eidos Render. Alle Rechte vorbehalten.',
      legal: 'Impressum',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      faq: 'Häufig gestellte Fragen'
    },
    fr: {
      lang: 'fr',
      title: 'Eidos Render | Visualisation Architecturale & Lancement Immobilier',
      desc: 'Visualisation architecturale 3D haut de gamme, direction artistique et supports de vente pour promotions immobilières et architecture en Europe.',
      canonical: 'https://eidosrender.es/fr/',
      ogDesc: 'Partenaire visuel pour programmes immobiliers. Du projet architectural au lancement commercial.',
      
      navProjects: 'Projets',
      navServices: 'Services',
      navStudio: 'Studio',
      navProcess: 'Processus',
      navContact: 'Contact',
      navCta: 'PARLONS DU PROJET →',
      
      heroKicker: 'STUDIO VISUEL & DIRECTION DE LANCEMENT IMMOBILIER',
      heroL1: 'NOUS PARTONS DE L’ARCHITECTURE.',
      heroL2: 'NOUS CRÉONS SON IMAGE.',
      heroL3: 'ET NOUS LA PROJETONS VERS LE MARCHÉ.',
      heroPartner: 'Partenaire visuel pour promoteurs immobiliers, agences d’architecture et programmes d’exception.',
      heroTags: 'ARCHITECTURE · IMAGE · IDENTITÉ · COMMERCIAL · DIGITAL · ACQUISITION',
      heroBtn: 'PARLONS DE VOTRE PROJET →',
      
      mTitle: 'LE RENDU EST LE PRODUIT',
      mLead: 'Un rendu n’est pas un simple document technique. C’est le premier actif commercial d’un programme immobilier.',
      mP: 'Sur le marché immobilier actuel, l’acquéreur achète une émotion avant même que les fondations ne soient coulées. Nous abordons l’image avec exigence architecturale et finalité commerciale : cadrages narratifs, lumière cinématographique et mise en valeur spatiale.',
      
      galKicker: 'SÉLECTION ARCHITECTURALE',
      galTitle: 'DOSSIERS DE PROGRAMMES',
      p1Type: 'Résidentiel Collectif · Valence',
      p1Title: 'Edificio Viveros',
      p1Desc: 'Campagne 3D complète pour une promotion de 24 appartements d’exception en lisière des jardins royaux.',
      p2Type: 'Villa d’Architecte · Alicante',
      p2Title: 'Villa Moraira',
      p2Desc: 'Étude d’ensoleillement, matérialité méditerranéenne et images de style de vie pour une demeure de prestige en falaise.',
      p3Type: 'Espaces & Atmosphère · Valence',
      p3Title: 'Balcones del Turia',
      p3Desc: 'Visualisation intérieure sensible mettant en avant la noblesse des bois, textures douces et fluidité des volumes.',
      p4Type: 'Réhabilitation · Valence',
      p4Title: 'Ático Gran Vía',
      p4Desc: 'Rénovation d’un attique patrimonial : mariage de moulures classiques et de lignes épurées pour la pré-commercialisation.',
      viewAllProjects: 'VOIR L’ARCHIVE DES PROJETS →',
      
      servKicker: 'CHAMP D’EXPERTISE',
      servTitle: 'UN SEUL STUDIO. TOUT LE CYCLE DE COMMERCIALISATION.',
      s1Title: '01 Visualisation 3D & Rendus',
      s1Desc: 'Rendus photoréalistes extérieurs, intérieurs et paysagers. Études d’éclairage cinématographiques en ultra haute définition 4K.',
      s2Title: '02 Vidéo 3D & Visites Virtuelles',
      s2Desc: 'Parcours architecturaux fluides, montages cinématographiques et capsules verticales pour campagnes digitales.',
      s3Title: '03 Identité de Marque & Branding',
      s3Desc: 'Naming, narration de projet, univers graphique et typographie soulignant l’élégance du projet architectural.',
      s4Title: '04 Outils Commerciaux & Brochures',
      s4Desc: 'Dossiers de vente éditoriaux, brochures d’exception, plans de vente harmonisés et fiches techniques d’investissement.',
      s5Title: '05 Sites Web Immobiliers',
      s5Desc: 'Sites promotionnels sur-mesure et réactifs avec sélecteur de lots, plans interactifs et prise de contact directe.',
      s6Title: '06 Acquisition Digitale',
      s6Desc: 'Direction de campagnes digitales ciblées pour attirer une clientèle qualifiée dès l’ouverture de la commercialisation.',
      servBtn: 'PARLONS DE VOTRE PROJET →',
      
      layerKicker: 'MÉTHODOLOGIE DÉTAILLÉE',
      layerTitle: 'DE L’ESQUISSE AU RENDU. QUATRE COUCHES DE PRÉCISION.',
      layerSub: 'Faites défiler pour observer la construction progressive de l’image, de la volumétrie brute à la retouche photographique finale.',
      l1Num: '01',
      l1Name: 'VOLUME CLAY',
      l1Detail: 'Calibrage volumétrique, focale caméra & perspectives architecturales.',
      l2Num: '02',
      l2Name: 'MATÉRIALITÉ',
      l2Detail: 'Textures physiques (PBR), grain des pierres et vérité des textures.',
      l3Num: '03',
      l3Name: 'ÉCLAIRAGE',
      l3Detail: 'Course solaire, diffusion atmosphérique & chaleur des lumières intérieures.',
      l4Num: '04',
      l4Name: 'RENDU FINAL',
      l4Detail: 'Post-production photographique, étalonnage chromatique et profondeur d’air.',
      
      compKicker: 'ÉTUDE D’ÉCLAIRAGE',
      compTitle: 'COMPARAISON SOLAIRE : JOUR VS. NUIT',
      compSub: 'Glissez le séparateur pour observer le comportement des volumes sous la lumière naturelle et sous l’ambiance nocturne.',
      compTag1: 'LUMIÈRE NATURELLE DIURNE',
      compTag2: 'CRÉPUSCULE & ÉCLAIRAGE INTÉRIEUR',
      
      studioKicker: 'RIGUEUR ARCHITECTURALE',
      studioTitle: 'L’ARCHITECTURE, PAS SEULEMENT LE LOGICIEL.',
      st1Title: 'Fondement Architectural',
      st1Desc: 'Nous comprenons les plans d’exécution, modèles BIM et détails constructifs sans déperdition technique.',
      st2Title: 'Direction Artistique',
      st2Desc: 'Chaque angle, chaque reflet et chaque cadrage est choisi pour sublimer la valeur perçue de l’opération.',
      st3Title: 'Interlocuteur Unique',
      st3Desc: 'Des premiers plans jusqu’à la livraison des visuels, un pôle dédié assure le respect rigoureux de votre calendrier.',
      
      procKicker: 'MÉTHODOLOGIE',
      procTitle: 'QUATRE ÉTAPES. CLARTÉ TOTALE.',
      pr1Num: '01',
      pr1Title: 'Analyse & Géométrie',
      pr1Desc: 'Étude des plans CAD/BIM, modélisation des volumes et sélection des cadrages stratégiques pour la commercialisation.',
      pr2Num: '02',
      pr2Title: 'Matières & Lumière',
      pr2Desc: 'Application des palettes réelles, calcul des ombres portées et validation des ambiances lumineuses préliminaires.',
      pr3Num: '03',
      pr3Title: 'Production Intégrale',
      pr3Desc: 'Calculs des rendus 4K, montages vidéo, création des brochures et développement des supports digitaux.',
      pr4Num: '04',
      pr4Title: 'Livraison & Lancement',
      pr4Desc: 'Remise des fichiers haute définition prêts pour les panneaux de chantier, la presse, le web et l’espace de vente.',
      procBtn: 'PLANIFIER LE LANCEMENT →',
      
      contactKicker: 'CONTACT DIRECT',
      contactTitle: 'DU PROJET ARCHITECTURAL<br>AU LANCEMENT COMMERCIAL.<br><span style="color: var(--accent-on-dark);">PARLONS-EN.</span>',
      contactText: 'Si vous préparez une promotion immobilière et souhaitez concevoir son univers visuel, ses supports de vente et sa stratégie de lancement, présentez-nous votre projet.',
      contactBtn: 'PARLONS DE VOTRE PROJET →',
      contactHq: 'Siège · Valence, Espagne',
      contactScope: 'Rayonnement · Espagne · France · Suisse · Royaume-Uni · Allemagne',
      
      footerAbout: 'Partenaire visuel et créatif pour programmes immobiliers. Du projet architectural au lancement commercial.',
      footerNav: 'Navigation',
      footerCaps: 'Expertises',
      footerContact: 'Contact Direct',
      footerRights: '© 2026 Eidos Render. Tous droits réservés.',
      legal: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
      cookies: 'Cookies',
      faq: 'Foire Aux Questions'
    }
  };

  const c = content[lang];
  const homeEs = '../';
  const homeEn = lang === 'en' ? './' : '../en/';
  const homeDe = lang === 'de' ? './' : '../de/';
  const homeFr = lang === 'fr' ? './' : '../fr/';

  const projectsLink = lang === 'en' ? 'projects.html' : (lang === 'de' ? 'projekte.html' : 'projets.html');
  const servicesLink = lang === 'en' ? 'services.html' : (lang === 'de' ? 'leistungen.html' : 'services.html');
  const contactPageLink = lang === 'en' ? 'contact.html' : (lang === 'de' ? 'kontakt.html' : 'contact.html');
  const legalLink = lang === 'en' ? 'legal-notice.html' : (lang === 'de' ? 'impressum.html' : 'mentions-legales.html');
  const privacyLink = lang === 'en' ? 'privacy-policy.html' : (lang === 'de' ? 'datenschutz.html' : 'politique-de-confidentialite.html');
  const cookiesLink = lang === 'en' ? 'cookie-policy.html' : (lang === 'de' ? 'cookies.html' : 'politique-des-cookies.html');

  return `<!DOCTYPE html>
<html lang="${c.lang}">
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
  
  <title>${c.title}</title>
  <meta name="description" content="${c.desc}">
  <link rel="canonical" href="${c.canonical}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/">

  <!-- Multilingual & Geo-routing -->
  <script src="../js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="${c.title}">
  <meta property="og:description" content="${c.ogDesc}">
  <meta property="og:url" content="${c.canonical}">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <link rel="shortcut icon" href="../favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">

  <link rel="stylesheet" href="../style.css">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eidosrender.es/#organization",
        "name": "Eidos Render",
        "url": "${c.canonical}",
        "logo": "https://eidosrender.es/favicon.svg",
        "email": "info@eidosrender.es",
        "telephone": "+34614459144",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Valencia",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://eidosrender.es/#website",
        "url": "${c.canonical}",
        "name": "Eidos Render",
        "publisher": { "@id": "https://eidosrender.es/#organization" }
      }
    ]
  }
  </script>
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- =====================================================
       00. HEADER FIJO Y DISCRETO (Compacting & Auto-hide)
       ===================================================== -->
  <header class="nav-header" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render">
        <svg class="isotype-icon" viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
          <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent)" stroke-width="2" stroke-linecap="square" class="iso-line"/>
        </svg>
        <span class="logo-text">EIDOS RENDER</span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="#proyectos">${c.navProjects}</a></li>
          <li><a href="#servicios">${c.navServices}</a></li>
          <li><a href="#estudio">${c.navStudio}</a></li>
          <li><a href="#proceso">${c.navProcess}</a></li>
          <li><a href="#contacto">${c.navContact}</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language Selector">
          <a href="${homeEs}" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <span class="${lang === 'en' ? 'active' : ''}">${lang === 'en' ? 'EN' : `<a href="${homeEn}" onclick="window.setLang('en')">EN</a>`}</span>
          <span class="lang-divider">/</span>
          <span class="${lang === 'de' ? 'active' : ''}">${lang === 'de' ? 'DE' : `<a href="${homeDe}" onclick="window.setLang('de')">DE</a>`}</span>
          <span class="lang-divider">/</span>
          <span class="${lang === 'fr' ? 'active' : ''}">${lang === 'fr' ? 'FR' : `<a href="${homeFr}" onclick="window.setLang('fr')">FR</a>`}</span>
        </div>

        <a href="#contacto" class="nav-cta">
          ${c.navCta}
        </a>
      </div>

      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Language Selector">
        <a href="${homeEs}" onclick="window.setLang('es')">ES</a>
        <a href="${homeEn}" class="${lang === 'en' ? 'active' : ''}">EN</a>
        <a href="${homeDe}" class="${lang === 'de' ? 'active' : ''}">DE</a>
        <a href="${homeFr}" class="${lang === 'fr' ? 'active' : ''}">FR</a>
      </div>

      <span class="kicker crimson">${c.footerNav}</span>
      <ul class="mobile-nav-links">
        <li><a href="#proyectos">${c.navProjects}</a></li>
        <li><a href="#servicios">${c.navServices}</a></li>
        <li><a href="#estudio">${c.navStudio}</a></li>
        <li><a href="#del-boceto-al-render">${c.layerKicker}</a></li>
        <li><a href="#proceso">${c.navProcess}</a></li>
        <li><a href="#contacto">${c.navContact}</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Architectural Visualisation</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main id="main-content">

    <!-- =====================================================
         01. HERO SECTION (Feature 3)
         ===================================================== -->
    <section class="hero-section" aria-label="Introduction">
      <div class="hero-media-wrap">
        <picture>
          <source srcset="../img/render-fachada-edificio-obra-nueva-1600.jpg" media="(min-width: 768px)">
          <img src="../img/render-fachada-edificio-obra-nueva-800.jpg" alt="High-end Architectural Visualisation" class="hero-media-img" loading="eager" fetchpriority="high">
        </picture>
        <div class="hero-veil"></div>
      </div>

      <div class="hero-content">
        <div class="container hero-container-layout">
          
          <div class="hero-kicker-wrap">
            <span class="kicker" style="color: var(--accent-on-dark); letter-spacing: 0.22em;">
              ${c.heroKicker}
            </span>
          </div>

          <h1 class="hero-headline" aria-label="${c.heroL1} ${c.heroL2} ${c.heroL3}">
            <span class="hero-headline-line"><span>${c.heroL1}</span></span>
            <span class="hero-headline-line"><span>${c.heroL2}</span></span>
            <span class="hero-headline-line"><span style="color: var(--accent-on-dark);">${c.heroL3}</span></span>
          </h1>

          <div class="hero-bottom-grid">
            <div class="hero-statement-copy">
              <span class="kicker" style="color: rgba(239, 233, 220, 0.6); display: block; margin-bottom: 8px;">
                PARTNER VISUAL
              </span>
              <p class="body-large" style="color: var(--cream); font-size: 1.12rem; margin: 0; line-height: 1.55;">
                ${c.heroPartner}
              </p>
            </div>

            <div class="hero-cta-group">
              <div class="hero-capsules" aria-hidden="true">
                ${c.heroTags}
              </div>
              <a href="#contacto" class="btn-editorial btn-crimson" style="white-space: nowrap;">
                ${c.heroBtn}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =====================================================
         02. MANIFIESTO: EL RENDER ES EL PRODUCTO
         ===================================================== -->
    <section class="section manifesto-section bg-paper">
      <div class="container">
        <div class="manifesto-grid">
          <div class="manifesto-kicker-col">
            <span class="kicker crimson">${c.mTitle}</span>
          </div>
          <div class="manifesto-content-col">
            <h2 class="manifesto-statement">
              ${c.mLead}
            </h2>
            <p class="manifesto-body">
              ${c.mP}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         03. GALERÍA HORIZONTAL ANCLADA (Feature 7)
         ===================================================== -->
    <section id="proyectos" class="pinned-gallery-section" aria-label="Portfolio">
      <div class="pinned-gallery-wrapper">
        
        <div class="pinned-gallery-header">
          <span class="kicker" style="color: var(--accent-on-dark);">${c.galKicker}</span>
          <h2 class="display-title" style="color: var(--cream); margin: 0; font-size: clamp(2rem, 3.8vw, 3.6rem);">
            ${c.galTitle}
          </h2>
        </div>

        <div class="pinned-gallery-track">
          
          <article class="gallery-card">
            <div class="gallery-card-inner">
              <div class="gallery-card-media">
                <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="${c.p1Title}" loading="lazy">
              </div>
              <div class="gallery-card-info">
                <span class="gallery-card-type">${c.p1Type}</span>
                <h3 class="gallery-card-title">${c.p1Title}</h3>
                <p class="gallery-card-desc">${c.p1Desc}</p>
              </div>
            </div>
          </article>

          <article class="gallery-card">
            <div class="gallery-card-inner">
              <div class="gallery-card-media">
                <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="${c.p2Title}" loading="lazy">
              </div>
              <div class="gallery-card-info">
                <span class="gallery-card-type">${c.p2Type}</span>
                <h3 class="gallery-card-title">${c.p2Title}</h3>
                <p class="gallery-card-desc">${c.p2Desc}</p>
              </div>
            </div>
          </article>

          <article class="gallery-card">
            <div class="gallery-card-inner">
              <div class="gallery-card-media">
                <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="${c.p3Title}" loading="lazy">
              </div>
              <div class="gallery-card-info">
                <span class="gallery-card-type">${c.p3Type}</span>
                <h3 class="gallery-card-title">${c.p3Title}</h3>
                <p class="gallery-card-desc">${c.p3Desc}</p>
              </div>
            </div>
          </article>

          <article class="gallery-card">
            <div class="gallery-card-inner">
              <div class="gallery-card-media">
                <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="${c.p4Title}" loading="lazy">
              </div>
              <div class="gallery-card-info">
                <span class="gallery-card-type">${c.p4Type}</span>
                <h3 class="gallery-card-title">${c.p4Title}</h3>
                <p class="gallery-card-desc">${c.p4Desc}</p>
              </div>
            </div>
          </article>

        </div>

        <div class="pinned-gallery-progress">
          <div class="pinned-gallery-progress-bar"></div>
        </div>

      </div>

      <div class="container" style="padding-top: 40px; padding-bottom: 20px; text-align: right;">
        <a href="${projectsLink}" class="link-draw" style="font-family: var(--font-display); font-size: 1.05rem; letter-spacing: 0.12em; color: var(--cream);">
          ${c.viewAllProjects}
        </a>
      </div>
    </section>

    <!-- =====================================================
         04. SERVICIOS INTEGRALES
         ===================================================== -->
    <section id="servicios" class="section bg-paper">
      <div class="container">
        
        <div style="border-bottom: 1px solid var(--line); padding-bottom: 40px; margin-bottom: 60px;">
          <span class="kicker crimson">${c.servKicker}</span>
          <h2 class="display-title" style="margin-top: 12px; margin-bottom: 0;">
            ${c.servTitle}
          </h2>
        </div>

        <div class="grid-services">
          
          <div class="service-item">
            <h3 class="display-sub">${c.s1Title}</h3>
            <p class="body-regular body-muted">${c.s1Desc}</p>
          </div>

          <div class="service-item">
            <h3 class="display-sub">${c.s2Title}</h3>
            <p class="body-regular body-muted">${c.s2Desc}</p>
          </div>

          <div class="service-item">
            <h3 class="display-sub">${c.s3Title}</h3>
            <p class="body-regular body-muted">${c.s3Desc}</p>
          </div>

          <div class="service-item">
            <h3 class="display-sub">${c.s4Title}</h3>
            <p class="body-regular body-muted">${c.s4Desc}</p>
          </div>

          <div class="service-item">
            <h3 class="display-sub">${c.s5Title}</h3>
            <p class="body-regular body-muted">${c.s5Desc}</p>
          </div>

          <div class="service-item">
            <h3 class="display-sub">${c.s6Title}</h3>
            <p class="body-regular body-muted">${c.s6Desc}</p>
          </div>

        </div>

        <div style="margin-top: 60px; text-align: center;">
          <a href="#contacto" class="btn-editorial btn-crimson">
            ${c.servBtn}
          </a>
        </div>

      </div>
    </section>

    <!-- =====================================================
         05. DEL BOCETO AL RENDER — LAYER SCRUB (Feature 4)
         ===================================================== -->
    <section id="del-boceto-al-render" class="layer-scrub-section" aria-label="Process">
      <div class="layer-scrub-sticky">
        
        <div class="layer-scrub-topbar">
          <div>
            <span class="kicker" style="color: var(--accent-on-dark);">${c.layerKicker}</span>
            <h2 class="display-sub" style="color: var(--cream); margin: 0; font-size: clamp(1.4rem, 2.5vw, 2.2rem);">
              ${c.layerTitle}
            </h2>
          </div>
          <p class="body-regular" style="color: rgba(239, 233, 220, 0.7); max-width: 440px; margin: 0; font-size: 0.95rem;">
            ${c.layerSub}
          </p>
        </div>

        <div class="layer-scrub-viewport">
          
          <div class="layer-slide is-active" data-layer-idx="0">
            <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="${c.l1Name}" style="filter: grayscale(100%) contrast(1.2) brightness(0.9);">
            <div class="layer-badge">
              <span class="layer-badge-num">${c.l1Num}</span>
              <span class="layer-badge-name">${c.l1Name}</span>
              <span class="layer-badge-detail">${c.l1Detail}</span>
            </div>
          </div>

          <div class="layer-slide" data-layer-idx="1">
            <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="${c.l2Name}" style="filter: sepia(30%) contrast(1.05) saturate(0.7);">
            <div class="layer-badge">
              <span class="layer-badge-num">${c.l2Num}</span>
              <span class="layer-badge-name">${c.l2Name}</span>
              <span class="layer-badge-detail">${c.l2Detail}</span>
            </div>
          </div>

          <div class="layer-slide" data-layer-idx="2">
            <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="${c.l3Name}" style="filter: contrast(1.15) brightness(1.05);">
            <div class="layer-badge">
              <span class="layer-badge-num">${c.l3Num}</span>
              <span class="layer-badge-name">${c.l3Name}</span>
              <span class="layer-badge-detail">${c.l3Detail}</span>
            </div>
          </div>

          <div class="layer-slide" data-layer-idx="3">
            <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="${c.l4Name}">
            <div class="layer-badge">
              <span class="layer-badge-num">${c.l4Num}</span>
              <span class="layer-badge-name">${c.l4Name}</span>
              <span class="layer-badge-detail">${c.l4Detail}</span>
            </div>
          </div>

        </div>

        <div class="layer-scrub-nav" role="tablist">
          <button class="layer-dot is-active" role="tab" aria-selected="true" data-target="0">
            <span>${c.l1Num}</span> ${c.l1Name}
          </button>
          <button class="layer-dot" role="tab" aria-selected="false" data-target="1">
            <span>${c.l2Num}</span> ${c.l2Name}
          </button>
          <button class="layer-dot" role="tab" aria-selected="false" data-target="2">
            <span>${c.l3Num}</span> ${c.l3Name}
          </button>
          <button class="layer-dot" role="tab" aria-selected="false" data-target="3">
            <span>${c.l4Num}</span> ${c.l4Name}
          </button>
        </div>

      </div>
    </section>

    <!-- =====================================================
         06. COMPARADOR DÍA / NOCHE (Feature 5)
         ===================================================== -->
    <section id="estudio-de-luz" class="section bg-paper">
      <div class="container">
        
        <div style="border-bottom: 1px solid var(--line); padding-bottom: 28px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px;">
          <div>
            <span class="kicker crimson">${c.compKicker}</span>
            <h2 class="display-title" style="margin-top: 8px; margin-bottom: 0;">
              ${c.compTitle}
            </h2>
          </div>
          <p class="body-regular body-muted" style="max-width: 420px; margin: 0;">
            ${c.compSub}
          </p>
        </div>

        <div class="comparator-wrap" aria-label="Interactive daylight comparison">
          
          <div class="comp-media comp-media-before">
            <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="${c.compTag1}">
            <div class="comp-tag comp-tag-left">${c.compTag1}</div>
          </div>

          <div class="comp-media comp-media-after">
            <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="${c.compTag2}" style="filter: brightness(0.85) contrast(1.15) hue-rotate(180deg) saturate(1.2);">
            <div class="comp-tag comp-tag-right">${c.compTag2}</div>
          </div>

          <div class="comp-handle" role="slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" tabindex="0">
            <div class="comp-handle-line"></div>
            <div class="comp-handle-button" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M8 5v14l-6-7 6-7zm8 0v14l6-7-6-7z"/>
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- =====================================================
         07. ESTUDIO & POSICIONAMIENTO
         ===================================================== -->
    <section id="estudio" class="section bg-soft">
      <div class="container">
        
        <div class="grid-12">
          
          <div style="grid-column: 1 / 6;">
            <span class="kicker crimson">${c.studioKicker}</span>
            <h2 class="display-title" style="margin-top: 16px; margin-bottom: 24px;">
              ${c.studioTitle}
            </h2>
          </div>

          <div style="grid-column: 7 / 13; display: flex; flex-direction: column; gap: 36px;">
            <div>
              <h3 class="display-sub" style="font-size: 1.5rem; margin-bottom: 12px;">${c.st1Title}</h3>
              <p class="body-regular body-muted">${c.st1Desc}</p>
            </div>

            <div style="border-top: 1px solid var(--line); padding-top: 36px;">
              <h3 class="display-sub" style="font-size: 1.5rem; margin-bottom: 12px;">${c.st2Title}</h3>
              <p class="body-regular body-muted">${c.st2Desc}</p>
            </div>

            <div style="border-top: 1px solid var(--line); padding-top: 36px;">
              <h3 class="display-sub" style="font-size: 1.5rem; margin-bottom: 12px;">${c.st3Title}</h3>
              <p class="body-regular body-muted">${c.st3Desc}</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- =====================================================
         08. METODOLOGÍA (Cuatro Fases)
         ===================================================== -->
    <section id="proceso" class="section bg-paper">
      <div class="container">
        
        <div style="border-bottom: 1px solid var(--line); padding-bottom: 32px; margin-bottom: 60px;">
          <span class="kicker crimson">${c.procKicker}</span>
          <h2 class="display-title" style="margin-top: 12px; margin-bottom: 0;">
            ${c.procTitle}
          </h2>
        </div>

        <div class="grid-services">
          
          <div class="service-item">
            <span class="kicker signal" style="font-size: 1.5rem; color: var(--accent); margin-bottom: 16px; display: block;">${c.pr1Num}</span>
            <h3 class="display-sub">${c.pr1Title}</h3>
            <p class="body-regular body-muted">${c.pr1Desc}</p>
          </div>

          <div class="service-item">
            <span class="kicker signal" style="font-size: 1.5rem; color: var(--accent); margin-bottom: 16px; display: block;">${c.pr2Num}</span>
            <h3 class="display-sub">${c.pr2Title}</h3>
            <p class="body-regular body-muted">${c.pr2Desc}</p>
          </div>

          <div class="service-item">
            <span class="kicker signal" style="font-size: 1.5rem; color: var(--accent); margin-bottom: 16px; display: block;">${c.pr3Num}</span>
            <h3 class="display-sub">${c.pr3Title}</h3>
            <p class="body-regular body-muted">${c.pr3Desc}</p>
          </div>

          <div class="service-item">
            <span class="kicker signal" style="font-size: 1.5rem; color: var(--accent); margin-bottom: 16px; display: block;">${c.pr4Num}</span>
            <h3 class="display-sub">${c.pr4Title}</h3>
            <p class="body-regular body-muted">${c.pr4Desc}</p>
          </div>

        </div>

        <div style="margin-top: 60px; text-align: center;">
          <a href="#contacto" class="btn-editorial btn-crimson">
            ${c.procBtn}
          </a>
        </div>

      </div>
    </section>

    <!-- =====================================================
         09. CONTACTO EDITORIAL DIRECTO
         ===================================================== -->
    <section id="contacto" class="section bg-charcoal" style="color: var(--cream); padding: clamp(100px, 14vw, 180px) 0;">
      <div class="container">
        
        <div style="max-width: 980px;">
          <span class="kicker" style="color: var(--accent-on-dark); letter-spacing: 0.22em; margin-bottom: 24px; display: block;">
            ${c.contactKicker}
          </span>
          
          <h2 class="display-title" style="color: var(--cream); font-size: clamp(2.8rem, 6vw, 6.2rem); line-height: 1.02; margin-bottom: 40px; letter-spacing: -0.02em;">
            ${c.contactTitle}
          </h2>

          <p class="body-large" style="color: rgba(239, 233, 220, 0.8); max-width: 640px; font-size: 1.25rem; margin-bottom: 48px; line-height: 1.6;">
            ${c.contactText}
          </p>

          <div style="display: flex; gap: 32px; align-items: center; flex-wrap: wrap; margin-bottom: 60px;">
            <a href="mailto:info@eidosrender.es?subject=Property%20Development%20Inquiry" class="btn-editorial btn-crimson" style="padding: 20px 40px; font-size: 1.1rem;">
              ${c.contactBtn}
            </a>
            <a href="mailto:info@eidosrender.es" class="link-draw" style="font-size: 1.15rem; color: var(--cream); text-transform: lowercase;">
              info@eidosrender.es
            </a>
            <a href="tel:+34614459144" class="link-draw" style="font-size: 1.1rem; color: rgba(239, 233, 220, 0.7);">
              +34 614 45 91 44
            </a>
          </div>

          <div style="margin-top: 64px; padding-top: 32px; border-top: 1px solid var(--line-dark); display: flex; gap: 40px; flex-wrap: wrap; color: var(--stone); font-family: var(--font-display); font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase;">
            <div>${c.contactHq}</div>
            <div>${c.contactScope}</div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- =====================================================
       10. FOOTER EDITORIAL TIPO CORTINA (Feature 11)
       ===================================================== -->
  <div class="curtain-footer-wrap">
    <footer class="curtain-footer" role="contentinfo">
      <div class="container">
        
        <div class="footer-top">
          <div>
            <a href="./" class="logo" style="margin-bottom: 20px;" aria-label="Eidos Render">
              <svg class="isotype-icon" viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
                <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent-on-dark)" stroke-width="2" stroke-linecap="square"/>
              </svg>
              <span class="logo-text">EIDOS RENDER</span>
            </a>
            <p class="body-regular" style="color: rgba(239, 233, 220, 0.65); max-width: 380px;">
              ${c.footerAbout}
            </p>
          </div>

          <div>
            <div class="footer-col-title">${c.footerNav}</div>
            <ul class="footer-links">
              <li><a href="#proyectos">${c.navProjects}</a></li>
              <li><a href="#servicios">${c.navServices}</a></li>
              <li><a href="#estudio">${c.navStudio}</a></li>
              <li><a href="#del-boceto-al-render">${c.layerKicker}</a></li>
              <li><a href="#proceso">${c.navProcess}</a></li>
              <li><a href="#contacto">${c.navContact}</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">${c.footerCaps}</div>
            <ul class="footer-links">
              <li><a href="${servicesLink}">${c.navServices}</a></li>
              <li><a href="${projectsLink}">${c.navProjects}</a></li>
              <li><a href="${contactPageLink}">${c.navContact}</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">${c.footerContact}</div>
            <ul class="footer-links">
              <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
              <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
              <li><span style="color: rgba(239, 233, 220, 0.5);">Valencia · Europa</span></li>
              <li><a href="${lang === 'en' ? 'faq.html' : (lang === 'de' ? 'faq.html' : 'faq.html')}">${c.faq}</a></li>
            </ul>
          </div>
        </div>

        <!-- Banner Monumental a Ancho Completo -->
        <div class="curtain-brand-banner" aria-hidden="true">
          <span>EIDOS RENDER</span>
        </div>

        <div class="footer-bottom">
          <div>${c.footerRights}</div>
          <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
            <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
              <a href="${homeEs}" onclick="window.setLang('es')">ES</a> ·
              <span style="color: ${lang === 'en' ? 'var(--accent-on-dark)' : 'inherit'}; font-weight: ${lang === 'en' ? '700' : '400'};"><a href="${homeEn}" onclick="window.setLang('en')">EN</a></span> ·
              <span style="color: ${lang === 'de' ? 'var(--accent-on-dark)' : 'inherit'}; font-weight: ${lang === 'de' ? '700' : '400'};"><a href="${homeDe}" onclick="window.setLang('de')">DE</a></span> ·
              <span style="color: ${lang === 'fr' ? 'var(--accent-on-dark)' : 'inherit'}; font-weight: ${lang === 'fr' ? '700' : '400'};"><a href="${homeFr}" onclick="window.setLang('fr')">FR</a></span>
            </div>
            <a href="${legalLink}">${c.legal}</a>
            <a href="${privacyLink}">${c.privacy}</a>
            <a href="${cookiesLink}">${c.cookies}</a>
          </div>
        </div>

      </div>
    </footer>
  </div>

  <script src="../main.js" defer></script>
</body>
</html>
`;
}

// Generate en/index.html, de/index.html, fr/index.html
['en', 'de', 'fr'].forEach(lang => {
  const html = buildHomePage(lang);
  const outPath = path.join(root, lang, 'index.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`Generated: ${lang}/index.html`);
});

console.log('International homepages synchronized with full luxury master structure!');
