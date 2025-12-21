import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enCommon from '../locales/en/common.json'
import enHome from '../locales/en/home.json'
import enWallet from '../locales/en/wallet.json'
import enPlatform from '../locales/en/platform.json'
import enSolutions from '../locales/en/solutions.json'
import enGovernment from '../locales/en/government.json'
import enPages from '../locales/en/pages.json'
import ruCommon from '../locales/ru/common.json'
import ruHome from '../locales/ru/home.json'
import ruWallet from '../locales/ru/wallet.json'
import ruPlatform from '../locales/ru/platform.json'
import ruSolutions from '../locales/ru/solutions.json'
import ruGovernment from '../locales/ru/government.json'
import ruPages from '../locales/ru/pages.json'

export const SUPPORTED_LANGUAGES = ['en', 'ru'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]

export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  en: 'English',
  ru: 'Русский',
}

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en'

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    wallet: enWallet,
    platform: enPlatform,
    solutions: enSolutions,
    government: enGovernment,
    pages: enPages,
  },
  ru: {
    common: ruCommon,
    home: ruHome,
    wallet: ruWallet,
    platform: ruPlatform,
    solutions: ruSolutions,
    government: ruGovernment,
    pages: ruPages,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    
    // Default namespace
    defaultNS: 'common',
    ns: ['common', 'home', 'wallet', 'platform', 'solutions', 'government', 'pages'],
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    detection: {
      // Detect language from URL path first (e.g., /ru/wallet)
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    
    react: {
      useSuspense: false,
    },
  })

export default i18n

