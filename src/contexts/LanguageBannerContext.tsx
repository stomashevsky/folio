import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface LanguageBannerContextType {
  isBannerVisible: boolean
  setBannerVisible: (visible: boolean) => void
}

const LanguageBannerContext = createContext<LanguageBannerContextType | null>(null)

export function LanguageBannerProvider({ children }: { children: ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(false)

  const setBannerVisible = useCallback((visible: boolean) => {
    setIsBannerVisible(visible)
  }, [])

  return (
    <LanguageBannerContext.Provider value={{ isBannerVisible, setBannerVisible }}>
      {children}
    </LanguageBannerContext.Provider>
  )
}

export function useLanguageBanner() {
  const context = useContext(LanguageBannerContext)
  if (!context) {
    // Return default values if not within provider (for pages outside language routes)
    return { isBannerVisible: false, setBannerVisible: () => {} }
  }
  return context
}

// Banner height constant for consistent offset
export const LANGUAGE_BANNER_HEIGHT = 52 // px (mobile may be taller due to wrapping)
export const LANGUAGE_BANNER_HEIGHT_MOBILE = 88 // px (with wrapped content)

