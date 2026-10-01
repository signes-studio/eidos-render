const { spawn } = require('child_process');
const http = require('http');
const path = require('path');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9227',
  '--window-size=390,844',
  'about:blank'
]);

const testPages = [
  'index.html',
  'servicios.html',
  'proyectos.html',
  'contacto.html',
  'en/index.html',
  'de/index.html',
  'fr/index.html'
];

setTimeout(async () => {
  try {
    const list = await new Promise(res => {
      http.get('http://127.0.0.1:9227/json/list', r => {
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

    for (const testWidth of [390, 360]) {
      console.log(`\n================ Testing at Viewport Width: ${testWidth}px ================`);
      await send('Emulation.setDeviceMetricsOverride', { width: testWidth, height: 844, deviceScaleFactor: 2, mobile: true });

      for (const p of testPages) {
        const fileUrl = 'file:///' + path.join(process.cwd(), p).replace(/\\/g, '/');
        await send('Page.navigate', { url: fileUrl });
        await new Promise(r => setTimeout(r, 1200));

        const res = await send('Runtime.evaluate', {
          returnByValue: true,
          expression: `
            (() => {
              const docW = document.documentElement.clientWidth;
              const docScrollWidth = document.documentElement.scrollWidth;
              const overflowing = [];
              document.querySelectorAll('*').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.right > docW + 2 || el.scrollWidth > docW + 2) {
                  overflowing.push({
                    tag: el.tagName,
                    id: el.id,
                    className: String(el.className || ''),
                    rect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
                    scrollWidth: el.scrollWidth,
                    textSnippet: el.textContent?.slice(0, 30)?.trim()
                  });
                }
              });
              return { docW, docScrollWidth, overflowCount: overflowing.length, overflowing: overflowing.slice(0, 5) };
            })()
          `
        });
        
        const data = res.result?.value || res;
        const status = data.docScrollWidth <= data.docW ? '✅ PASS' : '❌ FAIL (OVERFLOW)';
        console.log(`${p.padEnd(20)} | Width: ${data.docW} | ScrollWidth: ${data.docScrollWidth} | ${status}`);
        if (data.docScrollWidth > data.docW) {
          console.log('   Culprits:', JSON.stringify(data.overflowing, null, 2));
        }
      }
    }

    ws.close();
  } catch (err) {
    console.error(err);
  } finally {
    chrome.kill();
    process.exit(0);
  }
}, 1200);
