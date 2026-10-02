import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { HERO } from '../../data/conteudo'
import { PRODUTO } from '../../config/site'
import { surgir } from '../../lib/animacoes'
import BotaoCTA from '../ui/BotaoCTA'
import fotoAutor from '../../assets/lucas.jpg'

/** Primeira dobra: título, chamada para compra e foto do autor. */
export default function Hero() {
  return (
    <section className="relative">
      {/* Brilho laranja atrás do título */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,150,80,0.18),transparent)] blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-8 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-12 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
        <motion.div {...surgir()}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-mist">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sun" /> {HERO.selo}
          </span>
          <h1 className="mt-6 font-display text-[2.7rem] font-extrabold leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
            {HERO.titulo} <span className="text-sunset">{HERO.tituloDestaque}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-mist">{HERO.subtitulo}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <BotaoCTA className="w-full sm:w-auto">{HERO.ctaPrincipal}</BotaoCTA>
            <a href="#conteudo" className="w-full py-2 text-center font-semibold text-mist transition hover:text-white sm:w-auto sm:px-2">
              {HERO.ctaSecundario}
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-mist sm:mt-9 sm:justify-start">
            {HERO.garantias.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-sun" aria-hidden />{item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...surgir(0.15)} className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-sun/40 via-sun-rose/20 to-sky/20 blur-xl" />
          <img
            src={fotoAutor}
            alt={`${PRODUTO.autor} em ${HERO.foto.local}`}
            className="relative aspect-[5/4] w-full rounded-[2rem] border border-white/10 object-cover object-[center_30%] sm:aspect-[4/5]"
            fetchpriority="high"
          />
          <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-night/85 px-4 py-3 backdrop-blur sm:-left-10 sm:bottom-8">
            <p className="text-xs text-mist">{HERO.foto.legenda}</p>
            <p className="font-display font-bold">{HERO.foto.local}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
