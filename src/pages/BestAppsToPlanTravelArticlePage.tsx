import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import folioScreensImage from '../assets/images/blog-best-apps-folio-screens.png'
import { useTranslation, Trans } from 'react-i18next'

export default function BestAppsToPlanTravelArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:best-apps-to-plan-travel.title')}
      description={t('blog:best-apps-to-plan-travel.description')}
      date="Jul 29, 2025"
      category="Research"
      slug="best-apps-to-plan-travel"
    >
      <ArticleParagraph>
        {t('articles:best-apps-to-plan-travel.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apps-to-plan-travel.h2_1')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apps-to-plan-travel.p2" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-apps-to-plan-travel.p3')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apps-to-plan-travel.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apps-to-plan-travel.p4" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-apps-to-plan-travel.p5')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apps-to-plan-travel.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apps-to-plan-travel.p6" components={{ LocalizedLink: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-apps-to-plan-travel.p7')}
      </ArticleParagraph>

      <ArticleImage
        src={folioScreensImage}
        alt={t('articles:best-apps-to-plan-travel.img_alt')}
      />

      <ArticleH2>{t('articles:best-apps-to-plan-travel.h2_4')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apps-to-plan-travel.p8" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-apps-to-plan-travel.p9')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apps-to-plan-travel.h2_5')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apps-to-plan-travel.p10" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apps-to-plan-travel.p11" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-apps-to-plan-travel.p12" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-apps-to-plan-travel.h2_6')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:best-apps-to-plan-travel.p13')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
