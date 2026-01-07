import { useState, useEffect, useRef, VideoHTMLAttributes } from 'react'

interface VideoWithPlaceholderProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'onLoadedData' | 'onError'> {
  /** Video source URL */
  src: string
  /** Container className for the wrapper div */
  containerClassName?: string
  /** Placeholder background color (default: #f5f5f5) */
  placeholderColor?: string
  /** Border radius class for placeholder (default: rounded-2xl) */
  placeholderRounded?: string
  /** Lazy load video (default: true) - defers loading until visible in viewport */
  lazy?: boolean
}

/**
 * Video component with gray placeholder background while loading.
 * Shows a gray background until the video is ready to play.
 * Supports lazy loading via IntersectionObserver for better performance.
 */
export default function VideoWithPlaceholder({
  src,
  className = '',
  containerClassName = '',
  placeholderColor = '#f5f5f5',
  placeholderRounded = 'rounded-2xl',
  lazy = true,
  ...props
}: VideoWithPlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(!lazy)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const prevSrcRef = useRef<string>(src)

  // Lazy loading via IntersectionObserver (with fallback for older browsers)
  useEffect(() => {
    if (!lazy) {
      setIsVisible(true)
      return
    }

    const container = containerRef.current
    if (!container) return

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '200px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [lazy])

  // Check if video is already loaded on mount (hydration case)
  useEffect(() => {
    const video = videoRef.current
    if (video && video.readyState >= 2) {
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
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      {/* Gray placeholder background */}
      {isLoading && (
        <div
          className={`absolute inset-0 ${placeholderRounded}`}
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
          onLoadedData={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          {...props}
        />
      )}
    </div>
  )
}

export type { VideoWithPlaceholderProps }
