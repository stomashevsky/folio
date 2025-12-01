import { useEffect } from 'react'

interface UsePageTitleOptions {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
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
  ogUrl
}: UsePageTitleOptions) {
  useEffect(() => {
    // Store previous values for restoration
    const previousTitle = document.title
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || null
    
    const previousOgTags: Record<string, string | null> = {}
    const ogProperties = ['og:title', 'og:description', 'og:image', 'og:url']
    ogProperties.forEach(prop => {
      const existingTag = document.querySelector(`meta[property="${prop}"]`)
      previousOgTags[prop] = existingTag?.getAttribute('content') || null
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
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl])
}

