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
 * Supports srcset for responsive images and WebP format with fallback
 * 
 * @param src - Primary image source (required)
 * @param alt - Alt text for accessibility (required)
 * @param srcSet - Responsive image srcset (optional)
 * @param sizes - Sizes attribute for responsive images (optional)
 * @param webpSrc - WebP version of the image (optional)
 * @param webpSrcSet - WebP srcset for responsive images (optional)
 * @param fallbackSrc - Fallback image if WebP is not supported (optional, defaults to src)
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

