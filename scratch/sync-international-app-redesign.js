const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const locales = {
  en: {
    lang: 'en',
    title: 'Eidos Render — From Architectural Design to Market Launch',
    desc: 'Full-suite agency for real estate developments: brand direction, photorealistic 3D visualization, video, editorial dossiers, websites, and digital acquisition.',
    canonical: 'https://eidosrender.es/en/',
    prefix: '../',
    homeLink: 'index.html',
    
    // Header
    brandName: 'EIDOS RENDER',
    menuBtn: 'MENU',
    appTitle: 'EIDOS RENDER · APP',
    nav1: 'Home',
    nav2: 'Services & Capabilities',
    nav3: 'Case Portfolio',
    nav4: 'Brand Identity',
    nav5: 'Methodology',
    nav6: 'Direct Contact',
    appCta: 'DISCUSS YOUR PROJECT →',
    appSub: 'Valencia · Operating Across Europe',
    
    // Hero
    kicker: 'Full-Suite Agency for Real Estate Developments',
    heroH1Pre: 'From architectural',
    heroH1Acc: 'design',
    heroH1Post: 'to market launch.',
    heroSub: 'Brand direction, photorealistic 3D CGI, cinematic film, editorial sales dossiers, interactive web platforms, and digital acquisition. A unified vision from sketch to market.',
    ctaPrimary: 'DISCUSS YOUR PROJECT →',
    ctaSecondary: 'EXPLORE CAPABILITIES ↓',
    heroImgTag: '01 · COLLECTIVE RESIDENTIAL',
    heroImgLoc: 'VALENCIA, ES',
    
    // Intro
    introKicker: 'Comprehensive Vision',
    introH1: 'A development<br>needs<br><span class="text-prata-accent">a story.</span>',
    introP1: 'Architecture, identity, visualization, sales collateral, website, and digital campaigns must function as parts of the same cohesive system.',
    introP2: 'At Eidos Render, we craft that system from the initial CGI render to active digital market presale.',
    introLink: 'EXPLORE THE LAUNCH SYSTEM →',
    
    // Positioning
    posKicker: 'Positioning',
    posTitle: 'WE START FROM ARCHITECTURE.<br>WE BUILD ITS IMAGE.<br><span class="text-prata-accent" style="text-transform: none;">AND WE BRING IT TO MARKET.</span>',
    posCopy: 'Eidos Render is a visual and creative agency specializing in real estate. We partner with developers and architects from the visual definition of the project to its active commercial market launch.',
    
    // Services
    servKicker: 'Full Service',
    servTitle: 'One vision.<br><span class="text-prata-accent" style="color: var(--cream-2);">Every asset.</span>',
    servSub: 'From initial art direction to direct buyer acquisition for the property development.',
    s1Num: '01', s1Name: 'Brand & Identity', s1Short: 'Creative concept, visual positioning, identity, and graphic systems for real estate developments.',
    s1P: 'We define the conceptual universe of the development before rendering a single image. Naming, color palette, bespoke typography, communication tone, and styling guidelines.',
    s1Items: ['— Property brand manual', '— Typographic and chromatic systems', '— Showroom and hoarding applications', '— Templates for sales brokers'],
    
    s2Num: '02', s2Name: 'Architectural Imagery', s2Short: 'Photorealistic exterior, interior, amenities, and lifestyle 3D visualization of the highest caliber.',
    s2P: 'Our core credential. Photorealistic renders that do not merely exhibit geometry: they build atmosphere, rigorously simulate real light, and ignite buyer desire before groundbreaking.',
    s2Items: ['— Ultra-high-resolution CGI for large print and editorial dossiers', '— Photo-matching with actual drone and street environments', '— Natural lighting and atmospheric studies', '— Focus on noble materials, textures, and bespoke landscaping'],
    
    s3Num: '03', s3Name: 'Video & Animation', s3Short: 'Cinematic 3D animation, virtual tours, dynamic cuts, and vertical video assets for social media.',
    s3P: 'Motion allows prospective buyers to experience spatial flow, perceive the authentic scale of communal areas, and multiplies engagement across investor presentations and social campaigns.',
    s3Items: ['— Cinematic editing, color grading, and bespoke sound design', '— Formats tailored for Meta, Instagram Reels, and YouTube', '— Commercial walkthrough presentations', '— Motion assets for interactive sales galleries'],
    
    s4Num: '04', s4Name: 'Sales Collateral', s4Short: 'Editorial sales dossiers, 2D/3D textured floor plans, locality diagrams, and specification books.',
    s4P: 'We transform architectural blueprints into clear, elegant, and persuasive sales tools for commercial teams and high-net-worth buyers.',
    s4Items: ['— Interactive high-resolution PDF brochures and coffee table print books', '— Fully furnished and textured commercial floor plans', '— Curated neighborhood and connection infographics', '— Physical sales suite presentation assets'],
    
    s5Num: '05', s5Name: 'Development Websites', s5Short: 'UX/UI, bespoke development, interactive apartment selector, ultra-fast loading, and integrated lead capture.',
    s5P: 'We build the digital launch pad. Not a generic brochure site, but an interactive sales engine designed to explain architecture, filter typologies, and qualify prime buyers.',
    s5Items: ['— Responsive editorial typography and fluid layout', '— Interactive apartment and unit floor plan selector', '— Maximum Core Web Vitals and instant loading performance', '— Direct CRM and broker contact pipeline integration'],
    
    s6Num: '06', s6Name: 'Launch & Acquisition', s6Short: 'Google Ads, Meta Ads, CGI creative assets, advanced conversion tracking, and ongoing lead optimization.',
    s6P: 'With imagery and website perfected, we drive qualified buyer interest. We test CGI angles, messaging, and formats to connect with affluent investors and homeowners.',
    s6Items: ['— Geographic and purchase-intent segmentation across Europe', '— A/B creative testing with multiple renders and formats', '— Ongoing qualified lead reporting and transparent analytics', '— Continuous commercial conversion optimization'],
    servCta: 'DISCUSS YOUR PROJECT →',
    
    // Portfolio
    portKicker: 'Portfolio',
    portTitle: 'Singular <span class="text-prata-accent">Projects.</span>',
    portSub: 'High-precision architectural visualization for multi-family developments, luxury villas, and author architecture.',
    p1Name: 'Residential Building', p1Type: 'Collective Residential · Art Direction · Urban Context',
    p2Name: 'Amenities & Landscape', p2Type: '3D Visualization · Pools & Gardens · Cinematic Film',
    p3Name: 'Contemporary Villa', p3Type: 'Single-Family Villa · Infinity Pool · Coastal Integration',
    p4Name: 'Double-Height Penthouse', p4Type: 'Residential Interior Design · Interior CGI · Art Direction',
    portBtn: 'VIEW ALL PROJECTS →',
    
    // Video
    vidKicker: 'Video & Motion',
    vidTitle: 'From static render<br>to an experience<br><span class="text-prata-accent" style="color: var(--cream-2);">in motion.</span>',
    vidSub: 'Motion conveys spatial volume, captures light throughout the day, and creates emotional engagement that static images alone cannot achieve.',
    
    // Branding
    brandKicker: 'Development Identity',
    brandTitle: 'A development<br>also needs<br><span class="text-prata-accent">an identity.</span>',
    brandSub: 'Real estate branding is not a logo stamp. It is the strategic positioning that justifies price per square meter, connects with target buyers, and elevates every sales touchpoint.',
    brandCta: 'EXPLORE BRANDING SERVICES →',
    b1Title: 'Naming & Concept', b1Desc: 'Evocative naming with architectural resonance, commercial distinction, and European trademark clearance.',
    b2Title: 'Graphic System', b2Desc: 'Typography, custom color palettes, patterns, and editorial grids calibrated to high-net-worth buyers.',
    b3Title: 'Visual Direction', b3Desc: 'Styling, props, framing, and light mood boards applied consistently across all 3D CGI and photography.',
    b4Title: 'Applications', b4Desc: 'Design for site hoardings, on-site showroom graphics, signage, and handover key boxes.',
    
    // Process
    procKicker: 'Methodology',
    procTitle: 'From architecture<br><span class="text-prata-accent" style="color: var(--cream-2);">to market.</span>',
    f1Num: 'PHASE 01', f1Title: 'Briefing & Strategy', f1P: 'CAD/BIM intake, location analysis, target demographic profiling, and commercial timeline structuring.',
    f2Num: 'PHASE 02', f2Title: 'Identity & Naming', f2P: 'Commercial naming development, graphic identity system, and promotion brand guidelines.',
    f3Num: 'PHASE 03', f3Title: '3D CGI & Film', f3P: 'Photorealistic modeling, author photographic framing, atmospheric lighting, and cinematic walkthroughs.',
    f4Num: 'PHASE 04', f4Title: 'Dossier & Web', f4P: 'Editorial sales brochure layout, textured commercial floor plans, and interactive web platform launch.',
    
    // Contact
    cntKicker: 'Direct Contact',
    cntTitle: 'From design<br>to launch.<br><span class="text-prata-accent">Let’s talk.</span>',
    cntSub: 'If you are preparing a property development and want to define its image, sales materials, and commercial launch with architectural excellence, let us know your project.',
    cntEmail: 'SEND INQUIRY VIA EMAIL →',
    cntWa: 'DIRECT WHATSAPP: +34 614 45 91 44',
    
    // Footer
    footerSub: 'End-to-End Real Estate Image, Identity & Launch Agency',
    copy: '© 2026 Eidos Render. Valencia · Operating Nationally & Internationally across Europe.',
    legal: 'Legal Notice', privacy: 'Privacy Policy', cookies: 'Cookies Policy',
    legalUrl: 'legal-notice.html', privacyUrl: 'privacy-policy.html', cookiesUrl: 'cookie-policy.html'
  },
  
  de: {
    lang: 'de',
    title: 'Eidos Render — Vom architektonischen Entwurf zur Markteinführung',
    desc: 'Full-Service-Agentur für Immobilienprojekte: Markenführung, fotorealistische 3D-Visualisierung, Film, redaktionelle Verkaufsunterlagen, Webseiten und digitale Vermarktung.',
    canonical: 'https://eidosrender.es/de/',
    prefix: '../',
    homeLink: 'index.html',
    
    // Header
    brandName: 'EIDOS RENDER',
    menuBtn: 'MENÜ',
    appTitle: 'EIDOS RENDER · APP',
    nav1: 'Startseite',
    nav2: 'Leistungen & Kompetenzen',
    nav3: 'Projektportfolio',
    nav4: 'Markenidentität',
    nav5: 'Methodik',
    nav6: 'Direktkontakt',
    appCta: 'PROJEKT BESPRECHEN →',
    appSub: 'Valencia · Europaweiter Service',
    
    // Hero
    kicker: 'Full-Service-Agentur für Immobilienentwicklungen',
    heroH1Pre: 'Vom architektonischen',
    heroH1Acc: 'Entwurf',
    heroH1Post: 'zur Markteinführung.',
    heroSub: 'Markenführung, fotorealistische 3D-Visualisierung, filmische Renderings, redaktionelle Dossiers, interaktive Webplattformen und Lead-Kampagnen. Ein durchgängiges System vom ersten Entwurf bis zum Verkauf.',
    ctaPrimary: 'PROJEKT BESPRECHEN →',
    ctaSecondary: 'LEISTUNGEN ENTDECKEN ↓',
    heroImgTag: '01 · MEHRFAMILIENHAUS NEUBAU',
    heroImgLoc: 'VALENCIA, ES',
    
    // Intro
    introKicker: 'Ganzheitliche Vision',
    introH1: 'Ein Projekt<br>braucht<br><span class="text-prata-accent">eine Geschichte.</span>',
    introP1: 'Architektur, Markenidentität, Bildsprache, Verkaufsunterlagen, Webauftritt und Kampagnen müssen als Teile eines einzigen Systems ineinandergreifen.',
    introP2: 'Bei Eidos Render entwickeln wir dieses System vom ersten 3D-Rendering bis zur aktiven digitalen Vermarktung.',
    introLink: 'SYSTEM FÜR IMMOBILIENLAUNCH ENTDECKEN →',
    
    // Positioning
    posKicker: 'Positionierung',
    posTitle: 'WIR GEHEN VON DER ARCHITEKTUR AUS.<br>WIR FORMGEBEN IHRE BILDSPRACHE.<br><span class="text-prata-accent" style="text-transform: none;">UND FÜHREN SIE IN DEN MARKT.</span>',
    posCopy: 'Eidos Render ist ein visuelles und kreatives Studio, spezialisiert auf Immobilienprojekte. Wir begleiten Bauträger und Architekten von der visuellen Definition bis zum erfolgreichen Verkauf.',
    
    // Services
    servKicker: 'Ganzheitlicher Service',
    servTitle: 'Eine Vision.<br><span class="text-prata-accent" style="color: var(--cream-2);">Alle Bausteine.</span>',
    servSub: 'Von der strategischen Art Direction bis zur gezielten Käufergewinnung für Ihr Neubauprojekt.',
    s1Num: '01', s1Name: 'Markenführung & Identität', s1Short: 'Kreativkonzept, visuelle Positionierung, Naming und Corporate Design für Immobilien.',
    s1P: 'Wir definieren das Markenuniversum des Projekts, bevor das erste Rendering entsteht. Naming, Farbwelten, Typografie, Tonalität und Gestaltungsrichtlinien für absolute Markenkonsistenz.',
    s1Items: ['— Immobilien-Markenhandbuch', '— Typografie- und Farbsysteme', '— Showroom- und Bautafel-Design', '— Vorlagen für Makler und Vertrieb'],
    
    s2Num: '02', s2Name: 'Architekturvisualisierung', s2Short: 'Fotorealistische Außen- und Innenperspektiven, Gemeinschaftsbereiche und Lifestyle-CGI.',
    s2P: 'Unsere Kernkompetenz. 3D-Renderings, die mehr als Geometrie zeigen: Sie schaffen Atmosphäre, simulieren echtes Sonnenlicht und wecken Emotionen lange vor Baubeginn.',
    s2Items: ['— Großformatige Renderings für Bautafeln und Printdossiers', '— Fotomontage in reale Drohnen- und Umgebungsaufnahmen', '— Präzise Licht-, Schatten- und Materialsimulation', '— Fokus auf edle Hölzer, Naturstein und anspruchsvolle Bepflanzung'],
    
    s3Num: '03', s3Name: 'Film & 3D-Animation', s3Short: 'Filmische 3D-Rundgänge, virtuelle Kamerafahrten und Video-Assets für Social Media.',
    s3P: 'Bewegung vermittelt das echte Raumgefühl, demonstriert die Großzügigkeit der Grundrisse und vervielfacht das Engagement bei Investoren und Käufern.',
    s3Items: ['— Schnitt mit Color Grading und Sounddesign', '— Optimierte Formate für Meta, Instagram Reels und YouTube', '— Hochwertige Verkaufs- und Präsentationsfilme', '— Dynamische Screens für den Showroom'],
    
    s4Num: '04', s4Name: 'Verkaufsunterlagen & Dossiers', s4Short: 'Redaktionelle Verkaufsdossiers, möblierte 2D/3D-Grundrisse, Lagepläne und Baubeschreibungen.',
    s4P: 'Wir verwandeln technische Baupläne in verständliche, elegante und hochwirksame Verkaufsunterlagen für Makler und anspruchsvolle Interessenten.',
    s4Items: ['— Interaktive PDF-Exposés und edle gebundene Print-Bücher', '— Möblierte, texturierte Vertriebsgrundrisse', '— Übersichtliche Lage- und Infrastruktur-Infografiken', '— Hochwertige Ausstattung für den Verkaufsraum'],
    
    s5Num: '05', s5Name: 'Projekt-Website', s5Short: 'UX/UI, maßgeschneiderte Entwicklung, interaktiver Wohnungsfinder und extreme Ladezeiten.',
    s5P: 'Wir bauen die digitale Vertriebsplattform. Keine statische Web-Visitenkarte, sondern ein interaktives Verkaufswerkzeug zur Filterung von Wohneinheiten und Lead-Generierung.',
    s5Items: ['— Responsive Design mit redaktioneller Typografie', '— Interaktiver Wohnungs- und Etagen-Navigator', '— Höchste Ladegeschwindigkeit & Core Web Vitals', '— Nahtlose Anbindung an Vertriebs-CRMs'],
    
    s6Num: '06', s6Name: 'Vermarktung & Lead-Generierung', s6Short: 'Google Ads, Meta Ads, zielgerichtete CGI-Werbemittel, Tracking und kontinuierliche Optimierung.',
    s6P: 'Mit perfekter Bildsprache und Webplattform aktivieren wir die gezielte Käuferakquise im In- und Ausland. Wir testen Motive und optimieren den Vertriebstrichter.',
    s6Items: ['— Regionale und internationale Kampagnensteuerung', '— A/B-Tests verschiedener Rendering-Winkel und Botschaften', '— Regelmäßige Lead-Reports und transparente Analysen', '— Kontinuierliche Steigerung der Abschlussquote'],
    servCta: 'PROJEKT BESPRECHEN →',
    
    // Portfolio
    portKicker: 'Portfolio',
    portTitle: 'Ausgewählte <span class="text-prata-accent">Projekte.</span>',
    portSub: 'Präzise Architekturvisualisierung für exklusive Wohnanlagen, Designervillen und anspruchsvolle Architektur.',
    p1Name: 'Wohnanlage Neubau', p1Type: 'Mehrfamilienhaus · Visuelle Gesamtleitung · Stadtkontext',
    p2Name: 'Außenanlagen & Pool', p2Type: '3D-Visualisierung · Garten & Freiflächen · Film',
    p3Name: 'Moderne Villa', p3Type: 'Einfamilienhaus · Infinity-Pool · Meeresküste',
    p4Name: 'Penthouse mit Galerie', p4Type: 'High-End Interior · Innenraum-CGI · Lichtkonzept',
    portBtn: 'ALLE PROJEKTE ANSEHEN →',
    
    // Video
    vidKicker: 'Film & Bewegung',
    vidTitle: 'Vom statischen Bild<br>zum Erlebnis<br><span class="text-prata-accent" style="color: var(--cream-2);">in Bewegung.</span>',
    vidSub: 'Kamerabewegungen machen Proportionen erlebbar, fangen das Licht des Tages ein und erzeugen eine emotionale Bindung, die statische Bilder allein nicht erreichen können.',
    
    // Branding
    brandKicker: 'Projektidentität',
    brandTitle: 'Eine Immobilie<br>braucht auch<br><span class="text-prata-accent">eine Identität.</span>',
    brandSub: 'Immobilien-Branding ist mehr als ein Logo. Es ist die strategische Positionierung, die den Quadratmeterpreis rechtfertigt und den passenden Käufer anspricht.',
    brandCta: 'BRANDING-BERATUNG ANFRAGEN →',
    b1Title: 'Naming & Konzept', b1Desc: 'Klangvolle Namensfindung mit Substanz, lokaler Verankerung und juristischer Markensicherheit.',
    b2Title: 'Grafisches System', b2Desc: 'Typografie, Farbwelten, Muster und redaktionelle Layouts, exakt auf die Käuferzielgruppe abgestimmt.',
    b3Title: 'Visuelle Richtung', b3Desc: 'Stilistik, Möblierung, Bildausschnitte und Lichtstimmungen für alle 3D-Bilder aus einem Guss.',
    b4Title: 'Anwendungen', b4Desc: 'Design für Bautafeln, Bauzaunbanner, Verkaufscontainer, Leitsysteme und Übergabemappen.',
    
    // Process
    procKicker: 'Methodik',
    procTitle: 'Von der Architektur<br><span class="text-prata-accent" style="color: var(--cream-2);">zum Markt.</span>',
    f1Num: 'PHASE 01', f1Title: 'Briefing & Strategie', f1P: 'Analyse von CAD/BIM-Plänen, Standort, Käuferprofil und zeitlichem Vermarktungsrahmen.',
    f2Num: 'PHASE 02', f2Title: 'Identität & Naming', f2P: 'Entwicklung des Projektnamens, des grafischen Systems und des Markenhandbuchs.',
    f3Num: 'PHASE 03', f3Title: '3D-Visualisierung & Film', f3P: 'Fotorealistisches Modeling, stimmungsvolle Beleuchtung, Fotomontage und filmische Animation.',
    f4Num: 'PHASE 04', f4Title: 'Dossiers & Webplattform', f4P: 'Layout des Verkaufsdossiers, Vertriebsgrundrisse und Launch der interaktiven Website.',
    
    // Contact
    cntKicker: 'Direktkontakt',
    cntTitle: 'Vom Entwurf<br>zum Launch.<br><span class="text-prata-accent">Sprechen wir.</span>',
    cntSub: 'Wenn Sie eine Projektentwicklung planen und Bildsprache, Verkaufsunterlagen sowie den Vertrieb mit höchstem Qualitätsanspruch umsetzen möchten, freuen wir uns auf Ihre Anfrage.',
    cntEmail: 'ANFRAGE PER E-MAIL SENDEN →',
    cntWa: 'DIREKTER WHATSAPP-KONTAKT: +34 614 45 91 44',
    
    // Footer
    footerSub: 'Full-Service-Agentur für Immobilienbild, Identität und Vermarktung',
    copy: '© 2026 Eidos Render. Valencia · Europaweiter Service für Bauträger und Architekten.',
    legal: 'Impressum', privacy: 'Datenschutz', cookies: 'Cookies',
    legalUrl: 'impressum.html', privacyUrl: 'datenschutz.html', cookiesUrl: 'cookies.html'
  },
  
  fr: {
    lang: 'fr',
    title: 'Eidos Render — Du Projet Architectural au Lancement Commercial',
    desc: 'Agence clé en main pour promoteurs immobiliers : direction de marque, rendu 3D photoréaliste, vidéo, dossiers éditoriaux, sites web et acquisition d\'acheteurs.',
    canonical: 'https://eidosrender.es/fr/',
    prefix: '../',
    homeLink: 'index.html',
    
    // Header
    brandName: 'EIDOS RENDER',
    menuBtn: 'MENU',
    appTitle: 'EIDOS RENDER · APP',
    nav1: 'Accueil',
    nav2: 'Services & Capacités',
    nav3: 'Portfolio de Projets',
    nav4: 'Identité & Branding',
    nav5: 'Méthodologie',
    nav6: 'Contact Direct',
    appCta: 'PARLONS DU PROJET →',
    appSub: 'Valence · Service Européen et International',
    
    // Hero
    kicker: 'Agence Clé en Main pour Promoteurs Immobiliers',
    heroH1Pre: 'Du projet',
    heroH1Acc: 'architectural',
    heroH1Post: 'au lancement commercial.',
    heroSub: 'Direction de marque, rendus 3D photoréalistes, vidéo cinématographique, dossiers éditoriaux, plateformes web interactives et campagnes d\'acquisition. Une vision cohérente de l\'esquisse au marché.',
    ctaPrimary: 'PARLONS DU PROJET →',
    ctaSecondary: 'EXPLORER LES SERVICES ↓',
    heroImgTag: '01 · RÉSIDENTIEL COLLECTIF NEUF',
    heroImgLoc: 'VALENCE, ES',
    
    // Intro
    introKicker: 'Vision Globale',
    introH1: 'Un programme<br>a besoin<br><span class="text-prata-accent">d’une histoire.</span>',
    introP1: 'Architecture, identité, images 3D, supports de vente, site internet et campagnes publicitaires doivent fonctionner comme les rouages d’un même système.',
    introP2: 'Chez Eidos Render, nous bâtissons ce système de la première image jusqu’à l’activation commerciale en ligne.',
    introLink: 'DÉCOUVRIR LE SYSTÈME DE LANCEMENT →',
    
    // Positioning
    posKicker: 'Positionnement',
    posTitle: 'NOUS PARTONS DE L’ARCHITECTURE.<br>NOUS FORGEONS SON IMAGE.<br><span class="text-prata-accent" style="text-transform: none;">ET NOUS LA PORTONS JUSQU’AU MARCHÉ.</span>',
    posCopy: 'Eidos Render est une agence visuelle et créative spécialisée dans la promotion immobilière. Nous accompagnons promoteurs et architectes de la définition visuelle jusqu’à la vente.',
    
    // Services
    servKicker: 'Service Intégral',
    servTitle: 'Une vision unique.<br><span class="text-prata-accent" style="color: var(--cream-2);">Toutes les pièces.</span>',
    servSub: 'De la direction artistique initiale jusqu’à la captation directe d’acquéreurs qualifiés.',
    s1Num: '01', s1Name: 'Direction & Identité', s1Short: 'Concept créatif, positionnement visuel, naming et système graphique complet pour le programme.',
    s1P: 'Nous définissons l’univers de la promotion avant même de modéliser la première image : naming, palette de couleurs, typographie, ton éditorial et chartes de style.',
    s1Items: ['— Guide de marque immobilière', '— Systèmes typographiques et colorimétriques', '— Habillage de bulle de vente et palissades de chantier', '— Modèles pour agences de commercialisation'],
    
    s2Num: '02', s2Name: 'Image Architecturale 3D', s2Short: 'Rendus 3D photoréalistes extérieurs, intérieurs, parties communes et lifestyle haut de gamme.',
    s2P: 'Notre référence majeure. Des perspectives 3D qui transcendent la simple géométrie : elles créent une atmosphère, simulent la lumière naturelle et déclenchent le coup de cœur avant le premier coup de pioche.',
    s2Items: ['— Visualisations ultra-haute résolution pour grands formats et dossiers d\'exception', '— Intégration par drone sur site réel', '— Études d’ensoleillement et d’ambiances lumineuses', '— Soin extrême porté aux matériaux nobles et à la végétation'],
    
    s3Num: '03', s3Name: 'Vidéo & Animation', s3Short: 'Film 3D cinématographique, visites virtuelles fluides et formats dynamiques pour les réseaux sociaux.',
    s3P: 'Le mouvement permet d’apprécier la fluidité des espaces, de révéler l’envergure des prestations et de décupler l’impact auprès des investisseurs.',
    s3Items: ['— Montage avec étalonnage professionnel et habillage sonore immersif', '— Formats optimisés pour Meta, Reels Instagram et YouTube', '— Vidéos de présentation commerciale', '— Éléments dynamiques pour écrans d\'espace de vente'],
    
    s4Num: '04', s4Name: 'Supports Commerciaux', s4Short: 'Dossiers de vente éditoriaux, plans 2D/3D meublés et texturés, cartes de situation et fiches typologiques.',
    s4P: 'Nous transformons les plans d’architecte en outils d’aide à la vente clairs, luxueux et performants pour les commerciaux et les acquéreurs.',
    s4Items: ['— Brochures interactives en PDF haute résolution et beaux livres imprimés', '— Plans de vente meublés et texturés', '— Infographies de situation et réseau de transport', '— Supports d’affichage pour espace de vente'],
    
    s5Num: '05', s5Name: 'Site Web de Promotion', s5Short: 'UX/UI, développement sur mesure, sélecteur d\'appartements interactif, vitesse de chargement instantanée.',
    s5P: 'Nous concevons la vitrine digitale du programme. Un outil commercial de vente pensé pour expliquer l’architecture, filtrer les lots et qualifier les acheteurs.',
    s5Items: ['— Design responsive avec typographie éditoriale', '— Sélecteur interactif d’appartements et de plans de niveaux', '— Vitesse extrême et conformité Core Web Vitals', '— Connexion directe aux outils CRM des commercialisateurs'],
    
    s6Num: '06', s6Name: 'Lancement & Acquisition', s6Short: 'Google Ads, Meta Ads, créations publicitaires 3D, tracking précis et optimisation continue des leads.',
    s6P: 'Une fois l’image et le site en place, nous déployons la visibilité auprès des acheteurs et investisseurs. Nous testons les visuels pour maximiser les conversions.',
    s6Items: ['— Ciblage géographique par intention d’achat en France et en Europe', '— Tests A/B sur plusieurs angles de rendu et messages', '— Rapports réguliers de contacts acheteurs qualifiés', '— Optimisation continue du parcours d\'acquisition'],
    servCta: 'PARLONS DU PROJET →',
    
    // Portfolio
    portKicker: 'Portfolio',
    portTitle: 'Projets <span class="text-prata-accent">Remarquables.</span>',
    portSub: 'Visualisation 3D de haute précision pour programmes résidentiels, villas d’architecte et projets d\'envergure.',
    p1Name: 'Résidence Contemporaine', p1Type: 'Logement Collectif · Direction Visuelle · Insertion Urbaine',
    p2Name: 'Espaces Communs & Parc', p2Type: 'Rendu 3D · Piscines & Jardins · Film',
    p3Name: 'Villa Méditerranéenne', p3Type: 'Villa Individuelle · Piscine Débordante · Vue Mer',
    p4Name: 'Penthouse Double Hauteur', p4Type: 'Design Intérieur · Rendu Intérieur · Éclairage Soigné',
    portBtn: 'VOIR TOUS LES PROJETS →',
    
    // Video
    vidKicker: 'Vidéo & Mouvement',
    vidTitle: 'Du rendu statique<br>à l’expérience<br><span class="text-prata-accent" style="color: var(--cream-2);">en mouvement.</span>',
    vidSub: 'Le mouvement révèle les volumes, capture la lumière au fil de la journée et suscite une émotion durable que l’image fixe seule ne peut transmettre.',
    
    // Branding
    brandKicker: 'Identité de Programme',
    brandTitle: 'Un programme<br>a aussi besoin<br><span class="text-prata-accent">d’une identité.</span>',
    brandSub: 'Le branding immobilier va bien au-delà d’un logo. C’est le positionnement qui justifie la valeur au mètre carré, séduit l’acquéreur cible et sublime l’expérience de vente.',
    brandCta: 'CONSULTER NOS SERVICES DE BRANDING →',
    b1Title: 'Naming & Concept', b1Desc: 'Recherche de nom évocateur, porteur de sens et vérifié juridiquement sur le marché immobilier.',
    b2Title: 'Système Graphique', b2Desc: 'Typographies, palettes chromatiques et grilles éditoriales adaptées au profil de l’acheteur.',
    b3Title: 'Direction Visuelle', b3Desc: 'Lignes directrices d’ambiance, cadrage, mobilier et éclairage appliquées à l’ensemble des rendus 3D.',
    b4Title: 'Déclinaisons', b4Desc: 'Palissades de chantier, panneaux promotionnels, bulle de vente, signalétique et coffrets de remise de clés.',
    
    // Process
    procKicker: 'Méthodologie',
    procTitle: 'De l’architecture<br><span class="text-prata-accent" style="color: var(--cream-2);">au marché.</span>',
    f1Num: 'PHASE 01', f1Title: 'Briefing & Stratégie', f1P: 'Réception des plans CAD/BIM, étude du site, de la cible d\'acquéreurs et du calendrier commercial.',
    f2Num: 'PHASE 02', f2Title: 'Identité & Naming', f2P: 'Création du nom de la promotion, de l’identité visuelle et du manuel de style complet.',
    f3Num: 'PHASE 03', f3Title: 'Rendu 3D & Vidéo', f3P: 'Modélisation photoréaliste, cadrages photographiques d’auteur, lumières d’ambiance et film 3D.',
    f4Num: 'PHASE 04', f4Title: 'Dossier de Vente & Web', f4P: 'Mise en page de la brochure commerciale, plans de vente texturés et mise en ligne du site interactif.',
    
    // Contact
    cntKicker: 'Contact Direct',
    cntTitle: 'Du projet<br>au lancement.<br><span class="text-prata-accent">Parlons-en.</span>',
    cntSub: 'Si vous préparez une opération immobilière et souhaitez définir son image, ses outils de vente et son lancement commercial avec rigueur architecturale, parlons de votre projet.',
    cntEmail: 'ENVOYER UN EMAIL →',
    cntWa: 'WHATSAPP DIRECT : +34 614 45 91 44',
    
    // Footer
    footerSub: 'Agence Intégrale d’Image, d’Identité et de Lancement pour la Promotion Immobilière',
    copy: '© 2026 Eidos Render. Valence · Présence en France et en Europe.',
    legal: 'Mentions Légales', privacy: 'Politique de Confidentialité', cookies: 'Cookies',
    legalUrl: 'mentions-legales.html', privacyUrl: 'politique-de-confidentialite.html', cookiesUrl: 'politique-des-cookies.html'
  }
};

function renderPage(loc) {
  const isRoot = loc.prefix === '';
  const assetPrefix = loc.prefix;

  return `<!DOCTYPE html>
<html lang="${loc.lang}">
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
  
  <title>${loc.title}</title>
  <meta name="description" content="${loc.desc}">
  <link rel="canonical" href="${loc.canonical}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/">

  <!-- Multilingual & Geo-routing -->
  <script src="${assetPrefix}js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="${loc.title}">
  <meta property="og:description" content="${loc.desc}">
  <meta property="og:url" content="${loc.canonical}">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta property="og:locale" content="${loc.lang === 'en' ? 'en_GB' : loc.lang === 'de' ? 'de_DE' : 'fr_FR'}">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="${assetPrefix}favicon.svg">
  <link rel="shortcut icon" href="${assetPrefix}favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="${assetPrefix}apple-touch-icon.png">

  <!-- Preload Hero Image -->
  <link rel="preload" as="image" href="${assetPrefix}img/render-fachada-edificio-obra-nueva.webp" fetchpriority="high">

  <!-- Typography & Stylesheets -->
  <link rel="stylesheet" href="${assetPrefix}assets/fonts.css">
  <link rel="stylesheet" href="${assetPrefix}style.css">

  <!-- Schema.org Data (Zero Prices) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://eidosrender.es/#organization",
        "name": "Eidos Render",
        "url": "${loc.canonical}",
        "logo": "https://eidosrender.es/favicon.svg",
        "image": "https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg",
        "description": "${loc.desc}",
        "telephone": "+34614459144",
        "email": "info@eidosrender.es",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Valencia",
          "addressCountry": "ES"
        },
        "sameAs": [
          "https://www.linkedin.com/company/eidos-render"
        ]
      }
    ]
  }
  </script>
</head>
<body style="background-color: var(--cream); color: var(--charcoal);">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- =====================================================
       00. CABECERA DINÁMICA CENTRADA:
       Isotipo grande a dos tintas + Nombre centrado debajo
       Al hacer scroll, el nombre se funde y queda solo el logo en navbar sutil
       ===================================================== -->
  <header class="nav-header" id="navHeader" role="banner">
    <div class="nav-inner">
      <div class="nav-center-brand">
        <a href="${loc.homeLink}" class="brand-lockup-vertical" id="brandLockup" aria-label="Eidos Render">
          <svg class="isotype-hero" id="headerIsotype" viewBox="0 0 64 64" aria-hidden="true">
            <path class="iso-sun" fill="var(--granate)" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
            <rect class="iso-line-1" fill="var(--charcoal)" x="6" y="40" width="52" height="5" />
            <rect class="iso-line-2" fill="var(--charcoal)" x="18" y="50" width="28" height="3" />
          </svg>
          <span class="brand-name-scroll" id="brandName">${loc.brandName}</span>
        </a>
      </div>
    </div>
  </header>

  <!-- =====================================================
       00B. BOTÓN FLOTANTE DERECHO & PANEL FLOTANTE TIPO APP
       ===================================================== -->
  <button class="floating-menu-btn" id="floatingMenuBtn" aria-label="Open menu" aria-expanded="false">
    <span class="menu-btn-label">${loc.menuBtn}</span>
    <span class="menu-btn-icon">
      <span class="line line-top"></span>
      <span class="line line-bottom"></span>
    </span>
  </button>

  <div class="floating-app-panel" id="floatingAppPanel" aria-label="Navigation" aria-hidden="true">
    <div class="app-panel-header">
      <span class="app-panel-title">${loc.appTitle}</span>
      <span class="kicker-dot" style="background-color: var(--granate); width: 6px; height: 6px;"></span>
    </div>

    <nav aria-label="Main navigation">
      <ul class="app-nav-list">
        <li class="app-nav-item">
          <a href="#hero" class="app-link">
            <span><span class="app-nav-num">01</span>${loc.nav1}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#servicios" class="app-link">
            <span><span class="app-nav-num">02</span>${loc.nav2}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#proyectos" class="app-link">
            <span><span class="app-nav-num">03</span>${loc.nav3}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#branding" class="app-link">
            <span><span class="app-nav-num">04</span>${loc.nav4}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#proceso" class="app-link">
            <span><span class="app-nav-num">05</span>${loc.nav5}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#contacto" class="app-link">
            <span><span class="app-nav-num">06</span>${loc.nav6}</span>
            <span>→</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Selector de Idioma Elegante Tipo Segmented Control -->
    <div class="app-lang-segmented" aria-label="Language selector">
      <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
      <a href="../en/" data-lang="en" class="${loc.lang === 'en' ? 'active' : ''}" onclick="window.setLang('en')">EN</a>
      <a href="../de/" data-lang="de" class="${loc.lang === 'de' ? 'active' : ''}" onclick="window.setLang('de')">DE</a>
      <a href="../fr/" data-lang="fr" class="${loc.lang === 'fr' ? 'active' : ''}" onclick="window.setLang('fr')">FR</a>
    </div>

    <div class="app-panel-footer">
      <a href="#contacto" class="app-cta-btn">
        ${loc.appCta}
      </a>
      <div class="app-contact-sub">${loc.appSub}</div>
    </div>
  </div>

  <main>

    <!-- =====================================================
         01. HERO EDITORIAL CON TEXTO INMEDIATO
         ===================================================== -->
    <section class="section hero-editorial-wrap" id="hero" style="background-color: var(--cream); border-bottom: 1px solid var(--line);">
      <div class="container">

        <div class="kicker text-reveal-flow" style="color: var(--granate); margin-bottom: 24px;">
          <span class="kicker-dot" style="background-color: var(--granate);"></span>
          ${loc.kicker}
        </div>

        <div class="hero-statement-grid">
          <div>
            <h1 class="hero-main-title text-reveal-flow">
              ${loc.heroH1Pre}<br>
              <span class="text-prata-accent">${loc.heroH1Acc}</span><br>
              ${loc.heroH1Post}
            </h1>

            <p class="text-reveal-flow" style="font-family: var(--font-special); font-size: 1.25rem; line-height: 1.6; color: var(--warm-gray); max-width: 58ch; margin-bottom: 36px;">
              ${loc.heroSub}
            </p>

            <div class="text-reveal-flow" style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
              <a href="#contacto" class="btn btn-editorial" style="background-color: var(--granate); color: var(--cream); border: none; padding: 16px 32px; font-family: var(--font-syncopate); font-size: 11px; letter-spacing: 0.14em; border-radius: 6px !important;">
                ${loc.ctaPrimary}
              </a>
              <a href="#servicios" class="link-arrow" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700; color: var(--charcoal); letter-spacing: 0.12em;">
                ${loc.ctaSecondary}
              </a>
            </div>
          </div>

          <div class="text-reveal-flow">
            <div class="hero-supporting-media" style="border-radius: 12px !important; overflow: hidden;">
              <picture>
                <source srcset="${assetPrefix}img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                <img src="${assetPrefix}img/render-fachada-edificio-obra-nueva-1600.jpg" alt="CGI Real Estate Architecture — Eidos Render" loading="eager" fetchpriority="high">
              </picture>
              <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; font-family: var(--font-syncopate); font-size: 10px; letter-spacing: 0.12em; color: var(--warm-gray); background-color: var(--cream);">
                <span>${loc.heroImgTag}</span>
                <span style="color: var(--granate); font-weight: 700;">${loc.heroImgLoc}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- =====================================================
         02. INTRODUCCIÓN EDITORIAL (Fondo: Crema)
         ===================================================== -->
    <section class="section intro-section" style="background-color: var(--cream); color: var(--charcoal);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--granate);">
          <span class="kicker-dot" style="background-color: var(--granate);"></span>
          ${loc.introKicker}
        </div>

        <div class="intro-grid">
          <h2 class="display-title intro-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 5vw, 4.8rem); line-height: 0.98;">
            ${loc.introH1}
          </h2>

          <div class="intro-copy text-reveal-flow" style="font-family: var(--font-special); font-size: 1.15rem; line-height: 1.65;">
            <p style="margin-bottom: 20px;">
              ${loc.introP1}
            </p>
            <p style="color: var(--warm-gray);">
              ${loc.introP2}
            </p>
            <div style="margin-top: 36px;">
              <a href="#servicios" class="link-arrow" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700; color: var(--granate); letter-spacing: 0.14em;">
                ${loc.introLink}
              </a>
            </div>
          </div>
        </div>

        <div class="intro-divider" style="background-color: var(--line); margin-top: 80px; height: 1px;"></div>
      </div>
    </section>

    <!-- =====================================================
         03. POSICIONAMIENTO (Fondo: Crema Secundaria #E8E1D3)
         ===================================================== -->
    <section class="section" style="background-color: var(--cream-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: clamp(70px, 10vw, 130px) 0; color: var(--charcoal);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--granate); margin-bottom: 24px;">
          <span class="kicker-dot" style="background-color: var(--granate);"></span>
          ${loc.posKicker}
        </div>
        <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 5.2vw, 4.8rem); line-height: 1.02; max-width: 1100px; text-transform: uppercase;">
          ${loc.posTitle}
        </h2>
        <p class="body-large text-reveal-flow" style="max-width: 720px; margin-top: 32px; font-family: var(--font-special); color: var(--warm-gray); font-size: 1.15rem; line-height: 1.65;">
          ${loc.posCopy}
        </p>
      </div>
    </section>

    <!-- =====================================================
         04. CAPACIDADES / SERVICIOS (Fondo: Granate Vivo #A31A33)
         ===================================================== -->
    <section class="section" id="servicios" style="background-color: var(--granate); color: var(--cream);">
      <div class="container">
        <div class="services-header" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; margin-bottom: 60px; align-items: flex-end;">
          <div>
            <div class="kicker text-reveal-flow" style="color: var(--cream);">
              <span class="kicker-dot" style="background-color: var(--cream);"></span>
              ${loc.servKicker}
            </div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 4.8vw, 4.4rem); color: var(--cream); line-height: 0.98;">
              ${loc.servTitle}
            </h2>
          </div>
          <div class="text-reveal-flow" style="font-family: var(--font-special); font-size: 1.1rem; color: rgba(241,235,223,0.85); line-height: 1.6;">
            ${loc.servSub}
          </div>
        </div>

        <div class="service-accordion">

          <!-- 01 -->
          <div class="service-item active text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s1Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s1Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s1Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; padding: 24px 0 40px;">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s1P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s1Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 02 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s2Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s2Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s2Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; padding: 24px 0 40px;">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s2P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s2Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 03 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s3Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s3Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s3Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; padding: 24px 0 40px;">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s3P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s3Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 04 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s4Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s4Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s4Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; padding: 24px 0 40px;">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s4P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s4Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 05 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s5Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s5Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s5Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; padding: 24px 0 40px;">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s5P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s5Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 06 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate); border-bottom: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s6Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s6Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s6Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; padding: 24px 0 40px;">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s6P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s6Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="#contacto" class="btn btn-editorial" style="background-color: var(--cream); color: var(--granate); border: none; font-family: var(--font-syncopate); font-size: 11px; letter-spacing: 0.14em; border-radius: 8px !important;">
            ${loc.servCta}
          </a>
        </div>
      </div>
    </section>

    <!-- =====================================================
         05. PORTFOLIO DE CASOS (Fondo: Crema)
         ===================================================== -->
    <section class="section" id="proyectos" style="background-color: var(--cream); color: var(--charcoal);">
      <div class="container">
        <div class="portfolio-header" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 50px;">
          <div>
            <div class="kicker text-reveal-flow" style="color: var(--granate);">
              <span class="kicker-dot" style="background-color: var(--granate);"></span>
              ${loc.portKicker}
            </div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 5vw, 4.4rem); line-height: 0.98;">
              ${loc.portTitle}
            </h2>
          </div>
          <div class="text-reveal-flow" style="font-family: var(--font-special); color: var(--warm-gray); font-size: 1.05rem; max-width: 440px;">
            ${loc.portSub}
          </div>
        </div>

        <div class="editorial-portfolio">

          <!-- Proyecto 01 -->
          <article class="project-card span-8 text-reveal-flow">
            <div class="project-card-link">
              <div class="project-media-wrap" style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line);">
                <picture>
                  <source srcset="${assetPrefix}img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                  <img src="${assetPrefix}img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Render exterior de fachada de edificio residencial de obra nueva" loading="lazy">
                </picture>
              </div>
              <div class="project-info" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--line);">
                <div>
                  <h3 class="project-name" style="font-family: var(--font-special); font-size: 1.4rem;">${loc.p1Name}</h3>
                  <div class="project-services-line" style="font-family: var(--font-syncopate); font-size: 10px; color: var(--warm-gray); letter-spacing: 0.1em; text-transform: uppercase;">${loc.p1Type}</div>
                </div>
                <div class="project-meta" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700;">Valencia, ES</div>
              </div>
            </div>
          </article>

          <!-- Proyecto 02 -->
          <article class="project-card span-4 tall text-reveal-flow">
            <div class="project-card-link">
              <div class="project-media-wrap" style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line);">
                <picture>
                  <source srcset="${assetPrefix}img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="${assetPrefix}img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Render exterior de piscina y zonas comunes de obra nueva" loading="lazy">
                </picture>
              </div>
              <div class="project-info" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--line);">
                <div>
                  <h3 class="project-name" style="font-family: var(--font-special); font-size: 1.4rem;">${loc.p2Name}</h3>
                  <div class="project-services-line" style="font-family: var(--font-syncopate); font-size: 10px; color: var(--warm-gray); letter-spacing: 0.1em; text-transform: uppercase;">${loc.p2Type}</div>
                </div>
                <div class="project-meta" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700;">Madrid, ES</div>
              </div>
            </div>
          </article>

          <!-- Proyecto 03 -->
          <article class="project-card span-4 tall text-reveal-flow">
            <div class="project-card-link">
              <div class="project-media-wrap" style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line);">
                <picture>
                  <source srcset="${assetPrefix}img/render-exterior-vivienda-unifamiliar-piscina.webp" type="image/webp">
                  <img src="${assetPrefix}img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Render exterior de villa unifamiliar con piscina de diseño" loading="lazy">
                </picture>
              </div>
              <div class="project-info" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--line);">
                <div>
                  <h3 class="project-name" style="font-family: var(--font-special); font-size: 1.4rem;">${loc.p3Name}</h3>
                  <div class="project-services-line" style="font-family: var(--font-syncopate); font-size: 10px; color: var(--warm-gray); letter-spacing: 0.1em; text-transform: uppercase;">${loc.p3Type}</div>
                </div>
                <div class="project-meta" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700;">Alicante, ES</div>
              </div>
            </div>
          </article>

          <!-- Proyecto 04 -->
          <article class="project-card span-8 text-reveal-flow">
            <div class="project-card-link">
              <div class="project-media-wrap" style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line);">
                <picture>
                  <source srcset="${assetPrefix}img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
                  <img src="${assetPrefix}img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Infografía 3D de salón moderno de doble altura con grandes ventanales" loading="lazy">
                </picture>
              </div>
              <div class="project-info" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--line);">
                <div>
                  <h3 class="project-name" style="font-family: var(--font-special); font-size: 1.4rem;">${loc.p4Name}</h3>
                  <div class="project-services-line" style="font-family: var(--font-syncopate); font-size: 10px; color: var(--warm-gray); letter-spacing: 0.1em; text-transform: uppercase;">${loc.p4Type}</div>
                </div>
                <div class="project-meta" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700;">Interior Prime</div>
              </div>
            </div>
          </article>

        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="#contacto" class="btn btn-editorial" style="background-color: transparent; border: 1px solid var(--charcoal); color: var(--charcoal); font-family: var(--font-syncopate); font-size: 11px; letter-spacing: 0.14em; border-radius: 8px !important;">
            ${loc.portBtn}
          </a>
        </div>
      </div>
    </section>

    <!-- =====================================================
         06. VÍDEO & MOVIMIENTO (Fondo: Granate Vivo #A31A33)
         ===================================================== -->
    <section class="section" id="video" style="background-color: var(--granate); color: var(--cream);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--cream);">
          <span class="kicker-dot" style="background-color: var(--cream);"></span>
          ${loc.vidKicker}
        </div>

        <div class="video-section-grid" style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; margin-top: 40px; align-items: center;">
          <div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.2rem, 4.4vw, 4.2rem); color: var(--cream); line-height: 0.98; margin-bottom: 28px;">
              ${loc.vidTitle}
            </h2>
            <p class="body-large text-reveal-flow" style="font-family: var(--font-special); font-size: 1.15rem; color: rgba(241,235,223,0.9); margin-bottom: 32px; line-height: 1.65;">
              ${loc.vidSub}
            </p>
          </div>

          <div>
            <div class="reels-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
              <div class="reel-card text-reveal-flow" style="border: 1px solid var(--line-on-granate); border-radius: 12px !important; overflow: hidden;">
                <video autoplay muted loop playsinline controls poster="${assetPrefix}img/infografia-exterior-zonas-comunes-obra-nueva-800.webp" style="width: 100%; aspect-ratio: 9/16; object-fit: cover;">
                  <source src="${assetPrefix}img/video-reel-patio.mp4" type="video/mp4">
                </video>
              </div>

              <div class="reel-card text-reveal-flow" style="border: 1px solid var(--line-on-granate); border-radius: 12px !important; overflow: hidden;">
                <video autoplay muted loop playsinline controls poster="${assetPrefix}img/render-fachada-edificio-obra-nueva-800.webp" style="width: 100%; aspect-ratio: 9/16; object-fit: cover;">
                  <source src="${assetPrefix}img/video-recorrido-patio.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- =====================================================
         07. BRANDING INMOBILIARIO (Fondo: Crema)
         ===================================================== -->
    <section class="section" id="branding" style="background-color: var(--cream); color: var(--charcoal);">
      <div class="container">
        <div class="feature-split" style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 60px; align-items: flex-start;">
          <div>
            <div class="kicker text-reveal-flow" style="color: var(--granate);">
              <span class="kicker-dot" style="background-color: var(--granate);"></span>
              ${loc.brandKicker}
            </div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.2rem, 4.4vw, 4.2rem); margin-bottom: 24px; line-height: 1.02;">
              ${loc.brandTitle}
            </h2>
            <p class="body-large text-reveal-flow" style="font-family: var(--font-special); color: var(--warm-gray); font-size: 1.1rem; line-height: 1.65; margin-bottom: 32px;">
              ${loc.brandSub}
            </p>
            <a href="#contacto" class="link-arrow text-reveal-flow" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700; color: var(--granate); letter-spacing: 0.14em;">
              ${loc.brandCta}
            </a>
          </div>

          <div class="feature-cards-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div class="feature-card text-reveal-flow" style="background-color: var(--cream-2); padding: 32px; border: 1px solid var(--line); border-radius: 12px !important;">
              <div class="feature-card-num" style="font-family: var(--font-prata); font-size: 1.6rem; color: var(--granate); margin-bottom: 12px;">01</div>
              <h3 class="feature-card-title" style="font-family: var(--font-special); font-size: 1.2rem; margin-bottom: 10px;">${loc.b1Title}</h3>
              <p class="feature-card-copy" style="font-family: var(--font-special); font-size: 0.95rem; color: var(--warm-gray); line-height: 1.55;">${loc.b1Desc}</p>
            </div>
            <div class="feature-card text-reveal-flow" style="background-color: var(--cream-2); padding: 32px; border: 1px solid var(--line); border-radius: 12px !important;">
              <div class="feature-card-num" style="font-family: var(--font-prata); font-size: 1.6rem; color: var(--granate); margin-bottom: 12px;">02</div>
              <h3 class="feature-card-title" style="font-family: var(--font-special); font-size: 1.2rem; margin-bottom: 10px;">${loc.b2Title}</h3>
              <p class="feature-card-copy" style="font-family: var(--font-special); font-size: 0.95rem; color: var(--warm-gray); line-height: 1.55;">${loc.b2Desc}</p>
            </div>
            <div class="feature-card text-reveal-flow" style="background-color: var(--cream-2); padding: 32px; border: 1px solid var(--line); border-radius: 12px !important;">
              <div class="feature-card-num" style="font-family: var(--font-prata); font-size: 1.6rem; color: var(--granate); margin-bottom: 12px;">03</div>
              <h3 class="feature-card-title" style="font-family: var(--font-special); font-size: 1.2rem; margin-bottom: 10px;">${loc.b3Title}</h3>
              <p class="feature-card-copy" style="font-family: var(--font-special); font-size: 0.95rem; color: var(--warm-gray); line-height: 1.55;">${loc.b3Desc}</p>
            </div>
            <div class="feature-card text-reveal-flow" style="background-color: var(--cream-2); padding: 32px; border: 1px solid var(--line); border-radius: 12px !important;">
              <div class="feature-card-num" style="font-family: var(--font-prata); font-size: 1.6rem; color: var(--granate); margin-bottom: 12px;">04</div>
              <h3 class="feature-card-title" style="font-family: var(--font-special); font-size: 1.2rem; margin-bottom: 10px;">${loc.b4Title}</h3>
              <p class="feature-card-copy" style="font-family: var(--font-special); font-size: 0.95rem; color: var(--warm-gray); line-height: 1.55;">${loc.b4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         08. METODOLOGÍA / PROCESO (Fondo: Granate Vivo #A31A33)
         ===================================================== -->
    <section class="section" id="proceso" style="background-color: var(--granate); color: var(--cream);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--cream);">
          <span class="kicker-dot" style="background-color: var(--cream);"></span>
          ${loc.procKicker}
        </div>
        <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.2rem, 4.4vw, 4.2rem); color: var(--cream); line-height: 1.02; margin-bottom: 40px;">
          ${loc.procTitle}
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
          <div class="text-reveal-flow" style="border: 1px solid var(--line-on-granate); padding: 32px; border-radius: 12px !important;">
            <div style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream); margin-bottom: 12px;">${loc.f1Num}</div>
            <div style="font-family: var(--font-syncopate); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.f1Title}</div>
            <p style="font-family: var(--font-special); font-size: 0.95rem; color: rgba(241,235,223,0.85); line-height: 1.6;">${loc.f1P}</p>
          </div>
          <div class="text-reveal-flow" style="border: 1px solid var(--line-on-granate); padding: 32px; border-radius: 12px !important;">
            <div style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream); margin-bottom: 12px;">${loc.f2Num}</div>
            <div style="font-family: var(--font-syncopate); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.f2Title}</div>
            <p style="font-family: var(--font-special); font-size: 0.95rem; color: rgba(241,235,223,0.85); line-height: 1.6;">${loc.f2P}</p>
          </div>
          <div class="text-reveal-flow" style="border: 1px solid var(--line-on-granate); padding: 32px; border-radius: 12px !important;">
            <div style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream); margin-bottom: 12px;">${loc.f3Num}</div>
            <div style="font-family: var(--font-syncopate); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.f3Title}</div>
            <p style="font-family: var(--font-special); font-size: 0.95rem; color: rgba(241,235,223,0.85); line-height: 1.6;">${loc.f3P}</p>
          </div>
          <div class="text-reveal-flow" style="border: 1px solid var(--line-on-granate); padding: 32px; border-radius: 12px !important;">
            <div style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream); margin-bottom: 12px;">${loc.f4Num}</div>
            <div style="font-family: var(--font-syncopate); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.f4Title}</div>
            <p style="font-family: var(--font-special); font-size: 0.95rem; color: rgba(241,235,223,0.85); line-height: 1.6;">${loc.f4P}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         09. CONTACTO DIRECTO (Fondo: Crema)
         ===================================================== -->
    <section class="section" id="contacto" style="background-color: var(--cream); color: var(--charcoal); padding: clamp(80px, 12vw, 150px) 0;">
      <div class="container">
        <div style="max-width: 900px;">
          <div class="kicker text-reveal-flow" style="color: var(--granate);">
            <span class="kicker-dot" style="background-color: var(--granate);"></span>
            ${loc.cntKicker}
          </div>

          <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.8rem, 6vw, 5.6rem); line-height: 0.95; margin-bottom: 32px;">
            ${loc.cntTitle}
          </h2>

          <p class="body-large text-reveal-flow" style="font-family: var(--font-special); color: var(--warm-gray); font-size: 1.25rem; line-height: 1.6; margin-bottom: 48px; max-width: 60ch;">
            ${loc.cntSub}
          </p>

          <div class="text-reveal-flow" style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
            <a href="mailto:info@eidosrender.es" class="btn btn-editorial" style="background-color: var(--granate); color: var(--cream); border: none; padding: 18px 36px; font-family: var(--font-syncopate); font-size: 11.5px; letter-spacing: 0.14em; border-radius: 8px !important;">
              ${loc.cntEmail}
            </a>
            <a href="https://wa.me/34614459144" target="_blank" rel="noopener" class="btn btn-editorial" style="background-color: transparent; border: 1px solid var(--charcoal); color: var(--charcoal); padding: 18px 36px; font-family: var(--font-syncopate); font-size: 11.5px; letter-spacing: 0.14em; border-radius: 8px !important;">
              ${loc.cntWa}
            </a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- =====================================================
       PIE DE PÁGINA (Fondo: Granate Vivo #A31A33)
       ===================================================== -->
  <footer style="background-color: var(--granate); color: var(--cream); border-top: 1px solid var(--line-on-granate); padding: 80px 0 40px;">
    <div class="container">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line-on-granate); padding-bottom: 40px; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 20px;">
          <svg class="isotype-icon" viewBox="0 0 64 64" width="32" height="32" aria-hidden="true">
            <path fill="var(--cream)" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
            <rect fill="var(--cream)" x="6" y="40" width="52" height="5" />
            <rect fill="var(--cream)" x="18" y="50" width="28" height="3" />
          </svg>
          <span style="font-family: var(--font-syncopate); font-weight: 700; font-size: 14px; letter-spacing: 0.16em;">EIDOS RENDER</span>
        </div>
        <div style="font-family: var(--font-special); font-size: 13px; color: rgba(241,235,223,0.8);">
          ${loc.footerSub}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-syncopate); font-size: 10px; letter-spacing: 0.1em; color: rgba(241,235,223,0.65); flex-wrap: wrap; gap: 16px;">
        <div>${loc.copy}</div>
        <div style="display: flex; gap: 24px;">
          <a href="${loc.legalUrl}" style="color: inherit;">${loc.legal}</a>
          <a href="${loc.privacyUrl}" style="color: inherit;">${loc.privacy}</a>
          <a href="${loc.cookiesUrl}" style="color: inherit;">${loc.cookies}</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="${assetPrefix}assets/vendor/lenis.min.js"></script>
  <script src="${assetPrefix}assets/vendor/gsap.min.js"></script>
  <script src="${assetPrefix}assets/vendor/ScrollTrigger.min.js"></script>
  <script src="${assetPrefix}main.js"></script>
</body>
</html>`;
}

// Generate for en, de, fr
['en', 'de', 'fr'].forEach(lang => {
  const filePath = path.join(root, lang, 'index.html');
  fs.writeFileSync(filePath, renderPage(locales[lang]), 'utf8');
  console.log(`Updated: ${lang}/index.html`);
});
