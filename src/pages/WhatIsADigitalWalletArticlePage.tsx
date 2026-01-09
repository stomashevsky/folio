import { useTranslation, Trans } from 'react-i18next'
import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout } from '../components/ui'
import folioScreens from '../assets/images/blog-what-is-digital-wallet-folio-screens.png'

export default function WhatIsADigitalWalletArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'what-is-a-digital-wallet'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jan 15, 2024"
      category="Guides"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p3`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>

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

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p7`}
          ns="articles"
          components={{ strong: <strong /> }}
        />
      </ArticleParagraph>

      <ArticleImage
        src={folioScreens}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p8`}
          ns="articles"
          components={{
            strong: <strong />
          }}
        />
      </ArticleParagraph>

      <ArticleAppCTA />

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
