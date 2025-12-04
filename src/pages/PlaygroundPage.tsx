import Navbar from '../components/Navbar'
import Issue from '../components/Issue'
import IssuanceTypesSection from '../components/sections/IssuanceTypesSection'
import FAQSection from '../components/sections/FAQSection'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { SkipToContentLink } from '../components/ui'

export default function PlaygroundPage() {
  usePageTitle({
    title: 'Playground - Issue and Verify Digital IDs | Folio Wallet',
    description: 'A safe sandbox for issuing demo documents and testing EUDI compatible verification flows. Try real issuance steps, scan QR codes, explore data sharing and see how digital identity behaves in practice.',
    ogTitle: 'Playground - Issue and Verify Digital IDs | Folio Wallet',
    ogDescription: 'A safe sandbox for issuing demo documents and testing EUDI compatible verification flows.',
    ogImage: 'https://folio.id/src/assets/images/identity-lab-hero.png',
    ogUrl: 'https://folio.id/government/playground'
  })
  return (
    <div className="flex flex-col items-start relative w-full">
      <SkipToContentLink />
      <Navbar />
      <main className="w-full">
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 w-full">
            <Issue />
          </div>
        </section>
        <IssuanceTypesSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  )
}
