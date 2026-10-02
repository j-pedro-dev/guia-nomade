import { defineConfig, devices } from '@playwright/test'

/**
 * Testes automáticos do site (skill webapp-testing).
 * Rodar: `npx playwright install chromium` (só na primeira vez) e depois `npm test`.
 */
export default defineConfig({
  testDir: './tests',
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4173',
    // Permite usar um Chromium já instalado: PW_CHROMIUM_PATH=/caminho/do/chrome npm test
    launchOptions: process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {},
    // Só para ambientes atrás de proxy com certificado próprio (bloqueiam o Google Fonts)
    ignoreHTTPSErrors: Boolean(process.env.PW_IGNORE_HTTPS_ERRORS),
  },
  projects: [
    { name: 'computador', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } } },
    { name: 'celular', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173 --strictPort',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
})
