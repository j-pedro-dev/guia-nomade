import { LINKS_RODAPE, PRODUTO } from '../config/site'

export default function Rodape() {
  return (
    <footer className="border-t border-white/5 px-4 pb-28 pt-8 text-center text-xs text-mist md:pb-8">
      <nav className="mb-3 flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Links legais">
        {LINKS_RODAPE.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-white">{link.label}</a>
        ))}
      </nav>
      <p>
        © {new Date().getFullYear()} {PRODUTO.nome} · {PRODUTO.autor}. Conteúdo educacional. Os resultados dependem da dedicação de cada pessoa.
      </p>
    </footer>
  )
}
