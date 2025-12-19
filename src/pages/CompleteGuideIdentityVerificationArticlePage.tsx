import { Link } from 'react-router-dom'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleList } from '../components/ui'

export default function CompleteGuideIdentityVerificationArticlePage() {
  return (
    <BlogArticleLayout
      title="The complete guide to digital identity verification"
      description="A practical guide to identity verification: how it works, why it matters, and how to implement it without losing users along the way."
      date="Dec 5, 2025"
      category="Guides"
      slug="complete-guide-identity-verification"
    >
      <ArticleParagraph>
        Someone signs up for your service. They could be exactly who they claim to be. Or they could be using a stolen identity, a fake document, or someone else's credentials entirely. How do you tell the difference?
      </ArticleParagraph>

      <ArticleParagraph>
        Identity verification answers this question. It confirms that the person on the other side of the screen is real, that their documents are genuine, and that they match what they claim. This guide explains how it works, why different approaches exist, and how to implement verification without driving users away.
      </ArticleParagraph>

      <ArticleH2>What happens during verification</ArticleH2>

      <ArticleParagraph>
        A typical verification takes 30 seconds to 2 minutes from the user's perspective. Behind that simple experience is a multi-step process:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Document capture:</strong> The user photographs their ID, passport, or driver's license. Good systems guide them: "Move into better light," "Hold the document flat," "Capture the entire card." This guidance dramatically reduces failed attempts.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Document analysis:</strong> AI examines the image for signs of tampering, checks security features, and extracts text. Is this a real passport or a photoshopped image? Are the holograms present? Does the font match known templates? Within seconds, the system has an answer.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Face matching:</strong> The user takes a selfie. Algorithms compare it to the photo on the document. The question is simple: is this the same person? Modern systems achieve over 99% accuracy.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Liveness detection:</strong> Is the person actually there, or is someone holding up a photo? Liveness checks analyze subtle cues like skin texture and eye reflections, or ask the user to turn their head. This stops the most common fraud attempts.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Decision:</strong> All signals combine into a verdict: approved, rejected, or referred for human review. Most legitimate users pass in under a minute.
      </ArticleParagraph>

      <ArticleH2>Why verification fails (and how to fix it)</ArticleH2>

      <ArticleParagraph>
        Most verification failures are not fraud. They are user experience problems:
      </ArticleParagraph>

      <ArticleList>
        <li><strong>Bad lighting:</strong> Users try to scan documents in dim rooms. Solution: real-time feedback that tells them to move somewhere brighter.</li>
        <li><strong>Blurry images:</strong> Shaky hands, dirty camera lenses. Solution: automatic retake prompts before submission.</li>
        <li><strong>Wrong document:</strong> Users submit utility bills instead of ID cards. Solution: clear instructions with visual examples.</li>
        <li><strong>Expired documents:</strong> The passport expired last month. Solution: tell users upfront which documents you accept.</li>
        <li><strong>Glare and shadows:</strong> The hologram creates a reflection that obscures text. Solution: multi-frame capture that stitches together the best parts.</li>
      </ArticleList>

      <ArticleParagraph>
        Fixing these issues can improve pass rates by 20-30%. That is 20-30% more users who complete signup instead of abandoning.
      </ArticleParagraph>

      <ArticleH2>The technologies that make it work</ArticleH2>

      <ArticleParagraph>
        <strong>OCR (Optical Character Recognition):</strong> Reads text from documents. Modern OCR handles different fonts, languages, and layouts. It extracts names, dates, document numbers, and other fields automatically.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>NFC chip reading:</strong> Many passports and ID cards contain chips with cryptographically signed data. Reading this chip proves the document is genuine and unaltered. It is the most secure verification method available, but requires the user to have a phone with NFC capability.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Face matching:</strong> Deep learning models compare facial features between the selfie and document photo. They account for aging, lighting differences, and angle variations. False match rates are now below 0.1%.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Liveness detection:</strong> Distinguishes real faces from photos, videos, or masks. Passive liveness works from a single image. Active liveness asks users to perform actions. Both have trade-offs between security and user friction.
      </ArticleParagraph>

      <ArticleH2>When to verify (and how much)</ArticleH2>

      <ArticleParagraph>
        Not every service needs the same level of verification. Match your approach to your risk:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Low risk (social apps, content platforms):</strong> Basic document check. Confirm the document is real and belongs to an adult. Fast, low friction, catches obvious fraud.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Medium risk (marketplaces, rentals):</strong> Document check plus face matching. Confirm the user matches their document. Reasonable friction for the trust you are building.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>High risk (financial services, gambling):</strong> Full verification with liveness detection, potentially NFC reading. Add database checks against sanctions lists. Higher friction, but regulatory requirements demand it.
      </ArticleParagraph>

      <ArticleParagraph>
        The key is proportionality. Do not ask for NFC passport scans to create a social media account. Do not skip liveness detection when opening bank accounts.
      </ArticleParagraph>

      <ArticleH2>The compliance landscape</ArticleH2>

      <ArticleParagraph>
        <strong>KYC (Know Your Customer):</strong> Financial services must verify customer identities before providing services. The specifics vary by country, but the principle is universal: know who you are dealing with.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>AML (Anti-Money Laundering):</strong> Goes beyond initial verification. Requires ongoing monitoring, transaction screening, and suspicious activity reporting. Applies to banks, crypto exchanges, and increasingly to other financial services.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Age verification:</strong> Gambling, alcohol delivery, and adult content all require confirming users meet minimum age requirements. Different jurisdictions have different standards for what counts as sufficient proof.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>GDPR and privacy:</strong> Verification involves processing sensitive personal data, including biometric data. You need a legal basis for processing, clear privacy notices, and appropriate security measures. Data minimization matters: do not collect more than you need.
      </ArticleParagraph>

      <ArticleH2>What is coming next</ArticleH2>

      <ArticleParagraph>
        <strong>EUDI (European Digital Identity):</strong> The EU is building a framework for digital identity wallets. Citizens will store verified credentials on their phones and share them with services. Instead of re-verifying every time, users prove their identity from a trusted wallet. <Link to="/platform/id-verification" className="underline hover:text-[#737373] transition-colors">Folio is already EUDI compatible</Link>, positioning businesses for this shift.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Reusable credentials:</strong> Verify once, use everywhere. After initial verification, users receive credentials they can share with other services. This reduces friction dramatically while maintaining trust.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Privacy-preserving verification:</strong> Prove you are over 18 without revealing your birthdate. Prove you live in a country without revealing your address. Cryptographic techniques make this possible, and adoption is growing.
      </ArticleParagraph>

      <ArticleH2>Making verification work for users</ArticleH2>

      <ArticleParagraph>
        The best verification is invisible. Users should feel like they are signing up, not filing paperwork. A few principles help:
      </ArticleParagraph>

      <ArticleList>
        <li><strong>Explain why:</strong> "We verify your identity to keep the platform safe" converts better than a sudden ID request.</li>
        <li><strong>Show progress:</strong> "Step 2 of 3" reduces abandonment.</li>
        <li><strong>Handle failures gracefully:</strong> When verification fails, explain what went wrong and how to fix it.</li>
        <li><strong>Offer alternatives:</strong> If passport verification fails, can they try a driver's license?</li>
        <li><strong>Remember them:</strong> Do not make verified users re-verify unnecessarily.</li>
      </ArticleList>

      <ArticleParagraph>
        Identity verification is a balance. Too little security creates fraud risk. Too much friction drives users away. The right approach matches your risk level, meets your compliance requirements, and respects your users' time.
      </ArticleParagraph>

      <ArticleParagraph>
        Start with your requirements. Test with real users and real documents. Measure pass rates and drop-off points. Iterate until verification feels like a natural part of your user experience, not an obstacle to overcome.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
