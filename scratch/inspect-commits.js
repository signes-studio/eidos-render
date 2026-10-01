const { execSync } = require('child_process');
const fs = require('fs');

const commits = ['HEAD', '3a5b8a0', 'c383035', 'ed783cf', '6b7777b'];
commits.forEach(c => {
  try {
    const raw = execSync(`git show ${c}:index.html`, { maxBuffer: 10 * 1024 * 1024 }).toString();
    const title = raw.match(/<title>[\s\S]*?<\/title>/i);
    const h1 = raw.match(/<h1[^>]*>[\s\S]*?<\/h1>/i);
    console.log(`Commit ${c}:`);
    console.log('  Title:', title ? title[0].replace(/\s+/g, ' ') : 'None');
    console.log('  H1:', h1 ? h1[0].replace(/\s+/g, ' ') : 'None');
    console.log('  Length:', raw.length);
  } catch (e) {
    console.log(`Commit ${c} error:`, e.message);
  }
});
