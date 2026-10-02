import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { PARA_QUEM } from '../../data/conteudo'
import { surgir } from '../../lib/animacoes'
import Secao from '../ui/Secao'

/** Filtro honesto: pra quem o manual é e pra quem não é. */
export default function ParaQuem() {
  return (
    <Secao rotulo="Aviso sincero" titulo="Isso não é pra todo mundo.">
      <div className="grid gap-4 md:grid-cols-2">
        <motion.div {...surgir()} className="card p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold">É pra você se…</h3>
          <ul className="mt-5 grid gap-3">
            {PARA_QUEM.e.map((item) => (
              <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden />{item}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...surgir(0.05)} className="rounded-2xl border border-white/[0.07] p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold text-mist">Não é pra você se…</h3>
          <ul className="mt-5 grid gap-3 text-mist">
            {PARA_QUEM.naoE.map((item) => (
              <li key={item} className="flex gap-3"><X className="mt-0.5 h-5 w-5 shrink-0 text-sun-rose" aria-hidden />{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Secao>
  )
}
