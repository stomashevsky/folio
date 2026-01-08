import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

export const SUPPORTED_LANGUAGES = ['en', 'es', 'ja', 'it', 'fr'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]

export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  en: 'English',
  es: 'Español',
  ja: '日本語',
  it: 'Italiano',
  fr: 'Français',
}

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en'

// Namespaces used in the app
export const NAMESPACES = ['common', 'home', 'wallet', 'platform', 'solutions', 'government', 'pages', 'blog', 'articles'] as const

// Build version for cache-busting (changes on each build)
const BUILD_VERSION = import.meta.env.VITE_BUILD_VERSION || Date.now().toString(36)

// Detect base path for loading translations
const getBasePath = () => {
  if (typeof window === 'undefined') return ''
  const { pathname } = window.location
  if (pathname === '/folio' || pathname.startsWith('/folio/')) {
    return '/folio'
  }
  return ''
}

// Detect language from URL path, accounting for /folio/ base path
const getPathLanguageIndex = () => {
  if (typeof window === 'undefined') return 0
  const { pathname } = window.location
  // On GitHub Pages: /folio/es/wallet → language is at index 1
  // On folio.id: /es/wallet → language is at index 0
  if (pathname === '/folio' || pathname.startsWith('/folio/')) {
    return 1
  }
  return 0
}

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,

    // Default namespace
    defaultNS: 'common',
    ns: NAMESPACES,

    backend: {
      // Cache-busting: append build version to prevent stale translations
      loadPath: () => `${getBasePath()}/locales/{{lng}}/{{ns}}.json?v=${BUILD_VERSION}`,
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      // Detect language from URL path first (e.g., /es/wallet or /folio/es/wallet)
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: getPathLanguageIndex(),
      caches: ['localStorage'],
    },

    react: {
      useSuspense: true,
    },
  })

export default i18n
