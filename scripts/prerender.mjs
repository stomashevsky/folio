import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const distDir = path.join(repoRoot, 'dist')
const indexHtmlPath = path.join(distDir, 'index.html')
process.setMaxListeners(0)

/**
 * Temporarily convert relative asset paths to absolute paths in index.html
 * This is needed because prerender navigates to nested routes like /blog/article,
 * and relative paths like ./assets/... would resolve to /blog/article/assets/...
 * which doesn't exist, breaking the app.
 */
async function makePathsAbsolute() {
  const html = await fs.readFile(indexHtmlPath, 'utf8')
  const absoluteHtml = html
    .replaceAll('href="./assets/', 'href="/assets/')
    .replaceAll('src="./assets/', 'src="/assets/')
    .replaceAll('href="assets/', 'href="/assets/')
    .replaceAll('src="assets/', 'src="/assets/')
    .replaceAll('href="favicon.svg"', 'href="/favicon.svg"')
    .replaceAll('href="./favicon.svg"', 'href="/favicon.svg"')
    .replaceAll('href="site.webmanifest"', 'href="/site.webmanifest"')
    .replaceAll('href="./site.webmanifest"', 'href="/site.webmanifest"')
  await fs.writeFile(indexHtmlPath, absoluteHtml, 'utf8')
  return html // Return original to restore later
}

async function restoreOriginalHtml(originalHtml) {
  await fs.writeFile(indexHtmlPath, originalHtml, 'utf8')
}

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

function rewriteAbsoluteToRelativePaths(route, html) {
  // During prerender, we use absolute paths (/assets/...) so nested routes work.
  // After prerender, we convert them back to relative paths so the build works on
  // both https://folio.id/ and https://stomashevsky.github.io/folio/
  const depth = route.split('/').filter(Boolean).length
  
  // For root route, use ./ prefix (same as Vite default)
  // For nested routes, use ../ repeated based on depth
  const prefix = depth === 0 ? './' : '../'.repeat(depth)

  return html
    // Convert absolute paths to relative
    .replaceAll('href="/assets/', `href="${prefix}assets/`)
    .replaceAll('src="/assets/', `src="${prefix}assets/`)
    .replaceAll('href="/favicon.svg"', `href="${prefix}favicon.svg"`)
    .replaceAll('href="/site.webmanifest"', `href="${prefix}site.webmanifest"`)
    // Also handle any remaining relative paths (shouldn't happen, but just in case)
    .replaceAll('href="./assets/', `href="${prefix}assets/`)
    .replaceAll('src="./assets/', `src="${prefix}assets/`)
    .replaceAll('href="assets/', `href="${prefix}assets/`)
    .replaceAll('src="assets/', `src="${prefix}assets/`)
    .replaceAll('href="favicon.svg"', `href="${prefix}favicon.svg"`)
    .replaceAll('href="./favicon.svg"', `href="${prefix}favicon.svg"`)
    .replaceAll('href="site.webmanifest"', `href="${prefix}site.webmanifest"`)
    .replaceAll('href="./site.webmanifest"', `href="${prefix}site.webmanifest"`)
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
}

async function main() {
  const routes = await collectRoutes()

  const { default: Prerenderer } = await import('@prerenderer/prerenderer')

  console.log(`[prerender] Starting (${routes.length} routes)`)

  // Convert relative paths to absolute for prerendering
  // (relative paths break when loading from nested routes like /blog/article)
  const originalHtml = await makePathsAbsolute()
  console.log('[prerender] Converted asset paths to absolute for prerendering')

  // Render one route per browser instance to avoid flaky puppeteer crashes.
  // Use retry logic for transient Puppeteer errors.
  const MAX_RETRIES = 3
  const failedRoutes = []

  for (const route of routes) {
    let success = false
    let lastError = null

    for (let attempt = 1; attempt <= MAX_RETRIES && !success; attempt++) {
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
        const html = rewriteAbsoluteToRelativePaths(route, processed.html.trim())
        await fs.writeFile(outAbs, html, 'utf8')

        // IMPORTANT: If we just wrote to index.html (root route), we need to restore
        // absolute paths because subsequent routes will load this file.
        // The prerendered output has relative paths, but the source needs absolute paths.
        if (outRel === 'index.html') {
          await makePathsAbsolute()
        }

        console.log(`[prerender] OK  ${route} -> ${outRel}`)
        success = true
      } catch (e) {
        lastError = e
        // Log retry attempts for transient errors
        if (attempt < MAX_RETRIES && e.message?.includes('Promise was collected')) {
          console.warn(`[prerender] RETRY ${route} (attempt ${attempt + 1}/${MAX_RETRIES})`)
          await new Promise((r) => setTimeout(r, 1000)) // Wait before retry
        }
    } finally {
      // Longer delay to prevent puppeteer race conditions when closing pages
      await new Promise((r) => setTimeout(r, 300))
        try {
          await prerenderer.destroy()
        } catch {
          // ignore puppeteer cleanup errors
        }
      }
    }

    if (!success) {
      console.error(`[prerender] FAIL ${route}`)
      console.error(lastError)
      failedRoutes.push(route)
      // Continue with other routes instead of stopping
    }
  }

  // Detect CI environment (GitHub Actions sets CI=true)
  const isCI = process.env.CI === 'true'

  if (failedRoutes.length > 0) {
    const failRate = failedRoutes.length / routes.length
    console.warn(`[prerender] Failed routes (${failedRoutes.length}/${routes.length}): ${failedRoutes.join(', ')}`)
    
    if (isCI) {
      // In CI, don't fail the build - prerendering is optional
      // Puppeteer has frequent race conditions in CI environments
      console.warn('[prerender] Running in CI - prerender failures are non-blocking')
    } else if (failRate > 0.1) {
      // Locally, fail if more than 10% of routes fail
      console.error(`[prerender] Too many failures (>${(0.1 * 100).toFixed(0)}%), failing build`)
      process.exitCode = 1
    } else {
      console.warn('[prerender] Some routes failed but within tolerance, continuing...')
    }
  }

  // Restore original HTML with relative paths (needed for GitHub Pages deployment)
  await restoreOriginalHtml(originalHtml)
  console.log('[prerender] Restored original asset paths')

  if (process.exitCode) {
    console.error('[prerender] Failed')
    process.exit(process.exitCode)
  }

  console.log('[prerender] Done')
}

await main()
