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
  return (
    <figure className="my-8 w-full">
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-xl mx-auto ${className}`}
        style={{
          // On mobile: 100% of container (which respects px-6 padding)
          // On larger screens: expand up to 1200px, breaking out of 768px container
          width: 'min(1200px, calc(100vw - 48px))',
          maxWidth: 'min(1200px, calc(100vw - 48px))',
          // Center the image by using negative margin to offset the expansion
          // marginLeft calculation: pull left by half of the expansion amount
          marginLeft: 'calc((100% - min(1200px, calc(100vw - 48px))) / 2)',
        }}
      />
    </figure>
  )
}

export type { ArticleImageProps }
