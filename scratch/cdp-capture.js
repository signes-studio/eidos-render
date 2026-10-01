const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cwd = process.cwd();
const userDir = path.join(cwd, 'scratch/chrome-cdp-profile');
const outDir = path.join(cwd, '_tests/motion/screenshots');

async function capture() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDir}`,
    '--window-size=1440,900',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  const versionData = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json/version', res => {
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

  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });

  function sendSession(method, params = {}) {
    return send('Target.sendMessageToTarget', {
      sessionId,
      message: JSON.stringify({ id: id++, method, params })
    });
  }

  // Use simple page target
  const list = await new Promise(resolve => {
    http.get('http://127.0.0.1:9222/json/list', res => {
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

  const sections = [
    { name: 'prod-01-manifiesto', selector: '#manifiesto' },
    { name: 'prod-02-servicios', selector: '#servicios' },
    { name: 'prod-03-proceso', selector: '#proceso' },
    { name: 'prod-04-solar', selector: '.motion-solar-transition-strip' },
    { name: 'prod-05-contacto', selector: '#contacto' }
  ];

  for (const s of sections) {
    await sendPage('Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.querySelector('${s.selector}');
          if (!el) return 'not found';
          if (window.lenis) {
            window.lenis.scrollTo(el, { immediate: true });
          } else {
            el.scrollIntoView({ behavior: 'instant', block: 'start' });
          }
          return 'ok';
        })()
      `
    });
    await new Promise(r => setTimeout(r, 1200));

    const { data } = await sendPage('Page.captureScreenshot', { format: 'png' });
    const outPath = path.join(outDir, `${s.name}.png`);
    fs.writeFileSync(outPath, Buffer.from(data, 'base64'));
    console.log(`Saved screenshot: ${outPath}`);
  }

  pageWs.close();
  ws.close();
  chrome.kill();
}

capture().catch(err => {
  console.error('CDP Capture Error:', err);
  process.exit(1);
});
