import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { Link } from 'react-router-dom'
import walletOverviewImage from '../assets/images/blog-wallet-overview-folio.png'

export default function AccessYourDigitalWalletAnywhereArticlePage() {
  return (
    <BlogArticleLayout
      title="One app for your passport, tickets, and everything in between"
      description="Your passport is a PDF. Your boarding pass is in email. Your hotel confirmation is a screenshot. Here's a better way."
      date="Jul 1, 2025"
      category="Product"
      slug="access-your-digital-wallet-anywhere"
    >
      <ArticleParagraph>
        Your passport is a PDF somewhere in your Files app. Your boarding pass is an email attachment you'll need to find at the gate. The hotel confirmation is a screenshot buried in your camera roll. Your train ticket is in a different email, from a different booking site, in a different format.
      </ArticleParagraph>

      <ArticleParagraph>
        Each document lives in a different place. When you need one, you search. Sometimes you find it quickly. Sometimes you're standing at the counter, scrolling frantically, while the queue grows behind you.
      </ArticleParagraph>

      <ArticleH2>One place for everything</ArticleH2>

      <ArticleParagraph>
        <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</Link> puts all your documents in one app. IDs: passport, driver's license, residence permit, national ID. Tickets: flights, trains, buses, concerts, museums. Bookings: hotels, restaurants, car rentals. Cards: payment cards, insurance, membership cards, loyalty programs.
      </ArticleParagraph>

      <ArticleParagraph>
        Import from anywhere. Forward a confirmation email, and Folio extracts the ticket details automatically. Upload a PDF, and it becomes a readable card with the important information visible. Take a photo of a paper document, and it gets scanned and structured.
      </ArticleParagraph>

      <ArticleImage
        src={walletOverviewImage}
        alt="Folio app showing passport with all details, bus ticket with barcode ready to scan, and trip timeline with hotels, flights, and activities"
      />

      <ArticleH2>Not PDFs you zoom into</ArticleH2>

      <ArticleParagraph>
        The problem with PDFs is finding the information you need. The barcode is on page 2. The confirmation number is in tiny text at the bottom. The departure time is buried in a paragraph. You zoom in, scroll around, try to find what matters.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio extracts the key details and displays them clearly. Your bus ticket shows the departure time, stations, seat number, and barcode prominently. Your passport shows your name, number, and expiry date without opening a file. Your hotel booking shows check-in time, address, and confirmation number at a glance.
      </ArticleParagraph>

      <ArticleH2>Timeline for travel</ArticleH2>

      <ArticleParagraph>
        When you're traveling, documents have dates. Flight on Tuesday, hotel check-in the same day, museum tickets for Wednesday, train on Thursday. The Timeline view organizes everything chronologically. Open it and see what's coming up next, what documents you'll need today, and what's scheduled for later in the trip.
      </ArticleParagraph>

      <ArticleH2>Shared folders for groups</ArticleH2>

      <ArticleParagraph>
        Traveling with family or friends? Create a shared folder. Everyone with access sees the same documents. Both parents have the hotel confirmation. All four friends have the concert tickets. When one person adds a new booking, everyone sees it immediately. No forwarding emails. No "can you send me that again?"
      </ArticleParagraph>

      <ArticleH2>Works offline</ArticleH2>

      <ArticleParagraph>
        Airport WiFi is unreliable. International data is expensive. The moment you need a document is often the moment you don't have connectivity. Everything in Folio works offline. Your passport, your boarding pass, your hotel confirmation, all accessible without internet.
      </ArticleParagraph>

      <ArticleParagraph>
        Free on iOS and Android. Your documents sync across devices and stay encrypted. One app for everything you used to scatter across emails, screenshots, and downloads.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
