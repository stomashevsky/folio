import { useLayoutEffect } from 'react'

/**
 * Hook to scroll to top of the page on mount
 * Uses useLayoutEffect for instant scroll before paint (no visible animation)
 * Useful for pages that should always start at the top when navigated to
 */
export function useScrollToTop() {
  useLayoutEffect(() => {
    // Instant scroll without animation
    window.scrollTo(0, 0)
    // Fallback methods for older browsers
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])
}
