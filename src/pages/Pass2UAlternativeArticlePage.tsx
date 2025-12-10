import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function Pass2UAlternativeArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: "Pass2U alternative: A smarter way to organize your passes | Folio Blog",
    description: "Pass2U extends Apple Wallet with custom cards. But what if you need more? Discover an app that organizes all your documents with real security.",
    ogTitle: "Pass2U alternative: A smarter way to organize your passes",
    ogDescription: "Pass2U extends Apple Wallet with custom cards. But what if you need more? Discover an app that organizes all your documents with real security.",
    ogUrl: 'https://folio.id/blog/pass2u-alternative'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Sep 10, 2025</p>
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
                  Pass2U alternative: A smarter way to organize your passes
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Pass2U extends Apple Wallet with custom cards. But what if you need more? Discover an app that organizes all your documents with real security.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Digital wallets have become essential. Boarding passes. Event tickets. Loyalty cards. Everything fits in your phone. But Apple Wallet has limits. It only supports certain types of passes. That's why many turn to Pass2U, an app that lets you create custom cards. What if you want more than custom cards? What if you need real organization, automatic itineraries, and security for all your documents?
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                What is Pass2U and why look for alternatives
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Pass2U Wallet lets iPhone users create and import custom cards into Apple Wallet. Loyalty programs. Coupons. Gift cards. Membership cards. Things Apple Wallet doesn't support by default. Cards work with Apple Wallet and appear alongside your other passes. You can create passes in your own format with custom design. Basic features are available at no cost. Pass2U extends what Apple Wallet can do. But it still lives within Apple's framework.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Pass2U solves one problem. But modern life demands more. No document support means you can't store passports, IDs, or insurance. No organization means cards appear in a flat list with no folders or labels. No travel features means no automatic itineraries or trip timelines. Limited security means Pass2U itself doesn't encrypt your data. Manual work means you design each card yourself, one by one. You need something that goes beyond Apple's ecosystem. Smarter organization. Real security. Everything in one place.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Folio Wallet: A modern Pass2U alternative
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio Wallet isn't tied to Apple Wallet. It's an independent app that organizes all your documents directly. Passes. Tickets. IDs. Insurance. Travel bookings. Everything. No manual card creation. No limitations. Just add your documents and Folio handles the rest.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Automatic recognition extracts details from uploaded tickets, bookings, or IDs and creates clean, organized cards. No design work needed. Travel itineraries build structured trip timelines from forwarded emails or uploaded screenshots, with all your bookings in chronological order. Labels and folders let you sort documents into trips, categories, or personal collections. Find anything instantly.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Real security includes end-to-end encryption, zero-knowledge architecture, biometric login, and SOC 2 and GDPR compliance. Your data stays yours. Cross-platform support works on iOS and Android and syncs across all your devices. Secure sharing lets you share folders with family, friends, or colleagues. Control who sees what. Revoke access anytime.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Pass2U vs Folio Wallet
              </h2>

              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse text-base">
                  <thead>
                    <tr className="border-b border-[#e5e5e5]">
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Feature</th>
                      <th className="text-left py-4 pr-4 font-semibold text-[#0a0a0a]">Pass2U</th>
                      <th className="text-left py-4 font-semibold text-[#0a0a0a]">Folio Wallet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Custom pass creation</td>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Manual design</td>
                      <td className="py-4 text-[#0a0a0a]">Automatic recognition</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Document types</td>
                      <td className="py-4 pr-4 text-[#737373]">Passes only</td>
                      <td className="py-4 text-[#0a0a0a]">All documents</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Travel itineraries</td>
                      <td className="py-4 pr-4 text-[#737373]">—</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Labels and folders</td>
                      <td className="py-4 pr-4 text-[#737373]">—</td>
                      <td className="py-4 text-[#0a0a0a]">✓</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Security</td>
                      <td className="py-4 pr-4 text-[#737373]">Basic</td>
                      <td className="py-4 text-[#0a0a0a]">E2E encryption, SOC 2, GDPR</td>
                    </tr>
                    <tr className="border-b border-[#e5e5e5]">
                      <td className="py-4 pr-4 text-[#0a0a0a]">Cross-platform</td>
                      <td className="py-4 pr-4 text-[#737373]">iOS only</td>
                      <td className="py-4 text-[#0a0a0a]">iOS and Android</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 text-[#0a0a0a]">Sharing</td>
                      <td className="py-4 pr-4 text-[#737373]">—</td>
                      <td className="py-4 text-[#0a0a0a]">Secure shared folders</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Choose Pass2U if you only need to add a few custom cards to Apple Wallet and don't mind the manual work. Choose <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a> if you want automatic organization, real security, and a home for all your documents, not just passes. Pass2U extends Apple Wallet. Folio replaces the need for it entirely.
              </p>

              <div className="border-l-2 border-[#e5e5e5] pl-6 pr-0 py-0 relative shrink-0 w-full">
                <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap italic">
                  Your passes. Your documents. Your life. All in one secure place.
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
        <KeepReadingSection currentArticleSlug="pass2u-alternative" />
      </main>
      <FooterSection />
    </div>
  )
}
