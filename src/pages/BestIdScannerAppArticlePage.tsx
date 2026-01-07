import { useTranslation, Trans } from 'react-i18next';
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, LocalizedLink } from '../components/ui';

import idScannerImg from '../assets/images/blog-best-id-scanner-app.png';

export default function BestIdScannerAppArticlePage() {
  const { t } = useTranslation('articles');

  return (
    <BlogArticleLayout
      title={t('best-id-scanner-app.title')}
      description={t('best-id-scanner-app.description')}
      date="2025-01-16"
      category="Guides"
      slug="best-id-scanner-app"
    >
      <ArticleParagraph>
        {t('best-id-scanner-app.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-id-scanner-app.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('best-id-scanner-app.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('best-id-scanner-app.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-id-scanner-app.p4')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-id-scanner-app.p5')}
      </ArticleParagraph>

      <ArticleImage
        src={idScannerImg}
        alt={t('best-id-scanner-app.img_alt1')}
      />

      <ArticleH2>{t('best-id-scanner-app.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('best-id-scanner-app.p6')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-id-scanner-app.p7')}
      </ArticleParagraph>

      <ArticleH2>{t('best-id-scanner-app.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('best-id-scanner-app.p8')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-id-scanner-app.p9')}
      </ArticleParagraph>

      <ArticleH2>{t('best-id-scanner-app.h2_4')}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:best-id-scanner-app.p10"
          components={{ LocalizedLink: <LocalizedLink to="/" className="underline hover:text-[#737373] transition-colors" /> }}
        />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-id-scanner-app.p11')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-id-scanner-app.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-id-scanner-app.p13')}
      </ArticleParagraph>
    </BlogArticleLayout>
  );
}
