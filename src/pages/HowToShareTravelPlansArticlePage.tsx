import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function HowToShareTravelPlansArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: 'How to share your travel plans with friends using a trip planner app | Folio Blog',
    description: 'Planning a trip with others? Discover how trip planner apps make it easy to share itineraries, collaborate, and keep everyone in sync.',
    ogTitle: 'How to share your travel plans with friends using a trip planner app',
    ogDescription: 'Planning a trip with others? Discover how trip planner apps make it easy to share itineraries, collaborate, and keep everyone in sync.',
    ogUrl: 'https://folio.id/blog/how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Jul 18, 2025</p>
                <Link 
                  to="/blog?category=Product" 
                  className="relative shrink-0 text-[#737373] hover:text-[#0a0a0a] hover:underline transition-colors cursor-pointer"
                >
                  Product
                </Link>
              </div>

              {/* Title and subtitle */}
              <div className="flex flex-col gap-4 md:gap-6 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
                <h1 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] min-w-full relative shrink-0 w-[min-content]">
                  How to share your travel plans with friends using a trip planner app
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Planning a trip with others? Discover how trip planner apps make it easy to share itineraries, collaborate, and keep everyone in sync.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                You're planning a trip with friends. Flights booked. Hotels reserved. Activities planned. But everyone keeps asking: what time is the flight? Where are we staying? What's the address? Sharing travel plans shouldn't mean sending screenshots through multiple text messages. Everyone should have the same information. Accessible. Clear. Always up to date.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                How trip planner apps make sharing simple
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                When you travel with others, everyone needs to know the plan. Flight times. Hotel addresses. Restaurant reservations. Meeting points. Without a shared itinerary, confusion happens. Someone arrives at the wrong gate. Another person shows up late because they didn't know the time changed. Plans get lost in email threads. A trip planner app keeps everyone on the same page. One source of truth. Always accessible. Updated in real time.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                The most common way people share travel plans is through email threads and text messages. Forward confirmation emails. Send screenshots. Copy and paste addresses. It works, but it's messy. Information spreads across multiple messages. Updates get buried. People miss important changes. And if someone's offline, they don't see updates at all. There's a better way.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Trip planner apps are built for sharing. You create one itinerary. Everyone gets access. Updates sync automatically. Everyone sees changes instantly. Some apps let you invite collaborators. They can add flights, hotels, activities. Everyone contributes. Everyone stays informed. Others work as a shared timeline. You build the itinerary. Share it as a link. Friends view it on their phone. No app download required.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong><a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a></strong> creates a complete trip timeline from your tickets, bookings, and documents. Forward confirmation emails. Upload PDFs. Take photos. Everything organizes into one clear timeline. Share your trip with a single link. Friends can view the full itinerary on their phone or computer. They see flights, hotels, restaurants, activities. All in chronological order. With dates, times, and addresses. When you update your trip, everyone sees the changes. Add a restaurant reservation. Update a flight time. Change a hotel. The shared link stays current. No one needs to download an app. No one needs an account. Just click the link and see your shared trip.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                The best trip planner apps make sharing effortless. One link to share. No complicated setup. Works on any device. Updates automatically. Your friends shouldn't need to create accounts or download apps. They should be able to view your trip instantly. On their phone. On their laptop. Anywhere. And when plans change, everyone should see updates immediately. No need to send new messages or make phone calls. The shared itinerary updates itself. Planning a trip with friends doesn't have to mean constant texts asking for information. A trip planner app keeps everyone informed and organized. Create your itinerary. Share it with one link. Let everyone access the same plan. Stay in sync. Enjoy your trip. Traveling together should bring you closer, not create confusion. The right app makes all the difference.
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
        <KeepReadingSection currentArticleSlug="how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app" />
      </main>
      <FooterSection />
    </div>
  )
}
