import { ButtonHTMLAttributes, ReactNode } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'
import chevronRightIcon from '../../assets/icons/ChevronRight.svg'

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
 * - Structure: wrapper px-6 py-0, inner flex with border-bottom and py-4
 * - Width: full (312px in design)
 * - Border: 1px solid #e5e5e5 on bottom of inner container
 * - Gap: 12px (gap-3) between icon and text
 * - Font: 14px, medium weight (500)
 * - Text color: #0a0a0a (foreground)
 * - Hover: background #f5f5f5, border hidden
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
    void active
    // Wrapper classes - outer container with horizontal padding
    const wrapperClasses = 'box-border w-full px-6 py-0 outline-none focus-visible:outline-none transition-all text-left'

    // Inner flex container with border-bottom and vertical padding
    const innerClasses = 'flex gap-3 items-center justify-between w-full py-4 border-b border-[#e5e5e5] [@media(hover:hover)]:group-hover:border-transparent group-active:border-transparent'

    // Text classes
    const textClasses = 'text-sm font-medium leading-5'

    // State classes - hover only on devices that support hover (not touch devices)
    // Using @media(hover:hover) to prevent sticky hover on mobile after tap
    // active: provides pressed state feedback on touch devices
    const stateClasses = 'bg-transparent text-[#0a0a0a] [@media(hover:hover)]:hover:bg-[#f5f5f5] [@media(hover:hover)]:hover:text-[#171717] active:bg-[#f5f5f5] active:text-[#171717]'

    const allClasses = `group ${wrapperClasses} ${textClasses} ${stateClasses} ${FOCUS_RING_CLASSES} ${className}`

    return (
        <button
            type="button"
            className={allClasses}
            onClick={onClick}
            aria-current={ariaCurrent}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            <div className={innerClasses}>
                <span>{children}</span>
                {hasSubmenu && (
                    <img
                        src={chevronRightIcon}
                        alt=""
                        className="w-5 h-5 shrink-0"
                    />
                )}
            </div>
        </button>
    )
}
