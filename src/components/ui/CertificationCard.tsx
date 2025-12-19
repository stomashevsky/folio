export interface CertificationCardProps {
  logo: string
  title: string
  description: string
  className?: string
}

export default function CertificationCard({ logo, title, description, className = '' }: CertificationCardProps) {
  const baseClasses = "bg-white border border-[#e5e5e5] border-solid w-full min-w-0 relative rounded-2xl h-full flex flex-col shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]"
  const combinedClasses = `${baseClasses} ${className}`.trim()

  return (
    <div className={combinedClasses}>
      <div className="flex flex-col gap-6 items-start p-6 w-full h-full min-w-0">
        {/* Certification Logo */}
        <img src={logo} alt={title} className="h-16 w-auto object-contain" />
        
        {/* Title and Description */}
        <div className="flex flex-col gap-1.5 items-start w-full flex-1 min-w-0">
          <p className="font-semibold leading-6 text-base text-[#0a0a0a] w-full break-words">
            {title}
          </p>
          <p className="font-normal leading-5 text-[#737373] text-sm w-full break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
