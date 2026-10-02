import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { DORES } from '../../data/conteudo'
import { surgir } from '../../lib/animacoes'
import Secao from '../ui/Secao'

/** Problemas que o público sente hoje. */
export default function Dores() {
  return (
    <Secao rotulo="Se identificou?" titulo="Se alguma dessas doeu, o manual é pra você.">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
        {DORES.map((dor, i) => (
          <motion.p key={dor} {...surgir(i * 0.05)} className="flex gap-3 bg-night p-5 text-white/85 sm:gap-4 sm:p-7 sm:text-lg">
            <X className="mt-1 h-5 w-5 shrink-0 text-sun-rose" aria-hidden /> {dor}
          </motion.p>
        ))}
      </div>
    </Secao>
  )
}
