import { useState, useEffect, useRef } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import { Button, BlogArticleCard } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { blogArticles, type BlogCategory } from '../data/blogArticles'
import { getSavedBlogPageState, saveBlogPageState, isBlogScrollRestoring, clearBlogPageState } from '../utils/blogScrollPosition'

const categories: BlogCategory[] = ['All', 'Company', 'Product', 'Guides', 'Research', 'Safety', 'Business']

export default function BlogPage() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  
  // Read category from URL query parameter
  const categoryParam = searchParams.get('category')
  const isValidCategory = categoryParam && categories.includes(categoryParam as BlogCategory)
  const initialCategory = isValidCategory ? (categoryParam as BlogCategory) : 'All'
  
  // Check if we should restore state from sessionStorage
  // State is saved when user clicks "Load more" or changes category
  // State is cleared when navigating away from blog or when URL has explicit category
  const savedState = getSavedBlogPageState()
  const shouldRestore = savedState !== null && !categoryParam
  
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>(
    shouldRestore && savedState.selectedCategory && categories.includes(savedState.selectedCategory as BlogCategory)
      ? savedState.selectedCategory as BlogCategory
      : initialCategory
  )
  
  const [displayedArticles, setDisplayedArticles] = useState(
    shouldRestore && typeof savedState?.displayedArticles === 'number'
      ? savedState.displayedArticles
      : 15
  )
  const [showLeftFade, setShowLeftFade] = useState(false)
  const [showRightFade, setShowRightFade] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const prevPathnameRef = useRef<string | null>(location.pathname)
  const hasRestoredStateRef = useRef(false)
  // Track if we just restored from sessionStorage to prevent effect from resetting displayedArticles
  const justRestoredRef = useRef(shouldRestore)

  const filteredArticles = selectedCategory === 'All'
    ? blogArticles
    : blogArticles.filter(article => article.category === selectedCategory)

  const visibleArticles = filteredArticles.slice(0, displayedArticles)
  const hasMore = displayedArticles < filteredArticles.length

  // Update category from URL parameter when it changes
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    const isValidCategory = categoryParam && categories.includes(categoryParam as BlogCategory)
    const newCategory = isValidCategory ? (categoryParam as BlogCategory) : 'All'
    
    setSelectedCategory(prev => {
      if (prev !== newCategory) {
        // Don't reset displayedArticles if we just restored from sessionStorage
        // This prevents losing the "Load more" state when returning via "Back to Blog"
        if (justRestoredRef.current) {
          justRestoredRef.current = false
        } else {
          setDisplayedArticles(15)
        }
      }
      return newCategory
    })
  }, [searchParams])

  // Clear saved state when navigating directly with category URL parameter
  // This prevents sessionStorage from interfering with direct URL navigation
  useEffect(() => {
    const urlHasCategory = categoryParam !== null
    const isNotFromRestoreScroll = location.state?.restoreScroll !== true
    
    // If URL has category and we're not coming from "Back to blog" button, clear saved state
    if (urlHasCategory && isNotFromRestoreScroll) {
      clearBlogPageState()
    }
  }, [categoryParam, location.state?.restoreScroll])

  // Sync URL with restored category (state was already initialized synchronously)
  useEffect(() => {
    // Only sync URL once per navigation when restoring
    if (hasRestoredStateRef.current) {
      return
    }
    
    // Check if we restored state (via lazy initialization)
    const isRestoring = location.state?.restoreScroll === true
    const urlHasCategory = searchParams.get('category') !== null
    
    if (isRestoring && !urlHasCategory) {
      // State was restored via lazy init, now sync URL if needed
      if (selectedCategory !== 'All') {
        setSearchParams({ category: selectedCategory })
      }
      hasRestoredStateRef.current = true
    }
    
    // Update previous pathname for next render
    const currentPath = location.pathname
    if (currentPath.startsWith('/blog/')) {
      prevPathnameRef.current = currentPath
      hasRestoredStateRef.current = false
    } else if (currentPath !== '/blog') {
      prevPathnameRef.current = null
      hasRestoredStateRef.current = false
    }
  }, [location.state, location.pathname, setSearchParams, searchParams, selectedCategory])

  // Note: Scroll restoration is now handled in ScrollToTop component

  // Persist page state (scroll + UI state) when user interacts
  useEffect(() => {
    if (isBlogScrollRestoring()) return

    const scrollY = window.scrollY || document.documentElement.scrollTop
    saveBlogPageState(scrollY, displayedArticles, selectedCategory)
  }, [displayedArticles, selectedCategory])

  usePageTitle({
    title: 'Blog | Folio Wallet',
    description: 'Case studies, product insights and practical guides on travel, documents and digital identity.',
    ogTitle: 'Blog | Folio Wallet',
    ogDescription: 'Case studies, product insights and practical guides on travel, documents and digital identity.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/blog',
    canonicalUrl: 'https://folio.id/blog',
    // Prevent filter variants from being indexed as separate pages.
    robots: categoryParam ? 'noindex,follow' : undefined,
  })

  const handleLoadMore = () => {
    setDisplayedArticles(prev => Math.min(prev + 15, filteredArticles.length))
  }

  const handleCategoryClick = (category: BlogCategory, buttonElement: HTMLButtonElement) => {
    setSelectedCategory(category)
    setDisplayedArticles(15)
    
    // Scroll to active tab (center it in the container)
    buttonElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    })
    
    // Update URL query parameter
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: 'Folio Blog',
              url: 'https://folio.id/blog',
              description: 'Case studies, product insights and practical guides on travel, documents and digital identity.',
            }),
          }}
        />
        <section className="bg-white flex flex-col items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full flex-1">
          <div className="flex flex-col gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            {/* Header */}
            <div className="flex flex-col gap-4 md:gap-5 items-center text-center max-w-[576px] relative shrink-0 w-full">
              <h1 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px]">
                Folio Blog
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base">
                Case studies, product insights and practical guides on travel, documents and digital identity.
              </p>
            </div>

            {/* Filters */}
            <div className="relative shrink-0 w-full">
              <div 
                ref={scrollContainerRef}
                className="flex gap-[8px] items-center justify-start md:justify-center overflow-x-auto overflow-y-hidden -webkit-overflow-scrolling-touch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'secondary' : 'ghost'}
                    onClick={(e) => {
                      const button = e.currentTarget
                      handleCategoryClick(category, button)
                    }}
                    className="flex-shrink-0"
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

            {/* Articles Grid */}
            <div className="w-full">
              {/* Desktop Layout - 3 column grid */}
              <div className="hidden md:grid grid-cols-3 gap-x-6 gap-y-20 w-full">
                {visibleArticles.map((article, index) => (
                  <div key={article.slug || article.title} data-blog-article>
                    <BlogArticleCard article={article} variant="desktop" priority={index < 15} />
                  </div>
                ))}
              </div>

              {/* Mobile Layout - single column list */}
              <div className="flex md:hidden flex-col gap-[64px] items-start w-full">
                {visibleArticles.map((article, index) => (
                  <div key={article.slug || article.title} data-blog-article className="w-full">
                    <BlogArticleCard article={article} variant="mobile" priority={index < 15} />
                  </div>
                ))}
              </div>
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="flex gap-0 items-center justify-center relative shrink-0 w-full">
                <Button
                  variant="secondary"
                  onClick={handleLoadMore}
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

