import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '../ui'
import { PLATFORM_ITEMS, PlatformItem } from '../../constants/platformItems'
import { scrollToTop } from '../../utils/scrollToTop'
import arrowRight16Icon from '../../assets/icons/ArrowRight16.svg'

interface ExploreMoreSectionProps {
  currentPath: string
}

// Shuffle array using Fisher-Yates algorithm with seed based on current path
function shuffleArray<T>(array: T[], seed: string): T[] {
  const result = [...array]
  // Simple hash function to generate a number from the path string
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i)
    hash = hash & hash
  }
  
  // Use the hash as a seed for pseudo-random shuffling
  const random = () => {
    hash = (hash * 1103515245 + 12345) & 0x7fffffff
    return hash / 0x7fffffff
  }
  
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  
  return result
}

function ExploreMoreCard({ item }: { item: PlatformItem }) {
  const handleClick = () => {
    // Instant scroll to top after navigation
    setTimeout(() => {
      scrollToTop()
    }, 0)
  }

  return (
    <div className="bg-white border border-[#e5e5e5] border-solid w-full min-w-0 relative rounded-2xl shrink-0 flex flex-col shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]">
      <div className="flex flex-col gap-6 items-start p-6 w-full flex-1 min-w-0">
        {/* Icon */}
        <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-lg shrink-0 size-10 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
          <img src={item.icon} alt="" aria-hidden="true" className="w-5 h-5" />
        </div>
        
        {/* Title and Description */}
        <div className="flex flex-col gap-1.5 items-start w-full flex-1 min-w-0">
          <p className="font-semibold leading-6 relative shrink-0 text-base text-[#0a0a0a] w-full break-words">
            {item.label}
          </p>
          <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full whitespace-pre-wrap break-words">
            {item.description}
          </p>
        </div>
        
        {/* Learn more link */}
        <Link
          to={item.path}
          onClick={handleClick}
          className="flex items-center gap-1.5 text-sm font-normal text-[#0a0a0a] hover:underline transition-all"
        >
          <span>Learn more</span>
          <img src={arrowRight16Icon} alt="" aria-hidden="true" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default function ExploreMoreSection({ currentPath }: ExploreMoreSectionProps) {
  // Filter out current page and pick 3 random items
  const randomItems = useMemo(() => {
    const filtered = PLATFORM_ITEMS.filter(item => item.path !== currentPath)
    const shuffled = shuffleArray(filtered, currentPath)
    return shuffled.slice(0, 3)
  }, [currentPath])

  return (
    <>
      {/* Desktop version - gray background */}
      <section className="hidden md:flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full bg-[#f5f5f5]">
        <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <SectionHeader
            title="Explore more"
            maxWidth="576px"
          />
          <div className="grid grid-cols-3 gap-6 items-stretch w-full">
            {randomItems.map((item) => (
              <ExploreMoreCard key={item.path} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile version - white background */}
      <section className="flex md:hidden flex-col gap-6 items-center overflow-hidden px-0 py-16 relative shrink-0 w-full bg-white">
        <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <SectionHeader
            title="Explore more"
            maxWidth="576px"
          />
          <div className="flex flex-col gap-6 items-stretch w-full">
            {randomItems.map((item) => (
              <ExploreMoreCard key={item.path} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
