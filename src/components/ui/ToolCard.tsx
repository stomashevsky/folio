import { Link } from 'react-router-dom'
import { scrollToTop } from '../../utils/scrollToTop'
import arrowRightIcon from '../../assets/icons/ArrowRight.svg'

export interface ToolCardProps {
  icon: string
  title: string
  description: string
  to?: string
  className?: string
}

export default function ToolCard({ icon, title, description, to, className = '' }: ToolCardProps) {
  const baseClasses = "bg-white border border-[#e5e5e5] border-solid w-full min-w-0 relative rounded-2xl h-full flex flex-col shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]"
  const combinedClasses = `${baseClasses} ${className}`.trim()

  const handleClick = () => {
    setTimeout(() => {
      scrollToTop()
    }, 0)
  }
  
  return (
    <div className={combinedClasses}>
      <div className="flex flex-col gap-6 items-start p-6 w-full h-full min-w-0">
        {/* Icon */}
        <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-lg shrink-0 size-10 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
          <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
        </div>
        
        {/* Title and Description */}
        <div className="flex flex-col gap-1.5 items-start w-full flex-1 min-w-0">
          <p className="font-semibold leading-6 text-base text-[#0a0a0a] w-full break-words">
            {title}
          </p>
          <p className="font-normal leading-5 text-[#737373] text-sm w-full break-words">
            {description}
          </p>
        </div>
        
        {/* Learn more button */}
        {to && (
          <Link
            to={to}
            onClick={handleClick}
            className="bg-[#f5f5f5] flex items-center gap-2 h-8 px-3 py-2 rounded-full text-xs font-medium text-[#171717] hover:bg-[#e5e5e5] transition-colors shrink-0 mt-auto"
          >
            <span>Learn more</span>
            <img src={arrowRightIcon} alt="" aria-hidden="true" className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
