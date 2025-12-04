import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import { Button } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'

type BlogCategory = 'All' | 'Company' | 'Research' | 'Product' | 'Safety'

interface BlogArticle {
  category: Exclude<BlogCategory, 'All'>
  date: string
  title: string
  description: string
  slug?: string
}

// Helper function to parse date string "MMM DD, YYYY" to Date object
const parseDate = (dateStr: string): Date => {
  return new Date(dateStr)
}

// Helper function to sort articles by date (newest first)
const sortArticlesByDate = (articles: BlogArticle[]): BlogArticle[] => {
  return [...articles].sort((a, b) => {
    const dateA = parseDate(a.date)
    const dateB = parseDate(b.date)
    return dateB.getTime() - dateA.getTime() // Descending order (newest first)
  })
}

const blogArticles: BlogArticle[] = sortArticlesByDate([
  {
    category: 'Company',
    date: 'Mar 28, 2025',
    title: 'Albanian diaspora voter registration surges 525% with Folio Digital Wallet',
    description: 'Albania successfully enfranchised its diaspora to register to vote using a secure digital wallet solution, with over 245,000 Albanians abroad approved to vote in the upcoming parliamentary elections.',
    slug: 'albanian-diaspora-voter-registration',
  },
  {
    category: 'Company',
    date: 'Feb 15, 2025',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Research',
    date: 'Jan 22, 2025',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Product',
    date: 'Dec 10, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Safety',
    date: 'Nov 5, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Company',
    date: 'Oct 18, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Research',
    date: 'Sep 3, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Product',
    date: 'Aug 14, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Company',
    date: 'Jul 7, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Safety',
    date: 'Jun 20, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Research',
    date: 'May 12, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
])

const categories: BlogCategory[] = ['All', 'Company', 'Research', 'Product', 'Safety']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All')
  const [displayedArticles, setDisplayedArticles] = useState(8)
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  usePageTitle({
    title: 'Blog | Folio Wallet',
    description: 'Case studies, product insights and practical guides on travel, documents and digital identity.',
    ogTitle: 'Blog | Folio Wallet',
    ogDescription: 'Case studies, product insights and practical guides on travel, documents and digital identity.',
    ogUrl: 'https://folio.id/blog'
  })

  const filteredArticles = selectedCategory === 'All'
    ? blogArticles
    : blogArticles.filter(article => article.category === selectedCategory)

  const visibleArticles = filteredArticles.slice(0, displayedArticles)
  const hasMore = displayedArticles < filteredArticles.length

  const handleLoadMore = () => {
    setDisplayedArticles(prev => Math.min(prev + 8, filteredArticles.length))
  }

  const updateScrollIndicators = () => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    const hasScroll = scrollWidth > clientWidth
    const isAtStart = scrollLeft <= 0
    const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 1

    setShowLeftFade(hasScroll && !isAtStart)
    setShowRightFade(hasScroll && !isAtEnd)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Initial check after render
    const timeoutId = setTimeout(() => {
      updateScrollIndicators()
    }, 0)

    container.addEventListener('scroll', updateScrollIndicators)
    window.addEventListener('resize', updateScrollIndicators)

    return () => {
      clearTimeout(timeoutId)
      container.removeEventListener('scroll', updateScrollIndicators)
      window.removeEventListener('resize', updateScrollIndicators)
    }
  }, [])

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="bg-white flex flex-col gap-6 md:gap-16 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full flex-1">
          <div className="flex flex-col gap-10 md:gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            {/* Header */}
            <div className="flex flex-col gap-4 md:gap-5 items-start max-w-[576px] relative shrink-0 w-full">
              <h1 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Folio Blog
              </h1>
              <p className="font-normal leading-6 min-w-full relative shrink-0 text-[#737373] text-base text-left w-[min-content] whitespace-pre-wrap">
                Case studies, product insights and practical guides on travel, documents and digital identity.
              </p>
            </div>

            {/* Filters */}
            <div className="relative shrink-0 w-full">
              <div 
                ref={scrollContainerRef}
                className="flex gap-2 items-start overflow-x-auto overflow-y-hidden -webkit-overflow-scrolling-touch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'secondary' : 'ghost'}
                    onClick={() => {
                      setSelectedCategory(category)
                      setDisplayedArticles(8)
                    }}
                    className={`flex-shrink-0 ${selectedCategory === category 
                      ? '!bg-[#f5f5f5] border-0 !text-[#171717] hover:!bg-[#f5f5f5] hover:shadow-none' 
                      : ''
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              {/* Gradient fade overlays */}
              {showLeftFade && (
                <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
              )}
              {showRightFade && (
                <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
              )}
            </div>

            {/* Articles List */}
            <div className="flex flex-col items-start overflow-hidden relative shrink-0 w-full">
              {/* Desktop Layout */}
              <div className="hidden md:flex flex-col items-start relative shrink-0 w-full">
                {visibleArticles.map((article, index) => {
                  const ArticleWrapper = article.slug ? Link : 'div'
                  const wrapperProps = article.slug 
                    ? { to: `/blog/${article.slug}`, className: 'border-b border-[#e5e5e5] hover:border-[#0a0a0a] flex gap-7 items-start relative shrink-0 w-full transition-colors duration-200 cursor-pointer' }
                    : { className: 'border-b border-[#e5e5e5] hover:border-[#0a0a0a] flex gap-7 items-start relative shrink-0 w-full transition-colors duration-200 cursor-pointer' }
                  
                  return (
                    <ArticleWrapper key={index} {...wrapperProps}>
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
                    </ArticleWrapper>
                  )
                })}
              </div>

              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-6 items-start overflow-hidden relative shrink-0 w-full">
                {visibleArticles.map((article, index) => {
                  const ArticleWrapper = article.slug ? Link : 'div'
                  const wrapperProps = article.slug 
                    ? { to: `/blog/${article.slug}`, className: 'border-b border-[#e5e5e5] hover:border-[#0a0a0a] flex flex-col gap-5 items-start px-0 py-6 relative shrink-0 w-full transition-colors duration-200 cursor-pointer' }
                    : { className: 'border-b border-[#e5e5e5] hover:border-[#0a0a0a] flex flex-col gap-5 items-start px-0 py-6 relative shrink-0 w-full transition-colors duration-200 cursor-pointer' }
                  
                  return (
                    <ArticleWrapper key={index} {...wrapperProps}>
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
                    </ArticleWrapper>
                  )
                })}
              </div>
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="flex gap-0 items-center justify-center relative shrink-0 w-full">
                <Button
                  variant="secondary"
                  onClick={handleLoadMore}
                  className="!bg-[#f5f5f5] border-0 !text-[#171717] hover:!bg-[#f5f5f5] hover:shadow-none"
                >
                  Load more
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

