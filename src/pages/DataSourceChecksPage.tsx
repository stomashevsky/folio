import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

// Icons
import databaseIcon from '../assets/icons/Database.svg'
import globeIcon from '../assets/icons/Globe.svg'
import building2Icon from '../assets/icons/Building2.svg'
import idCardIcon from '../assets/icons/IdCard.svg'
import carFrontIcon from '../assets/icons/Car.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import circlePlusIcon from '../assets/icons/CirclePlus.svg'
import fileSearchIcon from '../assets/icons/FileSearch.svg'
import userRoundCheckIcon from '../assets/icons/UserRoundCheck.svg'
import settings2Icon from '../assets/icons/Settings2.svg'

// Images
import dataSourceChecksHero from '../assets/images/data-source-checks-hero.png'
import dataSourceChecksHowItWorks1 from '../assets/images/data-source-checks-how-it-works-1.png'
import dataSourceChecksHowItWorks2 from '../assets/images/data-source-checks-how-it-works-2.png'
import dataSourceChecksHowItWorks3 from '../assets/images/data-source-checks-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// How it works images config
const HOW_IT_WORKS_IMAGES = {
  gatherDetails: dataSourceChecksHowItWorks1,
  applyRules: dataSourceChecksHowItWorks2,
  deliverDecision: dataSourceChecksHowItWorks3,
}

// Key features IDs
const KEY_FEATURES_IDS = ['globalReach', 'flexibleMatch', 'smartAddress', 'adaptiveRouting'] as const

// Database icons config
const DATABASE_ICONS = {
  authoritative: building2Icon,
  ecbsv: idCardIcon,
  dmv: carFrontIcon,
  tin: shieldCheckIcon,
  additional: circlePlusIcon,
}

// Use cases icons config
const USE_CASE_ICONS = {
  screening: fileSearchIcon,
  matching: userRoundCheckIcon,
  adaptive: settings2Icon,
}

export default function DataSourceChecksPage() {
  const { t } = useTranslation('platform')
  const { currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/platform/data-source-checks`

  usePageTitle({
    title: t('dataSourceChecks.meta.title'),
    description: t('dataSourceChecks.meta.description'),
    ogTitle: t('dataSourceChecks.meta.title'),
    ogDescription: t('dataSourceChecks.meta.description'),
    ogImage: getOgImageUrl('data-source-checks-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  // Generate how it works items from translations
  const howItWorksItems: AccordionItemData[] = useMemo(() => 
    (['gatherDetails', 'applyRules', 'deliverDecision'] as const).map(id => ({
      id,
      title: t(`dataSourceChecks.howItWorks.${id}.title`),
      description: t(`dataSourceChecks.howItWorks.${id}.description`),
      desktopImage: HOW_IT_WORKS_IMAGES[id],
    })),
  [t])

  // Generate key features items from translations
  const keyFeatures = useMemo(() =>
    KEY_FEATURES_IDS.map(id => ({
      id,
      title: t(`dataSourceChecks.keyFeatures.items.${id}.title`),
      description: t(`dataSourceChecks.keyFeatures.items.${id}.description`),
    })),
  [t])

  // Generate trusted databases from translations
  const trustedDatabases = useMemo(() =>
    (['authoritative', 'ecbsv', 'dmv', 'tin', 'additional'] as const).map(id => ({
      icon: DATABASE_ICONS[id],
      title: t(`dataSourceChecks.databases.${id}.title`),
      description: t(`dataSourceChecks.databases.${id}.description`),
    })),
  [t])

  // Generate use cases from translations
  const useCases = useMemo(() =>
    (['screening', 'matching', 'adaptive'] as const).map(id => ({
      icon: USE_CASE_ICONS[id],
      title: t(`dataSourceChecks.useCases.${id}.title`),
      description: t(`dataSourceChecks.useCases.${id}.description`),
    })),
  [t])

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('gatherDetails')
  const [activeKeyFeatureId, setActiveKeyFeatureId] = useState<string | null>('globalReach')
  
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
                <HeroTagline icon={databaseIcon}>{t('dataSourceChecks.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('dataSourceChecks.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('dataSourceChecks.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button onClick={handleGetInTouch} variant="primary">
                  {t('common:buttons.getInTouch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={dataSourceChecksHero}
              alt="Data source checks preview"
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
                <HeroTagline icon={databaseIcon}>{t('dataSourceChecks.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('dataSourceChecks.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('dataSourceChecks.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  {t('common:buttons.getInTouch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={dataSourceChecksHero}
              alt="Data source checks preview"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* Smarter global verification Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('dataSourceChecks.verification.title')}
                maxWidth="576px"
              />
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={globeIcon}
                  title={t('dataSourceChecks.verification.coverage.title')}
                  description={t('dataSourceChecks.verification.coverage.description')}
                />
                <FeatureHighlight
                  icon={settings2Icon}
                  title={t('dataSourceChecks.verification.matching.title')}
                  description={t('dataSourceChecks.verification.matching.description')}
                />
                <FeatureHighlight
                  icon={databaseIcon}
                  title={t('dataSourceChecks.verification.unified.title')}
                  description={t('dataSourceChecks.verification.unified.description')}
                />
              </div>
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-11 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={globeIcon}
                  title={t('dataSourceChecks.verification.coverage.title')}
                  description={t('dataSourceChecks.verification.coverage.description')}
                />
                <FeatureHighlight
                  icon={settings2Icon}
                  title={t('dataSourceChecks.verification.matching.title')}
                  description={t('dataSourceChecks.verification.matching.description')}
                />
                <FeatureHighlight
                  icon={databaseIcon}
                  title={t('dataSourceChecks.verification.unified.title')}
                  description={t('dataSourceChecks.verification.unified.description')}
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
              src={activeHowItWorksItem.desktopImage || ''}
              alt={activeHowItWorksItem.title}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title={t('dataSourceChecks.howItWorks.title')}
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="gatherDetails"
                onItemChange={setActiveHowItWorksId}
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('dataSourceChecks.howItWorks.title')}
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={howItWorksItems}
              defaultOpenId="gatherDetails"
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
                title={t('dataSourceChecks.databases.title')}
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
            <div className="flex flex-col gap-5 items-start max-w-full md:max-w-[512px] relative shrink-0 w-full md:w-auto md:flex-1">
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] w-full">
                {t('dataSourceChecks.keyFeatures.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('dataSourceChecks.keyFeatures.description')}
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
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('dataSourceChecks.useCases.title')}
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
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  {t('dataSourceChecks.cta.title')}
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  {t('dataSourceChecks.cta.description')}
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
                {t('dataSourceChecks.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('dataSourceChecks.cta.description')}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0">
              <Button onClick={handleGetInTouch} variant="primary">
                {t('common:buttons.getInTouch')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ExploreMoreSection currentPath="/platform/data-source-checks" />
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
