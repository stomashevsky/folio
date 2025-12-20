import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, MobileMenuItem, MobileMenuLink, MobileMenuBackButton } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import { scrollToSection } from '../../utils/scrollToSection'

// Icons
import idCardIcon from '../../assets/icons/IdCard.svg'
import sparklesIcon from '../../assets/icons/Sparkles.svg'
import scanFaceIcon from '../../assets/icons/ScanFace.svg'
import circleUserIcon from '../../assets/icons/CircleUser.svg'
import databaseIcon from '../../assets/icons/Database.svg'
import messageSquareMoreIcon from '../../assets/icons/MessageSquareMore.svg'
import nfcIcon from '../../assets/icons/Nfc.svg'
import gitForkIcon from '../../assets/icons/GitFork.svg'
import waypointsIcon from '../../assets/icons/Waypoints.svg'
import searchCheckIcon from '../../assets/icons/SearchCheck.svg'
import ageIcon from '../../assets/icons/Age.svg'
import ticketIcon from '../../assets/icons/Ticket.svg'
import briefcaseIcon from '../../assets/icons/Briefcase.svg'

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
    label: 'Client onboarding',
    path: '/solutions/client-onboarding',
    icon: briefcaseIcon,
    description: 'Streamlined KYC verification for regulated businesses.'
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
    label: 'NFC identity scan',
    path: '/platform/nfc-identity-scan',
    icon: nfcIcon,
    description: 'Read secure chip data from compatible IDs and passports.'
  },
  {
    label: 'Face match',
    path: '/platform/face-match',
    icon: circleUserIcon,
    description: 'Compare a selfie to an official photo to confirm identity.'
  },
  {
    label: 'Liveness check',
    path: '/platform/liveness-check',
    icon: scanFaceIcon,
    description: 'Confirm that the user is physically present.'
  },
  {
    label: 'Data source checks',
    path: '/platform/data-source-checks',
    icon: databaseIcon,
    description: 'Validate user information against trusted databases.'
  },
  {
    label: 'Document intelligence',
    path: '/platform/document-intelligence',
    icon: sparklesIcon,
    description: 'Extract and analyze data from submitted documents.'
  },
  {
    label: 'Phone and email validation',
    path: '/platform/phone-and-email-validation',
    icon: messageSquareMoreIcon,
    description: 'Confirm ownership and detect risky contact details.'
  },
  {
    label: 'Dynamic flow',
    path: '/platform/dynamic-flow',
    icon: gitForkIcon,
    description: 'Coordinate identity checks with flexible logic.'
  },
  {
    label: 'Behavior insights',
    path: '/platform/behavior-insights',
    icon: waypointsIcon,
    description: 'Device and usage patterns for added context.'
  },
  {
    label: 'Review workspace',
    path: '/platform/review-workspace',
    icon: searchCheckIcon,
    description: 'Organize and resolve verification cases.'
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
        <div className="flex flex-col items-start overflow-y-auto max-h-[calc(100dvh-64px)] w-full">
          <div className="flex flex-col items-start justify-start w-full py-4 relative shrink-0">
            {!showSolutionsSubmenu && !showPlatformSubmenu ? (
              /* Main Menu */
              <>
                <div className="flex flex-col gap-0 items-start justify-start w-full">
                  <MobileMenuItem
                    active={isActive('/wallet')}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleNavClick('/wallet')
                    }}
                    aria-current={isActive('/wallet') ? 'page' : undefined}
                  >
                    Folio app
                  </MobileMenuItem>
                  <MobileMenuItem
                    active={isActive('/platform')}
                    hasSubmenu={true}
                    onClick={handlePlatformClick}
                    aria-current={isActive('/platform') ? 'page' : undefined}
                  >
                    Platform
                  </MobileMenuItem>
                  <MobileMenuItem
                    active={isActive('/solutions')}
                    hasSubmenu={true}
                    onClick={handleSolutionsClick}
                    aria-current={isActive('/solutions') ? 'page' : undefined}
                  >
                    Solutions
                  </MobileMenuItem>
                  <MobileMenuItem
                    active={isActive('/government')}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleNavClick('/government')
                    }}
                    aria-current={isActive('/government') ? 'page' : undefined}
                  >
                    Government
                  </MobileMenuItem>
                  <MobileMenuItem
                    active={isActive('/blog')}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleNavClick('/blog')
                    }}
                    aria-current={isActive('/blog') ? 'page' : undefined}
                  >
                    Blog
                  </MobileMenuItem>
                </div>

                <div className="px-6 pt-4 w-full">
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault()
                      handleClose()
                      const isWalletPage = location.pathname === '/wallet'
                      if (isWalletPage) {
                        scrollToSection('get-the-app')
                      } else {
                        navigate('/wallet')
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
                <MobileMenuBackButton onClick={handleBackClick}>
                  Back to main menu
                </MobileMenuBackButton>

                <div className="flex flex-col gap-0 items-start justify-start w-full pt-4">
                  <h2 className="font-bold text-lg text-[#0a0a0a] py-2 px-6">Solutions</h2>
                  {SOLUTIONS_ITEMS.map((item) => {
                    const active = location.pathname.startsWith(item.path)
                    return (
                      <MobileMenuLink
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
                        role="menuitem"
                        aria-current={active ? 'page' : undefined}
                      />
                    )
                  })}
                </div>
              </>
            ) : (
              /* Platform Submenu */
              <>
                <MobileMenuBackButton onClick={handleBackClick}>
                  Back to main menu
                </MobileMenuBackButton>

                <div className="flex flex-col gap-0 items-start justify-start w-full pt-4">
                  <h2 className="font-bold text-lg text-[#0a0a0a] py-2 px-6">Platform</h2>
                  {PLATFORM_ITEMS.map((item) => {
                    const active = location.pathname.startsWith(item.path)
                    return (
                      <MobileMenuLink
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
                        role="menuitem"
                        aria-current={active ? 'page' : undefined}
                      />
                    )
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
