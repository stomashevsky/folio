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
  // Icon to text gap: 12px (gap-3), padding: 16px horizontal, 12px vertical, rounded-[18px]
  // items-center: icon vertically centered relative to text block
  const baseClasses = 'box-border flex gap-3 items-center px-4 py-3 rounded-[18px] outline-none focus-visible:outline-none transition-colors duration-150 ease-out text-left'

  // State classes - subtle hover like Apple design
  // Hover/Active background: #e5e5e5 (soft gray)
  const stateClasses = active
    ? 'bg-[#e5e5e5]'
    : 'bg-transparent hover:bg-[#e5e5e5]'

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
      {/* Feature icon (if provided) - vertically centered */}
      {icon && (
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="w-5 h-5 shrink-0"
        />
      )}

      {/* Title and description */}
      <div className="flex-1 flex flex-col min-w-0 gap-0.5">
        {/* Title: medium (500), 14px (text-sm), dark text #0a0a0a */}
        <p className="font-medium text-sm leading-5 text-[#0a0a0a] whitespace-normal">
          {title}
        </p>
        {/* Description: regular (400), 13px, muted text #737373 - slightly smaller for hierarchy */}
        <p className="font-normal text-[13px] leading-5 text-[#737373] whitespace-normal">
          {description}
        </p>
      </div>
    </button>
  )
}
