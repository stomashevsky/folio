import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function AccessYourDigitalWalletAnywhereArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: 'Access your digital wallet anywhere | Folio Blog',
    description: 'A simpler way to keep every document with you on iOS and Android',
    ogTitle: 'Access your digital wallet anywhere',
    ogDescription: 'A simpler way to keep every document with you on iOS and Android',
    ogUrl: 'https://folio.id/blog/access-your-digital-wallet-anywhere'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Jul 1, 2025</p>
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
                  Access your digital wallet anywhere
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  A simpler way to keep every document with you on iOS and Android
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio Wallet on iOS and Android is designed to eliminate the stress of managing documents during travel, everyday errands or busy workdays. It brings everything together in one secure place, instantly accessible on any device you use. What used to be hidden inside bulky PDFs or scattered across email threads now appears as clean, structured cards that are ready at a glance. From passports and residence permits to hotel bookings, flight tickets and payment cards, every document becomes effortless to read and even easier to find.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Open Folio and you step into a space where everything is already organized. Personal IDs, tickets, bookings and cards are arranged into simple visual categories so you always know where each item lives. Adding new documents takes only a moment. Upload a PDF from your phone, import files from mail apps, drop images from your gallery or send them through AirDrop or messaging apps. Folio extracts the important details automatically and transforms them into a neatly formatted card.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Travel documents with exceptional clarity
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Travel documents receive exceptional clarity. Your boarding passes, train tickets, event entries and hotel stays are displayed as bright, structured cards with readable times, routes, barcodes and QR codes. Hotel bookings include check-in and check-out windows, room types and full addresses. Transportation tickets highlight departure stations, platforms, seat numbers and class, all color coded for comfort and confidence in the moment.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Your IDs are treated with the same attention. Passports, identity cards, residence permits, driver licenses and payment cards appear in a unified layout with encrypted storage on your device. Expiry dates are tracked automatically and reminders arrive ahead of time so renewals never catch you by surprise.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Stay ready for what is ahead
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio helps you stay ready for what is ahead. The Timeline view builds a chronological schedule from all your tickets and bookings. Flights, hotels, attractions and transfers fit together into a single, flowing plan without any manual work. Documents can also be translated instantly. If you receive a reservation in another language, Folio turns it into a version you can read easily while keeping the original structure intact. Perfect for international trips where clarity matters most.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Shared folders make coordination simple. Whether you travel with friends, plan family vacations or manage documents for someone else, everyone sees the same set of shared items while private documents remain private. And because Folio works on both iOS and Android, your documents are always with you. Open your wallet on your phone or tablet, switch devices whenever you want and everything stays synced. Smart alerts notify you when upcoming trips approach or when important documents are about to expire.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio is built to make document management feel effortless. No clutter, no searching, no zooming through PDF pages. Just a digital wallet that quietly organizes the most important parts of your life so you can focus on the experience, not the paperwork. <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Available free on iOS and Android.</a>
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
        <KeepReadingSection currentArticleSlug="access-your-digital-wallet-anywhere" />
      </main>
      <FooterSection />
    </div>
  )
}
