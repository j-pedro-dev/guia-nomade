/**
 * Serve a pasta dist/ com os mesmos cabeçalhos de segurança do vercel.json,
 * para os testes rodarem com as proteções de produção ligadas.
 */
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url)))
const cabecalhos = Object.fromEntries(config.headers[0].headers.map((h) => [h.key, h.value]))
const tipos = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.txt': 'text/plain' }
const raiz = new URL('../dist/', import.meta.url).pathname
const porta = Number(process.env.PORTA || 4174)

createServer(async (req, res) => {
  const caminho = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^(\.\.[/\\])+/, '')
  const arquivo = join(raiz, caminho.endsWith('/') ? 'index.html' : caminho)
  try {
    const corpo = await readFile(arquivo)
    res.writeHead(200, { ...cabecalhos, 'Content-Type': tipos[extname(arquivo)] || 'application/octet-stream' })
    res.end(corpo)
  } catch {
    res.writeHead(404, cabecalhos).end('não encontrado')
  }
}).listen(porta, () => console.log(`Servindo dist/ em http://localhost:${porta}`))
