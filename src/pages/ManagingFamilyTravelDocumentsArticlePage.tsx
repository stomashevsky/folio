import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout } from '../components/ui'
import folioScreensImage from '../assets/images/blog-family-travel-folio-screens.png'
import { useTranslation, Trans } from 'react-i18next'

export default function ManagingFamilyTravelDocumentsArticlePage() {
  const { t } = useTranslation('articles')

  return (
    <BlogArticleLayout
      title={t('managing-family-travel-documents.title')}
      description={t('managing-family-travel-documents.description')}
      date="Aug 7, 2025"
      category="Guides"
      slug="managing-family-travel-documents"
    >
      <ArticleParagraph>
        {t('managing-family-travel-documents.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('managing-family-travel-documents.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('managing-family-travel-documents.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('managing-family-travel-documents.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('managing-family-travel-documents.p4')}
      </ArticleParagraph>

      <ArticleH2>{t('managing-family-travel-documents.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('managing-family-travel-documents.p5')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="managing-family-travel-documents.p6" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="managing-family-travel-documents.p7" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="managing-family-travel-documents.p8" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="managing-family-travel-documents.p9" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleImage
        src={folioScreensImage}
        alt={t('managing-family-travel-documents.img_alt')}
      />

      <ArticleH2>{t('managing-family-travel-documents.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('managing-family-travel-documents.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('managing-family-travel-documents.p11')}
      </ArticleParagraph>

      <ArticleH2>{t('managing-family-travel-documents.h2_4')}</ArticleH2>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="managing-family-travel-documents.p12" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="managing-family-travel-documents.p13" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="managing-family-travel-documents.p14" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('managing-family-travel-documents.p15', { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  )
}
