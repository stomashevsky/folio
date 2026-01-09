import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, ArticleSectionCTA, ArticleAppCTA } from '../components/ui'
import mdlScreenImage from '../assets/images/blog-mdl-folio-screen.png'
import { useTranslation, Trans } from 'react-i18next'

export default function MobileDriversLicenseArticlePage() {
  const { t } = useTranslation('articles')

  return (
    <BlogArticleLayout
      title={t('mobile-drivers-license.title')}
      description={t('mobile-drivers-license.description')}
      date="Aug 12, 2025"
      category="Product"
      slug="mobile-drivers-license"
    >
      <ArticleParagraph>
        {t('mobile-drivers-license.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p2')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="mobile-drivers-license.p3" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('mobile-drivers-license.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('mobile-drivers-license.p4')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p5')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p6')}
      </ArticleParagraph>

      <ArticleImage
        src={mdlScreenImage}
        alt={t('mobile-drivers-license.img_alt')}
      />

      <ArticleH2>{t('mobile-drivers-license.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('mobile-drivers-license.p7')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p8')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p9')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p10')}
      </ArticleParagraph>

      <ArticleH2>{t('mobile-drivers-license.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('mobile-drivers-license.p11')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p13')}
      </ArticleParagraph>

      <ArticleH2>{t('mobile-drivers-license.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('mobile-drivers-license.p14')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p15')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p16')}
      </ArticleParagraph>

      <ArticleH2>{t('mobile-drivers-license.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('mobile-drivers-license.p17')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p18')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p19')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('mobile-drivers-license.p20', { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleSectionCTA
        to="/government/playground"
        titleKey="government.hero.tagline"
        descriptionKey="government.hero.description"
        namespace="government"
      />

      <ArticleAppCTA />
    </BlogArticleLayout>
  )
}
