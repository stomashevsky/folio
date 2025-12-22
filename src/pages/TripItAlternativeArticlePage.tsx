import { useTranslation, Trans } from 'react-i18next'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import blogTripitAlternativeScreens from '../assets/images/blog-tripit-alternative-screens.png'

export default function TripItAlternativeArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'tripit-alternative'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Apr 8, 2025"
      category="Research"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p3`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p5`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p6`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p7`)}</ArticleParagraph>

      <ArticleImage
        src={blogTripitAlternativeScreens}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p8`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
