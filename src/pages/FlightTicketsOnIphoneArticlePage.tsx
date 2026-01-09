import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout } from '../components/ui'
import flightTicketsImage from '../assets/images/blog-flight-tickets-folio.png'
import { useTranslation } from 'react-i18next'

export default function FlightTicketsOnIphoneArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])
  return (
    <BlogArticleLayout
      title={t('blog:articles.flight-tickets-on-iphone.title', 'You have 30 seconds to find your boarding pass. Where is it?')}
      description={t('blog:articles.flight-tickets-on-iphone.description', 'The gate is closing, your phone has 47 PDFs, and the barcode is somewhere. Here\'s how to never lose a boarding pass again.')}
      date="Jul 22, 2025"
      category="Product"
      slug="flight-tickets-on-iphone"
    >
      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:flight-tickets-on-iphone.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p4')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p5')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p6')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:flight-tickets-on-iphone.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p7')}
      </ArticleParagraph>

      <ArticleImage
        src={flightTicketsImage}
        alt={t('articles:flight-tickets-on-iphone.img_alt')}
      />

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p8')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p9')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:flight-tickets-on-iphone.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p11')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:flight-tickets-on-iphone.p12')}
      </ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  )
}
