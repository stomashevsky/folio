import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { LogoButton, Button } from './ui'
import menuIcon from '../assets/icons/Menu.svg'
import xIcon from '../assets/icons/X.svg'
import { useBodyScrollLock } from './ui/useBodyScrollLock'
import MobileMenu from './navbar/MobileMenu'
import DesktopNav from './navbar/DesktopNav'
import { scrollToTop } from '../utils/scrollToTop'
import { useLanguageBanner } from '../contexts/LanguageBannerContext'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { isBannerVisible } = useLanguageBanner()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const isHomePage = location.pathname === '/'
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

  // Navbar position: below banner when visible
  // Mobile banner: ~104px, Desktop banner: 52px
  const topOffset = isBannerVisible 
    ? 'top-[104px] md:top-[52px]' 
    : 'top-0'

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} bannerVisible={isBannerVisible} />

      <div 
        className={`bg-white fixed left-0 right-0 shrink-0 w-full z-[70] transition-[top] duration-200 ${topOffset}`}
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
