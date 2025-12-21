import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button, HeroTagline } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import FAQSection from '../components/sections/FAQSection'
import GetTheAppSection from '../components/sections/GetTheAppSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToSection } from '../utils/scrollToSection'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import idWalletAppHero from '../assets/images/id-wallet-app-hero.png'
import idCardIcon from '../assets/icons/IdCard.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import scanTextIcon from '../assets/icons/ScanText.svg'
import imagesIcon from '../assets/icons/Images.svg'
import refreshCwIcon from '../assets/icons/RefreshCw.svg'
import userRoundCheckIcon from '../assets/icons/UserRoundCheck.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

function IdWalletAppPage() {
  const { t } = useTranslation('pages')
  const navigate = useNavigate()
  const { getLocalizedPath } = useLocalizedPath()
  
  usePageTitle({
    title: t('idWalletApp.meta.title'),
    description: t('idWalletApp.meta.description'),
    ogTitle: t('idWalletApp.meta.ogTitle'),
    ogDescription: t('idWalletApp.meta.ogDescription'),
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/id-wallet-app/'
  })

  const faqData = (t('idWalletApp.faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>)

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
                <HeroTagline icon={idCardIcon}>{t('idWalletApp.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('idWalletApp.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('idWalletApp.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                  {t('idWalletApp.hero.getApp')}
                </Button>
                <Button variant="secondary" onClick={() => navigate(getLocalizedPath('/wallet'))}>
                  {t('idWalletApp.hero.learnMore')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={idWalletAppHero}
              alt={t('idWalletApp.hero.imageAlt')}
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
                <HeroTagline icon={idCardIcon}>{t('idWalletApp.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('idWalletApp.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('idWalletApp.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                  {t('idWalletApp.hero.getApp')}
                </Button>
                <Button variant="secondary" onClick={() => navigate(getLocalizedPath('/wallet'))}>
                  {t('idWalletApp.hero.learnMore')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={idWalletAppHero}
              alt={t('idWalletApp.hero.imageAlt')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('idWalletApp.features.title')}
              description={t('idWalletApp.features.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={idCardIcon}
                title={t('idWalletApp.features.allIds.title')}
                description={t('idWalletApp.features.allIds.description')}
              />
              <ToolCard
                icon={scanTextIcon}
                title={t('idWalletApp.features.smartExtraction.title')}
                description={t('idWalletApp.features.smartExtraction.description')}
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title={t('idWalletApp.features.encrypted.title')}
                description={t('idWalletApp.features.encrypted.description')}
              />
              <ToolCard
                icon={refreshCwIcon}
                title={t('idWalletApp.features.expiryReminders.title')}
                description={t('idWalletApp.features.expiryReminders.description')}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('idWalletApp.howItWorks.title')}
              description={t('idWalletApp.howItWorks.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 items-start sm:items-stretch justify-center w-full max-w-[900px] min-w-0">
              <HowItWorksStep
                number="1"
                icon={scanTextIcon}
                title={t('idWalletApp.howItWorks.step1.title')}
                description={t('idWalletApp.howItWorks.step1.description')}
              />
              <HowItWorksStep
                number="2"
                icon={idCardIcon}
                title={t('idWalletApp.howItWorks.step2.title')}
                description={t('idWalletApp.howItWorks.step2.description')}
              />
              <HowItWorksStep
                number="3"
                icon={smartphoneIcon}
                title={t('idWalletApp.howItWorks.step3.title')}
                description={t('idWalletApp.howItWorks.step3.description')}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('idWalletApp.benefits.title')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={shieldCheckIcon}
                title={t('idWalletApp.benefits.bankSecurity.title')}
                description={t('idWalletApp.benefits.bankSecurity.description')}
              />
              <ToolCard
                icon={imagesIcon}
                title={t('idWalletApp.benefits.originalPhotos.title')}
                description={t('idWalletApp.benefits.originalPhotos.description')}
              />
              <ToolCard
                icon={userRoundCheckIcon}
                title={t('idWalletApp.benefits.familySharing.title')}
                description={t('idWalletApp.benefits.familySharing.description')}
              />
              <ToolCard
                icon={smartphoneIcon}
                title={t('idWalletApp.benefits.worksOffline.title')}
                description={t('idWalletApp.benefits.worksOffline.description')}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqData={faqData}
          title={t('idWalletApp.faq.title')}
          description={t('idWalletApp.faq.description')}
        />

        {/* Get the App Section */}
        <GetTheAppSection />
      </main>
      <FooterSection />
    </div>
  )
}

function HowItWorksStep({ number, icon, title, description }: { number: string; icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <div className="relative">
        <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-xl shrink-0 size-14">
          <img src={icon} alt="" aria-hidden="true" className="w-6 h-6" />
        </div>
        <div className="absolute -top-2 -right-2 bg-[#0a0a0a] text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-base text-[#0a0a0a]">{title}</h3>
        <p className="font-normal text-sm text-[#737373] leading-5">{description}</p>
      </div>
    </div>
  )
}

export default memo(IdWalletAppPage)
