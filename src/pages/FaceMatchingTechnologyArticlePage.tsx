import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import blogFaceMatchingVerification from '../assets/images/blog-face-matching-verification.png'
import { useTranslation, Trans } from 'react-i18next'

export default function FaceMatchingTechnologyArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:articles.face-matching-technology.title', 'Face matching technology: how businesses verify identity online')}
      description={t('blog:articles.face-matching-technology.description', 'Face matching compares a live selfie to an ID photo to confirm identity. Learn how this technology works, where it\'s used, and what makes it different from face recognition.')}
      date="Apr 22, 2025"
      category="Business"
      slug="face-matching-technology"
    >
      <ArticleParagraph>
        {t('articles:face-matching-technology.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:face-matching-technology.p2" />
      </ArticleParagraph>

      <ArticleImage
        src={blogFaceMatchingVerification}
        alt={t('articles:face-matching-technology.img_alt')}
      />

      <ArticleH2>{t('articles:face-matching-technology.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:face-matching-technology.p4" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:face-matching-technology.p5" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:face-matching-technology.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p6')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p7')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:face-matching-technology.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p8')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p9')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p10')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:face-matching-technology.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p11')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p12')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:face-matching-technology.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p13')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p14')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:face-matching-technology.h2_6')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:face-matching-technology.p15')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
