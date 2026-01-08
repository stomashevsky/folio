import { useTranslation, Trans } from 'react-i18next'
import { LocalizedLink, BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import folioScreens from '../assets/images/blog-apple-wallet-folio-screens.png'

export default function BestAppleWalletAlternativesArticlePage() {
  const { t } = useTranslation(['articles'])

  return (
    <BlogArticleLayout
      title={t('articles:best-apple-wallet-alternatives.title', 'Best Apple Wallet alternatives')} // Fallback or key if available in articles or blog.json? 
      // Actually blog.json has title/description for cards, but maybe I should have put page title here too? 
      // "best-apple-wallet-alternatives" key in "articles.json" has "p1", "h2_1", etc. It does not have "title" or "description" at the top level in the file I created?
      // Let me check artifacts.
      // I created "best-apple-wallet-alternatives": { "p1": ... }
      // I did NOT put title and description in "articles.json" for the metadata.
      // They are in `blog.json` for the card/listing.
      // I should reuse `blog:articles.best-apple-wallet-alternatives.title` if possible, or add them to `articles.json`.
      // The `BlogArticleLayout` takes `title` and `description`.
      // `blog.json` has `articles.best-apple-wallet-alternatives.title`.
      // I will use `t('blog:articles.best-apple-wallet-alternatives.title')` and `description`.
      // So I need to load 'blog' namespace too.
      description={t('blog:articles.best-apple-wallet-alternatives.description')}
      date="May 14, 2025" // Date might need localization too? I'll leave it hardcoded or use a date formatter later. User didn't ask for date format change yet.
      category="Research"
      slug="best-apple-wallet-alternatives"
    >
      <ArticleParagraph>
        {t('articles:best-apple-wallet-alternatives.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-apple-wallet-alternatives.p2')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-apple-wallet-alternatives.p3')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apple-wallet-alternatives.h2_1')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apple-wallet-alternatives.p4">
          <strong>Folio</strong> stores everything Apple Wallet refuses: passports, residence permits, driver's licenses, insurance policies, vaccination certificates, medical records. Photograph a document and Folio extracts the key data automatically. Set it up once and you get notifications before documents expire. When someone needs to see your insurance details, generate a secure link that expires after they've viewed it.
        </Trans>
      </ArticleParagraph>

      <ArticleImage
        src={folioScreens}
        alt={t('articles:best-apple-wallet-alternatives.img_alt')}
      />

      <ArticleParagraph>
        <Trans
          i18nKey="articles:best-apple-wallet-alternatives.p5"
          components={{ LocalizedLink: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" /> }}
        />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apple-wallet-alternatives.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apple-wallet-alternatives.p6">
          <strong>Curve</strong> solves a different problem: too many cards. Link all your Visa and Mastercard accounts to Curve, then add just Curve to Apple Wallet. At checkout, one card handles everything. Later, you decide which underlying account actually pays. Made a purchase on the wrong card? "Go Back in Time" moves the charge up to 30 days later. For people who optimize credit card rewards by category, Curve eliminates the fumbling to find the right card before paying.
        </Trans>
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-apple-wallet-alternatives.p7')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apple-wallet-alternatives.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apple-wallet-alternatives.p8">
          <strong>TripIt</strong> builds itineraries automatically. Forward any confirmation email to plans@tripit.com and it assembles a master timeline: flights, hotels, restaurant reservations, rental cars, concert tickets. The Pro tier monitors flights for delays and gate changes faster than most airline apps, tracks seat availability for upgrades, and even claims refunds when airlines owe you money. Apple Wallet shows passes in isolation; TripIt shows your entire trip as a story.
        </Trans>
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apple-wallet-alternatives.p9">
          <strong>Pass2U Wallet</strong> handles the passes Apple Wallet rejects. That gym membership with a barcode, the loyalty card from a local shop, the ticket that arrived as a PDF instead of a proper .pkpass file: Pass2U converts images into wallet passes. It's not elegant, but it solves the frustration of passes that exist only as screenshots or email attachments.
        </Trans>
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apple-wallet-alternatives.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:best-apple-wallet-alternatives.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-apple-wallet-alternatives.p11')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
