import { useLocation, useNavigate } from 'react-router-dom'
import { LogoButton, Button, MenuItem } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import { scrollToSection } from '../../utils/scrollToSection'
import SolutionsDropdown from './SolutionsDropdown'
import PlatformDropdown from './PlatformDropdown'

export default function DesktopNav() {
  const location = useLocation()
  const navigate = useNavigate()

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

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      // Only scroll if we're exactly on that page
      scrollToTop()
    } else {
      navigate(path)
      // Scroll after a short delay to allow the page to load
      setTimeout(() => {
        scrollToTop()
      }, 100)
    }
  }

  const handleGetAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const isHomePage = location.pathname === '/'
    if (isHomePage) {
      scrollToSection('get-the-app')
    } else {
      navigate('/')
      setTimeout(() => {
        scrollToSection('get-the-app')
      }, 100)
    }
  }

  return (
    <div className="hidden lg:flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-between relative w-full max-w-[1280px] px-6 mx-auto">
        <div className="flex-shrink-0 z-10">
          <LogoButton
            size={28}
            aria-label="Go to home"
            onClick={handleLogoClick}
          />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 items-center">
          <MenuItem onClick={() => handleNavClick('/')}>
            Folio app
          </MenuItem>
          <PlatformDropdown />
          <SolutionsDropdown />
          <MenuItem onClick={() => handleNavClick('/government')}>
            Government
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('/blog')
            }}
          >
            Blog
          </MenuItem>
        </div>

        <div className="flex-shrink-0 z-10">
          <Button
            variant="primary"
            onClick={handleGetAppClick}
          >
            Get the app
          </Button>
        </div>
      </div>
    </div>
  )
}

