import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const appFilePath = path.join(repoRoot, 'src', 'App.tsx')
const blogDataFilePath = path.join(repoRoot, 'src', 'data', 'blogArticles.ts')
const publicDir = path.join(repoRoot, 'public')
const sitemapPath = path.join(publicDir, 'sitemap.xml')

const SITE_ORIGIN = 'https://folio.id'

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function toLoc(pathname) {
  // Ensure leading slash
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`
  return new URL(p, SITE_ORIGIN).toString()
}

function collectRoutePathsFromApp(appSource) {
  const paths = new Set()
  const routePathRe = /<Route\s+path=\"([^\"]+)\"/g

  let m = routePathRe.exec(appSource)
  while (m) {
    const routePath = m[1]

    // Skip any wildcard/param routes (none today, but keep safe)
    if (routePath.includes('*') || routePath.includes(':')) {
      m = routePathRe.exec(appSource)
      continue
    }

    // Skip redirect-only route (canonical is the target)
    if (routePath === '/business') {
      m = routePathRe.exec(appSource)
      continue
    }

    paths.add(routePath)
    m = routePathRe.exec(appSource)
  }

  return [...paths]
}

function collectBlogLastmodBySlug(blogSource) {
  // Extract pairs of (date, slug) from the data file.
  // This is a pragmatic regex tailored to current file format.
  const map = new Map()

  const entryRe = /\{[\s\S]*?date:\s*'([^']+)'[\s\S]*?slug:\s*'([^']+)'[\s\S]*?\}/g

  let m = entryRe.exec(blogSource)
  while (m) {
    const date = m[1]
    const slug = m[2]
    if (slug) {
      map.set(slug, date)
    }
    m = entryRe.exec(blogSource)
  }

  return map
}

function toIsoDate(dateStr) {
  // Blog dates are like "Sep 16, 2025". Convert to YYYY-MM-DD in UTC.
  const parsed = Date.parse(`${dateStr} UTC`)
  if (Number.isNaN(parsed)) return null
  return new Date(parsed).toISOString().slice(0, 10)
}

function buildSitemapXml(routePaths, blogLastmodBySlug) {
  const urlEntries = []

  for (const routePath of routePaths) {
    const loc = toLoc(routePath)

    // Add lastmod only for blog post pages where we can infer it.
    let lastmod = null
    if (routePath.startsWith('/blog/') && routePath !== '/blog') {
      const slug = routePath.slice('/blog/'.length)
      const dateStr = blogLastmodBySlug.get(slug) || null
      lastmod = dateStr ? toIsoDate(dateStr) : null
    }

    urlEntries.push({ loc, lastmod })
  }

  urlEntries.sort((a, b) => a.loc.localeCompare(b.loc))

  const lines = []
  lines.push('<?xml version="1.0" encoding="UTF-8"?>')
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

  for (const entry of urlEntries) {
    lines.push('  <url>')
    lines.push(`    <loc>${escapeXml(entry.loc)}</loc>`)
    if (entry.lastmod) {
      lines.push(`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`)
    }
    lines.push('  </url>')
  }

  lines.push('</urlset>')
  lines.push('')
  return lines.join('\n')
}

async function main() {
  const [appSource, blogSource] = await Promise.all([
    fs.readFile(appFilePath, 'utf8'),
    fs.readFile(blogDataFilePath, 'utf8'),
  ])

  const routePaths = collectRoutePathsFromApp(appSource)
  const blogLastmodBySlug = collectBlogLastmodBySlug(blogSource)

  await fs.mkdir(publicDir, { recursive: true })
  const xml = buildSitemapXml(routePaths, blogLastmodBySlug)
  await fs.writeFile(sitemapPath, xml, 'utf8')

  console.log(`[sitemap] Wrote ${routePaths.length} route(s) to ${path.relative(repoRoot, sitemapPath)}`)
}

await main()
