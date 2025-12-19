import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const distDir = path.join(repoRoot, 'dist')
const indexHtmlPath = path.join(distDir, 'index.html')

// Preview server configuration
const PREVIEW_PORT = 4173
const PREVIEW_URL = `http://localhost:${PREVIEW_PORT}`

// OG image base URL - same as in src/configs/ogImages.ts
const OG_IMAGE_BASE_URL = 'https://stomashevsky.github.io/folio/og-images'

// Static page metadata (non-blog pages)
const STATIC_PAGES = [
  {
    path: '/',
    title: 'Folio | Identity infrastructure for everyone',
    description: 'Secure document storage for individuals. Verification platform for businesses. Digital credentials for governments.',
    ogImage: 'folio-app-hero.png',
  },
  {
    path: '/wallet',
    title: 'Folio Wallet | Digital document wallet app',
    description: 'Folio keeps your passports, IDs, tickets and cards in one secure place, beautifully structured and instantly accessible.',
    ogImage: 'folio-app-hero.png',
  },
  {
    path: '/blog',
    title: 'Blog | Folio Wallet',
    description: 'Case studies, product insights and practical guides on travel, documents and digital identity.',
    ogImage: 'folio-app-hero.png',
  },
  {
    path: '/government',
    title: 'Government Solutions | Folio Wallet',
    description: 'Tools for governments to design, test and deploy modern digital credentials. Digital identity aligned with global standards.',
    ogImage: 'government-solutions-hero.png',
  },
  {
    path: '/government/playground',
    title: 'Playground - Issue and Verify Digital IDs | Folio Wallet',
    description: 'A safe sandbox for issuing demo documents and testing EUDI compatible verification flows.',
    ogImage: 'identity-lab-hero.png',
  },
  // Solutions
  {
    path: '/solutions/digital-ticketing',
    title: 'Digital Ticketing | Folio Wallet',
    description: 'Better tickets. No app to build. Give your customers clean digital tickets that are easy to find, easy to scan and work on any modern phone.',
    ogImage: 'ticket-issuance-hero.png',
  },
  {
    path: '/solutions/age-compliance',
    title: 'Age Compliance | Folio Wallet',
    description: 'Age verification service for global compliance. Confirm user age quickly and securely with verification methods that match your risk level.',
    ogImage: 'folio-app-hero.png',
  },
  {
    path: '/solutions/client-onboarding',
    title: 'Client Onboarding | Folio Wallet',
    description: 'Streamlined KYC for regulated businesses. Client verification that is fast, compliant, and audit-ready.',
    ogImage: 'folio-app-hero.png',
  },
  // Platform
  {
    path: '/platform/id-verification',
    title: 'ID Verification | Folio Wallet',
    description: 'Check official documents and confirm identity in more than 200 places around the world.',
    ogImage: 'id-verification-hero.png',
  },
  {
    path: '/platform/document-intelligence',
    title: 'Document Intelligence | Folio Wallet',
    description: 'Transform physical and digital documents into structured, verified data. AI powered document processing and analysis.',
    ogImage: 'document-intelligence-hero.png',
  },
  {
    path: '/platform/liveness-check',
    title: 'Liveness Check | Folio Wallet',
    description: 'Confirm that the person completing verification is physically present and not a spoof.',
    ogImage: 'liveness-check-hero.png',
  },
  {
    path: '/platform/face-match',
    title: 'Face Match | Folio Wallet',
    description: 'Compare a live selfie with the photo on an ID to confirm the person behind the document.',
    ogImage: 'face-match-hero.png',
  },
  {
    path: '/platform/data-source-checks',
    title: 'Data Source Checks | Folio Wallet',
    description: 'Verify identity data against trusted sources to reduce fraud and meet compliance requirements.',
    ogImage: 'data-source-checks-hero.png',
  },
  {
    path: '/platform/phone-and-email-validation',
    title: 'Phone and Email Validation | Folio Wallet',
    description: 'Confirm ownership of phone numbers and email addresses in your verification flow.',
    ogImage: 'phone-email-validation-hero.png',
  },
  {
    path: '/platform/nfc-identity-scan',
    title: 'NFC Identity Scan | Folio Wallet',
    description: 'Read data from the chip embedded in modern passports and ID cards for higher assurance verification.',
    ogImage: 'nfc-identity-scan-hero.png',
  },
  {
    path: '/platform/dynamic-flow',
    title: 'Dynamic Flow | Folio Wallet',
    description: 'Adjust verification steps in real time based on risk signals and user context.',
    ogImage: 'dynamic-flow-hero.png',
  },
  {
    path: '/platform/behavior-insights',
    title: 'Behavior Insights | Folio Wallet',
    description: 'Detect suspicious patterns during verification with device and behavior analysis.',
    ogImage: 'behavior-insights-hero.png',
  },
  {
    path: '/platform/review-workspace',
    title: 'Review Workspace | Folio Wallet',
    description: 'Review and manage verification cases with a streamlined interface for your team.',
    ogImage: 'review-workspace-hero.png',
  },
  // SEO product pages
  {
    path: '/id-wallet-app',
    title: 'ID card wallet app - Digital card holder for driver license | Folio',
    description: 'Folio ID card wallet app allows you to easily manage ID cards and driver licenses. Keep everything safe with end-to-end encryption. Available on iOS and Android.',
    ogImage: 'folio-app-hero.png',
  },
  {
    path: '/card-scanner-app',
    title: 'Card scanner app for iPhone and Android | Folio',
    description: 'Folio card scanner app allows you to easily scan cards and documents. Keep everything safe with end-to-end encryption. Available on iOS and Android.',
    ogImage: 'folio-app-hero.png',
  },
  {
    path: '/loyalty-card-app',
    title: 'Loyalty card app - Membership and reward cards wallet app | Folio',
    description: 'Folio loyalty card app allows you to easily manage loyalty cards and membership cards. Keep everything safe with end-to-end encryption. Available on iOS and Android.',
    ogImage: 'folio-app-hero.png',
  },
  // Legal pages
  {
    path: '/terms',
    title: 'Terms of Use | Folio',
    description: 'Terms and conditions for using Folio Wallet app and services.',
    ogImage: 'folio-app-hero.png',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Folio',
    description: 'How Folio collects, uses, and protects your personal data.',
    ogImage: 'folio-app-hero.png',
  },
  {
    path: '/security',
    title: 'Security | Folio Wallet',
    description: 'Learn how Folio protects your documents with end-to-end encryption, zero-knowledge architecture, and industry-leading security standards.',
    ogImage: 'folio-app-hero.png',
  },
  // About page
  {
    path: '/about',
    title: 'About | Folio',
    description: 'Learn about Folio, the digital identity wallet for secure document storage and verification.',
    ogImage: 'folio-app-hero.png',
  },
  // FAQ page
  {
    path: '/faq',
    title: 'Frequently Asked Questions | Folio',
    description: 'Find answers to common questions about Folio Wallet, digital identity, security, and more.',
    ogImage: 'folio-app-hero.png',
  },
]

// Blog OG image mapping (same as BLOG_OG_IMAGE_BY_SLUG in blogArticles.ts)
const BLOG_OG_IMAGES = {
  '10-travel-hacks-that-actually-work': 'blog-10-travel-hacks-that-actually-work.png',
  '7-useful-apps-for-planning-your-trip': 'blog-7-useful-apps-for-planning-your-trip.png',
  'access-your-digital-wallet-anywhere': 'blog-access-your-digital-wallet-anywhere.png',
  'age-verification-requirements': 'blog-age-verification-requirements.png',
  'albanian-diaspora-voter-registration': 'blog-albanian-diaspora-voter-registration.png',
  'app-in-the-air-alternative': 'blog-app-in-the-air-alternative.png',
  'apple-gift-card-add-to-wallet': 'blog-apple-gift-card-add-to-wallet.png',
  'are-digital-wallets-safe': 'blog-are-digital-wallets-safe.png',
  'best-apple-wallet-alternatives': 'blog-best-apple-wallet-alternatives.png',
  'best-apps-to-plan-travel': 'blog-best-apps-to-plan-travel.png',
  'best-digital-wallet-apps-in-canada': 'blog-best-digital-wallet-apps-in-canada.png',
  'best-document-scanning-apps': 'blog-best-document-scanning-apps.png',
  'best-gift-card-wallet-apps': 'blog-best-gift-card-wallet-apps.png',
  'best-google-wallet-alternatives': 'blog-best-google-wallet-alternatives.png',
  'best-id-scanner-app': 'blog-best-id-scanner-app.png',
  'biometric-data-privacy': 'blog-biometric-data-privacy.png',
  'can-a-digital-wallet-be-hacked': 'blog-can-a-digital-wallet-be-hacked.png',
  'checkmytrip-alternative': 'blog-checkmytrip-alternative.png',
  'client-onboarding-best-practices': 'blog-client-onboarding-best-practices.png',
  'digital-credentials-government': 'blog-digital-credentials-government.png',
  'digital-passport-copies': 'blog-digital-passport-copies.png',
  'digital-ticketing-events': 'blog-digital-ticketing-events.png',
  'digital-wallet-apps-for-every-need': 'blog-digital-wallet-apps-for-every-need.png',
  'document-intelligence': 'blog-document-intelligence.png',
  'end-to-end-encryption': 'blog-end-to-end-encryption.png',
  'eudi-wallet': 'blog-eudi-wallet.png',
  'face-matching-technology': 'blog-face-matching-technology.png',
  'flight-tickets-on-iphone': 'blog-flight-tickets-on-iphone.png',
  'how-to-add-and-store-your-medical-card': 'blog-how-to-add-and-store-your-medical-card.png',
  'how-to-add-gift-cards-to-your-wallet-app': 'blog-how-to-add-gift-cards-to-your-wallet-app.png',
  'how-to-secure-your-wallet-on-iphone': 'blog-how-to-secure-your-wallet-on-iphone.png',
  'how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app': 'blog-how-to-share-travel-plans.png',
  'how-to-store-and-use-loyalty-cards-on-your-iphone': 'blog-how-to-store-and-use-loyalty-cards-on-your-iphone.png',
  'kyc-aml-compliance': 'blog-kyc-aml-compliance.png',
  'managing-family-travel-documents': 'blog-managing-family-travel-documents.png',
  'mobile-drivers-license': 'blog-mobile-drivers-license.png',
  'nfc-identity-verification': 'blog-nfc-identity-verification.png',
  'pass2u-alternative': 'blog-pass2u-alternative.png',
  'regular-vs-digital-wallets': 'blog-regular-vs-digital-wallets.png',
  'the-best-digital-wallets-for-android': 'blog-the-best-digital-wallets-for-android.png',
  'the-best-digital-wallets-for-iphone': 'blog-the-best-digital-wallets-for-iphone.png',
  'the-best-event-ticket-apps': 'blog-best-event-ticket-apps.png',
  'the-ultimate-guide-to-the-safest-digital-wallet-app': 'blog-the-ultimate-guide-to-the-safest-digital-wallet-app.png',
  'tripcase-alternative': 'blog-tripcase-alternative.png',
  'tripit-alternative': 'blog-tripit-alternative.png',
  'tripsy-alternative-travel-app': 'blog-tripsy-alternative.png',
  'wanderlog-alternative': 'blog-wanderlog-alternative.png',
  'what-is-a-digital-drivers-license': 'blog-what-is-a-digital-drivers-license.png',
  'what-is-a-digital-wallet': 'blog-what-is-a-digital-wallet.png',
  'what-is-liveness-detection': 'blog-what-is-liveness-detection.png',
  'you-can-now-store-tickets-in-folio-wallet': 'blog-you-can-now-store-tickets-in-folio-wallet.png',
  'best-identity-verification-platforms': 'blog-best-identity-verification-platforms.png',
  'complete-guide-identity-verification': 'blog-complete-guide-identity-verification.png',
}

/**
 * Collect blog article metadata from blogArticles.ts
 */
async function collectBlogMetadata() {
  const blogDataPath = path.join(repoRoot, 'src', 'data', 'blogArticles.ts')
  const source = await fs.readFile(blogDataPath, 'utf8')
  
  const articles = []
  
  // Collect all slugs first
  const slugRe = /slug:\s*'([^']+)'/g
  const allSlugs = [...source.matchAll(slugRe)].map(m => m[1])
  
  for (const slug of allSlugs) {
    // Find the block containing this slug
    const slugIndex = source.indexOf(`slug: '${slug}'`)
    if (slugIndex === -1) continue
    
    // Find the start of this article object (look for { before slug)
    const blockStart = source.lastIndexOf('{', slugIndex)
    // Find the end of this article object (look for }, after slug)
    const blockEnd = source.indexOf('},', slugIndex)
    
    if (blockStart === -1 || blockEnd === -1) continue
    
    const block = source.slice(blockStart, blockEnd + 1)
    
    // Match title - handle escaped quotes by matching until unescaped closing quote
    const titleMatch = block.match(/title:\s*'((?:[^'\\]|\\.)*)'/s) || block.match(/title:\s*"((?:[^"\\]|\\.)*)"/s)
    // Match description - same approach for escaped quotes
    const descMatch = block.match(/description:\s*'((?:[^'\\]|\\.)*)'/s) || block.match(/description:\s*"((?:[^"\\]|\\.)*)"/s)
    
    // Unescape the matched strings (convert \' to ' and \" to ")
    const unescape = (str) => str ? str.replace(/\\'/g, "'").replace(/\\"/g, '"') : str
    
    const title = titleMatch ? unescape(titleMatch[1]) : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    const description = descMatch ? unescape(descMatch[1]) : 'Read more on the Folio Blog.'
    
    articles.push({
      path: `/blog/${slug}`,
      title: `${title} | Folio Blog`,
      description,
      ogImage: BLOG_OG_IMAGES[slug] || 'folio-app-hero.png',
    })
  }
  
  return articles
}

function toOutputPath(route) {
  if (route === '/' || route === '') return 'index.html'
  const clean = route.startsWith('/') ? route.slice(1) : route
  return path.join(clean, 'index.html')
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
}

/**
 * Start the Vite preview server
 */
function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['vite', 'preview', '--port', PREVIEW_PORT.toString()], {
      cwd: repoRoot,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    })
    
    let started = false
    
    server.stdout.on('data', (data) => {
      const output = data.toString()
      if (output.includes('Local:') && !started) {
        started = true
        // Give it a moment to fully initialize
        setTimeout(() => resolve(server), 1000)
      }
    })
    
    server.stderr.on('data', (data) => {
      console.error('[preview]', data.toString())
    })
    
    server.on('error', reject)
    
    // Timeout after 30 seconds
    setTimeout(() => {
      if (!started) {
        server.kill()
        reject(new Error('Preview server failed to start within 30 seconds'))
      }
    }, 30000)
  })
}

/**
 * Render a page using Puppeteer and return the HTML
 */
async function renderPageWithPuppeteer(browser, route, metadata) {
  const page = await browser.newPage()
  
  try {
    // Navigate to the page
    const url = `${PREVIEW_URL}${route}`
    await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    })
    
    // Wait for React to render (look for content in the root div)
    await page.waitForSelector('#root > *', { timeout: 10000 })
    
    // Additional wait for dynamic content
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)))
    
    // Get the rendered HTML
    let html = await page.content()
    
    // Update meta tags with correct values (Puppeteer might have different runtime values)
    const ogImageUrl = `${OG_IMAGE_BASE_URL}/${metadata.ogImage}`
    
    // Ensure correct title
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeHtml(metadata.title)}</title>`
    )
    
    // Ensure correct meta description
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(metadata.description)}" />`
    )
    
    // Ensure correct OG tags
    html = html.replace(
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`
    )
    html = html.replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`
    )
    html = html.replace(
      /<meta property="og:image" content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${ogImageUrl}" />`
    )
    
    // Ensure correct Twitter tags
    html = html.replace(
      /<meta property="twitter:title" content="[^"]*"\s*\/?>/,
      `<meta property="twitter:title" content="${escapeHtml(metadata.title)}" />`
    )
    html = html.replace(
      /<meta property="twitter:description" content="[^"]*"\s*\/?>/,
      `<meta property="twitter:description" content="${escapeHtml(metadata.description)}" />`
    )
    html = html.replace(
      /<meta property="twitter:image" content="[^"]*"\s*\/?>/,
      `<meta property="twitter:image" content="${ogImageUrl}" />`
    )
    
    // Remove Vite-specific scripts that might interfere
    html = html.replace(/<script type="module"[^>]*@vite[^<]*<\/script>/g, '')
    
    return html
  } finally {
    await page.close()
  }
}

/**
 * Fix asset paths for nested routes
 */
function fixAssetPaths(html, route) {
  const depth = route.split('/').filter(Boolean).length
  if (depth === 0) return html
  
  const prefix = '../'.repeat(depth)
  
  // Fix relative paths that start with ./
  html = html.replace(/href="\.\/assets\//g, `href="${prefix}assets/`)
  html = html.replace(/src="\.\/assets\//g, `src="${prefix}assets/`)
  html = html.replace(/href="\.\/favicon\.svg"/g, `href="${prefix}favicon.svg"`)
  html = html.replace(/href="\.\/site\.webmanifest"/g, `href="${prefix}site.webmanifest"`)
  
  // Fix paths without ./
  html = html.replace(/href="assets\//g, `href="${prefix}assets/`)
  html = html.replace(/src="assets\//g, `src="${prefix}assets/`)
  html = html.replace(/href="favicon\.svg"/g, `href="${prefix}favicon.svg"`)
  html = html.replace(/href="site\.webmanifest"/g, `href="${prefix}site.webmanifest"`)
  
  return html
}

async function main() {
  console.log('[prerender] Starting full HTML pre-rendering with Puppeteer')
  
  // Collect all routes and their metadata
  const blogMetadata = await collectBlogMetadata()
  const allRoutes = [...STATIC_PAGES, ...blogMetadata]
  
  console.log(`[prerender] Found ${allRoutes.length} pages to render`)
  
  // Start preview server
  console.log('[prerender] Starting preview server...')
  let previewServer
  try {
    previewServer = await startPreviewServer()
    console.log('[prerender] Preview server started')
  } catch (error) {
    console.error('[prerender] Failed to start preview server:', error.message)
    process.exitCode = 1
    return
  }
  
  // Launch Puppeteer
  console.log('[prerender] Launching browser...')
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  
  let generated = 0
  let failed = 0
  
  try {
    for (const metadata of allRoutes) {
      try {
        const route = metadata.path
        const outRel = toOutputPath(route)
        const outAbs = path.join(distDir, outRel)
        
        // Render the page
        let html = await renderPageWithPuppeteer(browser, route, metadata)
        
        // Fix asset paths for nested routes
        if (route !== '/') {
          html = fixAssetPaths(html, route)
        }
        
        // Ensure directory exists
        await ensureDir(outAbs)
        
        // Write the file
        await fs.writeFile(outAbs, html, 'utf8')
        console.log(`[prerender] OK  ${route} -> ${outRel}`)
        generated++
      } catch (e) {
        console.error(`[prerender] FAIL ${metadata.path}:`, e.message)
        failed++
      }
    }
  } finally {
    // Cleanup
    await browser.close()
    previewServer.kill()
  }
  
  console.log(`[prerender] Done: ${generated} generated, ${failed} failed`)
  
  if (failed > 0) {
    process.exitCode = 1
  }
}

await main()
