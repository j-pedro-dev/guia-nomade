import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
})

test('carrega sem erros no console', async ({ page, baseURL }) => {
  const erros = []
  // Ignora falhas de serviços de fora (ex.: Google Fonts); o que importa são erros do próprio site
  page.on('console', (msg) => {
    const origem = msg.location().url || ''
    if (msg.type() === 'error' && (origem === '' || origem.startsWith(baseURL))) erros.push(msg.text())
  })
  page.on('pageerror', (err) => erros.push(err.message))
  await page.reload()
  await page.waitForLoadState('networkidle')
  expect(erros).toEqual([])
})

test('mostra o título principal e o preço', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Pare de vender seu tempo')
  await expect(page.locator('#oferta')).toContainText('R$')
})

test('todas as fotos carregam', async ({ page }) => {
  const imagens = page.locator('img')
  const total = await imagens.count()
  expect(total).toBeGreaterThan(0)
  for (let i = 0; i < total; i++) {
    const img = imagens.nth(i)
    await img.scrollIntoViewIfNeeded()
    await expect.poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0)).toBe(true)
  }
})

test('as fotos ficam nítidas (sem opacidade baixa)', async ({ page }) => {
  const opacidades = await page.locator('img').evaluateAll((imgs) =>
    imgs.map((img) => Number(getComputedStyle(img).opacity)),
  )
  for (const o of opacidades) expect(o).toBe(1)
})

test('botões de compra levam à oferta ou ao checkout', async ({ page }) => {
  const destinos = await page.locator('a.bg-sunset').evaluateAll((links) => links.map((a) => a.getAttribute('href')))
  expect(destinos.length).toBeGreaterThan(0)
  for (const href of destinos) expect(href === '#oferta' || href.startsWith('http') || href.startsWith('#LINK')).toBe(true)
})

test('a página não arrasta para os lados', async ({ page }) => {
  const sobra = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  expect(sobra).toBeLessThanOrEqual(0)
})

test('as dúvidas abrem ao clicar', async ({ page }) => {
  const primeira = page.locator('#duvidas details').first()
  await primeira.locator('summary').click()
  await expect(primeira).toHaveAttribute('open', '')
})

test('no celular, a barra de compra aparece ao rolar', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'só existe no celular')
  const barra = page.getByRole('link', { name: 'Quero o manual' })
  await expect(barra).toBeHidden()
  await page.mouse.wheel(0, 1500)
  await expect(barra).toBeVisible()
})
