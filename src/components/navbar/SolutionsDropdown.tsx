import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuItem, DropdownMenuItem } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import chevronDownIcon from '../../assets/icons/ChevronDown.svg'

// Icons
import ageIcon from '../../assets/icons/Age.svg'
import ticketIcon from '../../assets/icons/Ticket.svg'

interface SolutionItem {
  label: string
  path: string
  icon: string
  description: string
}

const SOLUTIONS_ITEMS: SolutionItem[] = [
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
      <MenuItem
        active={isOpen}
        className={`cursor-default ${isOpen ? '!bg-[#E5E5E5]' : ''}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.preventDefault()
          // Solutions button is not clickable, only dropdown items are
        }}
      >
        <span className="flex items-center gap-1.5">
          Solutions
          <img
            src={chevronDownIcon}
            alt=""
            aria-hidden="true"
            className="w-4 h-4"
          />
        </span>
      </MenuItem>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50"
          role="menu"
          aria-label="Solutions submenu"
        >
          <div
            className="bg-white rounded-3xl shadow-[0px_8px_25px_-3px_rgba(10,13,18,0.15),0px_4px_10px_-6px_rgba(10,13,18,0.15)] p-1.5"
            style={{
              width: 'max-content',
            }}
          >
            {/* Single column for Solutions items - gap 0 */}
            <div className="flex flex-col gap-0">
              {SOLUTIONS_ITEMS.map((item) => (
                <DropdownMenuItem
                  key={item.path}
                  icon={item.icon}
                  title={item.label}
                  description={item.description}
                  onClick={() => handleItemClick(item.path)}
                  className="w-[300px]"
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
