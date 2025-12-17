import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { Link } from 'react-router-dom'
import mdlScreenImage from '../assets/images/blog-mdl-folio-screen.png'

export default function MobileDriversLicenseArticlePage() {
  return (
    <BlogArticleLayout
      title="Your driver's license is going digital. Here's what that actually means."
      description="Mobile driver's licenses are rolling out across the US and worldwide. But this isn't just a photo of your license on your phone. It's actually more private and secure than the plastic card in your wallet."
      date="Aug 12, 2025"
      category="Product"
      slug="mobile-drivers-license"
    >
      <ArticleParagraph>
        You hand your driver's license to a bartender. They glance at your photo, check your birth date, maybe note your address. You've just shared your full name, exact birthday, home address, license number, height, weight, and whether you're an organ donor. All to prove you're over 21.
      </ArticleParagraph>

      <ArticleParagraph>
        Now imagine a different scenario. You tap your phone on a reader. It confirms "over 21: yes" and nothing else. The bartender doesn't see your address. Doesn't learn your exact age. Doesn't know your license number. Just gets the one piece of information they actually needed.
      </ArticleParagraph>

      <ArticleParagraph>
        This is what <strong>mobile driver's licenses (mDL)</strong> make possible. And it's not a future concept. States across the US are already issuing them. TSA accepts them at airports. Apple and Google have built support into their wallet apps. The shift is happening now.
      </ArticleParagraph>

      <ArticleH2>Not a photo, a credential</ArticleH2>

      <ArticleParagraph>
        Taking a picture of your license and saving it to your phone isn't a mobile driver's license. Anyone could photograph someone else's license. A photo proves nothing.
      </ArticleParagraph>

      <ArticleParagraph>
        A real mDL is a cryptographically signed credential issued by your state's DMV. Think of it like this: the DMV creates a digital document containing your information, then signs it with a secret key that only they possess. Anyone can verify that signature came from the DMV, but no one can forge it. If someone altered even a single character, the signature would become invalid.
      </ArticleParagraph>

      <ArticleParagraph>
        The credential is also locked to your specific phone. It can't be copied to another device. Presenting it requires Face ID or fingerprint authentication. If someone steals your phone, they can't use your license because they can't unlock the credential.
      </ArticleParagraph>

      <ArticleImage
        src={mdlScreenImage}
        alt="Mobile driver's license in Folio app showing a green credential card with Show QR code button for verification"
      />

      <ArticleH2>The privacy surprise</ArticleH2>

      <ArticleParagraph>
        Here's what most people don't expect: a digital license can be more private than a physical one. The key is selective disclosure.
      </ArticleParagraph>

      <ArticleParagraph>
        When you hand over a plastic card, you hand over everything on it. There's no way to show just your photo and age while hiding your address. The physical card is all-or-nothing.
      </ArticleParagraph>

      <ArticleParagraph>
        Mobile licenses work differently. The credential contains your information in separate fields. When someone requests verification, you see exactly what they're asking for. A bar asks "is this person over 21?" You approve sharing just that answer. The cryptographic magic happens: your phone proves you're over 21 without revealing your actual birth date. The verifier gets a yes-or-no answer signed by the DMV. Nothing more.
      </ArticleParagraph>

      <ArticleParagraph>
        This matters more than you might think. Every time you show your physical license, you're giving strangers your home address. Rental car counters, hotel check-ins, liquor stores, nightclub bouncers: they all see where you live. With mDL, that ends. You share what's needed, nothing extra.
      </ArticleParagraph>

      <ArticleH2>Where you can use it today</ArticleH2>

      <ArticleParagraph>
        Mobile driver's licenses are live in Arizona, Colorado, Georgia, Maryland, and several other states. More are launching programs regularly. If your state offers mDL, you can typically add it through your state's DMV app or through Apple Wallet or Google Wallet.
      </ArticleParagraph>

      <ArticleParagraph>
        TSA now accepts mobile licenses at participating airports. This is significant: you can go through security with just your phone, no physical ID required. The experience is faster than handing over a card. Tap, authenticate with Face ID, done.
      </ArticleParagraph>

      <ArticleParagraph>
        Acceptance elsewhere varies. Some bars and venues have readers for digital IDs. Many don't. For now, keeping your physical license as backup makes sense. But the infrastructure is expanding. Every month, more places add the ability to verify mobile credentials.
      </ArticleParagraph>

      <ArticleH2>Why governments are investing in this</ArticleH2>

      <ArticleParagraph>
        From a government perspective, mDL solves real problems. Fake physical IDs are a persistent issue: printing technology keeps improving, and detecting forgeries gets harder. A cryptographically signed digital credential is fundamentally unforgeable. The math doesn't allow it.
      </ArticleParagraph>

      <ArticleParagraph>
        Digital credentials can also show real-time status. A physical license doesn't know if your driving privileges were suspended yesterday. An mDL verifier can check current status. This matters for car rentals, employment verification, and law enforcement.
      </ArticleParagraph>

      <ArticleParagraph>
        There's also the international angle. Mobile driver's licenses follow an international standard called ISO 18013-5. An mDL from one country can be verified by systems in another. For travelers renting cars abroad, this eventually means no more confusion about foreign license validity.
      </ArticleParagraph>

      <ArticleH2>The practical reality</ArticleH2>

      <ArticleParagraph>
        Mobile driver's licenses aren't perfect yet. Your phone needs battery to present credentials. Not everywhere accepts them. Laws on legal equivalence vary by state. You might encounter a situation where digital ID isn't recognized.
      </ArticleParagraph>

      <ArticleParagraph>
        But the direction is clear. The EU is requiring all member states to offer digital identity wallets by 2026, including mobile driving licenses. Australia has been issuing digital licenses for years. The US is accelerating adoption state by state.
      </ArticleParagraph>

      <ArticleParagraph>
        The technology represents something bigger than just digitizing licenses. The same approach works for any credential: national IDs, professional certifications, student cards, health insurance. A world where you control what information you share, where verification is instant and unforgeable, where your home address stays private when you buy a drink.
      </ArticleParagraph>

      <ArticleParagraph>
        That world is arriving faster than most people realize. Whether you get your mDL through your state, Apple Wallet, or another app, the shift toward digital identity is underway. <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</Link> supports mobile driver's licenses with QR code presentation for verification, keeping your license alongside passports, travel documents, and other credentials in one secure place.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
