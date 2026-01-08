import { LocalizedLink } from '../components/ui'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import folioGiftCard from '../assets/images/blog-apple-gift-card-folio-screen.png'
import { useTranslation, Trans } from 'react-i18next'

export default function AppleGiftCardAddToWalletArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title="Apple gift card add to wallet: a step-by-step guide"
      description="Learn how to add your Apple gift card to the Wallet app. Follow simple steps to streamline payments and track balances on your iPhone."
      date="Oct 2, 2024"
      category="Product"
      slug="apple-gift-card-add-to-wallet"
    >
      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:apple-gift-card-add-to-wallet.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p2')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:apple-gift-card-add-to-wallet.p3" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:apple-gift-card-add-to-wallet.p4" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:apple-gift-card-add-to-wallet.p5" />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p6')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:apple-gift-card-add-to-wallet.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p7')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p8')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:apple-gift-card-add-to-wallet.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:apple-gift-card-add-to-wallet.p9" />
      </ArticleParagraph>

      <ArticleImage
        src={folioGiftCard}
        alt={t('articles:apple-gift-card-add-to-wallet.img_alt')}
      />

      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:apple-gift-card-add-to-wallet.p11"
          components={{ 0: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" /> }}
        />
      </ArticleParagraph>

      <ArticleH2>{t('articles:apple-gift-card-add-to-wallet.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p13')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:apple-gift-card-add-to-wallet.p14')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
