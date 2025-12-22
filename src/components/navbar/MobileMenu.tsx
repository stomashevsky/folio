import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button, MobileMenuItem, MobileMenuLink, MobileMenuBackButton } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import { scrollToSection } from '../../utils/scrollToSection'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

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
import badgeCheckIcon from '../../assets/icons/BadgeCheck.svg'
import ageIcon from '../../assets/icons/Age.svg'
import ticketIcon from '../../assets/icons/Ticket.svg'
import briefcaseIcon from '../../assets/icons/Briefcase.svg'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  bannerVisible?: boolean
}

const SOLUTIONS_ITEMS = [
  {
    labelKey: 'footer.clientOnboarding',
    path: '/solutions/client-onboarding',
    icon: briefcaseIcon,
    descriptionKey: 'nav.clientOnboardingDesc'
  },
  {
    labelKey: 'footer.ageCompliance',
    path: '/solutions/age-compliance',
    icon: ageIcon,
    descriptionKey: 'nav.ageComplianceDesc'
  },
  {
    labelKey: 'footer.digitalTicketing',
    path: '/solutions/digital-ticketing',
    icon: ticketIcon,
    descriptionKey: 'nav.digitalTicketingDesc'
  },
]

const PLATFORM_ITEMS = [
  // СБОР ДАННЫХ
  {
    labelKey: 'footer.idVerification',
    path: '/platform/id-verification',
    icon: idCardIcon,
    descriptionKey: 'nav.idVerificationDesc'
  },
  {
    labelKey: 'footer.nfcIdentityScan',
    path: '/platform/nfc-identity-scan',
    icon: nfcIcon,
    descriptionKey: 'nav.nfcIdentityScanDesc'
  },
  {
    labelKey: 'footer.documentIntelligence',
    path: '/platform/document-intelligence',
    icon: sparklesIcon,
    descriptionKey: 'nav.documentIntelligenceDesc'
  },
  // БИОМЕТРИЯ
  {
    labelKey: 'footer.faceMatch',
    path: '/platform/face-match',
    icon: circleUserIcon,
    descriptionKey: 'nav.faceMatchDesc'
  },
  {
    labelKey: 'footer.livenessCheck',
    path: '/platform/liveness-check',
    icon: scanFaceIcon,
    descriptionKey: 'nav.livenessCheckDesc'
  },
  // ПРОВЕРКА ДАННЫХ
  {
    labelKey: 'footer.dataSourceChecks',
    path: '/platform/data-source-checks',
    icon: databaseIcon,
    descriptionKey: 'nav.dataSourceChecksDesc'
  },
  {
    labelKey: 'footer.phoneAndEmailValidation',
    path: '/platform/phone-and-email-validation',
    icon: messageSquareMoreIcon,
    descriptionKey: 'nav.phoneAndEmailValidationDesc'
  },
  {
    labelKey: 'footer.behaviorInsights',
    path: '/platform/behavior-insights',
    icon: waypointsIcon,
    descriptionKey: 'nav.behaviorInsightsDesc'
  },
  // ОРКЕСТРАЦИЯ
  {
    labelKey: 'footer.dynamicFlow',
    path: '/platform/dynamic-flow',
    icon: gitForkIcon,
    descriptionKey: 'nav.dynamicFlowDesc'
  },
  // РЕЗУЛЬТАТЫ
  {
    labelKey: 'footer.reviewWorkspace',
    path: '/platform/review-workspace',
    icon: searchCheckIcon,
    descriptionKey: 'nav.reviewWorkspaceDesc'
  },
  {
    labelKey: 'footer.credentialIssuance',
    path: '/platform/credential-issuance',
    icon: badgeCheckIcon,
    descriptionKey: 'nav.credentialIssuanceDesc'
  },
]

// Navbar height (64px) + banner height when visible
// Mobile banner: ~160px (with text wrap per Figma design)
const NAVBAR_HEIGHT = 64
const BANNER_HEIGHT_MOBILE = 160

export default function MobileMenu({ isOpen, onClose, bannerVisible = false }: MobileMenuProps) {
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const location = useLocation()
  const { getLocalizedPath, currentLang } = useLocalizedPath()
  const [showSolutionsSubmenu, setShowSolutionsSubmenu] = useState(false)
  const [showPlatformSubmenu, setShowPlatformSubmenu] = useState(false)
  
  // Calculate offset based on banner visibility (mobile only, lg:hidden)
  // Mobile: 64 + 140 = 204px when banner visible
  const mobileOffset = bannerVisible ? NAVBAR_HEIGHT + BANNER_HEIGHT_MOBILE : NAVBAR_HEIGHT

  // Reset submenu state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setShowSolutionsSubmenu(false)
      setShowPlatformSubmenu(false)
    }
  }, [isOpen])

  const isActive = (path: string) => {
    const localizedPath = getLocalizedPath(path)
    if (path === '/') {
      return location.pathname === `/${currentLang}` || location.pathname === `/${currentLang}/`
    }
    return location.pathname.startsWith(localizedPath)
  }

  const handleNavClick = (path: string) => {
    onClose()
    setShowSolutionsSubmenu(false)
    setShowPlatformSubmenu(false)
    const localizedPath = getLocalizedPath(path)
    const isCurrentPage = location.pathname === localizedPath
    if (isCurrentPage) {
      scrollToTop()
    } else {
      navigate(localizedPath)
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
        className={`lg:hidden fixed bg-white left-0 right-0 z-[60] w-full transition-transform duration-200 ease-spring-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ top: `${mobileOffset}px` }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div 
          className="flex flex-col items-start overflow-y-auto w-full"
          style={{ maxHeight: `calc(100dvh - ${mobileOffset}px)` }}
        >
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
                    {t('footer.folioApp')}
                  </MobileMenuItem>
                  <MobileMenuItem
                    active={isActive('/platform')}
                    hasSubmenu={true}
                    onClick={handlePlatformClick}
                    aria-current={isActive('/platform') ? 'page' : undefined}
                  >
                    {t('footer.platform')}
                  </MobileMenuItem>
                  <MobileMenuItem
                    active={isActive('/solutions')}
                    hasSubmenu={true}
                    onClick={handleSolutionsClick}
                    aria-current={isActive('/solutions') ? 'page' : undefined}
                  >
                    {t('footer.solutions')}
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
                    {t('footer.government')}
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
                    {t('footer.blog')}
                  </MobileMenuItem>
                </div>

                <div className="px-6 pt-4 w-full">
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault()
                      handleClose()
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
                    }}
                  >
                    {t('footer.getTheApp')}
                  </Button>
                </div>
              </>
            ) : showSolutionsSubmenu ? (
              /* Solutions Submenu */
              <>
                <MobileMenuBackButton onClick={handleBackClick}>
                  {t('nav.backToMainMenu')}
                </MobileMenuBackButton>

                <div className="flex flex-col gap-0 items-start justify-start w-full pt-3">
                  <h2 className="font-bold text-2xl leading-8 text-[#0a0a0a] px-6">{t('footer.solutions')}</h2>
                  {SOLUTIONS_ITEMS.map((item) => {
                    const localizedPath = getLocalizedPath(item.path)
                    const active = location.pathname.startsWith(localizedPath)
                    return (
                      <MobileMenuLink
                        key={item.path}
                        icon={item.icon}
                        title={t(item.labelKey)}
                        description={t(item.descriptionKey)}
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
                  {t('nav.backToMainMenu')}
                </MobileMenuBackButton>

                <div className="flex flex-col gap-0 items-start justify-start w-full pt-3">
                  <h2 className="font-bold text-2xl leading-8 text-[#0a0a0a] px-6">{t('footer.platform')}</h2>
                  {PLATFORM_ITEMS.map((item) => {
                    const localizedPath = getLocalizedPath(item.path)
                    const active = location.pathname.startsWith(localizedPath)
                    return (
                      <MobileMenuLink
                        key={item.path}
                        icon={item.icon}
                        title={t(item.labelKey)}
                        description={t(item.descriptionKey)}
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
