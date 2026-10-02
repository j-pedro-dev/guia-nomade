import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`         → site para produção em dist/ (é o que a Vercel usa)
// `npm run build:arquivo` → um único index.html em dist-arquivo/, útil para mandar uma prévia
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'arquivo' ? [viteSingleFile()] : [])],
  build: mode === 'arquivo'
    ? { outDir: 'dist-arquivo', assetsInlineLimit: 100_000_000 }
    : {},
}))
