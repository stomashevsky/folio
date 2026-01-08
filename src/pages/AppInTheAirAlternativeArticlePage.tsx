import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import flightUpdatesImage from '../assets/images/blog-app-in-the-air-live-updates.png'
import { useTranslation, Trans } from 'react-i18next'

export default function AppInTheAirAlternativeArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title="App in the Air shut down. Here's where frequent flyers are going instead."
      description="After years of tracking flights for millions of travelers, App in the Air is gone. If you're looking for a replacement that does even more, Folio Wallet is the answer."
      date="Aug 26, 2025"
      category="Research"
      slug="app-in-the-air-alternative"
    >
      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p2')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:app-in-the-air-alternative.p3"
          components={{ 0: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" /> }}
        />
      </ArticleParagraph>

      <ArticleH2>{t('articles:app-in-the-air-alternative.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p4')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p5')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p6')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:app-in-the-air-alternative.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p7')}
      </ArticleParagraph>

      <ArticleImage
        src={flightUpdatesImage}
        alt={t('articles:app-in-the-air-alternative.img_alt')}
      />

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p8')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:app-in-the-air-alternative.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p9')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p11')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:app-in-the-air-alternative.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p13')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:app-in-the-air-alternative.p14')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
