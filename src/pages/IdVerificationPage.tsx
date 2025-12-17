import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Icons
import globeIcon from '../assets/icons/Globe.svg'
import userSearchIcon from '../assets/icons/UserSearch.svg'
import gitMergeIcon from '../assets/icons/GitMerge.svg'
import circleCheckBigIcon from '../assets/icons/CircleCheckBig.svg'
import scanFaceIcon from '../assets/icons/ScanFace.svg'
import arrowUpDownIcon from '../assets/icons/ArrowUpDown.svg'
import idCardIcon from '../assets/icons/IdCard.svg'

// Images
import idVerificationHero from '../assets/images/id-verification-hero.png'
import idVerificationHowItWorks1 from '../assets/images/id-verification-how-it-works-1.png'
import idVerificationHowItWorks2 from '../assets/images/id-verification-how-it-works-2.png'
import idVerificationHowItWorks3 from '../assets/images/id-verification-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// How it works accordion items
const howItWorksItems: AccordionItemData[] = [
  {
    id: 'setup',
    title: 'Customize the verification experience',
    description: 'Define which documents users can submit and how verification is performed.',
    desktopImage: idVerificationHowItWorks1,
  },
  {
    id: 'capture',
    title: 'Capture identity documents',
    description: 'Users scan their government ID. Folio reads the data and checks if the document is genuine.',
    desktopImage: idVerificationHowItWorks2,
  },
  {
    id: 'verify',
    title: 'Verify and make a decision',
    description: 'Approve, decline or send the case for review based on your rules.',
    desktopImage: idVerificationHowItWorks3,
  },
]

// Key features accordion items
const keyFeaturesItems: AccordionItemData[] = [
  {
    id: 'global',
    title: 'Works across the world',
    description: 'Support for hundreds of government IDs from more than 200 regions.',
  },
  {
    id: 'guidance',
    title: 'Clear capture guidance',
    description: 'On screen instructions help users take clean and accurate document photos.',
  },
  {
    id: 'auto-capture',
    title: 'Automatic photo capture',
    description: 'The system takes the photo at the perfect moment, reducing retries.',
  },
  {
    id: 'extraction',
    title: 'Precise data extraction',
    description: 'Read and structure data directly from the ID, then verify it for consistency.',
  },
  {
    id: 'sensitive',
    title: 'Sensitive data control',
    description: 'Hide personal fields when needed to protect user information.',
  },
  {
    id: 'custom',
    title: 'Custom checks',
    description: 'Add your own rules for document validity, expiry and data accuracy.',
  },
  {
    id: 'face-match',
    title: 'Face match',
    description: 'Compare a live selfie with the ID photo to confirm the person behind the document.',
  },
  {
    id: 'profile',
    title: 'Profile matching',
    description: 'Check ID data against existing accounts to avoid duplicates.',
  },
  {
    id: 'automated',
    title: 'Automated decisions',
    description: 'Let the system handle most verifications instantly, minimizing manual work.',
  },
]

// Use cases data
const useCasesData = [
  {
    icon: circleCheckBigIcon,
    title: 'KYC compliance',
    description: 'Strengthen your KYC flow by confirming the authenticity of government issued IDs.',
  },
  {
    icon: scanFaceIcon,
    title: 'Identity assurance',
    description: 'Meet assurance needs with verified documents and a live face match.',
  },
  {
    icon: arrowUpDownIcon,
    title: 'Dynamic friction',
    description: 'Adjust verification steps based on the data extracted from the document.',
  },
]

export default function IdVerificationPage() {
  usePageTitle({
    title: 'ID Verification | Folio Wallet',
    description: 'Check official documents and confirm identity in more than 200 places around the world.',
    ogTitle: 'ID Verification | Folio Wallet',
    ogDescription: 'Check official documents and confirm identity in more than 200 places around the world.',
    ogImage: 'https://folio.id/og-images/id-verification-hero.png',
    ogUrl: 'https://folio.id/platform/id-verification'
  })

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('setup')
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
                <HeroTagline icon={idCardIcon}>ID verification</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Verify government IDs with confidence
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Check official documents and confirm identity in more than 200 places around the world.
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
                src={idVerificationHero}
                alt="ID verification preview"
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
                <HeroTagline icon={idCardIcon}>ID verification</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Verify government IDs with confidence
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Check official documents and confirm identity in more than 200 places around the world.
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
                src={idVerificationHero}
                alt="ID verification preview"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Advanced Identity Verification Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Advanced identity verification"
                maxWidth="576px"
              />
              <div className="flex flex-col md:flex-row gap-6 items-start relative shrink-0 w-full">
                <FeatureItem
                  icon={globeIcon}
                  title="Global ID support"
                  description="Recognize and validate a wide range of government issued documents, including passports and driver licenses."
                />
                <FeatureItem
                  icon={userSearchIcon}
                  title="Smart fraud protection"
                  description="Spot altered or tampered IDs with precise capture flows and intelligent authenticity checks."
                />
                <FeatureItem
                  icon={gitMergeIcon}
                  title="Fast automated results"
                  description="Most verifications finish in a few seconds, giving users a smooth and quick experience."
                />
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
                defaultOpenId="setup"
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
              defaultOpenId="setup"
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
                Leverage best-in-class technology to verify government IDs globally
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start relative min-w-0">
              <Accordion
                items={keyFeaturesItems}
                defaultOpenId="global"
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
                Leverage best-in-class technology to verify government IDs globally
              </p>
            </div>
            <Accordion
              items={keyFeaturesItems}
              defaultOpenId="global"
              showMobileImages={false}
            />
          </div>
        </section>

        {/* Practical Uses Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Practical uses for government ID checks"
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
      <ExploreMoreSection currentPath="/platform/id-verification" />
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
