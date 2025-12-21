import { ButtonHTMLAttributes, ReactNode } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'

export interface MenuItemProps {
  children: ReactNode
  className?: string
  fullWidth?: boolean
  active?: boolean
  href?: string
  target?: string
  rel?: string
  onClick?: (e: React.MouseEvent) => void
  role?: string
  'aria-current'?: 'page' | undefined
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined
  'aria-expanded'?: boolean
}

/**
 * MenuItem component for navigation menus
 * Renders as button by default, or as anchor tag if href is provided
 * 
 * States:
 * - Default: transparent background, black text (#0a0a0a)
 * - Hover: gray background (#f5f5f5), darker text (#171717)
 * - Active: same as hover (for selected menu items)
 * 
 * @param children - Content to display
 * @param fullWidth - Whether the item should take full width
 * @param active - Whether the item is currently active/selected
 * @param href - If provided, renders as anchor tag
 * @param onClick - Click handler
 */
export default function MenuItem({
  children,
  className = '',
  fullWidth = false,
  active = false,
  href,
  target,
  rel,
  onClick,
  role,
  'aria-current': ariaCurrent,
  'aria-haspopup': ariaHaspopup,
  'aria-expanded': ariaExpanded,
  ...props
}: MenuItemProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) {
  // Base classes matching Figma design
  const baseClasses = 'box-border flex gap-2 items-center h-9 px-4 py-2 rounded-full outline-none focus-visible:outline-none transition-colors duration-150 ease-out'
  
  // Text classes
  const textClasses = 'text-sm font-medium leading-5 whitespace-nowrap'
  
  // State classes - unified with DropdownMenuItem (#f5f5f5)
  const stateClasses = active
    ? 'bg-[#f5f5f5] text-[#171717]'
    : 'bg-transparent text-[#0a0a0a] hover:bg-[#f5f5f5] hover:text-[#171717]'
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : ''
  
  // Justify classes - center by default, but allow override
  const hasJustifyOverride = className.includes('justify-start') || className.includes('justify-end')
  const justifyClasses = hasJustifyOverride ? '' : 'justify-center'
  
  const allClasses = `${baseClasses} ${textClasses} ${stateClasses} ${widthClasses} ${justifyClasses} ${FOCUS_RING_CLASSES} ${className}`

  // If href is provided, render as anchor tag
  if (href) {
    const anchorProps = {
      href,
      target,
      rel: rel || (target === '_blank' ? 'noopener noreferrer' : undefined),
      className: allClasses,
      onClick,
      role,
      'aria-current': ariaCurrent,
    }
    
    return (
      <a {...anchorProps}>
        {children}
      </a>
    )
  }

  // Otherwise render as button
  return (
    <button
      type="button"
      className={allClasses}
      onClick={onClick}
      role={role}
      aria-current={ariaCurrent}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
