import { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { BlogArticle } from '../../data/blogArticles'
import imagePlaceholder from '../../assets/images/image-placeholder.png'
import { saveBlogPageState, clearBlogPageState } from '../../utils/blogScrollPosition'
import { DEFAULT_LANGUAGE } from '../../i18n'

interface BlogImageProps {
  src: string
  alt: string
  priority?: boolean
}

function BlogImage({ src, alt, priority = false }: BlogImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
  }, [src])

  return (
    <div className="relative rounded-lg w-full aspect-[3/2] overflow-hidden bg-[#f5f5f5]">
      <img 
        src={src} 
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover object-center rounded-lg transition-all duration-300 ease-out group-hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  )
}

interface BlogArticleCardProps {
  article: BlogArticle
  variant?: 'desktop' | 'mobile'
  priority?: boolean
}

export default function BlogArticleCard({ article, variant = 'desktop', priority = false }: BlogArticleCardProps) {
  const { t } = useTranslation('common')
  const { lang } = useParams<{ lang?: string }>()
  const location = useLocation()
  const currentLang = lang || DEFAULT_LANGUAGE
  
  const getLocalizedPath = (path: string) => `/${currentLang}${path}`
  
  const handleClick = () => {
    // Only save scroll position if navigating from Blog page
    // If navigating from article page (KeepReadingSection), clear saved position
    const blogPath = getLocalizedPath('/blog')
    if (location.pathname === blogPath) {
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
        <BlogImage 
          src={article.image || imagePlaceholder} 
          alt={article.title}
          priority={priority}
        />
        
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
            to={getLocalizedPath(`/blog/${article.slug}`)}
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
          <p className="relative shrink-0 text-[#0a0a0a]">{t(`blog.categories.${article.category}`)}</p>
          <p className="relative shrink-0 text-[#737373]">{article.date}</p>
        </div>
      </div>
    )
  }

  // Desktop variant - vertical card with image
  const articleContent = (
    <div className="flex flex-col gap-4 w-full">
      {/* Image - aspect ratio 3:2 with zoom on hover */}
      <BlogImage 
        src={article.image || imagePlaceholder} 
        alt={article.title}
        priority={priority}
      />
      
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
          to={getLocalizedPath(`/blog/${article.slug}`)}
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
        <p className="text-[#0a0a0a]">{t(`blog.categories.${article.category}`)}</p>
        <p className="text-[#737373]">{article.date}</p>
      </div>
    </div>
  )
}
