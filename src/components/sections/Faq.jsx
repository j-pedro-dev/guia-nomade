import { Plus } from 'lucide-react'
import { FAQ } from '../../data/conteudo'
import BotaoCTA from '../ui/BotaoCTA'
import Secao from '../ui/Secao'

/** Perguntas frequentes em acordeão (usa <details>, funciona sem JavaScript). */
export default function Faq() {
  return (
    <Secao id="duvidas" rotulo="Dúvidas" titulo="Perguntas frequentes." estreita>
      <div className="grid gap-3">
        {FAQ.map(({ pergunta, resposta }) => (
          <details key={pergunta} className="group card px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold [&::-webkit-details-marker]:hidden">
              {pergunta}
              <Plus className="h-5 w-5 shrink-0 text-sun transition group-open:rotate-45" aria-hidden />
            </summary>
            <p className="pb-5 text-mist">{resposta}</p>
          </details>
        ))}
      </div>
      <div className="mt-14 text-center">
        <BotaoCTA>Quero começar hoje</BotaoCTA>
      </div>
    </Secao>
  )
}
