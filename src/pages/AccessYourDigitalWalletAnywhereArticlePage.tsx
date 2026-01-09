import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout } from '../components/ui'
import walletOverviewImage from '../assets/images/blog-wallet-overview-folio.png'
import { useTranslation } from 'react-i18next'

export default function AccessYourDigitalWalletAnywhereArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:articles.access-your-digital-wallet-anywhere.title')}
      description={t('blog:articles.access-your-digital-wallet-anywhere.description')}
      date="Jul 1, 2025"
      category="Product"
      slug="access-your-digital-wallet-anywhere"
    >
      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:access-your-digital-wallet-anywhere.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p4')}
      </ArticleParagraph>

      <ArticleImage
        src={walletOverviewImage}
        alt={t('articles:access-your-digital-wallet-anywhere.img_alt')}
      />

      <ArticleH2>{t('articles:access-your-digital-wallet-anywhere.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p5')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p6')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:access-your-digital-wallet-anywhere.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p7')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:access-your-digital-wallet-anywhere.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p8')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:access-your-digital-wallet-anywhere.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p9')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:access-your-digital-wallet-anywhere.p10')}
      </ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  )
}
