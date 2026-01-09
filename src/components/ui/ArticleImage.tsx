import { useState, useEffect, useRef } from 'react'

interface ArticleImageProps {
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt: string
  /** Optional additional CSS classes */
  className?: string
}

/**
 * Wide image component for blog articles.
 * Breaks out of the 768px text container to display at max 1200px width.
 * Follows OpenAI blog design pattern with wider images than text content.
 * 
 * Technical notes:
 * - Text container: max-w-[768px] with px-6 padding
 * - Image max width: 1200px
 * - Expansion on each side: (1200 - 768) / 2 = 216px
 * - On mobile: stays within viewport with 24px padding on each side
 * - Shows gray placeholder while loading
 * 
 * Usage:
 * ```tsx
 * <ArticleImage 
 *   src={imageSrc} 
 *   alt="Description of the image"
 * />
 * ```
 */
export default function ArticleImage({ src, alt, className = '' }: ArticleImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)
  const prevSrcRef = useRef<string>(src)

  // Check if image is already loaded on mount (hydration case)
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth > 0) {
      setIsLoading(false)
    }
  }, [])

  // Reset loading state when src changes - skip on initial mount
  useEffect(() => {
    if (prevSrcRef.current !== src) {
      setIsLoading(true)
      prevSrcRef.current = src
    }
  }, [src])

  return (
    <figure 
      className="my-8 w-full"
      style={{
        // On mobile: 100% of container (which respects px-6 padding)
        // On larger screens: expand up to 1200px, breaking out of 768px container
        width: 'min(1200px, calc(100vw - 48px))',
        maxWidth: 'min(1200px, calc(100vw - 48px))',
        // Center the image by using negative margin to offset the expansion
        // marginLeft calculation: pull left by half of the expansion amount
        marginLeft: 'calc((100% - min(1200px, calc(100vw - 48px))) / 2)',
      }}
    >
      <div className="relative w-full rounded-xl overflow-hidden bg-[#f5f5f5]" style={{ aspectRatio: '3/2' }}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>
    </figure>
  )
}

export type { ArticleImageProps }
