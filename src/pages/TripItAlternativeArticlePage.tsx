import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function TripItAlternativeArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: "TripIt alternative: A smarter way to organize your travels | Folio Blog",
    description: "TripIt keeps your itinerary in order. But what if you need more? Discover an app that stores your bookings, documents, and tickets in one secure place.",
    ogTitle: "TripIt alternative: A smarter way to organize your travels",
    ogDescription: "TripIt keeps your itinerary in order. But what if you need more? Discover an app that stores your bookings, documents, and tickets in one secure place.",
    ogUrl: 'https://folio.id/blog/tripit-alternative'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Sep 12, 2025</p>
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
                  TripIt alternative: A smarter way to organize your travels
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  TripIt keeps your itinerary in order. But what if you need more? Discover an app that stores your bookings, documents, and tickets in one secure place.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                TripIt has been a trusted name in travel planning for years. Forward your booking emails, get an organized itinerary. Simple.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                But travel has evolved. And so have your needs.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                You want more than just flight times and hotel addresses. You want your passport, your insurance, your event tickets, all in one place. Protected. Accessible. Ready when you are.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                What is TripIt
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                TripIt is a travel organizer that creates itineraries from your booking confirmations. Forward an email. Get a trip timeline. It's been doing this well for years.
              </p>

              <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
                <li><strong>Automatic itineraries.</strong> Forward booking emails and TripIt organizes them.</li>
                <li><strong>Calendar sync.</strong> Add trips to your personal calendar.</li>
                <li><strong>Flight alerts.</strong> Get updates on delays and gate changes (Pro version).</li>
                <li><strong>Easy sharing.</strong> Send itineraries to travel companions.</li>
              </ul>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                TripIt works. But it was built for a different era of travel.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Why people look for alternatives
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Modern travelers need more than itinerary management.
              </p>

              <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
                <li>TripIt doesn't store passports, IDs, or insurance documents</li>
                <li>Real-time alerts require a paid subscription</li>
                <li>The interface feels dated compared to newer apps</li>
                <li>Security and encryption aren't the primary focus</li>
              </ul>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                You want an app that keeps everything together. Bookings and documents. Itinerary and identity. All protected with modern security.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Folio Wallet: A modern TripIt alternative
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio Wallet is a digital travel wallet. Not just an itinerary manager. A secure home for everything you need when you travel.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Your flights and hotels. Your train tickets and event passes. Your passport and insurance. All in one beautiful, organized app.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Core features of Folio Wallet
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Comprehensive storage.</strong> Keep flights, trains, hotels, event tickets, IDs, passports, and insurance in one app. Not scattered across emails and folders.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Timeline organization.</strong> Trips are automatically arranged into an easy-to-follow timeline. You always know what comes next.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Multiple upload options.</strong> Forward emails. Upload PDFs. Snap photos. However you want to add documents, Folio handles it.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Secure sharing.</strong> Create shared folders for family or group trips. Manage who sees what. Revoke access anytime.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Offline access.</strong> Open all your travel documents without internet. In the air. Underground. Anywhere.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Real security.</strong> AES-256 encryption. Biometric authentication. Zero-knowledge architecture. Your data stays yours.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                TripIt vs Folio Wallet
              </h2>

              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b border-[#e5e5e5]">
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Feature</th>
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">TripIt</th>
                      <th className="text-left py-4 font-semibold text-[#0a0a0a]">Folio Wallet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Itinerary creation</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">From forwarded emails</td>
                      <td className="py-4 text-[#0a0a0a]">Emails, PDFs, or photos</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Flights and hotels</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">✓</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Trains and buses</td>
                      <td className="py-4 pr-4 text-[#737373]">Limited</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Event tickets</td>
                      <td className="py-4 pr-4 text-[#737373]">Limited</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Passport and ID storage</td>
                      <td className="py-4 pr-4 text-[#737373]">—</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Insurance documents</td>
                      <td className="py-4 pr-4 text-[#737373]">—</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Security</td>
                      <td className="py-4 pr-4 text-[#737373]">Basic</td>
                      <td className="py-4 text-[#0a0a0a]">AES-256, biometric, zero-knowledge</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Sharing</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Pro plan</td>
                      <td className="py-4 text-[#0a0a0a]">Free with access control</td>
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
                <strong>Choose TripIt</strong> if you only need basic itinerary management and don't mind keeping documents elsewhere.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Choose <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a></strong> if you want everything in one place: bookings, documents, tickets. All protected with real security.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Travel is complicated enough. Your travel app shouldn't be.
              </p>

              <div className="border-l-2 border-[#e5e5e5] pl-6 pr-0 py-0 relative shrink-0 w-full">
                <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap italic">
                  One app. Every document. Complete peace of mind.
                </p>
              </div>
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
        <KeepReadingSection currentArticleSlug="tripit-alternative" />
      </main>
      <FooterSection />
    </div>
  )
}
