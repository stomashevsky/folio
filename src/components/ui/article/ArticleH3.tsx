import { ReactNode } from 'react'

interface ArticleH3Props {
  children: ReactNode
}

/**
 * Article H3 heading component
 * Used for subsection headings within blog articles and legal pages
 * Styled as 24px semibold with top padding
 */
export default function ArticleH3({ children }: ArticleH3Props) {
  return (
    <h3 className="pt-6 pb-0 px-0 font-semibold leading-8 text-[24px] text-[#0a0a0a] relative shrink-0 w-full">
      {children}
    </h3>
  )
}
