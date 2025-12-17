import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, Accordion, HeroTagline } from '../components/ui'
import type { AccordionItemData } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Images
import clientOnboardingHero from '../assets/images/client-onboarding-hero.png'
import clientOnboardingHowItWorks1 from '../assets/images/client-onboarding-how-it-works-1.png'
import clientOnboardingHowItWorks2 from '../assets/images/client-onboarding-how-it-works-2.png'
import clientOnboardingHowItWorks3 from '../assets/images/client-onboarding-how-it-works-3.png'

// Icons for hero and features
import briefcaseIcon from '../assets/icons/Briefcase.svg'
import globeIcon from '../assets/icons/Globe.svg'
import fileSearchIcon from '../assets/icons/FileSearch.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'

// Icons for industry cards
import building2Icon from '../assets/icons/Building2.svg'
import scaleIcon from '../assets/icons/Scale.svg'
import homeIcon from '../assets/icons/Home.svg'
import landmarkIcon from '../assets/icons/Landmark.svg'
import heartHandshakeIcon from '../assets/icons/HeartHandshake.svg'
import userCheckIcon from '../assets/icons/UserCheck.svg'


// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// How it works accordion items
const howItWorksItems: AccordionItemData[] = [
  {
    id: 'send',
    title: 'Send',
    description: 'Share a secure verification link with your client via email, SMS, or any messaging platform. No app download required.',
    desktopImage: clientOnboardingHowItWorks1,
  },
  {
    id: 'verify',
    title: 'Verify',
    description: 'Your client completes ID verification and address confirmation in minutes using their smartphone or computer.',
    desktopImage: clientOnboardingHowItWorks2,
  },
  {
    id: 'review',
    title: 'Review',
    description: 'Receive a timestamped compliance report instantly with ID match confirmation, address verification, and risk scoring.',
    desktopImage: clientOnboardingHowItWorks3,
  },
]

// Key features accordion items
const keyFeaturesItems: AccordionItemData[] = [
  {
    id: 'global-id',
    title: 'Global ID support',
    description: 'Verify passports, driver licenses, and national IDs from over 200 countries and regions.',
  },
  {
    id: 'aml-kyc',
    title: 'AML and KYC compliance',
    description: 'Meet regulatory requirements including UK MLR, EU AMLD, FINTRAC, IRS KYC, and other global frameworks.',
  },
  {
    id: 'address-verification',
    title: 'Address verification',
    description: 'Confirm client addresses with utility bills, bank statements, and other proof of address documents.',
  },
  {
    id: 'secure-storage',
    title: 'Secure document storage',
    description: 'All client data is encrypted at rest and in transit with secure, permission-based access.',
  },
  {
    id: 'risk-scoring',
    title: 'Risk scoring',
    description: 'Automated risk assessment helps you identify potentially fraudulent or high-risk clients.',
  },
  {
    id: 'audit-reports',
    title: 'Audit-ready reports',
    description: 'Generate timestamped PDF compliance reports with full activity logs for regulatory review.',
  },
  {
    id: 'facial-verification',
    title: 'Facial verification',
    description: 'AI-powered face match compares live selfies with ID photos to confirm identity.',
  },
  {
    id: 'liveness-check',
    title: 'Liveness detection',
    description: 'Prevent fraud with advanced liveness checks that ensure the person is physically present.',
  },
]

// Industry cards data
const industryCards = [
  {
    icon: building2Icon,
    title: 'Accountants',
    description: 'Streamline client onboarding for tax preparation, auditing, and financial advisory services while meeting AML requirements.',
  },
  {
    icon: scaleIcon,
    title: 'Lawyers and solicitors',
    description: 'Verify client identity for legal matters, property transactions, and corporate services with full compliance records.',
  },
  {
    icon: homeIcon,
    title: 'Estate agents',
    description: 'Meet anti-money laundering obligations for property sales and lettings with fast remote verification.',
  },
  {
    icon: landmarkIcon,
    title: 'Financial advisors',
    description: 'Onboard investment and insurance clients securely while maintaining regulatory compliance.',
  },
  {
    icon: heartHandshakeIcon,
    title: 'Conveyancers',
    description: 'Verify buyers and sellers in property transactions with secure document collection and storage.',
  },
  {
    icon: userCheckIcon,
    title: 'Professional services',
    description: 'Any regulated business that needs to verify client identity can benefit from streamlined digital onboarding.',
  },
]

export default function ClientOnboardingPage() {
  usePageTitle({
    title: 'Client Onboarding | Folio Wallet',
    description: 'Streamlined KYC for regulated businesses. Client verification that is fast, compliant, and audit-ready.',
    ogTitle: 'Client Onboarding | Folio Wallet',
    ogDescription: 'Streamlined KYC for regulated businesses. Client verification that is fast, compliant, and audit-ready.',
    ogUrl: 'https://folio.id/solutions/client-onboarding'
  })

  const [activeMethodId, setActiveMethodId] = useState<string | null>('send')
  
  const activeMethod = howItWorksItems.find(item => item.id === activeMethodId) || howItWorksItems[0]

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
                <HeroTagline icon={briefcaseIcon}>Client onboarding</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Streamlined KYC for regulated businesses
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Client verification that's fast, compliant, and audit-ready. Onboard clients remotely in minutes while meeting AML, KYC, and CDD requirements globally. Stop chasing documents and stay audit-ready around the clock.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={clientOnboardingHero} 
                alt="Client onboarding preview" 
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
                <HeroTagline icon={briefcaseIcon}>Client onboarding</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Streamlined KYC for regulated businesses
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Client verification that's fast, compliant, and audit-ready. Onboard clients remotely in minutes while meeting AML, KYC, and CDD requirements globally. Stop chasing documents and stay audit-ready around the clock.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img 
                src={clientOnboardingHero} 
                alt="Client onboarding preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Client verification made simple Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Client verification made simple"
                maxWidth="576px"
              />
              <div className="flex flex-col md:flex-row gap-6 items-start relative shrink-0 w-full">
                <FeatureItem
                  icon={globeIcon}
                  title="Remote verification"
                  description="Verify clients anywhere in the world without meeting in person. They complete checks from any modern device."
                />
                <FeatureItem
                  icon={fileSearchIcon}
                  title="Instant compliance reports"
                  description="Receive timestamped PDF reports with ID verification, address confirmation, and complete activity logs."
                />
                <FeatureItem
                  icon={shieldCheckIcon}
                  title="Secure audit trail"
                  description="All verification data is encrypted and stored securely with permission-based access for regulatory review."
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
                src={activeMethod.desktopImage} 
                alt={activeMethod.title}
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
                defaultOpenId="send"
                onItemChange={setActiveMethodId}
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
              defaultOpenId="send"
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Key features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-5 items-start relative min-w-0 max-w-[512px]">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Everything you need to verify clients and meet compliance requirements
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start relative min-w-0">
              <Accordion
                items={keyFeaturesItems}
                defaultOpenId="global-id"
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
                Everything you need to verify clients and meet compliance requirements
              </p>
            </div>
            <Accordion
              items={keyFeaturesItems}
              defaultOpenId="global-id"
              showMobileImages={false}
            />
          </div>
        </section>

        {/* Made for regulated industries Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Made for regulated industries"
              align="center"
              maxWidth="576px"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center relative shrink-0 w-full">
              {industryCards.map((card, index) => (
                <ToolCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
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
                  Simplify your client onboarding today
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  Turn hours of manual compliance work into minutes. Talk to our team to see how Folio can streamline your client verification process.
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                Simplify your client onboarding today
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                Turn hours of manual compliance work into minutes. Talk to our team to see how Folio can streamline your client verification process.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
              <Button
                onClick={handleGetInTouch}
                variant="primary"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
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

