import Navbar from '../components/Navbar'
import { SectionHeader } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NfcIdentityScanPage() {
  usePageTitle({
    title: 'NFC Identity Scan | Folio Wallet',
    description: 'Read secure chip data from compatible IDs and passports.',
    ogTitle: 'NFC Identity Scan | Folio Wallet',
    ogDescription: 'Read secure chip data from compatible IDs and passports.',
    ogUrl: 'https://folio.id/platform/nfc-identity-scan'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-4 md:gap-6 items-center text-center max-w-[576px] relative shrink-0 w-full px-6">
            <SectionHeader
              title="NFC Identity Scan"
              description="Read secure chip data from compatible IDs and passports."
              align="center"
              maxWidth="576px"
            />
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
