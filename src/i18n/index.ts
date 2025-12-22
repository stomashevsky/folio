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

import itCommon from '../locales/it/common.json'
import itHome from '../locales/it/home.json'
import itWallet from '../locales/it/wallet.json'
import itPlatform from '../locales/it/platform.json'
import itSolutions from '../locales/it/solutions.json'
import itGovernment from '../locales/it/government.json'
import itPages from '../locales/it/pages.json'
import itBlog from '../locales/it/blog.json'
import itArticles from '../locales/it/articles.json'

import frCommon from '../locales/fr/common.json'
import frHome from '../locales/fr/home.json'
import frWallet from '../locales/fr/wallet.json'
import frPlatform from '../locales/fr/platform.json'
import frSolutions from '../locales/fr/solutions.json'
import frGovernment from '../locales/fr/government.json'
import frPages from '../locales/fr/pages.json'
import frBlog from '../locales/fr/blog.json'
import frArticles from '../locales/fr/articles.json'

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
  it: {
    common: itCommon,
    home: itHome,
    wallet: itWallet,
    platform: itPlatform,
    solutions: itSolutions,
    government: itGovernment,
    pages: itPages,
    blog: itBlog,
    articles: itArticles,
  },
  fr: {
    common: frCommon,
    home: frHome,
    wallet: frWallet,
    platform: frPlatform,
    solutions: frSolutions,
    government: frGovernment,
    pages: frPages,
    blog: frBlog,
    articles: frArticles,
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
      // Detect language from URL path first (e.g., /es/wallet)
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },

    react: {
      useSuspense: false,
    },
  })

export default i18n

