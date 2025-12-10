/**
 * Utilities for saving and restoring blog page scroll position
 */

const BLOG_SCROLL_KEY = 'blogScrollPosition'
const BLOG_PAGE_STATE_KEY = 'blogPageState'
const BLOG_RESTORE_FLAG_KEY = 'blogRestoreScroll'

/**
 * Save current scroll position to sessionStorage
 */
export function saveBlogScrollPosition() {
  const scrollY = window.scrollY || document.documentElement.scrollTop
  sessionStorage.setItem(BLOG_SCROLL_KEY, String(scrollY))
}

interface BlogPageState {
  scrollY: number
  displayedArticles: number
  selectedCategory: string
}

/**
 * Save full blog page state (scroll + UI state)
 */
export function saveBlogPageState(scrollY: number, displayedArticles: number, selectedCategory: string) {
  const state: BlogPageState = { scrollY, displayedArticles, selectedCategory }
  sessionStorage.setItem(BLOG_PAGE_STATE_KEY, JSON.stringify(state))
  // Set flag to prevent ScrollToTop from resetting scroll
  sessionStorage.setItem(BLOG_RESTORE_FLAG_KEY, 'true')
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
 * Restore blog page state (scroll + UI state).
 * Does NOT remove saved state - call clearBlogPageState() after restoring scroll.
 */
export function restoreBlogPageState(): BlogPageState | null {
  const saved = sessionStorage.getItem(BLOG_PAGE_STATE_KEY)
  if (!saved) return null

  try {
    const parsed = JSON.parse(saved) as Partial<BlogPageState>
    // Don't remove state yet - it will be removed after scroll is restored
    if (
      typeof parsed.scrollY === 'number' &&
      typeof parsed.displayedArticles === 'number' &&
      typeof parsed.selectedCategory === 'string'
    ) {
      return {
        scrollY: parsed.scrollY,
        displayedArticles: parsed.displayedArticles,
        selectedCategory: parsed.selectedCategory
      }
    }
  } catch (error) {
    // On error, clean up
    sessionStorage.removeItem(BLOG_PAGE_STATE_KEY)
    sessionStorage.removeItem(BLOG_RESTORE_FLAG_KEY)
    return null
  }

  return null
}

/**
 * Check if blog scroll restoration is in progress
 */
export function isBlogScrollRestoring(): boolean {
  return sessionStorage.getItem(BLOG_RESTORE_FLAG_KEY) === 'true'
}

/**
 * Clear saved blog page state without restoring.
 */
export function clearBlogPageState() {
  sessionStorage.removeItem(BLOG_PAGE_STATE_KEY)
  sessionStorage.removeItem(BLOG_RESTORE_FLAG_KEY)
}

/**
 * Clear saved scroll position without restoring
 */
export function clearBlogScrollPosition() {
  sessionStorage.removeItem(BLOG_SCROLL_KEY)
}
