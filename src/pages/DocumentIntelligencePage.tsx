import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'

// Icons
import checkCheckIcon from '../assets/icons/CheckCheck.svg'
import sparklesIcon from '../assets/icons/Sparkles.svg'
import fileStackIcon from '../assets/icons/FileStack.svg'
import idCardIcon from '../assets/icons/IdCard.svg'
import briefcaseIcon from '../assets/icons/Briefcase.svg'
import mapPinnedIcon from '../assets/icons/MapPinned.svg'
import heartHandshakeIcon from '../assets/icons/HeartHandshake.svg'
import carFrontIcon from '../assets/icons/Car.svg'
import handCoinsIcon from '../assets/icons/HandCoins.svg'

// Images
import documentIntelligenceHero from '../assets/images/document-intelligence-hero.png'
import documentIntelligenceHowItWorks1 from '../assets/images/document-intelligence-how-it-works-1.png'
import documentIntelligenceHowItWorks2 from '../assets/images/document-intelligence-how-it-works-2.png'
import documentIntelligenceHowItWorks3 from '../assets/images/document-intelligence-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// How it works accordion items
const howItWorksItems: AccordionItemData[] = [
  {
    id: 'submit',
    title: 'Users submit documents securely',
    description: 'Users upload documents through a secure interface with guidance for best capture quality.',
    desktopImage: documentIntelligenceHowItWorks1,
  },
  {
    id: 'extract',
    title: 'Automatically extract information',
    description: 'AI reads and extracts key data from documents, identifying document type and relevant fields.',
    desktopImage: documentIntelligenceHowItWorks2,
  },
  {
    id: 'review',
    title: 'Review information efficiently',
    description: 'Review extracted data with confidence scores and highlighted areas that need attention.',
    desktopImage: documentIntelligenceHowItWorks3,
  },
]

// Key features accordion items
const keyFeaturesItems: AccordionItemData[] = [
  {
    id: 'supported-types',
    title: 'Supported document types',
    description: 'Collect and auto classify corporate records, tax forms, bank statements, utility bills, vehicle registrations, and more.',
  },
  {
    id: 'country-coverage',
    title: 'Country coverage',
    description: 'Accept documents from more than 90 supported countries.',
  },
  {
    id: 'customizable-flow',
    title: 'Customizable collection flow',
    description: 'Choose which document types to accept, how many submission attempts to allow, and which verification checks to apply.',
  },
  {
    id: 'tamper-checks',
    title: 'Configurable tamper checks',
    description: 'Automatically detect signs of image or PDF tampering and inconsistencies that may signal fraud.',
  },
  {
    id: 'user-guidance',
    title: 'User guidance',
    description: 'Reduce errors with in app tips that help users avoid glare, blur, and other issues when uploading documents.',
  },
  {
    id: 'ai-insights',
    title: 'AI insights',
    description: 'Save time with AI powered classification, data extraction, and review ready insights.',
  },
]

// Practical uses data
const practicalUsesData = [
  {
    icon: idCardIcon,
    title: 'Identity verification',
    description: 'Verify identity documents like passports, driver licenses, and national IDs.',
  },
  {
    icon: briefcaseIcon,
    title: 'Business verification',
    description: 'Validate business registration documents and corporate filings.',
  },
  {
    icon: mapPinnedIcon,
    title: 'Address confirmation',
    description: 'Confirm address through utility bills, bank statements, and official correspondence.',
  },
  {
    icon: heartHandshakeIcon,
    title: 'Health coverage proof',
    description: 'Verify health insurance cards and coverage documentation.',
  },
  {
    icon: carFrontIcon,
    title: 'Vehicle ownership verification',
    description: 'Validate vehicle registration and ownership documents.',
  },
  {
    icon: handCoinsIcon,
    title: 'Wealth and income validation',
    description: 'Verify income through pay stubs, tax returns, and financial statements.',
  },
]

export default function DocumentIntelligencePage() {
  usePageTitle({
    title: 'Document Intelligence | Folio Wallet',
    description: 'Automatically review submitted documents to confirm identity or validate proof of address, income, or health with minimal effort.',
    ogTitle: 'Document Intelligence | Folio Wallet',
    ogDescription: 'Automatically review submitted documents to confirm identity or validate proof of address, income, or health with minimal effort.',
    ogImage: getOgImageUrl('document-intelligence-hero.png'),
    ogUrl: 'https://folio.id/platform/document-intelligence'
  })

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('submit')
  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

  const handleGetInTouch = () => {
    window.location.href = 'mailto:contact@folio.id'
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
                <HeroTagline icon={sparklesIcon}>Document intelligence</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Smarter document verification with AI
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Automatically review submitted documents to confirm identity or validate proof of address, income, or health with minimal effort.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square">
              <img
                src={documentIntelligenceHero}
                alt="Document intelligence preview"
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
                <HeroTagline icon={sparklesIcon}>Document intelligence</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Smarter document verification with AI
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Automatically review submitted documents to confirm identity or validate proof of address, income, or health with minimal effort.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="aspect-square relative rounded-2xl shrink-0 w-full">
              <img
                src={documentIntelligenceHero}
                alt="Document intelligence preview"
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
                title="Intelligent document processing"
                maxWidth="576px"
              />
              <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
                <FeatureItem
                  icon={checkCheckIcon}
                  title="Approve users faster"
                  description="Speed up verification with automated document analysis that processes submissions in seconds."
                />
                <FeatureItem
                  icon={sparklesIcon}
                  title="Get clearer insights from documents"
                  description="Extract structured data from unstructured documents with AI-powered analysis."
                />
                <FeatureItem
                  icon={fileStackIcon}
                  title="Process more documents with ease"
                  description="Scale your document verification without adding manual review overhead."
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <ImageWithPlaceholder
              src={activeHowItWorksItem.desktopImage || ''}
              alt={activeHowItWorksItem.title}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="How it works"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="submit"
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
              defaultOpenId="submit"
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
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Handle more documents in less time
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start relative min-w-0">
              <Accordion
                items={keyFeaturesItems}
                defaultOpenId="supported-types"
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
                Handle more documents in less time
              </p>
            </div>
            <Accordion
              items={keyFeaturesItems}
              defaultOpenId="supported-types"
              showMobileImages={false}
            />
          </div>
        </section>

        {/* Practical Uses Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Practical uses of Document AI"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {practicalUsesData.map((item, index) => (
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
                <Button onClick={handleGetInTouch} variant="primary">
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
              <Button onClick={handleGetInTouch} variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ExploreMoreSection currentPath="/platform/document-intelligence" />
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
