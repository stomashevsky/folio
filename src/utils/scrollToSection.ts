/**
 * Utility for positioning to a page section instantly without animation
 * Guarantees scroll unlock and positions to the target section instantly
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
  const originalScrollBehavior = html.style.scrollBehavior || ''
  html.style.scrollBehavior = 'auto'
  
  // Position function - instant positioning without animation
  const performPosition = () => {
    const element = document.getElementById(id)
    if (!element) {
      return false
    }
    
    // Calculate element position relative to document
    const elementRect = element.getBoundingClientRect()
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY
    const elementTop = elementRect.top + currentScrollY
    
    // Calculate navbar offset dynamically
    const navbar = document.querySelector('[class*="fixed"][class*="z-[70]"]') as HTMLElement
    let navbarOffset = 80 // Base offset including padding
    if (navbar) {
      const navbarRect = navbar.getBoundingClientRect()
      navbarOffset = navbarRect.height + 16 // Navbar height + padding
    }
    
    // Calculate final scroll position
    const scrollPosition = Math.max(0, elementTop - navbarOffset)
    
    // Instantly position window without any animation
    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: 'auto'
    })
    
    // Verify and correct position after a frame if needed
    requestAnimationFrame(() => {
      const elementAfter = document.getElementById(id)
      if (elementAfter) {
        const elementRectAfter = elementAfter.getBoundingClientRect()
        const currentScrollYAfter = window.pageYOffset || document.documentElement.scrollTop || window.scrollY
        const elementTopAfter = elementRectAfter.top + currentScrollYAfter
        const expectedPosition = elementTopAfter - navbarOffset
        const currentPosition = currentScrollYAfter
        const difference = Math.abs(currentPosition - expectedPosition)
        if (difference > 10) {
          // If we're more than 10px off, correct it
          window.scrollTo({
            top: expectedPosition,
            left: 0,
            behavior: 'auto'
          })
        }
      }
      // Restore original scroll behavior
      html.style.scrollBehavior = originalScrollBehavior
    })
    
    return true
  }
  
  // Try to find and position immediately
  if (performPosition()) {
    return
  }

  // If not found, try via requestAnimationFrame with multiple attempts
  requestAnimationFrame(() => {
    if (!performPosition()) {
      // If still not found, wait and try multiple times
      const retryAttempts = [100, 200, 400, 600, 800, 1000, 1500]
      let attemptIndex = 0
      
      const retry = () => {
        if (attemptIndex < retryAttempts.length) {
          setTimeout(() => {
            if (performPosition()) {
              // Success, restore scroll behavior will happen in performPosition
            } else {
              attemptIndex++
              retry()
            }
          }, retryAttempts[attemptIndex])
        } else {
          // Restore original scroll behavior even if failed
          html.style.scrollBehavior = originalScrollBehavior
        }
      }
      
      retry()
    }
  })
}

