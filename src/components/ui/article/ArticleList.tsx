import { ReactNode } from 'react'

interface ArticleListProps {
  children: ReactNode
  ordered?: boolean
}

/**
 * Article list component
 * Used for ordered and unordered lists within blog articles
 * Styled with proper spacing and markers
 */
export default function ArticleList({ children, ordered = false }: ArticleListProps) {
  const ListTag = ordered ? 'ol' : 'ul'
  const listStyle = ordered ? 'list-decimal' : 'list-disc'
  
  return (
    <ListTag className={`${listStyle} ml-6 space-y-2 font-normal leading-6 text-[#0a0a0a] text-base w-full`}>
      {children}
    </ListTag>
  )
}

