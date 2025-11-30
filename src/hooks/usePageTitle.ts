import { useEffect } from 'react'

interface UsePageTitleOptions {
  title: string
  description?: string
}

/**
 * Хук для управления title страницы и meta тегами
 * Обновляет document.title и опционально meta description
 */
export function usePageTitle({ title, description }: UsePageTitleOptions) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    // Обновляем meta description, если предоставлен
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      
      metaDescription.setAttribute('content', description)
    }

    // Восстанавливаем предыдущий title при размонтировании
    return () => {
      document.title = previousTitle
    }
  }, [title, description])
}

