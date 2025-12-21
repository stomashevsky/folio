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
 * Figma specs (node-id: 24626-76638, 24634-86523):
 * - Outer container: px-6 (24px), py-0, w-full
 * - Inner flex: gap-3 (12px), items-center, py-4 (16px), border-b #e5e5e5
 * - Icon: 20x20px, vertically centered
 * - Title: 14px, medium (500), #0a0a0a, leading-5
 * - Description: 14px, normal (400), #737373, leading-5
 * - Hover: bg #f5f5f5, border transparent
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

    return (
        <button
            type="button"
            className={`
                group
                box-border w-full px-6 py-0
                outline-none focus-visible:outline-none
                transition-all text-left
                bg-transparent
                [@media(hover:hover)]:hover:bg-[#f5f5f5]
                active:bg-[#f5f5f5]
                ${FOCUS_RING_CLASSES}
                ${className}
            `}
            onClick={onClick}
            aria-current={ariaCurrent}
            role={role}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {/* Inner flex container */}
            <div className="
                flex gap-3 items-center
                w-full py-4
                border-b border-[#e5e5e5]
                [@media(hover:hover)]:group-hover:border-transparent
                group-active:border-transparent
            ">
                {/* Icon - 20x20, vertically centered */}
                {icon && (
                    <img
                        src={icon}
                        alt=""
                        className="w-5 h-5 shrink-0"
                    />
                )}

                {/* Text content */}
                <div className="flex flex-col flex-1 min-w-0 justify-center gap-0.5">
                    <span className="text-sm font-medium leading-5 text-[#0a0a0a]">
                        {title}
                    </span>
                    {description && (
                        <span className="text-[13px] font-normal leading-5 text-[#737373]">
                            {description}
                        </span>
                    )}
                </div>
            </div>
        </button>
    )
}
