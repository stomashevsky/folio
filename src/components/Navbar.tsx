import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { LogoButton, Button } from './ui'
import menuIcon from '../assets/icons/menu.svg'
import xIcon from '../assets/icons/x.svg'
import { useBodyScrollLock } from './ui/useBodyScrollLock'
import MobileMenu from './navbar/MobileMenu'
import DesktopNav from './navbar/DesktopNav'
import { scrollToTop } from '../utils/scrollToTop'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const isHomePage = location.pathname === '/' || location.pathname === '/folio' || location.pathname === '/folio/'
    if (isHomePage) {
      scrollToTop()
    } else {
      navigate('/')
      // Scroll after a short delay to allow the page to load
      setTimeout(() => {
        scrollToTop()
      }, 100)
    }
  }

  useBodyScrollLock(isMobileMenuOpen)

  useEffect(() => {
    const navbarElement = navbarRef.current
    if (!navbarElement) return

    const handleWheel = (e: WheelEvent) => {
      // Always scroll the page when wheel event occurs over navbar
      // Buttons and links will still be clickable, but wheel will scroll the page
      e.preventDefault()
      e.stopPropagation()
      // Direct scroll manipulation for better compatibility
      document.documentElement.scrollTop += e.deltaY
      document.body.scrollTop += e.deltaY
    }

    // Use capture phase to intercept before it reaches navbar
    navbarElement.addEventListener('wheel', handleWheel, { passive: false, capture: true })

    return () => {
      navbarElement.removeEventListener('wheel', handleWheel, { capture: true } as EventListenerOptions)
    }
  }, [])

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      <div 
        ref={navbarRef}
        className="bg-white fixed top-0 left-0 right-0 shrink-0 w-full z-[70]"
        style={{ 
          overscrollBehavior: 'none',
          touchAction: 'pan-y'
        }}
      >
        <div className="flex flex-col gap-6 lg:gap-0 items-center px-0 py-4 w-full">
          <div className="lg:hidden flex flex-col gap-6 items-start justify-center w-full px-6 py-0 relative shrink-0">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <LogoButton
                size={28}
                aria-label="Go to home"
                onClick={handleLogoClick}
              />

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Toggle menu"}
                className="p-0"
              >
                <img src={isMobileMenuOpen ? xIcon : menuIcon} alt={isMobileMenuOpen ? "Close" : "Menu"} aria-hidden="true" className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <DesktopNav />
        </div>
      </div>
    </>
  )
}

