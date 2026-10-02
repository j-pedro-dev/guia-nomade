import Cabecalho from './components/Cabecalho'
import BarraMobile from './components/BarraMobile'
import Rodape from './components/Rodape'
import Hero from './components/sections/Hero'
import Dores from './components/sections/Dores'
import Beneficios from './components/sections/Beneficios'
import Caminho from './components/sections/Caminho'
import Conteudo from './components/sections/Conteudo'
import ParaQuem from './components/sections/ParaQuem'
import Autor from './components/sections/Autor'
import Oferta from './components/sections/Oferta'
import Faq from './components/sections/Faq'

/** Página de vendas. A ordem abaixo é a ordem das seções na tela. */
export default function App() {
  return (
    <div className="overflow-x-clip">
      <BarraMobile />
      <Cabecalho />
      <main>
        <Hero />
        <Dores />
        <Beneficios />
        <Caminho />
        <Conteudo />
        <ParaQuem />
        <Autor />
        <Oferta />
        <Faq />
      </main>
      <Rodape />
    </div>
  )
}
