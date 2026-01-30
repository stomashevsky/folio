import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, FeatureBlock, HeroTagline, ToolCard } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import GlobalPartnersSection from '../components/sections/GlobalPartnersSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToTop } from '../utils/scrollToTop'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import governmentPppHero from '../assets/images/government-ppp-hero.png'
import governmentSolutionsHero from '../assets/images/government-solutions-hero.png'
import governmentAlbaniaCaseStudy from '../assets/images/government-albania-case-study.png'
import governmentTestimonialAvatar from '../assets/images/government-testimonial-avatar.png'
import landmarkIcon from '../assets/icons/Landmark.svg'

// Icons for govBenefits cards
import building2Icon from '../assets/icons/Building2.svg'
import barChart4Icon from '../assets/icons/BarChart4.svg'
import handCoinsIcon from '../assets/icons/HandCoins.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import heartHandshakeIcon from '../assets/icons/HeartHandshake.svg'
import sparklesIcon from '../assets/icons/Sparkles.svg'

// Icons for citizenBenefits cards
import zapIcon from '../assets/icons/Zap.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import userCheckIcon from '../assets/icons/UserCheck.svg'
import creditCardIcon from '../assets/icons/CreditCard.svg'
import fingerprintIcon from '../assets/icons/Fingerprint.svg'

// Background style using inline styles for complex multi-layer gradient
// This cannot be easily expressed in Tailwind CSS, so inline style is used
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

function StatItem({ value, description }: { value: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col gap-2 items-start relative shrink-0">
      <p className="font-bold leading-8 md:leading-[36px] text-2xl md:text-[30px] relative shrink-0 text-[#0a0a0a] w-full">
        {value}
      </p>
      <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
        {description}
      </p>
    </div>
  )
}

function SgoCapabilityItem({ title, description, isOpen, onClick }: { title: string; description: string; isOpen: boolean; onClick: () => void }) {
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

export default function GovernmentPage() {
  const { t } = useTranslation('government')
  const navigate = useNavigate()
  const { getLocalizedPath, currentLang } = useLocalizedPath()
  
  const canonicalUrl = `https://folio.id/${currentLang}/government`

  usePageTitle({
    title: t('government.meta.title'),
    description: t('government.meta.description'),
    ogTitle: t('government.meta.title'),
    ogDescription: t('government.meta.description'),
    ogImage: getOgImageUrl('government-solutions-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  const [activeWhyFolioId, setActiveWhyFolioId] = useState<number | null>(0)

  // Combined list of all Why Folio items - ordered by description length and logical flow
  const whyFolioItems = [
    // Start with company identity and capabilities
    { id: 'sovereign', title: t('government.whyFolio.items.sovereign.title'), description: t('government.whyFolio.items.sovereign.description') },
    { id: 'execution', title: t('government.sgoCapabilities.items.execution.title'), description: t('government.sgoCapabilities.items.execution.description') },
    { id: 'outcomes', title: t('government.sgoCapabilities.items.outcomes.title'), description: t('government.sgoCapabilities.items.outcomes.description') },
    { id: 'cognitive', title: t('government.sgoCapabilities.items.cognitive.title'), description: t('government.sgoCapabilities.items.cognitive.description') },
    { id: 'risk', title: t('government.sgoCapabilities.items.risk.title'), description: t('government.sgoCapabilities.items.risk.description') },
    { id: 'culture', title: t('government.sgoCapabilities.items.culture.title'), description: t('government.sgoCapabilities.items.culture.description') },
    // Product features
    { id: 'private', title: t('government.whyFolio.items.private.title'), description: t('government.whyFolio.items.private.description') },
    { id: 'ai', title: t('government.whyFolio.items.ai.title'), description: t('government.whyFolio.items.ai.description') },
    { id: 'global', title: t('government.whyFolio.items.global.title'), description: t('government.whyFolio.items.global.description') },
    { id: 'experience', title: t('government.whyFolio.items.experience.title'), description: t('government.whyFolio.items.experience.description') },
    { id: 'frictionless', title: t('government.whyFolio.items.frictionless.title'), description: t('government.whyFolio.items.frictionless.description') },
    { id: 'lowMaintenance', title: t('government.whyFolio.items.lowMaintenance.title'), description: t('government.whyFolio.items.lowMaintenance.description') },
    { id: 'fullStack', title: t('government.sgoCapabilities.items.fullStack.title'), description: t('government.sgoCapabilities.items.fullStack.description') },
  ]

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
                <HeroTagline icon={landmarkIcon}>{t('government.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('government.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('government.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button
                  onClick={() => {
                    window.location.href = 'mailto:contact@folio.id'
                  }}
                  variant="primary"
                >
                  {t('government.cta.button')}
                </Button>
                <Button
                  onClick={() => {
                    navigate(getLocalizedPath('/government/playground'))
                    setTimeout(() => {
                      scrollToTop()
                    }, 100)
                  }}
                  variant="outline"
                >
                  {t('government.cta.playgroundButton')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={governmentPppHero}
              alt={t('government.hero.tagline')}
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
                <HeroTagline icon={landmarkIcon}>{t('government.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('government.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('government.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button
                  onClick={() => {
                    window.location.href = 'mailto:contact@folio.id'
                  }}
                  variant="primary"
                >
                  {t('government.cta.button')}
                </Button>
                <Button
                  onClick={() => {
                    navigate(getLocalizedPath('/government/playground'))
                    setTimeout(() => {
                      scrollToTop()
                    }, 100)
                  }}
                  variant="outline"
                >
                  {t('government.cta.playgroundButton')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={governmentPppHero}
              alt={t('government.hero.tagline')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* EUDI Section (former Hero) */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <ImageWithPlaceholder
              src={governmentSolutionsHero}
              alt={t('government.eudiSection.title')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <span className="font-medium leading-5 text-sm text-[#737373]">
                  {t('government.eudiSection.tagline')}
                </span>
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  {t('government.eudiSection.title')}
                </h2>
                <p className="font-normal leading-6 text-[#737373] text-base w-full mt-2">
                  {t('government.eudiSection.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate(getLocalizedPath('/government/playground'))
                    setTimeout(() => {
                      scrollToTop()
                    }, 100)
                  }}
                >
                  {t('government.cta.playgroundButton')}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <span className="font-medium leading-5 text-sm text-[#737373]">
                {t('government.eudiSection.tagline')}
              </span>
              <h2 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('government.eudiSection.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('government.eudiSection.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button
                variant="primary"
                onClick={() => {
                  navigate(getLocalizedPath('/government/playground'))
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
              >
                {t('government.cta.playgroundButton')}
              </Button>
            </div>
            <ImageWithPlaceholder
              src={governmentSolutionsHero}
              alt={t('government.eudiSection.title')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* McKinsey Quote Section */}
        <section className="bg-white flex flex-col items-center px-0 py-16 md:py-24 relative w-full">
          <div className="flex flex-col gap-4 items-center max-w-[672px] px-6 w-full">
            <p className="font-medium leading-7 md:leading-7 text-lg md:text-xl text-[#0a0a0a] text-center">
              {t('government.mckinsey.quote')}
            </p>
            <span className="font-normal text-base text-[#737373]">
              {t('government.mckinsey.source')}
            </span>
          </div>
        </section>

        {/* Benefits for Government Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('government.govBenefits.title')}
              description={t('government.govBenefits.description')}
              align="center"
              maxWidth="576px"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center relative shrink-0 w-full">
              <ToolCard
                icon={building2Icon}
                title={t('government.govBenefits.items.services.title')}
                description={t('government.govBenefits.items.services.description')}
              />
              <ToolCard
                icon={barChart4Icon}
                title={t('government.govBenefits.items.gdp.title')}
                description={t('government.govBenefits.items.gdp.description')}
              />
              <ToolCard
                icon={handCoinsIcon}
                title={t('government.govBenefits.items.revenue.title')}
                description={t('government.govBenefits.items.revenue.description')}
              />
              <ToolCard
                icon={shieldCheckIcon}
                title={t('government.govBenefits.items.security.title')}
                description={t('government.govBenefits.items.security.description')}
              />
              <ToolCard
                icon={heartHandshakeIcon}
                title={t('government.govBenefits.items.trust.title')}
                description={t('government.govBenefits.items.trust.description')}
              />
              <ToolCard
                icon={sparklesIcon}
                title={t('government.govBenefits.items.ai.title')}
                description={t('government.govBenefits.items.ai.description')}
              />
            </div>
          </div>
        </section>

        {/* Benefits for Citizens Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('government.citizenBenefits.title')}
              description={t('government.citizenBenefits.description')}
              align="center"
              maxWidth="576px"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center relative shrink-0 w-full">
              <ToolCard
                icon={zapIcon}
                title={t('government.citizenBenefits.items.convenience.title')}
                description={t('government.citizenBenefits.items.convenience.description')}
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title={t('government.citizenBenefits.items.privacy.title')}
                description={t('government.citizenBenefits.items.privacy.description')}
              />
              <ToolCard
                icon={userCheckIcon}
                title={t('government.citizenBenefits.items.control.title')}
                description={t('government.citizenBenefits.items.control.description')}
              />
              <ToolCard
                icon={creditCardIcon}
                title={t('government.citizenBenefits.items.transactions.title')}
                description={t('government.citizenBenefits.items.transactions.description')}
              />
              <ToolCard
                icon={fingerprintIcon}
                title={t('government.citizenBenefits.items.kyc.title')}
                description={t('government.citizenBenefits.items.kyc.description')}
              />
              <ToolCard
                icon={shieldCheckIcon}
                title={t('government.citizenBenefits.items.fraud.title')}
                description={t('government.citizenBenefits.items.fraud.description')}
              />
            </div>
          </div>
        </section>

        {/* Investment Stats Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
              <SectionHeader
                title={t('government.investmentStats.title')}
                description={t('government.investmentStats.description')}
                align="left"
                maxWidth="576px"
              />
              <div className="flex gap-8 items-start relative shrink-0 w-full">
                <StatItem
                  value={t('government.investmentStats.investment.value')}
                  description={t('government.investmentStats.investment.description')}
                />
                <StatItem
                  value={t('government.investmentStats.jobs.value')}
                  description={t('government.investmentStats.jobs.description')}
                />
                <StatItem
                  value={t('government.investmentStats.revenue.value')}
                  description={t('government.investmentStats.revenue.description')}
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
              <SectionHeader
                title={t('government.investmentStats.title')}
                description={t('government.investmentStats.description')}
                align="left"
              />
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <StatItem
                  value={t('government.investmentStats.investment.value')}
                  description={t('government.investmentStats.investment.description')}
                />
                <StatItem
                  value={t('government.investmentStats.jobs.value')}
                  description={t('government.investmentStats.jobs.description')}
                />
                <StatItem
                  value={t('government.investmentStats.revenue.value')}
                  description={t('government.investmentStats.revenue.description')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Folio Section - FAQ style centered */}
        <section className="bg-white flex flex-col gap-6 items-center px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-16 items-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            {/* Title and description - centered */}
            <div className="flex flex-col gap-4 md:gap-5 items-center relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] text-center w-full">
                {t('government.whyFolio.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base text-center w-full">
                {t('government.whyFolio.combinedDescription')}
              </p>
            </div>
            {/* Accordion items */}
            <div className="flex flex-col items-start relative shrink-0 w-full">
              {whyFolioItems.map((item, index) => (
                <SgoCapabilityItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  isOpen={activeWhyFolioId === index}
                  onClick={() => setActiveWhyFolioId(activeWhyFolioId === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-12 items-start relative min-w-0">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <span className="font-medium leading-5 text-sm text-[#737373]">
                  {t('government.caseStudy.tagline')}
                </span>
                <SectionHeader
                  title={t('government.caseStudy.title')}
                  description={t('government.caseStudy.description')}
                  align="left"
                />
              </div>
              <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
                {/* Challenge */}
                <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                    {t('government.caseStudy.challenge.title')}
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full">
                    {t('government.caseStudy.challenge.description')}
                  </p>
                </div>
                {/* Solution */}
                <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                    {t('government.caseStudy.solution.title')}
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full">
                    {t('government.caseStudy.solution.description')}
                  </p>
                </div>
                {/* Results */}
                <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                  <p className="font-semibold leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full">
                    {t('government.caseStudy.results.title')}
                  </p>
                  <div className="flex gap-8 items-start relative shrink-0 w-full">
                    <div className="flex flex-1 flex-col gap-2 items-start relative self-stretch shrink-0">
                      <p className="font-bold leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] w-full">
                        {t('government.caseStudy.results.stat1.value')}
                      </p>
                      <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                        {t('government.caseStudy.results.stat1.description')}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 items-start relative self-stretch shrink-0">
                      <p className="font-bold leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] w-full">
                        {t('government.caseStudy.results.stat2.value')}
                      </p>
                      <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                        {t('government.caseStudy.results.stat2.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial */}
              <div className="border-l border-[#737373] border-r-0 border-t-0 border-b-0 box-border flex flex-col gap-3 items-start px-6 py-4 relative shrink-0 w-full">
                <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                  {t('government.caseStudy.testimonial.quote')}
                </p>
                <div className="flex gap-4 items-start relative shrink-0 w-full">
                  <div className="box-border flex gap-2 items-center px-0 py-3 relative shrink-0">
                    <div className="relative rounded-full shrink-0 w-8 h-8">
                      <img
                        src={governmentTestimonialAvatar}
                        alt={t('government.caseStudy.testimonial.name')}
                        className="absolute inset-0 max-w-none object-center object-cover rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="box-border flex flex-1 gap-2 items-center min-h-[56px] min-w-0 px-0 py-1 relative shrink-0">
                    <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base">
                      <span className="leading-6">{t('government.caseStudy.testimonial.name')}</span>
                      <span className="font-normal leading-6 text-[#737373]"> - {t('government.caseStudy.testimonial.title')}</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Case Study Button */}
              <Button
                variant="secondary"
                onClick={() => navigate(getLocalizedPath('/blog/albanian-diaspora-voter-registration'))}
              >
                {t('government.caseStudy.button')}
              </Button>
            </div>
            <ImageWithPlaceholder
              src={governmentAlbaniaCaseStudy}
              alt={t('government.caseStudy.imageAlt')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/426.67]"
              loading="lazy"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <span className="font-medium leading-5 text-sm text-[#737373]">
                  {t('government.caseStudy.tagline')}
                </span>
                <SectionHeader
                  title={t('government.caseStudy.title')}
                  description={t('government.caseStudy.description')}
                  align="left"
                />
              </div>
              <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
                {/* Challenge */}
                <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                    {t('government.caseStudy.challenge.title')}
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full">
                    {t('government.caseStudy.challenge.description')}
                  </p>
                </div>
                {/* Solution */}
                <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                    {t('government.caseStudy.solution.title')}
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full">
                    {t('government.caseStudy.solution.description')}
                  </p>
                </div>
                {/* Results */}
                <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                  <p className="font-semibold leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full">
                    {t('government.caseStudy.results.title')}
                  </p>
                  <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                    <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
                      <p className="font-bold leading-8 relative shrink-0 text-[#0a0a0a] text-2xl w-full">
                        {t('government.caseStudy.results.stat1.value')}
                      </p>
                      <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                        {t('government.caseStudy.results.stat1.description')}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
                      <p className="font-bold leading-8 relative shrink-0 text-[#0a0a0a] text-2xl w-full">
                        {t('government.caseStudy.results.stat2.value')}
                      </p>
                      <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                        {t('government.caseStudy.results.stat2.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial */}
              <div className="border-l border-[#737373] border-r-0 border-t-0 border-b-0 box-border flex flex-col gap-3 items-start px-6 py-4 relative shrink-0 w-full">
                <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                  {t('government.caseStudy.testimonial.quote')}
                </p>
                <div className="flex gap-4 items-start relative shrink-0 w-full">
                  <div className="box-border flex gap-2 items-center px-0 py-3 relative shrink-0">
                    <div className="relative rounded-full shrink-0 w-8 h-8">
                      <img
                        src={governmentTestimonialAvatar}
                        alt={t('government.caseStudy.testimonial.name')}
                        className="absolute inset-0 max-w-none object-center object-cover rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="box-border flex flex-1 gap-2 items-center min-h-[56px] min-w-0 px-0 py-1 relative shrink-0">
                    <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base">
                      <span className="leading-6">{t('government.caseStudy.testimonial.name')}</span>
                      <span className="font-normal leading-6 text-[#737373]"> - {t('government.caseStudy.testimonial.title')}</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Case Study Button */}
              <Button
                variant="secondary"
                onClick={() => navigate(getLocalizedPath('/blog/albanian-diaspora-voter-registration'))}
              >
                {t('government.caseStudy.button')}
              </Button>
            </div>
            <ImageWithPlaceholder
              src={governmentAlbaniaCaseStudy}
              alt={t('government.caseStudy.imageAlt')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/426.67] relative rounded-2xl shrink-0 w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('government.overview.title')}
              description={t('government.overview.description')}
              align="center"
              maxWidth="576px"
            />
          </div>
        </section>

        {/* Global Partners Section */}
        <GlobalPartnersSection />

        {/* Gov Features Section */}
        <section id="gov-features" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 md:gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('government.features.title')}
                description={t('government.features.description')}
                align="center"
                maxWidth="576px"
              />
              <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
                <FeatureBlock
                  icon="shield-check"
                  title={t('government.features.standards.title')}
                  description={t('government.features.standards.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="qr-code"
                  title={t('government.features.issuance.title')}
                  description={t('government.features.issuance.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="lock-keyhole"
                  title={t('government.features.presentation.title')}
                  description={t('government.features.presentation.description')}
                  align="left"
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
                  {t('government.cta.title')}
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  {t('government.cta.description')}
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button
                  onClick={() => {
                    window.location.href = 'mailto:contact@folio.id'
                  }}
                  variant="secondary"
                >
                  {t('government.cta.button')}
                </Button>
                <Button
                  onClick={() => {
                    navigate(getLocalizedPath('/government/playground'))
                    setTimeout(() => {
                      scrollToTop()
                    }, 100)
                  }}
                  variant="primary"
                >
                  {t('government.cta.playgroundButton')}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('government.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('government.cta.description')}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
                variant="secondary"
                fullWidth
              >
                {t('government.cta.button')}
              </Button>
              <Button
                onClick={() => {
                  navigate(getLocalizedPath('/government/playground'))
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
                variant="primary"
                fullWidth
              >
                {t('government.cta.playgroundButton')}
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
