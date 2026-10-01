const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function getPrefix(relPath) {
  const depth = relPath.split(/[/\\]/).length - 1;
  return '../'.repeat(depth);
}

function processHtmlFile(relPath) {
  // Skip tests, node_modules, .git, scratch
  if (relPath.startsWith('node_modules') || relPath.startsWith('.git') || relPath.startsWith('scratch') || relPath.startsWith('_tests')) return;
  
  const fullPath = path.join(root, relPath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let original = content;
  const prefix = getPrefix(relPath);

  // 1. Remove Google Fonts preconnect and stylesheet links
  content = content.replace(/<!--\s*Tipograf[ií]a[^\n]*-->\s*/gi, '');
  content = content.replace(/<link\s+rel="preconnect"\s+href="https:\/\/fonts\.googleapis\.com"[^>]*>\s*/gi, '');
  content = content.replace(/<link\s+rel="preconnect"\s+href="https:\/\/fonts\.gstatic\.com"[^>]*>\s*/gi, '');
  content = content.replace(/<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]*"\s+rel="stylesheet">\s*/gi, '');

  // 2. Ensure Favicon points to SVG
  const faviconRegex = /<link\s+rel="(?:shortcut\s+)?icon"[^>]*>\s*(?:<link\s+rel="shortcut\s+icon"[^>]*>\s*)?(?:<link\s+rel="apple-touch-icon"[^>]*>\s*)?/i;
  const newFavicons = `<link rel="icon" type="image/svg+xml" href="${prefix}favicon.svg">
  <link rel="shortcut icon" href="${prefix}favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="${prefix}apple-touch-icon.png">`;

  if (faviconRegex.test(content)) {
    content = content.replace(faviconRegex, `${newFavicons}\n`);
  }

  // 3. Update Header Logo with Isotype C
  const oldHeaderLogo = /<a\s+href="([^"]*)"\s+class="logo"([^>]*)>\s*(?:<svg[\s\S]*?<\/svg>\s*)?<span>EIDOS RENDER<\/span>\s*<span class="logo-dot"><\/span>\s*<\/a>/gi;
  content = content.replace(oldHeaderLogo, (match, href, attrs) => {
    return `<a href="${href}" class="logo"${attrs}>
        <svg class="isotype-icon" viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
          <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent)" stroke-width="2" stroke-linecap="square" class="iso-line"/>
        </svg>
        <span class="logo-text">EIDOS RENDER</span>
      </a>`;
  });

  // Also check simpler header logo variant: <span>EIDOS RENDER</span><span class="logo-dot"></span>
  const oldHeaderLogo2 = /<a\s+href="([^"]*)"\s+class="logo"([^>]*)>\s*<span>EIDOS RENDER<\/span>\s*<\/a>/gi;
  content = content.replace(oldHeaderLogo2, (match, href, attrs) => {
    return `<a href="${href}" class="logo"${attrs}>
        <svg class="isotype-icon" viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
          <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent)" stroke-width="2" stroke-linecap="square" class="iso-line"/>
        </svg>
        <span class="logo-text">EIDOS RENDER</span>
      </a>`;
  });

  // 4. Update Footer Logo with Isotype C
  const oldFooterLogo = /<div\s+class="logo"[^>]*>\s*<span>EIDOS RENDER<\/span>\s*(?:<span class="logo-dot"><\/span>\s*)?<\/div>/gi;
  content = content.replace(oldFooterLogo, (match) => {
    return `<a href="${prefix || './'}" class="logo" style="margin-bottom: 16px;" aria-label="Eidos Render">
            <svg class="isotype-icon" viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
              <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent-on-dark)" stroke-width="2" stroke-linecap="square"/>
            </svg>
            <span class="logo-text">EIDOS RENDER</span>
          </a>`;
  });

  // 5. Add curtain-brand-banner to footers if not present
  if (content.includes('class="site-footer"') && !content.includes('curtain-brand-banner')) {
    content = content.replace(
      /(<div class="footer-bottom">)/,
      `<div class="curtain-brand-banner" aria-hidden="true" style="padding: clamp(24px, 4vw, 48px) 0; border-top: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); margin: 32px 0;">
          <span style="font-family: var(--font-display); font-size: clamp(2.5rem, 8vw, 7.5rem); font-weight: 700; color: rgba(239, 233, 220, 0.08); letter-spacing: 0.08em; display: block; text-align: center; line-height: 1; user-select: none;">EIDOS RENDER</span>
        </div>\n        $1`
    );
  }

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Upgraded:', relPath);
  }
}

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const rel = path.relative(root, full);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (item.endsWith('.html')) {
      processHtmlFile(rel);
    }
  }
}

walk(root);
console.log('All subpages upgraded to luxury standards!');
