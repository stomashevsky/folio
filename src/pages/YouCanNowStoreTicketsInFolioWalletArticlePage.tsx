import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import storeTicketsImage from '../assets/images/blog-store-tickets-folio.png'

export default function YouCanNowStoreTicketsInFolioWalletArticlePage() {
  return (
    <BlogArticleLayout
      title="Bus, train, concert. Three tickets from three apps. Where's the barcode?"
      description="Real trips have tickets scattered everywhere. Here's how to stop searching at every gate."
      date="Jun 18, 2025"
      category="Product"
      slug="you-can-now-store-tickets-in-folio-wallet"
    >
      <ArticleParagraph>
        You're taking a bus from Valencia to Benidorm. Then a train from Barcelona to Tarragona. That evening, you have tickets to a show in Dubai. Each ticket came from a different place: the bus company's PDF, Renfe's confirmation email, an event booking site. Three tickets, three sources, three different formats.
      </ArticleParagraph>

      <ArticleParagraph>
        At the bus station, you scroll through your photos looking for the right screenshot. At the train platform, you search your email for "Renfe" and wait for the PDF to load. At the venue, you open the ticketing app, but it needs to connect to the server first. The queue moves. People wait behind you.
      </ArticleParagraph>

      <ArticleH2>One app, all your tickets</ArticleH2>

      <ArticleParagraph>
        <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</LocalizedLink> keeps all your tickets in one place. Bus, train, flight, concert, museum, theme park. Forward the confirmation email, upload the PDF, or take a photo. The app extracts the details: departure time, seat number, booking reference. The barcode or QR code is displayed prominently, ready to scan.
      </ArticleParagraph>

      <ArticleImage
        src={storeTicketsImage}
        alt="Folio app showing three tickets: ALSA bus from Valencia to Benidorm with barcode, Renfe train from Barcelona to Tarragona with QR code for 2 passengers, and La Perle event ticket in Dubai with seat info and QR code"
      />

      <ArticleH2>No searching at the gate</ArticleH2>

      <ArticleParagraph>
        Open the app, tap the ticket you need. The barcode is right there. No scrolling through camera roll. No waiting for email to load. No app that needs to sync before showing your pass. Works offline: your ticket is on your phone, not on a server you need to reach.
      </ArticleParagraph>

      <ArticleH2>Group tickets in one view</ArticleH2>

      <ArticleParagraph>
        Traveling with someone? Train bookings often include multiple passengers on one confirmation. Folio shows both seats: who's in 12 (window) and who's in 18 (middle). Event tickets show section, row, and seat for each person. One screen, everyone's info visible.
      </ArticleParagraph>

      <ArticleH2>How to add tickets</ArticleH2>

      <ArticleParagraph>
        Forward any confirmation email to your Folio inbox. Upload a PDF from your files. Take a photo of a paper ticket. The app recognizes the ticket type, extracts dates and times, and organizes everything chronologically. Your bus at 13:15 appears before your train at 09:00 the next day, which appears before your concert at 19:00.
      </ArticleParagraph>

      <ArticleParagraph>
        Tickets in languages you don't speak work too. The app extracts the essential details regardless of whether the confirmation is in Spanish, German, or Arabic. You see departure time, seat, and barcode without needing to understand every word on the original document.
      </ArticleParagraph>

      <ArticleParagraph>
        Stop searching at every gate. Put your tickets somewhere you can find them.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
