import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../i18n/LanguageProvider'
import { SUPPORTED_LANGUAGES, LANGUAGE_NAMES, type SupportedLanguage } from '../i18n'
import { useLanguageBanner } from '../contexts/LanguageBannerContext'
import xIcon from '../assets/icons/X.svg'

const LANGUAGE_PREFERENCE_KEY = 'folio-language-preference'

/**
 * Banner that suggests switching to the user's browser language
 * if it differs from the current URL language
 */
export default function LanguageSuggestionBanner() {
  const { t } = useTranslation('common')
  const { currentLanguage, changeLanguage } = useLanguage()
  const { setBannerVisible } = useLanguageBanner()
  const [isVisible, setIsVisible] = useState(false)
  const [suggestedLanguage, setSuggestedLanguage] = useState<SupportedLanguage | null>(null)

  useEffect(() => {
    // Get browser language (e.g., "en-US" -> "en")
    const browserLang = navigator.language.split('-')[0] as SupportedLanguage
    
    // Check if browser language is supported and different from current
    if (
      browserLang !== currentLanguage &&
      SUPPORTED_LANGUAGES.includes(browserLang)
    ) {
      // Check if user has already dismissed this suggestion
      const savedPreference = localStorage.getItem(LANGUAGE_PREFERENCE_KEY)
      const dismissedKey = `dismissed-${browserLang}-from-${currentLanguage}`
      
      if (savedPreference !== dismissedKey) {
        setSuggestedLanguage(browserLang)
        // Show banner after a short delay for better UX
        const timer = setTimeout(() => {
          setIsVisible(true)
          setBannerVisible(true)
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [currentLanguage, setBannerVisible])

  const handleSwitch = () => {
    if (suggestedLanguage) {
      // Save that user accepted this language
      localStorage.setItem(LANGUAGE_PREFERENCE_KEY, `accepted-${suggestedLanguage}`)
      changeLanguage(suggestedLanguage)
      setIsVisible(false)
      setBannerVisible(false)
    }
  }

  const handleKeep = () => {
    if (suggestedLanguage) {
      // Save that user dismissed this suggestion
      localStorage.setItem(LANGUAGE_PREFERENCE_KEY, `dismissed-${suggestedLanguage}-from-${currentLanguage}`)
      setIsVisible(false)
      setBannerVisible(false)
    }
  }

  const handleClose = () => {
    handleKeep()
  }

  if (!isVisible || !suggestedLanguage) {
    return null
  }

  const suggestedName = LANGUAGE_NAMES[suggestedLanguage]
  const currentName = LANGUAGE_NAMES[currentLanguage]

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[80] bg-[#0a0a0a] text-white"
      role="dialog"
      aria-label={t('language_banner.aria_label', 'Language suggestion')}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-3">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
          <p className="text-sm text-center sm:text-left">
            {t('language_banner.message', {
              defaultValue: 'Would you like to view this page in {{language}}?',
              language: suggestedName
            })}
          </p>
          <div className="flex gap-2 items-center shrink-0">
            <button 
              onClick={handleKeep}
              className="h-9 px-4 py-2 text-sm font-medium rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-colors whitespace-nowrap"
            >
              {t('language_banner.keep_current', {
                defaultValue: 'Keep {{language}}',
                language: currentName
              })}
            </button>
            <button 
              onClick={handleSwitch}
              className="h-9 px-4 py-2 text-sm font-medium rounded-full bg-white text-[#0a0a0a] hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              {t('language_banner.switch_to', {
                defaultValue: 'Switch to {{language}}',
                language: suggestedName
              })}
            </button>
            <button
              onClick={handleClose}
              className="p-1 ml-1 rounded hover:bg-white/10 transition-colors"
              aria-label={t('language_banner.close', 'Close')}
            >
              <img src={xIcon} alt="" aria-hidden="true" className="w-4 h-4 invert" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

