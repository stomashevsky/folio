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
import giftCardsHero from '../assets/images/gift-cards-hero.png'
import giftIcon from '../assets/icons/Gift.svg'
import shoppingBagIcon from '../assets/icons/ShoppingBag.svg'
import storeIcon from '../assets/icons/Store.svg'
import utensilsCrossedIcon from '../assets/icons/UtensilsCrossed.svg'
import shoppingBasketIcon from '../assets/icons/ShoppingBasket.svg'
import clapperboardIcon from '../assets/icons/Clapperboard.svg'
import shareIcon from '../assets/icons/Share.svg'
import wifiOffIcon from '../assets/icons/WifiOff.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import scanTextIcon from '../assets/icons/ScanText.svg'
import tagIcon from '../assets/icons/Tag.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

function GiftCardAppPage() {
  const { t } = useTranslation('pages')
  const navigate = useNavigate()
  const { getLocalizedPath, currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/gift-card-app`
  
  usePageTitle({
    title: t('giftCardApp.meta.title'),
    description: t('giftCardApp.meta.description'),
    ogTitle: t('giftCardApp.meta.ogTitle'),
    ogDescription: t('giftCardApp.meta.ogDescription'),
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  const faqData = (t('giftCardApp.faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>)

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
                <HeroTagline icon={giftIcon}>{t('giftCardApp.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('giftCardApp.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('giftCardApp.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                  {t('giftCardApp.hero.getApp')}
                </Button>
                <Button variant="secondary" onClick={() => navigate(getLocalizedPath('/wallet'))}>
                  {t('giftCardApp.hero.learnMore')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={giftCardsHero}
              alt={t('giftCardApp.hero.imageAlt')}
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
                <HeroTagline icon={giftIcon}>{t('giftCardApp.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('giftCardApp.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('giftCardApp.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                  {t('giftCardApp.hero.getApp')}
                </Button>
                <Button variant="secondary" onClick={() => navigate(getLocalizedPath('/wallet'))}>
                  {t('giftCardApp.hero.learnMore')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={giftCardsHero}
              alt={t('giftCardApp.hero.imageAlt')}
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
              title={t('giftCardApp.features.title')}
              description={t('giftCardApp.features.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={shoppingBagIcon}
                title={t('giftCardApp.features.anyStore.title')}
                description={t('giftCardApp.features.anyStore.description')}
              />
              <ToolCard
                icon={scanTextIcon}
                title={t('giftCardApp.features.quickScan.title')}
                description={t('giftCardApp.features.quickScan.description')}
              />
              <ToolCard
                icon={tagIcon}
                title={t('giftCardApp.features.organized.title')}
                description={t('giftCardApp.features.organized.description')}
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title={t('giftCardApp.features.secure.title')}
                description={t('giftCardApp.features.secure.description')}
              />
            </div>
          </div>
        </section>

        {/* Card Types Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('giftCardApp.cardTypes.title')}
              description={t('giftCardApp.cardTypes.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={storeIcon}
                title={t('giftCardApp.cardTypes.retail.title')}
                description={t('giftCardApp.cardTypes.retail.description')}
              />
              <ToolCard
                icon={utensilsCrossedIcon}
                title={t('giftCardApp.cardTypes.restaurants.title')}
                description={t('giftCardApp.cardTypes.restaurants.description')}
              />
              <ToolCard
                icon={shoppingBasketIcon}
                title={t('giftCardApp.cardTypes.online.title')}
                description={t('giftCardApp.cardTypes.online.description')}
              />
              <ToolCard
                icon={clapperboardIcon}
                title={t('giftCardApp.cardTypes.entertainment.title')}
                description={t('giftCardApp.cardTypes.entertainment.description')}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('giftCardApp.howItWorks.title')}
              description={t('giftCardApp.howItWorks.description')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 items-start sm:items-stretch justify-center w-full max-w-[900px] min-w-0">
              <HowItWorksStep
                number="1"
                icon={scanTextIcon}
                title={t('giftCardApp.howItWorks.step1.title')}
                description={t('giftCardApp.howItWorks.step1.description')}
              />
              <HowItWorksStep
                number="2"
                icon={tagIcon}
                title={t('giftCardApp.howItWorks.step2.title')}
                description={t('giftCardApp.howItWorks.step2.description')}
              />
              <HowItWorksStep
                number="3"
                icon={smartphoneIcon}
                title={t('giftCardApp.howItWorks.step3.title')}
                description={t('giftCardApp.howItWorks.step3.description')}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('giftCardApp.benefits.title')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={smartphoneIcon}
                title={t('giftCardApp.benefits.oneApp.title')}
                description={t('giftCardApp.benefits.oneApp.description')}
              />
              <ToolCard
                icon={shieldCheckIcon}
                title={t('giftCardApp.benefits.privacy.title')}
                description={t('giftCardApp.benefits.privacy.description')}
              />
              <ToolCard
                icon={shareIcon}
                title={t('giftCardApp.benefits.familyShare.title')}
                description={t('giftCardApp.benefits.familyShare.description')}
              />
              <ToolCard
                icon={wifiOffIcon}
                title={t('giftCardApp.benefits.offline.title')}
                description={t('giftCardApp.benefits.offline.description')}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqData={faqData}
          title={t('giftCardApp.faq.title')}
          description={t('giftCardApp.faq.description')}
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

export default memo(GiftCardAppPage)