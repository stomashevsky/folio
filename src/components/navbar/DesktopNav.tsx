import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LogoButton, Button, MenuItem } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import { scrollToSection } from '../../utils/scrollToSection'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'
import SolutionsDropdown from './SolutionsDropdown'
import PlatformDropdown from './PlatformDropdown'

export default function DesktopNav() {
  const { t } = useTranslation('common')
  const location = useLocation()
  const navigate = useNavigate()
  const { getLocalizedPath, currentLang } = useLocalizedPath()

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const homePath = getLocalizedPath('/')
    const isHomePage = location.pathname === homePath || location.pathname === `/${currentLang}`
    if (isHomePage) {
      scrollToTop()
    } else {
      navigate(homePath)
      // Scroll after a short delay to allow the page to load
      setTimeout(() => {
        scrollToTop()
      }, 100)
    }
  }

  const handleNavClick = (path: string) => {
    const localizedPath = getLocalizedPath(path)
    if (location.pathname === localizedPath) {
      // Only scroll if we're exactly on that page
      scrollToTop()
    } else {
      navigate(localizedPath)
      // Scroll after a short delay to allow the page to load
      setTimeout(() => {
        scrollToTop()
      }, 100)
    }
  }

  const handleGetAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const walletPath = getLocalizedPath('/wallet')
    const isWalletPage = location.pathname === walletPath
    if (isWalletPage) {
      scrollToSection('get-the-app')
    } else {
      navigate(walletPath)
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
          <MenuItem onClick={() => handleNavClick('/wallet')}>
            {t('footer.folioApp')}
          </MenuItem>
          <PlatformDropdown />
          <SolutionsDropdown />
          <MenuItem onClick={() => handleNavClick('/government')}>
            {t('footer.government')}
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('/blog')
            }}
          >
            {t('footer.blog')}
          </MenuItem>
        </div>

        <div className="flex-shrink-0 z-10">
          <Button
            variant="primary"
            onClick={handleGetAppClick}
          >
            {t('footer.getTheApp')}
          </Button>
        </div>
      </div>
    </div>
  )
}

