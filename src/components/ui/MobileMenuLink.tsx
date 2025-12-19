import { ButtonHTMLAttributes } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'

export interface MobileMenuLinkProps {
    icon?: string
    title: string
    description?: string
    className?: string
    active?: boolean
    onClick?: (e: React.MouseEvent) => void
    'aria-current'?: 'page' | undefined
    role?: string
}

/**
 * MobileMenuLink component for mobile navigation dropdowns
 * Full-width item with icon, title, and optional description
 * 
 * Figma specs (node-id: 24626-76638):
 * - Width: full
 * - Padding: px-6 py-4 (24px horizontal, 16px vertical) for content
 * - Gap: gap-2 (8px between icon and text)
 * - NO border radius for mobile
 * - Icon size: 20x20px
 * - Title: 14px, medium weight (500), #0a0a0a
 * - Description: 14px, normal weight (400), #737373
 * - Hover: background extends edge-to-edge (#f5f5f5)
 */
export default function MobileMenuLink({
    icon,
    title,
    description,
    className = '',
    active = false,
    onClick,
    'aria-current': ariaCurrent,
    role,
    ...props
}: MobileMenuLinkProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) {
    void active
    // Base classes - highlight extends edge-to-edge with px-6 for content padding
    const baseClasses = 'box-border flex gap-2 items-start w-full px-6 py-4 outline-none focus-visible:outline-none transition-all text-left'

    // State classes - hover only on devices that support hover (not touch devices)
    // Using @media(hover:hover) to prevent sticky hover on mobile after tap
    const stateClasses = 'bg-transparent [@media(hover:hover)]:hover:bg-[#f5f5f5]'

    const allClasses = `${baseClasses} ${stateClasses} ${FOCUS_RING_CLASSES} ${className}`

    return (
        <button
            type="button"
            className={allClasses}
            onClick={onClick}
            aria-current={ariaCurrent}
            role={role}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {/* Icon */}
            {icon && (
                <img
                    src={icon}
                    alt=""
                    className="w-5 h-5 shrink-0"
                />
            )}

            {/* Text content */}
            <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-medium leading-5 text-[#0a0a0a]">
                    {title}
                </span>
                {description && (
                    <span className="text-sm font-normal leading-5 text-[#737373]">
                        {description}
                    </span>
                )}
            </div>
        </button>
    )
}
