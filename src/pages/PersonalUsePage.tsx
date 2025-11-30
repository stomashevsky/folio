import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import FAQSection, { FAQItem } from '../components/sections/FAQSection'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import { usePageTitle } from '../hooks/usePageTitle'
import personalUseHero from '../assets/images/personal-use-hero.png'
import featuresTickets from '../assets/images/features-tickets.png'
import ticketsTrain from '../assets/images/tickets-train.png'
import ticketsBus from '../assets/images/tickets-bus.png'
import ticketsHotel from '../assets/images/tickets-hotel.png'
import ticketsEvent from '../assets/images/tickets-event.png'
import featuresTimeline from '../assets/images/features-timeline.png'
import documentViewer from '../assets/images/document-viewer.png'
import featuresIds from '../assets/images/features-ids.png'
import featuresCards from '../assets/images/features-cards.png'
import featuresFolders from '../assets/images/features-folders.png'
import scanTextIcon from '../assets/icons/scan-text.svg'
import imagesIcon from '../assets/icons/images.svg'
import fileSpreadsheetIcon from '../assets/icons/file-spreadsheet.svg'
import mailIcon from '../assets/icons/mail.svg'
import calendarRangeIcon from '../assets/icons/calendar-range.svg'
import tagIcon from '../assets/icons/tag.svg'
import triangleAlertIcon from '../assets/icons/triangle-alert.svg'
import shieldCheckIcon from '../assets/icons/shield-check.svg'
import arrowUpRightIcon from '../assets/icons/arrow-up-right.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const PERSONAL_USE_FAQ: FAQItem[] = [
  {
    q: 'What types of documents can I add to Folio?',
    a: 'You can add passports, ID cards, residence permits, tickets, bookings, payment cards and any other document from photos, PDFs or emails.',
  },
  {
    q: 'Can I trust Folio with sensitive documents?',
    a: 'Yes. Your data is end to end encrypted with keys only you control. Even with cloud sync, no one at Folio can view your documents.',
  },
  {
    q: 'Will my documents sync across devices?',
    a: 'Yes. Your encrypted library syncs through the cloud so everything stays available on your iPhone or Android phone.',
  },
  {
    q: 'Can I share documents with others?',
    a: 'Yes. Shared folders let you safely share selected documents with family or friends. People you share with always see the latest version.',
  },
  {
    q: 'Is Folio free to use?',
    a: 'Yes. Folio is free and gives you unlimited access to document storage, smart tickets, the travel timeline and all core features.',
  },
]

const featuresItems: AccordionItemData[] = [
  {
    id: 'cards',
    title: 'Payment & Gift Cards',
    description: 'Keep your debit, credit and gift cards with all essential details. Quickly access card numbers, expiry dates and other important information, fully synced and protected across your devices.',
    desktopImage: featuresCards,
  },
  {
    id: 'ids',
    title: 'Personal IDs',
    description: 'Store passports, ID cards and residence permits securely and in a clean, readable format. Folio extracts names, dates and numbers for quick access and reminds you before anything expires.',
    desktopImage: featuresIds,
  },
  {
    id: 'tickets',
    title: 'Tickets and Bookings',
    description: 'Import flights, trains, hotels and events from email, PDF or photo. Folio cleans each ticket, extracts times, locations and passenger information, and turns it into a clear and reliable card for your trips.',
    desktopImage: featuresTickets,
  },
  {
    id: 'timeline',
    title: 'Travel Timeline',
    description: 'Your entire journey is organized automatically day by day. Tickets and bookings are sorted chronologically, grouped by date and displayed as a clean timeline so you always know what comes next.',
    desktopImage: featuresTimeline,
  },
  {
    id: 'folders',
    title: 'Shared Folders',
    description: 'Create shared document spaces for family and friends. Everyone sees the latest versions of tickets, IDs or travel plans and can add their own documents while original files stay safely with their owners.',
    desktopImage: featuresFolders,
  },
]

export default function PersonalUsePage() {
  usePageTitle({
    title: 'Folio - All documents, beautifully arranged | Folio Wallet',
    description: 'Folio keeps your passports, IDs, tickets and cards in one secure place, beautifully structured and instantly accessible. It imports any document from email, PDF or photo, cleans it up, extracts key details and keeps everything easy to find.'
  })
  
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>('cards')
  
  const activeFeature = featuresItems.find(item => item.id === activeFeatureId) || featuresItems[0]

  return (
    <div className="flex flex-col items-start relative w-full">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                All documents, beautifully arranged
              </h1>
              <p className="font-normal leading-7 text-[#737373] text-lg w-full whitespace-pre-wrap">
                Folio keeps your passports, IDs, tickets and cards in one secure place, beautifully structured and instantly accessible. It imports any document from email, PDF or photo, cleans it up, extracts key details and keeps everything easy to find. Your essential information is always at hand when you need it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative">
              <a
                href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-md shrink-0 text-[#fafafa] text-sm font-medium leading-5 whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                <span>Download for iOS</span>
                <img src={arrowUpRightIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" width="16" height="16" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.folioltd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-md shrink-0 text-[#fafafa] text-sm font-medium leading-5 whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                <span>Download for Android</span>
                <img src={arrowUpRightIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" width="16" height="16" />
              </a>
            </div>
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={personalUseHero} 
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
              <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                All documents, beautifully arranged
              </h1>
              <p className="font-normal leading-7 text-[#737373] text-lg w-full whitespace-pre-wrap">
                Folio keeps your passports, IDs, tickets and cards in one secure place, beautifully structured and instantly accessible. It imports any document from email, PDF or photo, cleans it up, extracts key details and keeps everything easy to find. Your essential information is always at hand when you need it.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start relative shrink-0">
              <a
                href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-md shrink-0 text-[#fafafa] text-sm font-medium leading-5 whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                <span>Download for iOS</span>
                <img src={arrowUpRightIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" width="16" height="16" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.folioltd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-md shrink-0 text-[#fafafa] text-sm font-medium leading-5 whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                <span>Download for Android</span>
                <img src={arrowUpRightIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" width="16" height="16" />
              </a>
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={personalUseHero} 
              alt="Folio documents preview" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="everything-in-one-place" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={activeFeature.desktopImage} 
              alt={activeFeature.title}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              label="Features"
              title="Everything in one place"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={featuresItems}
              defaultOpenId="cards"
              onItemChange={setActiveFeatureId}
              showMobileImages={false}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <SectionHeader
            label="Features"
            title="Everything in one place"
            align="left"
            maxWidth="100%"
          />
          <Accordion
            items={featuresItems}
            defaultOpenId="cards"
            onItemChange={setActiveFeatureId}
            showMobileImages={true}
          />
        </div>
      </section>

      {/* Quick Import Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col gap-12 items-center relative shrink-0 w-full">
            <SectionHeader
              label="Quick Import"
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
              label="Quick Import"
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
              src={documentViewer}
              alt="Document viewer interface"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              label="Document Viewer"
              title="A clean view of every document"
              description="Folio displays your documents in clean, readable layouts with key fields extracted automatically. You can browse photos in fullscreen, view attached PDFs and copy or share any detail with ease."
              align="left"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              label="Document Viewer"
              title="A clean view of every document"
              description="Folio displays your documents in clean, readable layouts with key fields extracted automatically. You can browse photos in fullscreen, view attached PDFs and copy or share any detail with ease."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={documentViewer}
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
              label="Smart Tools"
              title="Tools that make a difference"
              description="Folio includes thoughtful features that make everyday use easier and help you track trips, find documents instantly, share with confidence and stay ahead of important dates."
              maxWidth="576px"
            />
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full">
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

      {/* FAQ Section */}
      <FAQSection 
        faqData={PERSONAL_USE_FAQ}
        title="Frequently asked questions"
      />

      {/* Get The App Section */}
      <GetTheAppSection />

      {/* Footer */}
      <FooterSection />
    </div>
  )
}

function TicketsAndBookingsSection() {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>('unified-format')

  const accordionItems: AccordionItemData[] = [
    {
      id: 'unified-format',
      title: 'Unified format',
      description: 'Flights, trains, hotels and events are transformed into one clean and readable format.',
      image: ticketsTrain,
    },
    {
      id: 'every-kind',
      title: 'Every kind of booking',
      description: 'Works with flights, trains, buses, ferries, hotels and events.',
      image: ticketsBus,
    },
    {
      id: 'key-details',
      title: 'All key details extracted',
      description: 'Times, dates, locations, passenger names and booking info captured automatically.',
      image: ticketsHotel,
    },
    {
      id: 'original-files',
      title: 'Original files attached',
      description: 'Your PDF or email is saved with the document for quick reference.',
      image: ticketsEvent,
    },
  ]

  const activeItem = accordionItems.find(item => item.id === openAccordionId) || accordionItems[0]

  return (
    <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
          <SectionHeader
            label="Tickets and Bookings"
            title="Travel plans, thoughtfully organized"
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
        <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
          <img 
            src={activeItem.image} 
            alt={activeItem.title}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-8 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <SectionHeader
          label="Tickets and Bookings"
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
      <div className="flex flex-col gap-2 items-center leading-6 relative shrink-0 text-base text-center w-full whitespace-pre-wrap">
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

function ToolCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white border border-[#e5e5e5] border-solid w-full sm:max-w-none relative rounded-2xl shrink-0 sm:h-full flex flex-col">
      <div className="flex flex-col gap-6 items-start p-6 w-full flex-1">
        <div className="flex gap-2 items-start w-full">
          <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-md shrink-0 size-10">
            <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-start w-full flex-1">
          <p className="font-semibold leading-6 overflow-ellipsis overflow-hidden relative shrink-0 text-base text-[#0a0a0a] w-full whitespace-nowrap">
            {title}
          </p>
          <p className="font-normal leading-5 sm:min-h-[80px] relative shrink-0 text-[#737373] text-sm w-full whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function GetTheAppSection() {
  return (
    <section id="get-the-app" className="flex flex-col gap-6 items-center overflow-hidden px-0 md:px-6 py-0 md:pb-24 relative shrink-0 w-full bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-16 items-center max-w-[1280px] p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
        <div className="flex flex-1 flex-col gap-4 items-start relative shrink-0 max-w-[576px] min-w-0">
          <h2 className="font-bold leading-8 text-2xl text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
            Take Folio with you, wherever you go
          </h2>
          <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
            Your documents stay organized, synced and instantly accessible on iOS and Android.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
          <a
            href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-md shrink-0 text-[#fafafa] text-sm font-medium leading-5 whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            <span>Download for iOS</span>
            <img src={arrowUpRightIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" width="16" height="16" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.folioltd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-md shrink-0 text-[#fafafa] text-sm font-medium leading-5 whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            <span>Download for Android</span>
            <img src={arrowUpRightIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" width="16" height="16" />
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
          <h2 className="font-bold leading-8 text-2xl text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
            Take Folio with you, wherever you go
          </h2>
          <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
            Your documents stay organized, synced and instantly accessible on iOS and Android.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
          <a
            href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-md shrink-0 text-[#fafafa] text-sm font-medium leading-5 whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            <span>Download for iOS</span>
            <img src={arrowUpRightIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" width="16" height="16" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.folioltd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-md shrink-0 text-[#fafafa] text-sm font-medium leading-5 whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            <span>Download for Android</span>
            <img src={arrowUpRightIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" width="16" height="16" />
          </a>
        </div>
      </div>
    </section>
  )
}

