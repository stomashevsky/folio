import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, MenuItem, DropdownMenuItem } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import { scrollToSection } from '../../utils/scrollToSection'

// Icons
import idCardIcon from '../../assets/icons/id-card.svg'
import sparklesIcon from '../../assets/icons/Sparkles.svg'
import cameraIcon from '../../assets/icons/camera.svg'
import scanFaceIcon from '../../assets/icons/ScanFace.svg'
import databaseIcon from '../../assets/icons/Database.svg'
import messageSquareMoreIcon from '../../assets/icons/MessageSquareMore.svg'
import nfcIcon from '../../assets/icons/Nfc.svg'
import gitForkIcon from '../../assets/icons/GitFork.svg'
import ageIcon from '../../assets/icons/Age.svg'
import ticketIcon from '../../assets/icons/ticket.svg'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const SOLUTIONS_ITEMS = [
  {
    label: 'Age compliance',
    path: '/solutions/age-compliance',
    icon: ageIcon,
    description: 'Ensure users meet age requirements for restricted products or services.'
  },
  {
    label: 'Digital ticketing',
    path: '/solutions/digital-ticketing',
    icon: ticketIcon,
    description: 'Create, manage, and validate digital tickets with built-in fraud controls.'
  },
]

const PLATFORM_ITEMS = [
  {
    label: 'ID verification',
    path: '/platform/id-verification',
    icon: idCardIcon,
    description: 'Verify passports, ID cards, and other official documents.'
  },
  {
    label: 'Document intelligence',
    path: '/platform/document-intelligence',
    icon: sparklesIcon,
    description: 'Extract and analyze data from submitted documents.'
  },
  {
    label: 'Liveness check',
    path: '/platform/liveness-check',
    icon: cameraIcon,
    description: 'Confirm that the user is physically present.'
  },
  {
    label: 'Face match',
    path: '/platform/face-match',
    icon: scanFaceIcon,
    description: 'Compare a selfie to an official photo to confirm identity.'
  },
  {
    label: 'Data source checks',
    path: '/platform/data-source-checks',
    icon: databaseIcon,
    description: 'Validate user information against trusted databases.'
  },
  {
    label: 'Phone and email validation',
    path: '/platform/phone-and-email-validation',
    icon: messageSquareMoreIcon,
    description: 'Confirm ownership and detect risky contact details.'
  },
  {
    label: 'NFC identity scan',
    path: '/platform/nfc-identity-scan',
    icon: nfcIcon,
    description: 'Read secure chip data from compatible IDs and passports.'
  },
  {
    label: 'Dynamic Flow',
    path: '/platform/dynamic-flow',
    icon: gitForkIcon,
    description: 'Coordinate identity checks with flexible logic.'
  },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [showSolutionsSubmenu, setShowSolutionsSubmenu] = useState(false)
  const [showPlatformSubmenu, setShowPlatformSubmenu] = useState(false)

  // Reset submenu state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setShowSolutionsSubmenu(false)
      setShowPlatformSubmenu(false)
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
    setShowPlatformSubmenu(false)
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

  const handlePlatformClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowPlatformSubmenu(true)
  }

  const handleBackClick = () => {
    setShowSolutionsSubmenu(false)
    setShowPlatformSubmenu(false)
  }

  const handleClose = () => {
    setShowSolutionsSubmenu(false)
    setShowPlatformSubmenu(false)
    onClose()
  }

  return (
    <>
      <div
        className={`lg:hidden fixed inset-0 bg-[rgba(10,10,10,0.3)] z-[50] transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className={`lg:hidden fixed bg-white left-0 right-0 top-[64px] z-[60] w-full transition-transform duration-200 ease-spring-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col gap-8 items-start overflow-hidden px-0 py-4 w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full px-6 py-0 relative shrink-0">
            {!showSolutionsSubmenu && !showPlatformSubmenu ? (
              /* Main Menu */
              <>
                <div className="flex flex-col gap-5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
                  <div className="flex flex-col gap-0 items-start justify-start relative shrink-0 w-full">
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
                      active={isActive('/platform')}
                      fullWidth
                      onClick={handlePlatformClick}
                      className="justify-start text-left"
                      aria-current={isActive('/platform') ? 'page' : undefined}
                    >
                      Platform
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
            ) : showSolutionsSubmenu ? (
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

                  <div className="flex flex-col gap-0 items-start justify-start relative shrink-0 w-full">
                    <h2 className="font-bold text-lg text-[#0a0a0a] px-0 py-2">Solutions</h2>
                    {SOLUTIONS_ITEMS.map((item) => {
                      const active = location.pathname.startsWith(item.path)
                      return (
                        <DropdownMenuItem
                          key={item.path}
                          icon={item.icon}
                          title={item.label}
                          description={item.description}
                          active={active}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleNavClick(item.path)
                          }}
                          className="w-full"
                          role="menuitem"
                          aria-current={active ? 'page' : undefined}
                        />
                      )
                    })}
                  </div>
                </div>
              </>
            ) : (
              /* Platform Submenu */
              <>
                <div className="flex flex-col gap-5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
                  <MenuItem
                    fullWidth
                    onClick={handleBackClick}
                    className="justify-start text-left"
                  >
                    ← Back
                  </MenuItem>

                  <div className="flex flex-col gap-0 items-start justify-start relative shrink-0 w-full">
                    <h2 className="font-bold text-lg text-[#0a0a0a] px-0 py-2">Platform</h2>
                    {PLATFORM_ITEMS.map((item) => {
                      const active = location.pathname.startsWith(item.path)
                      return (
                        <DropdownMenuItem
                          key={item.path}
                          icon={item.icon}
                          title={item.label}
                          description={item.description}
                          active={active}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleNavClick(item.path)
                          }}
                          className="w-full"
                          role="menuitem"
                          aria-current={active ? 'page' : undefined}
                        />
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
