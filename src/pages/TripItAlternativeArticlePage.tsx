import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleBlockquote, ArticleTable } from '../components/ui'
import { Link } from 'react-router-dom'

export default function TripItAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="TripIt alternative: A smarter way to organize your travels"
      description="TripIt keeps your itinerary in order. But what if you need more? Discover an app that stores your bookings, documents, and tickets in one secure place."
      date="Sep 12, 2025"
      category="Research"
      slug="tripit-alternative"
    >
      <ArticleParagraph>
        For travelers who want to stay organized, TripIt has been a popular choice. It creates itineraries from your booking confirmations. It syncs with your calendar. It keeps your travel plans accessible and tidy. But what happens when you need more than a simple itinerary? What if you want a secure vault for your documents too?
      </ArticleParagraph>

      <ArticleH2>What TripIt does well</ArticleH2>

      <ArticleParagraph>
        TripIt simplifies travel organization. You forward your confirmation emails, and it builds a detailed itinerary. You can view flight times, hotel addresses, rental car info, and restaurant reservations in one place. TripIt Pro adds real-time alerts for delays, gate changes, and cancellations. It syncs with your calendar and shares trip details with others. For many travelers, this is exactly what they need.
      </ArticleParagraph>

      <ArticleH2>Where TripIt falls short</ArticleH2>

      <ArticleParagraph>
        TripIt is an itinerary app. Not a document vault. You can store your flight details, but not your passport scan. You can track your hotel booking, but not your travel insurance policy. If you want to keep digital copies of IDs, visas, or tickets alongside your itinerary, TripIt doesn't offer that. You'll need a second app. Or a folder of screenshots. Neither is ideal. TripIt also struggles with group travel. Sharing a trip means giving others a view of your plans. It doesn't offer secure collaborative folders or fine-grained access control.
      </ArticleParagraph>

      <ArticleH2>Folio Wallet: A secure TripIt alternative</ArticleH2>

      <ArticleParagraph>
        Folio Wallet combines the best of travel organization with secure document storage. You get a smart timeline for your trips. You also get a digital vault for every important document in your life.
      </ArticleParagraph>

      <ArticleParagraph>
        Travel timeline is automatically generated from the tickets and bookings you add. Flights. Hotels. Trains. Events. Everything is arranged chronologically and accessible anytime. Document storage includes passports, ID cards, visas, travel insurance, driver's licenses, and more. All stored with AES-256 encryption and zero-knowledge architecture. Your data stays yours.
      </ArticleParagraph>

      <ArticleParagraph>
        Shared folders let you create secure spaces for group trips. Share documents with family or colleagues. Control who sees what. Everything syncs across devices. Offline access means your documents are always there when you need them, even without internet. In the air. Underground. Abroad. And expiration alerts notify you before any document expires. Passports. Insurance. IDs.
      </ArticleParagraph>

      <ArticleH2>TripIt vs Folio Wallet</ArticleH2>

      <ArticleTable
        columns={[
          { header: 'Feature', key: 'feature' },
          { header: 'TripIt', key: 'tripit' },
          { header: 'Folio Wallet', key: 'folio' },
        ]}
        rows={[
          { feature: 'Trip itinerary', tripit: 'Email parsing, calendar sync', folio: 'Auto-timeline from tickets' },
          { feature: 'Document storage', tripit: '~Itinerary only', folio: 'Full vault: IDs, passports, insurance' },
          { feature: 'Collaboration', tripit: 'Trip sharing', folio: 'Secure shared folders' },
          { feature: 'Flight alerts', tripit: '✓ (Pro)', folio: '~Coming soon' },
          { feature: 'Offline access', tripit: '✓', folio: '✓' },
          { feature: 'Security', tripit: 'Standard encryption', folio: 'AES-256, zero-knowledge, SOC 2' },
          { feature: 'Price', tripit: 'Free / $49/year Pro', folio: 'Free' },
        ]}
      />

      <ArticleParagraph>
        Choose TripIt if you only need an itinerary builder and value real-time flight alerts. Choose <Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</Link> if you want both travel organization and secure document storage in one place. TripIt keeps your trips tidy. Folio keeps your entire travel life secure.
      </ArticleParagraph>

      <ArticleBlockquote>
        Your itinerary. Your documents. Your tickets. All protected. All in one place.
      </ArticleBlockquote>
    </BlogArticleLayout>
  )
}
