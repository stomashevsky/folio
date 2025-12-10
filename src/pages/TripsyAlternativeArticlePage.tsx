import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function TripsyAlternativeArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: "Tripsy alternative: A smarter way to organize your travels | Folio Blog",
    description: "Looking beyond Tripsy? Discover a travel app that keeps your documents secure, your itinerary clear, and your journey stress-free.",
    ogTitle: "Tripsy alternative: A smarter way to organize your travels",
    ogDescription: "Looking beyond Tripsy? Discover a travel app that keeps your documents secure, your itinerary clear, and your journey stress-free.",
    ogUrl: 'https://folio.id/blog/tripsy-alternative-travel-app'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Sep 20, 2025</p>
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
                  Tripsy alternative: A smarter way to organize your travels
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Looking beyond Tripsy? Discover a travel app that keeps your documents secure, your itinerary clear, and your journey stress-free.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Planning a trip involves a lot of moving parts. Flights. Hotels. Activities. Transfers. Documents. And somehow, you need to keep track of it all. That's where travel apps come in. And Tripsy has been one of the most popular choices for years.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                But what if you want something different? Something that focuses on security, privacy, and keeping every important document in one place? Let's explore.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                What is Tripsy
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Tripsy is a beautifully designed travel app. It helps you organize every detail of your journey in one place. Instead of scattered emails and random notes, Tripsy brings everything together into a clear itinerary. Flights. Hotels. Sightseeing. All arranged in chronological order.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Tripsy has earned its reputation for good reasons. Day-by-day planning lets you build detailed schedules with everything synced to your calendar. Real-time flight updates notify you about delays, gate changes, and cancellations. Weather forecasts show what to pack with a 10-day forecast built into your itinerary. Collaboration features let you share trips with friends and family, assign roles, and plan together. Your entire trip stays accessible offline without an internet connection. And travel stats track how many countries you've visited and days you've spent traveling. It's intuitive. It's visually appealing. And it makes planning feel enjoyable.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Folio Wallet: The best Tripsy alternative
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                While Tripsy excels at trip planning, some travelers need something more. An alternative that focuses on document security. Safe storage. And absolute clarity. That's Folio Wallet. Think of it as a digital vault for your entire journey. Not just an itinerary planner. A secure home for everything you need when you travel.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio Wallet offers document and card storage for passports, ID cards, driver's licenses, travel insurance, boarding passes, hotel confirmations, and bank cards. All in one secure place. Smart travel timeline automatically extracts details from PDFs, photos, or forwarded confirmation emails and builds a clear timeline. No manual entry needed. Everything is accessible offline, whether you're in the air, on a mountain, or in a foreign country with no signal.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Expiration reminders alert you before your passport or travel insurance expires, so you never get caught off guard. Top-notch security includes AES-256 encryption, zero-knowledge architecture, Face ID and Touch ID, GDPR compliance, and SOC 2 certification. Your data stays yours. Cloud backup and sync let you access your wallet across all your devices, with everything staying encrypted. Secure sharing lets you create shared folders for group trips, share with a link, and manage or revoke access anytime.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                If Tripsy is the creative planner, Folio Wallet is the secure vault. It guarantees peace of mind. Every essential document, from boarding passes to travel insurance, lives in your pocket. Encrypted. Ready when you need it. Folio is especially valuable if you worry about losing printed tickets or IDs during a trip, want one app for both travel and personal documents, or need strong privacy protection while traveling abroad.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Tripsy vs Folio Wallet
              </h2>

              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b border-[#e5e5e5]">
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Feature</th>
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Tripsy</th>
                      <th className="text-left py-4 font-semibold text-[#0a0a0a]">Folio Wallet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Itinerary planning</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Detailed day-by-day planner</td>
                      <td className="py-4 text-[#0a0a0a]">Auto-built from tickets</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Collaboration</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Invite friends, assign roles</td>
                      <td className="py-4 text-[#0a0a0a]">Shared folders with access control</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Flight updates</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Real-time notifications</td>
                      <td className="py-4 text-[#737373]">Coming soon</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Document storage</td>
                      <td className="py-4 pr-4 text-[#737373]">Secondary feature</td>
                      <td className="py-4 text-[#0a0a0a]">Core focus</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Offline access</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">✓</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Security</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">iCloud + SSL + biometrics</td>
                      <td className="py-4 text-[#0a0a0a]">AES-256, SOC2, GDPR, zero-knowledge</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Price</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Free + $39/year</td>
                      <td className="py-4 text-[#0a0a0a]">Free</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Best for</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Trip planning</td>
                      <td className="py-4 text-[#0a0a0a]">Secure document management</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Choose Tripsy if you want a trip planning app that creates beautiful itineraries, syncs with your calendar, and lets you collaborate with friends. Choose <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a> if you want an app that focuses on security, privacy, and storing every important travel document in one place. Or use both. Tripsy for planning. Folio Wallet for security. Together, they cover everything.
              </p>

              <div className="border-l-2 border-[#e5e5e5] pl-6 pr-0 py-0 relative shrink-0 w-full">
                <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap italic">
                  Your documents. Your passport. Your tickets. All in one secure place. Ready when you are.
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
        <KeepReadingSection currentArticleSlug="tripsy-alternative-travel-app" />
      </main>
      <FooterSection />
    </div>
  )
}
