import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, Accordion, IconContainer, HeroTagline } from '../components/ui'
import type { AccordionItemData } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Images
import ageVerificationHero from '../assets/images/age-verification-hero.png'
import ageVerificationAnonymousCredential from '../assets/images/age-verification-anonymous-credential.png'
import ageVerificationFaceEstimation from '../assets/images/age-verification-face-estimation.png'
import ageVerificationDocumentVerification from '../assets/images/age-verification-document-verification.png'
import ageVerificationPrivacy from '../assets/images/age-verification-privacy.png'
import ageVerificationAgeAssurance from '../assets/images/age-verification-age-assurance.png'

// Icons for ToolCard (industry cards)
import messagesSquareIcon from '../assets/icons/MessagesSquare.svg'
import dicesIcon from '../assets/icons/Dices.svg'
import shoppingCartIcon from '../assets/icons/ShoppingCart.svg'
import creditCardIcon from '../assets/icons/CreditCard.svg'
import clapperboardIcon from '../assets/icons/Clapperboard.svg'
import signalIcon from '../assets/icons/Signal.svg'

// Icons for integration section
import puzzleIcon from '../assets/icons/Puzzle.svg'
import bracesIcon from '../assets/icons/Braces.svg'
import linkIcon from '../assets/icons/Link.svg'
import ageIcon from '../assets/icons/Age.svg'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// Age verification methods data (using AccordionItemData format)
const ageVerificationMethods: AccordionItemData[] = [
  {
    id: 'document-verification',
    title: 'Document based verification',
    description: 'When you need maximum assurance, users upload an ID document for full age verification. Folio validates authenticity, runs liveness checks and confirms legal age so you can meet strict regulatory requirements.',
    desktopImage: ageVerificationDocumentVerification,
  },
  {
    id: 'face-estimation',
    title: 'Face based age estimation',
    description: 'Users take a quick selfie and our AI estimates age in seconds. No documents are required. Built in liveness checks help prevent fraud while keeping the flow light and mobile friendly.',
    desktopImage: ageVerificationFaceEstimation,
  },
  {
    id: 'anonymous-credential',
    title: 'Anonymous age credential',
    description: 'A one time verified age credential that can be reused without revealing identity. Users prove they are old enough with a privacy preserving token instead of personal data.',
    desktopImage: ageVerificationAnonymousCredential,
  },
]

// Industry cards data
const industryCards = [
  {
    icon: messagesSquareIcon,
    title: 'Social platforms and messaging',
    description: 'Protect younger users and support child safety rules by confirming appropriate age before access, with the option to add parental consent where needed.',
  },
  {
    icon: dicesIcon,
    title: 'Online gaming and gambling',
    description: 'Confirm players meet legal age limits before they play. Strong age checks help prevent misuse, support licensing requirements and reduce fraud.',
  },
  {
    icon: shoppingCartIcon,
    title: 'E-commerce and delivery',
    description: 'Verify age at checkout for alcohol, tobacco and other restricted products. Folio fits into your existing purchase or delivery flow without slowing it down.',
  },
  {
    icon: creditCardIcon,
    title: 'Fintech and financial services',
    description: 'Ensure that customers meet minimum age requirements for accounts, wallets and financial products while keeping digital onboarding straightforward.',
  },
  {
    icon: clapperboardIcon,
    title: 'Streaming and adult content',
    description: 'Make sure age restricted content is shown only to eligible audiences with verification methods that match your viewing experience.',
  },
  {
    icon: signalIcon,
    title: 'Telecommunications',
    description: 'Check customer age for plans, contracts and services that require legal age confirmation while keeping sign up quick and simple.',
  },
]

// Integration methods data
const integrationMethods = [
  {
    icon: puzzleIcon,
    title: 'Web and mobile SDK',
    description: 'Embed age checks directly into your product. Users complete verification in a native, branded flow that feels like part of your app.',
  },
  {
    icon: bracesIcon,
    title: 'API',
    description: 'Control every detail of the age verification journey with our API. Orchestrate methods, rules and outcomes from your own backend systems.',
  },
  {
    icon: linkIcon,
    title: 'Static URL',
    description: 'Launch age verification instantly with a secure hosted link. Share it by email, SMS or chat to start checks without any development work.',
  },
]

export default function AgeCompliancePage() {
  const { t } = useTranslation('solutions')
  
  usePageTitle({
    title: t('ageCompliance.meta.title'),
    description: t('ageCompliance.meta.description'),
    ogTitle: t('ageCompliance.meta.title'),
    ogDescription: t('ageCompliance.meta.description'),
    ogUrl: 'https://folio.id/solutions/age-compliance'
  })

  const [activeMethodId, setActiveMethodId] = useState<string | null>('document-verification')
  
  const activeMethod = ageVerificationMethods.find(item => item.id === activeMethodId) || ageVerificationMethods[0]

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
                <HeroTagline icon={ageIcon}>Age compliance</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Age verification service for global compliance
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Folio helps you confirm user age quickly and securely anywhere in the world. You choose verification methods that match your risk level, from private anonymous checks to full identity verification, while staying aligned with global standards including GDPR, COPPA, DSA and others.
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
            <ImageWithPlaceholder
              src={ageVerificationHero}
              alt="Age verification preview"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <HeroTagline icon={ageIcon}>Age compliance</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Age verification service for global compliance
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Folio helps you confirm user age quickly and securely anywhere in the world. You choose verification methods that match your risk level, from private anonymous checks to full identity verification, while staying aligned with global standards including GDPR, COPPA, DSA and others.
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
            <ImageWithPlaceholder
              src={ageVerificationHero}
              alt="Age verification preview"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* Age checks without friction Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center max-w-[576px] relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
                Age checks without friction
              </h2>
              <p className="font-normal leading-6 md:leading-7 text-[#737373] text-base md:text-lg w-full">
                Age verification with Folio is fast, intuitive and smooth. Users complete a selfie, age credential or a document scan in a few seconds, keeping onboarding simple and minimising drop offs.
              </p>
            </div>
          </div>
        </section>

        {/* Three ways to verify age Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <ImageWithPlaceholder
              src={activeMethod.desktopImage || ''}
              alt={activeMethod.title}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="Three ways to verify age"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={ageVerificationMethods}
                defaultOpenId="document-verification"
                onItemChange={setActiveMethodId}
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Three ways to verify age"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={ageVerificationMethods}
              defaultOpenId="document-verification"
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Privacy that stays with the user Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <SectionHeader
                title="Privacy that stays with the user"
                description="Folio is designed around privacy from the first step. Anonymous and minimal data flows reduce what you need to store and process. Where biometrics are used, they stay protected and handled securely so you stay aligned with global privacy laws."
                align="left"
                maxWidth="672px"
              />
            </div>
            <ImageWithPlaceholder
              src={ageVerificationPrivacy}
              alt="Privacy features preview"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Privacy that stays with the user"
              description="Folio is designed around privacy from the first step. Anonymous and minimal data flows reduce what you need to store and process. Where biometrics are used, they stay protected and handled securely so you stay aligned with global privacy laws."
              align="left"
              maxWidth="672px"
            />
            <ImageWithPlaceholder
              src={ageVerificationPrivacy}
              alt="Privacy features preview"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* All essential age assurance features Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <ImageWithPlaceholder
              src={ageVerificationAgeAssurance}
              alt="Age assurance features preview"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <SectionHeader
                title="All essential age assurance features"
                description="Folio brings liveness checks, biometric precision, real time estimation and document backed verification into one platform. You can choose the right level of assurance for your users and your product without adding unnecessary friction."
                align="left"
                maxWidth="672px"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="All essential age assurance features"
              description="Folio brings liveness checks, biometric precision, real time estimation and document backed verification into one platform. You can choose the right level of assurance for your users and your product without adding unnecessary friction."
              align="left"
              maxWidth="672px"
            />
            <ImageWithPlaceholder
              src={ageVerificationAgeAssurance}
              alt="Age assurance features preview"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              loading="lazy"
            />
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
                  <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full">
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
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  Bring accurate age verification to your product
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  Folio helps you protect users, satisfy regulators and maintain a smooth experience. Talk to our team to design an age assurance flow that fits your product.
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
                Bring accurate age verification to your product
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                Folio helps you protect users, satisfy regulators and maintain a smooth experience. Talk to our team to design an age assurance flow that fits your product.
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
