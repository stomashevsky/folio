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
   * @param path - The path to localize (e.g., "/wallet" or "wallet")
   * @returns The localized path (e.g., "/en/wallet")
   */
  const getLocalizedPath = (path: string): string => {
    // Remove leading slash if present for consistent handling
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    
    // Return the localized path
    return `/${currentLang}/${cleanPath}`.replace(/\/+$/, '') || `/${currentLang}`
  }

  return {
    currentLang,
    getLocalizedPath,
  }
}

