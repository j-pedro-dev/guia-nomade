import { motion } from 'framer-motion'
import { BENEFICIOS } from '../../data/conteudo'
import { surgir } from '../../lib/animacoes'
import Secao from '../ui/Secao'
import fotoAutor from '../../assets/lucas.jpg'

/** Grade em mosaico: um card grande com foto e seis benefícios. */
export default function Beneficios() {
  return (
    <Secao id="metodo" rotulo="O que muda" titulo="Seu escritório cabe numa mochila.">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        <motion.div {...surgir()} className="card relative col-span-2 flex min-h-[240px] flex-col justify-end overflow-hidden p-6 sm:min-h-[280px] sm:p-8 md:col-span-1 md:row-span-3">
          <img src={fotoAutor} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-transparent" />
          <p className="relative font-display text-xl font-bold leading-snug sm:text-2xl">
            Um notebook, internet e uma habilidade que o mercado paga.
          </p>
          <p className="relative mt-3 text-mist">É só disso que você precisa para trabalhar de qualquer lugar.</p>
        </motion.div>

        {BENEFICIOS.map(({ icone: Icone, titulo, texto }, i) => (
          <motion.div key={titulo} {...surgir(i * 0.04)} className="card p-5 sm:p-7">
            <Icone className="h-6 w-6 text-sun" aria-hidden />
            <h3 className="mt-3 font-display text-sm font-bold sm:mt-4 sm:text-lg">{titulo}</h3>
            <p className="mt-1.5 text-[13px] leading-snug text-mist sm:text-sm">{texto}</p>
          </motion.div>
        ))}
      </div>
    </Secao>
  )
}
