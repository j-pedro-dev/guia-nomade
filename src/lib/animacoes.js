/**
 * Animação padrão de entrada: o elemento sobe e aparece quando entra na tela.
 * Uso: <motion.div {...surgir()} />  ou  <motion.div {...surgir(0.1)} /> com atraso.
 */
export function surgir(atraso = 0) {
  return {
    initial: { opacity: 0.001, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay: atraso, ease: [0.22, 1, 0.36, 1] },
  }
}
