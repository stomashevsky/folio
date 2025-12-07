import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Component that handles scroll on every route change
 * Must be placed inside BrowserRouter
 * 
 * - Disables browser's automatic scroll restoration
 * - Scrolls to top instantly on route change (no smooth animation)
 * - If URL has a hash (#section-id), scrolls to that element instantly
 * - Respects restoreScroll state (e.g., returning to blog page via "Back to Blog")
 */
export default function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    // Skip if restoreScroll is set (e.g., returning to blog page via "Back to Blog" button)
    if (location.state?.restoreScroll) {
      return
    }
    
    // Temporarily disable smooth scrolling to ensure instant scroll
    const html = document.documentElement
    const originalScrollBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    
    // If URL has a hash, scroll to that element
    if (location.hash) {
      const id = location.hash.slice(1) // Remove the # prefix
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView()
      } else {
        // Element not found yet, try after DOM is ready
        requestAnimationFrame(() => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView()
          } else {
            window.scrollTo(0, 0)
          }
        })
      }
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0)
    }
    
    // Restore smooth scrolling after a frame
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalScrollBehavior
    })
  }, [location.pathname, location.hash, location.state])

  return null
}
