import React, { useId, ReactNode, isValidElement, cloneElement } from 'react'

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
  const labelId = useId()
  const hasError = error || !!errorMessage

  // Clone children to add accessibility attributes
  // Only clone if children is a valid React element
  // Preserve existing props and merge with new accessibility attributes
  const childrenWithProps = isValidElement(children)
    ? cloneElement(children, {
        ...children.props, // Preserve existing props
        'aria-labelledby': labelId,
        'aria-required': required ? 'true' : undefined,
        'aria-invalid': hasError ? 'true' : 'false',
        ...(errorMessage && { 'aria-describedby': errorId }),
      } as React.HTMLAttributes<HTMLElement>)
    : children

  return (
    <div className={`flex flex-col gap-2 items-start w-full ${className}`}>
      <label 
        id={labelId}
        className={`font-medium leading-5 text-sm text-[#0a0a0a] ${hasError ? 'text-[#dc2626]' : ''}`}
      >
        {label}
        {required && (
          <span className="text-[#dc2626] ml-1" aria-hidden="true">
            *
          </span>
        )}
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

