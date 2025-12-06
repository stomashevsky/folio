import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, Accordion, IconContainer } from '../components/ui'
import type { AccordionItemData } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Images
import businessOnboardingHero from '../assets/images/business-onboarding-hero.png'
import businessOnboardingOnboardingFlow from '../assets/images/business-onboarding-onboarding-flow.png'
import businessOnboardingDataCollection from '../assets/images/business-onboarding-data-collection.png'
import businessOnboardingStayCompliant from '../assets/images/business-onboarding-stay-compliant.png'
import businessOnboardingRepresentatives from '../assets/images/business-onboarding-representatives.png'
import businessOnboardingRegistryData from '../assets/images/business-onboarding-registry-data.png'

// Icons for ToolCard (industry cards)
import scaleIcon from '../assets/icons/Scale.svg'
import diceIcon from '../assets/icons/Dices.svg'
import bitcoinIcon from '../assets/icons/Bitcoin.svg'
import creditCardIcon from '../assets/icons/CreditCard.svg'
import shieldPlusIcon from '../assets/icons/ShieldPlus.svg'
import usersIcon from '../assets/icons/Users.svg'

// Icons for integration section
import linkIcon from '../assets/icons/Link.svg'
import puzzleIcon from '../assets/icons/Puzzle.svg'
import bracesIcon from '../assets/icons/Braces.svg'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// Verification steps data (using AccordionItemData format)
const verificationSteps: AccordionItemData[] = [
  {
    id: 'onboarding-flow',
    title: 'Create a smooth onboarding flow',
    description: 'Build a guided onboarding process tailored to your regulatory needs. Forms adapt dynamically with conditional questions, smart pre filled fields and your branding. Remote onboarding becomes simpler from the very first step.',
    desktopImage: businessOnboardingOnboardingFlow,
  },
  {
    id: 'data-collection',
    title: 'Automate data collection and validation',
    description: 'Businesses can enter data manually or rely on automatic registry based pre filling. Representatives complete secure remote identity checks, while ownership structures and UBO information are discovered in real time. All verified data is presented clearly for your compliance review.',
    desktopImage: businessOnboardingDataCollection,
  },
  {
    id: 'stay-compliant',
    title: 'Stay compliant with confidence',
    description: 'Your team retains full control over approval decisions. Data can be accessed through Folio\'s dashboard or delivered into your infrastructure via API. Optional ongoing monitoring keeps you informed about changes in company status, ownership or risk levels.',
    desktopImage: businessOnboardingStayCompliant,
  },
]

// Industry cards data
const industryCards = [
  {
    icon: scaleIcon,
    title: 'Legal',
    description: 'Law firms and legal platforms verify corporate clients for onboarding and authorization. Remote checks cut paperwork and support efficient digital workflows.',
  },
  {
    icon: diceIcon,
    title: 'Adult content and gambling',
    description: 'High risk platforms validate partner companies, payout recipients and operators with reliable KYB and continuous checks. Remote onboarding stays fast and compliant.',
  },
  {
    icon: bitcoinIcon,
    title: 'Cryptocurrency',
    description: 'Crypto platforms verify merchants and institutional clients with accurate registry data, automated UBO discovery and AML tools. Compliance becomes easier while scaling globally.',
  },
  {
    icon: creditCardIcon,
    title: 'Financial institutions',
    description: 'Banks and fintechs onboard business clients quickly with automated checks, UBO discovery and AML screening. Remote onboarding becomes faster and fully compliant.',
  },
  {
    icon: shieldPlusIcon,
    title: 'Insurance',
    description: 'Insurers verify the legitimacy of policyholder companies and intermediaries with registry data, UBO insights and AML checks. This reduces fraud and speeds up operations.',
  },
  {
    icon: usersIcon,
    title: 'Sharing economy',
    description: 'Platforms that work with fleet operators, property managers or service providers confirm business identity at scale. Folio helps assess ownership and risk in one simple flow.',
  },
]

// Integration methods data
const integrationMethods = [
  {
    icon: puzzleIcon,
    title: 'Web and mobile SDK',
    description: 'Embed KYB flows directly inside your product. Collect company data, verify representatives and fetch registry information in a seamless branded experience.',
  },
  {
    icon: bracesIcon,
    title: 'API',
    description: 'Control every step of the business verification journey. Customize data collection, automate UBO discovery and integrate KYB deeply into your backend.',
  },
  {
    icon: linkIcon,
    title: 'Static URL',
    description: 'Start remote onboarding instantly with a secure link. Share it with business clients to collect data, verify representatives and run registry checks without any development work.',
  },
]

export default function BusinessOnboardingPage() {
  usePageTitle({
    title: 'Business Onboarding (KYB) | Folio Wallet',
    description: 'Remote business onboarding with automated verification, ownership insights and AML checks. Verify business clients quickly, securely and without friction.',
    ogTitle: 'Business Onboarding (KYB) | Folio Wallet',
    ogDescription: 'Remote business onboarding with automated verification, ownership insights and AML checks. Verify business clients quickly, securely and without friction.',
    ogUrl: 'https://folio.id/solutions/business-onboarding'
  })

  const [activeStepId, setActiveStepId] = useState<string | null>('onboarding-flow')
  
  const activeStep = verificationSteps.find(item => item.id === activeStepId) || verificationSteps[0]

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
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Remote business onboarding
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Folio enables fast and secure remote onboarding for business clients. Collect verified company data, confirm representatives, uncover ownership structures and run AML checks in one streamlined flow.
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
                src={businessOnboardingHero} 
                alt="Business onboarding preview" 
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
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Remote business onboarding
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Folio enables fast and secure remote onboarding for business clients. Collect verified company data, confirm representatives, uncover ownership structures and run AML checks in one streamlined flow.
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
                src={businessOnboardingHero} 
                alt="Business onboarding preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* AML screening built in Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center max-w-[576px] relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                AML screening built in
              </h2>
              <p className="font-normal leading-6 md:leading-7 text-[#737373] text-base md:text-lg w-full whitespace-pre-wrap">
                Screen companies and associated individuals against sanctions lists, PEP profiles and media risk sources. Real time checks, configurable risk rules and continuous monitoring make it simple to stay compliant. Detailed logs and clear reports support your audit and review processes.
              </p>
            </div>
          </div>
        </section>

        {/* Effortless verification for every business Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={activeStep.desktopImage} 
                alt={activeStep.title}
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="Effortless verification for every business"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={verificationSteps}
                defaultOpenId="onboarding-flow"
                onItemChange={setActiveStepId}
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Effortless verification for every business"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={verificationSteps}
              defaultOpenId="onboarding-flow"
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Verify representatives and understand ownership Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <SectionHeader
                title="Verify representatives and understand ownership"
                description="Folio confirms who represents the business and who ultimately controls it. Representatives complete remote document capture with biometric checks and liveness confirmation. UBO discovery maps complex ownership chains across jurisdictions and highlights individuals linked to higher risk. Everything is automated and presented in a clean, structured format."
                align="left"
                maxWidth="672px"
              />
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={businessOnboardingRepresentatives} 
                alt="Verify representatives preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Verify representatives and understand ownership"
              description="Folio confirms who represents the business and who ultimately controls it. Representatives complete remote document capture with biometric checks and liveness confirmation. UBO discovery maps complex ownership chains across jurisdictions and highlights individuals linked to higher risk. Everything is automated and presented in a clean, structured format."
              align="left"
              maxWidth="672px"
            />
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img 
                src={businessOnboardingRepresentatives} 
                alt="Verify representatives preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Global registry data you can trust Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={businessOnboardingRegistryData} 
                alt="Global registry data preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <SectionHeader
                title="Global registry data you can trust"
                description="Access official business information from registries in 195 countries. Retrieve verified company records, director data and shareholder information wherever it is available. Whether used through the platform or API, registry backed insights improve accuracy and accelerate cross border onboarding."
                align="left"
                maxWidth="672px"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Global registry data you can trust"
              description="Access official business information from registries in 195 countries. Retrieve verified company records, director data and shareholder information wherever it is available. Whether used through the platform or API, registry backed insights improve accuracy and accelerate cross border onboarding."
              align="left"
              maxWidth="672px"
            />
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img 
                src={businessOnboardingRegistryData} 
                alt="Global registry data preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Made for your industry Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Made for your industry"
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

        {/* Easy to integrate Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Easy to integrate"
              align="center"
              maxWidth="576px"
            />
            <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
              {integrationMethods.map((method, index) => (
                <div key={index} className="flex flex-1 flex-col gap-5 items-start relative shrink-0">
                  <IconContainer size={40}>
                    <img src={method.icon} alt="" aria-hidden="true" className="w-5 h-5" />
                  </IconContainer>
                  <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
                    <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                      {method.title}
                    </p>
                    <p className="font-normal relative shrink-0 text-[#737373] w-full">
                      {method.description}
                    </p>
                  </div>
                </div>
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
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Implement secure business onboarding today
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                  Improve your KYB process with automated verification, clear ownership insights and real time AML checks inside one reliable remote onboarding flow.
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
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Implement secure business onboarding today
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                Improve your KYB process with automated verification, clear ownership insights and real time AML checks inside one reliable remote onboarding flow.
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
