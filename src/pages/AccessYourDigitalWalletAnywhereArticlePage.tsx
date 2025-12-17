import BlogArticleLayout from '../components/ui/BlogArticleLayout'
import { ArticleH2, ArticleParagraph } from '../components/ui'
import { Link } from 'react-router-dom'

export default function AccessYourDigitalWalletAnywhereArticlePage() {
  return (
    <BlogArticleLayout
      title="Access your digital wallet anywhere"
      description="A simpler way to keep every document with you on iOS and Android"
      date="Jul 1, 2025"
      category="Product"
      slug="access-your-digital-wallet-anywhere"
    >
      <ArticleParagraph>
        Folio Wallet on iOS and Android is designed to eliminate the stress of managing documents during travel, everyday errands or busy workdays. It brings everything together in one secure place, instantly accessible on any device you use. What used to be hidden inside bulky PDFs or scattered across email threads now appears as clean, structured cards that are ready at a glance. From passports and residence permits to hotel bookings, flight tickets and payment cards, every document becomes effortless to read and even easier to find.
      </ArticleParagraph>

      <ArticleParagraph>
        Open Folio and you step into a space where everything is already organized. Personal IDs, tickets, bookings and cards are arranged into simple visual categories so you always know where each item lives. Adding new documents takes only a moment. Upload a PDF from your phone, import files from mail apps, drop images from your gallery or send them through AirDrop or messaging apps. Folio extracts the important details automatically and transforms them into a neatly formatted card.
      </ArticleParagraph>

      <ArticleH2>
        Travel documents with exceptional clarity
      </ArticleH2>

      <ArticleParagraph>
        Travel documents receive exceptional clarity. Your boarding passes, train tickets, event entries and hotel stays are displayed as bright, structured cards with readable times, routes, barcodes and QR codes. Hotel bookings include check-in and check-out windows, room types and full addresses. Transportation tickets highlight departure stations, platforms, seat numbers and class, all color coded for comfort and confidence in the moment.
      </ArticleParagraph>

      <ArticleParagraph>
        Your IDs are treated with the same attention. Passports, identity cards, residence permits, driver licenses and payment cards appear in a unified layout with encrypted storage on your device. Expiry dates are tracked automatically and reminders arrive ahead of time so renewals never catch you by surprise.
      </ArticleParagraph>

      <ArticleH2>
        Stay ready for what is ahead
      </ArticleH2>

      <ArticleParagraph>
        Folio helps you stay ready for what is ahead. The Timeline view builds a chronological schedule from all your tickets and bookings. Flights, hotels, attractions and transfers fit together into a single, flowing plan without any manual work. Documents can also be translated instantly. If you receive a reservation in another language, Folio turns it into a version you can read easily while keeping the original structure intact. Perfect for international trips where clarity matters most.
      </ArticleParagraph>

      <ArticleParagraph>
        Shared folders make coordination simple. Whether you travel with friends, plan family vacations or manage documents for someone else, everyone sees the same set of shared items while private documents remain private. And because Folio works on both iOS and Android, your documents are always with you. Open your wallet on your phone or tablet, switch devices whenever you want and everything stays synced. Smart alerts notify you when upcoming trips approach or when important documents are about to expire.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio is built to make document management feel effortless. No clutter, no searching, no zooming through PDF pages. Just a digital wallet that quietly organizes the most important parts of your life so you can focus on the experience, not the paperwork. <Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Available free on iOS and Android.</Link>
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
