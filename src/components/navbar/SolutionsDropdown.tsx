import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'

interface SolutionsDropdownProps {
  // No props needed
}

interface SolutionItem {
  label: string
  path: string
}

const SOLUTIONS_ITEMS: SolutionItem[] = [
  { label: 'Identity Verification (KYC)', path: '/solutions/identity-verification' },
  { label: 'Business Onboarding (KYB)', path: '/solutions/business-onboarding' },
  { label: 'Age Verification', path: '/solutions/age-verification' },
  { label: 'Ticket Issuance', path: '/solutions/ticket-issuance' },
]

export default function SolutionsDropdown() {
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
      <Button
        variant={isOpen ? 'secondary' : 'ghost'}
        className="cursor-default"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.preventDefault()
          // Solutions button is not clickable, only dropdown items are
        }}
      >
        Solutions
      </Button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50"
          role="menu"
          aria-label="Solutions submenu"
        >
          <div 
            className="bg-white rounded-3xl shadow-[0px_8px_25px_-5px_rgba(10,13,18,0.1),0px_4px_10px_-6px_rgba(10,13,18,0.1)] p-1.5"
            style={{ 
              width: 'max-content',
            }}
          >
            {SOLUTIONS_ITEMS.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                size="md"
                fullWidth
                onClick={() => handleItemClick(item.path)}
                className="justify-start text-left"
                role="menuitem"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
