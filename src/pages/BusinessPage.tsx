import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import { SectionHeader, Button } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'

export default function BusinessPage() {
  usePageTitle({
    title: 'Business Solutions | Folio Wallet',
    description: 'Business solutions coming soon.'
  })
  return (
    <div className="flex flex-col items-start relative w-full">
      <Navbar />
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full">
        <div className="flex flex-col gap-8 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <SectionHeader
            title="Business"
            description="Business solutions coming soon."
            headingLevel="h1"
          />
          <Button 
            variant="primary" 
            href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app
          </Button>
        </div>
      </section>
      <FooterSection />
    </div>
  )
}

