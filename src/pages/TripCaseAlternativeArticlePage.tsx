import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleBlockquote, ArticleTable } from '../components/ui'
import { Link } from 'react-router-dom'

export default function TripCaseAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="TripCase alternative: The travel organizer you'll love"
      description="TripCase is gone. Your next trip doesn't have to be chaos. Meet the app that keeps every flight, hotel, and document in one beautiful place."
      date="Sep 4, 2025"
      category="Research"
      slug="tripcase-alternative"
    >
      <ArticleParagraph>
        For years, TripCase was the go-to app for travelers who wanted to keep their trips organized. It pulled together your flights, hotels, and car rentals into one clean itinerary. Simple. Reliable. Loved by millions. TripCase understood something important: travel is complicated. But checking your itinerary shouldn't be. Forward a confirmation email. Get an organized trip. That was the magic. Automatic itinerary building from emails. Real-time flight alerts. Gate and terminal updates. Works on any device. Millions of travelers relied on it.
      </ArticleParagraph>

      <ArticleParagraph>
        On April 1, 2025, TripCase shut down. And if you're reading this, you're probably looking for what comes next. We listened to thousands of travelers searching for a TripCase alternative. The message was clear.
      </ArticleParagraph>

      <ArticleBlockquote>
        "I just want one place for everything. My flights. My hotels. My passport. My tickets. All of it."
      </ArticleBlockquote>

      <ArticleParagraph>
        Not five apps. One. We have an answer.
      </ArticleParagraph>

      <ArticleH2>Introducing Folio Wallet</ArticleH2>

      <ArticleParagraph>
        Folio Wallet doesn't just replace TripCase. It reimagines what a travel app can be. Think of it as a digital wallet for your entire journey. Boarding passes. Hotel confirmations. Event tickets. Even your passport and ID. Everything lives in one beautiful, organized space. You add your documents. We do the rest.
      </ArticleParagraph>

      <ArticleH2>Key features</ArticleH2>

      <ArticleParagraph>
        Add a PDF. Snap a photo. Forward an email. However you want to add it, Folio handles it. Every document is instantly recognized. Key details are extracted. Your trip timeline builds itself. You can store flight tickets (boarding passes, e-tickets, confirmations), hotels (reservations and booking details), transportation (trains, buses, rental cars), events (concert tickets, museum passes, experiences), and documents (passport, ID, travel insurance).
      </ArticleParagraph>

      <ArticleParagraph>
        Traveling with family? Planning a group trip? Share a folder with your travel companions. They see the same organized itinerary on their phone. Real-time. Always in sync. No more forwarding emails. No more "Did you get the hotel confirmation?" texts.
      </ArticleParagraph>

      <ArticleParagraph>
        No Wi-Fi at the airport? Roaming turned off? Doesn't matter. Your documents are always there when you need them. Folio works fully offline, so you can access everything even when you've just landed and don't have an internet connection yet.
      </ArticleParagraph>

      <ArticleH2>TripCase vs. Folio Wallet</ArticleH2>

      <ArticleTable
        columns={[
          { header: 'Feature', key: 'feature' },
          { header: 'TripCase', key: 'tripcase' },
          { header: 'Folio Wallet', key: 'folio' },
        ]}
        rows={[
          { feature: 'Itinerary from emails', tripcase: '✓', folio: '✓' },
          { feature: 'PDF & photo uploads', tripcase: '~Limited', folio: '✓' },
          { feature: 'ID & passport storage', tripcase: '—', folio: '✓' },
          { feature: 'Folder sharing', tripcase: '~Followers only', folio: 'Full collaboration' },
          { feature: 'Offline access', tripcase: '✓', folio: '✓' },
          { feature: 'Auto-organized timeline', tripcase: '✓', folio: '✓' },
        ]}
      />

      <ArticleParagraph>
        TripCase was great. But the way we travel has changed. We need more than an itinerary. We need a single place for everything. <strong>Download <Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</Link>. Add your first trip. See how it feels to be organized.</strong>
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
