import { useTranslation } from 'react-i18next'
import type { BlogArticle } from '../data/blogArticles'

export interface TranslatedBlogArticle extends BlogArticle {
  translatedTitle: string
  translatedDescription: string
}

/**
 * Hook to get translated title and description for a blog article.
 * Falls back to original values if translation is not available.
 * 
 * Usage:
 * ```tsx
 * const { getTranslatedArticle } = useTranslatedArticle()
 * const translated = getTranslatedArticle(article)
 * // translated.translatedTitle - translated or original title
 * // translated.translatedDescription - translated or original description
 * ```
 */
export function useTranslatedArticle() {
  const { t } = useTranslation('blog')

  const getTranslatedArticle = (article: BlogArticle): TranslatedBlogArticle => {
    if (!article.slug) {
      return {
        ...article,
        translatedTitle: article.title,
        translatedDescription: article.description,
      }
    }

    const titleKey = `articles.${article.slug}.title`
    const descriptionKey = `articles.${article.slug}.description`
    
    const translatedTitle = t(titleKey, { defaultValue: '' })
    const translatedDescription = t(descriptionKey, { defaultValue: '' })

    return {
      ...article,
      translatedTitle: translatedTitle && translatedTitle !== titleKey ? translatedTitle : article.title,
      translatedDescription: translatedDescription && translatedDescription !== descriptionKey ? translatedDescription : article.description,
    }
  }

  return { getTranslatedArticle }
}

