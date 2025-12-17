import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '../components/ui'

export default function BiometricDataPrivacyArticlePage() {
  return (
    <BlogArticleLayout
      title="Biometric data privacy and GDPR compliance"
      description="Biometric data like facial scans and fingerprints receive special protection under privacy laws. Learn what GDPR requires for biometric data and how businesses can handle it responsibly."
      date="Sep 20, 2025"
      category="Safety"
      slug="biometric-data-privacy"
    >
      <ArticleParagraph>
        Your face is unique. So are your fingerprints. When businesses collect this <strong>biometric data</strong> for identity verification, they're handling some of the most sensitive personal information possible. Unlike passwords, you can't change your biometrics if they're compromised.
      </ArticleParagraph>

      <ArticleParagraph>
        Privacy regulations recognize this sensitivity. The EU's General Data Protection Regulation (GDPR) classifies biometric data as a "special category" requiring additional protections. Understanding these requirements helps both businesses implement compliant verification systems and individuals make informed decisions about sharing biometric data.
      </ArticleParagraph>

      <ArticleH2>What counts as biometric data</ArticleH2>

      <ArticleParagraph>
        Under GDPR, biometric data is defined as personal data resulting from specific technical processing relating to physical, physiological, or behavioral characteristics that allow unique identification. This includes:
      </ArticleParagraph>

      <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
        <li><strong>Facial images</strong>: Photos processed through facial recognition or face matching systems to identify or verify individuals.</li>
        <li><strong>Fingerprints</strong>: Digital representations of fingerprint patterns used for authentication.</li>
        <li><strong>Iris and retina scans</strong>: Eye pattern analysis for identity verification.</li>
        <li><strong>Voice prints</strong>: Audio analysis that uniquely identifies a speaker.</li>
        <li><strong>Gait analysis</strong>: Movement patterns that can identify individuals.</li>
      </ul>

      <ArticleParagraph>
        Importantly, a simple photograph isn't automatically biometric data under GDPR. It becomes biometric data when processed through systems designed to uniquely identify someone. A passport photo stored as an image isn't biometric data; that same photo run through face matching software is.
      </ArticleParagraph>

      <ArticleH2>GDPR special category requirements</ArticleH2>

      <ArticleParagraph>
        GDPR Article 9 establishes strict rules for processing special category data, including biometric data:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Default prohibition</strong>: Processing biometric data for identification purposes is prohibited by default. Organizations must establish a specific legal basis to proceed.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Explicit consent</strong>: One permitted basis is explicit consent: clear, affirmative agreement to the specific processing. Consent must be freely given, informed, and withdrawable.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Substantial public interest</strong>: Processing may be permitted for substantial public interest with appropriate safeguards, but this requires specific legal authorization.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Legal claims</strong>: Processing necessary for establishing, exercising, or defending legal claims is permitted.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Employment context</strong>: In employment situations, specific legal basis and safeguards are required.
      </ArticleParagraph>

      <ArticleH2>Consent requirements</ArticleH2>

      <ArticleParagraph>
        When relying on consent for biometric processing, GDPR sets high standards:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Explicit and specific</strong>: Consent must explicitly cover biometric processing for stated purposes. Bundled consent buried in general terms isn't valid.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Freely given</strong>: Users must have genuine choice. If refusing biometric verification means losing access to necessary services with no alternative, consent may not be considered freely given.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Informed</strong>: Users must understand what data is collected, how it will be used, who will access it, and how long it will be retained.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Withdrawable</strong>: Users must be able to withdraw consent as easily as they gave it, with clear instructions on how to do so.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Documented</strong>: Organizations must be able to demonstrate valid consent was obtained.
      </ArticleParagraph>

      <ArticleH2>Data minimization and purpose limitation</ArticleH2>

      <ArticleParagraph>
        GDPR's core principles apply with particular force to biometric data:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Data minimization</strong>: Collect only the biometric data necessary for the specific purpose. If face matching requires a single selfie, don't collect multiple images "just in case."
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Purpose limitation</strong>: Biometric data collected for one purpose cannot be repurposed without new consent. Face images collected for identity verification cannot later be used for marketing analytics.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Storage limitation</strong>: Retain biometric data only as long as necessary. Once verification is complete, consider whether raw biometric data needs to be kept.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Template vs raw data</strong>: Many systems convert biometric data into mathematical templates that can't be reversed to recreate the original image. Storing templates rather than raw data reduces risk.
      </ArticleParagraph>

      <ArticleH2>Security requirements</ArticleH2>

      <ArticleParagraph>
        GDPR Article 32 requires appropriate security measures, with requirements scaling to data sensitivity:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Encryption</strong>: Biometric data should be encrypted both in transit and at rest.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Access controls</strong>: Strict limits on who can access biometric data, with logging of all access.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Segregation</strong>: Consider storing biometric data separately from other personal data, reducing exposure if other systems are compromised.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Regular testing</strong>: Security measures must be regularly tested and evaluated.
      </ArticleParagraph>

      <ArticleH2>Retention and deletion</ArticleH2>

      <ArticleParagraph>
        Organizations must establish clear retention policies for biometric data:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Define retention periods</strong>: Specify how long biometric data is kept and justify that duration.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Automatic deletion</strong>: Implement systems to automatically delete biometric data when retention periods expire.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Deletion on request</strong>: Honor user requests to delete biometric data, subject to legitimate retention requirements.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Verify deletion</strong>: Ensure biometric data is actually deleted from all systems, including backups.
      </ArticleParagraph>

      <ArticleH2>International considerations</ArticleH2>

      <ArticleParagraph>
        Biometric privacy regulations vary globally:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>US state laws</strong>: Illinois BIPA (Biometric Information Privacy Act) requires written consent and provides private right of action. Texas and Washington have similar laws with different enforcement mechanisms.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>California CCPA/CPRA</strong>: Classifies biometric data as sensitive personal information with additional disclosure requirements.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Brazil LGPD</strong>: Similar to GDPR, treats biometric data as sensitive data requiring explicit consent or legal basis.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>China PIPL</strong>: Requires separate consent for sensitive personal information including biometric data.
      </ArticleParagraph>

      <ArticleParagraph>
        Organizations operating globally must comply with the requirements of all applicable jurisdictions.
      </ArticleParagraph>

      <ArticleH2>Best practices for biometric processing</ArticleH2>

      <ArticleParagraph>
        Organizations handling biometric data should:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Conduct Data Protection Impact Assessments</strong>: GDPR requires DPIAs for high-risk processing, which typically includes biometric processing.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Provide clear privacy notices</strong>: Explain biometric data collection in accessible language before processing begins.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Offer alternatives where possible</strong>: Give users non-biometric options when feasible to ensure consent is freely given.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Work with compliant vendors</strong>: Ensure third-party providers handling biometric data meet GDPR requirements through appropriate contracts and due diligence.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio's approach to biometric data prioritizes privacy and compliance. Face matching for identity verification uses biometric processing, so we implement strict data minimization, clear consent mechanisms, and appropriate security controls. Biometric templates are processed for verification purposes and not retained longer than necessary. Users maintain control over their data with clear options to understand and manage how it's used.
      </ArticleParagraph>

      <ArticleParagraph>
        Biometric data enables powerful identity verification capabilities, but its sensitivity demands careful handling. Organizations that approach biometric processing thoughtfully, with proper consent, security, and retention practices, can offer enhanced verification while respecting user privacy and complying with regulations like GDPR.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
