import { Link } from 'react-router-dom'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleList, ArticleTable } from '../components/ui'
import type { ArticleTableColumn, ArticleTableRow } from '../components/ui'

const comparisonColumns: ArticleTableColumn[] = [
  { key: 'feature', header: 'Feature' },
  { key: 'folio', header: 'Folio' },
  { key: 'onfido', header: 'Onfido' },
  { key: 'veriff', header: 'Veriff' },
  { key: 'yoti', header: 'Yoti' },
  { key: 'jumio', header: 'Jumio' },
]

const comparisonRows: ArticleTableRow[] = [
  { feature: 'Document verification', folio: 'Yes', onfido: 'Yes', veriff: 'Yes', yoti: 'Yes', jumio: 'Yes' },
  { feature: 'Liveness detection', folio: 'Yes', onfido: 'Yes', veriff: 'Yes', yoti: 'Yes', jumio: 'Yes' },
  { feature: 'NFC chip reading', folio: 'Yes', onfido: 'Yes', veriff: 'Yes', yoti: 'Limited', jumio: 'Yes' },
  { feature: 'EUDI compatible', folio: 'Yes', onfido: 'Planned', veriff: 'Planned', yoti: 'Limited', jumio: 'Planned' },
  { feature: 'Consumer wallet app', folio: 'Yes', onfido: 'No', veriff: 'No', yoti: 'Yes', jumio: 'No' },
  { feature: 'Transparent pricing', folio: 'Yes', onfido: 'Custom quote', veriff: 'Custom quote', yoti: 'Custom quote', jumio: 'Custom quote' },
  { feature: 'Self-service setup', folio: 'Yes', onfido: 'Sales call', veriff: 'Yes', yoti: 'No', jumio: 'Sales call' },
]

export default function BestIdentityVerificationPlatformsArticlePage() {
  return (
    <BlogArticleLayout
      title="Best identity verification platforms in 2025"
      description="A practical comparison of identity verification platforms for businesses. Learn which solution fits your needs: Folio, Onfido, Veriff, Yoti, or Jumio."
      date="Dec 19, 2025"
      category="Research"
      slug="best-identity-verification-platforms"
    >
      <ArticleParagraph>
        You need to verify your users. Maybe you are launching a fintech app, running a marketplace, or building something that requires knowing who is on the other side. The question is not whether to verify, but which platform to use.
      </ArticleParagraph>

      <ArticleParagraph>
        After testing the major players, here is what actually matters when choosing an identity verification platform, and which ones deliver.
      </ArticleParagraph>

      <ArticleH2>What you actually need</ArticleH2>

      <ArticleParagraph>
        Most platforms offer similar core features: document scanning, face matching, liveness detection. The differences are in the details:
      </ArticleParagraph>

      <ArticleList>
        <li>Can you try it without a sales call?</li>
        <li>How fast can you integrate?</li>
        <li>What happens when verification fails?</li>
        <li>How much does it actually cost?</li>
        <li>Does it work with the documents your users have?</li>
      </ArticleList>

      <ArticleParagraph>
        These practical questions matter more than feature checklists. A platform with every feature is useless if integration takes three months.
      </ArticleParagraph>

      <ArticleH2>Quick comparison</ArticleH2>

      <ArticleTable columns={comparisonColumns} rows={comparisonRows} />

      <ArticleH2>Folio: verification plus a wallet your users keep</ArticleH2>

      <ArticleParagraph>
        <Link to="/platform/id-verification" className="underline hover:text-[#737373] transition-colors">Folio</Link> does something different. Instead of just verifying users once and forgetting about them, Folio gives verified users a digital wallet where they store their documents. This creates ongoing value for both sides.
      </ArticleParagraph>

      <ArticleParagraph>
        For businesses, Folio offers the full verification stack: document verification for 200+ countries, liveness detection, face matching, and NFC chip reading for passports. The platform is already EUDI compatible, which matters if you operate in Europe or plan to.
      </ArticleParagraph>

      <ArticleParagraph>
        The practical advantage is speed. You can sign up, test the API, and integrate without waiting for a sales team. Pricing is transparent. Documentation is clear. If you are a startup or mid-size company that needs to move fast, this matters.
      </ArticleParagraph>

      <ArticleParagraph>
        The <Link to="/wallet" className="underline hover:text-[#737373] transition-colors">consumer wallet</Link> side means your users get something useful from verification. Instead of just checking a box, they get a secure place to store their passport, ID, and travel documents. This can improve conversion because users see value in completing verification.
      </ArticleParagraph>

      <ArticleH2>Onfido: the enterprise choice</ArticleH2>

      <ArticleParagraph>
        Onfido is what you pick when your compliance team has specific requirements and you have budget to match. The platform covers 195+ countries and has deep integrations with banking and financial services workflows.
      </ArticleParagraph>

      <ArticleParagraph>
        The trade-off is complexity. Expect sales calls, custom pricing discussions, and longer integration timelines. Onfido was acquired by Entrust in 2024, so the roadmap may shift. For large enterprises with dedicated compliance teams, this complexity is manageable. For startups, it can be a bottleneck.
      </ArticleParagraph>

      <ArticleH2>Veriff: fast verification, volume pricing</ArticleH2>

      <ArticleParagraph>
        Veriff focuses on speed: under 6 seconds for straightforward verifications. The Estonian company has grown quickly and offers a self-service option that lets you start without a sales call.
      </ArticleParagraph>

      <ArticleParagraph>
        Pricing is volume-based, which works well if you have predictable verification needs. The platform covers biometric verification, document checks, and proof of address. For marketplaces and sharing economy businesses, Veriff is often a good fit.
      </ArticleParagraph>

      <ArticleH2>Yoti: age verification specialist</ArticleH2>

      <ArticleParagraph>
        Yoti combines identity verification with a consumer identity app that has over 12 million downloads. The platform is particularly strong in age verification for regulated industries like alcohol, gambling, and adult content.
      </ArticleParagraph>

      <ArticleParagraph>
        The company has partnerships with government identity programs, especially in the UK. Yoti offers both reusable identity and one-time verification options. If your primary need is proving users are over 18 or 21, Yoti has specialized features for this. For broader identity verification needs, the platform is less comprehensive than alternatives.
      </ArticleParagraph>

      <ArticleH2>Jumio: the legacy player</ArticleH2>

      <ArticleParagraph>
        Jumio has been around the longest and has processed billions of verifications. The platform offers comprehensive features including <Link to="/platform/kyc" className="underline hover:text-[#737373] transition-colors">AML screening</Link> and address verification. It supports 200+ countries with thousands of document types.
      </ArticleParagraph>

      <ArticleParagraph>
        The focus is on enterprise clients. Expect negotiated pricing, dedicated implementation support, and features designed for heavily regulated industries. If you are a large bank or gambling company with complex compliance needs, Jumio can handle it. If you need to launch in weeks rather than months, look elsewhere.
      </ArticleParagraph>

      <ArticleH2>How to decide</ArticleH2>

      <ArticleParagraph>
        Your choice depends on your situation:
      </ArticleParagraph>

      <ArticleList>
        <li><strong>Moving fast with limited budget:</strong> Folio or Veriff. Both offer self-service and transparent pricing.</li>
        <li><strong>European market and EUDI compliance:</strong> Folio is already compatible. Others are still planning.</li>
        <li><strong>Enterprise with complex compliance:</strong> Onfido or Jumio. They have the certifications and enterprise support.</li>
        <li><strong>Age verification focus:</strong> Yoti. Strong in regulated industries requiring age checks.</li>
        <li><strong>Want users to get ongoing value:</strong> Folio. The wallet means users benefit beyond verification.</li>
      </ArticleList>

      <ArticleH2>Test before you commit</ArticleH2>

      <ArticleParagraph>
        The best way to choose is to test. Try the platforms with real documents from your target markets. Check how they handle edge cases: expired documents, poor lighting, unusual ID formats. See how the API documentation reads. Talk to their support.
      </ArticleParagraph>

      <ArticleParagraph>
        Identity verification is not something you want to switch frequently. Take time to test properly, but do not let the evaluation drag on. A platform that lets you start testing quickly is often a platform that lets you integrate quickly too.
      </ArticleParagraph>

      <ArticleParagraph>
        If you want to see how Folio works from the user side, <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">download the free app</Link> and try storing your own documents. It takes two minutes and shows you what your users will experience.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
