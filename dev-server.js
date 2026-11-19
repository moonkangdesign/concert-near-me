// Loud Weekend 개발 서버 (live reload)
// 실행: npm run dev   (또는 node dev-server.js)
// 파일을 저장하면 브라우저가 자동으로 새로고침돼요. CSS만 바꾸면 새로고침 없이 스타일만 바뀌어요.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 5173;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

// Injected into every HTML page: listens for changes from this server.
const RELOAD = `<script>(()=>{const es=new EventSource('/__reload');es.onmessage=e=>{
if(e.data==='css'){document.querySelectorAll('link[rel=stylesheet]').forEach(l=>{if(l.href.startsWith(location.origin)){const u=new URL(l.href);u.searchParams.set('t',Date.now());l.href=u.href}})}
else location.reload()}})()</script>`;

const clients = new Set();

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/__reload') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write('retry: 500\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  let p = decodeURIComponent(url.pathname);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, path.normalize(p));
  if (!file.startsWith(ROOT + path.sep)) { res.writeHead(403); return res.end('Forbidden'); }

  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    if (ext === '.html') buf = Buffer.from(buf.toString('utf8').replace('</body>', RELOAD + '\n</body>'));
    res.end(buf);
  });
}).listen(PORT, '127.0.0.1', () => {
  console.log(`\n  Loud Weekend 개발 서버 → http://localhost:${PORT}\n  파일을 저장하면 자동으로 새로고침돼요. 끄려면 Ctrl+C\n`);
});

let timer;
fs.watch(ROOT, { recursive: true }, (_event, name) => {
  if (!name || name.startsWith('.') || name.includes('node_modules') || name === 'dev-server.js') return;
  clearTimeout(timer);
  timer = setTimeout(() => {
    const msg = name.endsWith('.css') ? 'css' : 'reload';
    for (const c of clients) c.write(`data: ${msg}\n\n`);
    console.log(`  변경됨: ${name}`);
  }, 80);
});
