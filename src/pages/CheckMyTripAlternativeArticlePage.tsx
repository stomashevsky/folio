import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleBlockquote, ArticleTable } from '../components/ui'
import { Link } from 'react-router-dom'

export default function CheckMyTripAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="CheckMyTrip alternative: A smarter way to manage your travel"
      description="CheckMyTrip organizes your bookings. But what about your passport, insurance, and event tickets? Discover an app that stores everything in one secure place."
      date="Sep 18, 2025"
      category="Research"
      slug="checkmytrip-alternative"
    >
      <ArticleParagraph>
        CheckMyTrip has been a reliable tool for travelers who want their itinerary in one place. You forward your booking confirmations, and it creates an organized trip timeline. But CheckMyTrip focuses mainly on bookings. What if you also need your passport, insurance documents, or event tickets organized? You need something more complete.
      </ArticleParagraph>

      <ArticleH2>What CheckMyTrip offers</ArticleH2>

      <ArticleParagraph>
        CheckMyTrip is an itinerary management app powered by Amadeus, a major travel technology company. It pulls together flight, hotel, and car rental bookings into a single view. You get real-time flight updates, terminal and gate information, and weather forecasts. It syncs with your calendar and works offline. For simple trip organization, it works well.
      </ArticleParagraph>

      <ArticleH2>Where CheckMyTrip falls short</ArticleH2>

      <ArticleParagraph>
        CheckMyTrip is built around bookings from travel providers. It doesn't support general document storage. You can't store your passport, visa, or travel insurance. You can't add tickets from sources that aren't in its system. Security is standard, not exceptional. And sharing is limited. If you travel with complex itineraries or need secure document storage, CheckMyTrip leaves gaps.
      </ArticleParagraph>

      <ArticleH2>Folio Wallet: A complete CheckMyTrip alternative</ArticleH2>

      <ArticleParagraph>
        Folio Wallet combines itinerary organization with secure document storage. Your trips are organized automatically. And every document you need for travel lives in one encrypted vault.
      </ArticleParagraph>

      <ArticleParagraph>
        Travel timeline is built from your tickets and bookings. Flights. Hotels. Trains. Events. All organized chronologically. Document vault stores passports, IDs, driver's licenses, visas, insurance papers, and more. Protected with AES-256 encryption and zero-knowledge architecture.
      </ArticleParagraph>

      <ArticleParagraph>
        Flexible import lets you add documents from email, PDF, or photo. Folio extracts the details automatically. Shared folders let you share trip documents securely with travel companions. Everyone stays in sync.
      </ArticleParagraph>

      <ArticleH2>CheckMyTrip vs Folio Wallet</ArticleH2>

      <ArticleTable
        columns={[
          { header: 'Feature', key: 'feature' },
          { header: 'CheckMyTrip', key: 'checkmytrip' },
          { header: 'Folio Wallet', key: 'folio' },
        ]}
        rows={[
          { feature: 'Trip itinerary', checkmytrip: 'From booking confirmations', folio: 'From any ticket or document' },
          { feature: 'Flight updates', checkmytrip: '✓', folio: '~Coming soon' },
          { feature: 'Document storage', checkmytrip: '—', folio: 'IDs, passports, insurance, tickets' },
          { feature: 'PDF & photo import', checkmytrip: '~Limited', folio: '✓' },
          { feature: 'Offline access', checkmytrip: '✓', folio: '✓' },
          { feature: 'Security', checkmytrip: 'Standard', folio: 'AES-256, zero-knowledge, SOC 2' },
          { feature: 'Shared folders', checkmytrip: '~Limited', folio: '✓' },
        ]}
      />

      <ArticleParagraph>
        Choose CheckMyTrip if you only need basic itinerary management from booking confirmations. Choose <Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</Link> if you want your entire travel life organized and protected. Bookings, documents, tickets, and IDs. All in one secure place.
      </ArticleParagraph>

      <ArticleBlockquote>
        Your bookings. Your documents. Your entire trip. Organized and secure. In one app.
      </ArticleBlockquote>
    </BlogArticleLayout>
  )
}
