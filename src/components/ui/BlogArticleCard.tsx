import { Link } from 'react-router-dom'
import type { BlogArticle } from '../../data/blogArticles'
import imagePlaceholder from '../../assets/images/image-placeholder.png'

interface BlogArticleCardProps {
  article: BlogArticle
  variant?: 'desktop' | 'mobile'
}

export default function BlogArticleCard({ article, variant = 'desktop' }: BlogArticleCardProps) {
  if (variant === 'mobile') {
    const articleContent = (
      <>
        <div className="flex flex-wrap gap-4 items-center leading-5 relative shrink-0 text-sm w-full">
          <p className="relative shrink-0 text-[#0a0a0a]">{article.category}</p>
          <p className="relative shrink-0 text-[#737373]">{article.date}</p>
        </div>
        <p className="font-semibold leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
          {article.title}
        </p>
        <p className="font-normal leading-5 relative shrink-0 text-sm text-[#0a0a0a] w-full whitespace-pre-wrap line-clamp-2 overflow-ellipsis overflow-hidden">
          {article.description}
        </p>
      </>
    )

    if (article.slug) {
      return (
        <Link
          to={`/blog/${article.slug}`}
          className="border-b border-[#e5e5e5] hover:border-neutral-400 flex flex-col gap-5 items-start px-0 py-6 relative shrink-0 w-full transition-colors duration-200 cursor-pointer"
        >
          {articleContent}
        </Link>
      )
    }

    return (
      <div className="border-b border-[#e5e5e5] flex flex-col gap-5 items-start px-0 py-6 relative shrink-0 w-full">
        {articleContent}
      </div>
    )
  }

  // Desktop variant - vertical card with image
  const articleContent = (
    <div className="flex flex-col gap-4 w-full">
      {/* Image - aspect ratio 1:1 with zoom on hover */}
      <div className="relative rounded-lg w-full aspect-square overflow-hidden">
        <img 
          src={article.image || imagePlaceholder} 
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover object-center rounded-lg transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-3 w-full">
        {/* Title */}
        <p className="font-semibold leading-6 text-base text-[#0a0a0a] w-full">
          {article.title}
        </p>
        
        {/* Metadata */}
        <div className="flex flex-wrap gap-4 items-center text-sm">
          <p className="text-[#0a0a0a]">{article.category}</p>
          <p className="text-[#737373]">{article.date}</p>
        </div>
      </div>
    </div>
  )

  if (article.slug) {
    return (
      <Link
        to={`/blog/${article.slug}`}
        className="group flex flex-col w-full cursor-pointer"
      >
        {articleContent}
      </Link>
    )
  }

  return (
    <div className="flex flex-col w-full">
      {articleContent}
    </div>
  )
}
