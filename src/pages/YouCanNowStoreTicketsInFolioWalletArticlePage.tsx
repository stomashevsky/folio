import { useTranslation, Trans } from 'react-i18next'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import storeTicketsImage from '../assets/images/blog-store-tickets-folio.png'

export default function YouCanNowStoreTicketsInFolioWalletArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'you-can-now-store-tickets-in-folio-wallet'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jun 18, 2025"
      category="Product"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p3`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>

      <ArticleImage
        src={storeTicketsImage}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p5`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p6`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p7`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p8`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
