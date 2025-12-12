import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Icons
import playIcon from '../assets/icons/Play.svg'
import passportIcon from '../assets/icons/Passport.svg'
import fileStackIcon from '../assets/icons/FileStack.svg'
import refreshCcwIcon from '../assets/icons/RefreshCcw.svg'
import circleUserIcon from '../assets/icons/CircleUser.svg'
import gitForkIcon from '../assets/icons/GitFork.svg'

// Images
import dynamicFlowHero from '../assets/images/dynamic-flow-hero.png'
import dynamicFlowHowItWorks1 from '../assets/images/dynamic-flow-how-it-works-1.png'
import dynamicFlowHowItWorks2 from '../assets/images/dynamic-flow-how-it-works-2.png'
import dynamicFlowHowItWorks3 from '../assets/images/dynamic-flow-how-it-works-3.png'
import dynamicFlowHowItWorks4 from '../assets/images/dynamic-flow-how-it-works-4.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// How it works accordion items
const howItWorksItems: AccordionItemData[] = [
  {
    id: 'branded',
    title: 'Build branded experiences',
    description: 'Create seamless identity flows that feel native to your product.',
    desktopImage: dynamicFlowHowItWorks1,
  },
  {
    id: 'risk',
    title: 'Adapt to risk instantly',
    description: 'Increase or reduce verification steps based on real time signals.',
    desktopImage: dynamicFlowHowItWorks2,
  },
  {
    id: 'decide',
    title: 'Decide with confidence',
    description: 'Combine risk signals and trusted data to power better decisions.',
    desktopImage: dynamicFlowHowItWorks3,
  },
  {
    id: 'optimize',
    title: 'Optimize over time',
    description: 'Fine tune flows using real world performance insights.',
    desktopImage: dynamicFlowHowItWorks4,
  },
]

// Key features accordion items
const keyFeaturesItems: AccordionItemData[] = [
  {
    id: 'flexible',
    title: 'Flexible verification methods',
    description: 'Support multiple verification options, including government IDs, document scans, selfies, NFC, and contact checks, and adapt flows to your risk and business rules.',
  },
  {
    id: 'branding',
    title: 'Custom branding',
    description: 'Deliver a consistent, on brand verification experience that visually matches your product across all user touchpoints.',
  },
  {
    id: 'passive',
    title: 'Passive risk signals',
    description: 'Collect behavioral and device signals in the background to better understand risk without interrupting the user experience.',
  },
  {
    id: 'detection',
    title: 'Document type detection',
    description: 'Users can submit documents without selecting types or formats, reducing friction and preventing input errors.',
  },
  {
    id: 'prefill',
    title: 'Smart data prefill',
    description: 'Reuse extracted data from documents and IDs to automatically populate other steps and reduce manual input.',
  },
  {
    id: 'configurable',
    title: 'Configurable checks',
    description: 'Enable only the checks you need, such as document validity, age requirements, barcode capture, or NFC reads, based on your policies.',
  },
  {
    id: 'device',
    title: 'Works on any device',
    description: 'Provide a smooth verification experience across mobile and desktop, regardless of device or integration setup.',
  },
]

// Use cases data
const useCasesData = [
  {
    icon: playIcon,
    title: 'User onboarding',
    description: 'Create a smooth first experience with branded flows that adapt to risk in real time.',
  },
  {
    icon: passportIcon,
    title: 'Identity verification',
    description: 'Confirm user identity instantly using government IDs and real time checks.',
  },
  {
    icon: fileStackIcon,
    title: 'Document collection',
    description: 'Request and gather required documents within a single guided flow.',
  },
  {
    icon: refreshCcwIcon,
    title: 'User reverification',
    description: 'Reconfirm returning users during sensitive actions with minimal friction.',
  },
  {
    icon: circleUserIcon,
    title: 'Automated account setup',
    description: 'Create user accounts automatically once verification requirements are met.',
  },
]

export default function DynamicFlowPage() {
  usePageTitle({
    title: 'Dynamic Flow | Folio Wallet',
    description: 'Adapt verification in real time using risk signals to reduce fraud while keeping the experience smooth.',
    ogTitle: 'Dynamic Flow | Folio Wallet',
    ogDescription: 'Adapt verification in real time using risk signals to reduce fraud while keeping the experience smooth.',
    ogImage: 'https://folio.id/src/assets/images/dynamic-flow-hero.png',
    ogUrl: 'https://folio.id/platform/dynamic-flow'
  })

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('branded')
  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

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
                <HeroTagline icon={gitForkIcon}>Dynamic flow</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Identity verification that finds the right balance
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Adapt verification in real time using risk signals to reduce fraud while keeping the experience smooth.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square">
              <img
                src={dynamicFlowHero}
                alt="Dynamic flow preview"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <HeroTagline icon={gitForkIcon}>Dynamic flow</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Identity verification that finds the right balance
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Adapt verification in real time using risk signals to reduce fraud while keeping the experience smooth.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="aspect-square relative rounded-2xl shrink-0 w-full">
              <img
                src={dynamicFlowHero}
                alt="Dynamic flow preview"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square">
              <img
                src={activeHowItWorksItem.desktopImage}
                alt={activeHowItWorksItem.title}
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="How it works"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="branded"
                onItemChange={setActiveHowItWorksId}
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="How it works"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={howItWorksItems}
              defaultOpenId="branded"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Key Features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-5 items-start relative min-w-0 max-w-[512px]">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                Everything you need to design reliable identity journeys
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start relative min-w-0">
              <Accordion
                items={keyFeaturesItems}
                defaultOpenId="flexible"
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                Everything you need to design reliable identity journeys
              </p>
            </div>
            <Accordion
              items={keyFeaturesItems}
              defaultOpenId="flexible"
              showMobileImages={false}
            />
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Dynamic flow use cases"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {useCasesData.map((item, index) => (
                  <ToolCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-0 md:pb-24 relative shrink-0 w-full bg-white">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center max-w-[1280px] px-6 relative shrink-0 w-full">
            <div className="flex gap-16 items-center p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
              <div className="flex flex-1 flex-col gap-4 items-start relative shrink-0 max-w-[576px] min-w-0">
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Let's build better identity verification
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                  Talk to our team to explore how Folio can enhance your onboarding and verification experience.
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Let's build better identity verification
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                Talk to our team to explore how Folio can enhance your onboarding and verification experience.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0">
              <Button variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ExploreMoreSection currentPath="/platform/dynamic-flow" />
      <FooterSection />
    </div>
  )
}
