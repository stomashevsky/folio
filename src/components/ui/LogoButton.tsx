import { MouseEvent } from 'react'
import Logo from './Logo'
import { scrollToSection } from '../../utils/scrollToSection'
import { FOCUS_STYLES } from './focusStyles'

interface LogoButtonProps {
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  className?: string
  size?: number
  'aria-label'?: string
  logoName?: 'Folio' | 'Folio Wallet'
}

export default function LogoButton({ 
  href, 
  onClick, 
  className = '', 
  size = 28,
  'aria-label': ariaLabel = 'Go to top',
  logoName = 'Folio Wallet'
}: LogoButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (href) {
      e.preventDefault()
      scrollToSection(href)
    }
    if (onClick) {
      onClick(e)
    }
  }

  const baseClasses = `flex items-center justify-center rounded-full ${FOCUS_STYLES}`

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${baseClasses} ${className}`}
        aria-label={ariaLabel}
      >
        <Logo size={size} name={logoName} />
      </a>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${className}`}
      aria-label={ariaLabel}
    >
      <Logo size={size} name={logoName} />
    </button>
  )
}

