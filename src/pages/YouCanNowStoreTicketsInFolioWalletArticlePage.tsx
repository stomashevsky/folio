import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function YouCanNowStoreTicketsInFolioWalletArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: 'You can now store tickets in Folio Wallet | Folio Blog',
    description: 'Many of you already use Folio Wallet as a convenient place to keep your cards and personal documents. Now you can also store all of your travel-related paperwork in the same space.',
    ogTitle: 'You can now store tickets in Folio Wallet',
    ogDescription: 'Many of you already use Folio Wallet as a convenient place to keep your cards and personal documents. Now you can also store all of your travel-related paperwork in the same space.',
    ogUrl: 'https://folio.id/blog/you-can-now-store-tickets-in-folio-wallet'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Jun 18, 2025</p>
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
                  You can now store tickets in Folio Wallet
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Many of you already use Folio Wallet as a convenient place to keep your cards and personal documents. Now you can also store all of your travel-related paperwork in the same space.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio Wallet has always been about keeping your essential documents organized. Your cards. Your IDs. Your passports. Everything in one secure place. Now it does something new. It organizes your entire trip.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                How it works
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Add any travel document. Folio Wallet recognizes it and organizes it automatically. Flight tickets. Train tickets. Hotel bookings. Event tickets. Upload a PDF or photo. Forward a confirmation email. Folio Wallet recognizes key details, places each document in the correct order and presents the whole trip at a glance. You can then open any item instantly when you need it.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Features to test
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Smart recognition</strong> lets you upload several documents from the same trip. Folio Wallet uses AI to capture key information and build a single timeline. It works even for multi-leg trips or if you've booked tickets for several people. <strong>Timeline view</strong> shows your entire journey on one screen, in chronological order. Key details are visible at a glance. QR codes and barcodes are ready for boarding, event entry, and more. Tap a card to view the original ticket or additional details.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>In any language</strong> means you can try uploading tickets issued in a language you don't understand. Folio Wallet extracts the essentials, so nothing gets lost in translation. <strong>Offline access</strong> works even if you've just landed and don't have an internet connection yet. <strong>Shared folders</strong> let you create a folder and share it with friends or family. Everyone sees the same trip information without needing to send endless screenshots.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Coming next: automatic email synchronisation will make each new trip appear by itself as soon as the confirmation email arrives. You can already forward tickets manually. More formats are on the way. At present the app supports images and PDFs. Support for PKPass files is coming soon.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                While developing and testing this feature, several team members used it during their real trips: flights from Genoa to London with passes for London Tech Week, a business trip from Copenhagen to Istanbul and back, and a multi-leg train trip in Europe including Hungary, Austria and Italy. Travel storage is a new area for Folio Wallet, and we hope you find it useful. Send us your feedback, feature requests, or simply successfully created timelines at support@folio.id. We'd love to hear from you. <strong>Download <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a>. Add your first trip. See how it feels to be organized.</strong>
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
        <KeepReadingSection currentArticleSlug="you-can-now-store-tickets-in-folio-wallet" />
      </main>
      <FooterSection />
    </div>
  )
}
