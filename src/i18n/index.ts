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
import enBlog from '../locales/en/blog.json'
import enArticles from '../locales/en/articles.json'

import ruCommon from '../locales/ru/common.json'
import ruHome from '../locales/ru/home.json'
import ruWallet from '../locales/ru/wallet.json'
import ruPlatform from '../locales/ru/platform.json'
import ruSolutions from '../locales/ru/solutions.json'
import ruGovernment from '../locales/ru/government.json'
import ruPages from '../locales/ru/pages.json'
import ruBlog from '../locales/ru/blog.json'
import ruArticles from '../locales/ru/articles.json'

import esCommon from '../locales/es/common.json'
import esHome from '../locales/es/home.json'
import esWallet from '../locales/es/wallet.json'
import esPlatform from '../locales/es/platform.json'
import esSolutions from '../locales/es/solutions.json'
import esGovernment from '../locales/es/government.json'
import esPages from '../locales/es/pages.json'
import esBlog from '../locales/es/blog.json'
import esArticles from '../locales/es/articles.json'

import jaCommon from '../locales/ja/common.json'
import jaHome from '../locales/ja/home.json'
import jaWallet from '../locales/ja/wallet.json'
import jaPlatform from '../locales/ja/platform.json'
import jaSolutions from '../locales/ja/solutions.json'
import jaGovernment from '../locales/ja/government.json'
import jaPages from '../locales/ja/pages.json'
import jaBlog from '../locales/ja/blog.json'
import jaArticles from '../locales/ja/articles.json'

export const SUPPORTED_LANGUAGES = ['en', 'ru', 'es', 'ja'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]

export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  ja: '日本語',
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
    blog: enBlog,
    articles: enArticles,
  },
  ru: {
    common: ruCommon,
    home: ruHome,
    wallet: ruWallet,
    platform: ruPlatform,
    solutions: ruSolutions,
    government: ruGovernment,
    pages: ruPages,
    blog: ruBlog,
    articles: ruArticles,
  },
  es: {
    common: esCommon,
    home: esHome,
    wallet: esWallet,
    platform: esPlatform,
    solutions: esSolutions,
    government: esGovernment,
    pages: esPages,
    blog: esBlog,
    articles: esArticles,
  },
  ja: {
    common: jaCommon,
    home: jaHome,
    wallet: jaWallet,
    platform: jaPlatform,
    solutions: jaSolutions,
    government: jaGovernment,
    pages: jaPages,
    blog: jaBlog,
    articles: jaArticles,
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
    ns: ['common', 'home', 'wallet', 'platform', 'solutions', 'government', 'pages', 'blog', 'articles'],

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

