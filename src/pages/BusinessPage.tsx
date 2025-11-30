import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import checkIcon from '../assets/icons/check.svg'
import calendarFoldIcon from '../assets/icons/calendar-fold.svg'
import codeXmlIcon from '../assets/icons/code-xml.svg'
import globeIcon from '../assets/icons/globe.svg'
import sendIcon from '../assets/icons/send.svg'

// TODO: Replace placeholder image with actual Business page images from Figma:
// - business-hero.png (Hero section image)
// - business-features-tickets.png (Features section image showing tickets)
// - business-events.png (Events and Entertainment section image)
// - business-transport.png (Transport Companies section image)
// - business-tours.png (Tours and Activities section image)
// - business-zero-setup.png (Zero Setup section image)
// Temporarily using placeholder image for all sections
import placeholderImage from '../assets/images/placeholder.png'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function BusinessPage() {
  usePageTitle({
    title: 'Business Solutions | Folio Wallet',
    description: 'Better tickets. No app to build. Give your customers modern mobile tickets that are easy to save, easy to find and easy to scan.'
  })

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
                Better tickets
                <br aria-hidden="true" />
                No app to build
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                Give your customers modern mobile tickets that are easy to save, easy to find and easy to scan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative">
              <Button
                variant="primary"
              >
                Contact Folio Team
              </Button>
              <Button
                variant="secondary"
              >
                Try Folio
              </Button>
            </div>
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={placeholderImage} 
              alt="Business tickets preview" 
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
                Better tickets
                <br aria-hidden="true" />
                No app to build
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                Give your customers modern mobile tickets that are easy to save, easy to find and easy to scan.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start relative shrink-0">
              <Button
                variant="primary"
                fullWidth
              >
                Contact Folio Team
              </Button>
              <Button
                variant="secondary"
                fullWidth
              >
                Try Folio
              </Button>
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={placeholderImage} 
              alt="Business tickets preview" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Features Section - Issue tickets in a Folio ready format */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={placeholderImage} 
              alt="Folio tickets format"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Issue tickets in a Folio ready format"
              description="Instead of sending heavy PDFs that customers search for in their inbox, you attach a small text file that Folio reads instantly. The ticket appears in the app as a clean card with time, place, seat details and a scannable code. The format is a simple JSON snippet that your system can generate the same way as an email template."
              align="left"
              maxWidth="100%"
            />
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FeatureListItem text="No app to build or maintain" />
              <FeatureListItem text="Customers see the ticket in seconds" />
              <FeatureListItem text="No need to design mobile layouts" />
              <FeatureListItem text="Works alongside your existing PDFs or emails" />
              <FeatureListItem text="Tickets feel modern on any device" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Issue tickets in a Folio ready format"
              description="Instead of sending heavy PDFs that customers search for in their inbox, you attach a small text file that Folio reads instantly. The ticket appears in the app as a clean card with time, place, seat details and a scannable code. The format is a simple JSON snippet that your system can generate the same way as an email template."
              align="left"
            />
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FeatureListItem text="No app to build or maintain" />
              <FeatureListItem text="Customers see the ticket in seconds" />
              <FeatureListItem text="No need to design mobile layouts" />
              <FeatureListItem text="Works alongside your existing PDFs or emails" />
              <FeatureListItem text="Tickets feel modern on any device" />
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={placeholderImage} 
              alt="Folio tickets format"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Folio Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
            <SectionHeader
              title="Why Folio instead of Apple Wallet or Google Wallet"
              description="A simpler and more universal way to deliver digital tickets without platform limits or complex formats."
              maxWidth="576px"
            />
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={codeXmlIcon}
                title="No special formats"
                description="You do not need to create pass files or manage certificates. Folio works with simple data you already send."
              />
              <ToolCard
                icon={sendIcon}
                title="Fits your existing workflow"
                description="If you can send a PDF or email, you can issue tickets for Folio. No new systems, no mobile team, no setup."
              />
              <ToolCard
                icon={calendarFoldIcon}
                title="Everything in one place"
                description="All tickets and bookings appear in a simple timeline that helps customers see their plans at a glance."
              />
              <ToolCard
                icon={globeIcon}
                title="Available to everyone"
                description="Your tickets work the same on iOS and Android in any region, even for users who do not use wallet apps."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events and Entertainment Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Tickets that match your event"
              description="Folio gives every guest a clean and modern ticket that feels made for concerts, festivals, theaters, clubs and local venues. Times, locations and entry details are presented clearly so guests know exactly where to go and staff can scan in one glance."
              align="left"
            />
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={placeholderImage}
              alt="Event tickets"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Tickets that match your event"
              description="Folio gives every guest a clean and modern ticket that feels made for concerts, festivals, theaters, clubs and local venues. Times, locations and entry details are presented clearly so guests know exactly where to go and staff can scan in one glance."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={placeholderImage}
              alt="Event tickets"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Transport Companies Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={placeholderImage}
              alt="Transport tickets"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Travel cards your passengers understand"
              description="Regional airlines, rail operators and bus companies can turn booking confirmations into simple travel cards. Departure times, platforms, stops and seat numbers are arranged in one clear view that is always ready at boarding or check in."
              align="left"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Travel cards your passengers understand"
              description="Regional airlines, rail operators and bus companies can turn booking confirmations into simple travel cards. Departure times, platforms, stops and seat numbers are arranged in one clear view that is always ready at boarding or check in."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={placeholderImage}
              alt="Transport tickets"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Tours and Activities Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Every booking in one simple view"
              description="Tours, excursions, transfers, guides and local experiences are stored together so travelers always know what comes next. Folio combines meeting points, times and contact details into one easy to read pass for the entire trip."
              align="left"
            />
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={placeholderImage}
              alt="Tours and activities"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Every booking in one simple view"
              description="Tours, excursions, transfers, guides and local experiences are stored together so travelers always know what comes next. Folio combines meeting points, times and contact details into one easy to read pass for the entire trip."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={placeholderImage}
              alt="Tours and activities"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Zero Setup Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={placeholderImage}
              alt="Zero setup workflow"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Use the workflow you already have"
              description="Folio works with your current email process so you do not need new tools or integrations. Customers receive or forward a small Folio file with their confirmation and the ticket appears in the app as a ready to use digital pass."
              align="left"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Use the workflow you already have"
              description="Folio works with your current email process so you do not need new tools or integrations. Customers receive or forward a small Folio file with their confirmation and the ticket appears in the app as a ready to use digital pass."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={placeholderImage}
              alt="Zero setup workflow"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-0 md:pb-24 relative shrink-0 w-full bg-white">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center max-w-[1280px] px-6 relative shrink-0 w-full">
          <div className="flex gap-16 items-center p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
            <div className="flex flex-1 flex-col gap-4 items-start relative shrink-0 max-w-[576px] min-w-0">
              <h2 className="font-bold leading-8 text-2xl text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Make every ticket feel effortless
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                If you deliver tickets or bookings by email, Folio gives your customers a clearer and more reliable experience without changing how you work.
              </p>
            </div>
            <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
              <Button
                variant="primary"
              >
                Contact Folio Team
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
            <h2 className="font-bold leading-8 text-2xl text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
              Make every ticket feel effortless
            </h2>
            <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
              If you deliver tickets or bookings by email, Folio gives your customers a clearer and more reliable experience without changing how you work.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
            <Button
              variant="primary"
              fullWidth
            >
              Contact Folio Team
            </Button>
          </div>
        </div>
      </section>

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
      <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base whitespace-pre-wrap">
        {text}
      </p>
    </div>
  )
}

