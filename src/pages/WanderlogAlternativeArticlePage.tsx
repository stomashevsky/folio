import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import timelineImage from '../assets/images/blog-wanderlog-timeline.png'

export default function WanderlogAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="Wanderlog plans your trip. But where do you keep the actual tickets?"
      description="Wanderlog is great for deciding what to do. But once you've booked flights, hotels, and activities, you need somewhere to keep them. Here's how the two apps work together."
      date="Aug 23, 2025"
      category="Research"
      slug="wanderlog-alternative"
    >
      <ArticleParagraph>
        You've spent hours in Wanderlog building the perfect Barcelona itinerary. Day one: Sagrada Familia, then tapas at that place with 4.8 stars. Day two: train to Tarragona, PortAventura. You've got the restaurants pinned, the budget split with friends, everything organized beautifully.
      </ArticleParagraph>

      <ArticleParagraph>
        Then you start booking. The flight confirmation lands in your email. The hotel sends a PDF. Sagrada Familia tickets arrive as a separate attachment. The train booking comes from a different provider. Suddenly you have 15 emails, 3 PDFs in your downloads folder, and a screenshot of the hotel address because the confirmation was confusing.
      </ArticleParagraph>

      <ArticleParagraph>
        Fast forward to the airport. You're in the security line, scrolling frantically through email trying to find your boarding pass. Your friend asks for the hotel address. You know you saved it somewhere. The Wanderlog itinerary says "Hotel Arts Barcelona" but doesn't have the actual confirmation with check-in time and booking reference.
      </ArticleParagraph>

      <ArticleParagraph>
        This is the gap between trip planning and trip execution. Wanderlog excels at the first part. For the second, you need something else.
      </ArticleParagraph>

      <ArticleH2>What Wanderlog actually does well</ArticleH2>

      <ArticleParagraph>
        Let's be clear: Wanderlog is genuinely good at what it does. The collaborative itinerary builder lets everyone in your group add ideas, vote on restaurants, and see the plan evolve. The expense tracking solves the awkward "who owes what" problem that plagues every group trip. The inspiration features help you discover places you wouldn't have found on your own.
      </ArticleParagraph>

      <ArticleParagraph>
        If you're in the "where should we go" and "what should we do" phase, Wanderlog is the right tool. It's designed for planning, brainstorming, and coordinating with travel companions. The problem comes when planning ends and traveling begins.
      </ArticleParagraph>

      <ArticleH2>The document problem</ArticleH2>

      <ArticleParagraph>
        Wanderlog can attach notes and PDFs to your itinerary. But it's not built to be a document vault. When you're standing at the Sagrada Familia entrance and need to show your timed-entry ticket, you need that ticket instantly accessible. Not buried in an itinerary. Not as an attachment you have to download.
      </ArticleParagraph>

      <ArticleParagraph>
        Travel documents have specific requirements. They need to work offline because airport WiFi is unreliable. They need to be shareable so your travel partner has the hotel confirmation too. They need to be secure because they contain personal information. And ideally, they should organize themselves so you're not manually sorting through files.
      </ArticleParagraph>

      <ArticleImage 
        src={timelineImage} 
        alt="Folio timeline showing organized travel documents: hotel bookings, flight tickets, entrance tickets, and train reservations sorted by date"
      />

      <ArticleParagraph>
        This is what Folio does. You forward your booking confirmations or import PDF tickets, and they appear on a timeline sorted by date. Hotel in Barcelona from October 10-11. Flight departing 08:25. Sagrada Familia at 15:00. Train to Tarragona the next morning. Everything in order, everything accessible with one tap.
      </ArticleParagraph>

      <ArticleH2>How they work together</ArticleH2>

      <ArticleParagraph>
        The honest answer is that Wanderlog and Folio solve different problems. Wanderlog is for planning. Folio is for storing. You don't have to choose one.
      </ArticleParagraph>

      <ArticleParagraph>
        Use Wanderlog when you're deciding where to stay, what to see, and how to split the Airbnb cost four ways. Browse restaurant recommendations. Build your day-by-day itinerary. Coordinate with your travel group. This is Wanderlog's strength.
      </ArticleParagraph>

      <ArticleParagraph>
        Use <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</LocalizedLink> once you start booking. Forward your flight confirmation. Import your hotel PDF. Add your Sagrada Familia tickets. Create a shared folder so everyone in your group has access to every document. Now when you're in line at security, you tap one app and your boarding pass is there. When your friend needs the hotel address, it's already in their Folio too.
      </ArticleParagraph>

      <ArticleParagraph>
        The real difference is what you're organizing. Wanderlog organizes ideas and plans. Folio organizes actual tickets and bookings. One helps you figure out what to do. The other makes sure you can actually do it when the time comes.
      </ArticleParagraph>

      <ArticleH2>The security question</ArticleH2>

      <ArticleParagraph>
        There's one more consideration. Travel documents aren't just inconvenient to lose. They're sensitive. Your passport copy, your flight booking with personal details, your hotel confirmation with contact information. These are exactly the documents you don't want floating around unsecured.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio encrypts everything on your device before it leaves. The encryption key comes from your Passkey or Recovery Code, something only you have. Even if someone accessed Folio's servers, they'd find encrypted data they can't read. This matters when you're storing passport scans and ID copies alongside your train tickets.
      </ArticleParagraph>

      <ArticleParagraph>
        Wanderlog isn't designed with this level of security in mind because it doesn't need to be. It's storing restaurant recommendations and itinerary notes, not identity documents. Different tools, different requirements.
      </ArticleParagraph>

      <ArticleParagraph>
        So plan your Barcelona trip in Wanderlog. Find the perfect tapas bar, coordinate with friends, split the costs. Then store your actual tickets in Folio. When you're rushing through the airport or standing at the hotel check-in, you'll know exactly where everything is.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
