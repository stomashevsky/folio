import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import IssuanceTypesSection from '../components/sections/IssuanceTypesSection'
import PlaygroundSection from '../components/sections/PlaygroundSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import FAQSection from '../components/sections/FAQSection'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { SkipToContentLink } from '../components/ui'

export default function IdentityLabPage() {
  usePageTitle({
    title: 'Identity Lab - Issue and Verify Digital IDs | Folio Wallet',
    description: 'Issue and verify digital IDs in a safe sandbox that mirrors real European digital ID flows. Explore demo documents, test QR based verification and see exactly which data is shared.',
    ogTitle: 'Identity Lab - Issue and Verify Digital IDs | Folio Wallet',
    ogDescription: 'Issue and verify digital IDs in a safe sandbox that mirrors real European digital ID flows.',
    ogImage: 'https://folio.id/src/assets/images/hero-phone.png',
    ogUrl: 'https://folio.id/identity-lab'
  })
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

