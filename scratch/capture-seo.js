const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const userDir = path.join(cwd, 'scratch/chrome-cdp-profile-seo');
const outDir = path.join(cwd, '_tests/seo/screenshots');
const artifactDir = 'C:\\Users\\luiss\\.gemini\\antigravity\\brain\\973b16dd-7f83-4950-a1c7-06e5a20dae0d';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function capture() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9228',
    `--user-data-dir=${userDir}`,
    '--window-size=1440,900',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  const versionData = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9228/json/version', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const ws = new WebSocket(versionData.webSocketDebuggerUrl);
  let id = 1;
  const callbacks = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      callbacks.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await new Promise(r => ws.onopen = r);

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const { resolve, reject } = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  const list = await new Promise(resolve => {
    http.get('http://127.0.0.1:9228/json/list', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const page = list.find(p => p.type === 'page');
  const pageWs = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => pageWs.onopen = r);

  const pageCallbacks = new Map();
  let pageId = 1;
  function sendPage(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = pageId++;
      pageCallbacks.set(msgId, { resolve, reject });
      pageWs.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  pageWs.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pageCallbacks.has(msg.id)) {
      const { resolve, reject } = pageCallbacks.get(msg.id);
      pageCallbacks.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await sendPage('Page.enable');
  await sendPage('Page.navigate', { url: 'file:///' + path.join(cwd, 'index.html').replace(/\\/g, '/') });
  await new Promise(r => setTimeout(r, 2000));

  function saveImage(filename, buffer) {
    fs.writeFileSync(path.join(outDir, filename), buffer);
    if (fs.existsSync(artifactDir)) {
      fs.writeFileSync(path.join(artifactDir, filename), buffer);
    }
    console.log('Saved:', filename);
  }

  // 1. Scroll to Ámbito Europeo (Desktop)
  await sendPage('Runtime.evaluate', {
    expression: `document.getElementById('europa')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
  });
  await new Promise(r => setTimeout(r, 600));
  let { data } = await sendPage('Page.captureScreenshot', { format: 'png' });
  saveImage('seo-01-desktop-europa.png', Buffer.from(data, 'base64'));

  // 2. Scroll to FAQ (Desktop)
  await sendPage('Runtime.evaluate', {
    expression: `document.getElementById('faq')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
  });
  await new Promise(r => setTimeout(r, 600));
  data = (await sendPage('Page.captureScreenshot', { format: 'png' })).data;
  saveImage('seo-02-desktop-faq.png', Buffer.from(data, 'base64'));

  // Switch to Mobile Viewport (390px)
  await sendPage('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 600));

  // 3. Scroll to Ámbito Europeo (Mobile)
  await sendPage('Runtime.evaluate', {
    expression: `document.getElementById('europa')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
  });
  await new Promise(r => setTimeout(r, 600));
  data = (await sendPage('Page.captureScreenshot', { format: 'png' })).data;
  saveImage('seo-03-mobile-europa.png', Buffer.from(data, 'base64'));

  // 4. Scroll to FAQ (Mobile)
  await sendPage('Runtime.evaluate', {
    expression: `document.getElementById('faq')?.scrollIntoView({ behavior: 'instant', block: 'start' });`
  });
  await new Promise(r => setTimeout(r, 600));
  data = (await sendPage('Page.captureScreenshot', { format: 'png' })).data;
  saveImage('seo-04-mobile-faq.png', Buffer.from(data, 'base64'));

  pageWs.close();
  ws.close();
  chrome.kill();
  console.log('SEO screenshots finished.');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
