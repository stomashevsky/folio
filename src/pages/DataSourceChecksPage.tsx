import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard } from '../components/ui'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Icons
import databaseIcon from '../assets/icons/Database.svg'
import slidersHorizontalIcon from '../assets/icons/SlidersHorizontal.svg'
import globeIcon from '../assets/icons/globe.svg'
import building2Icon from '../assets/icons/Building2.svg'
import idCardIcon from '../assets/icons/id-card.svg'
import carFrontIcon from '../assets/icons/CarFront.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import circlePlusIcon from '../assets/icons/CirclePlus.svg'
import fileSearchIcon from '../assets/icons/FileSearch.svg'
import userRoundCheckIcon from '../assets/icons/UserRoundCheck.svg'
import settings2Icon from '../assets/icons/Settings2.svg'

// Images
import dataSourceChecksHero from '../assets/images/data-source-checks-hero.png'
import dataSourceChecksHowItWorks from '../assets/images/data-source-checks-how-it-works.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const howItWorksItems: AccordionItemData[] = [
  {
    id: 'gather-details',
    title: 'Gather user details',
    description: 'Extract data from ID documents or prompt users to provide it directly.',
    desktopImage: dataSourceChecksHowItWorks,
  },
  {
    id: 'apply-rules',
    title: 'Apply your matching rules',
    description: 'Verify collected data against issuing sources and authoritative databases based on your matching rules.',
    desktopImage: dataSourceChecksHowItWorks,
  },
  {
    id: 'deliver-decision',
    title: 'Deliver a clear decision',
    description: 'Users are accepted, declined, or routed to manual review according to your decision logic.',
    desktopImage: dataSourceChecksHowItWorks,
  },
]

const keyFeatures = [
  {
    id: 'global-reach',
    title: 'Global reach that scales',
    description: 'Validate personal data and national IDs against issuing sources in more than 40 countries without managing multiple vendors.',
  },
  {
    id: 'flexible-match',
    title: 'Flexible match rules',
    description: 'Adjust thresholds for what qualifies as a full match, a partial match, or no match to fit your workflow.',
  },
  {
    id: 'smart-address',
    title: 'Smart address fill',
    description: 'Speed up user input, reduce errors, and create a smoother onboarding experience by automatically completing address details.',
  },
  {
    id: 'adaptive-routing',
    title: 'Adaptive routing',
    description: 'Trigger step ups or fallback paths in real time based on the signals and risk indicators collected during verification.',
  },
]

const trustedDatabases = [
  {
    icon: building2Icon,
    title: 'Authoritative databases',
    description: 'Verify user information against authoritative databases and issuing sources in more than 40 countries to ensure accuracy and compliance.',
  },
  {
    icon: idCardIcon,
    title: 'eCBSV',
    description: 'Match names, Social Security numbers, and birthdates against Social Security Administration records to identify risk signals such as synthetic identities or thin-file users.',
  },
  {
    icon: carFrontIcon,
    title: 'DMV records (AAMVA)',
    description: "Confirm the authenticity of US driver's licenses and IDs by checking user details against participating state DMV databases to detect fraudulent documents.",
  },
  {
    icon: shieldCheckIcon,
    title: 'TIN verification',
    description: "Validate a user's name and Taxpayer Identification Number by comparing the submitted data with IRS records to ensure identity accuracy.",
  },
  {
    icon: circlePlusIcon,
    title: 'Additional sources',
    description: "If you need a specific data source that isn't listed, reach out to explore custom integrations and available options.",
  },
]

const useCases = [
  {
    icon: fileSearchIcon,
    title: 'Regulatory screening',
    description: 'Confirm users meet compliance requirements by matching their information against trusted databases and issuing sources.',
  },
  {
    icon: userRoundCheckIcon,
    title: 'Identity matching',
    description: "Validate a user's identity by comparing their submitted details with authoritative records for greater confidence.",
  },
  {
    icon: settings2Icon,
    title: 'Adaptive verification',
    description: 'Fine tune friction in real time based on match results, helping you streamline trusted users and flag higher risk cases.',
  },
]

export default function DataSourceChecksPage() {
  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('gather-details')
  const [activeKeyFeatureId, setActiveKeyFeatureId] = useState<string | null>('global-reach')
  
  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

  usePageTitle({
    title: 'Data Source Checks | Folio Wallet',
    description: 'Verify users worldwide with trusted data sources. Instantly confirm the identity of users and meet regulatory requirements using Master Data matching.',
    ogTitle: 'Data Source Checks | Folio Wallet',
    ogDescription: 'Verify users worldwide with trusted data sources. Instantly confirm the identity of users and meet regulatory requirements using Master Data matching.',
    ogUrl: 'https://folio.id/platform/data-source-checks'
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
                  Data source checks
                </p>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Verify users worldwide with trusted data sources
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Instantly confirm the identity of users and meet regulatory requirements using Master Data matching.
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
                src={dataSourceChecksHero} 
                alt="Data source checks preview" 
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
                  Data source checks
                </p>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Verify users worldwide with trusted data sources
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Instantly confirm the identity of users and meet regulatory requirements using Master Data matching.
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
                src={dataSourceChecksHero} 
                alt="Data source checks preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Smarter global verification Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Smarter global verification"
                maxWidth="576px"
              />
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={globeIcon}
                  title="Global coverage"
                  description="Match user data with authoritative and issuing sources across 40 plus countries to ensure accuracy without creating a patchwork of vendors."
                />
                <FeatureHighlight
                  icon={slidersHorizontalIcon}
                  title="Adjustable matching logic"
                  description="Fine tune criteria for what counts as a full match, a partial match, or no match based on your risk tolerance and compliance requirements."
                />
                <FeatureHighlight
                  icon={databaseIcon}
                  title="Unified data sources"
                  description="Combine multiple databases into a single verification process through a single interface to confirm identity and detect risk signals consistently."
                />
              </div>
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-10 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={globeIcon}
                  title="Global coverage"
                  description="Match user data with authoritative and issuing sources across 40 plus countries to ensure accuracy without creating a patchwork of vendors."
                />
                <FeatureHighlight
                  icon={slidersHorizontalIcon}
                  title="Adjustable matching logic"
                  description="Fine tune criteria for what counts as a full match, a partial match, or no match based on your risk tolerance and compliance requirements."
                />
                <FeatureHighlight
                  icon={databaseIcon}
                  title="Unified data sources"
                  description="Combine multiple databases into a single verification process through a single interface to confirm identity and detect risk signals consistently."
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="How it works"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="gather-details"
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
              title="How it works"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={howItWorksItems}
              defaultOpenId="gather-details"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Explore trusted databases Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Explore trusted databases and issuing sources"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {trustedDatabases.map((item, index) => (
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

        {/* Key features Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start max-w-full md:max-w-[512px] relative shrink-0 w-full md:w-auto md:flex-1 whitespace-pre-wrap">
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] w-full">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Broaden your reach, tailor your workflow, and create a smoother experience for your users
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

        {/* Where database checks make the biggest impact Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Where database checks make the biggest impact"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {useCases.map((item, index) => (
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
