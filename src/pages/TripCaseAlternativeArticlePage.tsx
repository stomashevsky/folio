import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'
import blogTripCaseAlternative from '../assets/images/blog-tripcase-alternative.png'

export default function TripCaseAlternativeArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: "TripCase alternative: The travel organizer you'll love | Folio Blog",
    description: "TripCase is gone. Your next trip doesn't have to be chaos. Meet the app that keeps every flight, hotel, and document in one beautiful place.",
    ogTitle: "TripCase alternative: The travel organizer you'll love",
    ogDescription: "TripCase is gone. Your next trip doesn't have to be chaos. Meet the app that keeps every flight, hotel, and document in one beautiful place.",
    ogUrl: 'https://folio.id/blog/tripcase-alternative'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Sep 4, 2025</p>
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
                  TripCase alternative: The travel organizer you'll love
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  TripCase is gone. Your next trip doesn't have to be chaos. Meet the app that keeps every flight, hotel, and document in one beautiful place.
                </p>
              </div>
            </div>

            {/* Hero image */}
            <div className="w-full">
              <img 
                src={blogTripCaseAlternative} 
                alt="Folio Wallet - TripCase alternative" 
                className="w-full rounded-xl aspect-[3/2] object-cover"
              />
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                For years, TripCase was the go-to app for travelers who wanted to keep their trips organized. It pulled together your flights, hotels, and car rentals into one clean itinerary. Simple. Reliable. Loved by millions.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                On April 1, 2025, TripCase shut down. And if you're reading this, you're probably looking for what comes next.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                We have an answer.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                What made TripCase special
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                TripCase understood something important: travel is complicated. But checking your itinerary shouldn't be.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Forward a confirmation email. Get an organized trip. That was the magic.
              </p>

              <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
                <li>Automatic itinerary building from emails</li>
                <li>Real-time flight alerts</li>
                <li>Gate and terminal updates</li>
                <li>Works on any device</li>
              </ul>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Millions of travelers relied on it. Then it was gone.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                What travelers actually want
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                We listened to thousands of travelers searching for a TripCase alternative. The message was clear.
              </p>

              <div className="border-l-2 border-[#e5e5e5] pl-6 pr-0 py-0 relative shrink-0 w-full">
                <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap italic">
                  "I just want one place for everything. My flights. My hotels. My passport. My tickets. All of it."
                </p>
              </div>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Not five apps. One.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Introducing Folio Wallet
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio Wallet doesn't just replace TripCase. It reimagines what a travel app can be.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Think of it as a digital wallet for your entire journey. Boarding passes. Hotel confirmations. Event tickets. Even your passport and ID. Everything lives in one beautiful, organized space.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>You add your documents. We do the rest.</strong>
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Everything in one place
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Add a PDF. Snap a photo. Forward an email. However you want to add it, Folio handles it.
              </p>

              <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
                <li><strong>Flight tickets:</strong> boarding passes, e-tickets, confirmations</li>
                <li><strong>Hotels:</strong> reservations and booking details</li>
                <li><strong>Transportation:</strong> trains, buses, rental cars</li>
                <li><strong>Events:</strong> concert tickets, museum passes, experiences</li>
                <li><strong>Documents:</strong> passport, ID, travel insurance</li>
              </ul>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Every document is instantly recognized. Key details are extracted. Your trip timeline builds itself.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Share with anyone
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Traveling with family? Planning a group trip? Share a folder with your travel companions. They see the same organized itinerary on their phone. Real-time. Always in sync.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                No more forwarding emails. No more "Did you get the hotel confirmation?" texts.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Works offline
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                No Wi-Fi at the airport? Roaming turned off? Doesn't matter. Your documents are always there when you need them.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                TripCase vs. Folio Wallet
              </h2>

              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b border-[#e5e5e5]">
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Feature</th>
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">TripCase</th>
                      <th className="text-left py-4 font-semibold text-[#0a0a0a]">Folio Wallet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Itinerary from emails</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">✓</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">PDF & photo uploads</td>
                      <td className="py-4 pr-4 text-[#737373]">Limited</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">ID & passport storage</td>
                      <td className="py-4 pr-4 text-[#737373]">—</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Folder sharing</td>
                      <td className="py-4 pr-4 text-[#737373]">Followers only</td>
                      <td className="py-4 text-[#0a0a0a]">Full collaboration</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Offline access</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">✓</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Auto-organized timeline</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">✓</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Ready for your next trip
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                TripCase was great. But the way we travel has changed. We need more than an itinerary. We need a single place for everything.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Download <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a>. Add your first trip. See how it feels to be organized.</strong>
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
        <KeepReadingSection currentArticleSlug="tripcase-alternative" />
      </main>
      <FooterSection />
    </div>
  )
}
