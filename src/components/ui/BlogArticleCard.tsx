import { Link, useLocation } from 'react-router-dom'
import type { BlogArticle } from '../../data/blogArticles'
import imagePlaceholder from '../../assets/images/image-placeholder.png'
import { saveBlogPageState, clearBlogPageState } from '../../utils/blogScrollPosition'

interface BlogArticleCardProps {
  article: BlogArticle
  variant?: 'desktop' | 'mobile'
}

export default function BlogArticleCard({ article, variant = 'desktop' }: BlogArticleCardProps) {
  const location = useLocation()
  
  const handleClick = () => {
    // Only save scroll position if navigating from Blog page
    // If navigating from article page (KeepReadingSection), clear saved position
    if (location.pathname === '/blog') {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      const savedRaw = sessionStorage.getItem('blogPageState')
      let displayedArticles = 15
      let selectedCategory = 'All'

      if (savedRaw) {
        try {
          const parsed = JSON.parse(savedRaw) as { displayedArticles?: unknown; selectedCategory?: unknown }
          if (typeof parsed.displayedArticles === 'number') {
            displayedArticles = parsed.displayedArticles
          }
          if (typeof parsed.selectedCategory === 'string') {
            selectedCategory = parsed.selectedCategory
          }
        } catch {
          // fallback to defaults
        }
      }

      saveBlogPageState(scrollY, displayedArticles, selectedCategory)
    } else {
      clearBlogPageState()
    }
  }

  if (variant === 'mobile') {
    const coreContent = (
      <>
        {/* Image - with zoom on hover */}
        <div className="relative rounded-lg w-full aspect-[3/2] overflow-hidden">
          <img 
            src={article.image || imagePlaceholder} 
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg transition-transform duration-300 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        {/* Title */}
        <p className="font-semibold leading-6 relative shrink-0 text-base w-full">
          {article.title}
        </p>
      </>
    )

    return (
      <div className="group flex flex-col gap-5 items-start px-0 relative shrink-0 w-full">
        {article.slug ? (
          <Link
            to={`/blog/${article.slug}`}
            className="flex flex-col gap-5 w-full"
            onClick={handleClick}
          >
            {coreContent}
          </Link>
        ) : (
          <div className="flex flex-col gap-5 w-full">
            {coreContent}
          </div>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 items-center leading-5 relative shrink-0 text-sm w-full">
          <p className="relative shrink-0 text-[#0a0a0a]">{article.category}</p>
          <p className="relative shrink-0 text-[#737373]">{article.date}</p>
        </div>
      </div>
    )
  }

  // Desktop variant - vertical card with image
  const articleContent = (
    <div className="flex flex-col gap-4 w-full">
      {/* Image - aspect ratio 3:2 with zoom on hover */}
      <div className="relative rounded-lg w-full aspect-[3/2] overflow-hidden">
        <img 
          src={article.image || imagePlaceholder} 
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover object-center rounded-lg transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-3 w-full">
        {/* Title */}
        <p className="font-semibold leading-6 text-base text-[#0a0a0a] w-full">
          {article.title}
        </p>
      </div>
    </div>
  )

  return (
    <div className="group flex flex-col gap-3 w-full">
      {article.slug ? (
        <Link
          to={`/blog/${article.slug}`}
          className="flex flex-col w-full"
          onClick={handleClick}
        >
          {articleContent}
        </Link>
      ) : (
        <div className="flex flex-col w-full">
          {articleContent}
        </div>
      )}

      {/* Metadata */}
      <div className="flex flex-wrap gap-4 items-center text-sm">
        <p className="text-[#0a0a0a]">{article.category}</p>
        <p className="text-[#737373]">{article.date}</p>
      </div>
    </div>
  )
}
