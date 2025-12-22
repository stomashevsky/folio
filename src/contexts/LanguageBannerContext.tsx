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
    // Return default values if not within provider
    return { isBannerVisible: false, setBannerVisible: () => {} }
  }
  return context
}

