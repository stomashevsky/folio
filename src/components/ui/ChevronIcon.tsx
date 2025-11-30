import chevronDownIcon from '../../assets/icons/chevron-down.svg'

interface ChevronIconProps {
  isOpen?: boolean
  className?: string
}

export default function ChevronIcon({ isOpen = false, className = '' }: ChevronIconProps) {
  return (
    <div className={`flex-none transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${className}`}>
      <img 
        src={chevronDownIcon} 
        alt=""
        aria-hidden="true"
        className={`w-4 h-4 ${isOpen ? 'opacity-100' : 'opacity-60'}`}
      />
    </div>
  )
}

