import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function HowToAddGiftCardsToYourWalletAppArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: 'How to add gift cards to your wallet app | Folio Blog',
    description: 'Managing physical gift cards can be a hassle. Learn how to store and organize your gift cards digitally in Folio Wallet with simple steps.',
    ogTitle: 'How to add gift cards to your wallet app',
    ogDescription: 'Managing physical gift cards can be a hassle. Learn how to store and organize your gift cards digitally in Folio Wallet with simple steps.',
    ogUrl: 'https://folio.id/blog/how-to-add-gift-cards-to-your-wallet-app'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Jan 6, 2025</p>
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
                  How to add gift cards to your wallet app
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Managing physical gift cards can be a hassle. Learn how to store and organize your gift cards digitally in Folio Wallet with simple steps.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Managing physical gift cards can sometimes be a hassle. They get lost in your wallet, forgotten at home, or damaged over time. <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a>, a secure and easy-to-use app, simplifies this process by allowing you to store and organize your gift cards digitally. With just a few simple steps, your cards will be safely stored and ready whenever you need them.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Using a digital wallet for gift cards offers several advantages over physical cards. All your gift cards are stored securely in one place, reducing the need for bulky wallets and eliminating the risk of losing or misplacing cards. You can retrieve your gift cards anytime, even offline, so they're always accessible when you're shopping. Digital storage also lets you stay ahead of expiration dates with helpful notifications, so you never miss out on unused balances. Everything is organized, searchable, and ready at your fingertips.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Setting up Folio Wallet
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Before adding gift cards, ensure you have the Folio Wallet app installed on your smartphone. If you're new to the app, the setup process is straightforward. Visit the App Store for iOS or Google Play Store for Android and search for Folio Wallet. Tap "Install" to download the app. Once installed, open the app and select "Sign Up" if you're a new user. Enter your email address, create a strong password, and set up a security code. After signing in, allow camera and notification access for a seamless experience when scanning cards and receiving expiration reminders.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Adding your first gift card
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Once your account is set up, you're ready to add your first gift card. Folio Wallet offers two simple methods: manual entry or scanning. For manual entry, open the Folio Wallet app and tap "Add Card" or the "+" button located on the main screen. Select "Gift Card" from the list of card types. Enter the card details including the gift card brand or store name, card number and PIN if applicable, and expiration date if listed on the card. You can add a label or nickname to personalize the card, such as "Holiday Shopping" or "Coffee Gift Card". Tap "Save" and your card is now securely stored in the wallet.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                For a faster process, you can scan the barcode directly from your physical gift card. Tap "Add Card" or the "+" button on the home screen, then choose "Gift Card" which activates the built-in scanner. If prompted, allow the app to use your phone's camera. Align the card within the scanning frame, ensuring good lighting and a clear view of the barcode. The app will automatically detect and extract the card information. Verify all details are correct and finish the process. This method is particularly useful when you have multiple cards to add quickly.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Managing and using your gift cards
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Once your gift cards are added, managing them becomes effortless. Open the Folio Wallet app and tap the stored gift card to display the barcode at checkout. The app organizes your cards clearly, making it easy to find what you need quickly. When you have many cards stored, use the search bar to find a specific gift card by name or category. Folio Wallet can notify you about expiring cards, so you never miss out on unused balances. This automatic tracking means you'll always know when to use your cards before they expire.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio Wallet prioritizes the safety of your personal information. With advanced encryption and strict data protection policies, your gift cards and sensitive data remain secure. The app uses industry-standard security measures to protect your information, ensuring that your card details are safe from unauthorized access. For more information on security features, you can read our complete guide on Folio Wallet security.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Adding and managing gift cards has never been easier with Folio Wallet. By following the simple steps outlined in this guide, you can reduce wallet clutter, stay organized, and enjoy a more convenient shopping experience. All your cards are accessible from your phone, organized clearly, and protected securely. Download the app today and keep all your cards at your fingertips.
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
        <KeepReadingSection currentArticleSlug="how-to-add-gift-cards-to-your-wallet-app" />
      </main>
      <FooterSection />
    </div>
  )
}
