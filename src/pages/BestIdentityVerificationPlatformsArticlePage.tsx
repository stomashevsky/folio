import { useTranslation, Trans } from 'react-i18next';
import { ArticleAppCTA, ArticleH2, ArticleList, ArticleParagraph, ArticleTable, ArticleTableColumn, ArticleTableRow, BlogArticleLayout } from '../components/ui'

export default function BestIdentityVerificationPlatformsArticlePage() {
  const { t } = useTranslation('articles');

  const comparisonColumns: ArticleTableColumn[] = [
    { key: 'feature', header: t('best-identity-verification-platforms.table_col_1') },
    { key: 'folio', header: t('best-identity-verification-platforms.table_col_2') },
    { key: 'onfido', header: t('best-identity-verification-platforms.table_col_3') },
    { key: 'veriff', header: t('best-identity-verification-platforms.table_col_4') },
    { key: 'yoti', header: t('best-identity-verification-platforms.table_col_5') },
    { key: 'jumio', header: t('best-identity-verification-platforms.table_col_6') },
  ];

  const comparisonRows: ArticleTableRow[] = [
    {
      feature: t('best-identity-verification-platforms.table_row_1_feature'),
      folio: t('best-identity-verification-platforms.table_row_1_folio'),
      onfido: t('best-identity-verification-platforms.table_row_1_onfido'),
      veriff: t('best-identity-verification-platforms.table_row_1_veriff'),
      yoti: t('best-identity-verification-platforms.table_row_1_yoti'),
      jumio: t('best-identity-verification-platforms.table_row_1_jumio')
    },
    {
      feature: t('best-identity-verification-platforms.table_row_2_feature'),
      folio: t('best-identity-verification-platforms.table_row_2_folio'),
      onfido: t('best-identity-verification-platforms.table_row_2_onfido'),
      veriff: t('best-identity-verification-platforms.table_row_2_veriff'),
      yoti: t('best-identity-verification-platforms.table_row_2_yoti'),
      jumio: t('best-identity-verification-platforms.table_row_2_jumio')
    },
    {
      feature: t('best-identity-verification-platforms.table_row_3_feature'),
      folio: t('best-identity-verification-platforms.table_row_3_folio'),
      onfido: t('best-identity-verification-platforms.table_row_3_onfido'),
      veriff: t('best-identity-verification-platforms.table_row_3_veriff'),
      yoti: t('best-identity-verification-platforms.table_row_3_yoti'),
      jumio: t('best-identity-verification-platforms.table_row_3_jumio')
    },
    {
      feature: t('best-identity-verification-platforms.table_row_4_feature'),
      folio: t('best-identity-verification-platforms.table_row_4_folio'),
      onfido: t('best-identity-verification-platforms.table_row_4_onfido'),
      veriff: t('best-identity-verification-platforms.table_row_4_veriff'),
      yoti: t('best-identity-verification-platforms.table_row_4_yoti'),
      jumio: t('best-identity-verification-platforms.table_row_4_jumio')
    },
    {
      feature: t('best-identity-verification-platforms.table_row_5_feature'),
      folio: t('best-identity-verification-platforms.table_row_5_folio'),
      onfido: t('best-identity-verification-platforms.table_row_5_onfido'),
      veriff: t('best-identity-verification-platforms.table_row_5_veriff'),
      yoti: t('best-identity-verification-platforms.table_row_5_yoti'),
      jumio: t('best-identity-verification-platforms.table_row_5_jumio')
    },
    {
      feature: t('best-identity-verification-platforms.table_row_6_feature'),
      folio: t('best-identity-verification-platforms.table_row_6_folio'),
      onfido: t('best-identity-verification-platforms.table_row_6_onfido'),
      veriff: t('best-identity-verification-platforms.table_row_6_veriff'),
      yoti: t('best-identity-verification-platforms.table_row_6_yoti'),
      jumio: t('best-identity-verification-platforms.table_row_6_jumio')
    },
    {
      feature: t('best-identity-verification-platforms.table_row_7_feature'),
      folio: t('best-identity-verification-platforms.table_row_7_folio'),
      onfido: t('best-identity-verification-platforms.table_row_7_onfido'),
      veriff: t('best-identity-verification-platforms.table_row_7_veriff'),
      yoti: t('best-identity-verification-platforms.table_row_7_yoti'),
      jumio: t('best-identity-verification-platforms.table_row_7_jumio')
    },
  ];

  return (
    <BlogArticleLayout
      title={t('best-identity-verification-platforms.title')}
      description={t('best-identity-verification-platforms.description')}
      date="2025-01-16"
      category="Guides"
      slug="best-identity-verification-platforms"
    >
      <ArticleParagraph>
        {t('best-identity-verification-platforms.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('best-identity-verification-platforms.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p3')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('best-identity-verification-platforms.li_1')}</li>
        <li>{t('best-identity-verification-platforms.li_2')}</li>
        <li>{t('best-identity-verification-platforms.li_3')}</li>
        <li>{t('best-identity-verification-platforms.li_4')}</li>
        <li>{t('best-identity-verification-platforms.li_5')}</li>
      </ArticleList>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p4')}
      </ArticleParagraph>

      <ArticleH2>{t('best-identity-verification-platforms.h2_2')}</ArticleH2>

      <ArticleTable columns={comparisonColumns} rows={comparisonRows} />

      <ArticleH2>{t('best-identity-verification-platforms.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p5')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p6')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p7')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-identity-verification-platforms.p8')}
      </ArticleParagraph>

      <ArticleH2>{t('best-identity-verification-platforms.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p9')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p10')}
      </ArticleParagraph>

      <ArticleH2>{t('best-identity-verification-platforms.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p11')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p12')}
      </ArticleParagraph>

      <ArticleH2>{t('best-identity-verification-platforms.h2_6')}</ArticleH2>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p13')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p14')}
      </ArticleParagraph>

      <ArticleH2>{t('best-identity-verification-platforms.h2_7')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-identity-verification-platforms.p15" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p16')}
      </ArticleParagraph>

      <ArticleH2>{t('best-identity-verification-platforms.h2_8')}</ArticleH2>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p17')}
      </ArticleParagraph>

      <ArticleList>
        <li><Trans i18nKey="articles:best-identity-verification-platforms.li_6" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey="articles:best-identity-verification-platforms.li_7" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey="articles:best-identity-verification-platforms.li_8" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey="articles:best-identity-verification-platforms.li_9" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey="articles:best-identity-verification-platforms.li_10" components={{ strong: <strong /> }} /></li>
      </ArticleList>

      <ArticleH2>{t('best-identity-verification-platforms.h2_9')}</ArticleH2>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p18')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-identity-verification-platforms.p19')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:best-identity-verification-platforms.p20')}
      </ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  );
}
