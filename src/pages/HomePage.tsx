import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, PhotoCard, Button, HeroTagline, HorizontalScrollCarousel } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import VideoWithPlaceholder from '../components/ui/VideoWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import GetTheAppSection from '../components/sections/GetTheAppSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToTop } from '../utils/scrollToTop'
import { PLATFORM_ITEMS } from '../constants/platformItems'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

// Images
import folioHeroPhones from '../assets/images/folio-hero-phones.png'
import governmentSolutionsHero from '../assets/images/government-solutions-hero.png'
import governmentTestimonialAvatar from '../assets/images/government-testimonial-avatar.png'
import ageVerificationHero from '../assets/images/age-verification-hero.png'
import clientOnboardingHero from '../assets/images/client-onboarding-hero.png'
import ticketIssuanceHero from '../assets/images/ticket-issuance-hero.png'

// Logo icon for hero tagline
import logoIcon from '../assets/icons/LogoIcon.svg'

// Video
import livenessCheckHero from '../assets/images/liveness-check-hero.mp4'
import folioAppHeroVideo from '../assets/images/folio-app-hero.mp4'

// Icons
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import landmarkIcon from '../assets/icons/Landmark.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import keyRoundIcon from '../assets/icons/KeyRound.svg'
import fingerprintIcon from '../assets/icons/Fingerprint.svg'
import lightbulbIcon from '../assets/icons/Lightbulb.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const SOLUTIONS_CONFIG = [
  { image: ageVerificationHero, titleKey: 'solutions.ageCompliance.title', descriptionKey: 'solutions.ageCompliance.description', to: '/solutions/age-compliance' },
  { image: clientOnboardingHero, titleKey: 'solutions.clientOnboarding.title', descriptionKey: 'solutions.clientOnboarding.description', to: '/solutions/client-onboarding' },
  { image: ticketIssuanceHero, titleKey: 'solutions.digitalTicketing.title', descriptionKey: 'solutions.digitalTicketing.description', to: '/solutions/digital-ticketing' },
]

const SECURITY_CONFIG = [
  { icon: lockKeyholeIcon, titleKey: 'security.endToEndEncryption.title', descriptionKey: 'security.endToEndEncryption.description' },
  { icon: keyRoundIcon, titleKey: 'security.zeroKnowledge.title', descriptionKey: 'security.zeroKnowledge.description' },
  { icon: fingerprintIcon, titleKey: 'security.biometric.title', descriptionKey: 'security.biometric.description' },
]

function HomePage() {
  const { t } = useTranslation('home')
  const { t: tCommon } = useTranslation('common')
  const navigate = useNavigate()
  const { getLocalizedPath } = useLocalizedPath()

  usePageTitle({
    title: t('meta.title'),
    description: t('meta.description'),
    ogTitle: t('meta.title'),
    ogDescription: t('meta.description'),
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/'
  })

  const handleNavigate = (to: string) => {
    navigate(getLocalizedPath(to))
    setTimeout(() => scrollToTop(), 100)
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-12 md:gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            {/* Text Content */}
            <div className="flex flex-col gap-4 md:gap-8 items-center max-w-[672px] w-full">
              {/* Tagline */}
              <div className="flex items-center gap-1.5">
                <img 
                  src={logoIcon} 
                  alt="" 
                  aria-hidden="true" 
                  className="w-5 h-5"
                />
                <span className="font-medium leading-5 text-sm text-[#737373]">
                  {t('hero.tagline')}
                </span>
              </div>
              {/* Title & Description */}
              <div className="flex flex-col gap-4 md:gap-6 items-center text-center w-full">
                <h1 className="font-bold leading-9 md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('hero.title')}
                </h1>
                <p className="font-normal leading-7 text-[#737373] text-lg w-full">
                  {t('hero.description')}
                </p>
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative w-full aspect-square">
              <img 
                src={folioHeroPhones} 
                alt="Folio app showing digital identity, ID card details, and payment cards on three phone screens"
                className="absolute inset-0 max-w-none object-center object-cover w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Wallet Section (B2C) */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <HeroTagline icon={smartphoneIcon}>{t('wallet.tagline')}</HeroTagline>
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  {t('wallet.title')}
                </h2>
                <p className="font-normal leading-6 text-[#737373] text-base w-full mt-2">
                  {t('wallet.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary" onClick={() => handleNavigate('/wallet')}>
                  {tCommon('buttons.learnMore')}
                </Button>
              </div>
            </div>
            <VideoWithPlaceholder
              src={folioAppHeroVideo}
              autoPlay
              muted
              loop
              playsInline
              lazy={false}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <HeroTagline icon={smartphoneIcon}>{t('wallet.tagline')}</HeroTagline>
              <h2 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('wallet.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('wallet.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" onClick={() => handleNavigate('/wallet')}>
                {tCommon('buttons.learnMore')}
              </Button>
            </div>
            <VideoWithPlaceholder
              src={folioAppHeroVideo}
              autoPlay
              muted
              loop
              playsInline
              lazy={false}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
            />
          </div>
        </section>

        {/* Platform Section (B2B) */}
        <section id="platform" className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <VideoWithPlaceholder
              src={livenessCheckHero}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
            />
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <HeroTagline icon={shieldCheckIcon}>{t('platform.tagline')}</HeroTagline>
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  {t('platform.title')}
                </h2>
                <p className="font-normal leading-6 text-[#737373] text-base w-full mt-2">
                  {t('platform.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary" href="mailto:contact@folio.id">
                  {tCommon('buttons.getInTouch')}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <HeroTagline icon={shieldCheckIcon}>{t('platform.tagline')}</HeroTagline>
              <h2 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('platform.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('platform.description')}
              </p>
            </div>
            <VideoWithPlaceholder
              src={livenessCheckHero}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
            />
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" href="mailto:contact@folio.id">
                {tCommon('buttons.getInTouch')}
              </Button>
            </div>
          </div>

        </section>

        {/* Products Carousel Section */}
        <section className="bg-white flex flex-col items-center overflow-hidden py-16 md:py-24 relative shrink-0 w-full">
          <HorizontalScrollCarousel
            title={t('platform.carouselTitle')}
          >
            {PLATFORM_ITEMS.map((item) => (
              <PhotoCard
                key={item.path}
                image={item.image}
                title={tCommon(item.labelKey)}
                description={tCommon(item.descriptionKey)}
                to={item.path}
                carouselMode
              />
            ))}
          </HorizontalScrollCarousel>
        </section>

        {/* Solutions Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-center w-full">
              <HeroTagline icon={lightbulbIcon}>{t('solutions.tagline')}</HeroTagline>
              <SectionHeader
                title={t('solutions.title')}
                description={t('solutions.description')}
                maxWidth="576px"
              />
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              {SOLUTIONS_CONFIG.map((solution) => (
                <PhotoCard
                  key={solution.to}
                  image={solution.image}
                  title={t(solution.titleKey)}
                  description={t(solution.descriptionKey)}
                  to={solution.to}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Government Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <HeroTagline icon={landmarkIcon}>{t('government.tagline')}</HeroTagline>
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  {t('government.title')}
                </h2>
                <p className="font-normal leading-6 text-[#737373] text-base w-full mt-2">
                  {t('government.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary" onClick={() => handleNavigate('/government/playground')}>
                  {tCommon('buttons.explorePlayground')}
                </Button>
                <Button variant="outline" onClick={() => handleNavigate('/government')}>
                  {tCommon('buttons.learnMore')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={governmentSolutionsHero}
              alt="Government digital credentials including voter card and national ID on mobile phone"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              loading="lazy"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <HeroTagline icon={landmarkIcon}>{t('government.tagline')}</HeroTagline>
              <h2 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('government.title')}
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('government.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" onClick={() => handleNavigate('/government/playground')}>
                {tCommon('buttons.explorePlayground')}
              </Button>
              <Button variant="outline" onClick={() => handleNavigate('/government')}>
                {tCommon('buttons.learnMore')}
              </Button>
            </div>
            <ImageWithPlaceholder
              src={governmentSolutionsHero}
              alt="Government digital credentials including voter card and national ID on mobile phone"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="flex flex-col items-center px-0 py-16 md:py-24 relative w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-8 items-center max-w-[672px] px-6 w-full">
            <p className="font-medium leading-7 md:leading-7 text-lg md:text-xl text-[#0a0a0a] text-center">
              {t('testimonial.quote')}
            </p>
            <div className="flex flex-col gap-4 items-center">
              <div className="relative rounded-full shrink-0 w-12 h-12 md:w-14 md:h-14">
                <img
                  src={governmentTestimonialAvatar}
                  alt={t('testimonial.name')}
                  className="absolute inset-0 object-cover rounded-full w-full h-full"
                  loading="lazy"
                  width={56}
                  height={56}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-0.5 md:gap-2 items-center text-base text-center">
                <span className="font-medium text-[#0a0a0a]">{t('testimonial.name')}</span>
                <span className="hidden md:inline text-[#737373]">·</span>
                <span className="font-normal text-[#737373]">{t('testimonial.role')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('security.title')}
              description={t('security.description')}
              maxWidth="576px"
            />

            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              {SECURITY_CONFIG.map((feature) => (
                <ToolCard
                  key={feature.titleKey}
                  icon={feature.icon}
                  title={t(feature.titleKey)}
                  description={t(feature.descriptionKey)}
                />
              ))}
            </div>

            <div className="flex justify-center w-full">
              <Button variant="secondary" onClick={() => handleNavigate('/security')}>
                {tCommon('buttons.learnMore')}
              </Button>
            </div>
          </div>
        </section>

        {/* Get the App CTA */}
        <GetTheAppSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default memo(HomePage)
