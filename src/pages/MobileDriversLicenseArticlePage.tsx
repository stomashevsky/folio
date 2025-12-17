import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '../components/ui'
import { Link } from 'react-router-dom'

export default function MobileDriversLicenseArticlePage() {
  return (
    <BlogArticleLayout
      title="Mobile driver's license (mDL): standards, adoption, and security"
      description="Mobile driver's licenses are becoming reality across the US and internationally. Learn what mDL is, how it works, which states have adopted it, and why it's more secure than physical licenses."
      date="Aug 12, 2025"
      category="Product"
      slug="mobile-drivers-license"
    >
      <ArticleParagraph>
        Your driver's license is one of your most frequently used identity documents. Now it's going digital. <strong>Mobile driver's licenses (mDL)</strong> store your driving credentials on your smartphone, allowing you to present ID electronically when needed.
      </ArticleParagraph>

      <ArticleParagraph>
        But mDL isn't just a photo of your license on your phone. It's a cryptographically secured digital credential that's actually more secure and privacy-preserving than the physical card in your wallet. Understanding how mDL works reveals why governments worldwide are investing in this technology.
      </ArticleParagraph>

      <ArticleH2>What makes mDL different</ArticleH2>

      <ArticleParagraph>
        A photo of your license stored on your phone provides no security benefits. Anyone could photograph someone else's license. An mDL is fundamentally different:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Cryptographic security</strong>: mDL credentials are digitally signed by the issuing authority (typically a state DMV or equivalent). This signature proves the credential is genuine and unmodified.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Device binding</strong>: The credential is bound to your specific device. It can't be copied to another phone or used if stolen without biometric authentication.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Selective disclosure</strong>: Instead of handing over your entire license, you can share only what's needed. A bar can verify you're over 21 without seeing your home address. A car rental agency can confirm your license is valid without learning your date of birth.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Verifiable in real-time</strong>: Verifiers can confirm the credential is currently valid, not suspended or revoked, which isn't possible with physical licenses.
      </ArticleParagraph>

      <ArticleH2>The ISO 18013-5 standard</ArticleH2>

      <ArticleParagraph>
        mDL is built on an international standard: ISO 18013-5. This ensures interoperability, meaning an mDL from one jurisdiction can be verified by systems in another.
      </ArticleParagraph>

      <ArticleParagraph>
        The standard specifies:
      </ArticleParagraph>

      <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
        <li><strong>Data model</strong>: What information an mDL contains and how it's structured.</li>
        <li><strong>Security mechanisms</strong>: How credentials are signed, encrypted, and protected.</li>
        <li><strong>Transfer protocols</strong>: How credentials are presented to verifiers, including both online and offline methods.</li>
        <li><strong>Privacy features</strong>: How selective disclosure works to protect user information.</li>
      </ul>

      <ArticleParagraph>
        The standard supports multiple presentation methods: QR codes displayed on screen, NFC tap, Bluetooth Low Energy, and internet-based verification. This flexibility allows mDL to work in diverse scenarios from traffic stops to online verification.
      </ArticleParagraph>

      <ArticleH2>Adoption in the United States</ArticleH2>

      <ArticleParagraph>
        US states are progressively rolling out mDL programs:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Early adopters</strong>: States like Arizona, Colorado, Georgia, and Louisiana were among the first to offer mDL to residents. These programs have demonstrated the technology works in real-world conditions.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Expanding availability</strong>: More states announce mDL programs regularly. The AAMVA (American Association of Motor Vehicle Administrators) provides coordination and standards support.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Apple and Google integration</strong>: Both iOS and Android now support mDL in their wallet apps, simplifying deployment for states that choose to use these platforms.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>TSA acceptance</strong>: The Transportation Security Administration accepts mDL at participating airports, a significant milestone for practical adoption.
      </ArticleParagraph>

      <ArticleParagraph>
        Acceptance varies by use case. While some venues readily accept mDL, others aren't equipped to verify digital credentials. Adoption is progressing but remains uneven.
      </ArticleParagraph>

      <ArticleH2>International developments</ArticleH2>

      <ArticleParagraph>
        mDL adoption extends beyond the US:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>European Union</strong>: The EUDI Wallet initiative includes mobile driving licenses as one of the credential types member states will issue.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Australia</strong>: Several Australian states have launched digital driver's license programs, with New South Wales among the pioneers.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Japan, South Korea</strong>: Asian markets are developing digital credential systems that include driving licenses.
      </ArticleParagraph>

      <ArticleParagraph>
        The ISO standard enables cross-border recognition. An mDL issued in one country can be verified by systems in another, important for international travelers and car rentals.
      </ArticleParagraph>

      <ArticleH2>Security advantages</ArticleH2>

      <ArticleParagraph>
        mDL provides security benefits over physical licenses:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Counterfeit resistance</strong>: Physical licenses can be forged. Cryptographic signatures on mDL credentials are computationally infeasible to replicate without access to the issuing authority's private keys.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Real-time validity</strong>: A physical license doesn't indicate if driving privileges have been suspended. mDL can be verified against current status.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Authentication requirements</strong>: Presenting an mDL typically requires biometric authentication (Face ID, fingerprint). A thief can't use a stolen phone to present someone else's credential.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Audit capability</strong>: Users can see who has verified their credentials and when, providing transparency about data access.
      </ArticleParagraph>

      <ArticleH2>Privacy features</ArticleH2>

      <ArticleParagraph>
        Perhaps surprisingly, digital licenses can be more private than physical ones:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Selective disclosure</strong>: The most significant privacy feature. Share only what's needed for each transaction. Proving you're old enough to purchase alcohol doesn't require revealing your address, license number, or exact age.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>No visual inspection</strong>: You don't hand your phone to someone else. Credentials are verified electronically, preventing casual observation of information you didn't intend to share.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Unlinkable presentations</strong>: Advanced implementations prevent verifiers from correlating presentations, so they can't track where else you've used your credential.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>User consent</strong>: Each presentation requires explicit user action. Credentials aren't transmitted automatically.
      </ArticleParagraph>

      <ArticleH2>Practical considerations</ArticleH2>

      <ArticleParagraph>
        Despite advantages, mDL has practical considerations to navigate:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Battery and connectivity</strong>: Your phone needs power to present credentials. Most implementations work offline for basic verification, but real-time status checks require connectivity.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Acceptance variability</strong>: Not all businesses, law enforcement agencies, or jurisdictions accept mDL. Carrying a physical backup remains advisable.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Legal recognition</strong>: Laws vary on whether mDL is legally equivalent to physical licenses for all purposes.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Device requirements</strong>: mDL requires compatible smartphones with secure storage capabilities. Not all devices qualify.
      </ArticleParagraph>

      <ArticleParagraph>
        The mobile driver's license represents a broader shift toward digital credentials. The same technology and standards apply to other documents: national ID cards, professional licenses, educational credentials, and more. As infrastructure develops and acceptance grows, digital credentials will increasingly supplement and eventually replace physical documents for many purposes.
      </ArticleParagraph>

      <ArticleParagraph>
        For those who want to keep their driving license alongside other important documents, <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio's digital wallet app</Link> stores ID cards, licenses, and other credentials in one secure, organized place.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
