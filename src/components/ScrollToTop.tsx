import { useLayoutEffect, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { isBlogScrollRestoring, restoreBlogPageState, clearBlogPageState } from '../utils/blogScrollPosition'

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
    // Clear blog state if navigating away from any blog-related route
    if (!location.pathname.startsWith('/blog') && isBlogScrollRestoring()) {
      clearBlogPageState()
    }

    // Skip scroll-to-top if on /blog and have saved state (returning via "Back to Blog" button or browser back)
    const hasBlogSavedState = location.pathname === '/blog' && sessionStorage.getItem('blogPageState') !== null
    if (location.state?.restoreScroll || hasBlogSavedState) {
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

  // Handle blog scroll restoration separately
  useEffect(() => {
    // Check if we have saved state
    const hasSavedState = sessionStorage.getItem('blogPageState') !== null
    
    // Restore scroll if on /blog and have saved state (works for both "Back to blog" button and browser back button)
    const shouldRestore = location.pathname === '/blog' && hasSavedState
    
    if (shouldRestore) {
      let attempts = 0
      const maxAttempts = 20 // 1 second total
      
      // Wait for articles to render, then restore scroll
      const checkAndRestore = () => {
        const savedState = restoreBlogPageState()
        if (!savedState) {
          return
        }
        
        if (typeof savedState.scrollY !== 'number' || typeof savedState.displayedArticles !== 'number') {
          clearBlogPageState()
          return
        }
        
        // Check if enough articles are rendered by checking DOM
        const articleElements = document.querySelectorAll('[data-blog-article]')
        if (articleElements.length >= savedState.displayedArticles) {
          // Additional small delay to ensure layout is stable
          requestAnimationFrame(() => {
            window.scrollTo({ top: savedState.scrollY, behavior: 'auto' })
            clearBlogPageState()
          })
        } else {
          // Retry after a short delay
          attempts++
          if (attempts < maxAttempts) {
            setTimeout(checkAndRestore, 50)
          } else {
            // Give up and clear state
            clearBlogPageState()
          }
        }
      }
      
      // Start checking after initial render
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          checkAndRestore()
        })
      })
    }
  }, [location.pathname, location.state])

  return null
}
