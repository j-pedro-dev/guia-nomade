import { motion } from 'framer-motion'
import { Check, Infinity as InfinityIcon, ShieldCheck, Zap } from 'lucide-react'
import { ITENS_OFERTA } from '../../data/conteudo'
import { OFERTA, PRODUTO } from '../../config/site'
import { surgir } from '../../lib/animacoes'
import BotaoCTA from '../ui/BotaoCTA'
import Rotulo from '../ui/Rotulo'
import Secao from '../ui/Secao'

/** Card de preço com o botão que leva ao checkout. Preço e link vêm de src/config/site.js. */
export default function Oferta() {
  return (
    <Secao id="oferta">
      <motion.div {...surgir()} className="relative mx-auto max-w-xl">
        <div aria-hidden className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-sun via-sun-rose to-sky opacity-60 blur-lg" />
        <div className="relative rounded-[2rem] border border-white/10 bg-night-2 px-5 py-8 text-center sm:p-12">
          <Rotulo>Oferta de lançamento</Rotulo>
          <h2 className="mt-3 font-display text-3xl font-bold">{PRODUTO.nome}</h2>

          <p className="mt-8 text-mist line-through">{OFERTA.precoAntigo}</p>
          <p className="font-display text-6xl font-extrabold tracking-tight sm:text-8xl">
            <span className="align-top text-2xl text-mist">R$</span>{OFERTA.preco}
          </p>
          <p className="mt-1 text-sm text-mist">{OFERTA.formasDePagamento}</p>

          <ul className="mx-auto mt-8 grid max-w-xs gap-3 text-left">
            {ITENS_OFERTA.map((item) => (
              <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden />{item}</li>
            ))}
          </ul>

          <BotaoCTA href={OFERTA.checkout} className="mt-8 w-full sm:mt-10 sm:text-lg">Quero entrar agora</BotaoCTA>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-mist">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" aria-hidden /> Garantia de {OFERTA.garantiaDias} dias</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4" aria-hidden /> Acesso imediato</span>
            <span className="inline-flex items-center gap-1.5"><InfinityIcon className="h-4 w-4" aria-hidden /> Para sempre</span>
          </div>
        </div>
      </motion.div>
      <p className="mx-auto mt-10 max-w-lg text-center text-sm text-mist">
        Menos que um mês de cafezinho. A diferença é que esse investimento pode mudar o endereço do seu escritório.
      </p>
    </Secao>
  )
}
