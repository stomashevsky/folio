import { useRef, useState, useEffect, useCallback, ReactNode, useMemo } from 'react'
import { SectionHeader } from './index'
import Button from './Button'
import chevronLeftIcon from '../../assets/icons/ChevronLeft.svg'
import chevronRightIcon from '../../assets/icons/ChevronRight.svg'

interface HorizontalScrollCarouselProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export default function HorizontalScrollCarousel({
  title,
  description,
  children,
  className = ''
}: HorizontalScrollCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [viewportWidth, setViewportWidth] = useState(0)

  // Calculate padding dynamically based on viewport width
  const paddingLeft = useMemo(() => {
    const containerMaxWidth = 1280
    const containerPadding = 24
    if (viewportWidth > containerMaxWidth) {
      return (viewportWidth - containerMaxWidth) / 2 + containerPadding
    }
    return containerPadding
  }, [viewportWidth])

  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    setCanScrollLeft(scrollLeft > 1)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }, [])

  useEffect(() => {
    // Set initial viewport width
    setViewportWidth(window.innerWidth)

    const handleResize = () => {
      setViewportWidth(window.innerWidth)
      checkScrollPosition()
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollPosition)
    }
    window.addEventListener('resize', handleResize)

    // Check scroll position after layout settles
    const timer = setTimeout(checkScrollPosition, 100)

    return () => {
      clearTimeout(timer)
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [checkScrollPosition])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    // Card width + gap (320px + 24px on desktop, 280px + 24px on mobile)
    const isMobile = window.innerWidth < 768
    const scrollAmount = isMobile ? 304 : 344

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  const NavigationButtons = () => (
    <div className="flex gap-3 items-center">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
      >
        <img src={chevronLeftIcon} alt="" aria-hidden="true" className="w-4 h-4" />
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        aria-label="Scroll right"
      >
        <img src={chevronRightIcon} alt="" aria-hidden="true" className="w-4 h-4" />
      </Button>
    </div>
  )

  return (
    <div className={`flex flex-col gap-10 items-start w-full ${className}`}>
      {/* Header with title and navigation (desktop) */}
      <div className="flex items-end justify-between w-full max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title={title}
          description={description}
          align="left"
          maxWidth="576px"
        />
        {/* Desktop navigation */}
        <div className="hidden md:flex pl-8">
          <NavigationButtons />
        </div>
      </div>

      {/* Scrollable container */}
      <div className="w-full overflow-hidden py-4">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto py-4 -my-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: viewportWidth > 0 ? `${paddingLeft}px` : '24px',
            paddingRight: viewportWidth > 0 ? `${paddingLeft}px` : '24px',
            scrollPaddingLeft: viewportWidth > 0 ? `${paddingLeft}px` : '24px',
          }}
        >
          {children}
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="flex md:hidden justify-center w-full">
        <NavigationButtons />
      </div>
    </div>
  )
}
