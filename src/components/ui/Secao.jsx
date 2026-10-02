import { motion } from 'framer-motion'
import { surgir } from '../../lib/animacoes'
import Rotulo from './Rotulo'

/**
 * Container padrão de cada seção: largura máxima, espaçamento e cabeçalho opcional.
 * `estreita` deixa a seção mais fina (usado no FAQ).
 */
export default function Secao({ id, rotulo, titulo, estreita = false, children }) {
  const largura = estreita ? 'max-w-3xl' : 'max-w-6xl'
  return (
    <section id={id} className={`mx-auto ${largura} scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20 md:py-28`}>
      {titulo && (
        <motion.div {...surgir()} className="mb-8 max-w-2xl sm:mb-12">
          <Rotulo>{rotulo}</Rotulo>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">{titulo}</h2>
        </motion.div>
      )}
      {children}
    </section>
  )
}
