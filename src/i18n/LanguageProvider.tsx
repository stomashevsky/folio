import { useEffect, ReactNode } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type SupportedLanguage } from './index'
import { scrollToTop } from '../utils/scrollToTop'

function isValidLanguage(lang: string | undefined): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)
}

/**
 * Redirects root path to the default language
 */
export function LanguageRedirect() {
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  useEffect(() => {
    // Try to detect the user's preferred language
    const browserLang = navigator.language.split('-')[0]
    const savedLang = localStorage.getItem('i18nextLng')

    let targetLang = DEFAULT_LANGUAGE

    if (savedLang && isValidLanguage(savedLang)) {
      targetLang = savedLang
    } else if (isValidLanguage(browserLang)) {
      targetLang = browserLang
    }

    i18n.changeLanguage(targetLang)
    navigate(`/${targetLang}`, { replace: true })
  }, [navigate, i18n])

  return null
}

interface LanguageProviderProps {
  children: ReactNode
}

/**
 * Syncs the language from URL to i18next and handles invalid languages
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!lang) return

    if (isValidLanguage(lang)) {
      // Valid language - sync with i18next
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang)
      }
    } else {
      // Invalid language - only redirect if it looks like a language code (short)
      // Otherwise allow children to render (LegacyRedirect will handle legacy URLs)
      if (lang.length <= 3) {
        const pathWithoutLang = location.pathname.replace(`/${lang}`, '') || '/'
        navigate(`/${DEFAULT_LANGUAGE}${pathWithoutLang}${location.search}${location.hash}`, { replace: true })
      }
    }
  }, [lang, i18n, navigate, location])

  // Don't render children until language is valid, unless it might be a legacy URL
  if (!isValidLanguage(lang) && lang && lang.length <= 3) {
    return null
  }

  return <>{children}</>
}

/**
 * Hook to get the current language and change language function
 */
export function useLanguage() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { lang } = useParams<{ lang: string }>()

  const currentLanguage = (isValidLanguage(lang) ? lang : DEFAULT_LANGUAGE) as SupportedLanguage

  const changeLanguage = (newLang: SupportedLanguage) => {
    if (newLang === currentLanguage) return

    // Replace the language prefix in the current path
    const pathWithoutLang = location.pathname.replace(`/${currentLanguage}`, '') || '/'
    const newPath = `/${newLang}${pathWithoutLang}${location.search}${location.hash}`

    i18n.changeLanguage(newLang)
    navigate(newPath)

    // Instantly scroll to top after language change
    setTimeout(() => {
      scrollToTop()
    }, 0)
  }

  return {
    currentLanguage,
    changeLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
  }
}

