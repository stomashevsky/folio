import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleTable, ArticleImage } from '../components/ui'
import { Link } from 'react-router-dom'
import blogTripCaseAlternativeScreens from '../assets/images/blog-tripcase-alternative-screens.png'

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
        On April 1, 2025, TripCase shut down for good. If you were one of the millions who relied on it to organize travel, you probably discovered this the hard way: you opened the app before a trip and found nothing. All those confirmation emails you'd forwarded over the years, the neatly organized itineraries, the flight details you'd saved. Gone.
      </ArticleParagraph>

      <ArticleParagraph>
        TripCase was owned by Sabre, one of the largest travel technology companies in the world. They decided to focus on their core business: B2B travel marketplaces and agency partnerships. Consumer apps like TripCase didn't fit that strategy anymore. So they pulled the plug, leaving travelers to figure out what comes next.
      </ArticleParagraph>

      <ArticleH2>What TripCase did well</ArticleH2>

      <ArticleParagraph>
        TripCase solved a real problem. You'd forward a confirmation email, and it would parse the details into a clean itinerary. Flights, hotels, car rentals, all organized by trip. It tracked gate changes and delays. It synced with your calendar. For business travelers especially, it was the one app that kept everything together.
      </ArticleParagraph>

      <ArticleParagraph>
        But TripCase had limitations that became more obvious over time. It was primarily an itinerary viewer, not a document wallet. It could tell you that you had a "Flight to Barcelona at 8:25am" but it couldn't store the actual boarding pass with the barcode you need to scan at the gate. Your passport scan, travel insurance, and event tickets had to live somewhere else.
      </ArticleParagraph>

      <ArticleH2>What TripCase couldn't do</ArticleH2>

      <ArticleParagraph>
        The email-parsing approach worked for flights and hotels that send standardized confirmations. It struggled with everything else. Local train tickets, concert tickets, museum reservations, Airbnb bookings with complex check-in instructions: these often required manual entry or didn't work at all.
      </ArticleParagraph>

      <ArticleParagraph>
        Sharing was limited to "followers" who could view your trip but not contribute to it. If you were planning a group trip and needed everyone to have access to the same hotel confirmation or the door code for the rental, TripCase couldn't help. And if you lost your phone without a backup, your travel history disappeared with it.
      </ArticleParagraph>

      <ArticleH2>What a modern travel wallet looks like</ArticleH2>

      <ArticleParagraph>
        The best TripCase replacement isn't just an itinerary app. It's a complete travel wallet that stores the actual tickets and documents you need, organized into a timeline you can access anywhere.
      </ArticleParagraph>

      <ArticleImage 
        src={blogTripCaseAlternativeScreens} 
        alt="Folio Wallet showing a trip timeline with hotel, flight, attractions, and train bookings, plus a detailed flight ticket with barcode"
      />

      <ArticleParagraph>
        <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio Wallet</Link> takes this approach. Add a flight, and you get the full ticket with scannable barcode, passenger details, seat assignment, baggage allowance, and booking reference. Add a hotel, and the confirmation with check-in instructions stays accessible offline. Add an event ticket, train pass, or museum reservation, and it joins your timeline with all the details you need when you arrive.
      </ArticleParagraph>

      <ArticleParagraph>
        Beyond tickets, you can store your passport, driver's license, travel insurance, and vaccination records. Everything syncs across devices with end-to-end encryption. Shared folders let travel companions access the same documents, so nobody's stuck asking "can you forward me the hotel confirmation?" at midnight.
      </ArticleParagraph>

      <ArticleH2>TripCase vs Folio Wallet</ArticleH2>

      <ArticleTable
        columns={[
          { header: 'Feature', key: 'feature' },
          { header: 'TripCase', key: 'tripcase' },
          { header: 'Folio Wallet', key: 'folio' },
        ]}
        rows={[
          { feature: 'Itinerary from emails', tripcase: 'Yes', folio: 'Yes' },
          { feature: 'Actual tickets with barcodes', tripcase: 'No (itinerary only)', folio: 'Yes' },
          { feature: 'Document storage', tripcase: 'No', folio: 'Passport, IDs, insurance' },
          { feature: 'Event tickets', tripcase: 'Limited', folio: 'Full support with QR/barcode' },
          { feature: 'Sharing', tripcase: 'View-only followers', folio: 'Collaborative folders' },
          { feature: 'Offline access', tripcase: 'Yes', folio: 'Yes' },
          { feature: 'Platform', tripcase: 'iOS-focused', folio: 'iOS and Android' },
          { feature: 'Status', tripcase: 'Shut down April 2025', folio: 'Active' },
        ]}
      />

      <ArticleParagraph>
        TripCase was a great itinerary organizer for its time. But travel has changed. You need more than a list of flights and hotels. You need the actual tickets, the documents, and a way to share them with the people you're traveling with. That's what a modern travel wallet provides.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
