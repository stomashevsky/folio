import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import liveUpdatesImage from '../assets/images/blog-app-in-the-air-live-updates.png'

export default function AppInTheAirAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="App in the Air shut down. Here's where frequent flyers are going instead."
      description="After years of tracking flights for millions of travelers, App in the Air is gone. If you're looking for a replacement that does even more, Folio Wallet is the answer."
      date="Aug 26, 2025"
      category="Research"
      slug="app-in-the-air-alternative"
    >
      <ArticleParagraph>
        In September 2024, App in the Air went dark. No warning. No migration path. Just a shutdown notice and millions of travelers suddenly without the app they'd relied on for years. If you were one of them, you remember the feeling: all those flight records, all that history, gone.
      </ArticleParagraph>

      <ArticleParagraph>
        App in the Air did something simple but valuable. It watched your email, found your flight confirmations, and built your itinerary automatically. It told you when gates changed. It warned you about delays. It tracked your boarding pass barcode so you could board without fumbling through emails. For frequent flyers, it felt like having a personal travel assistant.
      </ArticleParagraph>

      <ArticleParagraph>
        Now it's gone, and most alternatives miss the point. They're either too simple (just a calendar with flights) or too complicated (full trip planning suites when you just want to know if your flight's on time). <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio Wallet</LocalizedLink> takes a different approach: it starts with your documents.
      </ArticleParagraph>

      <ArticleH2>What Folio does differently</ArticleH2>

      <ArticleParagraph>
        The insight behind Folio is that flight tracking is just one piece of travel. You also have hotel confirmations, train tickets, event passes, rental car vouchers, passport copies, travel insurance, vaccination records. App in the Air handled the flights. Everything else lived in scattered emails, PDFs, and screenshots.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio stores all of it. Import a boarding pass from email or forward a confirmation. Add your passport by scanning it. Drop in your travel insurance PDF. Everything lands in one place, organized automatically. Flights, trains, and hotels appear on a timeline sorted by date. No manual entry. No copying details between apps.
      </ArticleParagraph>

      <ArticleParagraph>
        Shared folders solve the group travel problem. Create a folder for a family trip, invite everyone, and all the documents stay in sync. When someone's flight changes, everyone sees it. When the hotel confirmation arrives, it's there for whoever needs it at check-in.
      </ArticleParagraph>

      <ArticleH2>Live flight updates are coming</ArticleH2>

      <ArticleParagraph>
        The one thing Folio doesn't do yet is real-time flight tracking. The feature App in the Air users miss most: the notifications about delays, gate changes, and arrival times. That's changing. Live updates are coming to Folio, and here's what it will look like:
      </ArticleParagraph>

      <ArticleImage 
        src={liveUpdatesImage} 
        alt="Folio flight ticket with live updates showing real-time departure and arrival times, gate information, and status"
      />

      <ArticleParagraph>
        Your boarding pass will show live status directly on the ticket: departure and arrival times updating in real-time, gate information as soon as it's assigned, and clear indicators when flights are on time or delayed. Gate arrival recommendations help you know exactly when to head to your gate. No need to check a separate app or dig through airline websites.
      </ArticleParagraph>

      <ArticleH2>Why security matters more than you think</ArticleH2>

      <ArticleParagraph>
        App in the Air had access to your email to parse flight confirmations. When it shut down, that connection just... stopped. But your travel data had already passed through their servers.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio works differently. Your documents are encrypted before they leave your device. We can't read them, even if we wanted to. The encryption key is derived from your Passkey or Recovery Code, something only you have. If Folio ever shut down, your documents remain encrypted, unreadable to anyone without your key.
      </ArticleParagraph>

      <ArticleParagraph>
        For travel documents especially, this matters. Passport copies, ID scans, visa documents: these are exactly what identity thieves look for. Having them scattered across email accounts and random apps creates risk. Having them encrypted in one place, protected by keys only you control, eliminates it.
      </ArticleParagraph>

      <ArticleH2>Making the switch</ArticleH2>

      <ArticleParagraph>
        If you're moving from App in the Air, here's the reality: you can't import your old data. It's gone with the service. But you can start fresh with better habits. Forward your next flight confirmation to Folio. Scan your passport. Add your travel insurance. In a few trips, you'll have a complete, secure travel document collection.
      </ArticleParagraph>

      <ArticleParagraph>
        The timeline builds itself. Every flight, train, hotel, and event you add appears in chronological order. When you're traveling, open Folio and see exactly what's next. Tap to show your boarding pass. Swipe to check your hotel confirmation. Everything works offline, so airport WiFi problems don't strand you.
      </ArticleParagraph>

      <ArticleParagraph>
        App in the Air proved that travelers want their documents organized and accessible. Folio takes that further: not just flights, but everything. Not just organized, but secure. And soon, not just stored, but live-updating. If you miss what App in the Air gave you, <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</LocalizedLink> is where frequent flyers are landing.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
