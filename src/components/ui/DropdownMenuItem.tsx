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
 * - Icon + Title in one row (icon centered to title)
 * - Description below with padding to align under title
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
  // Base classes - flex column layout, content aligned to top
  // Padding: 16px horizontal, 12px vertical, rounded-[18px]
  const baseClasses = 'box-border flex flex-col items-start px-4 py-3 rounded-[18px] outline-none focus-visible:outline-none transition-colors duration-150 ease-out text-left'

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
      {/* Icon + Title row - icon centered to title */}
      <div className="flex gap-3 items-center w-full">
        {icon && (
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="w-5 h-5 shrink-0"
          />
        )}
        {/* Title: medium (500), 14px (text-sm), dark text #0a0a0a */}
        <p className="font-medium text-sm leading-5 text-[#0a0a0a] whitespace-normal">
          {title}
        </p>
      </div>

      {/* Description below - with left padding to align under title (icon 20px + gap 12px = 32px = pl-8) */}
      <p className={`font-normal text-[13px] leading-5 text-[#737373] whitespace-normal mt-0.5 ${icon ? 'pl-8' : ''}`}>
        {description}
      </p>
    </button>
  )
}
