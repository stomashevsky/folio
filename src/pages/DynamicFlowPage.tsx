import Navbar from '../components/Navbar'
import { SectionHeader } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

export default function DynamicFlowPage() {
  usePageTitle({
    title: 'Dynamic Flow | Folio Wallet',
    description: 'Coordinate identity checks with flexible logic.',
    ogTitle: 'Dynamic Flow | Folio Wallet',
    ogDescription: 'Coordinate identity checks with flexible logic.',
    ogUrl: 'https://folio.id/platform/dynamic-flow'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-4 md:gap-6 items-center text-center max-w-[576px] relative shrink-0 w-full px-6">
            <SectionHeader
              title="Dynamic Flow"
              description="Coordinate identity checks with flexible logic."
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
