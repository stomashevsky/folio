import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuItem, DropdownMenuItem } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'

// Icons
import idCardIcon from '../../assets/icons/id-card.svg'
import sparklesIcon from '../../assets/icons/Sparkles.svg'
import circleUserIcon from '../../assets/icons/CircleUser.svg'
import scanFaceIcon from '../../assets/icons/ScanFace.svg'
import databaseIcon from '../../assets/icons/Database.svg'
import messageSquareMoreIcon from '../../assets/icons/MessageSquareMore.svg'
import nfcIcon from '../../assets/icons/Nfc.svg'
import gitForkIcon from '../../assets/icons/GitFork.svg'

interface PlatformItem {
  label: string
  path: string
  icon: string
  description: string
}

const PLATFORM_ITEMS: PlatformItem[] = [
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
    icon: circleUserIcon,
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

export default function PlatformDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleItemClick = (path: string) => {
    navigate(path)
    setTimeout(() => {
      scrollToTop()
    }, 100)
    setIsOpen(false)
  }

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <MenuItem
        active={isOpen}
        className="cursor-default"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.preventDefault()
          // Platform button is not clickable, only dropdown items are
        }}
      >
        Platform
      </MenuItem>
      
      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50"
          role="menu"
          aria-label="Platform submenu"
        >
          <div 
            className="bg-white rounded-3xl shadow-[0px_8px_25px_-3px_rgba(10,13,18,0.15),0px_4px_10px_-6px_rgba(10,13,18,0.15)] p-1.5"
            style={{ 
              width: 'max-content',
            }}
          >
            {/* Two column grid layout for Platform items */}
            <div className="grid grid-cols-2 gap-1.5">
              {PLATFORM_ITEMS.map((item) => (
                <DropdownMenuItem
                  key={item.path}
                  icon={item.icon}
                  title={item.label}
                  description={item.description}
                  onClick={() => handleItemClick(item.path)}
                  className="min-w-[280px]"
                  role="menuitem"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
