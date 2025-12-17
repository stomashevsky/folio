import BlogArticleLayout from '../components/ui/BlogArticleLayout'
import { ArticleH2, ArticleParagraph } from '../components/ui'
import { Link } from 'react-router-dom'

export default function YouCanNowStoreTicketsInFolioWalletArticlePage() {
  return (
    <BlogArticleLayout
      title="You can now store tickets in Folio Wallet"
      description="Many of you already use Folio Wallet as a convenient place to keep your cards and personal documents. Now you can also store all of your travel-related paperwork in the same space."
      date="Jun 18, 2025"
      category="Product"
      slug="you-can-now-store-tickets-in-folio-wallet"
    >
      <ArticleParagraph>
        Folio Wallet has always been about keeping your essential documents organized. Your cards. Your IDs. Your passports. Everything in one secure place. Now it does something new. It organizes your entire trip.
      </ArticleParagraph>

      <ArticleH2>
        How it works
      </ArticleH2>

      <ArticleParagraph>
        Add any travel document. Folio Wallet recognizes it and organizes it automatically. Flight tickets. Train tickets. Hotel bookings. Event tickets. Upload a PDF or photo. Forward a confirmation email. Folio Wallet recognizes key details, places each document in the correct order and presents the whole trip at a glance. You can then open any item instantly when you need it.
      </ArticleParagraph>

      <ArticleH2>
        Features to test
      </ArticleH2>

      <ArticleParagraph>
        <strong>Smart recognition</strong> lets you upload several documents from the same trip. Folio Wallet uses AI to capture key information and build a single timeline. It works even for multi-leg trips or if you've booked tickets for several people. <strong>Timeline view</strong> shows your entire journey on one screen, in chronological order. Key details are visible at a glance. QR codes and barcodes are ready for boarding, event entry, and more. Tap a card to view the original ticket or additional details.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>In any language</strong> means you can try uploading tickets issued in a language you don't understand. Folio Wallet extracts the essentials, so nothing gets lost in translation. <strong>Offline access</strong> works even if you've just landed and don't have an internet connection yet. <strong>Shared folders</strong> let you create a folder and share it with friends or family. Everyone sees the same trip information without needing to send endless screenshots.
      </ArticleParagraph>

      <ArticleParagraph>
        Coming next: automatic email synchronisation will make each new trip appear by itself as soon as the confirmation email arrives. You can already forward tickets manually. More formats are on the way. At present the app supports images and PDFs. Support for PKPass files is coming soon.
      </ArticleParagraph>

      <ArticleParagraph>
        While developing and testing this feature, several team members used it during their real trips: flights from Genoa to London with passes for London Tech Week, a business trip from Copenhagen to Istanbul and back, and a multi-leg train trip in Europe including Hungary, Austria and Italy. Travel storage is a new area for Folio Wallet, and we hope you find it useful. Send us your feedback, feature requests, or simply successfully created timelines at support@folio.id. We'd love to hear from you. <strong>Download <Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</Link>. Add your first trip. See how it feels to be organized.</strong>
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
