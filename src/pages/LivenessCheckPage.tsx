import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Icons
import shieldHalfIcon from '../assets/icons/ShieldHalf.svg'
import awardIcon from '../assets/icons/Award.svg'
import syringeIcon from '../assets/icons/Syringe.svg'
import circleCheckIcon from '../assets/icons/CircleCheck.svg'
import repeatIcon from '../assets/icons/Repeat.svg'
import circleHelpIcon from '../assets/icons/CircleHelp.svg'
import settings2Icon from '../assets/icons/Settings2.svg'
import scanFaceIcon from '../assets/icons/ScanFace.svg'

// Images
import livenessCheckHero from '../assets/images/liveness-check-hero.mp4'
import livenessCheckHowItWorks1 from '../assets/images/liveness-check-how-it-works-1.png'
import livenessCheckHowItWorks2 from '../assets/images/liveness-check-how-it-works-2.png'
import livenessCheckHowItWorks3 from '../assets/images/liveness-check-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const howItWorksItems: AccordionItemData[] = [
  {
    id: 'collect-signals',
    title: 'Collect signals',
    description: 'Folio gathers signals from the document, the selfie and the device to build a clear picture of the user.',
    desktopImage: livenessCheckHowItWorks1,
  },
  {
    id: 'analyze-assess',
    title: 'Analyze and assess',
    description: 'Advanced models review visual and non visual cues to spot inconsistencies and signs of fraud.',
    desktopImage: livenessCheckHowItWorks2,
  },
  {
    id: 'make-decisions',
    title: 'Make decisions',
    description: 'Folio guides the next steps automatically, from extra checks to final approvals.',
    desktopImage: livenessCheckHowItWorks3,
  },
]

const keyFeatures: { id: string; title: string; description: string }[] = [
  {
    id: 'eu-aligned',
    title: 'EU aligned injection detection',
    description: 'Folio follows the CEN TS 18099 2024 guidance for detecting and preventing injection based attacks.',
  },
  {
    id: 'signal-library',
    title: 'Extensive signal library',
    description: 'Gather a broad set of proprietary signals to understand the context behind each document and selfie submission.',
  },
  {
    id: 'updated-models',
    title: 'Continuously updated models',
    description: 'Benefit from models that improve over time and stay aligned with the latest fraud research.',
  },
  {
    id: 'multi-frame',
    title: 'Multi frame analysis',
    description: 'Review several frames instead of a single capture to improve accuracy and reduce false positives.',
  },
  {
    id: 'hardware-detection',
    title: 'Compromised hardware detection',
    description: 'Identify emulators, rooted devices and other unsafe environments that attackers rely on for injection attempts.',
  },
  {
    id: 'scaled-attack',
    title: 'Scaled attack protection',
    description: 'Detect repeating patterns and link related attempts to block coordinated or scaled fraud activity.',
  },
  {
    id: 'flexible-controls',
    title: 'Flexible controls and checks',
    description: 'Fine tune quality thresholds, obstruction detection and retry rules to match your compliance and business needs.',
  },
  {
    id: 'fair-consistent',
    title: 'Fair and consistent across devices',
    description: 'Designed to work uniformly across different skin tones, lighting, operating systems and hardware.',
  },
  {
    id: 'auto-capture',
    title: 'Auto capture',
    description: 'Photos are taken automatically at the right moment to reduce user mistakes.',
  },
  {
    id: 'user-guidance',
    title: 'User guidance',
    description: 'Clear gestures and instructions help users capture accurate selfies and generate stronger fraud signals.',
  },
]

export default function LivenessCheckPage() {
  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('collect-signals')
  const [activeKeyFeatureId, setActiveKeyFeatureId] = useState<string | null>('eu-aligned')

  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

  usePageTitle({
    title: 'Liveness Check | Folio Wallet',
    description: 'Guard against the broadest range of face spoofs through a multi-layered solution.',
    ogTitle: 'Liveness Check | Folio Wallet',
    ogDescription: 'Guard against the broadest range of face spoofs through a multi-layered solution.',
    ogUrl: 'https://folio.id/platform/liveness-check'
  })

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
                <HeroTagline icon={scanFaceIcon}>Liveness check</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Trusted human transactions
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Guard against the broadest range of face spoofs through a multi-layered solution.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button variant="primary">
                  Get in touch
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
                <HeroTagline icon={scanFaceIcon}>Liveness check</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Trusted human transactions
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Guard against the broadest range of face spoofs through a multi-layered solution.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary">
                  Get in touch
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

        {/* Advanced protection from spoofing and fraud Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Advanced protection from spoofing and fraud"
                maxWidth="576px"
              />
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title="Spoof protection"
                  description="Shield your system from deepfakes, synthetic faces, image manipulation and other spoof attempts."
                />
                <FeatureHighlight
                  icon={awardIcon}
                  title="Tested and certified"
                  description="Our liveness checks meet the ISO/IEC 30107 3 standard, validated by a NIST accredited lab."
                />
                <FeatureHighlight
                  icon={syringeIcon}
                  title="Injection defense"
                  description="Use a wide mix of visual, device, behavioral and network signals, along with ensemble models and adaptive step up methods."
                />
              </div>
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-10 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title="Spoof protection"
                  description="Shield your system from deepfakes, synthetic faces, image manipulation and other spoof attempts."
                />
                <FeatureHighlight
                  icon={awardIcon}
                  title="Tested and certified"
                  description="Our liveness checks meet the ISO/IEC 30107 3 standard, validated by a NIST accredited lab."
                />
                <FeatureHighlight
                  icon={syringeIcon}
                  title="Injection defense"
                  description="Use a wide mix of visual, device, behavioral and network signals, along with ensemble models and adaptive step up methods."
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
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
                defaultOpenId="collect-signals"
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
              defaultOpenId="collect-signals"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Key features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start max-w-full md:max-w-[512px] relative shrink-0 w-full md:w-auto md:flex-1 whitespace-pre-wrap">
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] w-full">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Power your verification flow with layered signals, modern models and adaptive controls.
              </p>
            </div>
            <div className="flex flex-col gap-0 items-start relative shrink-0 w-full md:flex-1">
              {keyFeatures.map((feature) => (
                <KeyFeatureItem
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  isOpen={activeKeyFeatureId === feature.id}
                  onClick={() => setActiveKeyFeatureId(activeKeyFeatureId === feature.id ? null : feature.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Smart liveness detection Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Smart liveness detection"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                <ToolCard
                  icon={shieldHalfIcon}
                  title="GenAI spoof detection"
                  description="Spot visual inconsistencies linked to deepfakes and synthetic faces, even when they are not noticeable to the human eye."
                />
                <ToolCard
                  icon={circleCheckIcon}
                  title="Presentation attack detection"
                  description="Identify presentation attacks in line with ISO IEC 30107 3 standards using automated liveness checks."
                />
                <ToolCard
                  icon={syringeIcon}
                  title="Injection attack detection"
                  description="Detect advanced injection attempts, including cases where fraudsters use stolen selfies from real users."
                />
                <ToolCard
                  icon={repeatIcon}
                  title="Pattern risk detection"
                  description="Recognize repeating fraud behaviors early and stop coordinated attempts before they expand."
                />
                <ToolCard
                  icon={circleHelpIcon}
                  title="Reviewer support"
                  description="Give manual reviewers clear liveness signals and insights to help them make confident and accurate decisions."
                />
                <ToolCard
                  icon={settings2Icon}
                  title="Dynamic assurance"
                  description="Apply the right amount of friction based on real time liveness results, protecting against fraud while keeping trusted users moving forward."
                />
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
                  Build a stronger identity layer
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                  Talk with our team to see how Folio can elevate your verification flow and protect your users at every step.
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
                Build a stronger identity layer
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                Talk with our team to see how Folio can elevate your verification flow and protect your users at every step.
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
      <ExploreMoreSection currentPath="/platform/liveness-check" />
      <FooterSection />
    </div>
  )
}

function FeatureHighlight({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col gap-5 items-start relative shrink-0">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-md shrink-0 size-10 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
        <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
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

function KeyFeatureItem({ title, description, isOpen, onClick }: { title: string; description: string; isOpen: boolean; onClick: () => void }) {
  return (
    <button
      className="flex flex-col items-start border-b border-[#e5e5e5] py-4 w-full text-left cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full">
        <p className="font-normal leading-7 text-lg text-[#0a0a0a] text-left flex-1">
          {title}
        </p>
        <svg
          className={`w-4 h-4 text-[#737373] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <p className="font-normal leading-5 text-sm text-[#737373] text-left w-full pt-2 pb-2">
          {description}
        </p>
      )}
    </button>
  )
}
