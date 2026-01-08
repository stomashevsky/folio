import { useState, useEffect } from 'react'
import { Button, LocalizedLink } from './ui'

const COOKIE_CONSENT_KEY = 'folio-cookie-consent'

type ConsentValue = 'accepted' | 'declined' | null

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (savedConsent === 'accepted' || savedConsent === 'declined') {
      setConsent(savedConsent as ConsentValue)
    } else {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setConsent('accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')
    setConsent('declined')
    setIsVisible(false)
  }

  // Don't render if user has already made a choice
  if (consent !== null || !isVisible) {
    return null
  }

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="bg-white border border-[#e5e5e5] rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
          <div className="flex-1 min-w-0">
            <p className="font-medium text-[#0a0a0a] text-base mb-1">
              We use cookies
            </p>
            <p className="text-[#737373] text-sm leading-5">
              We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
              By clicking "Accept all", you consent to our use of cookies. 
              Read our <LocalizedLink to="/privacy" className="underline hover:text-[#0a0a0a] transition-colors">Privacy Policy</LocalizedLink> for more information.
            </p>
          </div>
          <div className="flex gap-3 items-center shrink-0">
            <Button 
              variant="outline" 
              size="md" 
              onClick={handleDecline}
            >
              Decline
            </Button>
            <Button 
              variant="primary" 
              size="md" 
              onClick={handleAccept}
            >
              Accept all
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
