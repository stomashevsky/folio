import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Icons
import audioWaveformIcon from '../assets/icons/AudioWaveform.svg'
import monitorSmartphoneIcon from '../assets/icons/MonitorSmartphone.svg'
import userSearchIcon from '../assets/icons/UserSearch.svg'
import settings2Icon from '../assets/icons/Settings2.svg'
import shieldHalfIcon from '../assets/icons/ShieldHalf.svg'
import waypointsIcon from '../assets/icons/Waypoints.svg'
import folderSearchIcon from '../assets/icons/FolderSearch.svg'

// Images
import behaviorInsightsHero from '../assets/images/behavior-insights-hero.png'
import behaviorInsightsHowItWorks1 from '../assets/images/behavior-insights-how-it-works-1.png'
import behaviorInsightsHowItWorks2 from '../assets/images/behavior-insights-how-it-works-2.png'
import behaviorInsightsHowItWorks3 from '../assets/images/behavior-insights-how-it-works-3.png'
import behaviorInsightsRiskIntelligence from '../assets/images/behavior-insights-risk-intelligence.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// Feature highlights data
const featureHighlights = [
  {
    icon: audioWaveformIcon,
    title: 'Fraud detection in real time',
    description: 'Quietly collect behavioral and device signals to identify risk in real time and respond instantly with the right level of friction.',
  },
  {
    icon: monitorSmartphoneIcon,
    title: 'Repeat fraud detection',
    description: 'Link devices, IP addresses, and user behavior to surface repeat offenders and coordinated fraud patterns automatically.',
  },
  {
    icon: userSearchIcon,
    title: 'User risk enrichment',
    description: 'Combine background signals into a single risk view to support confident decisions across the entire user lifecycle.',
  },
]

// How it works accordion items
const howItWorksItems: AccordionItemData[] = [
  {
    id: 'collect',
    title: 'Collect signals automatically',
    description: 'Passive signals are captured as users move through the flow. Add third party data to enrich context without extra steps.',
    desktopImage: behaviorInsightsHowItWorks1,
  },
  {
    id: 'adapt',
    title: 'Adapt flows in real time',
    description: 'Adjust verification steps dynamically based on live risk signals and user behavior.',
    desktopImage: behaviorInsightsHowItWorks2,
  },
  {
    id: 'decide',
    title: 'Decide with confidence',
    description: 'Use combined signals to approve, decline, or route users to review with greater accuracy.',
    desktopImage: behaviorInsightsHowItWorks3,
  },
]

// Key features accordion items
const keyFeaturesItems: AccordionItemData[] = [
  {
    id: 'behavioral',
    title: 'Behavioral patterns',
    description: `Understand how users interact with your flow to identify potential risk early, without relying on manual analysis or data science teams.

Signals include:
• Session duration
• Interaction interruptions
• Unusual behavior patterns
• Shortcut usage
• And more`,
  },
  {
    id: 'network',
    title: 'Network and device context',
    description: `Use background network and device attributes to surface hidden risk signals before fraud escalates.

Signals include:
• Network identifiers
• Device characteristics
• Approximate location
• And more`,
  },
  {
    id: 'relationships',
    title: 'Account relationships',
    description: 'Identify connections between users to stop repeat abuse and coordinated fraud across your platform. Detect shared attributes and overlapping signals to prevent known bad actors from returning.',
  },
]

// Use cases data
const useCasesData = [
  {
    icon: settings2Icon,
    title: 'Real time adjustment',
    description: 'Dynamically increase or reduce verification steps when risky behavior such as VPN usage or unusual access patterns is detected.',
  },
  {
    icon: shieldHalfIcon,
    title: 'Account takeover protection',
    description: 'Identify suspicious logins by comparing location, device, and network signals against known user behavior.',
  },
  {
    icon: waypointsIcon,
    title: 'Linked account detection',
    description: 'Reveal duplicate or connected accounts by analyzing shared devices, networks, and behavioral attributes.',
  },
  {
    icon: folderSearchIcon,
    title: 'Smart review routing',
    description: 'Automatically send high risk sessions to manual review instead of forcing instant approve or deny decisions.',
  },
]

export default function BehaviorInsightsPage() {
  usePageTitle({
    title: 'Behavior Insights | Folio Wallet',
    description: 'Analyze behavioral, device, and network signals to identify risk without interrupting the user experience.',
    ogTitle: 'Behavior Insights | Folio Wallet',
    ogDescription: 'Analyze behavioral, device, and network signals to identify risk without interrupting the user experience.',
    ogImage: 'https://folio.id/og-images/behavior-insights-hero.png',
    ogUrl: 'https://folio.id/platform/behavior-insights'
  })

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('collect')
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
                <HeroTagline icon={waypointsIcon}>Behavior insights</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Uncover fraud with passive signals
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Analyze behavioral, device, and network signals to identify risk without interrupting the user experience.
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
                src={behaviorInsightsHero}
                alt="Behavior insights preview"
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
                <HeroTagline icon={waypointsIcon}>Behavior insights</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Uncover fraud with passive signals
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Analyze behavioral, device, and network signals to identify risk without interrupting the user experience.
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
                src={behaviorInsightsHero}
                alt="Behavior insights preview"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Passive signals for smarter fraud detection"
                maxWidth="576px"
              />
              <div className="flex flex-col md:flex-row gap-6 items-start relative shrink-0 w-full">
                {featureHighlights.map((item, index) => (
                  <FeatureItem
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
                defaultOpenId="collect"
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
              defaultOpenId="collect"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Built in Risk Intelligence Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-5 items-start relative min-w-0">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                Built in risk intelligence
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Evaluate each session with an adaptive risk model trained on real world identity patterns across your user base.
              </p>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square">
              <img
                src={behaviorInsightsRiskIntelligence}
                alt="Built in risk intelligence"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                Built in risk intelligence
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Evaluate each session with an adaptive risk model trained on real world identity patterns across your user base.
              </p>
            </div>
            <div className="aspect-square relative rounded-2xl shrink-0 w-full">
              <img
                src={behaviorInsightsRiskIntelligence}
                alt="Built in risk intelligence"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-5 items-start relative min-w-0 max-w-[512px]">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Automatically gather passive signals that add context to every user session.
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start relative min-w-0">
              <Accordion
                items={keyFeaturesItems}
                defaultOpenId="behavioral"
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Automatically gather passive signals that add context to every user session.
              </p>
            </div>
            <Accordion
              items={keyFeaturesItems}
              defaultOpenId="behavioral"
              showMobileImages={false}
            />
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Practical uses of passive signals"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
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
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  Let's build better identity verification
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
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
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                Let's build better identity verification
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
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
      <ExploreMoreSection currentPath="/platform/behavior-insights" />
      <FooterSection />
    </div>
  )
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col gap-5 items-start relative shrink-0 w-full md:w-auto">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 size-10">
        <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full">
        <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
          {title}
        </p>
        <p className="font-normal relative shrink-0 text-[#737373] w-full">
          {description}
        </p>
      </div>
    </div>
  )
}
