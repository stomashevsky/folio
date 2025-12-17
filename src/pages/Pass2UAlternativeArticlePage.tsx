import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleBlockquote, ArticleTable } from '../components/ui'
import { Link } from 'react-router-dom'

export default function Pass2UAlternativeArticlePage() {
  return (
    <BlogArticleLayout
      title="Pass2U alternative: A smarter way to organize your passes"
      description="Pass2U extends Apple Wallet with custom cards. But what if you need more? Discover an app that organizes all your documents with real security."
      date="Sep 10, 2025"
      category="Research"
      slug="pass2u-alternative"
    >
      <ArticleParagraph>
        Pass2U is a popular app for creating custom wallet passes. It lets you turn any barcode, QR code, or ticket into a pass that works with Apple Wallet. For people who want to store loyalty cards, membership IDs, or event tickets, it's been a useful tool. But Pass2U has limitations. And some users are looking for a more comprehensive solution.
      </ArticleParagraph>

      <ArticleH2>What Pass2U does well</ArticleH2>

      <ArticleParagraph>
        Pass2U fills a gap in Apple Wallet. Many stores and services don't offer native Wallet support. Pass2U lets you create your own passes by scanning barcodes or entering numbers manually. You can organize loyalty cards, membership IDs, coupons, and event tickets. The passes integrate directly with Apple Wallet, so they appear on your lock screen at relevant locations.
      </ArticleParagraph>

      <ArticleH2>Where Pass2U falls short</ArticleH2>

      <ArticleParagraph>
        Pass2U is focused on passes. Not documents. You can store barcodes and QR codes, but not PDFs, photos, or complex documents. There's no support for passports, driver's licenses, or travel insurance. And security is basic. No encryption. No zero-knowledge architecture. Your data is stored locally on your device. If you lose your phone, your passes are gone. And Android users are left out entirely.
      </ArticleParagraph>

      <ArticleH2>Folio Wallet: A complete alternative</ArticleH2>

      <ArticleParagraph>
        Folio Wallet stores everything Pass2U does, plus much more. Loyalty cards, membership IDs, and tickets are supported. But you can also store passports, driver's licenses, ID cards, travel insurance, and any other document you need.
      </ArticleParagraph>

      <ArticleParagraph>
        Smart import lets you add documents from photos, PDFs, or emails. Folio extracts the details automatically. No manual entry required. Cross-platform support means it works on both iOS and Android. Your documents sync securely across all your devices.
      </ArticleParagraph>

      <ArticleParagraph>
        Real security with AES-256 encryption and zero-knowledge architecture protects your data. Even Folio can't read your documents. Shared folders let you organize documents by trip, family, or purpose and share securely with others.
      </ArticleParagraph>

      <ArticleH2>Pass2U vs Folio Wallet</ArticleH2>

      <ArticleTable
        columns={[
          { header: 'Feature', key: 'feature' },
          { header: 'Pass2U', key: 'pass2u' },
          { header: 'Folio Wallet', key: 'folio' },
        ]}
        rows={[
          { feature: 'Loyalty cards', pass2u: '✓', folio: '✓' },
          { feature: 'Event tickets', pass2u: '✓', folio: '✓' },
          { feature: 'ID documents', pass2u: '—', folio: '✓' },
          { feature: 'Travel documents', pass2u: '—', folio: '✓' },
          { feature: 'PDF & photo import', pass2u: '—', folio: '✓' },
          { feature: 'Cross-platform', pass2u: '~iOS only', folio: 'iOS & Android' },
          { feature: 'Security', pass2u: '~Basic', folio: 'AES-256, zero-knowledge' },
          { feature: 'Cloud backup', pass2u: '—', folio: '✓' },
        ]}
      />

      <ArticleParagraph>
        Choose Pass2U if you only need to store barcodes and QR codes for Apple Wallet. Choose <Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</Link> if you want a complete document wallet that stores everything securely, works on any device, and protects your data with real encryption.
      </ArticleParagraph>

      <ArticleBlockquote>
        Your passes. Your documents. Your tickets. All in one secure place. On any device.
      </ArticleBlockquote>
    </BlogArticleLayout>
  )
}
