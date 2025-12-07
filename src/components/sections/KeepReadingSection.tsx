import { useNavigate } from 'react-router-dom'
import { Button, BlogArticleCard } from '../ui'
import { blogArticles } from '../../data/blogArticles'

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

  const handleViewAll = () => {
    navigate('/blog')
    // Instant scroll to top
    window.scrollTo(0, 0)
  }

  return (
    <section className="bg-white flex flex-col items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
      <div className="flex flex-col gap-10 md:gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        
        {/* Desktop Layout: Title -> Cards -> Button */}
        <div className="hidden md:flex flex-col gap-12 items-start w-full">
          {/* Title */}
          <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
            Keep reading
          </h2>
          
          {/* Cards Grid - 3 columns */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-20 w-full">
            {filteredArticles.map((article, index) => (
              <BlogArticleCard key={index} article={article} variant="desktop" />
            ))}
          </div>
        </div>

        {/* Mobile Layout: Cards -> Title -> Button */}
        <div className="flex md:hidden flex-col gap-10 items-start w-full">
          {/* Cards first - single column with images */}
          <div className="flex flex-col gap-16 w-full">
            {filteredArticles.map((article, index) => (
              <BlogArticleCard key={index} article={article} variant="desktop" />
            ))}
          </div>
          
          {/* Title after cards */}
          <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
            Keep reading
          </h2>
        </div>

        {/* View all button - centered, for both layouts */}
        <div className="flex items-center justify-center w-full">
          <Button
            variant="secondary"
            onClick={handleViewAll}
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  )
}
