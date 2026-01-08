import { useTranslation, Trans } from 'react-i18next'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import timelineImage from '../assets/images/blog-wanderlog-timeline.png'

export default function WanderlogAlternativeArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'wanderlog-alternative'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Aug 23, 2025"
      category="Research"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p3`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p5`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p6`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p7`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p8`)}</ArticleParagraph>

      <ArticleImage
        src={timelineImage}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p12`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p13`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p14`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p15`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p16`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p17`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
