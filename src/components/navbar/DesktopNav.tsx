import { useLocation, useNavigate } from 'react-router-dom'
import { LogoButton, Button } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import { scrollToSection } from '../../utils/scrollToSection'

export default function DesktopNav() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
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

  const handleNavClick = (path: string) => {
    const isCurrentPage = isActive(path)
    if (isCurrentPage && location.pathname === path) {
      // Only scroll if we're exactly on that page, not on a sub-page
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
    const isHomePage = location.pathname === '/' || location.pathname === '/folio' || location.pathname === '/folio/'
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
          <Button
            variant={isActive('/') && location.pathname === '/' ? 'secondary' : 'ghost'}
            onClick={() => handleNavClick('/')}
            aria-current={isActive('/') && location.pathname === '/' ? 'page' : undefined}
          >
            Personal Use
          </Button>
          <Button
            variant={isActive('/business') ? 'secondary' : 'ghost'}
            onClick={() => handleNavClick('/business')}
            aria-current={isActive('/business') ? 'page' : undefined}
          >
            Business
          </Button>
          <Button
            variant={isActive('/government') ? 'secondary' : 'ghost'}
            onClick={() => handleNavClick('/government')}
            aria-current={isActive('/government') ? 'page' : undefined}
          >
            Government
          </Button>
          <Button
            variant={isActive('/identity-lab') ? 'secondary' : 'ghost'}
            onClick={() => handleNavClick('/identity-lab')}
            aria-current={isActive('/identity-lab') ? 'page' : undefined}
          >
            Identity Lab
          </Button>
          <Button
            variant={isActive('/blog') ? 'secondary' : 'ghost'}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('/blog')
            }}
            aria-current={isActive('/blog') ? 'page' : undefined}
          >
            Blog
          </Button>
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

