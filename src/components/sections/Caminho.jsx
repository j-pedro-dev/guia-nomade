import { motion } from 'framer-motion'
import { PASSOS } from '../../data/conteudo'
import { surgir } from '../../lib/animacoes'
import Secao from '../ui/Secao'

/** Os 4 passos do método, em ordem. */
export default function Caminho() {
  return (
    <Secao rotulo="O caminho" titulo="4 passos entre o escritório e o aeroporto.">
      <ol className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {PASSOS.map(({ titulo, texto }, i) => (
          <motion.li key={titulo} {...surgir(i * 0.06)} className="card p-5 sm:p-7">
            <span className="font-display text-4xl font-extrabold text-sunset sm:text-5xl">{i + 1}</span>
            <h3 className="mt-3 font-display text-sm font-bold sm:mt-4 sm:text-lg">{titulo}</h3>
            <p className="mt-1.5 text-[13px] leading-snug text-mist sm:text-sm">{texto}</p>
          </motion.li>
        ))}
      </ol>
    </Secao>
  )
}
