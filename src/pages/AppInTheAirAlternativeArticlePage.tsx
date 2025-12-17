import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleBlockquote, ArticleTable } from '../components/ui'
import { Link } from 'react-router-dom'

export default function AppInTheAirAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="App in the Air alternative: The best option after shutdown"
      description="App in the Air shut down in September 2024. If you relied on it for flight tracking, here's the modern alternative that organizes all your travel documents."
      date="Sep 16, 2025"
      category="Research"
      slug="app-in-the-air-alternative"
    >
      <ArticleParagraph>
        App in the Air was one of the most popular flight tracking apps on the market. For years, travelers relied on it for real-time flight updates, airport maps, and automatic itinerary building. But in September 2024, it shut down. If you used it, you're probably looking for a replacement. Here's what you need to know.
      </ArticleParagraph>

      <ArticleH2>What made App in the Air special</ArticleH2>

      <ArticleParagraph>
        App in the Air focused on the flight experience. It tracked your flights automatically from your email. It notified you about delays, gate changes, and cancellations. It showed airport maps and lounge locations. It synced with your calendar. And it kept a history of every flight you'd ever taken.
      </ArticleParagraph>

      <ArticleParagraph>
        For frequent flyers, it was essential. Real-time flight status. Seat alerts. Baggage tracking. It made traveling smoother. But the service shut down, leaving millions of users without a home for their flight data.
      </ArticleParagraph>

      <ArticleH2>Why travelers are switching to Folio Wallet</ArticleH2>

      <ArticleParagraph>
        Folio Wallet is the modern replacement for App in the Air. It stores all your travel documents in one secure place, including boarding passes, hotel confirmations, and event tickets. But it goes further. You can also store passports, IDs, insurance documents, and cards.
      </ArticleParagraph>

      <ArticleParagraph>
        Travel timeline is built automatically from the tickets and bookings you add. Flights, trains, hotels, and events are organized chronologically. No manual entry. You can import documents from email, PDF, or photo. Multi-purpose storage means it's not just for flights. Store every document you need for travel and life. Shared folders let you share trips with family or colleagues. Everyone stays in sync.
      </ArticleParagraph>

      <ArticleParagraph>
        Offline access ensures your documents are always available, even without internet. And security is top-tier with AES-256 encryption and zero-knowledge architecture. Unlike App in the Air, Folio doesn't just track flights. It protects everything you need when you travel.
      </ArticleParagraph>

      <ArticleH2>App in the Air vs Folio Wallet</ArticleH2>

      <ArticleTable
        columns={[
          { header: 'Feature', key: 'feature' },
          { header: 'App in the Air', key: 'appintheair' },
          { header: 'Folio Wallet', key: 'folio' },
        ]}
        rows={[
          { feature: 'Flight tracking', appintheair: 'Real-time alerts', folio: '~Coming soon' },
          { feature: 'Itinerary from email', appintheair: '✓', folio: '✓' },
          { feature: 'Document storage', appintheair: '~Boarding passes only', folio: 'IDs, passports, insurance, tickets' },
          { feature: 'Offline access', appintheair: '✓', folio: '✓' },
          { feature: 'Airport maps', appintheair: '✓', folio: '—' },
          { feature: 'Security', appintheair: 'Standard', folio: 'AES-256, zero-knowledge, SOC 2' },
          { feature: 'Status', appintheair: '~Shut down', folio: 'Active' },
        ]}
      />

      <ArticleParagraph>
        If you miss App in the Air's flight tracking, real-time alerts are coming to Folio. But right now, <Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</Link> already offers everything else you need: secure document storage, automatic timelines, shared folders, and offline access. It's the natural next step for travelers who want to stay organized.
      </ArticleParagraph>

      <ArticleBlockquote>
        App in the Air is gone. Your travel organization doesn't have to be. Move to Folio Wallet and keep everything secure.
      </ArticleBlockquote>
    </BlogArticleLayout>
  )
}
