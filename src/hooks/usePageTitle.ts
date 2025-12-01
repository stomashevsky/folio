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
    const previousTitle = document.title
    document.title = title

    // Update meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      
      metaDescription.setAttribute('content', description)
    }

    // Update Open Graph tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`)
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('property', property)
        document.head.appendChild(metaTag)
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

    // Restore previous title on unmount
    return () => {
      document.title = previousTitle
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl])
}

