const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

// Helper to fix paths in depth-2 index files
function fixIndexFile(relPath, lang, langPrefix, pageType) {
  const fullPath = path.join(root, relPath);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');

  // Fix assets to ../../
  content = content.replace(/(href|src)="(?:\.\/|\.\.\/)?(style\.css|favicon\.png|apple-touch-icon\.png|main\.js)"/g, '$1="../../$2"');
  content = content.replace(/(href|src)="(?:\.\/|\.\.\/)?js\/i18n\.js"/g, '$1="../../js/i18n.js"');
  content = content.replace(/(href|src)="(?:\.\/|\.\.\/)?img\//g, '$1="../../img/"');

  // Fix logo
  content = content.replace(/<a href="(?:\.\/|\.\.\/)" class="logo"/g, '<a href="../" class="logo"');

  if (lang === 'en') {
    // English subdirs
    if (pageType === 'services') {
      content = content.replace(/href="projects\.html"/g, 'href="../projects.html"');
      content = content.replace(/href="services\.html"/g, 'href="../services.html"');
      content = content.replace(/href="\.\/#proceso"/g, 'href="../#proceso"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
      content = content.replace(/href="contact\.html"/g, 'href="../contact.html"');
      content = content.replace(/href="legal-notice\.html"/g, 'href="../legal-notice.html"');
      content = content.replace(/href="privacy-policy\.html"/g, 'href="../privacy-policy.html"');
      content = content.replace(/href="cookie-policy\.html"/g, 'href="../cookie-policy.html"');
      // Subservice links from within services/
      content = content.replace(/href="services\/(branding|3d-rendering|3d-video|marketing-collateral|real-estate-web|acquisition)\.html"/g, 'href="$1.html"');
      // Switcher
      content = content.replace(/href="\.\.\/servicios\.html"/g, 'href="../../servicios.html"');
      content = content.replace(/href="\.\.\/de\/leistungen\.html"/g, 'href="../../de/leistungen.html"');
      content = content.replace(/href="\.\.\/fr\/services\.html"/g, 'href="../../fr/services.html"');
    } else if (pageType === 'projects') {
      content = content.replace(/href="projects\.html"/g, 'href="../projects.html"');
      content = content.replace(/href="services\.html"/g, 'href="../services.html"');
      content = content.replace(/href="\.\/#proceso"/g, 'href="../#proceso"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
      content = content.replace(/href="contact\.html"/g, 'href="../contact.html"');
      content = content.replace(/href="legal-notice\.html"/g, 'href="../legal-notice.html"');
      content = content.replace(/href="privacy-policy\.html"/g, 'href="../privacy-policy.html"');
      content = content.replace(/href="cookie-policy\.html"/g, 'href="../cookie-policy.html"');
      content = content.replace(/href="\.\.\/proyectos\.html"/g, 'href="../../proyectos.html"');
      content = content.replace(/href="\.\.\/de\/projekte\.html"/g, 'href="../../de/projekte.html"');
      content = content.replace(/href="\.\.\/fr\/projets\.html"/g, 'href="../../fr/projets.html"');
    } else if (pageType === 'contact') {
      content = content.replace(/href="legal-notice\.html"/g, 'href="../legal-notice.html"');
      content = content.replace(/href="privacy-policy\.html"/g, 'href="../privacy-policy.html"');
      content = content.replace(/href="cookie-policy\.html"/g, 'href="../cookie-policy.html"');
      content = content.replace(/href="\.\/#proceso"/g, 'href="../#proceso"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
    }
  } else if (lang === 'de') {
    // German subdirs
    if (pageType === 'services') {
      content = content.replace(/href="projekte\.html"/g, 'href="../projekte.html"');
      content = content.replace(/href="leistungen\.html"/g, 'href="../leistungen.html"');
      content = content.replace(/href="\.\/#prozess"/g, 'href="../#prozess"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
      content = content.replace(/href="kontakt\.html"/g, 'href="../kontakt.html"');
      content = content.replace(/href="impressum\.html"/g, 'href="../impressum.html"');
      content = content.replace(/href="datenschutz\.html"/g, 'href="../datenschutz.html"');
      content = content.replace(/href="cookies\.html"/g, 'href="../cookies.html"');
      // Subservice links from within leistungen/
      content = content.replace(/href="leistungen\/(branding|3d-rendering|3d-video|vermarktungsunterlagen|projekt-website|digitale-vermarktung)\.html"/g, 'href="$1.html"');
      // Switcher
      content = content.replace(/href="\.\.\/servicios\.html"/g, 'href="../../servicios.html"');
      content = content.replace(/href="\.\.\/en\/services\.html"/g, 'href="../../en/services.html"');
      content = content.replace(/href="\.\.\/fr\/services\.html"/g, 'href="../../fr/services.html"');
    } else if (pageType === 'projects') {
      content = content.replace(/href="projekte\.html"/g, 'href="../projekte.html"');
      content = content.replace(/href="leistungen\.html"/g, 'href="../leistungen.html"');
      content = content.replace(/href="\.\/#prozess"/g, 'href="../#prozess"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
      content = content.replace(/href="kontakt\.html"/g, 'href="../kontakt.html"');
      content = content.replace(/href="impressum\.html"/g, 'href="../impressum.html"');
      content = content.replace(/href="datenschutz\.html"/g, 'href="../datenschutz.html"');
      content = content.replace(/href="cookies\.html"/g, 'href="../cookies.html"');
      content = content.replace(/href="\.\.\/proyectos\.html"/g, 'href="../../proyectos.html"');
      content = content.replace(/href="\.\.\/en\/projects\.html"/g, 'href="../../en/projects.html"');
      content = content.replace(/href="\.\.\/fr\/projets\.html"/g, 'href="../../fr/projets.html"');
    } else if (pageType === 'contact') {
      content = content.replace(/href="impressum\.html"/g, 'href="../impressum.html"');
      content = content.replace(/href="datenschutz\.html"/g, 'href="../datenschutz.html"');
      content = content.replace(/href="cookies\.html"/g, 'href="../cookies.html"');
      content = content.replace(/href="\.\/#prozess"/g, 'href="../#prozess"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
    }
  } else if (lang === 'fr') {
    // French subdirs
    if (pageType === 'services') {
      content = content.replace(/href="projets\.html"/g, 'href="../projets.html"');
      content = content.replace(/href="services\.html"/g, 'href="../services.html"');
      content = content.replace(/href="\.\/#processus"/g, 'href="../#processus"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
      content = content.replace(/href="contact\.html"/g, 'href="../contact.html"');
      content = content.replace(/href="mentions-legales\.html"/g, 'href="../mentions-legales.html"');
      content = content.replace(/href="politique-de-confidentialite\.html"/g, 'href="../politique-de-confidentialite.html"');
      content = content.replace(/href="politique-des-cookies\.html"/g, 'href="../politique-des-cookies.html"');
      // Subservice links from within services/
      content = content.replace(/href="services\/(branding|rendu-3d|video-3d|supports-commerciaux|site-web-immobilier|acquisition)\.html"/g, 'href="$1.html"');
      // Switcher
      content = content.replace(/href="\.\.\/servicios\.html"/g, 'href="../../servicios.html"');
      content = content.replace(/href="\.\.\/en\/services\.html"/g, 'href="../../en/services.html"');
      content = content.replace(/href="\.\.\/de\/leistungen\.html"/g, 'href="../../de/leistungen.html"');
    } else if (pageType === 'projects') {
      content = content.replace(/href="projets\.html"/g, 'href="../projets.html"');
      content = content.replace(/href="services\.html"/g, 'href="../services.html"');
      content = content.replace(/href="\.\/#processus"/g, 'href="../#processus"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
      content = content.replace(/href="contact\.html"/g, 'href="../contact.html"');
      content = content.replace(/href="mentions-legales\.html"/g, 'href="../mentions-legales.html"');
      content = content.replace(/href="politique-de-confidentialite\.html"/g, 'href="../politique-de-confidentialite.html"');
      content = content.replace(/href="politique-des-cookies\.html"/g, 'href="../politique-des-cookies.html"');
      content = content.replace(/href="\.\.\/proyectos\.html"/g, 'href="../../proyectos.html"');
      content = content.replace(/href="\.\.\/en\/projects\.html"/g, 'href="../../en/projects.html"');
      content = content.replace(/href="\.\.\/de\/projekte\.html"/g, 'href="../../de/projekte.html"');
    } else if (pageType === 'contact') {
      content = content.replace(/href="mentions-legales\.html"/g, 'href="../mentions-legales.html"');
      content = content.replace(/href="politique-de-confidentialite\.html"/g, 'href="../politique-de-confidentialite.html"');
      content = content.replace(/href="politique-des-cookies\.html"/g, 'href="../politique-des-cookies.html"');
      content = content.replace(/href="\.\/#processus"/g, 'href="../#processus"');
      content = content.replace(/href="\.\/#eidos"/g, 'href="../#eidos"');
    }
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Fixed:', relPath);
}

// English
fixIndexFile('en/services/index.html', 'en', 'en', 'services');
fixIndexFile('en/projects/index.html', 'en', 'en', 'projects');
fixIndexFile('en/contact/index.html', 'en', 'en', 'contact');

// German
fixIndexFile('de/leistungen/index.html', 'de', 'de', 'services');
fixIndexFile('de/projekte/index.html', 'de', 'de', 'projects');
fixIndexFile('de/kontakt/index.html', 'de', 'de', 'contact');

// French
fixIndexFile('fr/services/index.html', 'fr', 'fr', 'services');
fixIndexFile('fr/projets/index.html', 'fr', 'fr', 'projects');
fixIndexFile('fr/contact/index.html', 'fr', 'fr', 'contact');
