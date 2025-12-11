import { ButtonHTMLAttributes } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'

export interface DropdownMenuItemProps {
  icon?: string
  title: string
  description: string
  className?: string
  active?: boolean
  onClick?: (e: React.MouseEvent) => void
  role?: string
  'aria-current'?: 'page' | undefined
}

/**
 * DropdownMenuItem component for dropdown menus with icon, title and description
 * Based on Figma design (node-id=24626-76638)
 * 
 * Structure:
 * - Feature icon on the left (if provided)
 * - Title (bold, dark text)
 * - Description (lighter, smaller text)
 * 
 * States:
 * - Default: transparent background
 * - Hover/Active: gray background (#dedede), rounded corners
 */
export default function DropdownMenuItem({
  icon,
  title,
  description,
  className = '',
  active = false,
  onClick,
  role,
  'aria-current': ariaCurrent,
  ...props
}: DropdownMenuItemProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) {
  // Base classes matching Figma design
  const baseClasses = 'box-border flex gap-3 items-start px-4 py-3 rounded-xl outline-none focus-visible:outline-none transition-all text-left'
  
  // State classes
  const stateClasses = active
    ? 'bg-[#dedede]' // Active state
    : 'bg-transparent hover:bg-[#dedede]'
  
  const allClasses = `${baseClasses} ${stateClasses} ${FOCUS_RING_CLASSES} ${className}`

  return (
    <button
      type="button"
      className={allClasses}
      onClick={onClick}
      role={role}
      aria-current={ariaCurrent}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {/* Feature icon (if provided) */}
      {icon && (
        <div className="flex-shrink-0 mt-0.5">
          <img 
            src={icon} 
            alt=""
            aria-hidden="true"
            className="w-5 h-5"
          />
        </div>
      )}
      
      {/* Title and description */}
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <p className="font-semibold text-sm leading-5 text-[#0a0a0a] whitespace-normal">
          {title}
        </p>
        <p className="font-normal text-xs leading-4 text-[#737373] whitespace-normal">
          {description}
        </p>
      </div>
    </button>
  )
}
