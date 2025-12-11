import { ButtonHTMLAttributes, ReactNode } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'

export interface MenuLinkProps {
    /** Icon to display on the left (can be image path or React node) */
    icon?: string | ReactNode
    /** Main title/button text */
    title: string
    /** Description text below title */
    description?: string
    /** Whether to show the left icon (default: true) */
    showIcon?: boolean
    /** Additional CSS classes */
    className?: string
    /** Click handler */
    onClick?: (e: React.MouseEvent) => void
    /** If provided, renders as anchor tag */
    href?: string
    /** Link target */
    target?: string
    /** Link rel attribute */
    rel?: string
    /** ARIA role */
    role?: string
    /** ARIA current */
    'aria-current'?: 'page' | undefined
}

/**
 * MenuLink component for navigation menus with optional icon and description
 * Based on Figma design (node-id=24626-76638)
 * 
 * Structure:
 * - Optional left icon (20x20px)
 * - Title text (medium weight, dark)
 * - Optional description text (normal weight, muted)
 * 
 * States:
 * - Default: transparent background
 * - Hover: gradient background (white to 5% black)
 */
export default function MenuLink({
    icon,
    title,
    description,
    showIcon = true,
    className = '',
    onClick,
    href,
    target,
    rel,
    role,
    'aria-current': ariaCurrent,
    ...props
}: MenuLinkProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) {
    // Base classes matching Figma design
    // Container: 300px width, px-4 py-2, rounded-[18px], gap-2
    const baseClasses = 'box-border flex gap-2 items-start px-4 py-2 rounded-[18px] outline-none focus-visible:outline-none transition-all text-left w-[300px]'

    // Hover state: gradient background from transparent to 5% black
    const hoverClasses = 'bg-transparent hover:bg-gradient-to-r hover:from-transparent hover:to-[rgba(10,10,10,0.05)]'

    const allClasses = `${baseClasses} ${hoverClasses} ${FOCUS_RING_CLASSES} ${className}`

    // Render icon element
    const iconElement = showIcon && icon && (
        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
            {typeof icon === 'string' ? (
                <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5"
                />
            ) : (
                icon
            )}
        </div>
    )

    // Content structure
    const content = (
        <>
            {iconElement}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Title: medium weight (500), 14px (text-sm), dark text */}
                <p className="font-medium text-sm leading-5 text-[#0a0a0a] whitespace-nowrap text-center">
                    {title}
                </p>
                {/* Description: normal weight (400), 14px (text-sm), muted text */}
                {description && (
                    <p className="font-normal text-sm leading-5 text-[#737373] w-[235px]">
                        {description}
                    </p>
                )}
            </div>
        </>
    )

    // If href is provided, render as anchor tag
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
                className={allClasses}
                onClick={onClick}
                role={role}
                aria-current={ariaCurrent}
            >
                {content}
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
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {content}
        </button>
    )
}
