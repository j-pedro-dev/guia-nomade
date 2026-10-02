import { motion } from 'framer-motion'
import { AtSign } from 'lucide-react'
import { AUTOR } from '../../data/conteudo'
import { PRODUTO } from '../../config/site'
import { surgir } from '../../lib/animacoes'
import Secao from '../ui/Secao'
import Rotulo from '../ui/Rotulo'
import fotoAutor from '../../assets/lucas.jpg'

/** Apresentação de quem escreveu o ebook. */
export default function Autor() {
  return (
    <Secao id="autor">
      <motion.div {...surgir()} className="card grid items-center gap-6 p-6 sm:gap-10 sm:p-12 md:grid-cols-[260px_1fr]">
        <img
          src={fotoAutor}
          alt={PRODUTO.autor}
          loading="lazy"
          className="aspect-square w-28 rounded-full object-cover sm:w-full sm:max-w-[260px] sm:rounded-3xl"
        />
        <div>
          <Rotulo>Quem escreveu</Rotulo>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{PRODUTO.autor}</h2>
          <p className="mt-4 max-w-2xl text-mist">{AUTOR.bio}</p>
          <p className="mt-6 font-display text-xl font-bold sm:text-2xl">
            “{AUTOR.frase} <span className="text-sunset">{AUTOR.fraseDestaque}</span>”
          </p>
          <a
            href={PRODUTO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mist hover:text-white"
          >
            <AtSign className="h-4 w-4" aria-hidden /> {PRODUTO.instagram.usuario} no Instagram
          </a>
        </div>
      </motion.div>
    </Secao>
  )
}
