import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuItem, DropdownMenuItem } from '../ui'
import { scrollToTop } from '../../utils/scrollToTop'
import chevronDownIcon from '../../assets/icons/ChevronDown.svg'
import { PLATFORM_ITEMS } from '../../constants/platformItems'

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
        className={`cursor-default ${isOpen ? '!bg-[#E5E5E5]' : ''}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-1.5">
          Platform
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
          aria-label="Platform submenu"
          style={{
            // Prevent overflow on narrow screens
            maxWidth: 'calc(100vw - 48px)',
            left: 'clamp(24px, 50%, calc(100vw - 24px))',
          }}
        >
          <div
            className="bg-white rounded-3xl shadow-[0px_8px_25px_-3px_rgba(10,13,18,0.15),0px_4px_10px_-6px_rgba(10,13,18,0.15)] p-1.5"
            style={{
              width: 'max-content',
            }}
          >
            {/* Three column grid layout for Platform items - gaps are 0 */}
            <div className="grid grid-cols-3 gap-0">
              {PLATFORM_ITEMS.map((item) => (
                <DropdownMenuItem
                  key={item.path}
                  icon={item.icon}
                  title={item.label}
                  description={item.description}
                  onClick={() => handleItemClick(item.path)}
                  className="w-[260px]"
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
