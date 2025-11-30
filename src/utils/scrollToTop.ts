/**
 * Utility for scrolling to the top of the page
 * Guarantees scroll unlock and smoothly scrolls to top
 */
export function scrollToTop() {
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
  
  // Try multiple scroll methods for maximum compatibility
  try {
    // Method 1: window.scrollTo (most standard)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } catch (error) {
    // Silently handle scroll errors in production
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn('Error with window.scrollTo:', error)
    }
  }
  
  // Method 2: Direct assignment (fallback for older browsers)
  try {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  } catch (error) {
    // Silently handle scroll errors in production
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn('Error with direct scroll assignment:', error)
    }
  }
  
  // Method 3: Using requestAnimationFrame for smooth animation
  requestAnimationFrame(() => {
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      // Also set directly as fallback
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    } catch (error) {
      // Silently handle scroll errors in production
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.warn('Error with requestAnimationFrame scroll:', error)
      }
    }
  })
}

