import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import { useTranslation, Trans } from 'react-i18next'

export default function BestDigitalWalletAppsInCanadaArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:best-digital-wallet-apps-in-canada.title')}
      description={t('blog:best-digital-wallet-apps-in-canada.description')}
      date="Nov 27, 2024"
      category="Research"
      slug="best-digital-wallet-apps-in-canada"
    >
      <ArticleParagraph>
        {t('articles:best-digital-wallet-apps-in-canada.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-digital-wallet-apps-in-canada.h2_1')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-digital-wallet-apps-in-canada.p2" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-digital-wallet-apps-in-canada.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-digital-wallet-apps-in-canada.p3" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-digital-wallet-apps-in-canada.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-digital-wallet-apps-in-canada.p4" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-digital-wallet-apps-in-canada.h2_4')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-digital-wallet-apps-in-canada.p5" components={{ 0: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors" /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-digital-wallet-apps-in-canada.h2_5')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-digital-wallet-apps-in-canada.p6" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-digital-wallet-apps-in-canada.p7')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
