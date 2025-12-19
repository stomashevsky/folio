import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button, HeroTagline } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToTop } from '../utils/scrollToTop'
import { PLATFORM_ITEMS } from '../constants/platformItems'

// Video
import livenessCheckHero from '../assets/images/liveness-check-hero.mp4'

// Icons
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import ageIcon from '../assets/icons/Age.svg'
import briefcaseIcon from '../assets/icons/Briefcase.svg'
import ticketIcon from '../assets/icons/Ticket.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const SOLUTIONS = [
  { icon: ageIcon, title: 'Age compliance', description: 'Verify age for regulated industries like alcohol, tobacco and gambling.', to: '/solutions/age-compliance' },
  { icon: briefcaseIcon, title: 'Client onboarding', description: 'Streamline KYC, AML and customer verification processes.', to: '/solutions/client-onboarding' },
  { icon: ticketIcon, title: 'Digital ticketing', description: 'Issue and verify secure digital tickets and passes.', to: '/solutions/digital-ticketing' },
]

function PlatformPage() {
  const navigate = useNavigate()

  usePageTitle({
    title: 'Verification Platform | Folio',
    description: 'Identity verification, document intelligence, liveness detection and more. Build trust at scale with Folio verification platform.',
    ogTitle: 'Verification Platform | Folio',
    ogDescription: 'Identity verification, document intelligence, liveness detection and more. Build trust at scale with Folio verification platform.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/platform'
  })

  const handleNavigate = (to: string) => {
    navigate(to)
    setTimeout(() => scrollToTop(), 100)
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <HeroTagline icon={shieldCheckIcon}>Platform</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Build trust at scale
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Identity verification, document intelligence, liveness detection and more. Everything you need to verify customers, prevent fraud and stay compliant.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary" href="mailto:contact@folio.id">
                  Contact sales
                </Button>
                <Button variant="outline" onClick={() => handleNavigate('/government/playground')}>
                  Try Playground
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <video
                src={livenessCheckHero}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <HeroTagline icon={shieldCheckIcon}>Platform</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Build trust at scale
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Identity verification, document intelligence, liveness detection and more. Everything you need to verify customers, prevent fraud and stay compliant.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" href="mailto:contact@folio.id">
                  Contact sales
                </Button>
                <Button variant="outline" onClick={() => handleNavigate('/government/playground')}>
                  Try Playground
                </Button>
              </div>
            </div>
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <video
                src={livenessCheckHero}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Verification products"
              description="Modular tools that work together to create seamless verification experiences."
              maxWidth="576px"
            />

            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              {PLATFORM_ITEMS.map((item) => (
                <ToolCard
                  key={item.path}
                  icon={item.icon}
                  title={item.label}
                  description={item.description}
                  to={item.path}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Built for your industry"
              description="Tailored solutions for regulated industries and high-trust environments."
              maxWidth="576px"
            />

            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              {SOLUTIONS.map((solution) => (
                <ToolCard
                  key={solution.to}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  to={solution.to}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-8 items-center max-w-[576px] px-6 py-0 relative shrink-0 w-full text-center">
            <SectionHeader
              title="Ready to get started?"
              description="Contact our team to learn how Folio can help you verify customers and prevent fraud."
              maxWidth="576px"
            />
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <Button variant="primary" href="mailto:contact@folio.id">
                Contact sales
              </Button>
              <Button variant="outline" onClick={() => handleNavigate('/government/playground')}>
                Try Playground
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

export default memo(PlatformPage)
