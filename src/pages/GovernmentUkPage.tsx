import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, FeatureBlock, HeroTagline } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToTop } from '../utils/scrollToTop'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import landmarkIcon from '../assets/icons/Landmark.svg'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function GovernmentUkPage() {
  const { t } = useTranslation('government')
  const navigate = useNavigate()
  const { getLocalizedPath, currentLang } = useLocalizedPath()
  
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
              <HeroTagline icon={landmarkIcon}>{t('government.uk.hero.tagline')}</HeroTagline>
              <h1 className="font-bold leading-[48px] md:leading-[56px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
                {t('government.uk.hero.title')}
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base md:text-lg w-full">
                {t('government.uk.hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center justify-center relative">
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
                variant="primary"
              >
                {t('government.uk.cta.button')}
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
                {t('government.uk.cta.playgroundButton')}
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits for Government Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-12 md:gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('government.uk.govBenefits.title')}
                description={t('government.uk.govBenefits.description')}
                align="center"
                maxWidth="576px"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-11 md:gap-6 items-start relative shrink-0 w-full">
                <FeatureBlock
                  icon="building"
                  title={t('government.uk.govBenefits.items.services.title')}
                  description={t('government.uk.govBenefits.items.services.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="bar-chart"
                  title={t('government.uk.govBenefits.items.gdp.title')}
                  description={t('government.uk.govBenefits.items.gdp.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="hand-coins"
                  title={t('government.uk.govBenefits.items.revenue.title')}
                  description={t('government.uk.govBenefits.items.revenue.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="shield-check"
                  title={t('government.uk.govBenefits.items.security.title')}
                  description={t('government.uk.govBenefits.items.security.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="heart-handshake"
                  title={t('government.uk.govBenefits.items.trust.title')}
                  description={t('government.uk.govBenefits.items.trust.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="sparkles"
                  title={t('government.uk.govBenefits.items.ai.title')}
                  description={t('government.uk.govBenefits.items.ai.description')}
                  align="left"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Citizens Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 md:gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('government.uk.citizenBenefits.title')}
                description={t('government.uk.citizenBenefits.description')}
                align="center"
                maxWidth="576px"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-11 md:gap-6 items-start relative shrink-0 w-full">
                <FeatureBlock
                  icon="zap"
                  title={t('government.uk.citizenBenefits.items.convenience.title')}
                  description={t('government.uk.citizenBenefits.items.convenience.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="lock-keyhole"
                  title={t('government.uk.citizenBenefits.items.privacy.title')}
                  description={t('government.uk.citizenBenefits.items.privacy.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="user-check"
                  title={t('government.uk.citizenBenefits.items.control.title')}
                  description={t('government.uk.citizenBenefits.items.control.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="credit-card"
                  title={t('government.uk.citizenBenefits.items.transactions.title')}
                  description={t('government.uk.citizenBenefits.items.transactions.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="fingerprint"
                  title={t('government.uk.citizenBenefits.items.kyc.title')}
                  description={t('government.uk.citizenBenefits.items.kyc.description')}
                  align="left"
                />
                <FeatureBlock
                  icon="shield-check"
                  title={t('government.uk.citizenBenefits.items.fraud.title')}
                  description={t('government.uk.citizenBenefits.items.fraud.description')}
                  align="left"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Folio Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
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
                  variant="secondary"
                >
                  {t('government.uk.cta.button')}
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
                  {t('government.uk.cta.playgroundButton')}
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
            <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
                variant="secondary"
                fullWidth
              >
                {t('government.uk.cta.button')}
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
                {t('government.uk.cta.playgroundButton')}
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
