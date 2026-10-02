import { ArrowRight } from 'lucide-react'

/** Botão principal com o degradê da marca. Por padrão leva até a seção de oferta. */
export default function BotaoCTA({ children, href = '#oferta', className = '' }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-sunset px-7 py-4 font-bold text-night shadow-[0_8px_40px_-8px_rgba(255,140,80,0.6)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
    </a>
  )
}
