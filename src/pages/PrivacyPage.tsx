import { LegalPageLayout, ArticleH2, ArticleH3, ArticleParagraph, ArticleList } from '../components/ui'

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy policy"
      description="How Folio collects, uses, and protects your personal data"
      lastUpdated="December 17, 2025"
      slug="privacy"
    >
      <ArticleParagraph>
        Folio respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you use the Folio Wallet app.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>The key principle:</strong> We will never share your personal data with third parties without your explicit consent. Your data stays encrypted in your wallet, and we have no visibility into your private information.
      </ArticleParagraph>

      <ArticleH2>Who we are</ArticleH2>

      <ArticleParagraph>
        Folio Technologies Limited is a company registered in England (Company Number 07236594). Our registered office is at 88 Baker Street, London W1U 6TQ, United Kingdom. We are the data controller for information collected through the Folio app.
      </ArticleParagraph>

      <ArticleParagraph>
        For privacy questions, contact our data privacy manager at <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>.
      </ArticleParagraph>

      <ArticleH2>What data we collect</ArticleH2>

      <ArticleH3>Data you provide</ArticleH3>

      <ArticleParagraph>
        When you register for Folio, we ask for a selfie. This helps us verify your identity and detect fraud. We store this image securely and only use it with your explicit consent.
      </ArticleParagraph>

      <ArticleParagraph>
        If you contact our support team, we may temporarily process personal data from documents you are having trouble uploading. This data is automatically deleted within three days.
      </ArticleParagraph>

      <ArticleH3>Technical data</ArticleH3>

      <ArticleParagraph>
        We automatically collect certain technical information:
      </ArticleParagraph>

      <ArticleList>
        <li>IP address and login data</li>
        <li>Device type and operating system</li>
        <li>Browser type and version</li>
        <li>Time zone and general location</li>
      </ArticleList>

      <ArticleH3>Usage data</ArticleH3>

      <ArticleParagraph>
        We collect anonymized information about how you use the app to improve our services. This includes patterns like how many documents are stored, but never the content of those documents.
      </ArticleParagraph>

      <ArticleH2>How we use your data</ArticleH2>

      <ArticleParagraph>
        We use your data to:
      </ArticleParagraph>

      <ArticleList>
        <li>Register you as a user and provide our services</li>
        <li>Verify your identity and protect against fraud</li>
        <li>Respond to support requests</li>
        <li>Improve and secure our app</li>
        <li>Comply with legal obligations</li>
      </ArticleList>

      <ArticleParagraph>
        We rely on your consent for processing biometric data like your selfie. For other processing, we rely on our legitimate interests in providing and improving our services, or on legal requirements.
      </ArticleParagraph>

      <ArticleH2>How we protect your data</ArticleH2>

      <ArticleParagraph>
        Security is built into everything we do:
      </ArticleParagraph>

      <ArticleList>
        <li>End-to-end encryption protects all data in transit</li>
        <li>Your personal documents are encrypted and stored only in your wallet</li>
        <li>We use zero-knowledge architecture: we cannot see your private data</li>
        <li>We conform to ISO 27001 and SOC 2 security standards</li>
        <li>Access to any personal data is strictly limited to authorized personnel</li>
      </ArticleList>

      <ArticleParagraph>
        Your personal information is encrypted in your Folio wallet. We only store hashed references on our servers to detect tampering and protect you from identity fraud.
      </ArticleParagraph>

      <ArticleH2>Sharing your data</ArticleH2>

      <ArticleParagraph>
        We only share your data when:
      </ArticleParagraph>

      <ArticleList>
        <li>You explicitly request or consent to it</li>
        <li>We need to comply with legal obligations</li>
        <li>We use service providers who help us operate (under strict contracts)</li>
      </ArticleList>

      <ArticleParagraph>
        We never sell your personal data. If you choose to share data with third parties through the app, you should review their privacy policies before doing so.
      </ArticleParagraph>

      <ArticleH2>International transfers</ArticleH2>

      <ArticleParagraph>
        We keep personal data in secure locations within the EU. If we ever need to transfer data outside the UK or EU, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by regulators.
      </ArticleParagraph>

      <ArticleH2>Your rights</ArticleH2>

      <ArticleParagraph>
        Under data protection laws, you have the right to:
      </ArticleParagraph>

      <ArticleList>
        <li>Access your personal data and receive a copy</li>
        <li>Correct inaccurate or incomplete data</li>
        <li>Request deletion of your data</li>
        <li>Object to certain types of processing</li>
        <li>Restrict how we process your data</li>
        <li>Transfer your data to another service</li>
        <li>Withdraw consent at any time</li>
      </ArticleList>

      <ArticleParagraph>
        To exercise any of these rights, email us at <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>. We will respond within one month. There is usually no fee, but we may charge for excessive or unfounded requests.
      </ArticleParagraph>

      <ArticleH2>How long we keep your data</ArticleH2>

      <ArticleParagraph>
        We keep your personal data for as long as you have an account with us. Your documents and information remain in your wallet until you delete them or your account. Biometric data is kept for a maximum of three years from your last interaction with the platform.
      </ArticleParagraph>

      <ArticleParagraph>
        We may retain certain data longer if required for legal purposes or to resolve disputes.
      </ArticleParagraph>

      <ArticleH2>Cookies</ArticleH2>

      <ArticleParagraph>
        We use cookies on our website to improve your experience. You can control cookies through your browser settings. Disabling cookies may affect some website functionality. See our Cookie Policy for details.
      </ArticleParagraph>

      <ArticleH2>Children and privacy</ArticleH2>

      <ArticleParagraph>
        Folio is not intended for children under 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
      </ArticleParagraph>

      <ArticleH2>Changes to this policy</ArticleH2>

      <ArticleParagraph>
        We may update this policy from time to time. When we make material changes, we will notify you through the app or by email. We encourage you to review this policy periodically.
      </ArticleParagraph>

      <ArticleH2>Contact us</ArticleH2>

      <ArticleParagraph>
        For questions about this privacy policy or how we handle your data, contact our data privacy manager at <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>.
      </ArticleParagraph>

      <ArticleParagraph>
        You also have the right to complain to the UK Information Commissioner&apos;s Office (ICO) if you are unhappy with how we have handled your data.
      </ArticleParagraph>
    </LegalPageLayout>
  )
}
