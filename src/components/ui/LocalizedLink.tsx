import { Link, LinkProps, useNavigate } from 'react-router-dom'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'
import { scrollToSection } from '../../utils/scrollToSection'
import { MouseEvent } from 'react'

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string
}

/**
 * LocalizedLink component that automatically adds the current language prefix to paths
 * Use this instead of Link for internal navigation to maintain language consistency
 * Handles hash anchors properly for instant positioning
 */
export default function LocalizedLink({ to, children, onClick, ...props }: LocalizedLinkProps) {
  const { getLocalizedPath } = useLocalizedPath()
  const navigate = useNavigate()
  
  // Extract hash if present
  const hashIndex = to.indexOf('#')
  const hash = hashIndex !== -1 ? to.slice(hashIndex) : ''
  const pathWithoutHash = hashIndex !== -1 ? to.slice(0, hashIndex) : to
  
  // Get localized path without hash
  let localizedPath = getLocalizedPath(pathWithoutHash)
  // Remove trailing slash if hash exists, then add hash
  // React Router expects format like "/en/wallet/#get-the-app" not "/en/wallet//#get-the-app"
  const finalPath = hash ? `${localizedPath.replace(/\/$/, '')}${hash}` : localizedPath
  
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // If there's a hash, handle navigation and positioning
    if (hash) {
      const targetId = hash.slice(1) // Remove #
      const currentPath = window.location.pathname
      const targetPath = localizedPath.replace(/\/$/, '') // Remove trailing slash for comparison
      
      // Check if we're navigating to the same page or different page
      if (currentPath === targetPath || currentPath === `${targetPath}/`) {
        // Same page, just position to section
        e.preventDefault()
        scrollToSection(targetId)
        // Multiple attempts to ensure positioning works
        requestAnimationFrame(() => {
          scrollToSection(targetId)
          setTimeout(() => scrollToSection(targetId), 100)
          setTimeout(() => scrollToSection(targetId), 300)
        })
      } else {
        // Different page, navigate without hash, then position
        e.preventDefault()
        navigate(localizedPath, { state: { scrollTo: targetId } })
        // Position after navigation with multiple retry attempts
        // Use longer delays to allow lazy-loaded component to render
        requestAnimationFrame(() => {
          setTimeout(() => scrollToSection(targetId), 200)
          setTimeout(() => scrollToSection(targetId), 400)
          setTimeout(() => scrollToSection(targetId), 600)
          setTimeout(() => scrollToSection(targetId), 800)
          setTimeout(() => scrollToSection(targetId), 1000)
          setTimeout(() => scrollToSection(targetId), 1500)
        })
      }
    }
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e)
    }
  }
  
  return (
    <Link to={finalPath} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}

