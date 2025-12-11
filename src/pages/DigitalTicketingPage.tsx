import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import checkIcon from '../assets/icons/check.svg'
import calendarFoldIcon from '../assets/icons/calendar-fold.svg'
import codeXmlIcon from '../assets/icons/code-xml.svg'
import globeIcon from '../assets/icons/globe.svg'
import sendIcon from '../assets/icons/send.svg'
import ticketIcon from '../assets/icons/ticket.svg'
import routeIcon from '../assets/icons/route.svg'
import cameraIcon from '../assets/icons/camera.svg'

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
  const navigate = useNavigate()
  
  usePageTitle({
    title: 'Digital Ticketing | Folio Wallet',
    description: 'Better tickets. No app to build. Give your customers clean digital tickets that are easy to find, easy to scan and work on any modern phone.',
    ogTitle: 'Digital Ticketing | Folio Wallet',
    ogDescription: 'Better tickets. No app to build. Give your customers clean digital tickets that are easy to find, easy to scan and work on any modern phone.',
    ogImage: 'https://folio.id/src/assets/images/ticket-issuance-hero.png',
    ogUrl: 'https://folio.id/solutions/digital-ticketing'
  })

  const handleTryFolio = () => {
    navigate('/', { state: { scrollTo: 'get-the-app' } })
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
              <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Better tickets
                <br aria-hidden="true" />
                No app to build
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                Give your customers clean digital tickets that are easy to find, easy to scan and work on any modern phone.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative">
              <Button
                variant="primary"
              >
                Get in touch
              </Button>
              <Button
                variant="secondary"
                onClick={handleTryFolio}
              >
                Try Folio
              </Button>
            </div>
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={ticketIssuanceHero} 
              alt="Ticket issuance preview" 
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
                Give your customers clean digital tickets that are easy to find, easy to scan and work on any modern phone.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0">
              <Button
                variant="primary"
              >
                Get in touch
              </Button>
              <Button
                variant="secondary"
                onClick={handleTryFolio}
              >
                Try Folio
              </Button>
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={ticketIssuanceHero} 
              alt="Ticket issuance preview" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Stats Section - Built on a platform people trust */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Built on a platform people trust"
              description="Your tickets appear inside the same secure wallet people use daily for IDs, cards and travel documents. No extra apps, no onboarding friction."
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
              title="Built on a platform people trust"
              description="Your tickets appear inside the same secure wallet people use daily for IDs, cards and travel documents. No extra apps, no onboarding friction."
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

      {/* Features Section - Issue tickets in a Folio ready format */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={ticketIssuanceFeatures} 
              alt="Ticket issuance format"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Issue tickets in a Folio ready format"
              description="Send us simple JSON or an email you already generate and Folio turns it into a clean digital ticket. No pkpass files, no wallet certificates, no SDKs to integrate."
              align="left"
              maxWidth="100%"
            />
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FeatureListItem text="No special pass formats or certificates" />
              <FeatureListItem text="Tickets arrive in seconds on the customer phone" />
              <FeatureListItem text="Works with any existing booking or ticketing system" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Issue tickets in a Folio ready format"
              description="Send us simple JSON or an email you already generate and Folio turns it into a clean digital ticket. No pkpass files, no wallet certificates, no SDKs to integrate."
              align="left"
            />
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FeatureListItem text="No special pass formats or certificates" />
              <FeatureListItem text="Tickets arrive in seconds on the customer phone" />
              <FeatureListItem text="Works with any existing booking or ticketing system" />
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={ticketIssuanceFeatures} 
              alt="Ticket issuance format"
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

      {/* Who Folio is for Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-12 items-start relative min-w-0">
            <SectionHeader
              title="Made for real world operators"
              description="Folio works for any service where customers receive tickets or confirmations by email."
              align="left"
            />
            <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
              <OperatorListItem
                icon={ticketIcon}
                title="Events and venues"
                description="Concerts, festivals, theatres and local venues get modern event tickets that are easy to scan and easy to understand."
              />
              <OperatorListItem
                icon={routeIcon}
                title="Transport operators"
                description="Regional airlines, buses and rail services send simple travel cards with clear times, stops and seat details in one place."
              />
              <OperatorListItem
                icon={cameraIcon}
                title="Tours and activities"
                description="Tours, excursions and attractions keep every booking in one simple view so guests always know where to be and when."
              />
            </div>
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={ticketIssuanceOperators}
              alt="Ticket operators"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-10 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Made for real world operators"
              description="Folio works for any service where customers receive tickets or confirmations by email."
              align="left"
            />
            <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
              <OperatorListItem
                icon={ticketIcon}
                title="Events and venues"
                description="Concerts, festivals, theatres and local venues get modern event tickets that are easy to scan and easy to understand."
              />
              <OperatorListItem
                icon={routeIcon}
                title="Transport operators"
                description="Regional airlines, buses and rail services send simple travel cards with clear times, stops and seat details in one place."
              />
              <OperatorListItem
                icon={cameraIcon}
                title="Tours and activities"
                description="Tours, excursions and attractions keep every booking in one simple view so guests always know where to be and when."
              />
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={ticketIssuanceOperators}
              alt="Ticket operators"
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
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Turn every ticket into a great experience
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                If you deliver tickets or bookings by email, Folio gives your customers a clearer and more reliable experience without changing how you work.
              </p>
            </div>
            <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
              <Button
                variant="primary"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
            <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
              Turn every ticket into a great experience
            </h2>
            <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
              If you deliver tickets or bookings by email, Folio gives your customers a clearer and more reliable experience without changing how you work.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center relative shrink-0">
            <Button
              variant="primary"
            >
              Get in touch
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
      <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base whitespace-pre-wrap">
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
      <div className="flex flex-1 flex-col gap-1 items-start leading-6 relative shrink-0 text-base min-w-0 whitespace-pre-wrap">
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
    <div className="flex flex-1 flex-col gap-2 items-start relative shrink-0 whitespace-pre-wrap">
      <p className="font-bold leading-8 md:leading-[36px] text-2xl md:text-[30px] relative shrink-0 text-[#0a0a0a] w-full">
        {value}
      </p>
      <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
        {description}
      </p>
    </div>
  )
}
