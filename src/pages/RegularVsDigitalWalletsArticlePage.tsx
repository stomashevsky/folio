import { useTranslation, Trans } from 'react-i18next'
import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout } from '../components/ui'
import folioScreen from '../assets/images/blog-regular-vs-digital-folio-screen.png'

export default function RegularVsDigitalWalletsArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'regular-vs-digital-wallets'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Feb 10, 2024"
      category="Research"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>

      <ArticleImage src={folioScreen} alt={t(`${slug}.img_alt`)} />

      <ArticleParagraph>
        {t(`${slug}.p2`, { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p3`}
          ns="articles"
          components={{ strong: <strong /> }}
        />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p4`}
          ns="articles"
          components={{ strong: <strong /> }}
        />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p5`}
          ns="articles"
          components={{ strong: <strong /> }}
        />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p6`}
          ns="articles"
          components={{ strong: <strong /> }}
        />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p7`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p8`)}</ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  )
}
