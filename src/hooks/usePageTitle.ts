import { useEffect } from 'react'
// useParams removed - not needed after localization refactor
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../i18n'

interface UsePageTitleOptions {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogType?: 'website' | 'article'
  canonicalUrl?: string
  robots?: string
}

/**
 * Hook for managing page title and meta tags
 * Updates document.title, meta description, and Open Graph tags
 * Properly cleans up created elements to prevent memory leaks
 */
export function usePageTitle({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType,
  canonicalUrl,
  robots,
}: UsePageTitleOptions) {
  useEffect(() => {
    // Store previous values for restoration
    const previousTitle = document.title
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || null
    const previousCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || null
    const previousRobots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || null

    const previousOgTags: Record<string, string | null> = {}
    const ogProperties = ['og:type', 'og:title', 'og:description', 'og:image', 'og:url']
    ogProperties.forEach(prop => {
      const existingTag = document.querySelector(`meta[property="${prop}"]`)
      previousOgTags[prop] = existingTag?.getAttribute('content') || null
    })

    const previousTwitterTags: Record<string, string | null> = {}
    const twitterProperties = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:url']
    twitterProperties.forEach(prop => {
      const existingTag =
        (document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null) ||
        (document.querySelector(`meta[name="${prop}"]`) as HTMLMetaElement | null)
      previousTwitterTags[prop] = existingTag?.getAttribute('content') || null
    })

    // Track created elements for cleanup
    const createdElements: HTMLElement[] = []

    // Update title
    document.title = title

    // Update meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null

      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
        createdElements.push(metaDescription)
      }

      metaDescription.setAttribute('content', description)
    }

    // Update Open Graph tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('property', property)
        document.head.appendChild(metaTag)
        createdElements.push(metaTag)
      }
      metaTag.setAttribute('content', content)
    }

    if (ogType) {
      updateMetaTag('og:type', ogType)
    }
    if (ogTitle) {
      updateMetaTag('og:title', ogTitle)
    }
    if (ogDescription) {
      updateMetaTag('og:description', ogDescription)
    }
    if (ogImage) {
      updateMetaTag('og:image', ogImage)
    }
    // Normalize URL to include trailing slash for non-root paths
    // This matches the actual URLs on GitHub Pages/CloudFront which add trailing slash
    const normalizeCanonicalUrl = (url: string): string => {
      // If URL doesn't end with /, add trailing slash
      // This ensures canonical URLs match actual page URLs (which have trailing slash)
      if (!url.endsWith('/')) {
        return `${url}/`
      }
      return url
    }
    
    if (ogUrl) {
      // Normalize og:url to include trailing slash for consistency
      const normalizedOgUrl = normalizeCanonicalUrl(ogUrl)
      updateMetaTag('og:url', normalizedOgUrl)
    }

    // Canonical link
    
    const finalCanonical = canonicalUrl || ogUrl
    if (finalCanonical) {
      const normalizedCanonical = normalizeCanonicalUrl(finalCanonical)
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
        createdElements.push(canonicalLink)
      }
      canonicalLink.setAttribute('href', normalizedCanonical)
    }

    // Robots meta
    // Add noindex, nofollow for GitHub Pages to prevent indexing of staging version
    const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io')
    const finalRobots = robots || (isGitHubPages ? 'noindex, nofollow' : undefined)
    
    if (finalRobots) {
      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta')
        robotsMeta.setAttribute('name', 'robots')
        document.head.appendChild(robotsMeta)
        createdElements.push(robotsMeta)
      }
      robotsMeta.setAttribute('content', finalRobots)
    }

    // Hreflang tags for internationalization
    const updateHreflangTags = () => {
      // Remove existing hreflang tags
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => {
        el.remove()
      })

      // Get current path, stripping /folio/ base path if present (GitHub Pages)
      let currentPath = window.location.pathname
      if (currentPath.startsWith('/folio/')) {
        currentPath = currentPath.slice(6) // Remove '/folio' prefix, keep leading slash
      } else if (currentPath === '/folio') {
        currentPath = '/'
      }

      const pathParts = currentPath.split('/').filter(Boolean)
      const firstPart = pathParts[0]

      // Check if first part is a language code
      const hasLangPrefix = SUPPORTED_LANGUAGES.includes(firstPart as typeof SUPPORTED_LANGUAGES[number])
      let pathWithoutLang = hasLangPrefix
        ? '/' + pathParts.slice(1).join('/')
        : currentPath

      const baseUrl = 'https://folio.id'

      // Create hreflang tags for each supported language
      // All URLs should have trailing slash to match canonical URLs and actual page URLs
      SUPPORTED_LANGUAGES.forEach(lang => {
        const hreflangLink = document.createElement('link')
        hreflangLink.setAttribute('rel', 'alternate')
        hreflangLink.setAttribute('hreflang', lang)
        const href = pathWithoutLang === '/' 
          ? `${baseUrl}/${lang}/`
          : `${baseUrl}/${lang}${pathWithoutLang}`
        // Normalize hreflang URL to include trailing slash for consistency with canonical URLs
        const normalizedHref = normalizeCanonicalUrl(href)
        hreflangLink.setAttribute('href', normalizedHref)
        document.head.appendChild(hreflangLink)
        createdElements.push(hreflangLink)
      })

      // Add x-default hreflang (pointing to default language)
      const xDefaultLink = document.createElement('link')
      xDefaultLink.setAttribute('rel', 'alternate')
      xDefaultLink.setAttribute('hreflang', 'x-default')
      const defaultHref = pathWithoutLang === '/'
        ? `${baseUrl}/${DEFAULT_LANGUAGE}/`
        : `${baseUrl}/${DEFAULT_LANGUAGE}${pathWithoutLang}`
      // Normalize x-default URL to include trailing slash for consistency
      const normalizedDefaultHref = normalizeCanonicalUrl(defaultHref)
      xDefaultLink.setAttribute('href', normalizedDefaultHref)
      document.head.appendChild(xDefaultLink)
      createdElements.push(xDefaultLink)
    }

    updateHreflangTags()

    // Twitter tags (use property if present, otherwise create property tags to match index.html)
    const updateTwitterTag = (key: string, content: string) => {
      let metaTag =
        (document.querySelector(`meta[property="${key}"]`) as HTMLMetaElement | null) ||
        (document.querySelector(`meta[name="${key}"]`) as HTMLMetaElement | null)

      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('property', key)
        document.head.appendChild(metaTag)
        createdElements.push(metaTag)
      }
      metaTag.setAttribute('content', content)
    }

    const twitterTitle = ogTitle || title
    const twitterDescription = ogDescription || description
    const twitterImage = ogImage
    const twitterUrl = ogUrl

    updateTwitterTag('twitter:card', twitterImage ? 'summary_large_image' : 'summary')
    updateTwitterTag('twitter:title', twitterTitle)
    if (twitterDescription) {
      updateTwitterTag('twitter:description', twitterDescription)
    }
    if (twitterImage) {
      updateTwitterTag('twitter:image', twitterImage)
    }
    if (twitterUrl) {
      updateTwitterTag('twitter:url', twitterUrl)
    }

    // Cleanup function: restore previous values and remove created elements
    return () => {
      // Restore previous title
      document.title = previousTitle

      // Restore or remove description meta tag
      const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (metaDescription) {
        if (previousDescription !== null) {
          metaDescription.setAttribute('content', previousDescription)
        } else if (createdElements.includes(metaDescription)) {
          metaDescription.remove()
        }
      }

      // Restore or remove Open Graph tags
      ogProperties.forEach(property => {
        const metaTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
        if (metaTag) {
          const previousValue = previousOgTags[property]
          if (previousValue !== null) {
            metaTag.setAttribute('content', previousValue)
          } else if (createdElements.includes(metaTag)) {
            metaTag.remove()
          }
        }
      })

      // Restore or remove canonical link
      const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (canonicalLink) {
        if (previousCanonical !== null) {
          canonicalLink.setAttribute('href', previousCanonical)
        } else if (createdElements.includes(canonicalLink)) {
          canonicalLink.remove()
        }
      }

      // Restore or remove robots meta
      const robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
      if (robotsMeta) {
        if (previousRobots !== null) {
          robotsMeta.setAttribute('content', previousRobots)
        } else if (createdElements.includes(robotsMeta)) {
          robotsMeta.remove()
        }
      }

      // Restore or remove Twitter tags
      twitterProperties.forEach(property => {
        const metaTag =
          (document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null) ||
          (document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement | null)

        if (metaTag) {
          const previousValue = previousTwitterTags[property]
          if (previousValue !== null) {
            metaTag.setAttribute('content', previousValue)
          } else if (createdElements.includes(metaTag)) {
            metaTag.remove()
          }
        }
      })

      // Remove hreflang tags created by this component
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => {
        if (createdElements.includes(el as HTMLElement)) {
          el.remove()
        }
      })
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl, ogType, canonicalUrl, robots])
}

