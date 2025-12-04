import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'subtle'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  target?: string
  rel?: string
  loading?: boolean
}

type ButtonProps = BaseButtonProps & 
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> &
  Partial<Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>> & {
    type?: 'button' | 'submit' | 'reset'
  }

/**
 * Button component that can render as either a button or anchor tag
 * Automatically adds security attributes (rel="noopener noreferrer") for external links
 * 
 * @param variant - Visual style variant: 'primary', 'secondary', 'ghost', or 'subtle'
 * @param size - Size of the button: 'sm', 'md', or 'lg'
 * @param fullWidth - Whether the button should take full width of container
 * @param href - If provided, renders as anchor tag instead of button
 * @param target - Target for anchor tag (e.g., '_blank')
 * @param rel - Rel attribute for anchor tag (auto-added for external links)
 * @param disabled - Whether the button is disabled
 * @param icon - Optional icon to display alongside text
 */
export default function Button({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
  href,
  target,
  rel,
  type = 'button',
  ...props 
}: ButtonProps) {
  // Base classes for all buttons
  const baseClasses = 'box-border flex gap-2 items-center justify-center rounded-full outline-none focus-visible:outline-none transition-all transform-gpu'
  
  // Size classes
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'h-9 px-4 py-2 text-sm',
    lg: 'h-11 px-6 py-3 text-base'
  }
  
  // Variant classes with improved states
  const variantClasses: Record<ButtonVariant, string> = {
    primary: `bg-[#171717] text-[#fafafa] hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%),linear-gradient(90deg,#171717_0%,#171717_100%)] active:bg-[#171717]/75 ${FOCUS_RING_CLASSES} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#171717] font-medium leading-5 transition-all duration-150`,
    secondary: `bg-white border border-[#e5e5e5] border-solid text-[#0a0a0a] hover:bg-[#f5f5f5] hover:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] active:bg-[#e5e5e5] active:shadow-none ${FOCUS_RING_CLASSES} focus-visible:border-[#a3a3a3] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:shadow-none font-medium leading-5 transition-all duration-150`,
    ghost: `bg-transparent text-[#0a0a0a] hover:bg-[#f5f5f5] active:bg-[#e5e5e5] ${FOCUS_RING_CLASSES} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent font-medium leading-5 transition-all duration-150`,
    subtle: `bg-transparent text-[#737373] hover:text-[#0a0a0a] hover:bg-[#fafafa] active:text-[#0a0a0a] active:bg-[#f5f5f5] ${FOCUS_RING_CLASSES} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-[#737373] disabled:hover:bg-transparent font-normal leading-5 transition-all duration-150 cursor-pointer`
  }

  const widthClasses = fullWidth ? 'w-full flex-1' : ''
  const sizeClass = sizeClasses[size]
  const variantClass = variantClasses[variant]
  
  // For subtle variant, size affects padding differently
  const subtleSizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-2 py-1',
    lg: 'px-3 py-1.5'
  }
  
  const finalSizeClass = variant === 'subtle' 
    ? `${sizeClass.split(' ').filter(c => !c.startsWith('px-') && !c.startsWith('py-')).join(' ')} ${subtleSizeClasses[size]}`
    : sizeClass

  // Remove justify-center from baseClasses if justify-start or justify-end is in className
  const hasJustifyOverride = className.includes('justify-start') || className.includes('justify-end')
  const adjustedBaseClasses = hasJustifyOverride 
    ? baseClasses.replace('justify-center', '').trim()
    : baseClasses
  
  const isDisabled = disabled || loading
  const allClasses = `${adjustedBaseClasses} ${finalSizeClass} ${variantClass} ${widthClasses} whitespace-nowrap ${className} ${loading ? 'relative' : ''}`

  // Loading spinner component
  const LoadingSpinner = () => (
    <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <svg 
        className="animate-spin h-4 w-4" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
  )

  // If href is provided, render as anchor tag
  if (href) {
    const anchorProps = {
      href,
      target,
      rel: rel || (target === '_blank' ? 'noopener noreferrer' : undefined),
      className: allClasses,
      ...(props as AnchorHTMLAttributes<HTMLAnchorElement>)
    }
    
    const iconElement = icon ? <span className="shrink-0">{icon}</span> : null
    
    return (
      <a {...anchorProps}>
        {loading && <LoadingSpinner />}
        {loading ? (
          <span className="opacity-0">
            {iconPosition === 'left' && iconElement}
            {children}
            {iconPosition === 'right' && iconElement}
          </span>
        ) : (
          <>
            {iconPosition === 'left' && iconElement}
            {children}
            {iconPosition === 'right' && iconElement}
          </>
        )}
      </a>
    )
  }

  // Otherwise render as button
  const iconElement = icon ? <span className="shrink-0">{icon}</span> : null
  
  return (
    <button
      type={type}
      className={allClasses}
      disabled={isDisabled}
      aria-busy={loading}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading && <LoadingSpinner />}
      {loading ? (
        <span className="opacity-0">
          {iconPosition === 'left' && iconElement}
          {children}
          {iconPosition === 'right' && iconElement}
        </span>
      ) : (
        <>
          {iconPosition === 'left' && iconElement}
          {children}
          {iconPosition === 'right' && iconElement}
        </>
      )}
    </button>
  )
}

