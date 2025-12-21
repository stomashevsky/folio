import { LocalizedLink } from '../components/ui'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import folioScreens from '../assets/images/blog-apple-wallet-folio-screens.png'

export default function BestAppleWalletAlternativesArticlePage() {
  return (
    <BlogArticleLayout
      title="Best Apple Wallet alternatives"
      description="Apple Wallet is great for tap-to-pay and boarding passes, but it has limitations. Discover five powerful iOS apps that fill Wallet's gaps: secure document storage, multi-card management, and automated trip planning."
      date="May 14, 2025"
      category="Research"
      slug="best-apple-wallet-alternatives"
    >
      <ArticleParagraph>
        You're at the Italian border. The officer asks for your residence permit. You open Apple Wallet, scroll past your credit cards and last month's boarding pass, and realize: your permesso di soggiorno isn't there. It never was. Apple Wallet doesn't store identity documents. It doesn't store insurance cards, vaccination records, or visa PDFs. It stores exactly what Apple has decided counts as a "pass," and your critical documents don't make the list.
      </ArticleParagraph>

      <ArticleParagraph>
        This is the gap between expectation and reality. Apple Wallet handles tap-to-pay beautifully. It syncs boarding passes automatically. But the moment you need something that isn't a payment card or a .pkpass file from a participating provider, you're searching through Photos, Files, or your email. The passes you do have appear scattered by date added rather than organized into trips. You can't share a hotel confirmation with your partner. You can't set a reminder for when your passport expires.
      </ArticleParagraph>

      <ArticleParagraph>
        The solution isn't to abandon Apple Wallet. It's to add specialist apps that solve the problems Apple ignores. Here are the alternatives worth installing in 2025.
      </ArticleParagraph>

      <ArticleH2>For documents Apple Wallet won't accept</ArticleH2>

      <ArticleParagraph>
        <strong>Folio</strong> stores everything Apple Wallet refuses: passports, residence permits, driver's licenses, insurance policies, vaccination certificates, medical records. Photograph a document and Folio extracts the key data automatically. Set it up once and you get notifications before documents expire. When someone needs to see your insurance details, generate a secure link that expires after they've viewed it.
      </ArticleParagraph>

      <ArticleImage
        src={folioScreens}
        alt="Folio app showing BBVA payment card with details, Italian residence permit with extracted data, and trip timeline with Barcelona hotel bookings and flight tickets"
      />

      <ArticleParagraph>
        The real difference shows when you travel. Apple Wallet displays your boarding pass. Folio shows your entire trip in chronological order: the flight, the hotel in Barcelona, the Sagrada Familia tickets, the train to Tarragona, the return journey. Tap any item and the barcode or QR code is ready to scan. Everything works offline because the documents live on your device with end-to-end encryption. For families, shared folders let everyone access the same documents without messaging files back and forth. <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Available free on iOS and Android.</LocalizedLink>
      </ArticleParagraph>

      <ArticleH2>For managing multiple payment cards</ArticleH2>

      <ArticleParagraph>
        <strong>Curve</strong> solves a different problem: too many cards. Link all your Visa and Mastercard accounts to Curve, then add just Curve to Apple Wallet. At checkout, one card handles everything. Later, you decide which underlying account actually pays. Made a purchase on the wrong card? "Go Back in Time" moves the charge up to 30 days later. For people who optimize credit card rewards by category, Curve eliminates the fumbling to find the right card before paying.
      </ArticleParagraph>

      <ArticleParagraph>
        Curve also shows exchange rates before international purchases, unlike Apple Wallet which just charges your bank's rate and reveals the damage on your statement days later. The free tier covers basic card aggregation. Paid tiers add fee-free ATM withdrawals abroad, higher limits, and cashback at selected retailers.
      </ArticleParagraph>

      <ArticleH2>For trips that involve more than a flight</ArticleH2>

      <ArticleParagraph>
        <strong>TripIt</strong> builds itineraries automatically. Forward any confirmation email to plans@tripit.com and it assembles a master timeline: flights, hotels, restaurant reservations, rental cars, concert tickets. The Pro tier monitors flights for delays and gate changes faster than most airline apps, tracks seat availability for upgrades, and even claims refunds when airlines owe you money. Apple Wallet shows passes in isolation; TripIt shows your entire trip as a story.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Pass2U Wallet</strong> handles the passes Apple Wallet rejects. That gym membership with a barcode, the loyalty card from a local shop, the ticket that arrived as a PDF instead of a proper .pkpass file: Pass2U converts images into wallet passes. It's not elegant, but it solves the frustration of passes that exist only as screenshots or email attachments.
      </ArticleParagraph>

      <ArticleH2>Building your stack</ArticleH2>

      <ArticleParagraph>
        The point isn't to replace Apple Wallet. Tap-to-pay through the Secure Element remains the fastest and most secure way to pay. Express Mode for transit cards and keys works better than any third-party app could. But Apple Wallet is a foundation, not a complete solution. Add Folio for documents and trip organization. Add Curve if you juggle multiple cards. Add TripIt if you travel frequently and want everything in one timeline.
      </ArticleParagraph>

      <ArticleParagraph>
        The best digital wallet in 2025 isn't a single app. It's a combination that matches how you actually live. Keep Apple Wallet for payments and passes that work natively. Fill the gaps with apps that solve the specific problems Apple hasn't addressed. The result is fewer "where did I save that?" moments and more confidence that everything you need is one tap away.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
