import { useTranslation } from 'react-i18next'
import { LegalPageLayout, ArticleH2, ArticleParagraph, ArticleList } from '../components/ui'

export default function TermsPage() {
  const { t } = useTranslation(['pages', 'common'])

  return (
    <LegalPageLayout
      title={t('pages:terms.title')}
      description={t('pages:terms.description')}
      lastUpdated={t('pages:terms.lastUpdated')}
      lastUpdatedLabel={t('common:legal.lastUpdated')}
      slug="terms"
    >
      <ArticleParagraph>
        Thank you for using Folio Wallet. These Terms of Use govern your access to and use of the Folio mobile application, related online services, and any documentation we provide (collectively, our "Services"). By accessing or using our Services, you agree to be bound by these terms. If you do not agree, please do not use Folio.
      </ArticleParagraph>

      <ArticleParagraph>
        Our <a href="/privacy" className="underline hover:text-[#737373] transition-colors">Privacy Policy</a> explains how we collect, use, and protect your personal data. Please read it alongside these terms.
      </ArticleParagraph>

      <ArticleH2>Who we are</ArticleH2>

      <ArticleParagraph>
        Folio Technologies Limited is a company registered in England and Wales (Company Number 07236594). Our registered office is at 88 Baker Street, London W1U 6TQ, United Kingdom. References to "Folio," "we," "us," or "our" mean Folio Technologies Limited.
      </ArticleParagraph>

      <ArticleH2>Registration and access</ArticleH2>

      <ArticleParagraph>
        You must be at least 16 years old to use Folio. By registering, you confirm that you meet this age requirement. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
      </ArticleParagraph>

      <ArticleParagraph>
        We grant you a limited, non-exclusive, non-transferable, revocable license to use the Folio app on your personal devices for non-commercial purposes, subject to these terms.
      </ArticleParagraph>

      <ArticleH2>Our services</ArticleH2>

      <ArticleParagraph>
        Folio is a digital identity platform that helps you securely store, manage, and share your personal documents. We support document verification and authentication, but we are not a party to any contracts or services that third parties may offer you through the app. You are in complete control of what information you share and with whom. Before sharing data with any third party, make sure you are comfortable with their privacy practices.
      </ArticleParagraph>

      <ArticleParagraph>
        Using Folio, you can:
      </ArticleParagraph>

      <ArticleList>
        <li>Store and manage your personal documents securely</li>
        <li>Share verified information with third parties you choose</li>
        <li>Access your data offline once downloaded</li>
        <li>Use our documentation to support your use of the app</li>
      </ArticleList>

      <ArticleH2>Usage requirements</ArticleH2>

      <ArticleParagraph>
        You agree to use our Services only for lawful purposes and in accordance with these terms. You agree not to:
      </ArticleParagraph>

      <ArticleList>
        <li>Use the Services for any unlawful, fraudulent, or deceptive purpose</li>
        <li>Reverse engineer, decompile, disassemble, or create derivative works from the app</li>
        <li>Share access to your account or transfer it to others without our consent</li>
        <li>Attempt to compromise our systems, disrupt our Services, or interfere with other users</li>
        <li>Collect data from our systems without authorization</li>
        <li>Use the Services on behalf of a third party without proper authorization</li>
      </ArticleList>

      <ArticleH2>Security and account recovery</ArticleH2>

      <ArticleParagraph>
        Folio uses Passkeys for secure authentication. Passkeys allow you to sign in using Face ID, Touch ID, or your device passcode, providing a more secure alternative to traditional passwords. During registration, you will be prompted to save a Recovery Code. This code is essential for regaining access to your account if you lose your device, forget your credentials, or sign in from a new device.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Important:</strong> Due to our zero-knowledge security architecture, we cannot access your encrypted data. If you lose your Recovery Code and cannot authenticate, we will be unable to help you recover your account or data. We strongly recommend storing your Recovery Code in a secure location, such as a password manager or a physical safe.
      </ArticleParagraph>

      <ArticleH2>Privacy and data protection</ArticleH2>

      <ArticleParagraph>
        Your privacy is fundamental to how Folio works. All data in transit and at rest is encrypted using modern cipher suites. Your personal documents are encrypted and stored only in your Folio wallet, with only hashed references kept on our servers to detect tampering and protect against fraud. We have no visibility into your private information and cannot decrypt it without your authorization.
      </ArticleParagraph>

      <ArticleParagraph>
        We will never share your personal data with third parties without your explicit consent. We may analyze anonymized, aggregated trends to improve our Services, but this analysis never includes your private information.
      </ArticleParagraph>

      <ArticleH2>Disclaimers</ArticleH2>

      <ArticleParagraph>
        We use reasonable skill and care in providing document verification services, but we cannot guarantee that verification results are always accurate or that documents are genuine. You are responsible for the accuracy of your documentation and keeping it up to date.
      </ArticleParagraph>

      <ArticleParagraph>
        Our Services are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or completely secure.
      </ArticleParagraph>

      <ArticleH2>Limitation of liability</ArticleH2>

      <ArticleParagraph>
        We are responsible for foreseeable loss or damage caused by our failure to comply with these terms or use reasonable care and skill. However, we are not liable for:
      </ArticleParagraph>

      <ArticleList>
        <li>Loss or damage that is not reasonably foreseeable</li>
        <li>Business losses, as the app is intended for personal use</li>
        <li>Damage you could have avoided by following our advice or applying available updates</li>
        <li>Issues caused by events outside our reasonable control</li>
        <li>Loss of data due to failure to save your Recovery Code</li>
      </ArticleList>

      <ArticleParagraph>
        Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be legally excluded.
      </ArticleParagraph>

      <ArticleH2>Intellectual property</ArticleH2>

      <ArticleParagraph>
        All intellectual property rights in the app, documentation, and Services belong to us or our licensors. Your right to use the app is licensed, not sold. You have no ownership rights in our intellectual property beyond what these terms expressly grant.
      </ArticleParagraph>

      <ArticleH2>Changes to our services and terms</ArticleH2>

      <ArticleParagraph>
        We may update the app and Services from time to time to improve functionality, add features, or address security issues. We may also update these terms. When we make material changes, we will notify you through the app or by email. Your continued use of Folio after such changes constitutes acceptance of the updated terms.
      </ArticleParagraph>

      <ArticleH2>Termination</ArticleH2>

      <ArticleParagraph>
        You may stop using Folio at any time by deleting the app. We may suspend or terminate your access if you breach these terms, though we will give you notice and an opportunity to remedy the breach where reasonably practicable. Upon termination, you must cease all use of the Services. Provisions that by their nature should survive termination will remain in effect.
      </ArticleParagraph>

      <ArticleH2>Governing law and disputes</ArticleH2>

      <ArticleParagraph>
        These terms are governed by the laws of England and Wales. Any disputes arising from or relating to these terms or your use of our Services shall be subject to the exclusive jurisdiction of the courts of England and Wales. If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. We may transfer our rights and obligations under these terms to another organization, but this will not affect your rights.
      </ArticleParagraph>

      <ArticleH2>Contact us</ArticleH2>

      <ArticleParagraph>
        If you have questions about these terms or need support, please email us at <a href="mailto:support@folio.id" className="underline hover:text-[#737373] transition-colors">support@folio.id</a>. For privacy-related inquiries, contact <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>.
      </ArticleParagraph>
    </LegalPageLayout>
  )
}
