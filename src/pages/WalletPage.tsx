import { useState, useEffect, memo } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, HeroTagline, Button } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import FAQSection, { FAQItem } from '../components/sections/FAQSection'
import PasskeysSection from '../components/sections/PasskeysSection'
import ReviewsSection from '../components/sections/ReviewsSection'
import GetTheAppSection from '../components/sections/GetTheAppSection'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToSection } from '../utils/scrollToSection'
import folioAppHero from '../assets/images/folio-app-hero.png'
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

const FOLIO_APP_FAQ: FAQItem[] = [
  {
    q: 'What is Folio?',
    a: 'Folio is a digital wallet app that keeps your passports, IDs, tickets, bookings and cards organized in one secure place. It works on iPhone and Android.',
  },
  {
    q: 'What types of documents can I store?',
    a: 'Passports, ID cards, residence permits, driver\'s licenses, travel tickets (flights, trains, hotels, events), payment cards, gift cards, loyalty cards and any other personal document.',
  },
  {
    q: 'How do I add documents?',
    a: 'You can scan with your camera, upload photos from your library, import PDFs, or forward booking emails to docs@folio.id. Folio automatically extracts key details.',
  },
  {
    q: 'How does Folio protect my documents?',
    a: 'Folio uses end-to-end encryption with AES-256. Your documents are encrypted on your device with keys only you control. Even Folio cannot access your data. Biometric protection (Face ID, fingerprint) adds an extra layer of security.',
  },
  {
    q: 'Can I access documents offline?',
    a: 'Yes. Documents are stored locally on your device and available without internet. Cloud sync keeps everything updated when you\'re back online.',
  },
  {
    q: 'Will I get reminders before documents expire?',
    a: 'Yes. Folio sends gentle reminders before your passport, ID or any other document expires so you\'re never caught off guard.',
  },
  {
    q: 'Can I share documents with family?',
    a: 'Yes. Create shared folders to safely share travel plans, tickets or IDs with family and friends. Everyone sees the latest versions automatically.',
  },
  {
    q: 'What platforms is Folio available on?',
    a: 'Folio is available on iOS (iPhone and iPad) and Android devices. You can download it for free from the App Store or Google Play Store.',
  },
  {
    q: 'Is Folio free?',
    a: 'Yes. Folio is completely free with unlimited document storage, travel timeline, expiry alerts and all core features.',
  },
  {
    q: 'How does the travel timeline work?',
    a: 'The travel timeline automatically arranges your flights, hotel bookings, train tickets, and events in chronological order. It shows your complete itinerary for each trip, highlights upcoming departures, and keeps a history of past travels. No manual entry required.',
  },
  {
    q: 'Does Folio work with Apple Wallet passes?',
    a: 'Yes. You can import .pkpass files from Apple Wallet directly into Folio. Unlike Apple Wallet, Folio extracts and organizes the data, adds it to your travel timeline, and keeps everything searchable.',
  },
  {
    q: 'What happens if I lose my phone?',
    a: 'If you have a Folio account, your encrypted documents are backed up and can be restored on a new device. Just sign in and everything will be there.',
  },
]

const featuresItems: AccordionItemData[] = [
  {
    id: 'cards',
    title: 'Payment & Gift Cards',
    description: 'Keep your debit, credit and gift cards with all essential details. Quickly access card numbers, expiry dates and other important information, fully synced and protected across your devices.',
    desktopImage: folioFeaturesCards,
  },
  {
    id: 'ids',
    title: 'Personal IDs',
    description: 'Store passports, ID cards and residence permits securely and in a clean, readable format. Folio extracts names, dates and numbers for quick access and reminds you before anything expires.',
    desktopImage: folioFeaturesIds,
  },
  {
    id: 'tickets',
    title: 'Tickets and Bookings',
    description: 'Import flights, trains, hotels and events from email, PDF or photo. Folio cleans each ticket, extracts times, locations and passenger information, and turns it into a clear and reliable card for your trips.',
    desktopImage: folioFeaturesTickets,
  },
  {
    id: 'timeline',
    title: 'Travel Timeline',
    description: 'Your entire journey is organized automatically day by day. Tickets and bookings are sorted chronologically, grouped by date and displayed as a clean timeline so you always know what comes next.',
    desktopImage: folioFeaturesTimeline,
  },
  {
    id: 'folders',
    title: 'Shared Folders',
    description: 'Create shared document spaces for family and friends. Everyone sees the latest versions of tickets, IDs or travel plans and can add their own documents while original files stay safely with their owners.',
    desktopImage: folioFeaturesFolders,
  },
]

function WalletPage() {
  const location = useLocation()
  
  usePageTitle({
    title: 'Folio Wallet | Digital document wallet app',
    description: 'Folio keeps your passports, IDs, tickets and cards in one secure place, beautifully structured and instantly accessible. It imports any document from email, PDF or photo, cleans it up, extracts key details and keeps everything easy to find.',
    ogTitle: 'Folio Wallet | Digital document wallet app',
    ogDescription: 'Keep your passports, IDs, tickets and cards in one secure place. Folio imports any document from email, PDF or photo and keeps everything organized.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/wallet'
  })
  
  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    // Check if we need to scroll to a specific section
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    
    if (location.hash) {
      const sectionId = location.hash.slice(1) // Remove #
      timeoutId = setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    } else if (location.state?.scrollTo === 'get-the-app') {
      timeoutId = setTimeout(() => {
        scrollToSection('get-the-app')
      }, 100)
    }
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
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
              <HeroTagline icon={smartphoneIcon}>Folio app</HeroTagline>
              <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                Your documents, always with you
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Folio keeps your passports, IDs, tickets and cards in one secure place, beautifully structured and instantly accessible. It imports any document from email, PDF or photo, cleans it up, extracts key details and keeps everything easy to find. Your essential information is always at hand when you need it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" size="md" onClick={() => scrollToSection('get-the-app')}>
                Get the app
              </Button>
            </div>
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={folioAppHero} 
              alt="Folio documents preview" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <HeroTagline icon={smartphoneIcon}>Folio app</HeroTagline>
              <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                Your documents, always with you
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Folio keeps your passports, IDs, tickets and cards in one secure place, beautifully structured and instantly accessible. It imports any document from email, PDF or photo, cleans it up, extracts key details and keeps everything easy to find. Your essential information is always at hand when you need it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
              <Button variant="primary" size="md" onClick={() => scrollToSection('get-the-app')}>
                Get the app
              </Button>
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={folioAppHero} 
              alt="Folio documents preview" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
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
              title="Add documents in seconds"
              description="Choose the easiest way to bring your documents into Folio."
              maxWidth="576px"
            />
            <div className="flex gap-6 items-start relative shrink-0 w-full">
              <ImportMethod
                icon={scanTextIcon}
                title="Scan documents"
                description="Capture with your camera and Folio extracts the details."
              />
              <ImportMethod
                icon={imagesIcon}
                title="Upload photos"
                description="Add documents saved in your photo library."
              />
              <ImportMethod
                icon={fileSpreadsheetIcon}
                title="Import PDFs"
                description="Import digital tickets, cards or confirmations in one tap."
              />
              <ImportMethod
                icon={mailIcon}
                title="Forward emails"
                description="Send any ticket or booking email to docs@folio.id."
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-16 items-center relative shrink-0 w-full">
            <SectionHeader
              title="Add documents in seconds"
              description="Choose the easiest way to bring your documents into Folio."
              align="center"
              maxWidth="576px"
            />
            <div className="flex flex-col gap-11 items-center relative shrink-0 w-full">
              <ImportMethod
                icon={scanTextIcon}
                title="Scan documents"
                description="Capture with your camera and Folio extracts the details."
              />
              <ImportMethod
                icon={imagesIcon}
                title="Upload photos"
                description="Add documents saved in your photo library."
              />
              <ImportMethod
                icon={fileSpreadsheetIcon}
                title="Import PDFs"
                description="Import digital tickets, cards or confirmations in one tap."
              />
              <ImportMethod
                icon={mailIcon}
                title="Forward emails"
                description="Send any ticket or booking email to docs@folio.id."
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
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={folioDocumentViewer}
              alt="Document viewer interface"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="A clear view of every document"
              description="Folio displays your documents in clean, readable layouts with key fields extracted automatically. You can browse photos in fullscreen, view attached PDFs and copy or share any detail with ease."
              align="left"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="A clear view of every document"
              description="Folio displays your documents in clean, readable layouts with key fields extracted automatically. You can browse photos in fullscreen, view attached PDFs and copy or share any detail with ease."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={folioDocumentViewer}
              alt="Document viewer interface"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Smart Tools Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
            <SectionHeader
              title="Smart tools that truly help"
              description="Folio includes thoughtful features that make everyday use easier and help you track trips, find documents instantly, share with confidence and stay ahead of important dates."
              maxWidth="576px"
            />
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={calendarRangeIcon}
                title="Travel Timeline"
                description="Your trip is arranged into a clean scrollable timeline so you always know what comes next."
              />
              <ToolCard
                icon={tagIcon}
                title="Labels and Organization"
                description="Group documents by people, categories or trips to keep everything structured and easy to find."
              />
              <ToolCard
                icon={triangleAlertIcon}
                title="Expiry Alerts"
                description="Get gentle reminders before any passport, ID or card expires so you are never caught off guard."
              />
              <ToolCard
                icon={shieldCheckIcon}
                title="Privacy and Security"
                description="Your data is end to end encrypted with keys only you control. Even with cloud sync, no one at Folio can read your documents."
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
              title="Keep your essential information organized"
              description="Folio helps you store and manage the most important information in your life. Documents, cards and personal records stay securely organized in one place, easy to access at any moment and always available on any device. This gives you clarity and confidence that everything you rely on is protected and ready when you need it."
              align="left"
            />
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={folioStorageOrganized}
              alt="Organized documents and cards"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full pointer-events-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Keep your essential information organized"
              description="Folio helps you store and manage the most important information in your life. Documents, cards and personal records stay securely organized in one place, easy to access at any moment and always available on any device. This gives you clarity and confidence that everything you rely on is protected and ready when you need it."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={folioStorageOrganized}
              alt="Organized documents and cards"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full pointer-events-none"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Folio Wallet in numbers Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Folio Wallet in numbers"
              description="A simple app that already keeps important documents safe for people all over the world."
              align="left"
              maxWidth="576px"
            />
            <div className="flex gap-8 items-start relative shrink-0 w-full">
              <StatItem
                value="4.7★"
                description="Users consistently rate Folio highly for its clarity, speed and reliability in daily use."
              />
              <StatItem
                value="1M+"
                description="Documents, cards and tickets already added by people who use Folio to stay organized."
              />
              <StatItem
                value="120+"
                description="Countries where Folio helps users keep their essential documents accessible anywhere."
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Folio Wallet in numbers"
              description="A simple app that already keeps important documents safe for people all over the world."
              align="left"
            />
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <StatItem
                value="4.7★"
                description="Users consistently rate Folio highly for its clarity, speed and reliability in daily use."
              />
              <StatItem
                value="1M+"
                description="Documents, cards and tickets already added by people who use Folio to stay organized."
              />
              <StatItem
                value="120+"
                description="Countries where Folio helps users keep their essential documents accessible anywhere."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FAQSection
        faqData={FOLIO_APP_FAQ}
        title="Frequently asked questions"
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
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('cards')

  const activeItem = featuresItems.find(item => item.id === openAccordionId) || featuresItems[0]

  return (
    <section id="everything-in-one-place" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <ImageWithPlaceholder
          src={activeItem.desktopImage || ''}
          alt={activeItem.title}
          className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
          containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
          loading="lazy"
        />
        <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
          <SectionHeader
            title="Everything in one secure place"
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
          title="Everything in one secure place"
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
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('unified-format')

  const accordionItems: AccordionItemData[] = [
    {
      id: 'unified-format',
      title: 'Unified format',
      description: 'Flights, trains, hotels and events are transformed into one clean and readable format.',
      image: folioTicketsTrain,
    },
    {
      id: 'every-kind',
      title: 'Every kind of booking',
      description: 'Works with flights, trains, buses, ferries, hotels and events.',
      image: folioTicketsBus,
    },
    {
      id: 'key-details',
      title: 'All key details extracted',
      description: 'Times, dates, locations, passenger names and booking info captured automatically.',
      image: folioTicketsHotel,
    },
    {
      id: 'original-files',
      title: 'Original files attached',
      description: 'Your PDF or email is saved with the document for quick reference.',
      image: folioTicketsEvent,
    },
  ]

  const activeItem = accordionItems.find(item => item.id === openAccordionId) || accordionItems[0]

  return (
    <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
          <SectionHeader
            title="Your trips, neatly organized"
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
          src={activeItem.image || ''}
          alt={activeItem.title}
          className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
          containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
          loading="lazy"
        />
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <SectionHeader
          title="Travel plans, thoughtfully organized"
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

