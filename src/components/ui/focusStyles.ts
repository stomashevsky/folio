/**
 * Centralized focus styles for consistent focus ring appearance across all interactive elements
 * 
 * All interactive elements should use these styles to ensure:
 * - Consistent gray color (#a3a3a3)
 * - Consistent rounded corners (rounded-md)
 * - Consistent ring width (ring-2) and offset (ring-offset-2)
 * - Consistent shadow for better visibility
 */

/**
 * Base focus styles for all interactive elements
 * Applied using focus-visible: to only show on keyboard navigation
 */
export const FOCUS_BASE_CLASSES = 'outline-none focus-visible:outline-none transition-all'

/**
 * Standard focus ring styles for buttons, links, and interactive elements
 * Gray ring with rounded corners and shadow
 */
export const FOCUS_RING_CLASSES = 'focus-visible:ring-2 focus-visible:ring-[#a3a3a3] focus-visible:ring-offset-2 focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]'

/**
 * Combined focus styles for interactive elements
 * Use this for buttons, cards, links, and other clickable elements
 */
export const FOCUS_STYLES = `${FOCUS_BASE_CLASSES} ${FOCUS_RING_CLASSES}`

/**
 * Focus styles for elements with borders (like inputs)
 * Includes border color change on focus
 */
export const FOCUS_BORDER_CLASSES = 'focus-visible:border-[#a3a3a3] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]'

/**
 * Combined focus styles for elements with borders
 * Use this for inputs and similar elements with borders
 */
export const FOCUS_WITH_BORDER_STYLES = `${FOCUS_BASE_CLASSES} ${FOCUS_BORDER_CLASSES}`

