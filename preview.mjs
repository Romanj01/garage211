// Local preview only. GitHub Pages serves the files directly, without Node.js.
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join,extname} from 'node:path';

const root=fileURLToPath(new URL('.',import.meta.url));
const files=new Set(['work-diagnostics.png','garage.css','garage-logo.png','work-polish.png','work-interior.png','site-labels.js','index.html','app.js','autonomous-demo.js','availability.js','browser-storage.js','demo-seed.js','request.js','reschedule.js','schedule.js','telegram.js','sw.js','style.css','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','car-studio.png']);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.png':'image/png'};
const port=Number(process.env.PORT||4336),prefix='/garage211-github/';
createServer(async(req,res)=>{
  const path=new URL(req.url,'http://localhost').pathname;
  if(path===prefix.slice(0,-1)){res.writeHead(308,{Location:prefix});res.end();return;}
  if(path==='/__mobile-preview'){res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end('<!doctype html><html lang="ru"><title>Гараж 211 — мобильный просмотр</title><style>body{margin:0;padding:24px;background:#242121;color:#eee;font:14px Arial}iframe{display:block;width:390px;height:844px;border:1px solid #666;border-radius:12px;margin:20px auto}p{text-align:center}</style><p>Мобильный просмотр · 390 × 844</p><iframe title="Мобильная версия Гараж 211" src="'+prefix+'"></iframe></html>');return;}
  const name=(path.startsWith(prefix)?path.slice(prefix.length):path.slice(1))||'index.html';
  if(req.method!=='GET'&&req.method!=='HEAD'||!files.has(name)){res.writeHead(404);res.end('Not found');return;}
  try{
    const data=await readFile(join(root,name));
    res.writeHead(200,{'Content-Type':mime[extname(name)]||'application/octet-stream','Cache-Control':'no-cache'});
    res.end(req.method==='HEAD'?undefined:data);
  }catch{res.writeHead(500);res.end('Cannot read file');}
}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}${prefix}\nRoot:  http://127.0.0.1:${port}/\nStop: Ctrl+C`));

