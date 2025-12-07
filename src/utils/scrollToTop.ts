/**
 * Utility for scrolling to the top of the page instantly
 * Guarantees scroll unlock and scrolls to top without animation
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
  
  // Temporarily disable smooth scrolling from CSS
  const html = document.documentElement
  const originalScrollBehavior = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  
  // Instant scroll to top
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
  
  // Restore original scroll behavior
  requestAnimationFrame(() => {
    html.style.scrollBehavior = originalScrollBehavior
  })
}

