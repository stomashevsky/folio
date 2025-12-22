import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../i18n/LanguageProvider'
import { SUPPORTED_LANGUAGES, LANGUAGE_NAMES, type SupportedLanguage } from '../i18n'
import { useLanguageBanner } from '../contexts/LanguageBannerContext'
import xIcon from '../assets/icons/X.svg'

const LANGUAGE_PREFERENCE_KEY = 'folio-language-preference'

/**
 * Spacer component that reserves space for the fixed banner.
 * Place this in the document flow to push content down when banner is visible.
 */
export function BannerSpacer() {
  const { isBannerVisible, bannerHeight } = useLanguageBanner()
  
  if (!isBannerVisible || bannerHeight === 0) {
    return null
  }
  
  return <div style={{ height: bannerHeight }} aria-hidden="true" />
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
  const { setBannerVisible, setBannerHeight } = useLanguageBanner()
  const [isVisible, setIsVisible] = useState(false)
  const [suggestedLanguage, setSuggestedLanguage] = useState<SupportedLanguage | null>(null)
  const bannerRef = useRef<HTMLDivElement>(null)

  // Measure banner height and share via context
  const updateBannerHeight = useCallback(() => {
    if (bannerRef.current && isVisible) {
      const height = bannerRef.current.offsetHeight
      setBannerHeight(height)
    }
  }, [isVisible, setBannerHeight])

  useEffect(() => {
    updateBannerHeight()
    
    // Update on resize
    window.addEventListener('resize', updateBannerHeight)
    return () => window.removeEventListener('resize', updateBannerHeight)
  }, [updateBannerHeight])

  // Additional effect to measure after render
  useEffect(() => {
    if (isVisible) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(updateBannerHeight, 50)
      return () => clearTimeout(timer)
    }
  }, [isVisible, updateBannerHeight])

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
      ref={bannerRef}
      className="fixed top-0 left-0 right-0 z-[80] bg-[#09090b] text-white"
      role="dialog"
      aria-label={t('language_banner.aria_label', 'Language suggestion')}
    >
      {/* Container: max-w-1280, px-6, Mobile: py-6, Desktop: py-4 */}
      <div className="mx-auto max-w-[1280px] px-6 py-6 md:py-4">
        {/* Mobile: column layout with gap-4, Desktop: row layout with items-center */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
          
          {/* Text row with close button (mobile only shows close in this row) */}
          <div className="flex items-start gap-6 w-full md:flex-1 md:items-center">
            <p className="text-base leading-6 flex-1">
              {t('language_banner.message', {
                defaultValue: 'Would you like to view this page in {{language}}?',
                language: suggestedName
              })}
            </p>
            
            {/* Close button - mobile: in text row, aligned to top */}
            <button
              onClick={handleClose}
              className="md:hidden flex items-center justify-center size-9 rounded-md shrink-0 self-start"
              aria-label={t('language_banner.close', 'Close')}
            >
              <img src={xIcon} alt="" aria-hidden="true" className="w-5 h-5 opacity-60" style={{ filter: 'invert(1)' }} />
            </button>
          </div>
          
          {/* Buttons row - flex-wrap for proper wrapping on mobile */}
          <div className="flex flex-wrap gap-3 items-center w-full md:w-auto shrink-0">
            <button 
              onClick={handleKeep}
              className="h-9 px-4 py-2 text-sm font-medium rounded-full border border-white text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {t('language_banner.keep_current', {
                defaultValue: 'Keep {{language}}',
                language: currentName
              })}
            </button>
            <button 
              onClick={handleSwitch}
              className="h-9 px-4 py-2 text-sm font-medium rounded-full bg-white text-[#0a0a0a] hover:bg-white/90 transition-colors whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
            >
              {t('language_banner.switch_to', {
                defaultValue: 'Switch to {{language}}',
                language: suggestedName
              })}
            </button>
            
            {/* Close button - desktop only, after buttons */}
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
