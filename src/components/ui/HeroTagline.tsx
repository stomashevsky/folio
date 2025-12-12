interface HeroTaglineProps {
  icon: string
  children: React.ReactNode
}

export default function HeroTagline({ icon, children }: HeroTaglineProps) {
  return (
    <div className="flex items-center gap-1">
      <img 
        src={icon} 
        alt="" 
        aria-hidden="true" 
        className="w-5 h-5"
        style={{ filter: 'brightness(0) saturate(100%) invert(47%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
      />
      <span className="font-medium leading-5 text-sm text-[#737373]">
        {children}
      </span>
    </div>
  )
}

