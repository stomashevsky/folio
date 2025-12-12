import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleBlockquote } from '../components/ui'

export default function AlbanianDiasporaArticlePage() {
  return (
    <BlogArticleLayout
      title="Albanian diaspora voter registration surges 525% with Folio Wallet"
      description="In a historic milestone for digital democracy, Albania has successfully enfranchised its diaspora to register to vote using a secure digital wallet solution, with over 245,000 Albanians abroad approved to vote in the upcoming May 11 parliamentary elections."
      date="Mar 28, 2025"
      category="Company"
      slug="albanian-diaspora-voter-registration"
    >
      <ArticleParagraph>
        The initiative, led by the <strong>Central Election Commission (CEC)</strong> in partnership with <strong>Folio Technologies</strong>, exceeded its original registration target of 100,000 by over 300%, representing a <strong>525% increase</strong> compared to estimated previous diaspora participation in the last election.
      </ArticleParagraph>

      <ArticleParagraph>
        "This is a historic moment for elections in Albania, as for the first time, our fellow citizens residing outside the Republic of Albania will have the opportunity to vote from where they live," said <strong>Ilirjan Celibashi</strong>, State Election Commissioner. "Working with Folio has been a transformative experience. Their innovative approach and unwavering commitment didn't just help us exceed our goals for voter registration, they set a new standard of excellence for how digital identity solutions should be delivered in Albania and worldwide."
      </ArticleParagraph>

      <ArticleH2>Enabling a borderless democracy</ArticleH2>

      <ArticleParagraph>
        Albania is home to an estimated 1.6 million diaspora citizens, many of whom face practical and financial barriers to participating in elections. In anticipation of the 2025 national election, the CEC selected Folio Technologies through a public tender to develop and deliver a secure, accessible, and transparent remote registration system.
      </ArticleParagraph>

      <ArticleParagraph>
        The solution leveraged the <strong>Folio Remote Registration Platform and Digital Wallet</strong> to provide a seamless voter registration experience via mobile and web channels, offering identity verification, address validation, and a digital voter card to track registration status.
      </ArticleParagraph>

      <ArticleParagraph>
        Highlights of the Initiative:
      </ArticleParagraph>

      <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
        <li><strong>Total Profiles Created</strong>: 365,166</li>
        <li><strong>Applications Submitted</strong>: 294,155</li>
        <li><strong>Registrations Approved</strong>: 245,975</li>
        <li><strong>Primary Registration Channels</strong>:
          <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>Mobile App: 49%</li>
            <li>Mobile Web: 46%</li>
            <li>Desktop: 5%</li>
          </ul>
        </li>
      </ul>

      <ArticleH2>Key features and solutions</ArticleH2>

      <ArticleParagraph>
        <strong>Frictionless User Experience:</strong> The Folio platform enabled citizens to complete their registration securely and easily across devices, with biometric verification and real-time application updates.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Omnichannel Accessibility:</strong> The system supported mobile and desktop use, with most users choosing Folio wallet, in which an official registration card provided users with the live status of their application.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>High-Trust Identity Verification:</strong> Folio incorporated facial recognition, liveness detection, government document matching, and AI-powered document processing to ensure legitimacy.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Data Protection by Design:</strong> Using advanced edge-based encryption, all personal data remained within government-controlled infrastructure, safeguarding citizen privacy.
      </ArticleParagraph>

      <ArticleH2>Voices from the diaspora</ArticleH2>

      <ArticleBlockquote>
        "The online platform made it easy for me to register to vote without traveling back to Albania. It was straightforward and secure," said one registrant living in Italy.
      </ArticleBlockquote>

      <ArticleParagraph>
        <strong>Jona Josifi</strong>, CEC Project Lead, added: "Folio's expertise was critical in developing a secure and user-friendly platform that met our stringent requirements."
      </ArticleParagraph>

      <ArticleH2>A model for global digital democracy</ArticleH2>

      <ArticleParagraph>
        With the success of Albania's diaspora registration, Folio has not only delivered a robust technical platform but also created a new benchmark for international digital enfranchisement. This initiative demonstrates how governments can effectively engage global citizens through secure, mobile-first technology.
      </ArticleParagraph>

      <ArticleH2>About Folio Technologies</ArticleH2>

      <ArticleParagraph>
        Folio is a next-generation digital identity and credential platform enabling secure, user-controlled identity services across public and private sectors. <a href="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio's digital wallet app</a> is rated 4.6 stars on Google Play and 4.8 stars on the App Store and is used in over 120 countries worldwide.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
