import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, HowToSchema } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import blogOrganizeTicketsBookingsHero from '../assets/images/blog-organize-tickets-bookings-hero.png'

export default function OrganizeTicketsBookingsArticlePage() {
  return (
    <BlogArticleLayout
      title="How to keep all your tickets and bookings in one app"
      description="Flights, trains, hotels, concerts: stop searching through emails. Keep all your travel tickets and bookings organized in one secure app."
      date="Jul 8, 2025"
      category="Research"
      slug="organize-tickets-bookings"
    >
      <HowToSchema
        name="How to organize all your tickets and bookings in one app"
        description="Step-by-step guide to consolidating flights, trains, hotels, and event tickets in a single digital wallet app."
        totalTime="PT10M"
        steps={[
          { name: "Download Folio Wallet", text: "Install Folio Wallet from the App Store or Google Play Store on your smartphone." },
          { name: "Import PDF tickets", text: "Open PDF attachments from confirmation emails in Folio. The app extracts dates, times, and barcodes automatically." },
          { name: "Add screenshots and images", text: "Import QR codes or booking confirmations from your photo library. Folio extracts the relevant booking details." },
          { name: "Forward confirmation emails", text: "Forward booking confirmation emails to your Folio address. The app pulls out booking information automatically." },
          { name: "Review your timeline", text: "All bookings appear organized by date. See your entire trip at a glance: flights, trains, hotels, and events in chronological order." },
          { name: "Access tickets offline", text: "Your tickets work without internet. Open Folio at the airport, train station, or venue to show your QR codes even in airplane mode." },
        ]}
      />
      <ArticleParagraph>
        You're at the airport, scrolling through emails trying to find your boarding pass. You land, take a train to the city, and now you're searching for that train ticket PDF. At the hotel, the receptionist asks for your booking confirmation, and it's somewhere in another email thread. That evening you have concert tickets, but which app were those in again?
      </ArticleParagraph>

      <ArticleParagraph>
        Every trip involves dozens of tickets and confirmations from different sources. Flights from airlines, trains from rail companies, hotels from booking platforms, events from ticketing services. Each one arrives in a different format, lives in a different app or email folder, and needs to be found at exactly the right moment. This scattered approach makes travel more stressful than it needs to be.
      </ArticleParagraph>

      <ArticleImage 
        src={blogOrganizeTicketsBookingsHero} 
        alt="Digital tickets in Folio Wallet: train ticket, bus ticket, and event ticket with QR codes"
      />

      <ArticleH2>Where your tickets and bookings live today</ArticleH2>

      <ArticleParagraph>
        Think about your last trip. Your tickets and confirmations probably came from all these different places:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Flight tickets</strong>: Boarding passes arrive via airline apps, email PDFs, or wallet passes. Each airline has its own app, and if you book through a third party, there's another confirmation email to track.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Train tickets</strong>: Rail operators send PDFs, offer their own apps, or provide QR codes in emails. Cross-border trips often mean different tickets from different rail companies.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Bus tickets</strong>: FlixBus, BlaBlaCar, Greyhound, and regional operators each have their own booking systems. Some send PDFs, others require their app.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Hotel bookings</strong>: Booking.com, Airbnb, Hotels.com, Expedia, or direct hotel reservations. Each platform sends confirmation emails in different formats, and you need the booking reference at check-in.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Event tickets</strong>: Concerts through Ticketmaster, sports games through team apps, theater through venue websites, festivals through their own platforms. Each event lives somewhere different.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Everything else</strong>: Car rentals, tour bookings, museum tickets, restaurant reservations. The list of confirmations you need to track keeps growing.
      </ArticleParagraph>

      <ArticleH2>The booking chaos problem</ArticleH2>

      <ArticleParagraph>
        A simple weekend trip might involve an airline app for your flight, a rail app for the train to the city center, a booking confirmation email for your hotel, and a ticketing app for the concert you're attending. That's four different places to check before you've even started.
      </ArticleParagraph>

      <ArticleParagraph>
        Longer trips multiply the problem. A two-week vacation might include multiple flights, several train journeys, a few different hotels, and various activities. Each booking creates another email to save, another app to download, another confirmation number to remember.
      </ArticleParagraph>

      <ArticleParagraph>
        Email search becomes your travel assistant, but it fails when you need it most. Standing at a hotel desk with slow airport WiFi, searching for a booking confirmation while the receptionist waits. Trying to find a train ticket while the departure time approaches. Looking for concert tickets in a venue with no cell reception.
      </ArticleParagraph>

      <ArticleParagraph>
        The bigger issue is visibility. There's no single view of your entire trip. You can't see all your bookings in one timeline. You can't quickly check what's happening tomorrow or confirm your departure times without opening multiple apps.
      </ArticleParagraph>

      <ArticleH2>Why you need all bookings in one place</ArticleH2>

      <ArticleParagraph>
        Having every ticket and confirmation in a single app transforms how you travel:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Instant access everywhere</strong>: At the airport gate, the train platform, the hotel desk, or the venue entrance, you open one app and find what you need immediately. No searching, no switching between apps.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>See your entire trip at a glance</strong>: A single timeline shows everything: flights, transfers, hotels, activities. You know exactly what's coming up and when.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Offline access when it matters</strong>: Airplane mode, foreign roaming, crowded venues with overloaded networks. Your tickets work without internet because they're stored locally on your device.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Share travel plans easily</strong>: Traveling with others? Share your itinerary or specific bookings without forwarding email chains or explaining which app to download.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Never miss a connection</strong>: When all your bookings are visible together, you spot conflicts and tight connections before they become problems.
      </ArticleParagraph>

      <ArticleH2>Keeping everything in Folio</ArticleH2>

      <ArticleParagraph>
        <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio Wallet</LocalizedLink> works as a universal home for all your tickets and bookings, regardless of where they came from. Here's how to get everything into one place:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Import from PDF</strong>: Most tickets and confirmations arrive as PDF attachments. Open them in Folio, and the app extracts the key information: dates, times, confirmation numbers, and barcodes. The original PDF stays attached.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Capture from images</strong>: Screenshot a QR code or booking confirmation? Import it from your photo library. Folio extracts the relevant details so you don't have to scroll through thousands of photos later.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Forward confirmation emails</strong>: Some bookings are just emails with confirmation codes. Forward them to Folio, and the app pulls out the booking information automatically.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Direct issuance</strong>: Airlines, rail operators, hotels, and event organizers can issue tickets directly to Folio. The booking appears in your wallet instantly after purchase.
      </ArticleParagraph>

      <ArticleParagraph>
        Once everything is in Folio, your bookings are organized by date. You see your flight, then your train, then your hotel, then your evening plans, all in chronological order. Tap any booking to see full details, scan codes, or access the original confirmation.
      </ArticleParagraph>

      <ArticleParagraph>
        Everything syncs across your devices. Check your itinerary on your phone, review details on your tablet, access confirmations from anywhere. And it all works offline: your boarding passes, train tickets, hotel confirmations, and event tickets display instantly even without internet.
      </ArticleParagraph>

      <ArticleParagraph>
        Flights, trains, buses, hotels, concerts, conferences: they all end up in the same place. One app for every ticket and booking, accessible whenever you need it, working even when you're offline.
      </ArticleParagraph>

      <ArticleParagraph>
        Stop searching through emails at airport gates and hotel desks. Keep all your travel organized in one secure app, and focus on enjoying the trip instead of managing the paperwork.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
