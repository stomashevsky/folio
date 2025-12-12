import { ReactNode } from 'react'

interface ArticleH2Props {
  children: ReactNode
}

/**
 * Article H2 heading component
 * Used for section headings within blog articles
 * Styled as 30px semibold with top padding
 */
export default function ArticleH2({ children }: ArticleH2Props) {
  return (
    <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
      {children}
    </h2>
  )
}

