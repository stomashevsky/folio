import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '../components/ui'

export default function EndToEndEncryptionArticlePage() {
  return (
    <BlogArticleLayout
      title="End-to-end encryption in digital wallets: how it works"
      description="End-to-end encryption ensures only you can access your documents, even if the service provider is compromised. Learn how E2EE protects digital wallet data and why it matters."
      date="Oct 7, 2025"
      category="Safety"
      slug="end-to-end-encryption"
    >
      <ArticleParagraph>
        When you store sensitive documents in a digital wallet, who else can see them? With <strong>end-to-end encryption (E2EE)</strong>, the answer is clear: only you. Your data is encrypted on your device before it ever leaves, and only your device has the keys to decrypt it.
      </ArticleParagraph>

      <ArticleParagraph>
        This isn't just marketing language. End-to-end encryption is a specific technical architecture with meaningful security implications. Understanding how it works helps you evaluate which services actually protect your data and which just claim to.
      </ArticleParagraph>

      <ArticleH2>What end-to-end encryption means</ArticleH2>

      <ArticleParagraph>
        In end-to-end encrypted systems, data is encrypted on the sender's device and can only be decrypted on the recipient's device. For a personal digital wallet, this means:
      </ArticleParagraph>

      <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
        <li><strong>Encryption happens locally</strong>: Your documents are encrypted on your phone or computer before being uploaded anywhere.</li>
        <li><strong>Keys stay on your devices</strong>: The cryptographic keys needed to decrypt your data exist only on devices you control.</li>
        <li><strong>The service can't read your data</strong>: Even the company providing the service cannot access your unencrypted documents.</li>
        <li><strong>Server breaches don't expose content</strong>: If servers are compromised, attackers only get encrypted data they can't read.</li>
      </ul>

      <ArticleH2>E2EE vs server-side encryption</ArticleH2>

      <ArticleParagraph>
        Many services advertise encryption but use server-side encryption, which provides fundamentally different protection:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Server-side encryption</strong>: Your data is encrypted on the company's servers. The company holds the encryption keys. They can decrypt your data if they want to, if compelled by authorities, or if breached by attackers who also obtain the keys.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>End-to-end encryption</strong>: Your data is encrypted before reaching the company's servers. They never have access to the keys. They cannot read your data even if they wanted to, and attackers who breach their servers cannot either.
      </ArticleParagraph>

      <ArticleParagraph>
        The difference matters enormously for sensitive documents like passports, ID cards, medical records, and financial information. With server-side encryption, you're trusting the company's security practices and policies. With E2EE, you're protected even if those fail.
      </ArticleParagraph>

      <ArticleH2>How E2EE works technically</ArticleH2>

      <ArticleParagraph>
        End-to-end encryption relies on proven cryptographic techniques:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Key generation</strong>: When you set up an E2EE service, cryptographic keys are generated on your device. These typically include a public key (which can be shared) and a private key (which stays secret on your device).
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Encryption</strong>: When you add a document, it's encrypted using keys derived from your private key. Modern systems use strong symmetric encryption (like AES-256) for the actual data encryption, with asymmetric encryption protecting the symmetric keys.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Storage</strong>: The encrypted data is uploaded to the service's servers. The servers store encrypted blobs that are meaningless without your keys.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Synchronization</strong>: To sync across your devices, your private key must be available on each device. This is typically accomplished through secure key backup (protected by a password only you know) or device-to-device transfer.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Decryption</strong>: When you view a document, your device retrieves the encrypted data and decrypts it locally using your private key.
      </ArticleParagraph>

      <ArticleH2>What E2EE protects against</ArticleH2>

      <ArticleParagraph>
        End-to-end encryption provides strong protection against several threat scenarios:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Server breaches</strong>: If attackers compromise the service's servers, they only obtain encrypted data. Without your keys, the data is useless.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Insider threats</strong>: Employees of the service provider cannot read your documents, eliminating risks from malicious or careless insiders.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Legal demands</strong>: The company cannot comply with demands to produce your unencrypted data because they don't have access to it.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Network interception</strong>: Data in transit is encrypted, protecting against man-in-the-middle attacks.
      </ArticleParagraph>

      <ArticleH2>What E2EE doesn't protect against</ArticleH2>

      <ArticleParagraph>
        E2EE isn't a complete security solution. It doesn't protect against:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Device compromise</strong>: If an attacker gains access to your unlocked device, they can see what you see. E2EE protects data at rest on servers, not on compromised endpoints.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Weak passwords</strong>: If your key backup is protected by a guessable password, attackers can potentially recover your keys.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Phishing</strong>: Social engineering attacks that trick you into revealing credentials or approving malicious access aren't prevented by encryption.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Metadata</strong>: E2EE protects content but may not hide metadata like when you access the service or how much data you store.
      </ArticleParagraph>

      <ArticleH2>E2EE in digital wallets</ArticleH2>

      <ArticleParagraph>
        For digital wallets storing identity documents, E2EE is particularly important:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Document sensitivity</strong>: Passports, ID cards, and financial documents contain information that could enable identity theft if exposed.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Long-term storage</strong>: Documents may be stored for years. E2EE ensures they remain protected even if the service faces future security incidents.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Trust model</strong>: You shouldn't have to fully trust a service provider to store your most sensitive documents. E2EE removes that requirement.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio uses end-to-end encryption to protect your documents. When you add a passport, ID card, or any other document to Folio, it's encrypted on your device with keys only you control. Our servers store only encrypted data. Even with full access to our systems, we cannot read your documents.
      </ArticleParagraph>

      <ArticleH2>Evaluating E2EE claims</ArticleH2>

      <ArticleParagraph>
        When services claim end-to-end encryption, consider asking:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Where are keys stored?</strong> If the company can reset your password and restore access to your data, they likely hold your keys. True E2EE means losing your key means losing your data.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>What's encrypted?</strong> Some services encrypt files but not metadata, names, or previews. Understand exactly what protection is provided.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Has it been audited?</strong> Independent security audits verify that E2EE implementations work as claimed.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Is the code open source?</strong> Open source allows security researchers to verify encryption implementations.
      </ArticleParagraph>

      <ArticleParagraph>
        End-to-end encryption represents the strongest protection for data you store with third-party services. For sensitive documents like identity papers, medical records, and financial documents, E2EE should be a requirement, not a nice-to-have. Understanding how it works helps you make informed choices about where to trust your most important information.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
