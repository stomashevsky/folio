import Navbar from '../components/Navbar'
import { SectionHeader, Button } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function IdentityVerificationPage() {
  usePageTitle({
    title: 'Identity Verification (KYC) | Folio Wallet',
    description: 'Identity verification solutions powered by Folio Wallet.',
    ogTitle: 'Identity Verification (KYC) | Folio Wallet',
    ogDescription: 'Identity verification solutions powered by Folio Wallet.',
    ogUrl: 'https://folio.id/solutions/identity-verification'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative flex-1 w-full">
          <div className="flex flex-col gap-6 items-center justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] text-center">
              Identity Verification (KYC)
            </h1>
            <p className="font-normal leading-6 text-[#737373] text-base text-center max-w-2xl">
              Secure identity verification solutions powered by Folio Wallet.
            </p>
            <Button variant="primary">
              Contact Folio Team
            </Button>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
