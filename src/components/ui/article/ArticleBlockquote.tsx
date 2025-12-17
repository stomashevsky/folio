import { ReactNode } from 'react'

interface ArticleBlockquoteProps {
  children: ReactNode
}

/**
 * Article blockquote component
 * Used for quotes within blog articles
 * Styled with left border and italic text
 */
export default function ArticleBlockquote({ children }: ArticleBlockquoteProps) {
  return (
    <div className="border-l-2 border-[#e5e5e5] pl-6 pr-0 py-0 relative shrink-0 w-full">
      <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full italic">
        {children}
      </p>
    </div>
  )
}

