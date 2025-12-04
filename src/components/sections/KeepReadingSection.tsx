import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui'
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
            {filteredArticles.map((article, index) => {
              const articleContent = (
                <>
                  <div className="flex flex-col gap-[17px] items-start justify-center leading-5 px-0 py-[35px] relative shrink-0 text-sm w-[288px] whitespace-pre-wrap">
                    <p className="relative shrink-0 text-[#0a0a0a] w-full">{article.category}</p>
                    <p className="relative shrink-0 text-[#737373] w-full">{article.date}</p>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col gap-5 items-start min-h-px min-w-px px-0 py-8 relative shrink-0 text-[#0a0a0a] whitespace-pre-wrap">
                    <p className="font-semibold leading-6 relative shrink-0 text-base w-full">
                      {article.title}
                    </p>
                    <p className="line-clamp-2 font-normal leading-5 relative shrink-0 text-sm w-full overflow-ellipsis overflow-hidden">
                      {article.description}
                    </p>
                  </div>
                </>
              )
              
              if (article.slug) {
                return (
                  <Link
                    key={index}
                    to={`/blog/${article.slug}`}
                    className="border-b border-[#e5e5e5] hover:border-[#0a0a0a] flex gap-7 items-start relative shrink-0 w-full transition-colors duration-200 cursor-pointer"
                  >
                    {articleContent}
                  </Link>
                )
              }
              
              return (
                <div
                  key={index}
                  className="border-b border-[#e5e5e5] hover:border-[#0a0a0a] flex gap-7 items-start relative shrink-0 w-full transition-colors duration-200 cursor-pointer"
                >
                  {articleContent}
                </div>
              )
            })}
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start overflow-hidden relative shrink-0 w-full">
            {filteredArticles.map((article, index) => {
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
                    key={index}
                    to={`/blog/${article.slug}`}
                    className="border-b border-[#e5e5e5] hover:border-[#0a0a0a] flex flex-col gap-5 items-start px-0 py-6 relative shrink-0 w-full transition-colors duration-200 cursor-pointer"
                  >
                    {articleContent}
                  </Link>
                )
              }
              
              return (
                <div
                  key={index}
                  className="border-b border-[#e5e5e5] hover:border-[#0a0a0a] flex flex-col gap-5 items-start px-0 py-6 relative shrink-0 w-full transition-colors duration-200 cursor-pointer"
                >
                  {articleContent}
                </div>
              )
            })}
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

