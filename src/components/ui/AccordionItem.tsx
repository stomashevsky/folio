import { useId } from 'react'
import ChevronIcon from './ChevronIcon'
import { FOCUS_STYLES } from './focusStyles'

interface AccordionItemProps {
  title: string
  description?: string
  isOpen: boolean
  onToggle: () => void
  children?: React.ReactNode
}

export default function AccordionItem({
  title,
  description,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) {
  const contentId = useId()
  const buttonId = useId()

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <button
      id={buttonId}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      aria-controls={contentId}
      className={`group border-b border-[#e5e5e5] border-l-0 border-r-0 border-t-0 border-solid flex flex-col items-start p-0 relative shrink-0 w-full ${FOCUS_STYLES} cursor-pointer transition-colors duration-150`}
    >
      <div className="flex items-center justify-between px-0 py-4 relative shrink-0 w-full">
        <p className="flex-1 font-normal leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-lg text-left">
          {title}
        </p>
        <div className="flex items-center justify-center relative shrink-0">
          <ChevronIcon isOpen={isOpen} />
        </div>
      </div>
      {isOpen && (
        <div 
          id={contentId}
          role="region"
          aria-labelledby={buttonId}
          className="flex flex-col items-center justify-center pb-4 pt-0 px-0 relative shrink-0 w-full"
        >
          {description && (
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full text-left">
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </button>
  )
}

