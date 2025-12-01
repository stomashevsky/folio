import { memo } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import IssuanceTypesSection from './sections/IssuanceTypesSection'
import PlaygroundSection from './sections/PlaygroundSection'
import HowItWorksSection from './sections/HowItWorksSection'
import FAQSection from './sections/FAQSection'
import FooterSection from './sections/FooterSection'
import { SkipToContentLink } from './ui'

function LandingPage() {
  return (
    <div className="flex flex-col items-start relative w-full">
      <SkipToContentLink />
      <Navbar />
      <HeroSection />
      <IssuanceTypesSection />
      <PlaygroundSection />
      <HowItWorksSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}

export default memo(LandingPage)

