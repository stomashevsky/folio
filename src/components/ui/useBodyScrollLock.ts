import { useEffect, useRef } from 'react'

/**
 * Hook to lock/unlock body scroll when modal is open
 * 
 * Prevents background scrolling when a modal is open by setting `overflow: hidden` on the body.
 * Preserves the original overflow value and restores it when unlocked.
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
  const originalOverflowRef = useRef<string | null>(null)

  useEffect(() => {
    if (isLocked) {
      // Save the current overflow value if not already saved
      // Only save if overflow is not already 'hidden' (for nested modals)
      if (originalOverflowRef.current === null) {
        const currentOverflow = document.body.style.overflow || ''
        // If overflow is already hidden, it means another modal is open
        // In that case, we don't need to save/restore
        if (currentOverflow !== 'hidden') {
          originalOverflowRef.current = currentOverflow
        }
      }
      // Lock the scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore the original overflow value only if we saved one
      if (originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current
        originalOverflowRef.current = null
      }
    }

    // Cleanup function
    return () => {
      if (isLocked && originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current
        originalOverflowRef.current = null
      }
    }
  }, [isLocked])
}

