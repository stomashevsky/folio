import { scrollToTop } from '../../utils/scrollToTop'
import Button from './Button'
import arrowRightIcon from '../../assets/icons/ArrowRight.svg'

export interface PhotoCardProps {
  image: string
  title: string
  description: string
  to?: string
  className?: string
  carouselMode?: boolean
}

export default function PhotoCard({ image, title, description, to, className = '', carouselMode = false }: PhotoCardProps) {
  const baseClasses = "bg-white border border-[#e5e5e5] border-solid relative rounded-2xl overflow-hidden flex flex-col shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]"
  
  // Carousel mode: fixed width with responsive sizing (280px mobile, 320px desktop)
  // Regular mode: full width
  const widthClasses = carouselMode 
    ? "w-[280px] min-w-[280px] max-w-[280px] md:w-[320px] md:min-w-[320px] md:max-w-[320px] shrink-0 snap-start"
    : "w-full min-w-0"
  
  const combinedClasses = `${baseClasses} ${widthClasses} ${className}`.trim()

  const handleClick = () => {
    scrollToTop()
  }
  
  return (
    <div className={combinedClasses}>
      {/* Image with 1:1 aspect ratio */}
      <div className="aspect-square relative w-full shrink-0">
        <img 
          src={image} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-6 items-start p-6 w-full h-full min-w-0">
        {/* Title and Description */}
        <div className="flex flex-col gap-1.5 items-start w-full flex-1 min-w-0">
          <p className="font-semibold leading-6 text-base text-[#0a0a0a] w-full break-words">
            {title}
          </p>
          <p className="font-normal leading-5 text-[#737373] text-sm w-full break-words line-clamp-2">
            {description}
          </p>
        </div>
        
        {/* Learn more button */}
        {to && (
          <Button
            variant="secondary"
            to={to}
            onClick={handleClick}
            icon={<img src={arrowRightIcon} alt="" aria-hidden="true" className="w-4 h-4" />}
            className="!h-8 !text-xs mt-auto"
          >
            Learn more
          </Button>
        )}
      </div>
    </div>
  )
}
