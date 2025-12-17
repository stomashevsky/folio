import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '../components/ui'

export default function EudiWalletArticlePage() {
  return (
    <BlogArticleLayout
      title="What is EUDI Wallet and why it matters for Europe"
      description="The European Digital Identity Wallet will transform how EU citizens interact with government and business services. Learn what EUDI Wallet is, how it works, and when it's coming."
      date="Oct 25, 2025"
      category="Product"
      slug="eudi-wallet"
    >
      <ArticleParagraph>
        By 2026, every EU member state must offer its citizens a <strong>European Digital Identity Wallet (EUDI Wallet)</strong>. This isn't just another government app. It's a fundamental shift in how identity works, giving citizens secure, portable digital credentials they control and can use across borders.
      </ArticleParagraph>

      <ArticleParagraph>
        The EUDI Wallet represents Europe's answer to the challenge of digital identity. How do you prove who you are online as reliably as you can with a physical ID card? How do you share only the information needed without revealing everything? And how do you do this across 27 countries with different systems and languages?
      </ArticleParagraph>

      <ArticleH2>The EU Digital Identity Regulation</ArticleH2>

      <ArticleParagraph>
        The legal foundation for EUDI Wallet is the revised eIDAS Regulation (eIDAS 2.0), which came into force in 2024. This regulation requires all EU member states to issue digital identity wallets that meet common technical standards and are mutually recognized across the Union.
      </ArticleParagraph>

      <ArticleParagraph>
        Key requirements include:
      </ArticleParagraph>

      <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
        <li><strong>Universal availability</strong>: Every EU citizen and resident must be able to obtain an EUDI Wallet for free.</li>
        <li><strong>Cross-border recognition</strong>: A wallet issued in any member state must be accepted in all others.</li>
        <li><strong>Private sector acceptance</strong>: Large platforms and certain industries must accept EUDI Wallet for identity verification.</li>
        <li><strong>User control</strong>: Citizens decide what information to share and with whom, maintaining detailed control over their data.</li>
      </ul>

      <ArticleH2>How EUDI Wallet works</ArticleH2>

      <ArticleParagraph>
        At its core, EUDI Wallet is a smartphone application that stores and presents verifiable digital credentials. These credentials are cryptographically signed by authoritative issuers, making them trustworthy and tamper-proof.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Credential issuance</strong>: Government agencies, educational institutions, and other trusted entities issue credentials directly to a citizen's wallet. This might include national ID data, driving licenses, educational qualifications, or professional certifications.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Selective disclosure</strong>: When presenting credentials, users share only what's necessary. Proving you're over 18 doesn't require revealing your exact birth date. Confirming your professional license doesn't mean sharing your home address.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Verification</strong>: Relying parties (businesses or services requesting identity proof) can verify credentials cryptographically without contacting the issuer. This enables offline verification while maintaining security.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Privacy by design</strong>: The architecture prevents tracking users across different verifications. Issuers don't learn where credentials are used, and verifiers don't receive unnecessary information.
      </ArticleParagraph>

      <ArticleH2>Use cases across sectors</ArticleH2>

      <ArticleParagraph>
        EUDI Wallet will enable numerous practical applications:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Government services</strong>: Access public services across borders without navigating different national systems. File taxes, apply for permits, or access healthcare records using a single trusted identity.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Financial services</strong>: Open bank accounts, apply for loans, or complete KYC requirements using verified credentials. Banks can trust the identity information without conducting their own document verification.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Travel</strong>: Check into hotels, rent cars, or board flights using digital credentials. Border crossings within the EU become smoother with verified identity at hand.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Healthcare</strong>: Access medical records, present insurance information, or prove vaccination status across EU healthcare systems.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Education</strong>: Present educational qualifications for job applications or further study, with employers and institutions able to instantly verify authenticity.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Age verification</strong>: Prove you're old enough for age-restricted services without revealing your exact age or other personal details.
      </ArticleParagraph>

      <ArticleH2>Technical architecture</ArticleH2>

      <ArticleParagraph>
        EUDI Wallet builds on established cryptographic standards and protocols:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Verifiable credentials</strong>: Credentials follow W3C standards, ensuring interoperability with broader international efforts in digital identity.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Decentralized identifiers</strong>: Users aren't dependent on any single authority. The architecture supports multiple credential issuers and doesn't create central databases of citizen activities.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Secure elements</strong>: Sensitive cryptographic keys are protected by hardware security features in smartphones, preventing extraction even if a device is compromised.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Offline capability</strong>: Many verifications can occur without internet connectivity, important for accessibility and reliability.
      </ArticleParagraph>

      <ArticleH2>Implementation timeline</ArticleH2>

      <ArticleParagraph>
        The rollout of EUDI Wallet follows a phased approach:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Large-scale pilots</strong>: Multiple pilot projects across member states are testing real-world implementations with actual users and services.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Technical specifications</strong>: The Architecture and Reference Framework provides detailed technical requirements that all implementations must follow.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Member state implementations</strong>: Each country develops its own compliant wallet, potentially building on the EU's reference implementation.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Mandatory acceptance</strong>: From 2026, certain sectors must accept EUDI Wallet for identity verification, driving adoption on the relying party side.
      </ArticleParagraph>

      <ArticleH2>Implications for businesses</ArticleH2>

      <ArticleParagraph>
        Organizations operating in the EU should prepare for EUDI Wallet:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Identity verification</strong>: Current identity verification processes will need to accept EUDI Wallet credentials. This may simplify verification while requiring technical integration.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Regulatory compliance</strong>: Large online platforms must accept EUDI Wallet. Other sectors will find acceptance increasingly expected by customers and potentially required by regulation.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Customer experience</strong>: EUDI Wallet enables faster, smoother identity verification. Early adopters can differentiate on user experience.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Data minimization</strong>: Selective disclosure changes what data businesses receive. Systems designed around collecting full identity documents will need updating.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio's identity platform is designed to work with emerging digital identity standards, including the credential formats and verification protocols that EUDI Wallet will use. As the ecosystem develops, businesses using Folio will be positioned to accept EUDI Wallet credentials alongside existing verification methods.
      </ArticleParagraph>

      <ArticleParagraph>
        The EUDI Wallet represents a significant step toward user-controlled digital identity. While implementation will take time and coordination across 27 countries, the direction is clear: citizens will have portable, secure digital credentials that work across borders and sectors. Organizations that prepare now will be ready to serve the next generation of digital identity.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
