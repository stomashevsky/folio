import { useTranslation } from 'react-i18next'
import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout } from '../components/ui'
import blogTripCaseAlternativeScreens from '../assets/images/blog-tripcase-alternative-screens.png'

export default function TripCaseAlternativeArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'tripcase-alternative'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jan 21, 2025"
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

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p7`)}</ArticleParagraph>

      <ArticleImage
        src={blogTripCaseAlternativeScreens}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleParagraph>
        {t(`${slug}.p8`, { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleAppCTA />

      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
