import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, ArticleSectionCTA } from '../components/ui'
import ageVerificationFlow from '../assets/images/blog-age-verification-flow.png'
import { useTranslation, Trans } from 'react-i18next'

export default function AgeVerificationRequirementsArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:articles.age-verification-requirements.title')}
      description={t('blog:articles.age-verification-requirements.description')}
      date="Sep 27, 2025"
      category="Business"
      slug="age-verification-requirements"
    >
      <ArticleParagraph>
        {t('articles:age-verification-requirements.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p2')}
      </ArticleParagraph>

      <ArticleImage
        src={ageVerificationFlow}
        alt={t('articles:age-verification-requirements.img_alt')}
      />

      <ArticleH2>{t('articles:age-verification-requirements.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p4')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:age-verification-requirements.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p5" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p6" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p7" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p8" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p9" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:age-verification-requirements.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p11')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p12')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:age-verification-requirements.h2_4')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p13" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p14" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p15" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p16" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:age-verification-requirements.p17" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:age-verification-requirements.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p18')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p19')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p20')}
      </ArticleParagraph>

      <ArticleSectionCTA
        to="/solutions/age-compliance"
        titleKey="ageCompliance.hero.tagline"
        descriptionKey="ageCompliance.hero.description"
        namespace="solutions"
      />

      <ArticleParagraph>
        {t('articles:age-verification-requirements.p21')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
