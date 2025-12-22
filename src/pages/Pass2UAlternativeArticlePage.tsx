import { useTranslation, Trans } from 'react-i18next'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleTable, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import blogPass2uAlternativeScreens from '../assets/images/blog-pass2u-alternative-screens.png'

export default function Pass2UAlternativeArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'pass2u-alternative'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Feb 25, 2025"
      category="Research"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p3`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p5`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p6`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p7`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p8`)}</ArticleParagraph>

      <ArticleImage
        src={blogPass2uAlternativeScreens}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p9`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>

      <ArticleTable
        columns={[
          { header: 'Feature', key: 'feature' },
          { header: 'Pass2U', key: 'pass2u' },
          { header: 'Folio Wallet', key: 'folio' },
        ]}
        rows={[
          { feature: 'Barcode/QR passes', pass2u: 'Yes', folio: 'Yes' },
          { feature: 'Full ticket details', pass2u: 'Barcode only', folio: 'Complete ticket with all info' },
          { feature: 'PDF attachments', pass2u: 'No', folio: 'Yes' },
          { feature: 'ID documents', pass2u: 'No', folio: 'Passports, licenses, IDs' },
          { feature: 'Platform', pass2u: 'iOS only', folio: 'iOS and Android' },
          { feature: 'Cloud sync', pass2u: 'No', folio: 'Yes, encrypted' },
          { feature: 'Security', pass2u: 'Local storage only', folio: 'AES-256, zero-knowledge' },
          { feature: 'Price', pass2u: 'Free / Pro subscription', folio: 'Free' },
        ]}
      />

      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
