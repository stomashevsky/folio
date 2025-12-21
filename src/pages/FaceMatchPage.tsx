import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import FAQSection from '../components/sections/FAQSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'

// Icons
import scanFaceIcon from '../assets/icons/ScanFace.svg'
import awardIcon from '../assets/icons/Award.svg'
import shieldHalfIcon from '../assets/icons/ShieldHalf.svg'
import scaleIcon from '../assets/icons/Scale.svg'
import globeIcon from '../assets/icons/Globe.svg'
import settings2Icon from '../assets/icons/Settings2.svg'
import barChart4Icon from '../assets/icons/BarChart4.svg'
import zapIcon from '../assets/icons/Zap.svg'
import squareUserIcon from '../assets/icons/SquareUser.svg'
import refreshCcwIcon from '../assets/icons/RefreshCcw.svg'
import userCheckIcon from '../assets/icons/UserCheck.svg'
import circleUserIcon from '../assets/icons/CircleUser.svg'

// Images
import faceMatchHero from '../assets/images/face-match-hero.png'
import faceMatchHowItWorks1 from '../assets/images/face-match-how-it-works-1.png'
import faceMatchHowItWorks2 from '../assets/images/face-match-how-it-works-2.png'
import faceMatchHowItWorks3 from '../assets/images/face-match-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// How it works images config
const HOW_IT_WORKS_IMAGES = {
  complianceRules: faceMatchHowItWorks1,
  userExperience: faceMatchHowItWorks2,
  manageData: faceMatchHowItWorks3,
}

// Key features IDs
const KEY_FEATURES_IDS = ['flexibleControls', 'signalLibrary', 'improvingModels', 'multiFrame', 'autoCapture', 'userGuidance', 'crossDevice'] as const

export default function FaceMatchPage() {
  const { t } = useTranslation('platform')

  usePageTitle({
    title: t('faceMatch.meta.title'),
    description: t('faceMatch.meta.description'),
    ogTitle: t('faceMatch.meta.title'),
    ogDescription: t('faceMatch.meta.description'),
    ogImage: getOgImageUrl('face-match-hero.png'),
    ogUrl: 'https://folio.id/platform/face-match'
  })

  // Generate how it works items from translations
  const howItWorksItems: AccordionItemData[] = useMemo(() => 
    (['complianceRules', 'userExperience', 'manageData'] as const).map(id => ({
      id,
      title: t(`faceMatch.howItWorks.${id}.title`),
      description: t(`faceMatch.howItWorks.${id}.description`),
      desktopImage: HOW_IT_WORKS_IMAGES[id],
    })),
  [t])

  // Generate key features items from translations
  const keyFeatures = useMemo(() =>
    KEY_FEATURES_IDS.map(id => ({
      id,
      title: t(`faceMatch.keyFeatures.items.${id}.title`),
      description: t(`faceMatch.keyFeatures.items.${id}.description`),
    })),
  [t])

  // Generate FAQ data from translations
  const faqData = useMemo(() => {
    const items = t('faceMatch.faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>
    return items.map(item => ({ q: item.q, a: item.a }))
  }, [t])

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('complianceRules')
  const [activeKeyFeatureId, setActiveKeyFeatureId] = useState<string | null>('flexibleControls')
  
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
                <HeroTagline icon={circleUserIcon}>{t('faceMatch.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('faceMatch.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('faceMatch.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button onClick={handleGetInTouch} variant="primary">
                  {t('common:buttons.getInTouch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={faceMatchHero}
              alt="Face matching technology comparing live selfie with ID document photo for identity verification"
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
                <HeroTagline icon={circleUserIcon}>{t('faceMatch.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('faceMatch.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('faceMatch.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  {t('common:buttons.getInTouch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={faceMatchHero}
              alt="Face matching technology comparing live selfie with ID document photo for identity verification"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* Next level face recognition protection Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('faceMatch.protection.title')}
                maxWidth="576px"
              />
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={scanFaceIcon}
                  title={t('faceMatch.protection.precision.title')}
                  description={t('faceMatch.protection.precision.description')}
                />
                <FeatureHighlight
                  icon={awardIcon}
                  title={t('faceMatch.protection.certified.title')}
                  description={t('faceMatch.protection.certified.description')}
                />
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title={t('faceMatch.protection.defense.title')}
                  description={t('faceMatch.protection.defense.description')}
                />
              </div>
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-11 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={scanFaceIcon}
                  title={t('faceMatch.protection.precision.title')}
                  description={t('faceMatch.protection.precision.description')}
                />
                <FeatureHighlight
                  icon={awardIcon}
                  title={t('faceMatch.protection.certified.title')}
                  description={t('faceMatch.protection.certified.description')}
                />
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title={t('faceMatch.protection.defense.title')}
                  description={t('faceMatch.protection.defense.description')}
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
                title={t('faceMatch.howItWorks.title')}
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="complianceRules"
                onItemChange={setActiveHowItWorksId}
                showMobileImages={false}
              />
            </div>
            <ImageWithPlaceholder
              src={activeHowItWorksItem.desktopImage || ''}
              alt={activeHowItWorksItem.title}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('faceMatch.howItWorks.title')}
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={howItWorksItems}
              defaultOpenId="complianceRules"
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
                title={t('faceMatch.responsible.title')}
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                <ToolCard
                  icon={scaleIcon}
                  title={t('faceMatch.responsible.ethical.title')}
                  description={t('faceMatch.responsible.ethical.description')}
                />
                <ToolCard
                  icon={globeIcon}
                  title={t('faceMatch.responsible.compliance.title')}
                  description={t('faceMatch.responsible.compliance.description')}
                />
                <ToolCard
                  icon={shieldHalfIcon}
                  title={t('faceMatch.responsible.resistance.title')}
                  description={t('faceMatch.responsible.resistance.description')}
                />
                <ToolCard
                  icon={settings2Icon}
                  title={t('faceMatch.responsible.customizable.title')}
                  description={t('faceMatch.responsible.customizable.description')}
                />
                <ToolCard
                  icon={barChart4Icon}
                  title={t('faceMatch.responsible.conversion.title')}
                  description={t('faceMatch.responsible.conversion.description')}
                />
                <ToolCard
                  icon={zapIcon}
                  title={t('faceMatch.responsible.fast.title')}
                  description={t('faceMatch.responsible.fast.description')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key features Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start max-w-full md:max-w-[512px] relative shrink-0 w-full md:w-auto md:flex-1">
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] w-full">
                {t('faceMatch.keyFeatures.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('faceMatch.keyFeatures.description')}
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
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('faceMatch.useCases.title')}
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                <ToolCard
                  icon={squareUserIcon}
                  title={t('faceMatch.useCases.verifyId.title')}
                  description={t('faceMatch.useCases.verifyId.description')}
                />
                <ToolCard
                  icon={refreshCcwIcon}
                  title={t('faceMatch.useCases.reverification.title')}
                  description={t('faceMatch.useCases.reverification.description')}
                />
                <ToolCard
                  icon={userCheckIcon}
                  title={t('faceMatch.useCases.workforce.title')}
                  description={t('faceMatch.useCases.workforce.description')}
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
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  {t('faceMatch.cta.title')}
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  {t('faceMatch.cta.description')}
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  {t('common:buttons.getInTouch')}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('faceMatch.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('faceMatch.cta.description')}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0">
              <Button onClick={handleGetInTouch} variant="primary">
                {t('common:buttons.getInTouch')}
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqData={faqData} title={t('faceMatch.faq.title')} />
      </main>
      <ExploreMoreSection currentPath="/platform/face-match" />
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
