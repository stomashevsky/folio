import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../../i18n/LanguageProvider'
import { LANGUAGE_NAMES, type SupportedLanguage } from '../../i18n'
import globeIcon from '../../assets/icons/Globe.svg'
import chevronDownIcon from '../../assets/icons/ChevronDown.svg'

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleLanguageSelect = (lang: SupportedLanguage) => {
    changeLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#e5e5e5] hover:border-[#d4d4d4] hover:bg-[#e5e5e5] transition-colors text-sm font-medium text-[#0a0a0a]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <img src={globeIcon} alt="" aria-hidden="true" className="w-4 h-4 opacity-60" />
        <span>{LANGUAGE_NAMES[currentLanguage]}</span>
        <img 
          src={chevronDownIcon} 
          alt="" 
          aria-hidden="true" 
          className={`w-4 h-4 opacity-60 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          role="listbox"
          aria-label="Available languages"
          className="absolute bottom-full right-0 mb-2 min-w-[160px] bg-white border border-[#e5e5e5] rounded-lg shadow-lg py-1 z-50"
        >
          {supportedLanguages.map((lang) => (
            <button
              key={lang}
              role="option"
              aria-selected={lang === currentLanguage}
              onClick={() => handleLanguageSelect(lang)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                lang === currentLanguage
                  ? 'bg-[#f5f5f5] text-[#0a0a0a] font-medium'
                  : 'text-[#525252] hover:bg-[#e5e5e5] hover:text-[#171717]'
              }`}
            >
              {LANGUAGE_NAMES[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

