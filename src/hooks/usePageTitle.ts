import { useEffect } from 'react'

interface UsePageTitleOptions {
  title: string
  description?: string
}

/**
 * Hook for managing page title and meta tags
 * Updates document.title and optionally meta description
 */
export function usePageTitle({ title, description }: UsePageTitleOptions) {
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

    // Restore previous title on unmount
    return () => {
      document.title = previousTitle
    }
  }, [title, description])
}

