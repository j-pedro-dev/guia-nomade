import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { OFERTA } from '../config/site'

/**
 * Barra fixa no rodapé da tela, só no celular.
 * Aparece depois que a pessoa rola a página e some quando a seção de oferta está visível.
 */
export default function BarraMobile() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const oferta = document.getElementById('oferta')
    const aoRolar = () => {
      const r = oferta?.getBoundingClientRect()
      const ofertaNaTela = r && r.top < window.innerHeight && r.bottom > 0
      setVisivel(window.scrollY > 650 && !ofertaNaTela)
    }
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-night/90 px-4 pt-3 backdrop-blur-lg md:hidden"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="leading-tight">
              <p className="text-xs text-mist line-through">{OFERTA.precoAntigo}</p>
              <p className="font-display text-xl font-extrabold">R$ {OFERTA.preco}</p>
            </div>
            <a href="#oferta" className="inline-flex items-center gap-2 rounded-full bg-sunset px-6 py-3 font-bold text-night">
              Quero o manual <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
