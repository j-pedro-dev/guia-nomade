# Guia Nômade

Página de vendas do ebook **Manual do Nômade Digital**, de Lucas Melo ([@lucasmeloft](https://www.instagram.com/lucasmeloft/)).

Uma landing page escura, direta e responsiva, feita para converter no celular: título forte, benefícios, conteúdo do ebook, oferta com preço e perguntas frequentes.

## Tecnologias

| Ferramenta | Para que serve |
| --- | --- |
| [React 18](https://react.dev) | Componentes da página |
| [Vite 5](https://vitejs.dev) | Servidor de desenvolvimento e build |
| [Tailwind CSS 3](https://tailwindcss.com) | Estilos |
| [Framer Motion](https://www.framer.com/motion/) | Animações de entrada e da barra fixa no celular |
| [Lucide](https://lucide.dev) | Ícones |

## Como rodar no seu computador

Pré-requisito: [Node.js](https://nodejs.org) 18 ou mais novo.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # abre o site em http://localhost:5173
```

Outros comandos:

```bash
npm run build          # gera a versão de produção em dist/
npm run preview        # abre a versão de produção localmente para conferir
npm run build:arquivo  # gera um único index.html em dist-arquivo/ (bom para mandar uma prévia)
```

### Testes automáticos

Feitos com [Playwright](https://playwright.dev), testam o site no computador e no celular: carrega sem erros, fotos carregam e estão nítidas, botões de compra apontam para o lugar certo, página não arrasta para os lados, dúvidas abrem e a barra de compra do celular aparece.

```bash
npx playwright install chromium   # só na primeira vez
npm test
```

## Estrutura do projeto

```
guia-nomade/
├── .claude/skills/            # Skills do Claude (awesome-claude-skills); veja .claude/skills/README.md
├── docs/TEMA.md               # Tema visual: cores, fontes e regras de design
├── tests/site.spec.js         # Testes automáticos (Playwright)
├── playwright.config.js
├── index.html                 # HTML base, título da aba e tags de compartilhamento (SEO)
├── public/                    # Arquivos servidos como estão
│   ├── favicon.svg            # Ícone da aba
│   ├── og-image.jpg           # Imagem que aparece ao compartilhar o link
│   └── robots.txt
├── src/
│   ├── main.jsx               # Ponto de entrada do React
│   ├── App.jsx                # Monta a página na ordem das seções
│   ├── index.css              # Estilos globais (degradê da marca, card padrão)
│   ├── config/
│   │   └── site.js            # ⭐ Preço, link do checkout, nome do produto, Instagram
│   ├── data/
│   │   └── conteudo.js        # ⭐ Todos os textos da página
│   ├── lib/
│   │   └── animacoes.js       # Animação padrão de entrada
│   ├── assets/
│   │   ├── lucas-barco.webp   # Foto do topo (+ versão @2x para telas retina)
│   │   ├── lucas-paris.webp   # Foto do card "Seu escritório cabe numa mochila"
│   │   └── lucas-brasil.webp  # Foto da seção do autor
│   └── components/
│       ├── Cabecalho.jsx      # Barra de navegação do topo
│       ├── BarraMobile.jsx    # Barra fixa com preço no celular
│       ├── Rodape.jsx
│       ├── ui/                # Peças reutilizáveis
│       │   ├── BotaoCTA.jsx
│       │   ├── Rotulo.jsx
│       │   └── Secao.jsx
│       └── sections/          # Uma seção da página por arquivo
│           ├── Hero.jsx
│           ├── Dores.jsx
│           ├── Beneficios.jsx
│           ├── Caminho.jsx
│           ├── Conteudo.jsx
│           ├── ParaQuem.jsx
│           ├── Autor.jsx
│           ├── Oferta.jsx
│           └── Faq.jsx
├── tailwind.config.js         # Cores e fontes da marca
└── vite.config.js
```

## Como editar

**Preço e link de pagamento:** abra `src/config/site.js` e altere o objeto `OFERTA`:

```js
export const OFERTA = {
  precoAntigo: 'R$ 197',
  preco: '47',
  checkout: 'https://pay.hotmart.com/SEU-LINK',
  ...
}
```

Todos os botões de compra, a barra do celular e o card de oferta passam a usar esses valores.

**Textos:** todos ficam em `src/data/conteudo.js`, separados por seção (`HERO`, `DORES`, `BENEFICIOS`, `MODULOS`, `FAQ` etc.). Os títulos de "Conteúdo" contam os módulos e bônus automaticamente.

**Fotos do Lucas:** ficam em `src/assets/` em WebP, cada uma com uma versão `@2x` para telas retina (`lucas-barco` no topo, `lucas-paris` no card de benefícios, `lucas-brasil` na seção do autor). Para trocar, substitua as duas versões mantendo os nomes. As fotos devem aparecer sempre nítidas: sem escurecer e sem texto por cima (veja `docs/TEMA.md`). Para o link compartilhado, troque também `public/og-image.jpg` (ideal: 1200×630).

**Cores e fontes:** em `tailwind.config.js`, explicadas em `docs/TEMA.md`. O degradê dos botões e títulos fica em `src/index.css` (`.bg-sunset` e `.text-sunset`).

**Ordem das seções:** em `src/App.jsx`. Para tirar uma seção, apague a linha dela.

## Publicar na Vercel

1. Entre em [vercel.com](https://vercel.com) com sua conta do GitHub.
2. Clique em **Add New → Project** e importe o repositório `guia-nomade`.
3. A Vercel detecta o Vite sozinha. Confira se está assim e clique em **Deploy**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Pronto. O site fica em `guia-nomade.vercel.app` (ou parecido).

Cada `git push` na branch `main` publica uma nova versão automaticamente.

**Domínio próprio:** no projeto da Vercel, vá em **Settings → Domains**, adicione o domínio e siga as instruções de DNS. Depois, atualize as tags `og:` do `index.html` se quiser a URL completa nelas.

## Antes de divulgar para o público

- [ ] Colocar o preço final e o link real do checkout em `src/config/site.js`
- [ ] Confirmar com o Lucas os textos, a quantidade de módulos e os bônus
- [ ] Criar as páginas de Termos de uso, Política de privacidade e Contato e colocar os links em `LINKS_RODAPE` (`src/config/site.js`)
- [ ] Trocar `public/og-image.jpg` por uma imagem 1200×630 com a capa do ebook
- [ ] Testar o link no WhatsApp para ver a prévia do compartilhamento
- [ ] (Opcional) Adicionar Pixel da Meta ou Google Analytics no `index.html` para medir as vendas

## Créditos

Conteúdo e foto: Lucas Melo. Todos os direitos reservados.
