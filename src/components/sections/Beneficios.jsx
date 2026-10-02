import { motion } from 'framer-motion'
import { BENEFICIOS } from '../../data/conteudo'
import { surgir } from '../../lib/animacoes'
import Secao from '../ui/Secao'
import fotoParis from '../../assets/lucas-paris.jpg'

/** Grade em mosaico: um card grande com foto (Paris) e seis benefícios. */
export default function Beneficios() {
  return (
    <Secao id="metodo" rotulo="O que muda" titulo="Seu escritório cabe numa mochila.">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {/* Foto inteira e nítida em cima, texto embaixo em fundo sólido (nada por cima da foto) */}
        <motion.div {...surgir()} className="card col-span-2 flex flex-col overflow-hidden md:col-span-1 md:row-span-3">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[260px] md:flex-1">
            <img
              src={fotoParis}
              alt="Lucas Melo em frente à Torre Eiffel iluminada, em Paris"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
            />
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-display text-xl font-bold leading-snug sm:text-2xl">
              Um notebook, internet e uma habilidade que o mercado paga.
            </p>
            <p className="mt-3 text-mist">É só disso que você precisa para trabalhar de qualquer lugar.</p>
          </div>
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
