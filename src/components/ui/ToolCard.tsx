export interface ToolCardProps {
  icon: string
  title: string
  description: string
  onClick?: () => void
  className?: string
}

export default function ToolCard({ icon, title, description, onClick, className = '' }: ToolCardProps) {
  const baseClasses = "bg-white border border-[#e5e5e5] border-solid w-full min-w-0 relative rounded-2xl shrink-0 sm:h-full flex flex-col"
  const combinedClasses = `${baseClasses} ${className}`.trim()
  
  return (
    <div className={combinedClasses} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      <div className="flex flex-col gap-6 items-start p-6 w-full flex-1 min-w-0">
        <div className="flex gap-2 items-start w-full min-w-0">
          <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-md shrink-0 size-10">
            <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-start w-full flex-1 min-w-0">
          <p className="font-semibold leading-6 relative shrink-0 text-base text-[#0a0a0a] w-full break-words">
            {title}
          </p>
          <p className="font-normal leading-5 sm:min-h-[80px] relative shrink-0 text-[#737373] text-sm w-full break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

