import { Link } from 'react-router-dom'
import { FOCUS_STYLES } from './focusStyles'
import { scrollToTop } from '../../utils/scrollToTop'

interface FooterLinkProps {
  to?: string
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

/**
 * FooterLink component for footer navigation links
 * Supports both internal routing (to) and external links (href)
 * Applies correct default and hover styles according to Figma design
 */
export default function FooterLink({
  to,
  href,
  target,
  rel,
  children,
  className = '',
  onClick,
}: FooterLinkProps) {
  const baseClasses = `text-sm font-normal leading-5 text-[#0a0a0a] no-underline transition-opacity duration-150 hover:opacity-60 cursor-pointer rounded-md ${FOCUS_STYLES}`
  const combinedClasses = `${baseClasses} ${className}`

  // External link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  // Internal route
  if (to) {
    const handleInternalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Call existing onClick handler if provided
      onClick?.(e)
      
      // Scroll to top after navigation
      setTimeout(() => {
        scrollToTop()
      }, 100)
    }

    return (
      <Link
        to={to}
        className={combinedClasses}
        onClick={handleInternalClick}
      >
        {children}
      </Link>
    )
  }

  // Fallback to anchor if neither to nor href provided
  return (
    <a
      href="#"
      className={combinedClasses}
      onClick={(e) => {
        e.preventDefault()
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}

