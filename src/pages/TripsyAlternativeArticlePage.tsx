import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { Link } from 'react-router-dom'
import folioScreensImage from '../assets/images/blog-tripsy-folio-screens.png'

export default function TripsyAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="Tripsy plans your trip. But where do you keep your tickets?"
      description="Tripsy is great for deciding what to do. But once you've booked flights, hotels, and activities, you need somewhere to store them. Here's how the two apps work together."
      date="Sep 20, 2025"
      category="Research"
      slug="tripsy-alternative-travel-app"
    >
      <ArticleParagraph>
        You've planned a perfect Barcelona trip in Tripsy. Day 1: flight from London, check into Hotel Arts, dinner at a tapas place you bookmarked. Day 2: Sagrada Familia in the morning, Gothic Quarter walking tour, flamenco show at night. Day 3: day trip to Tarragona by train, PortAventura in the afternoon. The itinerary looks beautiful. Everything synced to your calendar.
      </ArticleParagraph>

      <ArticleParagraph>
        Then you actually book everything. Now you have a flight confirmation email from British Airways. A hotel booking PDF from Booking.com. Sagrada Familia tickets in another email. Train tickets from Renfe. PortAventura entrance tickets. Each in a different inbox, different format, different place.
      </ArticleParagraph>

      <ArticleParagraph>
        Where do those go?
      </ArticleParagraph>

      <ArticleH2>What Tripsy does well</ArticleH2>

      <ArticleParagraph>
        Tripsy is a genuinely good trip planning app. You build day-by-day itineraries. Add activities, restaurants, sights. See weather forecasts for your travel dates. Share plans with travel companions who can add their own ideas. Everything syncs to your calendar. The interface is beautiful and the planning experience is enjoyable.
      </ArticleParagraph>

      <ArticleParagraph>
        For the "what should we do" phase of trip planning, it's excellent. You can spend hours happily organizing the perfect itinerary, moving things around, optimizing your days.
      </ArticleParagraph>

      <ArticleH2>The gap it doesn't fill</ArticleH2>

      <ArticleParagraph>
        But when you're standing at the boarding gate, you don't need to know what you planned. You need your actual boarding pass. When you arrive at the hotel exhausted, you need the confirmation number. When the museum asks to scan your ticket, you need to find it in your email while the queue grows behind you.
      </ArticleParagraph>

      <ArticleParagraph>
        This is the gap: Tripsy helps you plan, but it doesn't solve the "where's my ticket" problem. You still end up searching through emails at the worst possible moments. You still screenshot boarding passes and lose them in your camera roll. You still forward confirmations to yourself and forget which email you used.
      </ArticleParagraph>

      <ArticleImage
        src={folioScreensImage}
        alt="Folio app showing Barcelona trip timeline with hotel, flights, museum tickets, and train ticket detail with QR code"
      />

      <ArticleH2>What Folio does differently</ArticleH2>

      <ArticleParagraph>
        <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</Link> solves the storage problem. Forward your confirmation emails, import PDFs, photograph paper tickets. Folio extracts the details automatically: dates, times, locations, confirmation numbers. Everything appears on a timeline sorted by when you need it.
      </ArticleParagraph>

      <ArticleParagraph>
        At the gate, your boarding pass is one tap away. At the hotel, the confirmation is right there. At the museum, the QR code is ready to scan. No searching. No "which email was it in?" Everything works offline, so you're not dependent on airport WiFi or expensive roaming data.
      </ArticleParagraph>

      <ArticleParagraph>
        For family trips or groups, shared folders mean everyone has access to the same documents. Both parents can pull up the hotel booking. All four friends have the concert tickets. If someone gets separated or delayed, they're not stranded without information.
      </ArticleParagraph>

      <ArticleH2>Using them together</ArticleH2>

      <ArticleParagraph>
        Tripsy and Folio aren't really competitors. They solve different problems. You can use Tripsy to plan what to do, then Folio to store the tickets once you've booked. Or if you don't need detailed itinerary planning, just use Folio: import your bookings, and it builds a timeline automatically from the ticket details.
      </ArticleParagraph>

      <ArticleParagraph>
        One practical difference: Tripsy costs $39/year for premium features. Folio is free. If you're looking for an alternative because of price, that's a real consideration. But the bigger question is what problem you're actually trying to solve. Planning what to do? Tripsy. Keeping your tickets organized? Folio. Both? Use both.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
