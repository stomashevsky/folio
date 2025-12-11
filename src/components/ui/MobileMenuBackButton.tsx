import { ButtonHTMLAttributes } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'
import arrowLeftIcon from '../../assets/icons/ArrowLeft.svg'

export interface MobileMenuBackButtonProps {
    children?: string
    className?: string
    onClick?: (e: React.MouseEvent) => void
}

/**
 * MobileMenuBackButton component for mobile navigation back action
 * Full-width button with arrow left icon and muted text
 * 
 * Figma specs (node-id: 24634-85982):
 * - Width: 312px (full width in context)
 * - Padding: px-6 py-3 (24px horizontal, 12px vertical)
 * - Gap: gap-2 (8px between icon and text)
 * - Icon: ArrowLeft, 20x20px, #737373
 * - Text: 14px, medium weight (500), #737373 (muted)
 * - Hover: gradient overlay (#f5f5f5 with 10% black)
 */
export default function MobileMenuBackButton({
    children = 'Back to main menu',
    className = '',
    onClick,
    ...props
}: MobileMenuBackButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) {
    // Base classes matching Figma design
    const baseClasses = 'box-border flex gap-2 items-center w-full px-6 py-3 outline-none focus-visible:outline-none transition-all text-left'

    // Text classes - muted color
    const textClasses = 'text-sm font-medium leading-5 text-[#737373]'

    // State classes - hover background
    const stateClasses = 'bg-transparent hover:bg-[#f5f5f5]'

    const allClasses = `${baseClasses} ${stateClasses} ${FOCUS_RING_CLASSES} ${className}`

    return (
        <button
            type="button"
            className={allClasses}
            onClick={onClick}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {/* Arrow Left Icon */}
            <img
                src={arrowLeftIcon}
                alt=""
                className="w-5 h-5 shrink-0 opacity-60"
            />

            {/* Text */}
            <span className={textClasses}>
                {children}
            </span>
        </button>
    )
}
