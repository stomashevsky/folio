import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, ArticleSectionCTA } from '../components/ui'
import eudiWalletHowItWorks from '../assets/images/blog-eudi-wallet-how-it-works.png'
import { useTranslation, Trans } from 'react-i18next'

export default function EudiWalletArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:articles.eudi-wallet.title', 'The EU is giving everyone a digital ID wallet. Here\'s what that means.')}
      description={t('blog:articles.eudi-wallet.description', 'By 2026, every EU country must offer citizens a free digital identity wallet. You\'ll prove your age without showing your birth date, open bank accounts without photocopying your passport, and carry credentials that work across all 27 countries.')}
      date="Oct 25, 2025"
      category="Product"
      slug="eudi-wallet"
    >
      <ArticleParagraph>
        {t('articles:eudi-wallet.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:eudi-wallet.p2" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:eudi-wallet.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p4')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p5')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:eudi-wallet.h2_2')}</ArticleH2>

      <ArticleImage
        src={eudiWalletHowItWorks}
        alt={t('articles:eudi-wallet.img_alt')}
      />

      <ArticleParagraph>
        {t('articles:eudi-wallet.p6')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p7')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p8')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:eudi-wallet.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:eudi-wallet.p9" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:eudi-wallet.p10" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:eudi-wallet.p11" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:eudi-wallet.p12" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:eudi-wallet.p13" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:eudi-wallet.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p14')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p15')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p16')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:eudi-wallet.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p17')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p18')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:eudi-wallet.p19')}
      </ArticleParagraph>

      <ArticleSectionCTA
        to="/government/playground"
        titleKey="government.hero.tagline"
        descriptionKey="government.hero.description"
        namespace="government"
      />

      <ArticleParagraph>
        {t('articles:eudi-wallet.p20')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
