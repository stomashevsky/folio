import { memo } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToSection } from '../utils/scrollToSection'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import globeIcon from '../assets/icons/Globe.svg'
import usersIcon from '../assets/icons/SquareUser.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'

// Background style matching other sections
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

function AboutPage() {
  usePageTitle({
    title: 'About | Folio',
    description: 'Folio is a digital identity company building secure document storage for individuals, verification solutions for businesses, and digital credentials for governments.',
    ogTitle: 'About | Folio',
    ogDescription: 'Folio is a digital identity company building secure document storage for individuals, verification solutions for businesses, and digital credentials for governments.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/about'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <h1 className="font-bold leading-9 md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
              About Folio
            </h1>
            <p className="font-normal leading-6 text-[#737373] text-base w-full">
              Folio is a digital identity company on a mission to give people control over their personal documents and identity. We build secure solutions that work for individuals, businesses, and governments.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-8 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Our story"
              maxWidth="768px"
            />
            <div className="flex flex-col gap-6 text-[#737373] text-base leading-6">
              <p>
                Founded in London, Folio started with a simple observation: people carry dozens of important documents but have no secure, organized way to access them digitally. Passports get lost, tickets expire in email threads, and important cards sit forgotten in drawers.
              </p>
              <p>
                We built Folio Wallet to solve this. An app where you can store passports, IDs, tickets, cards, and any document you need, all encrypted with keys only you control. Over a million documents are now safely stored in Folio, used by people in more than 120 countries.
              </p>
              <p>
                As we grew, businesses and governments approached us with similar challenges. How do you verify someone's identity online? How do you issue secure digital credentials? How do you protect sensitive data while making verification seamless?
              </p>
              <p>
                Today, Folio offers a complete identity platform: secure storage for individuals, verification tools for businesses, and digital credential infrastructure for governments. Our work with Albania's election commission, where we helped register over 365,000 diaspora voters, shows what's possible when identity technology is built right.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Folio in numbers"
              maxWidth="576px"
            />
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full">
              <StatItem value="1M+" label="Documents stored" />
              <StatItem value="120+" label="Countries" />
              <StatItem value="4.7★" label="App rating" />
              <StatItem value="365K+" label="Voters registered in Albania" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="What we believe"
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={lockKeyholeIcon}
                title="Privacy first"
                description="Your data belongs to you. We use zero-knowledge architecture so even we cannot access your documents."
              />
              <ToolCard
                icon={shieldCheckIcon}
                title="Security by design"
                description="End-to-end encryption, biometric protection, and rigorous security standards protect everything you store."
              />
              <ToolCard
                icon={globeIcon}
                title="Works everywhere"
                description="Identity should be portable. Folio works across borders, platforms, and use cases."
              />
              <ToolCard
                icon={usersIcon}
                title="Built for everyone"
                description="From travelers organizing trips to governments issuing credentials, we build tools that work for real people."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <SectionHeader
              title="Get in touch"
              description="Have questions about Folio? We'd love to hear from you."
              maxWidth="576px"
            />
            <div className="flex flex-col gap-4 items-center">
              <p className="text-[#737373] text-base">
                <span className="text-[#0a0a0a] font-medium">Address:</span> 88 Baker St, London W1U 6TQ, United Kingdom
              </p>
              <p className="text-[#737373] text-base">
                <span className="text-[#0a0a0a] font-medium">Email:</span>{' '}
                <a href="mailto:contact@folio.id" className="underline hover:text-[#0a0a0a] transition-colors">
                  contact@folio.id
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="primary" href="mailto:contact@folio.id">
                Contact us
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('get-the-app')}>
                Get the app
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 items-center text-center">
      <p className="font-bold leading-[36px] text-[30px] text-[#0a0a0a]">
        {value}
      </p>
      <p className="font-normal leading-6 text-[#737373] text-base">
        {label}
      </p>
    </div>
  )
}

export default memo(AboutPage)
