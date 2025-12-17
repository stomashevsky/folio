import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const distDir = path.join(repoRoot, 'dist')
process.setMaxListeners(0)

function collectRoutes() {
  const blogDataPath = path.join(repoRoot, 'src', 'data', 'blogArticles.ts')
  const appPath = path.join(repoRoot, 'src', 'App.tsx')

  return Promise.all([
    fs.readFile(blogDataPath, 'utf8'),
    fs.readFile(appPath, 'utf8'),
  ]).then(([blogSource, appSource]) => {
    const slugs = new Set()
    const slugRe = /slug:\s*'([^']+)'/g
    let m = slugRe.exec(blogSource)
    while (m) {
      slugs.add(m[1])
      m = slugRe.exec(blogSource)
    }

    const blogRoutes = [...slugs].sort().map((s) => `/blog/${s}`)

    // Always prerender homepage + blog list + all blog articles.
    const routes = ['/', '/blog', ...blogRoutes]

    // Keep output deterministic.
    return [...new Set(routes)].sort((a, b) => a.localeCompare(b))
  })
}

function toOutputPath(route) {
  if (route === '/' || route === '') return 'index.html'
  const clean = route.startsWith('/') ? route.slice(1) : route
  return path.join(clean, 'index.html')
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
}

async function main() {
  const routes = await collectRoutes()

  const { default: Prerenderer } = await import('@prerenderer/prerenderer')

  console.log(`[prerender] Starting (${routes.length} routes)`)

  // Render one route per browser instance to avoid flaky puppeteer crashes.
  for (const route of routes) {
    const prerenderer = new Prerenderer({
      staticDir: distDir,
      indexPath: 'index.html',
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterElementExists: '#prerender-ready',
        timeout: 120000,
        launchOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage'],
        },
      },
    })

    try {
      await prerenderer.initialize()
      const rendered = await prerenderer.renderRoutes([route])
      const processed = rendered[0]

      const outRel = toOutputPath(route)
      const outAbs = path.join(distDir, outRel)
      await ensureDir(outAbs)

      // Ensure canonical/ogUrl are folio.id even if tested on GitHub Pages.
      // (The app code already sets these, prerender just captures HTML.)
      await fs.writeFile(outAbs, processed.html.trim(), 'utf8')

      console.log(`[prerender] OK  ${route} -> ${outRel}`)
    } catch (e) {
      console.error(`[prerender] FAIL ${route}`)
      console.error(e)
      process.exitCode = 1
      break
    } finally {
      try {
        await prerenderer.destroy()
      } catch {
        // ignore
      }
    }
  }

  if (process.exitCode) {
    console.error('[prerender] Failed')
    process.exit(process.exitCode)
  }

  console.log('[prerender] Done')
}

await main()
