import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function SevenUsefulAppsForPlanningTripArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: '7 useful apps for planning your trip | Folio Blog',
    description: 'From itineraries to expenses: seven apps that make travel planning effortless and keep everything organized.',
    ogTitle: '7 useful apps for planning your trip',
    ogDescription: 'From itineraries to expenses: seven apps that make travel planning effortless and keep everything organized.',
    ogUrl: 'https://folio.id/blog/7-useful-apps-for-planning-your-trip'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="bg-white border-[#e5e5e5] border-b border-l-0 border-r-0 border-solid border-t-0 flex flex-col gap-6 items-center px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start justify-center px-6 md:px-6 py-0 relative shrink-0 w-full max-w-[768px]">
            {/* Meta information and Title */}
            <div className="flex flex-col gap-4 md:gap-5 items-start relative shrink-0 w-full">
              {/* Meta information */}
              <div className="flex flex-wrap gap-4 items-start justify-center leading-5 relative shrink-0 text-sm w-full">
                <p className="relative shrink-0 text-[#0a0a0a]">Aug 20, 2025</p>
                <Link 
                  to="/blog?category=Research" 
                  className="relative shrink-0 text-[#737373] hover:text-[#0a0a0a] hover:underline transition-colors cursor-pointer"
                >
                  Research
                </Link>
              </div>

              {/* Title and subtitle */}
              <div className="flex flex-col gap-4 md:gap-6 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
                <h1 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] min-w-full relative shrink-0 w-[min-content]">
                  7 useful apps for planning your trip
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  From itineraries to expenses: seven apps that make travel planning effortless and keep everything organized.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Planning a trip can feel overwhelming. Tickets to manage. Bookings to track. Routes to optimize. Hidden gems you don't want to miss. The right apps can take the stress out of the process. They help you focus on what matters: enjoying the journey.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Seven apps that make travel planning simple
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Wanderlog</strong> lets you build your itinerary day by day. Add flights, hotels, restaurants, and attractions. See everything on a map. Wanderlog shows you what's nearby. It helps you optimize your route. Perfect for road trips and city breaks.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                More than a place to store boarding passes, <strong><a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a></strong> creates a timeline from your tickets, bookings, and events. You always know what's next. It also keeps your passport, ID, and insurance documents safe. Everything you need for travel. In one secure place.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>TripIt</strong> builds your itinerary automatically when you forward your confirmation emails. Flights, hotels, car rentals. All organized in one master schedule. View it on your phone. Even offline. The premium version adds real-time flight alerts and seat tracking. Perfect for frequent travelers.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                For travelers who like to customize, <strong>Notion</strong> is a flexible workspace. Turn it into a powerful travel planner. Create databases with calendar and timeline views. Add notes. Embed maps. Share plans with travel companions. Make it work the way you want.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Maps.me</strong> offers excellent offline maps. Walking trails. Detailed city layouts. Maps.me works entirely without mobile data. Perfect for remote areas. Or destinations where roaming is expensive. Your maps are always available.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Google Maps (Offline Mode)</strong> is essential for any traveler. Before your trip, download maps of your destination. Access navigation offline. Your saved pins and directions are always ready. Especially useful for public transport info. Find nearby restaurants on the go. Works when you need it most.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Traveling with friends or family? <strong>Splitwise</strong> keeps track of shared expenses. No messy calculations. Just log expenses. The app calculates who owes what. Simple. Fair. Transparent.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Whether you're a meticulous planner or prefer to go with the flow, these apps cover everything. Building itineraries. Navigating offline. Keeping documents safe. Splitting expenses. Pick a few that fit your style. Combine them. You'll have a smoother, more organized travel experience. More time to enjoy the adventure itself.
              </p>
            </div>

            {/* Back to blog button */}
            <div className="pt-8">
              <Button
                variant="secondary"
                onClick={() => navigate('/blog', { state: { restoreScroll: true } })}
                iconPosition="left"
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M7.99967 12.6666L3.33301 7.99992M3.33301 7.99992L7.99967 3.33325M3.33301 7.99992H12.6663" stroke="#171717" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              >
                Back to Blog
              </Button>
            </div>
          </div>

        </section>
        <KeepReadingSection currentArticleSlug="7-useful-apps-for-planning-your-trip" />
      </main>
      <FooterSection />
    </div>
  )
}
