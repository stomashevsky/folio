import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import IssuanceTypesSection from '../components/sections/IssuanceTypesSection'
import PlaygroundSection from '../components/sections/PlaygroundSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import FAQSection from '../components/sections/FAQSection'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

export default function IdentityLabPage() {
  usePageTitle({
    title: 'Identity Lab - Issue and Verify Digital IDs | Folio Wallet',
    description: 'Issue and verify digital IDs in a safe sandbox that mirrors real European digital ID flows. Explore demo documents, test QR based verification and see exactly which data is shared.'
  })
  return (
    <div className="flex flex-col items-start relative w-full">
      {/* Skip to main content link for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#171717] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        Skip to main content
      </a>
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

