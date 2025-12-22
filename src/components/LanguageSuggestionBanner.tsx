import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../i18n/LanguageProvider'
import { SUPPORTED_LANGUAGES, LANGUAGE_NAMES, type SupportedLanguage } from '../i18n'
import { useLanguageBanner } from '../contexts/LanguageBannerContext'
import xIcon from '../assets/icons/X.svg'

const LANGUAGE_PREFERENCE_KEY = 'folio-language-preference'

// Banner height in pixels (measured from Figma)
// Desktop: h-[68px] as per Figma
// Mobile: py-6 (48px) + text (~20px) + gap (16px) + buttons (36px) = ~120px
export const BANNER_HEIGHT_DESKTOP = 68
export const BANNER_HEIGHT_MOBILE = 120

/**
 * Spacer component that reserves space for the fixed banner.
 * Place this in the document flow to push content down when banner is visible.
 */
export function BannerSpacer() {
  const { isBannerVisible } = useLanguageBanner()
  
  if (!isBannerVisible) {
    return null
  }
  
  return <div className="h-[120px] md:h-[68px]" aria-hidden="true" />
}

/**
 * Banner that suggests switching to the user's browser language
 * if it differs from the current URL language.
 * 
 * Design: https://www.figma.com/design/6jO5aXk21DqMTeNFCAh9rI/Folio-web?node-id=24760-8127
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
      className="fixed top-0 left-0 right-0 z-[80] bg-[#09090b] text-white"
      role="dialog"
      aria-label={t('language_banner.aria_label', 'Language suggestion')}
    >
      {/* Mobile: py-6 (24px), Desktop: py-4 (16px) as per Figma */}
      <div className="mx-auto max-w-[1280px] px-6 py-6 md:py-4">
        {/* Desktop: single row | Mobile: two rows with gap-4 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
          
          {/* Text + Close button row */}
          <div className="flex items-center gap-6 w-full md:flex-1">
            <p className="text-sm leading-5 flex-1">
              {t('language_banner.message', {
                defaultValue: 'Would you like to view this page in {{language}}?',
                language: suggestedName
              })}
            </p>
            
            {/* Close button - visible only on mobile in first row */}
            <button
              onClick={handleClose}
              className="md:hidden flex items-center justify-center size-9 rounded-lg shrink-0"
              aria-label={t('language_banner.close', 'Close')}
            >
              <img src={xIcon} alt="" aria-hidden="true" className="w-5 h-5 opacity-60" style={{ filter: 'invert(1)' }} />
            </button>
          </div>
          
          {/* Buttons row - inline with flex-wrap on both desktop and mobile */}
          <div className="flex flex-row flex-wrap gap-3 items-center w-full md:w-auto shrink-0">
            <button 
              onClick={handleKeep}
              className="h-9 px-4 py-2 text-sm font-medium rounded-full border border-white text-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
            >
              {t('language_banner.keep_current', {
                defaultValue: 'Keep {{language}}',
                language: currentName
              })}
            </button>
            <button 
              onClick={handleSwitch}
              className="h-9 px-4 py-2 text-sm font-medium rounded-full bg-white text-[#0a0a0a] hover:bg-white/90 transition-colors whitespace-nowrap shrink-0 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
            >
              {t('language_banner.switch_to', {
                defaultValue: 'Switch to {{language}}',
                language: suggestedName
              })}
            </button>
            
            {/* Close button - visible only on desktop */}
            <button
              onClick={handleClose}
              className="hidden md:flex items-center justify-center size-9 rounded-lg shrink-0"
              aria-label={t('language_banner.close', 'Close')}
            >
              <img src={xIcon} alt="" aria-hidden="true" className="w-5 h-5 opacity-60" style={{ filter: 'invert(1)' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
