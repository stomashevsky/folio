/**
 * Constants for input styles
 * Used for standardizing the appearance of input fields
 */

/**
 * Base classes for inputs
 * Standard input field style used in all forms
 */
export const INPUT_BASE_CLASSES = 'bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]'

/**
 * Classes for input focus states
 * Used in TextInput and DateInput components
 */
export const INPUT_FOCUS_CLASSES = {
  default: 'focus:border-[#a3a3a3] focus:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] focus-visible:border-[#a3a3a3] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]',
  error: 'focus:border-[#dc2626] focus:shadow-[0px_0px_0px_3px_rgba(220,38,38,0.5)] focus-visible:border-[#dc2626] focus-visible:shadow-[0px_0px_0px_3px_rgba(220,38,38,0.5)]',
}

/**
 * Base classes for focus states
 * Used for transition and outline
 */
export const INPUT_BASE_FOCUS_STYLES = 'outline-none focus-visible:outline-none transition-all duration-150'

