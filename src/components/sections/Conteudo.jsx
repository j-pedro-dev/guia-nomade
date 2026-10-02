import { motion } from 'framer-motion'
import { BONUS, MODULOS } from '../../data/conteudo'
import { surgir } from '../../lib/animacoes'
import Secao from '../ui/Secao'

/** Lista dos módulos do ebook e os bônus. */
export default function Conteudo() {
  return (
    <Secao id="conteudo" rotulo="Conteúdo" titulo={`${MODULOS.length} módulos práticos + ${BONUS.length} bônus.`}>
      <motion.ol {...surgir()} className="flex flex-wrap gap-2.5">
        {MODULOS.map((modulo, i) => (
          <li key={modulo} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-night-2 py-2 pl-2 pr-4 text-sm">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 text-xs font-bold text-sun">
              {String(i + 1).padStart(2, '0')}
            </span>
            {modulo}
          </li>
        ))}
      </motion.ol>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
        {BONUS.map(({ icone: Icone, titulo, texto }, i) => (
          <motion.div key={titulo} {...surgir(i * 0.05)} className="rounded-3xl border border-dashed border-sun/30 bg-sun/[0.04] p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sun sm:text-xs">Bônus {i + 1}</p>
            <Icone className="mt-4 h-6 w-6 text-white" aria-hidden />
            <h3 className="mt-3 font-display text-sm font-bold sm:text-base">{titulo}</h3>
            <p className="mt-1 text-[13px] text-mist sm:text-sm">{texto}</p>
          </motion.div>
        ))}
      </div>
    </Secao>
  )
}
