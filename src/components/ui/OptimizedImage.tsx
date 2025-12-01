import { ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string
  alt: string
  srcSet?: string
  sizes?: string
  webpSrc?: string
  webpSrcSet?: string
  fallbackSrc?: string
}

/**
 * Optimized image component with WebP support and responsive images
 * 
 * This component provides enhanced image optimization features:
 * - WebP format support with automatic fallback
 * - Responsive images via srcset and sizes attributes
 * - Lazy loading by default (can be overridden)
 * - Standard img attributes support
 * 
 * Usage example:
 * ```tsx
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   webpSrc="/images/hero.webp"
 *   alt="Hero image"
 *   loading="eager"
 *   fetchPriority="high"
 * />
 * ```
 * 
 * For responsive images:
 * ```tsx
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   srcSet="/images/hero-400.jpg 400w, /images/hero-800.jpg 800w"
 *   sizes="(max-width: 768px) 100vw, 50vw"
 *   alt="Responsive hero"
 * />
 * ```
 * 
 * @param src - Primary image source (required)
 * @param alt - Alt text for accessibility (required)
 * @param srcSet - Responsive image srcset (optional)
 * @param sizes - Sizes attribute for responsive images (optional)
 * @param webpSrc - WebP version of the image (optional)
 * @param webpSrcSet - WebP srcset for responsive images (optional)
 * @param fallbackSrc - Fallback image if WebP is not supported (optional, defaults to src)
 * @param loading - Loading strategy: 'lazy' (default) or 'eager'
 * @param className - Additional CSS classes
 * @param props - All other standard img attributes are supported
 * 
 * @example
 * // Simple usage with WebP fallback
 * <OptimizedImage src="/image.jpg" webpSrc="/image.webp" alt="Description" />
 * 
 * @example
 * // Responsive images
 * <OptimizedImage
 *   src="/image.jpg"
 *   srcSet="/image-400.jpg 400w, /image-800.jpg 800w"
 *   sizes="(max-width: 768px) 100vw, 50vw"
 *   alt="Description"
 * />
 */
export default function OptimizedImage({
  src,
  alt,
  srcSet,
  sizes,
  webpSrc,
  webpSrcSet,
  fallbackSrc,
  className = '',
  loading = 'lazy',
  ...props
}: OptimizedImageProps) {
  // If WebP is provided, use picture element with fallback
  if (webpSrc || webpSrcSet) {
    return (
      <picture>
        {/* WebP source */}
        {(webpSrc || webpSrcSet) && (
          <source
            type="image/webp"
            srcSet={webpSrcSet || webpSrc}
            sizes={sizes}
          />
        )}
        {/* Fallback image */}
        <img
          src={fallbackSrc || src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={className}
          loading={loading}
          {...props}
        />
      </picture>
    )
  }

  // Standard img with srcset support
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={loading}
      {...props}
    />
  )
}

