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
import cardScannerAppHero from '../assets/images/card-scanner-app-hero.png'
import scanTextIcon from '../assets/icons/ScanText.svg'
import cameraIcon from '../assets/icons/Camera.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import fileSpreadsheetIcon from '../assets/icons/FileSpreadsheet.svg'
import creditCardIcon from '../assets/icons/CreditCard.svg'
import idCardIcon from '../assets/icons/IdCard.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

function CardScannerAppPage() {
  const { t } = useTranslation('pages')
  const navigate = useNavigate()
  const { getLocalizedPath, currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/card-scanner-app`
  
  usePageTitle({
    title: t('cardScannerApp.meta.title'),
    description: t('cardScannerApp.meta.description'),
    ogTitle: t('cardScannerApp.meta.ogTitle'),
    ogDescription: t('cardScannerApp.meta.ogDescription'),
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  const faqData = (t('cardScannerApp.faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>)

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
                <HeroTagline icon={scanTextIcon}>{t('cardScannerApp.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('cardScannerApp.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('cardScannerApp.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                  {t('cardScannerApp.hero.getApp')}
                </Button>
                <Button variant="secondary" onClick={() => navigate(getLocalizedPath('/wallet'))}>
                  {t('cardScannerApp.hero.learnMore')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={cardScannerAppHero}
              alt={t('cardScannerApp.hero.imageAlt')}
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
                <HeroTagline icon={scanTextIcon}>{t('cardScannerApp.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('cardScannerApp.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('cardScannerApp.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                  {t('cardScannerApp.hero.getApp')}
                </Button>
                <Button variant="secondary" onClick={() => navigate(getLocalizedPath('/wallet'))}>
                  {t('cardScannerApp.hero.learnMore')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={cardScannerAppHero}
              alt={t('cardScannerApp.hero.imageAlt')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* What You Can Scan Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('cardScannerApp.whatYouCanScan.title')}
              description={t('cardScannerApp.whatYouCanScan.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={idCardIcon}
                title={t('cardScannerApp.whatYouCanScan.idCards.title')}
                description={t('cardScannerApp.whatYouCanScan.idCards.description')}
              />
              <ToolCard
                icon={creditCardIcon}
                title={t('cardScannerApp.whatYouCanScan.paymentCards.title')}
                description={t('cardScannerApp.whatYouCanScan.paymentCards.description')}
              />
              <ToolCard
                icon={fileSpreadsheetIcon}
                title={t('cardScannerApp.whatYouCanScan.tickets.title')}
                description={t('cardScannerApp.whatYouCanScan.tickets.description')}
              />
              <ToolCard
                icon={scanTextIcon}
                title={t('cardScannerApp.whatYouCanScan.anyDocument.title')}
                description={t('cardScannerApp.whatYouCanScan.anyDocument.description')}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('cardScannerApp.features.title')}
              description={t('cardScannerApp.features.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={scanTextIcon}
                title={t('cardScannerApp.features.ocr.title')}
                description={t('cardScannerApp.features.ocr.description')}
              />
              <ToolCard
                icon={cameraIcon}
                title={t('cardScannerApp.features.highQuality.title')}
                description={t('cardScannerApp.features.highQuality.description')}
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title={t('cardScannerApp.features.secureStorage.title')}
                description={t('cardScannerApp.features.secureStorage.description')}
              />
              <ToolCard
                icon={smartphoneIcon}
                title={t('cardScannerApp.features.crossDevice.title')}
                description={t('cardScannerApp.features.crossDevice.description')}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('cardScannerApp.howItWorks.title')}
              description={t('cardScannerApp.howItWorks.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 items-start sm:items-stretch justify-center w-full max-w-[900px] min-w-0">
              <HowItWorksStep
                number="1"
                icon={cameraIcon}
                title={t('cardScannerApp.howItWorks.step1.title')}
                description={t('cardScannerApp.howItWorks.step1.description')}
              />
              <HowItWorksStep
                number="2"
                icon={scanTextIcon}
                title={t('cardScannerApp.howItWorks.step2.title')}
                description={t('cardScannerApp.howItWorks.step2.description')}
              />
              <HowItWorksStep
                number="3"
                icon={shieldCheckIcon}
                title={t('cardScannerApp.howItWorks.step3.title')}
                description={t('cardScannerApp.howItWorks.step3.description')}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqData={faqData}
          title={t('cardScannerApp.faq.title')}
          description={t('cardScannerApp.faq.description')}
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

export default memo(CardScannerAppPage)
