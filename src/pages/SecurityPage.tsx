import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button, HeroTagline, CertificationCard } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToSection } from '../utils/scrollToSection'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import keyRoundIcon from '../assets/icons/KeyRound.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import fingerprintIcon from '../assets/icons/Fingerprint.svg'
import iso27001Logo from '../assets/icons/Iso27001.svg'
import soc2Logo from '../assets/icons/Soc2.svg'
import gdprLogo from '../assets/icons/Gdpr.svg'

// Background style matching other sections
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

function SecurityPage() {
  const { t } = useTranslation('pages')
  const navigate = useNavigate()
  const location = useLocation()
  const { getLocalizedPath } = useLocalizedPath()
  
  usePageTitle({
    title: t('security.meta.title'),
    description: t('security.meta.description'),
    ogTitle: t('security.meta.ogTitle'),
    ogDescription: t('security.meta.ogDescription'),
    ogImage: getOgImageUrl('security-hero.png'),
    ogUrl: 'https://folio.id/security'
  })

  const handleGetApp = () => {
    const isWalletPage = location.pathname.endsWith('/wallet')
    if (isWalletPage) {
      scrollToSection('get-the-app')
    } else {
      navigate(getLocalizedPath('/wallet'))
      setTimeout(() => {
        scrollToSection('get-the-app')
      }, 100)
    }
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <HeroTagline icon={shieldCheckIcon}>{t('security.hero.tagline')}</HeroTagline>
            <h1 className="font-bold leading-9 md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
              {t('security.hero.title')}
            </h1>
            <p className="font-normal leading-6 text-[#737373] text-base w-full">
              {t('security.hero.description')}
            </p>
          </div>
        </section>

        {/* Key Security Features */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('security.keyFeatures.title')}
              description={t('security.keyFeatures.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={lockKeyholeIcon}
                title={t('security.keyFeatures.e2e.title')}
                description={t('security.keyFeatures.e2e.description')}
              />
              <ToolCard
                icon={keyRoundIcon}
                title={t('security.keyFeatures.zeroKnowledge.title')}
                description={t('security.keyFeatures.zeroKnowledge.description')}
              />
              <ToolCard
                icon={smartphoneIcon}
                title={t('security.keyFeatures.localFirst.title')}
                description={t('security.keyFeatures.localFirst.description')}
              />
              <ToolCard
                icon={shieldCheckIcon}
                title={t('security.keyFeatures.secureSync.title')}
                description={t('security.keyFeatures.secureSync.description')}
              />
            </div>
          </div>
        </section>

        {/* Detailed Security Explanation */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 md:gap-16 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full">
            <SecurityBlock
              icon={lockKeyholeIcon}
              title={t('security.detailed.encryption.title')}
              description={t('security.detailed.encryption.description')}
            />
            <SecurityBlock
              icon={keyRoundIcon}
              title={t('security.detailed.noAccess.title')}
              description={t('security.detailed.noAccess.description')}
            />
            <SecurityBlock
              icon={smartphoneIcon}
              title={t('security.detailed.yourDevice.title')}
              description={t('security.detailed.yourDevice.description')}
            />
            <SecurityBlock
              icon={fingerprintIcon}
              title={t('security.detailed.biometric.title')}
              description={t('security.detailed.biometric.description')}
            />
          </div>
        </section>

        {/* Compliance Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('security.compliance.title')}
              description={t('security.compliance.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full max-w-[900px] min-w-0">
              <CertificationCard
                logo={iso27001Logo}
                title={t('security.compliance.iso27001.title')}
                description={t('security.compliance.iso27001.description')}
              />
              <CertificationCard
                logo={soc2Logo}
                title={t('security.compliance.soc2.title')}
                description={t('security.compliance.soc2.description')}
              />
              <CertificationCard
                logo={gdprLogo}
                title={t('security.compliance.gdpr.title')}
                description={t('security.compliance.gdpr.description')}
              />
            </div>
          </div>
        </section>

        {/* Recovery Code Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <SectionHeader
              title={t('security.recoveryCode.title')}
              description={t('security.recoveryCode.description')}
              maxWidth="768px"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-8 items-center max-w-[576px] px-6 py-0 relative shrink-0 w-full text-center">
            <SectionHeader
              title={t('security.cta.title')}
              description={t('security.cta.description')}
              maxWidth="576px"
            />
            <Button variant="primary" onClick={handleGetApp}>
              {t('security.cta.button')}
            </Button>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

function SecurityBlock({ icon, title, description }: { icon: string; title: string; description: string }) {
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

export default memo(SecurityPage)
