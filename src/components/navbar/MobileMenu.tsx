import { useNavigate, useLocation } from 'react-router-dom'
import { LogoButton, Button } from '../ui'
import xIcon from '../../assets/icons/x.svg'
import { scrollToTop } from '../../utils/scrollToTop'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (path: string) => {
    onClose()
    navigate(path)
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="lg:hidden fixed inset-0 bg-[rgba(10,10,10,0.3)] z-[3]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="lg:hidden fixed bg-white border-b border-[#e5e5e5] border-solid left-0 right-0 top-0 z-[4] w-full">
        <div className="flex flex-col gap-8 items-start overflow-hidden px-0 py-4 w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full px-6 py-0 relative shrink-0">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <LogoButton
                size={28}
                aria-label="Go to home"
                onClick={(e) => {
                  e.preventDefault()
                  onClose()
                  const isHomePage = location.pathname === '/' || location.pathname === '/folio' || location.pathname === '/folio/'
                  if (isHomePage) {
                    scrollToTop()
                  } else {
                    navigate('/')
                    setTimeout(() => {
                      scrollToTop()
                    }, 100)
                  }
                }}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close menu"
                className="p-0"
              >
                <img src={xIcon} alt="Close" className="w-5 h-5" />
              </Button>
            </div>

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
                  className="justify-start text-left"
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
                  className="justify-start text-left"
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
                  className="justify-start text-left"
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
                  className="justify-start text-left"
                >
                  Identity Lab
                </Button>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('/blog')
                  }}
                  className="justify-start text-left"
                >
                  Blog
                </Button>
              </div>

              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault()
                  onClose()
                  window.open(
                    'https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717',
                    '_blank',
                    'noopener,noreferrer'
                  )
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

