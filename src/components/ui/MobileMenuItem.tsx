import { ButtonHTMLAttributes, ReactNode } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'
import chevronRightIcon from '../../assets/icons/chevron-right.svg'

export interface MobileMenuItemProps {
    children: ReactNode
    className?: string
    active?: boolean
    hasSubmenu?: boolean
    onClick?: (e: React.MouseEvent) => void
    'aria-current'?: 'page' | undefined
}

/**
 * MobileMenuItem component for mobile navigation menu
 * Full-width button with left-aligned text
 * 
 * Figma specs (node-id: 24634-85402, 24552-65532):
 * - Width: full (312px in design)
 * - Padding: px-6 py-3 (24px horizontal, 12px vertical)
 * - Font: 14px, medium weight (500)
 * - Text color: #0a0a0a (foreground)
 * - Hover: gradient overlay with 10% black (#f5f5f5)
 * - Dropdown type: includes chevron-right icon on right
 */
export default function MobileMenuItem({
    children,
    className = '',
    active = false,
    hasSubmenu = false,
    onClick,
    'aria-current': ariaCurrent,
    ...props
}: MobileMenuItemProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) {
    // Base classes matching Figma design
    const baseClasses = 'box-border flex gap-2 items-center justify-between w-full px-6 py-3 outline-none focus-visible:outline-none transition-all text-left'

    // Text classes
    const textClasses = 'text-sm font-medium leading-5'

    // State classes - hover/active background
    const stateClasses = active
        ? 'bg-[#f5f5f5] text-[#171717]'
        : 'bg-transparent text-[#0a0a0a] hover:bg-[#f5f5f5] hover:text-[#171717]'

    const allClasses = `${baseClasses} ${textClasses} ${stateClasses} ${FOCUS_RING_CLASSES} ${className}`

    return (
        <button
            type="button"
            className={allClasses}
            onClick={onClick}
            aria-current={ariaCurrent}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            <span>{children}</span>
            {hasSubmenu && (
                <img
                    src={chevronRightIcon}
                    alt=""
                    className="w-5 h-5 shrink-0"
                />
            )}
        </button>
    )
}
