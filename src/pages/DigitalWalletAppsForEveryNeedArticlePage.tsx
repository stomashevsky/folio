import { useTranslation, Trans } from 'react-i18next'
import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout } from '../components/ui'
import folioScreens from '../assets/images/blog-digital-wallet-apps-folio-screens.png'

export default function DigitalWalletAppsForEveryNeedArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'digital-wallet-apps-for-every-need'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Oct 22, 2024"
      category="Research"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p3`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p5`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleImage
        src={folioScreens}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleParagraph>
        {t(`${slug}.p6`, { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p7`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p8`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p9`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_5`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p10`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_6`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p12`)}</ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  )
}
