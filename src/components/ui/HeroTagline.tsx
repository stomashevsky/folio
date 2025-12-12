interface HeroTaglineProps {
  icon: string
  children: React.ReactNode
}

export default function HeroTagline({ icon, children }: HeroTaglineProps) {
  return (
    <div className="flex items-center gap-1">
      <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      <span className="font-medium leading-5 text-sm text-[#737373]">
        {children}
      </span>
    </div>
  )
}

