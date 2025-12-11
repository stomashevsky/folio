import Navbar from '../components/Navbar'
import { SectionHeader } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

export default function ReviewWorkspacePage() {
  usePageTitle({
    title: 'Review Workspace | Folio Wallet',
    description: 'Organize and resolve verification cases.',
    ogTitle: 'Review Workspace | Folio Wallet',
    ogDescription: 'Organize and resolve verification cases.',
    ogUrl: 'https://folio.id/platform/review-workspace'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-4 md:gap-6 items-center text-center max-w-[576px] relative shrink-0 w-full px-6">
            <SectionHeader
              title="Review Workspace"
              description="Organize and resolve verification cases."
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
