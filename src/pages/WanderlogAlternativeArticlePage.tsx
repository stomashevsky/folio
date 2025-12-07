import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui'
import blogWanderlogAlternative from '../assets/images/blog-wanderlog-alternative.png'

export default function WanderlogAlternativeArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: "Wanderlog alternative: The best app for organizing trips and documents | Folio Blog",
    description: "Wanderlog helps plan activities. But what about your tickets, passports, and bookings? Discover an app that keeps everything secure and organized.",
    ogTitle: "Wanderlog alternative: The best app for organizing trips and documents",
    ogDescription: "Wanderlog helps plan activities. But what about your tickets, passports, and bookings? Discover an app that keeps everything secure and organized.",
    ogUrl: 'https://folio.id/blog/wanderlog-alternative'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Sep 23, 2025</p>
                <p className="relative shrink-0 text-[#737373]">Product</p>
              </div>

              {/* Title and subtitle */}
              <div className="flex flex-col gap-4 md:gap-6 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
                <h1 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] min-w-full relative shrink-0 w-[min-content]">
                  Wanderlog alternative: The best app for organizing trips and documents
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Wanderlog helps plan activities. But what about your tickets, passports, and bookings? Discover an app that keeps everything secure and organized.
                </p>
              </div>
            </div>

            {/* Hero image */}
            <div className="w-full">
              <img 
                src={blogWanderlogAlternative} 
                alt="Folio Wallet - Wanderlog alternative" 
                className="w-full rounded-xl aspect-[240/150] object-cover"
              />
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Planning a trip can be exciting. It can also be chaos. Scattered tickets. Endless screenshots. Too many apps.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                That's why many travelers use Wanderlog. It helps create itineraries and keep trips organized.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                But what if you need more than itineraries? What if you need your documents secure and accessible too?
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                What is Wanderlog
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Wanderlog is a travel planning app. It simplifies building itineraries by putting everything in one place instead of juggling spreadsheets, maps, and notes.
              </p>

              <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
                <li><strong>Collaborative planning.</strong> Friends and family can join to edit and share itineraries.</li>
                <li><strong>Expense tracking.</strong> Keep tabs on your budget and split costs between group members.</li>
                <li><strong>Trip inspiration.</strong> Browse guides and ideas shared by other travelers.</li>
              </ul>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Wanderlog is great for brainstorming activities. It works especially well for group travel where communication and cost sharing matter.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Where Wanderlog falls short
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Wanderlog is popular. But it's not perfect for every traveler.
              </p>

              <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
                <li>Limited document management — focused on itineraries, not passports, IDs, or tickets</li>
                <li>Basic ticket handling — you still need other apps to retrieve bookings</li>
                <li>Security concerns — no emphasis on encryption or zero-knowledge storage</li>
                <li>Complex trips — multiple bookings, flights, or IDs aren't well covered</li>
              </ul>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                If you need both travel organization and document security, you need something more.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Folio Wallet: A secure alternative
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio Wallet is more than a travel planner. It's a digital travel wallet that securely stores your tickets, bookings, and documents alongside everyday essentials like payment cards, loyalty cards, and IDs.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Unlike Wanderlog, Folio doesn't just tell you what to do on your trip. It ensures you always have the right document ready at the right moment.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Key features of Folio Wallet
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>All-in-one travel organization.</strong> Store flight tickets, hotel bookings, train passes, event tickets, and more. Everything in one app.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Timeline view.</strong> Your documents automatically organize into a clear trip timeline. You always know what's next.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Secure document storage.</strong> Save digital copies of passports, visas, insurance papers, and IDs. Protected with AES-256 encryption and zero-knowledge architecture.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Shared travel folders.</strong> Create folders for trips and share them securely with family, friends, or colleagues.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Offline access.</strong> Open your tickets and bookings without internet. In the air. Underground. Anywhere.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Wanderlog vs Folio Wallet
              </h2>

              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b border-[#e5e5e5]">
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Feature</th>
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Wanderlog</th>
                      <th className="text-left py-4 font-semibold text-[#0a0a0a]">Folio Wallet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Trip planning</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Itinerary builder, guides</td>
                      <td className="py-4 text-[#0a0a0a]">Timeline view, document-based</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Document storage</td>
                      <td className="py-4 pr-4 text-[#737373]">Notes and PDFs only</td>
                      <td className="py-4 text-[#0a0a0a]">Passports, IDs, tickets, insurance</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Collaboration</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Group planning, budgeting</td>
                      <td className="py-4 text-[#0a0a0a]">Shared folders with secure access</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Expense tracking</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">✓</td>
                      <td className="py-4 text-[#737373]">—</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Security</td>
                      <td className="py-4 pr-4 text-[#737373]">Basic</td>
                      <td className="py-4 text-[#0a0a0a]">AES-256, zero-knowledge, SOC 2</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Offline access</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">✓</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Which app should you choose
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Choose Wanderlog</strong> if your main goal is to plan activities, find inspiration, and split costs with friends.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Choose Folio Wallet</strong> if you want your tickets, bookings, and documents safe and accessible. All in one place. Protected with real security.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Wanderlog helps you plan. Folio ensures you're ready.
              </p>

              <div className="border-l-2 border-[#e5e5e5] pl-6 pr-0 py-0 relative shrink-0 w-full">
                <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap italic">
                  Your entire trip. Stored in one place. Secure, organized, and easy to share.
                </p>
              </div>

              <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full whitespace-pre-wrap">
                <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Available free on iOS and Android.</a>
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
        <KeepReadingSection currentArticleSlug="wanderlog-alternative" />
      </main>
      <FooterSection />
    </div>
  )
}
