import React, { useId, ReactNode } from 'react'

export interface FormFieldProps {
  label: string
  children: ReactNode
  required?: boolean
  error?: boolean
  errorMessage?: string
  className?: string
}

/**
 * Form field component for standardizing form inputs
 * Combines label and input in a unified structure with common styles
 * Supports error messages and accessibility attributes
 */
export default function FormField({ 
  label, 
  children, 
  required = false, 
  error = false,
  errorMessage,
  className = ''
}: FormFieldProps) {
  const errorId = useId()
  const hasError = error || !!errorMessage

  // Clone children to add aria-describedby if errorMessage exists
  const childrenWithProps = errorMessage 
    ? React.cloneElement(children as React.ReactElement, {
        'aria-describedby': errorId,
        'aria-invalid': hasError ? 'true' : 'false'
      })
    : children

  return (
    <div className={`flex flex-col gap-2 items-start w-full ${className}`}>
      <label className={`font-medium leading-5 text-sm text-[#0a0a0a] ${hasError ? 'text-[#dc2626]' : ''}`}>
        {label}
        {required && <span className="text-[#dc2626] ml-1" aria-label="required">*</span>}
      </label>
      <div className="w-full">
        {childrenWithProps}
      </div>
      {errorMessage && (
        <p 
          id={errorId}
          role="alert"
          aria-live="polite"
          className="font-normal leading-5 text-sm text-[#dc2626] w-full"
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
}

