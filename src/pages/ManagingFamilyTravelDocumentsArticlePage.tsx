import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import folioScreensImage from '../assets/images/blog-family-travel-folio-screens.png'

export default function ManagingFamilyTravelDocumentsArticlePage() {
  return (
    <BlogArticleLayout
      title="The airport nightmare every parent knows (and how to avoid it)"
      description="You're at security with two kids, a stroller, and four passports somewhere in your bag. There's a better way to travel with family."
      date="Aug 7, 2025"
      category="Guides"
      slug="managing-family-travel-documents"
    >
      <ArticleParagraph>
        You're at the airline counter. Your toddler is trying to escape the stroller. Your older kid needs the bathroom. The agent asks for passports. You know they're in the bag, but which bag? The carry-on? Your partner's backpack? The one pocket you definitely put them in but can't find now? The line behind you grows. Your partner is dealing with the luggage cart. The toddler starts crying.
      </ArticleParagraph>

      <ArticleParagraph>
        Every parent who's traveled with kids knows this moment. The scramble through bags. The "I thought you had them." The rising stress when you can't find what you need exactly when you need it.
      </ArticleParagraph>

      <ArticleH2>The real problem isn't organization</ArticleH2>

      <ArticleParagraph>
        You're organized at home. You have a folder with all the passports. You printed the confirmations. You forwarded the booking emails to yourself. The problem isn't preparation. It's access under pressure.
      </ArticleParagraph>

      <ArticleParagraph>
        When you're managing kids, luggage, and airport chaos simultaneously, you need to find the right document for the right person in seconds. Not "let me search my email." Not "it's in the folder in the big suitcase we just checked." You need it now, on your phone, three taps away.
      </ArticleParagraph>

      <ArticleH2>What actually helps</ArticleH2>

      <ArticleParagraph>
        After watching families struggle (and struggling ourselves), here's what makes the difference:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Everything lives on your phone.</strong> Not in bags that get checked or buried under kids' snacks. Your phone is always accessible. Every passport, every ticket, every confirmation should be there.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Organized by trip, not by person.</strong> You don't want to think "whose email has the hotel booking?" You want all Barcelona trip documents in one place, regardless of who originally received them.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Both parents have access.</strong> If one parent is stuck in the passport line with the kids while the other deals with a gate change, both need the boarding passes. One person holding all the documents is a single point of failure.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Works without WiFi.</strong> Airport WiFi is unreliable. International data is expensive. You shouldn't need connectivity to access your own documents.
      </ArticleParagraph>

      <ArticleImage
        src={folioScreensImage}
        alt="Folio app screens showing passport details, train ticket with QR code, and hotel booking information"
      />

      <ArticleH2>Shared folders change everything</ArticleH2>

      <ArticleParagraph>
        The feature that matters most for families: shared document folders. Both parents see the same documents. Add a hotel confirmation on one phone, it appears on the other. No forwarding emails, no "can you send me that booking?"
      </ArticleParagraph>

      <ArticleParagraph>
        This solves the classic family travel scenario: one parent gets delayed at security with the kids. The other is already at the gate. Flight's boarding. No problem: both have the boarding passes, both have the passports stored, both can handle whatever comes up independently.
      </ArticleParagraph>

      <ArticleH2>The moments that actually matter</ArticleH2>

      <ArticleParagraph>
        <strong>Hotel check-in after a long flight.</strong> The kids are exhausted. The front desk asks for passports and the confirmation. Instead of digging through bags, you pull up all four passports and the booking on your phone. Done in 30 seconds.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Train station with tight connection.</strong> You have 8 minutes between trains. The whole family needs tickets with QR codes. They're already on your phone, pre-loaded, works offline. No frantic email searching on bad station WiFi.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>The emergency you hope never happens.</strong> A kid gets sick abroad. You need travel insurance details, the embassy contact, medication information. In a stressful moment, it's all accessible without thinking. You saved it once; now it's always there.
      </ArticleParagraph>

      <ArticleParagraph>
        <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</LocalizedLink> is built for exactly this. Store passports, tickets, hotel bookings, insurance cards. Create shared folders for family trips. Everything syncs, works offline, and stays encrypted. The next time you're at that airline counter with the kids, the passports are three taps away. The stroller escape attempt becomes the only problem you need to solve.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
