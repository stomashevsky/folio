import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { Link } from 'react-router-dom'
import blogOrganizeEventTicketsHero from '../assets/images/blog-organize-event-tickets-hero.png'

export default function OrganizeEventTicketsArticlePage() {
  return (
    <BlogArticleLayout
      title="How to organize all your event tickets in one app"
      description="Stop searching through emails for tickets. Learn how to keep concert, sports, and event tickets organized in one secure app with offline access."
      date="Sep 2, 2025"
      category="Research"
      slug="organize-event-tickets"
    >
      <ArticleParagraph>
        You're standing at the venue entrance, people pushing past you, and you can't find your ticket. It's somewhere in your email, or maybe you screenshotted it, or was it in that event app you downloaded? The line is moving, your phone battery is at 12%, and you're scrolling frantically through hundreds of messages.
      </ArticleParagraph>

      <ArticleParagraph>
        This scenario happens constantly. We buy tickets from dozens of different sources, each with its own delivery method, and they end up scattered everywhere. Finding the right ticket at the right moment shouldn't be stressful, but for most people it is.
      </ArticleParagraph>

      <ArticleImage 
        src={blogOrganizeEventTicketsHero} 
        alt="Digital tickets in Folio Wallet: train ticket, bus ticket, and event ticket with QR codes"
      />

      <ArticleH2>Where your tickets live today</ArticleH2>

      <ArticleParagraph>
        When you buy a ticket today, it could arrive in many different forms:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>PDF attachments</strong>: The classic format. A PDF arrives in your email with a barcode or QR code to scan. Simple, but easily lost in a crowded inbox.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Screenshots</strong>: Many people screenshot their confirmation screens or QR codes. These get buried in photo libraries alongside thousands of other images.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Wallet passes</strong>: Some vendors offer Apple Wallet or Google Wallet passes. These work well but not every ticket seller supports them.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Event apps</strong>: Ticketmaster, Eventbrite, AXS, and dozens of others each have their own apps. Each concert, sports game, or festival might require a different one.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Confirmation emails</strong>: Sometimes the ticket is just the email itself, with a code to show at the door. Good luck finding that email three months after you bought the ticket.
      </ArticleParagraph>

      <ArticleH2>The ticket chaos problem</ArticleH2>

      <ArticleParagraph>
        The real problem isn't any single ticket format. It's that every event uses something different, and there's no single place to see what you've got coming up.
      </ArticleParagraph>

      <ArticleParagraph>
        You buy concert tickets through Ticketmaster, theater tickets through the venue's website, a sports game through an official team app, and festival passes from yet another platform. Each purchase creates a ticket in a different location. Six months later, you can't remember which app has which event.
      </ArticleParagraph>

      <ArticleParagraph>
        Email search becomes your default ticket finder, but it's unreliable. Subject lines vary, confirmation emails don't always contain obvious keywords, and promotional emails from the same senders bury the important ones.
      </ArticleParagraph>

      <ArticleParagraph>
        Screenshots seem like a solution until your photo library has 20,000 images and you're scrolling through vacation photos trying to find a QR code you saved months ago.
      </ArticleParagraph>

      <ArticleParagraph>
        Event apps solve the problem for their own tickets but create another one: phone storage filled with apps you use once or twice a year. Each app wants notifications, each app wants your location, and each app adds another place to check when you're trying to find a ticket.
      </ArticleParagraph>

      <ArticleH2>Why you need a ticket organizer</ArticleH2>

      <ArticleParagraph>
        Having all your tickets in one place changes everything about attending events:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Instant access at the entrance</strong>: Open one app, find your ticket immediately. No searching, no scrolling, no stress while people wait behind you.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>See all upcoming events at a glance</strong>: Know exactly what you have coming up this week, this month, or this year. No forgotten tickets, no missed events.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Offline access when you need it</strong>: Venues often have terrible cell reception. When thousands of people are trying to load tickets at once, networks get overwhelmed. Your tickets should work without internet.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Share tickets easily</strong>: Plans change. Friends join. Having tickets in one organized place makes sharing simple instead of forwarding email chains or trying to explain which app someone needs to download.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Never miss an event</strong>: When tickets are scattered, it's easy to forget about an event until it's too late. A single organized view means you always know what's coming up.
      </ArticleParagraph>

      <ArticleH2>Keeping all your tickets in Folio</ArticleH2>

      <ArticleParagraph>
        <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio Wallet</Link> works as a universal home for all your tickets, regardless of where you bought them or how they were delivered. Here's how to get your tickets into one place:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Import from PDF</strong>: Got a PDF ticket in your email? Open it in Folio, and the app extracts the ticket information and barcode automatically. The PDF stays attached so you can always access the original.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Capture from images</strong>: Screenshot a QR code somewhere? Folio can import tickets from your photo library, extracting the code and event details so you don't have to scroll through photos to find it later.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Forward confirmation emails</strong>: Some tickets arrive as emails with codes or links. Forward these to Folio, and the app pulls out the ticket information automatically.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Direct issuance from organizers</strong>: Event organizers and ticketing platforms can issue tickets directly to Folio. The ticket appears in your wallet instantly after purchase, no extra steps needed.
      </ArticleParagraph>

      <ArticleParagraph>
        Once your tickets are in Folio, they're organized by date with all the details visible: venue, time, seat information, and the scannable code. Everything syncs across your devices, so you can check your upcoming events from your phone or tablet.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio works offline, which matters when venue WiFi is overloaded or you're in a basement with no signal. Your tickets are stored locally and display instantly, even in airplane mode. Biometric protection keeps your tickets secure: only you can open the app and access your passes.
      </ArticleParagraph>

      <ArticleParagraph>
        Concert tickets, sports games, theater performances, conferences, festivals: they all end up in the same place. No more guessing which app has which ticket or searching through email at the worst possible moment.
      </ArticleParagraph>

      <ArticleParagraph>
        Stop fighting with scattered tickets. Keep everything organized in one secure app, and walk into every event knowing exactly where your ticket is.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
