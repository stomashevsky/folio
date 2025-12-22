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
    if (ogUrl) {
      updateMetaTag('og:url', ogUrl)
    }

    // Canonical link
    const finalCanonical = canonicalUrl || ogUrl
    if (finalCanonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
        createdElements.push(canonicalLink)
      }
      canonicalLink.setAttribute('href', finalCanonical)
    }

    // Robots meta
    if (robots) {
      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta')
        robotsMeta.setAttribute('name', 'robots')
        document.head.appendChild(robotsMeta)
        createdElements.push(robotsMeta)
      }
      robotsMeta.setAttribute('content', robots)
    }

    // Hreflang tags for internationalization
    const updateHreflangTags = () => {
      // Remove existing hreflang tags
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => {
        createdElements.push(el as HTMLElement)
      })
      
      // Get current path without language prefix
      const currentPath = window.location.pathname
      const pathParts = currentPath.split('/').filter(Boolean)
      const firstPart = pathParts[0]
      
      // Check if first part is a language code
      const hasLangPrefix = SUPPORTED_LANGUAGES.includes(firstPart as typeof SUPPORTED_LANGUAGES[number])
      const pathWithoutLang = hasLangPrefix 
        ? '/' + pathParts.slice(1).join('/')
        : currentPath
      
      const baseUrl = ogUrl?.replace(/\/(en|es|ja)(\/.*)?$/, '') || 'https://folio.id'
      
      // Create hreflang tags for each supported language
      SUPPORTED_LANGUAGES.forEach(lang => {
        const hreflangLink = document.createElement('link')
        hreflangLink.setAttribute('rel', 'alternate')
        hreflangLink.setAttribute('hreflang', lang)
        hreflangLink.setAttribute('href', `${baseUrl}/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`)
        document.head.appendChild(hreflangLink)
        createdElements.push(hreflangLink)
      })
      
      // Add x-default hreflang (pointing to default language)
      const xDefaultLink = document.createElement('link')
      xDefaultLink.setAttribute('rel', 'alternate')
      xDefaultLink.setAttribute('hreflang', 'x-default')
      xDefaultLink.setAttribute('href', `${baseUrl}/${DEFAULT_LANGUAGE}${pathWithoutLang === '/' ? '' : pathWithoutLang}`)
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
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl, ogType, canonicalUrl, robots])
}

