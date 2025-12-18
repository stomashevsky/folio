import { Link } from 'react-router-dom'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import folioGiftCard from '../assets/images/blog-apple-gift-card-folio-screen.png'

export default function AppleGiftCardAddToWalletArticlePage() {
  return (
    <BlogArticleLayout
      title="Apple gift card add to wallet: a step-by-step guide"
      description="Learn how to add your Apple gift card to the Wallet app. Follow simple steps to streamline payments and track balances on your iPhone."
      date="Oct 2, 2024"
      category="Product"
      slug="apple-gift-card-add-to-wallet"
    >
      <ArticleParagraph>
        You received an Apple gift card and want to add it to your iPhone's Wallet app for easy access. The good news: it takes about 30 seconds. The catch: Apple gift cards work differently than you might expect. Here's exactly how to do it, plus what to do if your gift card doesn't fit Apple's system.
      </ArticleParagraph>

      <ArticleH2>How to add an Apple gift card to Apple Wallet</ArticleH2>

      <ArticleParagraph>
        Apple gift cards can be added to your Apple Account balance, which then appears in Apple Wallet. Here's the process:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Step 1:</strong> Open the App Store on your iPhone. Tap your profile icon in the top right corner.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Step 2:</strong> Tap "Redeem Gift Card or Code." You can either use your camera to scan the card or enter the code manually.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Step 3:</strong> Once redeemed, the balance is added to your Apple Account. Open the Wallet app to see your Apple Account balance displayed alongside your other cards.
      </ArticleParagraph>

      <ArticleParagraph>
        That balance now works for App Store purchases, Apple Music, iCloud storage, and Apple Store purchases. At checkout, your Apple Account balance is used automatically before charging other payment methods.
      </ArticleParagraph>

      <ArticleH2>What Apple Wallet won't accept</ArticleH2>

      <ArticleParagraph>
        Here's where it gets tricky. Apple Wallet stores your Apple Account balance, but it doesn't accept gift cards from other retailers. That Starbucks gift card, Amazon card, or Target card you received? Apple Wallet has no way to add them. You're left with screenshots, photos in your camera roll, or carrying the physical cards.
      </ArticleParagraph>

      <ArticleParagraph>
        Even some Apple-related cards cause confusion. Apple Store gift cards (the physical ones for hardware) work the same way as digital Apple gift cards. But third-party gift cards purchased from Apple, like those for other retailers, follow each retailer's own system.
      </ArticleParagraph>

      <ArticleH2>Using Folio for all your gift cards</ArticleH2>

      <ArticleParagraph>
        <strong>Folio</strong> solves the limitation Apple Wallet has: it stores gift cards from any retailer, not just Apple. Amazon, Starbucks, Target, Best Buy, restaurant chains: add them all in one place. The app works on both iOS and Android, so you're not locked into one ecosystem.
      </ArticleParagraph>

      <ArticleImage
        src={folioGiftCard}
        alt="Folio app showing gift card with barcode, hidden PIN code, balance tracking, and options to share or organize"
      />

      <ArticleParagraph>
        Adding a gift card to Folio takes seconds: tap the + icon, select Any Document, then scan the card with your camera, choose an existing photo, or enter the details manually. Folio extracts the barcode automatically so you can show it at checkout. Set expiration dates and get reminders before cards expire, so you never lose value on forgotten cards.
      </ArticleParagraph>

      <ArticleParagraph>
        Security is where Folio differs from storing cards as photos. Everything is encrypted end-to-end and protected with passkeys and biometric authentication. Your gift card PINs stay hidden until you need them. If you lose your phone, your cards remain protected. <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Available free on iOS and Android.</Link>
      </ArticleParagraph>

      <ArticleH2>Troubleshooting Apple gift card issues</ArticleH2>

      <ArticleParagraph>
        If your Apple gift card won't redeem, check a few things. First, make sure you're entering the code correctly: it's the 16-character code on the back, not the card number. Second, verify the card hasn't already been redeemed by checking your Apple Account balance in Settings → your name → Payment & Shipping. Third, ensure your iOS is up to date, as older versions occasionally have redemption bugs.
      </ArticleParagraph>

      <ArticleParagraph>
        For cards that show as already redeemed but you never used them, contact Apple Support with your proof of purchase. Gift card fraud exists, and Apple can investigate cards that were compromised before you received them.
      </ArticleParagraph>

      <ArticleParagraph>
        The bottom line: Apple Wallet handles Apple gift cards well once you understand they become account balance rather than stored cards. For everything else, Folio keeps all your gift cards organized, secure, and ready to use regardless of which retailer issued them.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
