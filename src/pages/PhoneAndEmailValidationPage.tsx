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
import shieldHalfIcon from '../assets/icons/ShieldHalf.svg'
import circleCheckBigIcon from '../assets/icons/CircleCheckBig.svg'
import circleArrowUpIcon from '../assets/icons/CircleArrowUp.svg'
import globeIcon from '../assets/icons/Globe.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import mailCheckIcon from '../assets/icons/MailCheck.svg'
import triangleAlertIcon from '../assets/icons/TriangleAlert.svg'
import passcodeLockIcon from '../assets/icons/PasscodeLock.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import searchCheckIcon from '../assets/icons/SearchCheck.svg'
import messageSquareMoreIcon from '../assets/icons/MessageSquareMore.svg'

// Images
import phoneEmailHero from '../assets/images/phone-email-validation-hero.png'
import phoneEmailHowItWorks1 from '../assets/images/phone-email-validation-how-it-works-1.png'
import phoneEmailHowItWorks2 from '../assets/images/phone-email-validation-how-it-works-2.png'
import phoneEmailHowItWorks3 from '../assets/images/phone-email-validation-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// How it works images config
const HOW_IT_WORKS_IMAGES = {
  collectDetails: phoneEmailHowItWorks1,
  sendCode: phoneEmailHowItWorks2,
  confirmOwnership: phoneEmailHowItWorks3,
}

// Method icons config
const METHOD_ICONS = {
  phone2fa: smartphoneIcon,
  phoneOwnership: globeIcon,
  email2fa: mailCheckIcon,
  riskAssessment: triangleAlertIcon,
}

// Risk signal icons config
const RISK_SIGNAL_ICONS = {
  twoFactor: passcodeLockIcon,
  accountTakeover: shieldCheckIcon,
  riskAssessment: searchCheckIcon,
}

export default function PhoneAndEmailValidationPage() {
  const { t } = useTranslation('platform')
  const { currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/platform/phone-and-email-validation`

  usePageTitle({
    title: t('phoneAndEmailValidation.meta.title'),
    description: t('phoneAndEmailValidation.meta.description'),
    ogTitle: t('phoneAndEmailValidation.meta.title'),
    ogDescription: t('phoneAndEmailValidation.meta.description'),
    ogImage: getOgImageUrl('phone-email-validation-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  // Generate how it works items from translations
  const howItWorksItems: AccordionItemData[] = useMemo(() => 
    (['collectDetails', 'sendCode', 'confirmOwnership'] as const).map(id => ({
      id,
      title: t(`phoneAndEmailValidation.howItWorks.${id}.title`),
      description: t(`phoneAndEmailValidation.howItWorks.${id}.description`),
      desktopImage: HOW_IT_WORKS_IMAGES[id],
    })),
  [t])

  // Generate verification methods from translations
  const verificationMethods = useMemo(() =>
    (['phone2fa', 'phoneOwnership', 'email2fa', 'riskAssessment'] as const).map(id => ({
      icon: METHOD_ICONS[id],
      title: t(`phoneAndEmailValidation.methods.${id}.title`),
      description: t(`phoneAndEmailValidation.methods.${id}.description`),
    })),
  [t])

  // Generate risk signals from translations
  const riskSignals = useMemo(() =>
    (['twoFactor', 'accountTakeover', 'riskAssessment'] as const).map(id => ({
      icon: RISK_SIGNAL_ICONS[id],
      title: t(`phoneAndEmailValidation.riskSignals.${id}.title`),
      description: t(`phoneAndEmailValidation.riskSignals.${id}.description`),
    })),
  [t])

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('collectDetails')
  
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
                <HeroTagline icon={messageSquareMoreIcon}>{t('phoneAndEmailValidation.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('phoneAndEmailValidation.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('phoneAndEmailValidation.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button onClick={handleGetInTouch} variant="primary">
                  {t('common:buttons.getInTouch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={phoneEmailHero}
              alt="Phone and email validation preview"
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
                <HeroTagline icon={messageSquareMoreIcon}>{t('phoneAndEmailValidation.hero.tagline')}</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('phoneAndEmailValidation.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('phoneAndEmailValidation.hero.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  {t('common:buttons.getInTouch')}
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={phoneEmailHero}
              alt="Phone and email validation preview"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* Why verify phone and email Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('phoneAndEmailValidation.why.title')}
                maxWidth="576px"
              />
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title={t('phoneAndEmailValidation.why.secure.title')}
                  description={t('phoneAndEmailValidation.why.secure.description')}
                />
                <FeatureHighlight
                  icon={circleCheckBigIcon}
                  title={t('phoneAndEmailValidation.why.easy.title')}
                  description={t('phoneAndEmailValidation.why.easy.description')}
                />
                <FeatureHighlight
                  icon={circleArrowUpIcon}
                  title={t('phoneAndEmailValidation.why.completion.title')}
                  description={t('phoneAndEmailValidation.why.completion.description')}
                />
              </div>
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-11 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title={t('phoneAndEmailValidation.why.secure.title')}
                  description={t('phoneAndEmailValidation.why.secure.description')}
                />
                <FeatureHighlight
                  icon={circleCheckBigIcon}
                  title={t('phoneAndEmailValidation.why.easy.title')}
                  description={t('phoneAndEmailValidation.why.easy.description')}
                />
                <FeatureHighlight
                  icon={circleArrowUpIcon}
                  title={t('phoneAndEmailValidation.why.completion.title')}
                  description={t('phoneAndEmailValidation.why.completion.description')}
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
                title={t('phoneAndEmailValidation.howItWorks.title')}
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="collectDetails"
                onItemChange={setActiveHowItWorksId}
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('phoneAndEmailValidation.howItWorks.title')}
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={howItWorksItems}
              defaultOpenId="collectDetails"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Explore verification methods Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('phoneAndEmailValidation.methods.title')}
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {verificationMethods.map((item, index) => (
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

        {/* Prevent fraud with additional risk signals Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title={t('phoneAndEmailValidation.riskSignals.title')}
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {riskSignals.map((item, index) => (
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
                  {t('phoneAndEmailValidation.cta.title')}
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  {t('phoneAndEmailValidation.cta.description')}
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
                {t('phoneAndEmailValidation.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('phoneAndEmailValidation.cta.description')}
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
      <ExploreMoreSection currentPath="/platform/phone-and-email-validation" />
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
