import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LogoButton, Button } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'

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
      // Скроллим после небольшой задержки, чтобы страница успела загрузиться
      setTimeout(() => {
        scrollToTop()
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
          <Link to="/">
            <Button
              variant="ghost"
              className={isActive('/') && location.pathname === '/' ? 'bg-[#f5f5f5]' : ''}
            >
              Personal Use
            </Button>
          </Link>
          <Link to="/business">
            <Button
              variant="ghost"
              className={isActive('/business') ? 'bg-[#f5f5f5]' : ''}
            >
              Business
            </Button>
          </Link>
          <Link to="/government">
            <Button
              variant="ghost"
              className={isActive('/government') ? 'bg-[#f5f5f5]' : ''}
            >
              Government
            </Button>
          </Link>
          <Link to="/identity-lab">
            <Button
              variant="ghost"
              className={isActive('/identity-lab') ? 'bg-[#f5f5f5]' : ''}
            >
              Identity Lab
            </Button>
          </Link>
          <Link to="/blog">
            <Button
              variant="ghost"
              className={isActive('/blog') ? 'bg-[#f5f5f5]' : ''}
            >
              Blog
            </Button>
          </Link>
        </div>

        <div className="flex-shrink-0 z-10">
          <Button
            variant="primary"
            href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app
          </Button>
        </div>
      </div>
    </div>
  )
}

