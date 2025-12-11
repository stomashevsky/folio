import { useEffect, useRef, useCallback, useState } from 'react'
import { SectionHeader } from '../ui'

export interface ScrollFeatureItem {
  id: string
  title: string
  description: string
  desktopImage: string
}

interface ScrollFeaturesSectionProps {
  title: string
  items: ScrollFeatureItem[]
  defaultActiveId?: string
}

/**
 * Scroll-triggered features section with sticky image (Apple/Persona hybrid style)
 * - Fixed image on the left that changes based on active text block
 * - Text blocks on the right that scroll and trigger image changes
 * - Active block has full opacity, inactive blocks are dimmed
 * - Text blocks only visible when in image height zone
 */
export default function ScrollFeaturesSection({
  title,
  items,
  defaultActiveId,
}: ScrollFeaturesSectionProps) {
  const [activeId, setActiveId] = useState<string>(defaultActiveId || items[0]?.id || '')
  const [imageStyle, setImageStyle] = useState<'sticky' | 'top' | 'bottom'>('top')
  const [fixedPosition, setFixedPosition] = useState({ left: 0, top: 0, width: 0 })
  const [absoluteTopPosition, setAbsoluteTopPosition] = useState(0)
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set())
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [rightColumnPadding, setRightColumnPadding] = useState(0)
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map())
  const containerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  // Register item ref
  const registerItem = useCallback((id: string) => (element: HTMLDivElement | null) => {
    if (element) {
      itemRefs.current.set(id, element)
    } else {
      itemRefs.current.delete(id)
    }
  }, [])

  // Handle scroll and resize for sticky image behavior
  useEffect(() => {
    const updatePosition = () => {
      if (!containerRef.current || !imageContainerRef.current || !leftColumnRef.current) return
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const leftColumnRect = leftColumnRef.current.getBoundingClientRect()
      const imageHeight = imageContainerRef.current.offsetHeight
      
      // Calculate center position in viewport
      const viewportCenter = window.innerHeight / 2
      const stickyTop = viewportCenter - imageHeight / 2
      
      // Calculate padding for right column to center text with image
      const textBlockHeight = 180
      const calculatedPadding = Math.max(0, (imageHeight - textBlockHeight) / 2)
      setRightColumnPadding(calculatedPadding)
      
      // Update fixed position for when image is sticky
      setFixedPosition({
        left: leftColumnRect.left,
        top: stickyTop,
        width: leftColumnRect.width
      })
      
      // Determine image state based on scroll position
      const imageNaturalTop = containerRect.top
      
      // Get last item to determine when to unstick
      const lastItemId = items[items.length - 1]?.id
      const lastItemElement = lastItemId ? itemRefs.current.get(lastItemId) : null
      
      // Calculate current image zone on screen
      let currentImageTop: number
      let currentImageBottom: number
      
      // Check if we should unstick based on last item position
      let shouldUnstick = false
      if (lastItemElement) {
        const lastItemRect = lastItemElement.getBoundingClientRect()
        // Use the top of the last item's content area (after py-8 padding)
        const lastItemContentTop = lastItemRect.top + 32 // py-8 = 32px
        // Unstick when the last item's content top reaches the vertical center of the image
        shouldUnstick = lastItemContentTop <= viewportCenter
      }
      
      if (imageNaturalTop > stickyTop) {
        // Image is at top of section (section hasn't scrolled enough)
        setImageStyle('top')
        currentImageTop = containerRect.top
        currentImageBottom = containerRect.top + imageHeight
      } else if (shouldUnstick) {
        // Image should unstick - last item is at center
        // Calculate the absolute top position relative to container
        // to ensure smooth transition without jumping
        const absoluteTop = stickyTop - containerRect.top
        setAbsoluteTopPosition(absoluteTop)
        setImageStyle('bottom')
        currentImageTop = stickyTop
        currentImageBottom = stickyTop + imageHeight
      } else {
        // Image is fixed at center
        setImageStyle('sticky')
        currentImageTop = stickyTop
        currentImageBottom = stickyTop + imageHeight
      }
      
      // Check header visibility
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect()
        const isHeaderInZone = headerRect.bottom > currentImageTop && headerRect.top < currentImageBottom
        setIsHeaderVisible(isHeaderInZone)
      }
      
      // Check which items are visible in the image zone
      const newVisibleItems = new Set<string>()
      itemRefs.current.forEach((element, id) => {
        const rect = element.getBoundingClientRect()
        // Item is visible if it overlaps with image zone
        const isInImageZone = rect.bottom > currentImageTop && rect.top < currentImageBottom
        if (isInImageZone) {
          newVisibleItems.add(id)
        }
      })
      setVisibleItems(newVisibleItems)
    }

    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition, { passive: true })
    updatePosition() // Initial check
    
    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [items])

  // Set up Intersection Observer for active item detection
  useEffect(() => {
    const itemElements = itemRefs.current
    if (itemElements.size === 0) return

    // Observer triggers when element crosses the center of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-feature-id')
            if (id) {
              setActiveId(id)
            }
          }
        })
      },
      {
        // This creates a thin horizontal "viewport" at the center of the screen
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    )

    // Observe all items
    itemElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [items])

  // Get image container styles based on scroll position
  const getImageContainerStyle = (): React.CSSProperties => {
    switch (imageStyle) {
      case 'sticky':
        return {
          position: 'fixed',
          left: fixedPosition.left,
          top: fixedPosition.top,
          width: fixedPosition.width,
        }
      case 'bottom':
        return {
          position: 'absolute',
          top: absoluteTopPosition,
          left: 0,
          width: '100%',
        }
      case 'top':
      default:
        return {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }
    }
  }

  // Get opacity class for text item
  const getItemOpacity = (itemId: string): string => {
    const isVisible = visibleItems.has(itemId)
    const isActive = itemId === activeId
    
    if (!isVisible) return 'opacity-0'
    if (isActive) return 'opacity-100'
    return 'opacity-40'
  }

  return (
    <div ref={containerRef} className="max-w-[1280px] mx-auto px-6 relative w-full">
      <div className="flex gap-16">
        {/* Left column: Contains sticky image */}
        <div ref={leftColumnRef} className="flex-1 min-w-0 relative">
          {/* Image container - position changes based on scroll */}
          <div 
            ref={imageContainerRef}
            style={getImageContainerStyle()}
          >
            <div className="relative rounded-2xl aspect-square overflow-hidden">
              {/* All images stacked, only active one is visible */}
              {items.map((item, index) => (
                <img
                  key={item.id}
                  src={item.desktopImage}
                  alt={item.title}
                  className={`
                    absolute inset-0 w-full h-full object-cover object-center rounded-2xl 
                    transition-opacity duration-400 ease-spring-out will-change-opacity
                    ${item.id === activeId ? 'opacity-100' : 'opacity-0'}
                  `}
                  aria-hidden={item.id !== activeId}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Scrollable text blocks */}
        {/* Top padding centers the first block with the image vertically */}
        <div 
          className="flex-1 min-w-0 flex flex-col" 
          style={{ paddingTop: rightColumnPadding }}
        >
          {/* Section header - also subject to visibility zone */}
          <div 
            ref={headerRef}
            className={`
              pb-4 transition-opacity duration-300 ease-out
              ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <SectionHeader
              title={title}
              align="left"
              maxWidth="100%"
            />
          </div>

          {/* Feature items */}
          <div className="flex flex-col">
            {items.map((item) => (
              <div
                key={item.id}
                ref={registerItem(item.id)}
                data-feature-id={item.id}
                className={`
                  flex flex-col gap-3 py-8
                  min-h-[50vh]
                  transition-opacity duration-300 ease-out
                  ${getItemOpacity(item.id)}
                `}
              >
                <h3 className="font-semibold text-xl text-[#0a0a0a] leading-7">
                  {item.title}
                </h3>
                <p className="text-base text-[#737373] leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
