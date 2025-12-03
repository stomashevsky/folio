/**
 * Constants for modal windows
 * 
 * Responsive behavior strategy:
 * 
 * Mobile (< 768px):
 * - Modal appears from bottom of screen (items-end)
 * - Takes full width (w-full)
 * - Rounded only on top (rounded-t-2xl)
 * - Max height 90vh
 * - No container padding (p-0)
 * - Divider visible before footer
 * - Content in single column
 * 
 * Desktop (>= 768px):
 * - Modal is centered (items-center)
 * - Padding around container (p-4)
 * - Rounded on all sides (rounded-2xl)
 * - Max width depends on size (400px or 740px)
 * - Max height calc(100vh - 2rem)
 * - Divider hidden
 * - Content can be in two columns (if two-column layout is used)
 */

export const MODAL_SIZES = {
  small: '400px',
  large: '740px',
} as const

export type ModalSize = keyof typeof MODAL_SIZES

export const MODAL_COLORS = {
  overlay: '#0a0a0a',
  overlayOpacity: 0.3,
  border: '#e5e5e5',
  textPrimary: '#0a0a0a',
  textSecondary: '#737373',
  background: '#ffffff',
} as const

export const MODAL_Z_INDEX = 50

export const MODAL_SPACING = {
  paddingMobile: '1rem', // p-4
  paddingDesktop: '1.5rem', // p-6
  gap: '2.5rem', // gap-10
  footerGap: '0.75rem', // gap-3
} as const

export const MODAL_BORDER_RADIUS = {
  mobile: '1rem', // rounded-t-2xl
  desktop: '1rem', // rounded-2xl
} as const

export const MODAL_MAX_HEIGHT = {
  mobile: '90vh',
  desktop: 'calc(100vh - 2rem)',
} as const

/**
 * Responsive classes for modals
 * All media conditions for mobile/desktop are collected here for a single point of control
 */
export const MODAL_RESPONSIVE_CLASSES = {
  // Modal container (wrapper)
  container: {
    // Positioning: fixed relative to viewport, bottom on mobile, centered on desktop
    // Padding: none on mobile, present on desktop
    // High z-index to appear above all content
    base: 'fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden',
  },
  // Modal window
  modal: {
    // Border radius: top only on mobile, all sides on desktop
    // Sizes: full width on mobile, limited on desktop
    // Height: 90vh on mobile, calc(100vh - 2rem) on desktop
    base: 'relative bg-white border border-[#e5e5e5] border-solid rounded-t-2xl md:rounded-2xl w-full max-w-full flex flex-col',
    maxHeight: 'max-h-[90vh] md:max-h-[calc(100vh-2rem)]',
    // Max width depending on size (desktop only)
    maxWidth: {
      small: 'md:max-w-[400px]',
      large: 'md:max-w-[740px]',
    },
  },
  // Modal content
  content: {
    // Padding: less on mobile, more on desktop
    wrapper: 'flex flex-col gap-10 p-4 md:p-6 w-full',
    // Wrapper without icon (title prop used): 32px top padding
    wrapperWithoutIcon: 'flex flex-col gap-10 pt-8 pb-4 px-4 md:pt-8 md:pb-6 md:px-6 w-full',
    // Wrapper with icon (custom header in children): uniform padding
    wrapperWithIcon: 'flex flex-col gap-10 p-4 md:p-6 w-full',
  },
  // Divider before footer
  divider: {
    // Visible only on mobile when content is scrollable
    base: 'border-t border-[#e5e5e5] md:hidden',
  },
  // Footer
  footer: {
    // Padding: less on mobile, more on desktop
    base: 'flex flex-row gap-3 items-start w-full p-4 md:p-6',
  },
} as const

/**
 * Class for two-column content layout in modals
 * Used in modals with many fields
 * Mobile: single column (flex-col)
 * Desktop: two columns (flex-row) with large gap
 */
export const MODAL_TWO_COLUMN_LAYOUT = 'flex flex-col md:flex-row gap-4 md:gap-12 items-start w-full'

