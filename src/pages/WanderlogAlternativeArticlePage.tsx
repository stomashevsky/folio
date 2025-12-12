import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleBlockquote, ArticleTable } from '../components/ui'

export default function WanderlogAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="Wanderlog alternative: The best app for organizing trips and documents"
      description="Wanderlog helps plan activities. But what about your tickets, passports, and bookings? Discover an app that keeps everything secure and organized."
      date="Sep 23, 2025"
      category="Research"
      slug="wanderlog-alternative"
    >
      <ArticleParagraph>
        Planning a trip can be exciting. It can also be chaos. Scattered tickets. Endless screenshots. Too many apps. That's why many travelers use Wanderlog. It helps create itineraries and keep trips organized. But what if you need more than itineraries? What if you need your documents secure and accessible too?
      </ArticleParagraph>

      <ArticleH2>What is Wanderlog and where it falls short</ArticleH2>

      <ArticleParagraph>
        Wanderlog is a travel planning app. It simplifies building itineraries by putting everything in one place instead of juggling spreadsheets, maps, and notes. Collaborative planning lets friends and family join to edit and share itineraries. Expense tracking keeps tabs on your budget and splits costs between group members. Trip inspiration lets you browse guides and ideas shared by other travelers. Wanderlog is great for brainstorming activities. It works especially well for group travel where communication and cost sharing matter.
      </ArticleParagraph>

      <ArticleParagraph>
        Wanderlog is popular. But it's not perfect for every traveler. Limited document management means it's focused on itineraries, not passports, IDs, or tickets. Basic ticket handling means you still need other apps to retrieve bookings. Security concerns mean no emphasis on encryption or zero-knowledge storage. Complex trips with multiple bookings, flights, or IDs aren't well covered. If you need both travel organization and document security, you need something more.
      </ArticleParagraph>

      <ArticleH2>Folio Wallet: A secure alternative</ArticleH2>

      <ArticleParagraph>
        Folio Wallet is more than a travel planner. It's a digital travel wallet that securely stores your tickets, bookings, and documents alongside everyday essentials like payment cards, loyalty cards, and IDs. Unlike Wanderlog, Folio doesn't just tell you what to do on your trip. It ensures you always have the right document ready at the right moment.
      </ArticleParagraph>

      <ArticleParagraph>
        All-in-one travel organization stores flight tickets, hotel bookings, train passes, event tickets, and more. Everything in one app. Timeline view automatically organizes your documents into a clear trip timeline. You always know what's next. Secure document storage saves digital copies of passports, visas, insurance papers, and IDs. Protected with AES-256 encryption and zero-knowledge architecture.
      </ArticleParagraph>

      <ArticleParagraph>
        Shared travel folders let you create folders for trips and share them securely with family, friends, or colleagues. Offline access means you can open your tickets and bookings without internet. In the air. Underground. Anywhere.
      </ArticleParagraph>

      <ArticleH2>Wanderlog vs Folio Wallet</ArticleH2>

      <ArticleTable
        columns={[
          { header: 'Feature', key: 'feature' },
          { header: 'Wanderlog', key: 'wanderlog' },
          { header: 'Folio Wallet', key: 'folio' },
        ]}
        rows={[
          { feature: 'Trip planning', wanderlog: 'Itinerary builder, guides', folio: 'Timeline view, document-based' },
          { feature: 'Document storage', wanderlog: '~Notes and PDFs only', folio: 'Passports, IDs, tickets, insurance' },
          { feature: 'Collaboration', wanderlog: 'Group planning, budgeting', folio: 'Shared folders with secure access' },
          { feature: 'Expense tracking', wanderlog: '✓', folio: '—' },
          { feature: 'Security', wanderlog: '~Basic', folio: 'AES-256, zero-knowledge, SOC 2' },
          { feature: 'Offline access', wanderlog: '✓', folio: '✓' },
        ]}
      />

      <ArticleParagraph>
        Choose Wanderlog if your main goal is to plan activities, find inspiration, and split costs with friends. Choose <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</a> if you want your tickets, bookings, and documents safe and accessible. All in one place. Protected with real security. Wanderlog helps you plan. Folio ensures you're ready.
      </ArticleParagraph>

      <ArticleBlockquote>
        Your entire trip. Stored in one place. Secure, organized, and easy to share.
      </ArticleBlockquote>
    </BlogArticleLayout>
  )
}
