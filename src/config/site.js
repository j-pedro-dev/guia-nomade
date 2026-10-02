/**
 * Configurações principais do site.
 * É aqui que você troca preço, link de pagamento e redes sociais
 * sem precisar mexer nos componentes.
 */
export const OFERTA = {
  // Preço "de" (aparece riscado)
  precoAntigo: 'R$ 197',
  // Preço atual, só o número
  preco: '47',
  // Link do checkout (Hotmart, Kiwify, Eduzz etc.)
  checkout: '#LINK-DO-CHECKOUT',
  formasDePagamento: 'pagamento único · Pix ou cartão',
  garantiaDias: 7,
}

export const PRODUTO = {
  nome: 'Manual do Nômade Digital',
  autor: 'Lucas Melo',
  instagram: {
    usuario: 'lucasmeloft',
    url: 'https://www.instagram.com/lucasmeloft/',
  },
}

export const LINKS_RODAPE = [
  { label: 'Termos de uso', href: '#' },
  { label: 'Política de privacidade', href: '#' },
  { label: 'Contato', href: '#' },
]
