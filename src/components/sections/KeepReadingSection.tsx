import { useNavigate } from 'react-router-dom'
import { Button, BlogArticleCard } from '../ui'
import { blogArticles } from '../../data/blogArticles'
import { scrollToTop } from '../../utils/scrollToTop'

interface KeepReadingSectionProps {
  currentArticleSlug?: string
}

export default function KeepReadingSection({ currentArticleSlug }: KeepReadingSectionProps) {
  const navigate = useNavigate()
  
  // Filter out current article and get top 3 newest articles
  const filteredArticles = blogArticles
    .filter(article => article.slug !== currentArticleSlug)
    .slice(0, 3)

  if (filteredArticles.length === 0) {
    return null
  }

  return (
    <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
      <div className="flex flex-col gap-10 md:gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-5 items-start max-w-[576px] relative shrink-0 w-full">
          <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
            Keep reading
          </h2>
        </div>

        {/* Articles List */}
        <div className="flex flex-col items-start overflow-hidden relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col items-start relative shrink-0 w-full">
            {filteredArticles.map((article, index) => (
              <BlogArticleCard key={index} article={article} variant="desktop" />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start overflow-hidden relative shrink-0 w-full">
            {filteredArticles.map((article, index) => (
              <BlogArticleCard key={index} article={article} variant="mobile" />
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="flex gap-0 items-center justify-center relative shrink-0 w-full">
          <Button
            variant="secondary"
            onClick={() => {
              navigate('/blog')
              setTimeout(() => {
                scrollToTop()
              }, 100)
            }}
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  )
}

