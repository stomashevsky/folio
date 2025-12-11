import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard } from '../components/ui'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Icons
import scanFaceIcon from '../assets/icons/ScanFace.svg'
import awardIcon from '../assets/icons/Award.svg'
import shieldHalfIcon from '../assets/icons/ShieldHalf.svg'
import scaleIcon from '../assets/icons/Scale.svg'
import globeIcon from '../assets/icons/globe.svg'
import settings2Icon from '../assets/icons/Settings2.svg'
import barChart4Icon from '../assets/icons/BarChart4.svg'
import zapIcon from '../assets/icons/Zap.svg'
import squareUserIcon from '../assets/icons/SquareUser.svg'
import refreshCcwIcon from '../assets/icons/RefreshCcw.svg'
import userCheckIcon from '../assets/icons/UserCheck.svg'

// Images
import faceMatchHero from '../assets/images/face-match-hero.png'
import faceMatchHowItWorks from '../assets/images/face-match-how-it-works.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const howItWorksItems: AccordionItemData[] = [
  {
    id: 'compliance-rules',
    title: 'Set your compliance rules',
    description: 'Define what you collect, how you verify it and how you handle sensitive scenarios. Save your settings as templates for consistent use.',
    desktopImage: faceMatchHowItWorks,
  },
  {
    id: 'user-experience',
    title: 'Shape a better user experience',
    description: 'Improve capture quality with real time guidance and auto-captured selfies. Refine your flow with A/B testing and easy adjustments.',
    desktopImage: faceMatchHowItWorks,
  },
  {
    id: 'manage-data',
    title: 'Manage selfie data on your terms',
    description: 'Update workflows based on your analysis, automate key actions and apply redaction or step up checks where needed.',
    desktopImage: faceMatchHowItWorks,
  },
]

const keyFeatures = [
  {
    id: 'flexible-controls',
    title: 'Flexible controls and checks',
    description: 'Set compliance rules, adjust fraud checks and tune retries to find the right balance of security and conversion.',
  },
  {
    id: 'signal-library',
    title: 'Rich signal library',
    description: 'Use a wide range of proprietary signals to understand the context behind every selfie submission.',
  },
  {
    id: 'improving-models',
    title: 'Continuously improving models',
    description: 'Benefit from models that evolve with new research and real world fraud patterns.',
  },
  {
    id: 'multi-frame',
    title: 'Multi frame analysis',
    description: 'Review several frames to boost accuracy and reduce false positives.',
  },
  {
    id: 'auto-capture',
    title: 'Auto capture',
    description: 'Capture the selfie automatically at the ideal moment for better quality and smoother user flow.',
  },
  {
    id: 'user-guidance',
    title: 'User guidance',
    description: 'Provide real time prompts that help users take clear selfies and avoid common capture errors.',
  },
  {
    id: 'cross-device',
    title: 'Cross device compatibility',
    description: 'Deliver a consistent experience across different devices, operating systems and environments.',
  },
]

export default function FaceMatchPage() {
  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('compliance-rules')
  const [activeKeyFeatureId, setActiveKeyFeatureId] = useState<string | null>('flexible-controls')
  
  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

  usePageTitle({
    title: 'Face Match | Folio Wallet',
    description: 'Exceptional accuracy delivered with privacy, transparency and a seamless user experience.',
    ogTitle: 'Face Match | Folio Wallet',
    ogDescription: 'Exceptional accuracy delivered with privacy, transparency and a seamless user experience.',
    ogUrl: 'https://folio.id/platform/face-match'
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
                <p className="font-medium leading-5 text-sm text-[#737373]">
                  Face match
                </p>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Powerful face recognition
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Exceptional accuracy delivered with privacy, transparency and a seamless user experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={faceMatchHero} 
                alt="Face match preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <p className="font-medium leading-5 text-sm text-[#737373]">
                  Face match
                </p>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Powerful face recognition
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Exceptional accuracy delivered with privacy, transparency and a seamless user experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img 
                src={faceMatchHero} 
                alt="Face match preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Next level face recognition protection Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Next level face recognition protection"
                maxWidth="576px"
              />
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={scanFaceIcon}
                  title="High precision face recognition"
                  description="Folio combines advanced detection, liveness and matching models to deliver accurate and consistent face recognition performance."
                />
                <FeatureHighlight
                  icon={awardIcon}
                  title="Independently tested and certified"
                  description="Our face matching and liveness technologies are evaluated by accredited labs to confirm accuracy, reliability and fairness across demographics."
                />
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title="Defense grade performance"
                  description="Folio uses high performing core models optimized for different devices and user groups, ensuring strong protection in real world conditions."
                />
              </div>
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-10 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={scanFaceIcon}
                  title="High precision face recognition"
                  description="Folio combines advanced detection, liveness and matching models to deliver accurate and consistent face recognition performance."
                />
                <FeatureHighlight
                  icon={awardIcon}
                  title="Independently tested and certified"
                  description="Our face matching and liveness technologies are evaluated by accredited labs to confirm accuracy, reliability and fairness across demographics."
                />
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title="Defense grade performance"
                  description="Folio uses high performing core models optimized for different devices and user groups, ensuring strong protection in real world conditions."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Control how selfies are captured Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="Control how selfies are captured, processed and stored"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="compliance-rules"
                onItemChange={setActiveHowItWorksId}
                showMobileImages={false}
              />
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={activeHowItWorksItem.desktopImage} 
                alt={activeHowItWorksItem.title}
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Control how selfies are captured, processed and stored"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={howItWorksItems}
              defaultOpenId="compliance-rules"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Responsible face recognition Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Responsible face recognition, built for scale"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                <ToolCard
                  icon={scaleIcon}
                  title="Ethical AI"
                  description="Folio uses models built on responsibly sourced data that show no material bias across age, sex or skin tone, based on internal and third party evaluations."
                />
                <ToolCard
                  icon={globeIcon}
                  title="Global compliance"
                  description="Define how you collect, process and store selfie data to meet regulatory requirements in every region where you operate."
                />
                <ToolCard
                  icon={shieldHalfIcon}
                  title="Strong attack resistance"
                  description="Protect users from deepfakes, synthetic faces, presentation attacks and injection attempts with advanced liveness detection."
                />
                <ToolCard
                  icon={settings2Icon}
                  title="Customizable recognition"
                  description="Tune gestures, risk settings and behavior to match your workflow and adjust configurations as your needs evolve."
                />
                <ToolCard
                  icon={barChart4Icon}
                  title="Optimized conversion"
                  description="Create a smoother user journey with auto capture, refined error handling and flexible UI options."
                />
                <ToolCard
                  icon={zapIcon}
                  title="Fast verification"
                  description="Most selfie checks complete in under two seconds, helping users move through your flow without delays."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key features Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start max-w-full md:max-w-[512px] relative shrink-0 w-full md:w-auto md:flex-1 whitespace-pre-wrap">
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] w-full">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Advanced selfie recognition with smart controls and high performance.
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

        {/* Ways to use selfie recognition Section */}
        <section className="bg-[#f5f5f5] flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Ways to use selfie recognition"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                <ToolCard
                  icon={squareUserIcon}
                  title="Verify physical ID ownership"
                  description="Match selfies to ID portraits in real time to confirm that a physical document belongs to the person presenting it."
                />
                <ToolCard
                  icon={refreshCcwIcon}
                  title="Seamless reverification"
                  description="Compare new selfies with previously captured portraits to confirm identity and keep authorized access secure."
                />
                <ToolCard
                  icon={userCheckIcon}
                  title="Workforce identity protection"
                  description="Ensure employees are verified throughout onboarding, system access and other key points in their work lifecycle."
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
