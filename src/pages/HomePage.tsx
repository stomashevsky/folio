import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button, HeroTagline } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import GetTheAppSection from '../components/sections/GetTheAppSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToTop } from '../utils/scrollToTop'
import { PLATFORM_ITEMS } from '../constants/platformItems'

// Images
import folioAppHero from '../assets/images/folio-app-hero.png'
import governmentSolutionsHero from '../assets/images/government-solutions-hero.png'
import governmentTestimonialAvatar from '../assets/images/government-testimonial-avatar.png'

// Video
import livenessCheckHero from '../assets/images/liveness-check-hero.mp4'

// Icons
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import landmarkIcon from '../assets/icons/Landmark.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import keyRoundIcon from '../assets/icons/KeyRound.svg'
import fingerprintIcon from '../assets/icons/Fingerprint.svg'
import ageIcon from '../assets/icons/Age.svg'
import briefcaseIcon from '../assets/icons/Briefcase.svg'
import ticketIcon from '../assets/icons/Ticket.svg'
import lightbulbIcon from '../assets/icons/Lightbulb.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}


const SOLUTIONS = [
  { icon: ageIcon, title: 'Age compliance', description: 'Verify age for regulated industries', to: '/solutions/age-compliance' },
  { icon: briefcaseIcon, title: 'Client onboarding', description: 'Streamline KYC and customer verification', to: '/solutions/client-onboarding' },
  { icon: ticketIcon, title: 'Digital ticketing', description: 'Issue and verify secure digital tickets', to: '/solutions/digital-ticketing' },
]

const SECURITY_FEATURES = [
  { icon: lockKeyholeIcon, title: 'End-to-end encryption', description: 'Your data is encrypted with keys only you control' },
  { icon: keyRoundIcon, title: 'Zero-knowledge architecture', description: 'We cannot access your documents, even if we wanted to' },
  { icon: fingerprintIcon, title: 'Biometric protection', description: 'Face ID and fingerprint unlock for extra security' },
]

function HomePage() {
  const navigate = useNavigate()

  usePageTitle({
    title: 'Folio | Your digital wallet for documents and identity',
    description: 'Secure document storage for individuals. Verification platform for businesses. Digital credentials for governments.',
    ogTitle: 'Folio | Your digital wallet for documents and identity',
    ogDescription: 'Secure document storage for individuals. Verification platform for businesses. Digital credentials for governments.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/'
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
          <div className="flex flex-col gap-6 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <h1 className="font-bold leading-9 md:leading-[56px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
              Your digital wallet for documents and identity
            </h1>
            <p className="font-normal leading-6 text-[#737373] text-lg w-full">
              Secure document storage for individuals. Verification platform for businesses. Digital credentials for governments.
            </p>
          </div>
        </section>

        {/* Wallet Section (B2C) */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <HeroTagline icon={smartphoneIcon}>Folio app</HeroTagline>
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  Your documents, always with you
                </h2>
                <p className="font-normal leading-6 text-[#737373] text-base w-full mt-2">
                  Keep passports, IDs, tickets and cards in one secure place. Folio imports any document from email, PDF or photo, extracts key details and keeps everything organized and accessible.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary" onClick={() => handleNavigate('/wallet')}>
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img
                src={folioAppHero}
                alt="Folio app showing passport, ID card and travel tickets organized in a digital wallet"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="eager"
                fetchPriority="high"
                width={480}
                height={480}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <HeroTagline icon={smartphoneIcon}>Folio app</HeroTagline>
              <h2 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                Your documents, always with you
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Keep passports, IDs, tickets and cards in one secure place. Folio imports any document from email, PDF or photo, extracts key details and keeps everything organized and accessible.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" onClick={() => handleNavigate('/wallet')}>
                Learn more
              </Button>
            </div>
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img
                src={folioAppHero}
                alt="Folio app showing passport, ID card and travel tickets organized in a digital wallet"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="eager"
                fetchPriority="high"
                width={480}
                height={480}
              />
            </div>
          </div>
        </section>

        {/* Platform Section (B2B) */}
        <section id="platform" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
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
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <HeroTagline icon={shieldCheckIcon}>Platform</HeroTagline>
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  Build trust at scale
                </h2>
                <p className="font-normal leading-6 text-[#737373] text-base w-full mt-2">
                  Identity verification, document intelligence, liveness detection and more. Everything you need to verify customers and prevent fraud.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary" href="mailto:contact@folio.id">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <HeroTagline icon={shieldCheckIcon}>Platform</HeroTagline>
              <h2 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                Build trust at scale
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Identity verification, document intelligence, liveness detection and more. Everything you need to verify customers and prevent fraud.
              </p>
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
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" href="mailto:contact@folio.id">
                Get in touch
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full mt-8 md:mt-12">
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
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
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-center w-full">
              <HeroTagline icon={lightbulbIcon}>Solutions</HeroTagline>
              <SectionHeader
                title="Built for your industry"
                description="Tailored solutions for regulated industries and high-trust environments."
                maxWidth="576px"
              />
            </div>

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

        {/* Government Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <HeroTagline icon={landmarkIcon}>Government</HeroTagline>
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  Digital identity for governments
                </h2>
                <p className="font-normal leading-6 text-[#737373] text-base w-full mt-2">
                  Tools for governments to design, test and deploy modern digital credentials aligned with global standards. Explore our sandbox to see European digital ID flows in action.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary" onClick={() => handleNavigate('/government/playground')}>
                  Explore Playground
                </Button>
                <Button variant="outline" onClick={() => handleNavigate('/government')}>
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img
                src={governmentSolutionsHero}
                alt="Government digital credentials including voter card and national ID on mobile phone"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
                width={480}
                height={480}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <HeroTagline icon={landmarkIcon}>Government</HeroTagline>
              <h2 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                Digital identity for governments
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Tools for governments to design, test and deploy modern digital credentials aligned with global standards. Explore our sandbox to see European digital ID flows in action.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" onClick={() => handleNavigate('/government/playground')}>
                Explore Playground
              </Button>
              <Button variant="outline" onClick={() => handleNavigate('/government')}>
                Learn more
              </Button>
            </div>
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img
                src={governmentSolutionsHero}
                alt="Government digital credentials including voter card and national ID on mobile phone"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
                width={480}
                height={480}
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="flex flex-col items-center px-0 py-16 md:py-24 relative w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-8 items-center max-w-[672px] px-6 w-full">
            <p className="font-medium leading-7 md:leading-7 text-lg md:text-xl text-[#0a0a0a] text-center">
              "Working with Folio has been a transformative experience… they set a new standard of excellence for how digital identity solutions should be delivered."
            </p>
            <div className="flex flex-col gap-4 items-center">
              <div className="relative rounded-full shrink-0 w-12 h-12 md:w-14 md:h-14">
                <img
                  src={governmentTestimonialAvatar}
                  alt="Ilirjan Celibashi"
                  className="absolute inset-0 object-cover rounded-full w-full h-full"
                  loading="lazy"
                  width={56}
                  height={56}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-0.5 md:gap-2 items-center text-base text-center">
                <span className="font-medium text-[#0a0a0a]">Ilirjan Celibashi</span>
                <span className="hidden md:inline text-[#737373]">·</span>
                <span className="font-normal text-[#737373]">State Election Commissioner, Albania</span>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Security you can trust"
              description="Your data is protected with industry-leading security measures."
              maxWidth="576px"
            />

            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              {SECURITY_FEATURES.map((feature) => (
                <ToolCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <div className="flex justify-center w-full">
              <Button variant="outline" onClick={() => handleNavigate('/security')}>
                Learn more
              </Button>
            </div>
          </div>
        </section>

        {/* Get the App CTA */}
        <GetTheAppSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default memo(HomePage)
