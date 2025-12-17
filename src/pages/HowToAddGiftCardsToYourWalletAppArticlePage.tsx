import BlogArticleLayout from '../components/ui/BlogArticleLayout'
import { ArticleH2, ArticleParagraph } from '../components/ui'
import { Link } from 'react-router-dom'

export default function HowToAddGiftCardsToYourWalletAppArticlePage() {
  return (
    <BlogArticleLayout
      title="How to add gift cards to your wallet app"
      description="Managing physical gift cards can be a hassle. Learn how to store and organize your gift cards digitally in Folio Wallet with simple steps."
      date="Jan 6, 2025"
      category="Product"
      slug="how-to-add-gift-cards-to-your-wallet-app"
    >
      <ArticleParagraph>
        Managing physical gift cards can sometimes be a hassle. They get lost in your wallet, forgotten at home, or damaged over time. <Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</Link>, a secure and easy-to-use app, simplifies this process by allowing you to store and organize your gift cards digitally. With just a few simple steps, your cards will be safely stored and ready whenever you need them.
      </ArticleParagraph>

      <ArticleParagraph>
        Using a digital wallet for gift cards offers several advantages over physical cards. All your gift cards are stored securely in one place, reducing the need for bulky wallets and eliminating the risk of losing or misplacing cards. You can retrieve your gift cards anytime, even offline, so they're always accessible when you're shopping. Digital storage also lets you stay ahead of expiration dates with helpful notifications, so you never miss out on unused balances. Everything is organized, searchable, and ready at your fingertips.
      </ArticleParagraph>

      <ArticleH2>
        Setting up Folio Wallet
      </ArticleH2>

      <ArticleParagraph>
        Before adding gift cards, ensure you have the Folio Wallet app installed on your smartphone. If you're new to the app, the setup process is straightforward. Visit the App Store for iOS or Google Play Store for Android and search for Folio Wallet. Tap "Install" to download the app. Once installed, open the app and select "Sign Up" if you're a new user. Enter your email address, create a strong password, and set up a security code. After signing in, allow camera and notification access for a seamless experience when scanning cards and receiving expiration reminders.
      </ArticleParagraph>

      <ArticleH2>
        Adding your first gift card
      </ArticleH2>

      <ArticleParagraph>
        Once your account is set up, you're ready to add your first gift card. Folio Wallet offers two simple methods: manual entry or scanning. For manual entry, open the Folio Wallet app and tap "Add Card" or the "+" button located on the main screen. Select "Gift Card" from the list of card types. Enter the card details including the gift card brand or store name, card number and PIN if applicable, and expiration date if listed on the card. You can add a label or nickname to personalize the card, such as "Holiday Shopping" or "Coffee Gift Card". Tap "Save" and your card is now securely stored in the wallet.
      </ArticleParagraph>

      <ArticleParagraph>
        For a faster process, you can scan the barcode directly from your physical gift card. Tap "Add Card" or the "+" button on the home screen, then choose "Gift Card" which activates the built-in scanner. If prompted, allow the app to use your phone's camera. Align the card within the scanning frame, ensuring good lighting and a clear view of the barcode. The app will automatically detect and extract the card information. Verify all details are correct and finish the process. This method is particularly useful when you have multiple cards to add quickly.
      </ArticleParagraph>

      <ArticleH2>
        Managing and using your gift cards
      </ArticleH2>

      <ArticleParagraph>
        Once your gift cards are added, managing them becomes effortless. Open the Folio Wallet app and tap the stored gift card to display the barcode at checkout. The app organizes your cards clearly, making it easy to find what you need quickly. When you have many cards stored, use the search bar to find a specific gift card by name or category. Folio Wallet can notify you about expiring cards, so you never miss out on unused balances. This automatic tracking means you'll always know when to use your cards before they expire.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio Wallet prioritizes the safety of your personal information. With advanced encryption and strict data protection policies, your gift cards and sensitive data remain secure. The app uses industry-standard security measures to protect your information, ensuring that your card details are safe from unauthorized access. For more information on security features, you can read our complete guide on Folio Wallet security.
      </ArticleParagraph>

      <ArticleParagraph>
        Adding and managing gift cards has never been easier with Folio Wallet. By following the simple steps outlined in this guide, you can reduce wallet clutter, stay organized, and enjoy a more convenient shopping experience. All your cards are accessible from your phone, organized clearly, and protected securely. Download the app today and keep all your cards at your fingertips.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
