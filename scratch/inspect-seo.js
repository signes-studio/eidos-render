const fs = require('fs');

const files = ['index.html', 'en/index.html', 'de/index.html', 'fr/index.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('\n=================== ' + f + ' ===================');
  const title = content.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = content.match(/<meta name="description" content="(.*?)"/)?.[1];
  const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/\s+/g, ' ').trim();
  const canonical = content.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  const ogTitle = content.match(/<meta property="og:title" content="(.*?)"/)?.[1];
  const ogLocale = content.match(/<meta property="og:locale" content="(.*?)"/)?.[1];
  const hreflangs = [...content.matchAll(/<link rel="alternate" hreflang="(.*?)" href="(.*?)"/g)].map(m => `${m[1]} -> ${m[2]}`);
  const hasSchema = content.includes('application/ld+json');
  
  console.log('Title:     ', title);
  console.log('Desc:      ', desc);
  console.log('H1:        ', h1);
  console.log('Canonical: ', canonical);
  console.log('OG Locale: ', ogLocale);
  console.log('Hreflangs: ', hreflangs);
  console.log('Has Schema:', hasSchema);
});
