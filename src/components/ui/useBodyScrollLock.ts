import { useEffect, useRef } from 'react'

/**
 * Hook to lock/unlock body scroll when modal/menu is open
 * 
 * Prevents background scrolling when a modal is open by setting `position: fixed` on the body.
 * This approach works reliably on iOS Safari and other mobile browsers where `overflow: hidden`
 * alone is not sufficient.
 * 
 * Preserves the scroll position and restores it when unlocked.
 * Handles nested modals correctly by only saving/restoring when necessary.
 * 
 * @param isLocked - Whether to lock the body scroll (true) or unlock it (false)
 * 
 * @example
 * ```tsx
 * function Modal({ isOpen }: { isOpen: boolean }) {
 *   useBodyScrollLock(isOpen)
 *   return isOpen ? <div>Modal content</div> : null
 * }
 * ```
 */
export function useBodyScrollLock(isLocked: boolean) {
  const scrollPositionRef = useRef<number>(0)
  const isLockedRef = useRef<boolean>(false)

  useEffect(() => {
    if (isLocked && !isLockedRef.current) {
      // Save the current scroll position
      scrollPositionRef.current = window.scrollY
      
      // Lock the scroll using position: fixed approach for iOS Safari compatibility
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      
      isLockedRef.current = true
    } else if (!isLocked && isLockedRef.current) {
      // Unlock and restore scroll position
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      
      // Restore scroll position
      window.scrollTo(0, scrollPositionRef.current)
      
      isLockedRef.current = false
    }

    // Cleanup function
    return () => {
      if (isLockedRef.current) {
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollPositionRef.current)
        isLockedRef.current = false
      }
    }
  }, [isLocked])
}

