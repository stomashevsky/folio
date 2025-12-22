import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface LanguageBannerContextType {
  isBannerVisible: boolean
  setBannerVisible: (visible: boolean) => void
  bannerHeight: number
  setBannerHeight: (height: number) => void
}

const LanguageBannerContext = createContext<LanguageBannerContextType | null>(null)

export function LanguageBannerProvider({ children }: { children: ReactNode }) {
  const [isBannerVisible, setIsBannerVisible] = useState(false)
  const [bannerHeight, setBannerHeightState] = useState(0)

  const setBannerVisible = useCallback((visible: boolean) => {
    setIsBannerVisible(visible)
    if (!visible) {
      setBannerHeightState(0)
    }
  }, [])

  const setBannerHeight = useCallback((height: number) => {
    setBannerHeightState(height)
  }, [])

  return (
    <LanguageBannerContext.Provider value={{ isBannerVisible, setBannerVisible, bannerHeight, setBannerHeight }}>
      {children}
    </LanguageBannerContext.Provider>
  )
}

export function useLanguageBanner() {
  const context = useContext(LanguageBannerContext)
  if (!context) {
    // Return default values if not within provider
    return { 
      isBannerVisible: false, 
      setBannerVisible: () => {}, 
      bannerHeight: 0, 
      setBannerHeight: () => {} 
    }
  }
  return context
}
