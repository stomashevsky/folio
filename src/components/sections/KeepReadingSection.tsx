import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button, BlogArticleCard } from '../ui'
import { blogArticles } from '../../data/blogArticles'
import { DEFAULT_LANGUAGE } from '../../i18n'

interface KeepReadingSectionProps {
  currentArticleSlug?: string
}

export default function KeepReadingSection({ currentArticleSlug }: KeepReadingSectionProps) {
  const { t } = useTranslation('common')
  const { lang } = useParams<{ lang?: string }>()
  const navigate = useNavigate()
  const currentLang = lang || DEFAULT_LANGUAGE
  
  // Filter out current article and get top 3 newest articles
  const filteredArticles = blogArticles
    .filter(article => article.slug !== currentArticleSlug)
    .slice(0, 3)

  if (filteredArticles.length === 0) {
    return null
  }

  const handleViewAll = () => {
    navigate(`/${currentLang}/blog`)
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
            {t('blog.keepReading')}
          </h2>
          
          {/* Cards Grid - 3 columns */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-20 w-full">
            {filteredArticles.map((article, index) => (
              <BlogArticleCard key={index} article={article} variant="desktop" />
            ))}
          </div>
        </div>

        {/* Mobile Layout: Title -> Cards -> Button */}
        <div className="flex md:hidden flex-col items-start w-full">
          {/* Title first */}
          <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px] mb-12">
            {t('blog.keepReading')}
          </h2>
          
          {/* Cards - single column with mobile variant */}
          <div className="flex flex-col gap-16 w-full mb-16">
            {filteredArticles.map((article, index) => (
              <BlogArticleCard key={index} article={article} variant="mobile" />
            ))}
          </div>
        </div>

        {/* View all button - centered, for both layouts */}
        <div className="flex items-center justify-center w-full">
          <Button
            variant="secondary"
            onClick={handleViewAll}
          >
            {t('blog.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  )
}
