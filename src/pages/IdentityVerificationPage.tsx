import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, Accordion, IconContainer } from '../components/ui'
import type { AccordionItemData } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Images
import placeholderImage from '../assets/images/image-placeholder.png'

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

// Verification methods data (using AccordionItemData format)
const verificationMethods: AccordionItemData[] = [
  {
    id: 'photo-based',
    title: 'Photo-based ID verification',
    description: 'Users capture a photo of their identity document. Folio extracts and validates the data instantly using OCR, document authenticity checks and biometric liveness detection for highly accurate and trusted results.',
    desktopImage: placeholderImage,
  },
  {
    id: 'video-based',
    title: 'Video-based ID verification',
    description: 'For high assurance or regulated use cases, verification can run through a short recorded session or a guided video flow. Folio evaluates liveness, document presence and behavioral cues to verify users in real time.',
    desktopImage: placeholderImage,
  },
  {
    id: 'nfc-based',
    title: 'NFC-based ID verification',
    description: 'Modern passports and ID cards contain secure NFC chips. Folio reads encrypted chip data including a high quality facial image and tamper proof identity details for the strongest document authentication available.',
    desktopImage: placeholderImage,
  },
]

// Industry cards data
const industryCards = [
  {
    icon: scaleIcon,
    title: 'Legal',
    description: 'Law firms verify clients remotely for onboarding and authorizations, reducing paperwork and supporting secure digital workflows.',
  },
  {
    icon: diceIcon,
    title: 'Adult content and gambling',
    description: 'High-risk services confirm legal age instantly and block underage access with fast, automated verification workflows.',
  },
  {
    icon: bitcoinIcon,
    title: 'Cryptocurrency',
    description: 'Crypto platforms meet AML and FATF rules with configurable checks, enhanced due diligence and real-time fraud monitoring.',
  },
  {
    icon: creditCardIcon,
    title: 'Financial institutions',
    description: 'Banks and fintechs onboard customers in minutes with automated checks, reduced manual reviews and stronger fraud protection.',
  },
  {
    icon: shieldPlusIcon,
    title: 'Insurance',
    description: 'Fast, remote identity and age checks streamline onboarding and claims while reducing fraud and operational delays.',
  },
  {
    icon: usersIcon,
    title: 'Sharing economy',
    description: 'Rental, ridesharing and freelance platforms verify both sides of the marketplace to prevent fake profiles and ensure safety.',
  },
]

// Integration methods data
const integrationMethods = [
  {
    icon: linkIcon,
    title: 'Static URL',
    description: 'Start verification with a secure link that requires no development. Share it through email, SMS or chat to capture documents, run liveness checks and verify users instantly.',
  },
  {
    icon: puzzleIcon,
    title: 'Web and mobile SDK',
    description: 'Embed Folio ready made verification flows directly into your app. The SDK handles document capture, biometrics and liveness checks with minimal engineering work.',
  },
  {
    icon: bracesIcon,
    title: 'API',
    description: 'For full customization and backend control integrate through our API. Manage verification logic, user journeys and identity data exactly as your product requires.',
  },
]

export default function IdentityVerificationPage() {
  usePageTitle({
    title: 'Identity Verification (KYC) | Folio Wallet',
    description: 'Instant identity verification for any business. Verify customers quickly, securely and without friction with document checks, biometrics and NFC data.',
    ogTitle: 'Identity Verification (KYC) | Folio Wallet',
    ogDescription: 'Instant identity verification for any business. Verify customers quickly, securely and without friction with document checks, biometrics and NFC data.',
    ogUrl: 'https://folio.id/solutions/identity-verification'
  })

  const [activeMethodId, setActiveMethodId] = useState<string | null>('photo-based')
  
  const activeMethod = verificationMethods.find(item => item.id === activeMethodId) || verificationMethods[0]

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
                  Instant identity verification for any business
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Folio helps you verify customers quickly, securely and without friction. Our verification flows combine document checks, biometrics and NFC data to ensure trusted identities anywhere in the world.
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
                src={placeholderImage} 
                alt="Identity verification preview" 
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
                  Instant identity verification for any business
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Folio helps you verify customers quickly, securely and without friction. Our verification flows combine document checks, biometrics and NFC data to ensure trusted identities anywhere in the world.
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
                src={placeholderImage} 
                alt="Identity verification preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Verification without friction Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center max-w-[576px] relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Verification without friction
              </h2>
              <p className="font-normal leading-6 md:leading-7 text-[#737373] text-base md:text-lg w-full whitespace-pre-wrap">
                Our flows are designed to feel natural, fast, intuitive and secure. Users complete verification in seconds with guided steps, smart prompts and real time checks that reduce drop offs and frustration.
              </p>
            </div>
          </div>
        </section>

        {/* Verification methods Section */}
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
                title="Verification methods for every scenario"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={verificationMethods}
                defaultOpenId="photo-based"
                onItemChange={setActiveMethodId}
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Verification methods for every scenario"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={verificationMethods}
              defaultOpenId="photo-based"
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Compliance built in Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <SectionHeader
                title="Compliance built in"
                description="Folio aligns with global standards including AML, KYC, GDPR, FATF guidance, NIST, eIDAS and local regulatory frameworks. The system stays up to date with evolving laws so you can remain compliant without manual effort."
                align="left"
                maxWidth="672px"
              />
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={placeholderImage} 
                alt="Compliance features preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Compliance built in"
              description="Folio aligns with global standards including AML, KYC, GDPR, FATF guidance, NIST, eIDAS and local regulatory frameworks. The system stays up to date with evolving laws so you can remain compliant without manual effort."
              align="left"
              maxWidth="672px"
            />
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img 
                src={placeholderImage} 
                alt="Compliance features preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Built to scale securely Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={placeholderImage} 
                alt="Security features preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <SectionHeader
                title="Built to scale securely"
                description="Folio cloud infrastructure adapts as you grow. User data is encrypted in storage and during transfer. Role based access controls, continuous monitoring and a penetration tested architecture ensure enterprise level protection. The platform scales easily across regions, industries and compliance regimes."
                align="left"
                maxWidth="672px"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Built to scale securely"
              description="Folio cloud infrastructure adapts as you grow. User data is encrypted in storage and during transfer. Role based access controls, continuous monitoring and a penetration tested architecture ensure enterprise level protection. The platform scales easily across regions, industries and compliance regimes."
              align="left"
              maxWidth="672px"
            />
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img 
                src={placeholderImage} 
                alt="Security features preview" 
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
                  See how Folio transforms identity verification
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                  Talk to our team and discover how Folio strengthens compliance, reduces fraud and improves the onboarding experience.
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
                See how Folio transforms identity verification
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                Talk to our team and discover how Folio strengthens compliance, reduces fraud and improves the onboarding experience.
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
