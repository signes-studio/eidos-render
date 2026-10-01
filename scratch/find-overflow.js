const { spawn } = require('child_process');
const http = require('http');
const path = require('path');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9226',
  '--window-size=390,844',
  'about:blank'
]);

setTimeout(async () => {
  try {
    const versionData = await new Promise((res, rej) => {
      http.get('http://127.0.0.1:9226/json/version', r => {
        let d = '';
        r.on('data', c => d += c);
        r.on('end', () => res(JSON.parse(d)));
      }).on('error', rej);
    });
    const list = await new Promise(res => {
      http.get('http://127.0.0.1:9226/json/list', r => {
        let d = '';
        r.on('data', c => d += c);
        r.on('end', () => res(JSON.parse(d)));
      });
    });
    const page = list.find(p => p.type === 'page');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);
    let id = 1;
    const callbacks = new Map();
    ws.onmessage = e => {
      const msg = JSON.parse(e.data);
      if (msg.id && callbacks.has(msg.id)) {
        callbacks.get(msg.id)(msg.result || msg.error);
        callbacks.delete(msg.id);
      }
    };
    function send(method, params = {}) {
      return new Promise(res => {
        const msgId = id++;
        callbacks.set(msgId, res);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }
    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
    await send('Page.navigate', { url: 'file:///' + path.join(process.cwd(), 'index.html').replace(/\\/g, '/') });
    await new Promise(r => setTimeout(r, 2000));
    
    const res = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `
        (() => {
          const docW = document.documentElement.clientWidth;
          const overflowing = [];
          document.querySelectorAll('*').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > docW + 2 || el.scrollWidth > docW + 2) {
              overflowing.push({
                tag: el.tagName,
                id: el.id,
                className: String(el.className),
                rect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
                scrollWidth: el.scrollWidth,
                textSnippet: el.textContent?.slice(0, 30)?.trim()
              });
            }
          });
          return { docW, docScrollWidth: document.documentElement.scrollWidth, overflowing };
        })()
      `
    });
    console.log('Result:', JSON.stringify(res, null, 2));
    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
    process.exit(0);
  }
}, 1200);
