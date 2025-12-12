import { ReactNode } from 'react'

interface ArticleParagraphProps {
  children: ReactNode
}

/**
 * Article paragraph component
 * Used for body text within blog articles
 * Styled as 16px normal weight with proper line height
 */
export default function ArticleParagraph({ children }: ArticleParagraphProps) {
  return (
    <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
      {children}
    </p>
  )
}

