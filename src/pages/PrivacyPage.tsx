import { useTranslation } from 'react-i18next'
import { LegalPageLayout, ArticleH2, ArticleH3, ArticleParagraph, ArticleList } from '../components/ui'

export default function PrivacyPage() {
  const { t } = useTranslation(['pages', 'common'])

  return (
    <LegalPageLayout
      title={t('pages:privacy.title')}
      description={t('pages:privacy.description')}
      lastUpdated={t('pages:privacy.lastUpdated')}
      lastUpdatedLabel={t('common:legal.lastUpdated')}
      slug="privacy"
    >
      <ArticleParagraph>
        Folio Technologies Limited ("Folio," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Folio Wallet app and related services.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Our commitment:</strong> We operate on a zero-knowledge architecture. Your personal documents are encrypted in your wallet, and we cannot access or view your private information. We will never share your personal data with third parties without your explicit consent.
      </ArticleParagraph>

      <ArticleH2>Who we are</ArticleH2>

      <ArticleParagraph>
        Folio Technologies Limited is a company registered in England and Wales (Company Number 07236594). Our registered office is at 88 Baker Street, London W1U 6TQ, United Kingdom. We are the data controller for personal information collected through the Folio app. For privacy questions, contact our data privacy manager at <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>.
      </ArticleParagraph>

      <ArticleH2>Personal information we collect</ArticleH2>

      <ArticleH3>Information you provide</ArticleH3>

      <ArticleParagraph>
        When you create an account, we collect information necessary to verify your identity and provide our services. This may include a selfie for biometric verification. We process this data securely and only with your explicit consent. If you contact our support team, we may temporarily process personal data from documents you need help with. This data is automatically deleted within three days.
      </ArticleParagraph>

      <ArticleH3>Information collected automatically</ArticleH3>

      <ArticleParagraph>
        When you use our Services, we automatically collect certain technical and usage information:
      </ArticleParagraph>

      <ArticleList>
        <li>Device information: device type, operating system, unique device identifiers</li>
        <li>Connection information: IP address, browser type and version, time zone</li>
        <li>Usage patterns: anonymized data about how you interact with the app, such as the number of documents stored (but never the content of those documents)</li>
      </ArticleList>

      <ArticleH2>How we use personal information</ArticleH2>

      <ArticleParagraph>
        We use your personal information for the following purposes:
      </ArticleParagraph>

      <ArticleList>
        <li>To register you as a user and provide our Services</li>
        <li>To verify your identity and protect against fraud</li>
        <li>To respond to your support requests and communicate with you</li>
        <li>To improve, maintain, and secure our app and Services</li>
        <li>To comply with legal obligations and protect our rights</li>
      </ArticleList>

      <ArticleParagraph>
        We rely on your consent for processing biometric data such as your selfie. For other processing activities, we rely on our legitimate interests in providing and improving our Services, the performance of our contract with you, or compliance with legal obligations.
      </ArticleParagraph>

      <ArticleH2>Security and data protection</ArticleH2>

      <ArticleParagraph>
        Security is fundamental to our design. We implement robust technical and organizational measures to protect your personal information:
      </ArticleParagraph>

      <ArticleList>
        <li>Zero-knowledge architecture ensures we cannot access your private data</li>
        <li>End-to-end encryption protects all data in transit using modern cipher suites</li>
        <li>Your personal documents are encrypted and stored only in your wallet on your device</li>
        <li>We store only cryptographic hashes on our servers to detect tampering and protect against fraud</li>
        <li>We maintain compliance with ISO 27001 and SOC 2 security standards</li>
        <li>Access to any personal data is strictly limited to authorized personnel on a need-to-know basis</li>
      </ArticleList>

      <ArticleParagraph>
        <strong>Account recovery:</strong> During registration, you will be prompted to save a Recovery Code. Due to our zero-knowledge architecture, we cannot help you recover your account or data if you lose this code. Please store it securely.
      </ArticleParagraph>

      <ArticleH2>Disclosure of personal information</ArticleH2>

      <ArticleParagraph>
        We only share your personal information in the following circumstances:
      </ArticleParagraph>

      <ArticleList>
        <li>With your explicit consent or at your direction</li>
        <li>With service providers who assist us in operating our Services, under strict contractual obligations</li>
        <li>To comply with applicable laws, regulations, or legal processes</li>
        <li>To protect the rights, privacy, safety, or property of Folio, our users, or the public</li>
      </ArticleList>

      <ArticleParagraph>
        We never sell your personal data. If you choose to share information with third parties through the app, please review their privacy policies before doing so.
      </ArticleParagraph>

      <ArticleH2>International data transfers</ArticleH2>

      <ArticleParagraph>
        We primarily store personal data in secure locations within the European Economic Area. If we need to transfer data outside the UK or EEA, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the UK Information Commissioner's Office or European Commission.
      </ArticleParagraph>

      <ArticleH2>Data retention</ArticleH2>

      <ArticleParagraph>
        We retain your personal data only for as long as necessary to fulfil the purposes described in this policy. Your documents and information remain in your encrypted wallet until you delete them or your account. Biometric data used for verification is retained for a maximum of three years from your last interaction with the platform, unless longer retention is required by law or to resolve disputes.
      </ArticleParagraph>

      <ArticleH2>Your rights</ArticleH2>

      <ArticleParagraph>
        Under applicable data protection laws, including the UK GDPR, you have the following rights:
      </ArticleParagraph>

      <ArticleList>
        <li>Access: request a copy of the personal data we hold about you</li>
        <li>Rectification: request correction of inaccurate or incomplete data</li>
        <li>Erasure: request deletion of your personal data in certain circumstances</li>
        <li>Restriction: request that we limit how we process your data</li>
        <li>Portability: receive your data in a structured, commonly used format</li>
        <li>Objection: object to processing based on legitimate interests</li>
        <li>Withdraw consent: withdraw consent at any time where we rely on it for processing</li>
      </ArticleList>

      <ArticleParagraph>
        To exercise any of these rights, email us at <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>. We will respond within one month. We generally do not charge a fee, but we may charge a reasonable fee for manifestly unfounded or excessive requests.
      </ArticleParagraph>

      <ArticleH2>Cookies and similar technologies</ArticleH2>

      <ArticleParagraph>
        Our website uses cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and support our marketing efforts. Cookies are small text files stored on your device that help us recognize you and remember your preferences.
      </ArticleParagraph>

      <ArticleParagraph>
        We use the following types of cookies:
      </ArticleParagraph>

      <ArticleList>
        <li>Essential cookies: required for the website to function properly and cannot be disabled</li>
        <li>Analytics cookies: help us understand how visitors interact with our website</li>
        <li>Preference cookies: remember your settings and preferences</li>
      </ArticleList>

      <ArticleParagraph>
        You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect website functionality.
      </ArticleParagraph>

      <ArticleH2>Children's privacy</ArticleH2>

      <ArticleParagraph>
        Folio is not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately at <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>, and we will take steps to delete such information.
      </ArticleParagraph>

      <ArticleH2>Changes to this policy</ArticleH2>

      <ArticleParagraph>
        We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will notify you through the app or by email and update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
      </ArticleParagraph>

      <ArticleH2>Contact us</ArticleH2>

      <ArticleParagraph>
        If you have questions about this Privacy Policy or how we handle your personal data, please contact our data privacy manager at <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#737373] transition-colors">ico.org.uk</a> if you are dissatisfied with how we have handled your personal data.
      </ArticleParagraph>
    </LegalPageLayout>
  )
}
