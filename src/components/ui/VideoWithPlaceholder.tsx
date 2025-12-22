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
}

/**
 * Video component with gray placeholder background while loading.
 * Shows a gray background until the video is ready to play.
 */
export default function VideoWithPlaceholder({
  src,
  className = '',
  containerClassName = '',
  placeholderColor = '#f5f5f5',
  placeholderRounded = 'rounded-2xl',
  ...props
}: VideoWithPlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const prevSrcRef = useRef<string>(src)

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
    <div className={`relative ${containerClassName}`}>
      {/* Gray placeholder background */}
      {isLoading && (
        <div
          className={`absolute inset-0 ${placeholderRounded}`}
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      <video
        ref={videoRef}
        src={src}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
        onLoadedData={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}

export type { VideoWithPlaceholderProps }
