/**
 * Utility for scrolling to a page section instantly
 * Guarantees scroll unlock and scrolls to the target section without animation
 */
export function scrollToSection(sectionId: string) {
  // Remove # if present
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId

  // Fully unlock scroll on all levels
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  document.documentElement.style.overflow = ''
  document.documentElement.style.paddingRight = ''
  
  // Also remove overflow from all possible parents
  const root = document.getElementById('root')
  if (root) {
    root.style.overflow = ''
  }
  
  // Temporarily disable smooth scrolling from CSS
  const html = document.documentElement
  const originalScrollBehavior = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  
  // Scroll function
  const performScroll = () => {
    const element = document.getElementById(id)
    if (!element) {
      return false
    }
    
    // Use scrollIntoView with instant behavior
    element.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'nearest'
    })
    
    return true
  }
  
  // Try to find and scroll immediately
  if (performScroll()) {
    // Restore original scroll behavior
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalScrollBehavior
    })
    return
  }

  // If not found, try via requestAnimationFrame
  requestAnimationFrame(() => {
    if (!performScroll()) {
      // If still not found, wait a bit and try again
      setTimeout(() => {
        performScroll()
        // Restore original scroll behavior
        html.style.scrollBehavior = originalScrollBehavior
      }, 100)
    } else {
      // Restore original scroll behavior
      html.style.scrollBehavior = originalScrollBehavior
    }
  })
}

