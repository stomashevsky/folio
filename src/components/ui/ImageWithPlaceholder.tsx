import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react'

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
  /** Enable fade-in animation on mount (for accordion image switching) */
  animateOnMount?: boolean
}

/**
 * Image component with gray placeholder background while loading.
 * 
 * Features:
 * - Shows gray placeholder background until image loads
 * - Resets loading state when src changes (important for accordion image switching)
 * - Smooth fade-in animation when image appears
 * - Optional animate-on-mount for accordion-style image switching (use with key prop)
 * 
 * Usage:
 * ```tsx
 * <ImageWithPlaceholder
 *   src={imageSrc}
 *   alt="Description"
 *   className="w-full h-full object-cover rounded-2xl"
 *   containerClassName="aspect-square"
 *   animateOnMount // Enable fade-in animation on mount
 *   key={imageId} // Use key to trigger re-mount and animation
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
  animateOnMount = false,
  loading = 'lazy',
  ...props
}: ImageWithPlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)
  const prevSrcRef = useRef<string>(src)

  // Check if image is already loaded on mount (hydration case)
  // When React hydrates prerendered HTML, the image may already be loaded
  // but onLoad won't fire again, leaving the image invisible
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth > 0) {
      setIsLoading(false)
    }
  }, [])

  // Reset loading state when src changes - critical for accordion image switching
  // Skip on initial mount to allow hydration check to work
  useEffect(() => {
    if (prevSrcRef.current !== src) {
      setIsLoading(true)
      prevSrcRef.current = src
    }
  }, [src])

  // Determine animation class based on loading state and animateOnMount prop
  const animationClass = animateOnMount 
    ? (isLoading ? 'opacity-0' : 'animate-fade-in')
    : (isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-200')

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
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        className={`${className} ${animationClass}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}

export type { ImageWithPlaceholderProps }
