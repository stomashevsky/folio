import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, MenuItem } from '../ui'
import { Logo } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import { scrollToSection } from '../../utils/scrollToSection'
import xIcon from '../../assets/icons/x.svg'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const SOLUTIONS_ITEMS = [
  { label: 'Identity Verification (KYC)', path: '/solutions/identity-verification' },
  { label: 'Business Onboarding (KYB)', path: '/solutions/business-onboarding' },
  { label: 'Age Verification', path: '/solutions/age-verification' },
  { label: 'Ticket Issuance', path: '/solutions/ticket-issuance' },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [showSolutionsSubmenu, setShowSolutionsSubmenu] = useState(false)

  // Reset submenu state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setShowSolutionsSubmenu(false)
    }
  }, [isOpen])

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const handleNavClick = (path: string) => {
    onClose()
    setShowSolutionsSubmenu(false)
    const isCurrentPage = isActive(path)
    if (isCurrentPage && location.pathname === path) {
      scrollToTop()
    } else {
      navigate(path)
      setTimeout(() => {
        scrollToTop()
      }, 100)
    }
  }

  const handleSolutionsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowSolutionsSubmenu(true)
  }

  const handleBackClick = () => {
    setShowSolutionsSubmenu(false)
  }

  const handleClose = () => {
    setShowSolutionsSubmenu(false)
    onClose()
  }

  return (
    <>
      <div
        className={`lg:hidden fixed inset-0 bg-[rgba(10,10,10,0.3)] z-[50] transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
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
          {/* Header */}
          <div className="flex items-center justify-between w-full px-6 py-0 relative shrink-0">
            <Logo size={28} name="Folio Wallet" />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              aria-label="Close menu"
              className="p-0"
            >
              <img src={xIcon} alt="Close" aria-hidden="true" className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-col gap-8 items-start justify-start w-full px-6 py-0 relative shrink-0">
            {!showSolutionsSubmenu ? (
              /* Main Menu */
              <>
                <div className="flex flex-col gap-5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
                  <div className="flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                    <MenuItem
                      active={isActive('/') && location.pathname === '/'}
                      fullWidth
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleNavClick('/')
                      }}
                      className="justify-start text-left"
                      aria-current={isActive('/') && location.pathname === '/' ? 'page' : undefined}
                    >
                      Folio app
                    </MenuItem>
                    <MenuItem
                      active={isActive('/solutions')}
                      fullWidth
                      onClick={handleSolutionsClick}
                      className="justify-start text-left"
                      aria-current={isActive('/solutions') ? 'page' : undefined}
                    >
                      Solutions
                    </MenuItem>
                    <MenuItem
                      active={isActive('/government')}
                      fullWidth
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleNavClick('/government')
                      }}
                      className="justify-start text-left"
                      aria-current={isActive('/government') ? 'page' : undefined}
                    >
                      Government
                    </MenuItem>
                    <MenuItem
                      active={isActive('/blog')}
                      fullWidth
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleNavClick('/blog')
                      }}
                      className="justify-start text-left"
                      aria-current={isActive('/blog') ? 'page' : undefined}
                    >
                      Blog
                    </MenuItem>
                  </div>

                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault()
                      handleClose()
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
              </>
            ) : (
              /* Solutions Submenu */
              <>
                <div className="flex flex-col gap-5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
                  <MenuItem
                    fullWidth
                    onClick={handleBackClick}
                    className="justify-start text-left"
                  >
                    ← Back
                  </MenuItem>
                  
                  <div className="flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                    <h2 className="font-bold text-lg text-[#0a0a0a] px-0 py-2">Solutions</h2>
                    {SOLUTIONS_ITEMS.map((item) => {
                      const active = location.pathname.startsWith(item.path)
                      return (
                        <MenuItem
                          key={item.path}
                          active={active}
                          fullWidth
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleNavClick(item.path)
                          }}
                          className="justify-start text-left"
                          aria-current={active ? 'page' : undefined}
                        >
                          {item.label}
                        </MenuItem>
                      )
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
