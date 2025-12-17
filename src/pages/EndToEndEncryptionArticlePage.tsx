import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import e2eEncryptionRecovery from '../assets/images/blog-e2e-encryption-recovery.png'

export default function EndToEndEncryptionArticlePage() {
  return (
    <BlogArticleLayout
      title="Why even Folio can't see your documents"
      description="Your documents in Folio are protected by a secret only you know. Without your Passkey or Recovery Code, no one can access your data, not even us. Here's how it works."
      date="Oct 7, 2025"
      category="Safety"
      slug="end-to-end-encryption"
    >
      <ArticleParagraph>
        Here's a question worth asking about any app that stores your documents: can the company behind it see your files? For most cloud services, the honest answer is yes. They encrypt your data on their servers, but they hold the keys. If they wanted to look at your files, they could.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio works differently. We use end-to-end encryption, which means your documents are encrypted on your phone before they ever reach our servers. The key that unlocks them exists only on your devices and is protected by a secret that only you know: either a <strong>Passkey</strong> stored securely on your device, or a <strong>Recovery Code</strong> that you save when setting up the app.
      </ArticleParagraph>

      <ArticleImage 
        src={e2eEncryptionRecovery} 
        alt="Save Your Recovery Code screen in Folio app showing the importance of keeping recovery code safe for account access"
      />

      <ArticleH2>Your secret is the key to everything</ArticleH2>

      <ArticleParagraph>
        When you set up Folio, the app generates encryption keys on your device. These keys are what actually encrypt and decrypt your documents. But here's the important part: these keys are themselves protected by a secret that only you control.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Passkey</strong> is the modern, seamless option. It's a cryptographic credential stored in your device's secure enclave and protected by Face ID, Touch ID, or your device passcode. When you authenticate with your face or fingerprint, your device unlocks the Passkey, which then unlocks your encryption keys. The Passkey never leaves your device and can sync across your Apple or Google devices through their secure cloud keychains.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Recovery Code</strong> is a 24-word phrase generated when you create your account. Think of it as a master key written on paper. If you lose access to all your devices, this code is the only way to recover your documents. Without it, your data is mathematically unrecoverable.
      </ArticleParagraph>

      <ArticleParagraph>
        Either way, the secret stays with you. Folio never sees it, never stores it, and has no way to recover it if you lose it.
      </ArticleParagraph>

      <ArticleH2>What this means in practice</ArticleH2>

      <ArticleParagraph>
        Because only your secret can unlock your encryption keys, several things become true:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>We can't read your documents.</strong> Our servers store encrypted files that look like random data to us. Without your Passkey or Recovery Code, we have no way to decrypt them. A Folio employee with full database access would see only meaningless encrypted blobs.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Hackers can't read your documents.</strong> If someone broke into our servers, they'd get encrypted data. Without your secret, that data is useless. They'd need to break modern encryption, which would take longer than the age of the universe with current technology.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>We can't hand over your documents.</strong> If authorities demanded your data, we could only provide encrypted files. We genuinely cannot decrypt them because we don't have your secret.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>We can't reset your access.</strong> Most services let you reset a forgotten password because they control the encryption. We can't do that. If you lose your Passkey and Recovery Code, your documents are gone forever. This isn't a limitation; it's a feature that proves the encryption is real.
      </ArticleParagraph>

      <ArticleH2>Why this matters for your documents</ArticleH2>

      <ArticleParagraph>
        Your digital wallet contains some of your most sensitive information: passport scans, ID cards, medical records, financial documents. This data could enable identity theft if exposed. It could be used against you. It's exactly the kind of information you don't want sitting on some company's server where employees or hackers could access it.
      </ArticleParagraph>

      <ArticleParagraph>
        End-to-end encryption changes the trust model. Instead of trusting Folio's security practices and hoping we never get breached, you only need to trust the mathematics of encryption and keep your secret safe. Even if we made a mistake, even if our servers were compromised, your documents would remain protected.
      </ArticleParagraph>

      <ArticleH2>How to spot real end-to-end encryption</ArticleH2>

      <ArticleParagraph>
        Many apps claim encryption but don't offer true end-to-end protection. Here's how to tell the difference:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Can they reset your password?</strong> If a service can restore access to your data after you forget your password, they hold your encryption keys. That means they can read your data. True end-to-end encryption means losing your secret means losing your data.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Do they mention a recovery key or phrase?</strong> Services with real E2EE typically require you to save a recovery key because they can't recover your data without it. If there's no recovery mechanism you control, be skeptical.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Can they show you previews?</strong> If a web version of the service shows document thumbnails or previews without you entering a secret, the data isn't truly end-to-end encrypted. The server needs to decrypt files to generate previews.
      </ArticleParagraph>

      <ArticleParagraph>
        Your documents deserve better than security promises. They deserve mathematical guarantees. With end-to-end encryption, your secret is the only key that matters. Keep it safe, and your documents stay private, even from us.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
