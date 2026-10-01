const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const userDir = path.join(cwd, 'scratch/chrome-cdp-profile-mobile');
const outDir = path.join(cwd, '_tests/mobile/screenshots');
const artifactDir = 'C:\\Users\\luiss\\.gemini\\antigravity\\brain\\973b16dd-7f83-4950-a1c7-06e5a20dae0d';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function capture() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9224',
    `--user-data-dir=${userDir}`,
    '--window-size=390,844',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  const versionData = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9224/json/version', res => {
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
    http.get('http://127.0.0.1:9224/json/list', res => {
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
  await sendPage('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  await sendPage('Page.navigate', { url: 'file:///' + path.join(cwd, 'index.html').replace(/\\/g, '/') });
  await new Promise(r => setTimeout(r, 2200));

  function saveImage(filename, buffer) {
    fs.writeFileSync(path.join(outDir, filename), buffer);
    if (fs.existsSync(artifactDir)) {
      fs.writeFileSync(path.join(artifactDir, filename), buffer);
    }
    console.log('Saved:', filename);
  }

  // Diagnostics: Check horizontal scroll
  const diag = await sendPage('Runtime.evaluate', {
    returnByValue: true,
    expression: `
      (() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
          navHeaderHeight: document.getElementById('navHeader')?.offsetHeight,
          menuBtnRect: document.getElementById('floatingMenuBtn')?.getBoundingClientRect(),
          brandLockupRect: document.getElementById('brandLockup')?.getBoundingClientRect(),
        };
      })()
    `
  });
  console.log('Mobile Diagnostics:', JSON.stringify(diag.result.value, null, 2));

  // 1. Capture Mobile Hero (Top)
  let { data } = await sendPage('Page.captureScreenshot', { format: 'png' });
  saveImage('mob-01-hero-top.png', Buffer.from(data, 'base64'));

  // 2. Open Mobile Menu
  await sendPage('Runtime.evaluate', {
    expression: `document.getElementById('floatingMenuBtn')?.click();`
  });
  await new Promise(r => setTimeout(r, 800));
  data = (await sendPage('Page.captureScreenshot', { format: 'png' })).data;
  saveImage('mob-02-menu-open.png', Buffer.from(data, 'base64'));

  // 3. Close Menu, Scroll 180px (Scrolled Header)
  await sendPage('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.getElementById('floatingMenuBtn');
        if (btn && btn.classList.contains('active')) btn.click();
        window.scrollTo({ top: 180, behavior: 'instant' });
      })()
    `
  });
  await new Promise(r => setTimeout(r, 600));
  data = (await sendPage('Page.captureScreenshot', { format: 'png' })).data;
  saveImage('mob-03-scrolled-header.png', Buffer.from(data, 'base64'));

  // 4. Scroll to Servicios
  await sendPage('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.getElementById('servicios');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));
  data = (await sendPage('Page.captureScreenshot', { format: 'png' })).data;
  saveImage('mob-04-servicios.png', Buffer.from(data, 'base64'));

  // 5. Scroll to Proyectos
  await sendPage('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.getElementById('proyectos');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));
  data = (await sendPage('Page.captureScreenshot', { format: 'png' })).data;
  saveImage('mob-05-proyectos.png', Buffer.from(data, 'base64'));

  // 6. Scroll to Contacto
  await sendPage('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.getElementById('contacto');
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));
  data = (await sendPage('Page.captureScreenshot', { format: 'png' })).data;
  saveImage('mob-06-contacto.png', Buffer.from(data, 'base64'));

  pageWs.close();
  ws.close();
  chrome.kill();
  console.log('Mobile capture finished.');
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
