import { NAVEGACAO } from '../data/conteudo'

/** Barra de navegação fixa no topo. Os links do meio somem no celular. */
export default function Cabecalho() {
  return (
    <header
      className="sticky top-0 z-20 border-b border-white/5 bg-night/75 backdrop-blur-lg"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="font-display text-lg font-extrabold tracking-tight">
          nômade<span className="text-sunset">digital</span>
        </a>
        <nav className="hidden gap-8 text-sm text-mist md:flex" aria-label="Seções">
          {NAVEGACAO.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>
          ))}
        </nav>
        <a href="#oferta" className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold transition hover:border-sun hover:text-sun">
          Quero começar
        </a>
      </div>
    </header>
  )
}
