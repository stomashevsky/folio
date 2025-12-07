import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Component that scrolls to top on every route change
 * Must be placed inside BrowserRouter
 * 
 * This disables browser's automatic scroll restoration and
 * ensures every page starts at the top (unless restoreScroll is set in location state)
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
    
    // Scroll to top instantly
    window.scrollTo(0, 0)
    
    // Restore smooth scrolling after a frame
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalScrollBehavior
    })
  }, [location.pathname, location.state])

  return null
}
