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
 * - Hover/Active: gray background (#ebebeb), rounded corners
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
  // Icon to text gap: 8px (gap-2), padding: 16px horizontal, 12px vertical, rounded-[18px]
  const baseClasses = 'box-border flex gap-2 items-start px-4 py-3 rounded-[18px] outline-none focus-visible:outline-none transition-all text-left'

  // State classes - matching Figma design (node-id=24626-76638)
  // Hover/Active background: #ebebeb (light gray)
  const stateClasses = active
    ? 'bg-[#ebebeb]' // Active state
    : 'bg-transparent hover:bg-[#ebebeb]'

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
      <div className="flex-1 flex flex-col min-w-0">
        {/* Title: medium (500), 14px (text-sm), dark text #0a0a0a */}
        <p className="font-medium text-sm leading-5 text-[#0a0a0a] whitespace-normal">
          {title}
        </p>
        {/* Description: regular (400), 14px (text-sm), muted text #737373 */}
        <p className="font-normal text-sm leading-5 text-[#737373] whitespace-normal">
          {description}
        </p>
      </div>
    </button>
  )
}
