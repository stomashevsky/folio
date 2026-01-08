import { LocalizedLink } from '../components/ui'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import blogDocumentScanningPassport from '../assets/images/blog-document-scanning-passport.png'
import { useTranslation, Trans } from 'react-i18next'

export default function BestDocumentScanningAppsArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:best-document-scanning-apps.title')}
      description={t('blog:best-document-scanning-apps.description')}
      date="Jul 23, 2025"
      category="Research"
      slug="best-document-scanning-apps"
    >
      <ArticleParagraph>
        {t('articles:best-document-scanning-apps.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-document-scanning-apps.p2')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-document-scanning-apps.p3')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-document-scanning-apps.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:best-document-scanning-apps.p4')}
      </ArticleParagraph>

      <ArticleImage
        src={blogDocumentScanningPassport}
        alt={t('articles:best-document-scanning-apps.img_alt')}
      />

      <ArticleParagraph>
        <Trans i18nKey="articles:best-document-scanning-apps.p5" components={{ LocalizedLink: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-document-scanning-apps.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-document-scanning-apps.p6" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-document-scanning-apps.p7" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-document-scanning-apps.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-document-scanning-apps.p8" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-document-scanning-apps.p9" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-document-scanning-apps.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:best-document-scanning-apps.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-document-scanning-apps.p11')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
