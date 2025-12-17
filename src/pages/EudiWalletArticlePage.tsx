import { Link } from 'react-router-dom'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import eudiWalletHowItWorks from '../assets/images/blog-eudi-wallet-how-it-works.png'

export default function EudiWalletArticlePage() {
  return (
    <BlogArticleLayout
      title="The EU is giving everyone a digital ID wallet. Here's what that means."
      description="By 2026, every EU country must offer citizens a free digital identity wallet. You'll prove your age without showing your birth date, open bank accounts without photocopying your passport, and carry credentials that work across all 27 countries."
      date="Oct 25, 2025"
      category="Product"
      slug="eudi-wallet"
    >
      <ArticleParagraph>
        Imagine proving you're over 18 without revealing your birthday. Opening a bank account without photocopying your passport. Showing a hotel your ID without handing over a document they could lose or misuse. By 2026, this will be reality for everyone in the European Union.
      </ArticleParagraph>

      <ArticleParagraph>
        The EU is requiring every member state to offer citizens a free digital identity wallet. It's called the <strong>EUDI Wallet</strong>, and it's not just another government app. It's a complete rethinking of how identity works in the digital age: you control your data, share only what's needed, and your credentials work across all 27 EU countries.
      </ArticleParagraph>

      <ArticleH2>What problem this solves</ArticleH2>

      <ArticleParagraph>
        Right now, proving your identity online is a mess. Every service asks for your full passport or ID card. You upload the same documents over and over. Each company stores copies of your personal information on their servers, where it could be breached or misused. And if you move between EU countries, you often start from scratch because systems don't talk to each other.
      </ArticleParagraph>

      <ArticleParagraph>
        Physical documents aren't much better. You hand your passport to a hotel clerk who might photocopy it and file it who-knows-where. You show your driver's license to prove you can rent a car, but the rental company also sees your home address. Every identity check reveals more than necessary.
      </ArticleParagraph>

      <ArticleParagraph>
        The EUDI Wallet flips this around. Instead of giving away copies of documents, you hold verified credentials on your phone and share specific facts when needed. The bar wants to know if you're over 18? Your wallet confirms "yes" without revealing your exact age. A bank needs to verify your identity? Your wallet provides trusted government-verified data without you uploading passport photos to yet another server.
      </ArticleParagraph>

      <ArticleH2>How it actually works</ArticleH2>

      <ArticleImage 
        src={eudiWalletHowItWorks} 
        alt="How EUDI Wallet works: Digital Identity credential, university requesting information for Student ID issuance, and issued Student ID credential"
      />

      <ArticleParagraph>
        The EUDI Wallet is an app on your phone that holds digital credentials issued by trusted sources. Your government issues your core identity credential. Your university issues your degree. Your employer issues your professional certification. Each credential is cryptographically signed, meaning anyone can verify it's genuine without calling the issuer.
      </ArticleParagraph>

      <ArticleParagraph>
        When a service needs to verify something about you, they send a request to your wallet. You see exactly what they're asking for and decide whether to share it. If you agree, your wallet sends only the requested information, nothing more. The bar doesn't get your home address when checking your age. The car rental doesn't get your medical history when verifying your license.
      </ArticleParagraph>

      <ArticleParagraph>
        Here's the privacy twist: the government that issued your credential doesn't learn where you use it. The bar that checks your age doesn't get data they didn't ask for. No central database tracks all your identity checks. The system is designed so that no single entity, including governments, can surveil how you use your credentials.
      </ArticleParagraph>

      <ArticleH2>What you'll be able to do</ArticleH2>

      <ArticleParagraph>
        <strong>Travel across the EU</strong> with digital credentials that every country accepts. Check into a hotel in Portugal using credentials issued in Germany. Rent a car in Italy without explaining why your Swedish ID card looks different from what they're used to.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Open bank accounts</strong> without the usual identity verification hassle. Instead of uploading passport photos and waiting for manual review, your wallet provides verified identity data that banks can trust immediately.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Access government services</strong> across borders. File taxes, apply for permits, or access healthcare in any EU country using the same digital identity.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Prove qualifications instantly.</strong> Job applications could include verified credentials for your degrees and certifications that employers can check in seconds, eliminating fake diploma concerns.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Verify your age</strong> for restricted services without revealing unnecessary information. Buying alcohol online? The store confirms you're old enough without learning your exact birthday or home address.
      </ArticleParagraph>

      <ArticleH2>When this is happening</ArticleH2>

      <ArticleParagraph>
        The regulation is already in force. Large-scale pilots are running across EU countries, testing real implementations with actual users and services. By 2026, every member state must offer a compliant wallet to citizens for free.
      </ArticleParagraph>

      <ArticleParagraph>
        Starting in 2026, large online platforms and certain industries will be required to accept EUDI Wallet credentials. This creates a network effect: once major services accept the wallet, smaller ones will follow because users will expect it.
      </ArticleParagraph>

      <ArticleParagraph>
        Each country will develop its own wallet app, but all must meet the same technical standards and accept credentials from other countries. Think of it like passports: every country issues its own, but all EU countries accept each other's for travel.
      </ArticleParagraph>

      <ArticleH2>Why this matters beyond Europe</ArticleH2>

      <ArticleParagraph>
        The EUDI Wallet is built on international standards that work globally. While the legal requirement only applies to EU countries, the technology can interoperate with similar systems elsewhere. As more countries develop digital identity systems, credentials could eventually work across continents.
      </ArticleParagraph>

      <ArticleParagraph>
        This also sets expectations. Once 450 million EU residents have digital wallets that share only necessary information, they'll expect the same experience everywhere. Businesses outside the EU will face pressure to adopt similar privacy-respecting verification.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio is building for this future. Our platform works with the credential formats and verification protocols that EUDI Wallet uses, so businesses can accept these credentials alongside traditional verification methods. You can see how verifiable credentials work in our <Link to="/government/playground" className="underline hover:text-[#737373] transition-colors">interactive playground</Link>, which lets you issue and verify credentials yourself.
      </ArticleParagraph>

      <ArticleParagraph>
        The shift to user-controlled digital identity is coming. The EUDI Wallet puts Europe at the forefront, but the implications extend far beyond. How we prove who we are online is about to fundamentally change, and for once, the change puts users in control.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
