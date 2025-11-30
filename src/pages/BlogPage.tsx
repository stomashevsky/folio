import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import { SectionHeader } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'

export default function BlogPage() {
  usePageTitle({
    title: 'Blog | Folio Wallet',
    description: 'Blog coming soon.'
  })
  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full flex-1">
        <div className="flex flex-col gap-8 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <SectionHeader
            title="Blog"
            description="Blog coming soon."
            headingLevel="h1"
          />
        </div>
      </section>
      <FooterSection />
    </div>
  )
}

