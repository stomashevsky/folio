/**
 * Utilities for saving and restoring blog page scroll position
 */

const BLOG_SCROLL_KEY = 'blogScrollPosition'

/**
 * Save current scroll position to sessionStorage
 */
export function saveBlogScrollPosition() {
  const scrollY = window.scrollY || document.documentElement.scrollTop
  sessionStorage.setItem(BLOG_SCROLL_KEY, String(scrollY))
}

/**
 * Restore saved scroll position and clear it from storage
 * Returns true if position was restored, false otherwise
 */
export function restoreBlogScrollPosition(): boolean {
  const saved = sessionStorage.getItem(BLOG_SCROLL_KEY)
  if (saved !== null) {
    const scrollY = parseInt(saved, 10)
    sessionStorage.removeItem(BLOG_SCROLL_KEY)
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY)
    })
    return true
  }
  return false
}

/**
 * Clear saved scroll position without restoring
 */
export function clearBlogScrollPosition() {
  sessionStorage.removeItem(BLOG_SCROLL_KEY)
}
