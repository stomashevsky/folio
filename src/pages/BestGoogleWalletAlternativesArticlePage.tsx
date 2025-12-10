import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function BestGoogleWalletAlternativesArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: 'The best Google Wallet alternatives you can install in 2025 | Folio Blog',
    description: 'Google Wallet is great, but it\'s not enough. Discover seven powerful alternatives that fill Wallet\'s gaps: secure document storage, multi-currency payments, and automated trip planning.',
    ogTitle: 'The best Google Wallet alternatives you can install in 2025',
    ogDescription: 'Google Wallet is great, but it\'s not enough. Discover seven powerful alternatives that fill Wallet\'s gaps: secure document storage, multi-currency payments, and automated trip planning.',
    ogUrl: 'https://folio.id/blog/best-google-wallet-alternatives'
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
                <p className="relative shrink-0 text-[#0a0a0a]">May 26, 2025</p>
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
                  The best Google Wallet alternatives you can install in 2025
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Google Wallet is great, but it's not enough. Discover seven powerful alternatives that fill Wallet's gaps: secure document storage, multi-currency payments, and automated trip planning.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Google Wallet nails the basics: tap-to-pay at millions of terminals, airline tickets, and rock-solid device-level security. Yet even in 2025 it stumbles on real-world annoyances: it still refuses multi-page PDFs, hides foreign-exchange fees until after you hit "Pay," and locks most passes inside your phone with no way to share them. When you travel, run a side-hustle, or simply collect too many loyalty cards, those blind spots feel bigger every day. The good news? You don't have to rip Wallet out of Android. Think of it as your everyday tap-to-pay engine and layer specialist apps around it, just like adding the right lens to a camera body. The seven options below fill Wallet's largest holes, from encrypted document storage to no-surprise multi-currency spending.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Why people look beyond Google Wallet and how we picked the contenders
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                If any line in that table makes you nod in frustration, the following apps are worth a look. We picked contenders based on these criteria: every app is on Google Play, recently updated, and supported on the latest Android release. Each one fixes at least one of the weaknesses above: document vault, multi-currency support, automated receipts, or itinerary building. None requires you to abandon Google Wallet; most even export passes back into it if you prefer.
              </p>

              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b border-[#e5e5e5]">
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Need</th>
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">What Google Wallet does</th>
                      <th className="text-left py-4 font-semibold text-[#0a0a0a]">Where it falls short</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Travel documents</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Adds single-page boarding passes automatically</td>
                      <td className="py-4 text-[#0a0a0a]">Rejects PDFs, can't alert you before your passport expires</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Multi-currency payments</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Uses your bank card behind the scenes</td>
                      <td className="py-4 text-[#0a0a0a]">FX spread shown only after purchase</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Itinerary management</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Displays each pass separately</td>
                      <td className="py-4 text-[#0a0a0a]">No timeline, no gate alerts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                The best Google Wallet alternatives
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>1. Folio Wallet, the document fortress.</strong> Rating: 4.5 on Google Play. Price: Free. Folio is a zero-knowledge vault for storing passports, visas, medical certificates, insurance documents, and even both sides of your driver's license. All files are encrypted with AES-256, which means only you can access your documents. If you prefer to create an account instead of storing everything on your device, your data is uploaded to our servers in an encrypted format. This level of security comes with a recovery code, something you should never forget in case you lose access and don't remember your password. For organization, you can tag documents, set renewal reminders, and generate secure links to share them with friends and family. Your wallet still can't handle multi-page PDFs or remind you six months before your passport expires. Folio does both in seconds, works fully offline when needed, and displays everything in a neatly organized way. Pro tip: turn on notifications. Folio tracks the expiry dates of all your documents and automatically sets alerts, so you never have to enter a date manually. <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Available on iOS and Android.</a>
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>2. Pass2U Wallet, the wildcard importer.</strong> Rating: 3.6 on Google Play. Price: Free. Pro tier gives you more credits, more slots to store cards and unlimited updates. Pass2U converts any barcode from message or image to Wallet-style pass. Google's own import wizard chokes on Apple-centric passes and gives you zero customisation. Pass2U edits fields, tweaks colours, and restores everything on a new phone in minutes.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>3. Curve, one card to rule your wallet.</strong> Rating: 3.0 on Google Play. Price: Pay tier free; paid tiers available. Curve links all your existing Visa and Mastercard cards to a single plastic (and to Google Wallet for NFC). Buy first, decide later which underlying card will fund the purchase with "Go Back in Time" (up to several months on Pro tiers). You also get fee-free ATM withdrawals abroad and tier-based cashback. Wallet can't aggregate multiple cards into one physical backup, can't move a charge once it's settled, and still hides FX spreads. Curve quotes the rate before you pay and shows the markup by tier.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>4. Wise, transparent multi-currency spending.</strong> Rating: 4.7 on Google Play. Price: Account free; debit card available; low FX fees, no monthly fee. Wise gives you local account numbers in multiple currencies, pays you at the mid-market rate, and lets you hold balances to dodge weekend FX surcharges. Instant push notifications show the exact fee and exchange rate before you tap "Convert," so no more guessing. With Wallet you depend on whatever your bank charges after the fact. Wise guarantees the rate for the transaction and makes reimbursements painless because clients can pay a local bank number.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>5. Revolut, a full neo-bank in your pocket.</strong> Rating: 4.5 on Google Play. Price: Standard free; paid tiers available. Revolut bundles multi-currency accounts, fee-free international transfers, AI-driven budgeting, stock and crypto trading, junior sub-accounts, travel insurance, and single-use virtual cards. Higher tiers waive weekend FX mark-ups and bump ATM limits across thousands of global machines. Wallet is a pass holder; Revolut is practically a bank. You get live spending graphs, travel-related purchase protection, and a built-in concierge on higher tiers.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>6. TripIt, the itinerary brain.</strong> Rating: 4.6 on Google Play. Price: Core free; Pro tier available for real-time flight alerts, seat tracking, and refund monitoring. Forward any confirmation email, flights, hotels, Airbnbs, car rentals, to plans@tripit.com and a master timeline appears instantly. TripIt shows interactive terminal maps, lounge locations, and gate changes even if your SIM is offline. Pro monitors airfare drops and claims refunds on your behalf. Wallet scatters boarding passes by date issued; TripIt shows a single chronological trip with weather forecasts baked in.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>7. Expensify, goodbye to the shoebox of receipts.</strong> Rating: 4.0 on Google Play. Price: Personal use free; paid tiers available. Snap a photo; SmartScan reads the merchant, date, VAT, and total, then auto-matches the expense to the card charge. Reports export to QuickBooks, Xero, or NetSuite in one tap. Paid tiers reimburse staff in multiple currencies and issue cashback corporate cards. Wallet merely stores a photo and leaves the rest to you. Expensify does the data entry, flags policy violations, and auto-approves small claims.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Building your perfect stack
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                No single wallet can, or should, do everything. Mixing two or three of the apps above lets you cover exactly the jobs you need today instead of waiting for Google's roadmap to catch up.
              </p>

              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b border-[#e5e5e5]">
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Scenario</th>
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Apps to combine</th>
                      <th className="text-left py-4 font-semibold text-[#0a0a0a]">Why it works</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Globetrotter</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Folio + TripIt + Wise</td>
                      <td className="py-4 text-[#0a0a0a]">Secure documents + live itinerary + mid-market FX saves money per trip</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Side-hustle freelancer</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Wise + Expensify + Revolut</td>
                      <td className="py-4 text-[#0a0a0a]">Local payment details, instant receipt OCR, and category budgets keep taxes simple</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Family CFO</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Curve + Revolut Junior</td>
                      <td className="py-4 text-[#0a0a0a]">One card for household payments, allowance sub-accounts for kids</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Privacy maximalist</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Folio + Curve + single-use Revolut cards</td>
                      <td className="py-4 text-[#0a0a0a]">Zero-knowledge doc vault, masked underlying cards, disposable online numbers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                The future of digital wallets isn't about pledging loyalty to one brand, it's about assembling a toolkit that mirrors the way you live and work. Keep Google Wallet for frictionless tap-to-pay, but layer specialist apps for documents, rewards, currency, and expenses. The result is more transparency, tighter security, and fewer nasty surprises at checkout. In 2025, the smartest wallet isn't a single icon on your home screen, it's the custom stack that makes your daily money moments feel effortless.
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
        <KeepReadingSection currentArticleSlug="best-google-wallet-alternatives" />
      </main>
      <FooterSection />
    </div>
  )
}
