import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import { scrollToSection } from '../../utils/scrollToSection'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (path: string) => {
    onClose()
    const isCurrentPage = isActive(path)
    if (isCurrentPage) {
      scrollToTop()
    } else {
      navigate(path)
      // Scroll after a short delay to allow the page to load
      setTimeout(() => {
        scrollToTop()
      }, 100)
    }
  }

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <div
        className={`lg:hidden fixed inset-0 bg-[rgba(10,10,10,0.3)] z-[50] transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className={`lg:hidden fixed bg-white left-0 right-0 top-[64px] z-[60] w-full transition-transform duration-200 ease-spring-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col gap-8 items-start overflow-hidden px-0 py-4 w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full px-6 py-0 relative shrink-0">
            <div className="flex flex-col gap-5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
              <div className="flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('/')
                  }}
                  className={`justify-start text-left ${isActive('/') && location.pathname === '/' ? 'bg-[#f5f5f5]' : ''}`}
                  aria-current={isActive('/') && location.pathname === '/' ? 'page' : undefined}
                >
                  Personal Use
                </Button>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('/business')
                  }}
                  className={`justify-start text-left ${isActive('/business') ? 'bg-[#f5f5f5]' : ''}`}
                  aria-current={isActive('/business') ? 'page' : undefined}
                >
                  Business
                </Button>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('/government')
                  }}
                  className={`justify-start text-left ${isActive('/government') ? 'bg-[#f5f5f5]' : ''}`}
                  aria-current={isActive('/government') ? 'page' : undefined}
                >
                  Government
                </Button>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('/identity-lab')
                  }}
                  className={`justify-start text-left ${isActive('/identity-lab') ? 'bg-[#f5f5f5]' : ''}`}
                  aria-current={isActive('/identity-lab') ? 'page' : undefined}
                >
                  Identity Lab
                </Button>
              </div>

              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault()
                  onClose()
                  const isHomePage = location.pathname === '/' || location.pathname === '/folio' || location.pathname === '/folio/'
                  if (isHomePage) {
                    scrollToSection('get-the-app')
                  } else {
                    navigate('/')
                    setTimeout(() => {
                      scrollToSection('get-the-app')
                    }, 100)
                  }
                }}
              >
                Get the app
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

