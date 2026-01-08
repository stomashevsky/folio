import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import checkIcon from '../assets/icons/Check.svg'
import calendarFoldIcon from '../assets/icons/CalendarFold.svg'
import codeXmlIcon from '../assets/icons/CodeXml.svg'
import globeIcon from '../assets/icons/Globe.svg'
import sendIcon from '../assets/icons/Send.svg'
import ticketIcon from '../assets/icons/Ticket.svg'
import routeIcon from '../assets/icons/Route.svg'
import cameraIcon from '../assets/icons/Camera.svg'

import ticketIssuanceHero from '../assets/images/ticket-issuance-hero.png'
import ticketIssuanceFeatures from '../assets/images/ticket-issuance-features.png'
import ticketIssuanceOperators from '../assets/images/ticket-issuance-operators.png'

// Background style using inline styles for complex multi-layer gradient
// This cannot be easily expressed in Tailwind CSS, so inline style is used
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function DigitalTicketingPage() {
  const { t } = useTranslation('solutions')
  const navigate = useNavigate()
  const { getLocalizedPath, currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/solutions/ticket-issuance`
  
  usePageTitle({
    title: t('ticketIssuance.meta.title'),
    description: t('ticketIssuance.meta.description'),
    ogTitle: t('ticketIssuance.meta.title'),
    ogDescription: t('ticketIssuance.meta.description'),
    ogImage: getOgImageUrl('ticket-issuance-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  const handleTryFolio = () => {
    navigate(getLocalizedPath('/'), { state: { scrollTo: 'get-the-app' } })
  }

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
              <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-line">
                {t('ticketIssuance.hero.title')}
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('ticketIssuance.hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative">
              <Button
                onClick={handleGetInTouch}
                variant="primary"
              >
                {t('ticketIssuance.cta.button')}
              </Button>
              <Button
                variant="secondary"
                onClick={handleTryFolio}
              >
                {t('ticketIssuance.cta.tryButton')}
              </Button>
            </div>
          </div>
          <ImageWithPlaceholder
            src={ticketIssuanceHero}
            alt={t('ticketIssuance.hero.tagline')}
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
              <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-line">
                {t('ticketIssuance.hero.title')}
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('ticketIssuance.hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0">
              <Button
                onClick={handleGetInTouch}
                variant="primary"
              >
                {t('ticketIssuance.cta.button')}
              </Button>
              <Button
                variant="secondary"
                onClick={handleTryFolio}
              >
                {t('ticketIssuance.cta.tryButton')}
              </Button>
            </div>
          </div>
          <ImageWithPlaceholder
            src={ticketIssuanceHero}
            alt={t('ticketIssuance.hero.tagline')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </section>

      {/* Stats Section - Built on a platform people trust */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('ticketIssuance.trust.title')}
              description={t('ticketIssuance.trust.description')}
              align="left"
              maxWidth="576px"
            />
            <div className="flex gap-8 items-start relative shrink-0 w-full">
              <StatItem
                value={t('ticketIssuance.trust.rating.value')}
                description={t('ticketIssuance.trust.rating.description')}
              />
              <StatItem
                value={t('ticketIssuance.trust.documents.value')}
                description={t('ticketIssuance.trust.documents.description')}
              />
              <StatItem
                value={t('ticketIssuance.trust.countries.value')}
                description={t('ticketIssuance.trust.countries.description')}
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('ticketIssuance.trust.title')}
              description={t('ticketIssuance.trust.description')}
              align="left"
            />
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <StatItem
                value={t('ticketIssuance.trust.rating.value')}
                description={t('ticketIssuance.trust.rating.description')}
              />
              <StatItem
                value={t('ticketIssuance.trust.documents.value')}
                description={t('ticketIssuance.trust.documents.description')}
              />
              <StatItem
                value={t('ticketIssuance.trust.countries.value')}
                description={t('ticketIssuance.trust.countries.description')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Issue tickets in a Folio ready format */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <ImageWithPlaceholder
            src={ticketIssuanceFeatures}
            alt={t('ticketIssuance.format.title')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
            loading="lazy"
          />
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title={t('ticketIssuance.format.title')}
              description={t('ticketIssuance.format.description')}
              align="left"
              maxWidth="100%"
            />
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FeatureListItem text={t('ticketIssuance.format.features.noFormats')} />
              <FeatureListItem text={t('ticketIssuance.format.features.fastDelivery')} />
              <FeatureListItem text={t('ticketIssuance.format.features.anySystem')} />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('ticketIssuance.format.title')}
              description={t('ticketIssuance.format.description')}
              align="left"
            />
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FeatureListItem text={t('ticketIssuance.format.features.noFormats')} />
              <FeatureListItem text={t('ticketIssuance.format.features.fastDelivery')} />
              <FeatureListItem text={t('ticketIssuance.format.features.anySystem')} />
            </div>
          </div>
          <ImageWithPlaceholder
            src={ticketIssuanceFeatures}
            alt={t('ticketIssuance.format.title')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Why Folio Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
            <SectionHeader
              title={t('ticketIssuance.whyFolio.title')}
              description={t('ticketIssuance.whyFolio.description')}
              maxWidth="576px"
            />
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={codeXmlIcon}
                title={t('ticketIssuance.whyFolio.noFormats.title')}
                description={t('ticketIssuance.whyFolio.noFormats.description')}
              />
              <ToolCard
                icon={sendIcon}
                title={t('ticketIssuance.whyFolio.workflow.title')}
                description={t('ticketIssuance.whyFolio.workflow.description')}
              />
              <ToolCard
                icon={calendarFoldIcon}
                title={t('ticketIssuance.whyFolio.onePlace.title')}
                description={t('ticketIssuance.whyFolio.onePlace.description')}
              />
              <ToolCard
                icon={globeIcon}
                title={t('ticketIssuance.whyFolio.everyone.title')}
                description={t('ticketIssuance.whyFolio.everyone.description')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Folio is for Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-12 items-start relative min-w-0">
            <SectionHeader
              title={t('ticketIssuance.operators.title')}
              description={t('ticketIssuance.operators.description')}
              align="left"
            />
            <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
              <OperatorListItem
                icon={ticketIcon}
                title={t('ticketIssuance.operators.events.title')}
                description={t('ticketIssuance.operators.events.description')}
              />
              <OperatorListItem
                icon={routeIcon}
                title={t('ticketIssuance.operators.transport.title')}
                description={t('ticketIssuance.operators.transport.description')}
              />
              <OperatorListItem
                icon={cameraIcon}
                title={t('ticketIssuance.operators.tours.title')}
                description={t('ticketIssuance.operators.tours.description')}
              />
            </div>
          </div>
          <ImageWithPlaceholder
            src={ticketIssuanceOperators}
            alt={t('ticketIssuance.operators.title')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
            loading="lazy"
          />
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-10 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('ticketIssuance.operators.title')}
              description={t('ticketIssuance.operators.description')}
              align="left"
            />
            <div className="flex flex-col gap-11 items-start relative shrink-0 w-full">
              <OperatorListItem
                icon={ticketIcon}
                title={t('ticketIssuance.operators.events.title')}
                description={t('ticketIssuance.operators.events.description')}
              />
              <OperatorListItem
                icon={routeIcon}
                title={t('ticketIssuance.operators.transport.title')}
                description={t('ticketIssuance.operators.transport.description')}
              />
              <OperatorListItem
                icon={cameraIcon}
                title={t('ticketIssuance.operators.tours.title')}
                description={t('ticketIssuance.operators.tours.description')}
              />
            </div>
          </div>
          <ImageWithPlaceholder
            src={ticketIssuanceOperators}
            alt={t('ticketIssuance.operators.title')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-0 md:pb-24 relative shrink-0 w-full bg-white">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center max-w-[1280px] px-6 relative shrink-0 w-full">
          <div className="flex gap-16 items-center p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
            <div className="flex flex-1 flex-col gap-4 items-start relative shrink-0 max-w-[576px] min-w-0">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                {t('ticketIssuance.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('ticketIssuance.cta.description')}
              </p>
            </div>
            <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
              <Button
                onClick={handleGetInTouch}
                variant="primary"
              >
                {t('ticketIssuance.cta.button')}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
              {t('ticketIssuance.cta.title')}
            </h2>
            <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
              {t('ticketIssuance.cta.description')}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center relative shrink-0">
            <Button
              onClick={handleGetInTouch}
              variant="primary"
            >
              {t('ticketIssuance.cta.button')}
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

function FeatureListItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start relative shrink-0 w-full">
      <div className="box-border flex gap-2 items-center pb-0 pt-0.5 px-0 relative shrink-0 w-5">
        <div className="aspect-[24/24] flex-1 min-h-0 min-w-0 overflow-clip relative shrink-0">
          <img 
            src={checkIcon} 
            alt="" 
            aria-hidden="true"
            className="block max-w-none w-full h-full"
          />
        </div>
      </div>
      <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base">
        {text}
      </p>
    </div>
  )
}

function OperatorListItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-start relative shrink-0 w-full">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-md shrink-0 size-10">
        <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      </div>
      <div className="flex flex-1 flex-col gap-1 items-start leading-6 relative shrink-0 text-base min-w-0">
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
