import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, Accordion, IconContainer } from '../components/ui'
import type { AccordionItemData } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

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

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function AgeVerificationPage() {
  const { t } = useTranslation('pages')
  const { currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/solutions/age-compliance`
  
  usePageTitle({
    title: t('ageVerification.meta.title'),
    description: t('ageVerification.meta.description'),
    ogTitle: t('ageVerification.meta.title'),
    ogDescription: t('ageVerification.meta.description'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  // Age verification methods data (using AccordionItemData format)
  const ageVerificationMethods: AccordionItemData[] = [
    {
      id: 'document-verification',
      title: t('ageVerification.methods.document.title'),
      description: t('ageVerification.methods.document.description'),
      desktopImage: ageVerificationDocumentVerification,
    },
    {
      id: 'face-estimation',
      title: t('ageVerification.methods.face.title'),
      description: t('ageVerification.methods.face.description'),
      desktopImage: ageVerificationFaceEstimation,
    },
    {
      id: 'anonymous-credential',
      title: t('ageVerification.methods.anonymous.title'),
      description: t('ageVerification.methods.anonymous.description'),
      desktopImage: ageVerificationAnonymousCredential,
    },
  ]

  // Industry cards data
  const industryCards = [
    {
      icon: messagesSquareIcon,
      title: t('ageVerification.industries.social.title'),
      description: t('ageVerification.industries.social.description'),
    },
    {
      icon: dicesIcon,
      title: t('ageVerification.industries.gaming.title'),
      description: t('ageVerification.industries.gaming.description'),
    },
    {
      icon: shoppingCartIcon,
      title: t('ageVerification.industries.ecommerce.title'),
      description: t('ageVerification.industries.ecommerce.description'),
    },
    {
      icon: creditCardIcon,
      title: t('ageVerification.industries.fintech.title'),
      description: t('ageVerification.industries.fintech.description'),
    },
    {
      icon: clapperboardIcon,
      title: t('ageVerification.industries.streaming.title'),
      description: t('ageVerification.industries.streaming.description'),
    },
    {
      icon: signalIcon,
      title: t('ageVerification.industries.telecom.title'),
      description: t('ageVerification.industries.telecom.description'),
    },
  ]

  // Integration methods data
  const integrationMethods = [
    {
      icon: puzzleIcon,
      title: t('ageVerification.integration.sdk.title'),
      description: t('ageVerification.integration.sdk.description'),
    },
    {
      icon: bracesIcon,
      title: t('ageVerification.integration.api.title'),
      description: t('ageVerification.integration.api.description'),
    },
    {
      icon: linkIcon,
      title: t('ageVerification.integration.staticUrl.title'),
      description: t('ageVerification.integration.staticUrl.description'),
    },
  ]

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
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('ageVerification.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('ageVerification.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  {t('ageVerification.hero.getInTouch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={ageVerificationHero}
              alt={t('ageVerification.hero.imageAlt')}
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
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('ageVerification.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('ageVerification.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  {t('ageVerification.hero.getInTouch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={ageVerificationHero}
              alt={t('ageVerification.hero.imageAlt')}
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
                {t('ageVerification.frictionless.title')}
              </h2>
              <p className="font-normal leading-6 md:leading-7 text-[#737373] text-base md:text-lg w-full">
                {t('ageVerification.frictionless.description')}
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
                title={t('ageVerification.methods.title')}
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
              title={t('ageVerification.methods.title')}
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
                title={t('ageVerification.privacy.title')}
                description={t('ageVerification.privacy.description')}
                align="left"
                maxWidth="672px"
              />
            </div>
            <ImageWithPlaceholder
              src={ageVerificationPrivacy}
              alt={t('ageVerification.privacy.title')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('ageVerification.privacy.title')}
              description={t('ageVerification.privacy.description')}
              align="left"
              maxWidth="672px"
            />
            <ImageWithPlaceholder
              src={ageVerificationPrivacy}
              alt={t('ageVerification.privacy.title')}
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
              alt={t('ageVerification.assurance.title')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <SectionHeader
                title={t('ageVerification.assurance.title')}
                description={t('ageVerification.assurance.description')}
                align="left"
                maxWidth="672px"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('ageVerification.assurance.title')}
              description={t('ageVerification.assurance.description')}
              align="left"
              maxWidth="672px"
            />
            <ImageWithPlaceholder
              src={ageVerificationAgeAssurance}
              alt={t('ageVerification.assurance.title')}
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
              title={t('ageVerification.industries.title')}
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
              title={t('ageVerification.integration.title')}
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
                  {t('ageVerification.cta.title')}
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  {t('ageVerification.cta.description')}
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  {t('ageVerification.cta.button')}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('ageVerification.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('ageVerification.cta.description')}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
              <Button
                onClick={handleGetInTouch}
                variant="primary"
              >
                {t('ageVerification.cta.button')}
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
