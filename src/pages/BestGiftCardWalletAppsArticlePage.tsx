import { LocalizedLink, BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import blogGiftCardFolioScreen from '../assets/images/blog-gift-card-folio-screen.png'
import { useTranslation, Trans } from 'react-i18next'

export default function BestGiftCardWalletAppsArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:best-gift-card-wallet-apps.title')}
      description={t('blog:best-gift-card-wallet-apps.description')}
      date="Jul 21, 2025"
      category="Research"
      slug="best-gift-card-wallet-apps"
    >
      <ArticleParagraph>
        {t('articles:best-gift-card-wallet-apps.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-gift-card-wallet-apps.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-gift-card-wallet-apps.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:best-gift-card-wallet-apps.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-gift-card-wallet-apps.p4')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-gift-card-wallet-apps.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-gift-card-wallet-apps.p5" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleImage
        src={blogGiftCardFolioScreen}
        alt={t('articles:best-gift-card-wallet-apps.img_alt')}
      />

      <ArticleParagraph>
        <Trans i18nKey="articles:best-gift-card-wallet-apps.p6" components={[<LocalizedLink key="0" to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors">Available free on iOS and Android</LocalizedLink>]} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-gift-card-wallet-apps.p7" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-gift-card-wallet-apps.p8" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-gift-card-wallet-apps.p9" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-gift-card-wallet-apps.p10" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:best-gift-card-wallet-apps.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-gift-card-wallet-apps.p11" components={{ 0: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-gift-card-wallet-apps.p12')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
