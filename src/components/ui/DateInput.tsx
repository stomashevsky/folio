import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { INPUT_BASE_FOCUS_STYLES, INPUT_FOCUS_CLASSES } from './inputStyles'

interface DateInputProps {
  defaultValue?: string
  value?: string
  className?: string
  onChange?: (value: string) => void
  onBlur?: (isValid: boolean) => void
  disabled?: boolean
  error?: boolean
  onValidationChange?: (isValid: boolean, errorMessage?: string) => void
}

export default function DateInput({ 
  defaultValue = '', 
  value: controlledValue,
  className = '',
  onChange,
  onBlur,
  disabled = false,
  error = false,
  onValidationChange
}: DateInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const isValidDate = (dateString: string): { isValid: boolean; errorMessage?: string } => {
    if (!dateString || dateString.trim() === '') {
      return { isValid: false, errorMessage: 'Date is required' }
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
      return { isValid: false, errorMessage: 'Invalid date format. Use DD/MM/YYYY' }
    }
    const [day, month, year] = dateString.split('/').map(Number)
    const date = new Date(year, month - 1, day)
    const isValid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
    
    if (!isValid) {
      return { isValid: false, errorMessage: 'Invalid date. Please check day, month, and year' }
    }
    
    // Check if date is in the future (optional validation)
    if (date > new Date()) {
      return { isValid: false, errorMessage: 'Date cannot be in the future' }
    }
    
    return { isValid: true }
  }

  const handleAccept = (val: string) => {
    if (!isControlled) {
      setInternalValue(val)
    }
    onChange?.(val)
    
    // Validate on change
    const validation = isValidDate(val)
    onValidationChange?.(validation.isValid, validation.errorMessage)
  }

  const handleBlur = () => {
    const validation = isValidDate(value)
    
    if (!isControlled && !validation.isValid && defaultValue) {
      setInternalValue(defaultValue)
    }
    
    onBlur?.(validation.isValid)
    onValidationChange?.(validation.isValid, validation.errorMessage)
  }

  const focusStyles = error ? INPUT_FOCUS_CLASSES.error : INPUT_FOCUS_CLASSES.default
  const validation = isValidDate(value)
  const hasError = error || (!validation.isValid && value !== '' && value !== defaultValue)

  return (
    <IMaskInput
      mask="00/00/0000"
      value={value}
      onAccept={handleAccept}
      onBlur={handleBlur}
      placeholder="DD/MM/YYYY"
      className={`${INPUT_BASE_FOCUS_STYLES} ${className} ${hasError ? INPUT_FOCUS_CLASSES.error : focusStyles}`}
      disabled={disabled}
      aria-invalid={hasError ? 'true' : 'false'}
    />
  )
}

