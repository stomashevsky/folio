import { useTranslation } from 'react-i18next';
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, ArticleAppCTA } from '../components/ui';

import checkMyTripImg from '../assets/images/blog-checkmytrip-folio-screens.png';

export default function CheckMyTripAlternativeArticlePage() {
  const { t } = useTranslation('articles');

  return (
    <BlogArticleLayout
      title={t('checkmytrip-alternative.title')}
      description={t('checkmytrip-alternative.description')}
      date="2025-01-16"
      category="Guides"
      slug="checkmytrip-alternative"
    >
      <ArticleParagraph>
        {t('checkmytrip-alternative.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('checkmytrip-alternative.p2')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('checkmytrip-alternative.p3')}
      </ArticleParagraph>

      <ArticleH2>{t('checkmytrip-alternative.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('checkmytrip-alternative.p4')}
      </ArticleParagraph>

      <ArticleImage
        src={checkMyTripImg}
        alt={t('checkmytrip-alternative.img_alt1')}
      />

      <ArticleParagraph>
        {t('articles:checkmytrip-alternative.p5')}
      </ArticleParagraph>

      <ArticleH2>{t('checkmytrip-alternative.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('checkmytrip-alternative.p6')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('checkmytrip-alternative.p7')}
      </ArticleParagraph>

      <ArticleH2>{t('checkmytrip-alternative.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('checkmytrip-alternative.p8')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('checkmytrip-alternative.p9')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('checkmytrip-alternative.p10')}
      </ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  );
}
