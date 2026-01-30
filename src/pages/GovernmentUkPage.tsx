import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, FeatureBlock, ToolCard } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

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
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
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

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-center relative shrink-0 w-full max-w-[768px] text-center">
              <h1 className="font-bold leading-[48px] md:leading-[56px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
                {t('government.uk.hero.title')}
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base md:text-lg w-full">
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

        {/* Why Folio Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 md:gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('government.uk.whyFolio.title')}
                description={t('government.uk.whyFolio.description')}
                align="center"
                maxWidth="576px"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-11 md:gap-6 items-start relative shrink-0 w-full">
                <FeatureBlock
                  icon="globe"
                  title={t('government.uk.whyFolio.items.global.title')}
                  description={t('government.uk.whyFolio.items.global.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="star"
                  title={t('government.uk.whyFolio.items.experience.title')}
                  description={t('government.uk.whyFolio.items.experience.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="sparkles"
                  title={t('government.uk.whyFolio.items.ai.title')}
                  description={t('government.uk.whyFolio.items.ai.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="lock-keyhole"
                  title={t('government.uk.whyFolio.items.private.title')}
                  description={t('government.uk.whyFolio.items.private.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="zap"
                  title={t('government.uk.whyFolio.items.frictionless.title')}
                  description={t('government.uk.whyFolio.items.frictionless.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="landmark"
                  title={t('government.uk.whyFolio.items.sovereign.title')}
                  description={t('government.uk.whyFolio.items.sovereign.description')}
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
