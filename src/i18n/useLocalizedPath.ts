import { useParams } from 'react-router-dom'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type SupportedLanguage } from './index'

/**
 * Hook to get the current language from URL and create localized paths
 */
export function useLocalizedPath() {
  const { lang } = useParams<{ lang: string }>()
  
  const currentLang = SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage) 
    ? lang as SupportedLanguage 
    : DEFAULT_LANGUAGE

  /**
   * Converts a path to a localized path with the current language prefix
   * @param path - The path to localize (e.g., "/wallet" or "wallet" or "/blog?category=Research")
   * @returns The localized path with trailing slash (e.g., "/en/wallet/") or without trailing slash if query/hash present (e.g., "/en/blog?category=Research")
   * Note: Hash anchors should be handled separately by components using this function
   */
  const getLocalizedPath = (path: string): string => {
    // Extract query string and hash if present
    const queryIndex = path.indexOf('?')
    const hashIndex = path.indexOf('#')
    
    // Determine where the base path ends
    let basePathEnd = path.length
    if (queryIndex !== -1 && (hashIndex === -1 || queryIndex < hashIndex)) {
      basePathEnd = queryIndex
    } else if (hashIndex !== -1) {
      basePathEnd = hashIndex
    }
    
    // Extract base path, query string, and hash separately
    const basePath = path.slice(0, basePathEnd)
    const queryAndHash = path.slice(basePathEnd)
    
    // Remove leading slash if present for consistent handling
    const cleanPath = basePath.startsWith('/') ? basePath.slice(1) : basePath
    
    // Build localized base path with trailing slash
    let localizedBasePath: string
    if (!cleanPath) {
      localizedBasePath = `/${currentLang}/`
    } else {
      localizedBasePath = `/${currentLang}/${cleanPath}/`
    }
    
    // If there are query parameters or hash, remove trailing slash before appending them
    // This prevents URLs like "/en/blog/?category=Research" (should be "/en/blog?category=Research")
    if (queryAndHash) {
      return `${localizedBasePath.replace(/\/$/, '')}${queryAndHash}`
    }
    
    return localizedBasePath
  }

  return {
    currentLang,
    getLocalizedPath,
  }
}

