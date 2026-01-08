import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, Accordion, HeroTagline } from '../components/ui'
import type { AccordionItemData } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

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

// How it works image mapping
const HOW_IT_WORKS_IMAGES: Record<string, string> = {
  send: clientOnboardingHowItWorks1,
  verify: clientOnboardingHowItWorks2,
  review: clientOnboardingHowItWorks3,
}

// How it works step IDs
const HOW_IT_WORKS_IDS = ['send', 'verify', 'review'] as const

// Key features IDs
const KEY_FEATURES_IDS = [
  'globalId',
  'amlKyc',
  'addressVerification',
  'secureStorage',
  'riskScoring',
  'auditReports',
  'facialVerification',
  'livenessCheck',
] as const

// Industry cards icon mapping
const INDUSTRY_ICONS: Record<string, string> = {
  accountants: building2Icon,
  lawyers: scaleIcon,
  estateAgents: homeIcon,
  financialAdvisors: landmarkIcon,
  conveyancers: heartHandshakeIcon,
  professionalServices: userCheckIcon,
}

// Industry IDs
const INDUSTRY_IDS = [
  'accountants',
  'lawyers',
  'estateAgents',
  'financialAdvisors',
  'conveyancers',
  'professionalServices',
] as const

export default function ClientOnboardingPage() {
  const { t } = useTranslation('solutions')
  const { currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/solutions/client-onboarding`
  
  usePageTitle({
    title: t('clientOnboarding.meta.title'),
    description: t('clientOnboarding.meta.description'),
    ogTitle: t('clientOnboarding.meta.title'),
    ogDescription: t('clientOnboarding.meta.description'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  const [activeMethodId, setActiveMethodId] = useState<string | null>('send')

  // Dynamic accordion items from translations
  const howItWorksItems: AccordionItemData[] = HOW_IT_WORKS_IDS.map(id => ({
    id,
    title: t(`clientOnboarding.howItWorks.${id}.title`),
    description: t(`clientOnboarding.howItWorks.${id}.description`),
    desktopImage: HOW_IT_WORKS_IMAGES[id],
  }))

  const keyFeaturesItems: AccordionItemData[] = KEY_FEATURES_IDS.map(id => ({
    id,
    title: t(`clientOnboarding.keyFeatures.${id}.title`),
    description: t(`clientOnboarding.keyFeatures.${id}.description`),
  }))

  const industryCards = INDUSTRY_IDS.map(id => ({
    icon: INDUSTRY_ICONS[id],
    title: t(`clientOnboarding.industries.${id}.title`),
    description: t(`clientOnboarding.industries.${id}.description`),
  }))
  
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
                <HeroTagline icon={briefcaseIcon}>{t('clientOnboarding.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('clientOnboarding.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('clientOnboarding.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  {t('clientOnboarding.cta.button', 'Get in touch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={clientOnboardingHero}
              alt={t('clientOnboarding.hero.tagline')}
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
                <HeroTagline icon={briefcaseIcon}>{t('clientOnboarding.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('clientOnboarding.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('clientOnboarding.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  {t('clientOnboarding.cta.button', 'Get in touch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={clientOnboardingHero}
              alt={t('clientOnboarding.hero.tagline')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* Client verification made simple Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('clientOnboarding.verification.title')}
                maxWidth="576px"
              />
              <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
                <FeatureItem
                  icon={globeIcon}
                  title={t('clientOnboarding.verification.remote.title')}
                  description={t('clientOnboarding.verification.remote.description')}
                />
                <FeatureItem
                  icon={fileSearchIcon}
                  title={t('clientOnboarding.verification.reports.title')}
                  description={t('clientOnboarding.verification.reports.description')}
                />
                <FeatureItem
                  icon={shieldCheckIcon}
                  title={t('clientOnboarding.verification.audit.title')}
                  description={t('clientOnboarding.verification.audit.description')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
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
                title={t('clientOnboarding.howItWorks.title')}
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
              title={t('clientOnboarding.howItWorks.title')}
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
                {t('clientOnboarding.keyFeatures.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('clientOnboarding.keyFeatures.description')}
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start relative min-w-0">
              <Accordion
                items={keyFeaturesItems}
                defaultOpenId="globalId"
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('clientOnboarding.keyFeatures.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('clientOnboarding.keyFeatures.description')}
              </p>
            </div>
            <Accordion
              items={keyFeaturesItems}
              defaultOpenId="globalId"
              showMobileImages={false}
            />
          </div>
        </section>

        {/* Made for regulated industries Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('clientOnboarding.industries.title')}
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
                  {t('clientOnboarding.cta.title')}
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  {t('clientOnboarding.cta.description')}
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button
                  onClick={handleGetInTouch}
                  variant="primary"
                >
                  {t('clientOnboarding.cta.button', 'Get in touch')}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('clientOnboarding.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('clientOnboarding.cta.description')}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
              <Button
                onClick={handleGetInTouch}
                variant="primary"
              >
                {t('clientOnboarding.cta.button', 'Get in touch')}
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

