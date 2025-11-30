import { useCallback } from 'react'

/**
 * Hook for handling default value restoration on blur
 * Used in input fields where default value should be restored if field is empty
 */
export function useInputDefaultValue(defaultValue: string) {
  return useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === '') {
      e.target.value = defaultValue
    }
  }, [defaultValue])
}

