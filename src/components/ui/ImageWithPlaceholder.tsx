import { useState, useEffect, ImgHTMLAttributes } from 'react'

interface ImageWithPlaceholderProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError'> {
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt: string
  /** Container className for the wrapper div */
  containerClassName?: string
  /** Placeholder background color (default: #f5f5f5) */
  placeholderColor?: string
  /** Border radius class for placeholder (default: rounded-2xl) */
  placeholderRounded?: string
}

/**
 * Image component with gray placeholder background while loading.
 * 
 * Features:
 * - Shows gray placeholder background until image loads
 * - Resets loading state when src changes (important for accordion image switching)
 * - Smooth opacity transition when image appears
 * 
 * Usage:
 * ```tsx
 * <ImageWithPlaceholder
 *   src={imageSrc}
 *   alt="Description"
 *   className="w-full h-full object-cover rounded-2xl"
 *   containerClassName="aspect-square"
 * />
 * ```
 */
export default function ImageWithPlaceholder({
  src,
  alt,
  className = '',
  containerClassName = '',
  placeholderColor = '#f5f5f5',
  placeholderRounded = 'rounded-2xl',
  ...props
}: ImageWithPlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Reset loading state when src changes - critical for accordion image switching
  useEffect(() => {
    setIsLoading(true)
  }, [src])

  return (
    <div className={`relative ${containerClassName}`}>
      {/* Gray placeholder background */}
      {isLoading && (
        <div 
          className={`absolute inset-0 ${placeholderRounded}`}
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}

export type { ImageWithPlaceholderProps }
