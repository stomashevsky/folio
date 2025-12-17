import { LegalPageLayout, ArticleH2, ArticleParagraph, ArticleList } from '../components/ui'

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of use"
      description="Terms and conditions for using Folio Wallet app and services"
      lastUpdated="December 17, 2025"
      slug="terms"
    >
      <ArticleParagraph>
        Thank you for using Folio Wallet. These Terms of Use apply to your use of the Folio mobile application, related online services, and any documentation we provide. By using Folio, you agree to these terms.
      </ArticleParagraph>

      <ArticleParagraph>
        Our <a href="/privacy" className="underline hover:text-[#737373] transition-colors">Privacy Policy</a> explains how we collect and use your personal data. It is an important document that you should read alongside these terms.
      </ArticleParagraph>

      <ArticleH2>Who we are</ArticleH2>

      <ArticleParagraph>
        Folio Technologies Limited is a company registered in England (Company Number 07236594). Our registered office is at 88 Baker Street, London W1U 6TQ, United Kingdom. We license you to use the Folio app and provide related services.
      </ArticleParagraph>

      <ArticleH2>What Folio does</ArticleH2>

      <ArticleParagraph>
        Folio is a digital identity platform that helps you securely store and manage your documents. We support document verification and authentication, but we do not participate in any contracts or services that third parties may offer you through the app.
      </ArticleParagraph>

      <ArticleParagraph>
        The app allows you to interact with our partners and share your personal data with third parties of your choosing. You are in complete control of these interactions. Before sharing data with any third party, make sure you are comfortable with their privacy practices.
      </ArticleParagraph>

      <ArticleH2>Using Folio Wallet</ArticleH2>

      <ArticleParagraph>
        You may download and use Folio on your personal devices for non-commercial purposes. Here is what you can do:
      </ArticleParagraph>

      <ArticleList>
        <li>Store and manage your personal documents securely</li>
        <li>Share your verified information with third parties you choose</li>
        <li>Use our documentation to support your use of the app</li>
        <li>Access your data offline once downloaded</li>
      </ArticleList>

      <ArticleParagraph>
        You agree not to:
      </ArticleParagraph>

      <ArticleList>
        <li>Use the app for any unlawful purpose or in a fraudulent manner</li>
        <li>Reverse engineer, decompile, or create derivative works from the app</li>
        <li>Share access to your account or transfer it to others without our consent</li>
        <li>Attempt to compromise our systems or interfere with other users</li>
        <li>Collect data from our systems without authorization</li>
      </ArticleList>

      <ArticleH2>Your backup key</ArticleH2>

      <ArticleParagraph>
        Due to our privacy safeguards, you cannot recover access to your account unless you have saved a Backup Key. If you do not save one and lose access, we cannot help you recover your data. We strongly recommend saving your Backup Key in a secure location.
      </ArticleParagraph>

      <ArticleH2>Privacy and security</ArticleH2>

      <ArticleParagraph>
        Your privacy is fundamental to how Folio works. All your activity is encrypted via a secure and modern cipher suite. Your personal information is encrypted in your Folio wallet, with only reference data stored on our servers to detect tampering and protect you from fraud.
      </ArticleParagraph>

      <ArticleParagraph>
        We will never share your personal data with third parties without your explicit consent. While we examine anonymized trends and patterns to improve our services, we have no visibility into your private information.
      </ArticleParagraph>

      <ArticleH2>Accuracy of services</ArticleH2>

      <ArticleParagraph>
        We use reasonable skill and care in verifying documents, but we cannot guarantee that verification results are always accurate or that documents are genuine. You are responsible for the accuracy of your documentation and keeping it up to date. The app and services are provided as is.
      </ArticleParagraph>

      <ArticleH2>Intellectual property</ArticleH2>

      <ArticleParagraph>
        All intellectual property rights in the app, documentation, and services belong to us or our licensors. Your rights to use the app are licensed, not sold. You have no ownership rights beyond what these terms grant you.
      </ArticleParagraph>

      <ArticleH2>Limitations of liability</ArticleH2>

      <ArticleParagraph>
        We are responsible for foreseeable loss or damage caused by our failure to comply with these terms or use reasonable care. However, we are not responsible for:
      </ArticleParagraph>

      <ArticleList>
        <li>Loss or damage that is not foreseeable</li>
        <li>Business losses (the app is for personal use)</li>
        <li>Damage you could have avoided by following our advice or applying updates</li>
        <li>Issues caused by events outside our control</li>
      </ArticleList>

      <ArticleParagraph>
        Nothing in these terms limits our liability for death or personal injury caused by negligence, fraud, or anything else that cannot be legally excluded.
      </ArticleParagraph>

      <ArticleH2>Updates and changes</ArticleH2>

      <ArticleParagraph>
        We may update the app and services from time to time to improve performance, add features, or address security issues. We may also update these terms. When we make significant changes, we will notify you through the app or by email. Continuing to use Folio after changes means you accept the updated terms.
      </ArticleParagraph>

      <ArticleH2>Ending your use</ArticleH2>

      <ArticleParagraph>
        You can stop using Folio at any time by deleting the app. We may end your access if you break these terms, though we will give you a chance to fix things first if possible. If we end your access, you must stop using the app immediately.
      </ArticleParagraph>

      <ArticleH2>General</ArticleH2>

      <ArticleParagraph>
        These terms are governed by English law, and you can bring legal proceedings in English courts. If any part of these terms is found to be unenforceable, the rest remains in effect. We may transfer our rights and obligations to another organization, but this will not affect your rights.
      </ArticleParagraph>

      <ArticleH2>Contact us</ArticleH2>

      <ArticleParagraph>
        If you have questions about these terms or need support, please email us at <a href="mailto:support@folio.id" className="underline hover:text-[#737373] transition-colors">support@folio.id</a>. For privacy-related inquiries, contact <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors">privacy@folio.id</a>.
      </ArticleParagraph>
    </LegalPageLayout>
  )
}
