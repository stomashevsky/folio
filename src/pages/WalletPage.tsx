import { useState, useEffect, memo, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, HeroTagline, Button } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import VideoWithPlaceholder from '../components/ui/VideoWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import FAQSection from '../components/sections/FAQSection'
import PasskeysSection from '../components/sections/PasskeysSection'
import ReviewsSection from '../components/sections/ReviewsSection'
import GetTheAppSection from '../components/sections/GetTheAppSection'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import { scrollToSection } from '../utils/scrollToSection'
import folioAppHeroVideo from '../assets/images/folio-app-hero.mp4'
import folioFeaturesTickets from '../assets/images/folio-features-tickets.png'
import folioTicketsTrain from '../assets/images/folio-tickets-train.png'
import folioTicketsBus from '../assets/images/folio-tickets-bus.png'
import folioTicketsHotel from '../assets/images/folio-tickets-hotel.png'
import folioTicketsEvent from '../assets/images/folio-tickets-event.png'
import folioFeaturesTimeline from '../assets/images/folio-features-timeline.png'
import folioDocumentViewer from '../assets/images/folio-document-viewer.png'
import folioFeaturesIds from '../assets/images/folio-features-ids.png'
import folioFeaturesCards from '../assets/images/folio-features-cards.png'
import folioFeaturesFolders from '../assets/images/folio-features-folders.png'
import folioStorageOrganized from '../assets/images/folio-storage-organized.png'
import scanTextIcon from '../assets/icons/ScanText.svg'
import imagesIcon from '../assets/icons/Images.svg'
import fileSpreadsheetIcon from '../assets/icons/FileSpreadsheet.svg'
import mailIcon from '../assets/icons/Mail.svg'
import calendarRangeIcon from '../assets/icons/CalendarRange.svg'
import tagIcon from '../assets/icons/Tag.svg'
import triangleAlertIcon from '../assets/icons/TriangleAlert.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'

// Background style using inline styles for complex multi-layer gradient
// This cannot be easily expressed in Tailwind CSS, so inline style is used
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// Feature items with images (titles and descriptions come from translations)
const FEATURE_ITEMS_CONFIG = [
  { id: 'cards', desktopImage: folioFeaturesCards },
  { id: 'ids', desktopImage: folioFeaturesIds },
  { id: 'tickets', desktopImage: folioFeaturesTickets },
  { id: 'timeline', desktopImage: folioFeaturesTimeline },
  { id: 'folders', desktopImage: folioFeaturesFolders },
]

function WalletPage() {
  const location = useLocation()
  const { t } = useTranslation('wallet')
  
  // Generate FAQ data from translations
  const faqData = useMemo(() => {
    const items = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>
    return items.map((item) => ({
      q: item.q,
      a: item.a,
    }))
  }, [t])
  
  const { currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/wallet`

  usePageTitle({
    title: t('meta.title'),
    description: t('meta.description'),
    ogTitle: t('meta.title'),
    ogDescription: t('meta.description'),
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })
  
  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    // Check if we need to scroll to a specific section
    let timeoutId1: ReturnType<typeof setTimeout> | null = null
    let timeoutId2: ReturnType<typeof setTimeout> | null = null
    
    if (location.hash) {
      const sectionId = location.hash.slice(1) // Remove #
      // Try immediately
      scrollToSection(sectionId)
      // Also try after delays to ensure element is rendered
      timeoutId1 = setTimeout(() => {
        scrollToSection(sectionId)
      }, 200)
      timeoutId2 = setTimeout(() => {
        scrollToSection(sectionId)
      }, 400)
    } else if (location.state?.scrollTo === 'get-the-app') {
      scrollToSection('get-the-app')
      timeoutId1 = setTimeout(() => {
        scrollToSection('get-the-app')
      }, 200)
      timeoutId2 = setTimeout(() => {
        scrollToSection('get-the-app')
      }, 400)
    }
    
    return () => {
      if (timeoutId1) {
        clearTimeout(timeoutId1)
      }
      if (timeoutId2) {
        clearTimeout(timeoutId2)
      }
    }
  }, [location])

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
              <HeroTagline icon={smartphoneIcon}>{t('hero.tagline')}</HeroTagline>
              <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                {t('hero.title')}
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" size="md" onClick={() => scrollToSection('get-the-app')}>
                {t('hero.cta')}
              </Button>
            </div>
          </div>
          <VideoWithPlaceholder
            src={folioAppHeroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
          />
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <HeroTagline icon={smartphoneIcon}>{t('hero.tagline')}</HeroTagline>
              <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('hero.title')}
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" size="md" onClick={() => scrollToSection('get-the-app')}>
                {t('hero.cta')}
              </Button>
            </div>
          </div>
          <VideoWithPlaceholder
            src={folioAppHeroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
          />
        </div>
      </section>

      {/* Passkeys Section */}
      <PasskeysSection />

      {/* Features Section */}
      <EverythingInOnePlaceSection />

      {/* Quick Import Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col gap-12 items-center relative shrink-0 w-full">
            <SectionHeader
              title={t('import.title')}
              description={t('import.description')}
              maxWidth="576px"
            />
            <div className="flex gap-6 items-start relative shrink-0 w-full">
              <ImportMethod
                icon={scanTextIcon}
                title={t('import.scan.title')}
                description={t('import.scan.description')}
              />
              <ImportMethod
                icon={imagesIcon}
                title={t('import.photos.title')}
                description={t('import.photos.description')}
              />
              <ImportMethod
                icon={fileSpreadsheetIcon}
                title={t('import.pdf.title')}
                description={t('import.pdf.description')}
              />
              <ImportMethod
                icon={mailIcon}
                title={t('import.email.title')}
                description={t('import.email.description')}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-16 items-center relative shrink-0 w-full">
            <SectionHeader
              title={t('import.title')}
              description={t('import.description')}
              align="center"
              maxWidth="576px"
            />
            <div className="flex flex-col gap-11 items-center relative shrink-0 w-full">
              <ImportMethod
                icon={scanTextIcon}
                title={t('import.scan.title')}
                description={t('import.scan.description')}
              />
              <ImportMethod
                icon={imagesIcon}
                title={t('import.photos.title')}
                description={t('import.photos.description')}
              />
              <ImportMethod
                icon={fileSpreadsheetIcon}
                title={t('import.pdf.title')}
                description={t('import.pdf.description')}
              />
              <ImportMethod
                icon={mailIcon}
                title={t('import.email.title')}
                description={t('import.email.description')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tickets and Bookings Section */}
      <TicketsAndBookingsSection />

      {/* Document Viewer Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <ImageWithPlaceholder
            src={folioDocumentViewer}
            alt={t('viewer.title')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
            loading="lazy"
          />
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title={t('viewer.title')}
              description={t('viewer.description')}
              align="left"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('viewer.title')}
              description={t('viewer.description')}
              align="left"
            />
          </div>
          <ImageWithPlaceholder
            src={folioDocumentViewer}
            alt={t('viewer.title')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Smart Tools Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
            <SectionHeader
              title={t('tools.title')}
              description={t('tools.description')}
              maxWidth="576px"
            />
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={calendarRangeIcon}
                title={t('tools.timeline.title')}
                description={t('tools.timeline.description')}
              />
              <ToolCard
                icon={tagIcon}
                title={t('tools.labels.title')}
                description={t('tools.labels.description')}
              />
              <ToolCard
                icon={triangleAlertIcon}
                title={t('tools.expiry.title')}
                description={t('tools.expiry.description')}
              />
              <ToolCard
                icon={shieldCheckIcon}
                title={t('tools.privacy.title')}
                description={t('tools.privacy.description')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keep your essential information organized Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title={t('organized.title')}
              description={t('organized.description')}
              align="left"
            />
          </div>
          <ImageWithPlaceholder
            src={folioStorageOrganized}
            alt={t('organized.title')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full pointer-events-none"
            containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
            loading="lazy"
          />
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('organized.title')}
              description={t('organized.description')}
              align="left"
            />
          </div>
          <ImageWithPlaceholder
            src={folioStorageOrganized}
            alt={t('organized.title')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full pointer-events-none"
            containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Folio Wallet in numbers Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('stats.title')}
              description={t('stats.description')}
              align="left"
              maxWidth="576px"
            />
            <div className="flex gap-8 items-start relative shrink-0 w-full">
              <StatItem
                value={t('stats.rating.value')}
                description={t('stats.rating.description')}
              />
              <StatItem
                value={t('stats.documents.value')}
                description={t('stats.documents.description')}
              />
              <StatItem
                value={t('stats.countries.value')}
                description={t('stats.countries.description')}
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('stats.title')}
              description={t('stats.description')}
              align="left"
            />
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <StatItem
                value={t('stats.rating.value')}
                description={t('stats.rating.description')}
              />
              <StatItem
                value={t('stats.documents.value')}
                description={t('stats.documents.description')}
              />
              <StatItem
                value={t('stats.countries.value')}
                description={t('stats.countries.description')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FAQSection
        faqData={faqData}
        title={t('faq.title')}
      />

      {/* Get The App Section */}
      <GetTheAppSection />
      </main>
      {/* Footer */}
      <FooterSection />
    </div>
  )
}

function EverythingInOnePlaceSection() {
  const { t } = useTranslation('wallet')
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('cards')

  // Generate features items from translations
  const featuresItems: AccordionItemData[] = useMemo(() => 
    FEATURE_ITEMS_CONFIG.map(item => ({
      id: item.id,
      title: t(`features.${item.id}.title`),
      description: t(`features.${item.id}.description`),
      desktopImage: item.desktopImage,
    })),
  [t])

  const activeItem = featuresItems.find(item => item.id === openAccordionId) || featuresItems[0]

  return (
    <section id="everything-in-one-place" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <ImageWithPlaceholder
          key={activeItem.id}
          src={activeItem.desktopImage || ''}
          alt={activeItem.title}
          className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
          containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
          loading="lazy"
          animateOnMount
        />
        <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
          <SectionHeader
            title={t('features.title')}
            align="left"
          />
          <Accordion
            items={featuresItems}
            defaultOpenId="cards"
            onItemChange={setOpenAccordionId}
            showMobileImages={false}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <SectionHeader
          title={t('features.title')}
          align="left"
        />
        <Accordion
          items={featuresItems}
          defaultOpenId="cards"
          onItemChange={setOpenAccordionId}
          showMobileImages={true}
        />
      </div>
    </section>
  )
}

function TicketsAndBookingsSection() {
  const { t } = useTranslation('wallet')
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('unified-format')

  const tripsConfig = [
    { id: 'unified-format', key: 'unifiedFormat', image: folioTicketsTrain },
    { id: 'every-kind', key: 'everyKind', image: folioTicketsBus },
    { id: 'key-details', key: 'keyDetails', image: folioTicketsHotel },
    { id: 'original-files', key: 'originalFiles', image: folioTicketsEvent },
  ]

  const accordionItems: AccordionItemData[] = useMemo(() =>
    tripsConfig.map(item => ({
      id: item.id,
      title: t(`trips.${item.key}.title`),
      description: t(`trips.${item.key}.description`),
      image: item.image,
    })),
  [t])

  const activeItem = accordionItems.find(item => item.id === openAccordionId) || accordionItems[0]

  return (
    <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
          <SectionHeader
            title={t('trips.title')}
            align="left"
          />
          <Accordion
            items={accordionItems}
            defaultOpenId="unified-format"
            onItemChange={setOpenAccordionId}
            allowCloseAll={true}
            showMobileImages={false}
          />
        </div>
        <ImageWithPlaceholder
          key={activeItem.id}
          src={activeItem.image || ''}
          alt={activeItem.title}
          className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
          containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
          loading="lazy"
          animateOnMount
        />
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <SectionHeader
          title={t('trips.titleMobile')}
          align="left"
        />
        <Accordion
          items={accordionItems}
          defaultOpenId="unified-format"
          onItemChange={setOpenAccordionId}
          allowCloseAll={true}
          showMobileImages={true}
        />
      </div>
    </section>
  )
}

function ImportMethod({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col gap-5 items-center relative shrink-0 w-full md:w-auto">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-md shrink-0 size-10">
        <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-2 items-center leading-6 relative shrink-0 text-base text-center w-full">
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


export default memo(WalletPage)

