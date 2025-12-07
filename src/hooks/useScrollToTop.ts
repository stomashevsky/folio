import { useLayoutEffect } from 'react'

/**
 * Hook to scroll to top of the page on mount
 * Uses useLayoutEffect for instant scroll before paint (no visible animation)
 * Temporarily disables CSS smooth scrolling to ensure instant scroll
 * Useful for pages that should always start at the top when navigated to
 */
export function useScrollToTop() {
  useLayoutEffect(() => {
    // Temporarily disable smooth scrolling
    const html = document.documentElement
    const originalScrollBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    
    // Instant scroll without animation
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Restore smooth scrolling after a frame
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalScrollBehavior
    })
  }, [])
}
