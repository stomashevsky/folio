/**
 * Skip to main content link for accessibility
 * Provides keyboard navigation users a way to skip to main content
 * Uses focus: instead of focus-visible: so it's visible for screen reader users
 */

interface SkipToContentLinkProps {
  /**
   * Target section ID to skip to (without #)
   * @default 'hero'
   */
  targetId?: string
}

export default function SkipToContentLink({ targetId = 'hero' }: SkipToContentLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#171717] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#a3a3a3] focus:ring-offset-2 focus:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]`}
    >
      Skip to main content
    </a>
  )
}

