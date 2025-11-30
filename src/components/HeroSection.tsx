import Button from './ui/Button'
import { SectionHeader } from './ui'
import heroPhone from '../assets/images/hero-phone.png'
import { scrollToSection } from '../utils/scrollToSection'

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full"
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
          <SectionHeader
            label="Inside Folio Wallet"
            title="Identity Lab"
            description="Issue and verify digital IDs in a safe sandbox that mirrors real European digital ID flows. Explore demo documents, test QR based verification and see exactly which data is shared."
            align="left"
            maxWidth="672px"
            headingLevel="h1"
          />
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-3 items-start relative">
            <Button 
              variant="primary"
              onClick={() => {
                scrollToSection('playground')
              }}
            >
              Playground
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
          <img 
            alt="Identity Lab interface preview" 
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full" 
            src={heroPhone}
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          <SectionHeader
            label="Inside Folio Wallet"
            title="Identity Lab"
            description="Issue and verify digital IDs in a safe sandbox that mirrors real European digital ID flows. Explore demo documents, test QR based verification and see exactly which data is shared."
            align="left"
            maxWidth="672px"
            headingLevel="h1"
          />
          
          {/* Buttons */}
          <div className="flex flex-col gap-3 items-start relative shrink-0">
            <Button 
              variant="primary"
              onClick={() => {
                scrollToSection('playground')
              }}
            >
              Playground
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
          <img 
            alt="Identity Lab interface preview" 
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full" 
            src={heroPhone}
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

