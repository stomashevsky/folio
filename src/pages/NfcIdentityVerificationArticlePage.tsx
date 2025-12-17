import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import nfcScanningFlow from '../assets/images/blog-nfc-scanning-flow.png'

export default function NfcIdentityVerificationArticlePage() {
  return (
    <BlogArticleLayout
      title="How NFC chip scanning verifies your passport in seconds"
      description="Your passport has a chip that proves it's genuine. Learn how NFC scanning works, what it verifies, and why it's the most secure way to confirm document authenticity."
      date="Oct 28, 2025"
      category="Product"
      slug="nfc-identity-verification"
    >
      <ArticleParagraph>
        Your passport contains a hidden superpower. Look at the cover: you'll see a small symbol that looks like a radio wave. That symbol means your passport has an NFC chip inside, a tiny electronic component that stores your data and can prove your document is genuine in seconds.
      </ArticleParagraph>

      <ArticleParagraph>
        Unlike the printed information on your passport, which can theoretically be forged, the data on this chip is protected by digital signatures from your government. No one can fake these signatures. When you scan the chip, you get definitive proof that your passport is real and hasn't been tampered with.
      </ArticleParagraph>

      <ArticleH2>How NFC scanning works in Folio</ArticleH2>

      <ArticleParagraph>
        Folio guides you through the NFC scanning process step by step. Here's what happens:
      </ArticleParagraph>

      <ArticleImage
        src={nfcScanningFlow}
        alt="NFC identity scanning process showing three mobile screens: checking for NFC chip symbol, document scanning instructions, and ready to scan prompt"
      />

      <ArticleParagraph>
        <strong>Step 1: Check for the chip symbol</strong>. Look at your passport cover. If you see the NFC symbol (looks like radio waves), your document has a chip that can be scanned.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Step 2: Position your document</strong>. Place your passport against the back of your phone. The app shows you exactly where to hold it based on your phone model.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Step 3: Wait for the scan</strong>. Keep the passport still for a few seconds. The app reads the chip, verifies the data, and confirms authenticity. You'll see a success message when it's done.
      </ArticleParagraph>

      <ArticleParagraph>
        The whole process takes about 10 seconds. Once complete, Folio has verified that your passport is genuine and extracted your data directly from the chip.
      </ArticleParagraph>

      <ArticleH2>What gets verified during NFC scanning</ArticleH2>

      <ArticleParagraph>
        When Folio reads your passport chip, several things happen behind the scenes:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Government signature check</strong>. The data on your chip is digitally signed by your country's passport authority. Folio verifies this signature against official government certificates. If the signature is valid, the data is genuine and unaltered.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Data extraction</strong>. The chip contains your name, date of birth, nationality, passport number, and expiry date. This data is read directly from the chip, not from the printed page.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>High-quality photo</strong>. The chip stores a digital version of your passport photo, usually at higher resolution than the printed version. This photo can be used for face matching with better accuracy.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Consistency check</strong>. If someone altered the printed information on a passport but couldn't change the chip, the mismatch would be detected. The chip data is the authoritative source.
      </ArticleParagraph>

      <ArticleH2>Why chip scanning is more reliable than photos</ArticleH2>

      <ArticleParagraph>
        Taking a photo of a passport and scanning its chip are completely different levels of verification:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Photos can be faked</strong>. A skilled forger can create a convincing-looking passport. They can print fake documents, alter real ones, or create digital images that look authentic. Photo-based verification relies on detecting visual signs of tampering, which isn't always possible.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Chips cannot be faked</strong>. The digital signatures on passport chips are generated using cryptographic keys that only governments possess. Creating a fake chip with valid signatures would require breaking encryption that's considered mathematically secure. It's not practically possible.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Better image quality</strong>. The photo stored on the chip is typically much sharper than the printed photo on the passport page. Printed photos fade, scratch, and degrade over time. The chip photo stays pristine.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Universal verification</strong>. Passport chips follow an international standard used by over 150 countries. A passport from any of these countries can be verified the same way, with the same certainty.
      </ArticleParagraph>

      <ArticleH2>Which documents have NFC chips</ArticleH2>

      <ArticleParagraph>
        Most passports issued since 2006 include NFC chips. Look for the chip symbol on your passport cover, a small icon that resembles radio waves or a chip. If you see it, your passport can be scanned.
      </ArticleParagraph>

      <ArticleParagraph>
        Some national ID cards also have chips, particularly newer European ID cards issued under eIDAS regulations. However, many driver's licenses and older ID cards don't have chips yet.
      </ArticleParagraph>

      <ArticleParagraph>
        If your document doesn't have a chip, Folio can still verify it using photo-based methods. But for documents with chips, NFC scanning provides the highest level of assurance that the document is genuine.
      </ArticleParagraph>

      <ArticleParagraph>
        The combination of NFC chip verification with face matching and liveness detection creates the most secure identity verification available today. Your passport chip proves your document is real. Your face proves you're the person on that document.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
