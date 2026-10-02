/**
 * Identidade visual: fundo azul-noite com degradê de pôr do sol (laranja → coral).
 * Cores e fontes usadas no site inteiro ficam aqui.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],      // textos
        display: ['"Sora"', '"Manrope"', 'system-ui', 'sans-serif'], // títulos
      },
      colors: {
        night: { DEFAULT: '#0a0c12', 2: '#11141c', 3: '#181c27' }, // fundos
        mist: '#9aa1b2',                                            // texto secundário
        sun: { DEFAULT: '#ffb547', rose: '#ff6b6b' },              // destaque
        sky: '#7cc4ff',                                             // brilho frio
      },
    },
  },
  plugins: [],
}
