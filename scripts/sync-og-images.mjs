import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const pagesDir = path.join(repoRoot, 'src', 'pages')
const sourceImagesDir = path.join(repoRoot, 'src', 'assets', 'images')
const ogImagesDir = path.join(repoRoot, 'public', 'og-images')

const OG_IMAGE_RE = /ogImage:\s*['"]https:\/\/folio\.id\/og-images\/([^'"]+)['"]/g

async function* walkFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walkFiles(fullPath)
      continue
    }
    if (entry.isFile()) {
      yield fullPath
    }
  }
}

async function collectOgImageFilenames() {
  const filenames = new Set()

  for await (const filePath of walkFiles(pagesDir)) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) continue
    const content = await fs.readFile(filePath, 'utf8')

    let match = OG_IMAGE_RE.exec(content)
    while (match) {
      filenames.add(match[1])
      match = OG_IMAGE_RE.exec(content)
    }
  }

  return [...filenames].sort()
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  const ogFiles = await collectOgImageFilenames()
  if (ogFiles.length === 0) {
    console.error(`[og:sync] No ogImage entries found in ${pagesDir}`)
    process.exitCode = 1
    return
  }

  await fs.mkdir(ogImagesDir, { recursive: true })

  const missing = []
  let copied = 0

  for (const filename of ogFiles) {
    const srcPath = path.join(sourceImagesDir, filename)
    const destPath = path.join(ogImagesDir, filename)

    if (!(await fileExists(srcPath))) {
      missing.push(filename)
      continue
    }

    await fs.copyFile(srcPath, destPath)
    copied += 1
  }

  if (missing.length > 0) {
    console.error(
      `[og:sync] Missing source files in src/assets/images:\n${missing.map((f) => `- ${f}`).join('\n')}`,
    )
    process.exitCode = 1
    return
  }

  console.log(`[og:sync] Synced ${copied} file(s) to public/og-images`)
}

await main()

