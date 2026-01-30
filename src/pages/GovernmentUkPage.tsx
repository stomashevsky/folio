import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import ukHero from '../assets/images/uk-hero.png'

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

// Icons for whyFolio section
import globeIcon from '../assets/icons/Globe.svg'
import starIcon from '../assets/icons/Star.svg'
import landmarkIcon from '../assets/icons/Landmark.svg'
import refreshCcwIcon from '../assets/icons/RefreshCcw.svg'


// Background style using inline styles for complex multi-layer gradient
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

function WhyFolioBlock({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start w-full">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-lg shrink-0 size-12 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
        <img src={icon} alt="" aria-hidden="true" className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-2 items-start flex-1 min-w-0">
        <h3 className="font-semibold leading-7 text-lg text-[#0a0a0a]">
          {title}
        </h3>
        <p className="font-normal leading-6 text-base text-[#737373]">
          {description}
        </p>
      </div>
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

export default function GovernmentUkPage() {
  const { t } = useTranslation('government')
  const { currentLang } = useLocalizedPath()
  
  const canonicalUrl = `https://folio.id/${currentLang}/government/uk`

  usePageTitle({
    title: t('government.uk.meta.title'),
    description: t('government.uk.meta.description'),
    ogTitle: t('government.uk.meta.title'),
    ogDescription: t('government.uk.meta.description'),
    ogImage: getOgImageUrl('government-solutions-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  const [activeSgoCapabilityId, setActiveSgoCapabilityId] = useState<string | null>('outcomes')

  const sgoCapabilities = [
    { id: 'outcomes', title: t('government.uk.sgoCapabilities.items.outcomes.title'), description: t('government.uk.sgoCapabilities.items.outcomes.description') },
    { id: 'cognitive', title: t('government.uk.sgoCapabilities.items.cognitive.title'), description: t('government.uk.sgoCapabilities.items.cognitive.description') },
    { id: 'risk', title: t('government.uk.sgoCapabilities.items.risk.title'), description: t('government.uk.sgoCapabilities.items.risk.description') },
    { id: 'execution', title: t('government.uk.sgoCapabilities.items.execution.title'), description: t('government.uk.sgoCapabilities.items.execution.description') },
    { id: 'culture', title: t('government.uk.sgoCapabilities.items.culture.title'), description: t('government.uk.sgoCapabilities.items.culture.description') },
    { id: 'fullStack', title: t('government.uk.sgoCapabilities.items.fullStack.title'), description: t('government.uk.sgoCapabilities.items.fullStack.description') },
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
                <span className="font-medium leading-5 text-sm text-[#737373]">
                  {t('government.ukSection.tagline')}
                </span>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('government.uk.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('government.uk.hero.description')}
                </p>
              </div>
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
                variant="primary"
              >
                {t('government.uk.cta.button')}
              </Button>
            </div>
            <ImageWithPlaceholder
              src={ukHero}
              alt={t('government.uk.hero.title')}
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
                <span className="font-medium leading-5 text-sm text-[#737373]">
                  {t('government.ukSection.tagline')}
                </span>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('government.uk.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('government.uk.hero.description')}
                </p>
              </div>
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
                variant="primary"
              >
                {t('government.uk.cta.button')}
              </Button>
            </div>
            <ImageWithPlaceholder
              src={ukHero}
              alt={t('government.uk.hero.title')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* UK Market Stats Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
              <SectionHeader
                title={t('government.uk.ukStats.title')}
                description={t('government.uk.ukStats.description')}
                align="left"
                maxWidth="576px"
              />
              <div className="flex gap-8 items-start relative shrink-0 w-full">
                <StatItem
                  value={t('government.uk.ukStats.population.value')}
                  description={t('government.uk.ukStats.population.description')}
                />
                <StatItem
                  value={t('government.uk.ukStats.smartphone.value')}
                  description={t('government.uk.ukStats.smartphone.description')}
                />
                <StatItem
                  value={t('government.uk.ukStats.cost.value')}
                  description={t('government.uk.ukStats.cost.description')}
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
              <SectionHeader
                title={t('government.uk.ukStats.title')}
                description={t('government.uk.ukStats.description')}
                align="left"
              />
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <StatItem
                  value={t('government.uk.ukStats.population.value')}
                  description={t('government.uk.ukStats.population.description')}
                />
                <StatItem
                  value={t('government.uk.ukStats.smartphone.value')}
                  description={t('government.uk.ukStats.smartphone.description')}
                />
                <StatItem
                  value={t('government.uk.ukStats.cost.value')}
                  description={t('government.uk.ukStats.cost.description')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* McKinsey Quote Section */}
        <section className="bg-white flex flex-col items-center px-0 py-16 md:py-24 relative w-full">
          <div className="flex flex-col gap-4 items-center max-w-[672px] px-6 w-full">
            <p className="font-medium leading-7 md:leading-7 text-lg md:text-xl text-[#0a0a0a] text-center">
              {t('government.uk.mckinsey.quote')}
            </p>
            <span className="font-normal text-base text-[#737373]">
              {t('government.uk.mckinsey.source')}
            </span>
          </div>
        </section>

        {/* Benefits for Government Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('government.uk.govBenefits.title')}
              description={t('government.uk.govBenefits.description')}
              align="center"
              maxWidth="576px"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center relative shrink-0 w-full">
              <ToolCard
                icon={building2Icon}
                title={t('government.uk.govBenefits.items.services.title')}
                description={t('government.uk.govBenefits.items.services.description')}
              />
              <ToolCard
                icon={barChart4Icon}
                title={t('government.uk.govBenefits.items.gdp.title')}
                description={t('government.uk.govBenefits.items.gdp.description')}
              />
              <ToolCard
                icon={handCoinsIcon}
                title={t('government.uk.govBenefits.items.revenue.title')}
                description={t('government.uk.govBenefits.items.revenue.description')}
              />
              <ToolCard
                icon={shieldCheckIcon}
                title={t('government.uk.govBenefits.items.security.title')}
                description={t('government.uk.govBenefits.items.security.description')}
              />
              <ToolCard
                icon={heartHandshakeIcon}
                title={t('government.uk.govBenefits.items.trust.title')}
                description={t('government.uk.govBenefits.items.trust.description')}
              />
              <ToolCard
                icon={sparklesIcon}
                title={t('government.uk.govBenefits.items.ai.title')}
                description={t('government.uk.govBenefits.items.ai.description')}
              />
            </div>
          </div>
        </section>

        {/* Benefits for Citizens Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('government.uk.citizenBenefits.title')}
              description={t('government.uk.citizenBenefits.description')}
              align="center"
              maxWidth="576px"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center relative shrink-0 w-full">
              <ToolCard
                icon={zapIcon}
                title={t('government.uk.citizenBenefits.items.convenience.title')}
                description={t('government.uk.citizenBenefits.items.convenience.description')}
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title={t('government.uk.citizenBenefits.items.privacy.title')}
                description={t('government.uk.citizenBenefits.items.privacy.description')}
              />
              <ToolCard
                icon={userCheckIcon}
                title={t('government.uk.citizenBenefits.items.control.title')}
                description={t('government.uk.citizenBenefits.items.control.description')}
              />
              <ToolCard
                icon={creditCardIcon}
                title={t('government.uk.citizenBenefits.items.transactions.title')}
                description={t('government.uk.citizenBenefits.items.transactions.description')}
              />
              <ToolCard
                icon={fingerprintIcon}
                title={t('government.uk.citizenBenefits.items.kyc.title')}
                description={t('government.uk.citizenBenefits.items.kyc.description')}
              />
              <ToolCard
                icon={shieldCheckIcon}
                title={t('government.uk.citizenBenefits.items.fraud.title')}
                description={t('government.uk.citizenBenefits.items.fraud.description')}
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
                title={t('government.uk.investmentStats.title')}
                description={t('government.uk.investmentStats.description')}
                align="left"
                maxWidth="576px"
              />
              <div className="flex gap-8 items-start relative shrink-0 w-full">
                <StatItem
                  value={t('government.uk.investmentStats.investment.value')}
                  description={t('government.uk.investmentStats.investment.description')}
                />
                <StatItem
                  value={t('government.uk.investmentStats.jobs.value')}
                  description={t('government.uk.investmentStats.jobs.description')}
                />
                <StatItem
                  value={t('government.uk.investmentStats.revenue.value')}
                  description={t('government.uk.investmentStats.revenue.description')}
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
              <SectionHeader
                title={t('government.uk.investmentStats.title')}
                description={t('government.uk.investmentStats.description')}
                align="left"
              />
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <StatItem
                  value={t('government.uk.investmentStats.investment.value')}
                  description={t('government.uk.investmentStats.investment.description')}
                />
                <StatItem
                  value={t('government.uk.investmentStats.jobs.value')}
                  description={t('government.uk.investmentStats.jobs.description')}
                />
                <StatItem
                  value={t('government.uk.investmentStats.revenue.value')}
                  description={t('government.uk.investmentStats.revenue.description')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Folio Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 md:gap-16 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('government.uk.whyFolio.title')}
              description={t('government.uk.whyFolio.description')}
              align="center"
              maxWidth="576px"
            />
            <div className="flex flex-col gap-12 md:gap-16 items-start w-full">
              <WhyFolioBlock
                icon={globeIcon}
                title={t('government.uk.whyFolio.items.global.title')}
                description={t('government.uk.whyFolio.items.global.description')}
              />
              <WhyFolioBlock
                icon={starIcon}
                title={t('government.uk.whyFolio.items.experience.title')}
                description={t('government.uk.whyFolio.items.experience.description')}
              />
              <WhyFolioBlock
                icon={sparklesIcon}
                title={t('government.uk.whyFolio.items.ai.title')}
                description={t('government.uk.whyFolio.items.ai.description')}
              />
              <WhyFolioBlock
                icon={lockKeyholeIcon}
                title={t('government.uk.whyFolio.items.private.title')}
                description={t('government.uk.whyFolio.items.private.description')}
              />
              <WhyFolioBlock
                icon={zapIcon}
                title={t('government.uk.whyFolio.items.frictionless.title')}
                description={t('government.uk.whyFolio.items.frictionless.description')}
              />
              <WhyFolioBlock
                icon={landmarkIcon}
                title={t('government.uk.whyFolio.items.sovereign.title')}
                description={t('government.uk.whyFolio.items.sovereign.description')}
              />
              <WhyFolioBlock
                icon={refreshCcwIcon}
                title={t('government.uk.whyFolio.items.lowMaintenance.title')}
                description={t('government.uk.whyFolio.items.lowMaintenance.description')}
              />
            </div>
          </div>
        </section>

        {/* SGO Capabilities Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full bg-[#f5f5f5]">
          <div className="flex flex-col gap-12 md:gap-16 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('government.uk.sgoCapabilities.title')}
              description={t('government.uk.sgoCapabilities.description')}
              align="center"
              maxWidth="576px"
            />
            <div className="flex flex-col items-start w-full">
              {sgoCapabilities.map((capability) => (
                <SgoCapabilityItem
                  key={capability.id}
                  title={capability.title}
                  description={capability.description}
                  isOpen={activeSgoCapabilityId === capability.id}
                  onClick={() => setActiveSgoCapabilityId(activeSgoCapabilityId === capability.id ? null : capability.id)}
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
                  {t('government.uk.cta.title')}
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  {t('government.uk.cta.description')}
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button
                  onClick={() => {
                    window.location.href = 'mailto:contact@folio.id'
                  }}
                  variant="primary"
                >
                  {t('government.uk.cta.button')}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('government.uk.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('government.uk.cta.description')}
              </p>
            </div>
            <Button
              onClick={() => {
                window.location.href = 'mailto:contact@folio.id'
              }}
              variant="primary"
              fullWidth
            >
              {t('government.uk.cta.button')}
            </Button>
          </div>
        </section>
      </main>
      {/* Footer */}
      <FooterSection />
    </div>
  )
}
