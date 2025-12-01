import { useEffect, useRef, RefObject } from 'react'

const FOCUSABLE_SELECTORS = [
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

/**
 * Check if an element is still in the DOM
 * 
 * @param element - The element to check
 * @returns True if the element exists and is in the DOM
 */
function isElementInDOM(element: HTMLElement | null): boolean {
  if (!element) return false
  return document.body.contains(element)
}

/**
 * Check if an element can receive focus
 * 
 * An element can receive focus if it:
 * - Exists and is in the DOM
 * - Is not disabled
 * - Is not hidden
 * - Does not have aria-hidden="true"
 * 
 * @param element - The element to check
 * @returns True if the element can receive focus
 */
function canReceiveFocus(element: HTMLElement): boolean {
  if (!isElementInDOM(element)) return false
  if (element.hasAttribute('disabled')) return false
  if (element.hasAttribute('hidden')) return false
  if (element.getAttribute('aria-hidden') === 'true') return false
  return true
}

/**
 * Hook to trap focus within a container element
 * 
 * Implements keyboard focus trapping for accessibility, commonly used in modals.
 * When active, Tab and Shift+Tab keys will cycle focus within the container,
 * preventing focus from escaping to elements outside.
 * 
 * Features:
 * - Traps Tab navigation within the container
 * - Restores focus to the previously focused element when deactivated
 * - Handles edge cases: disabled elements, removed elements, empty containers
 * - Filters out non-focusable elements (disabled, hidden, aria-hidden)
 * 
 * @template T - The type of HTML element to trap focus in
 * @param isActive - Whether the focus trap should be active
 * @returns A ref object that should be attached to the container element
 * 
 * @example
 * ```tsx
 * function Modal({ isOpen }: { isOpen: boolean }) {
 *   const modalRef = useFocusTrap<HTMLDivElement>(isOpen)
 *   
 *   return isOpen ? (
 *     <div ref={modalRef}>
 *       <button>First</button>
 *       <button>Second</button>
 *     </div>
 *   ) : null
 * }
 * ```
 */
export function useFocusTrap<T extends HTMLElement>(isActive: boolean): RefObject<T> {
  const containerRef = useRef<T | null>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isActive) return

    // Store the previously focused element, but only if it's a valid HTMLElement
    const currentActiveElement = document.activeElement
    if (currentActiveElement instanceof HTMLElement && isElementInDOM(currentActiveElement)) {
      previousActiveElement.current = currentActiveElement
    } else {
      previousActiveElement.current = null
    }

    const container = containerRef.current
    if (!container) return

    // Get all focusable elements inside the container, filtering out disabled/hidden ones
    const getFocusableElements = (): HTMLElement[] => {
      const elements = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS))
      return elements.filter(canReceiveFocus)
    }

    // Check if an element is inside the container
    const isElementInsideContainer = (element: HTMLElement | null): boolean => {
      if (!element || !isElementInDOM(element)) return false
      return container.contains(element)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = getFocusableElements()
      
      // If no focusable elements, prevent default tab behavior
      if (focusableElements.length === 0) {
        e.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      // Type guard: ensure activeElement is HTMLElement
      if (!(activeElement instanceof HTMLElement)) {
        // If no valid active element, focus first element
        e.preventDefault()
        firstElement?.focus()
        return
      }

      // If focus is outside the container, redirect to first/last element
      if (!isElementInsideContainer(activeElement)) {
        e.preventDefault()
        const targetElement = e.shiftKey ? lastElement : firstElement
        if (targetElement && canReceiveFocus(targetElement)) {
          targetElement.focus()
        }
        return
      }

      // Handle Tab navigation inside the container
      if (e.shiftKey) {
        // Shift + Tab (backwards)
        if (activeElement === firstElement) {
          e.preventDefault()
          if (lastElement && canReceiveFocus(lastElement)) {
            lastElement.focus()
          }
        }
      } else {
        // Tab (forwards)
        if (activeElement === lastElement) {
          e.preventDefault()
          if (firstElement && canReceiveFocus(firstElement)) {
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      // Restore focus to the previously focused element if it still exists in DOM
      if (previousActiveElement.current && isElementInDOM(previousActiveElement.current)) {
        try {
          previousActiveElement.current.focus()
        } catch (error) {
          // Element might not be focusable, ignore error
          console.warn('Failed to restore focus:', error)
        }
      }
    }
  }, [isActive])

  return containerRef as RefObject<T>
}

