import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import { useTranslation, Trans } from 'react-i18next'

export default function KycAmlComplianceArticlePage() {
  const { t } = useTranslation('articles')

  return (
    <BlogArticleLayout
      title={t('kyc-aml-compliance.title')}
      description={t('kyc-aml-compliance.description')}
      date="Mar 14, 2025"
      category="Business"
      slug="kyc-aml-compliance"
    >
      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p1" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('kyc-aml-compliance.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('kyc-aml-compliance.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('kyc-aml-compliance.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p4" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p5" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p6" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('kyc-aml-compliance.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('kyc-aml-compliance.p7')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p8" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p9" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p10" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p11" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('kyc-aml-compliance.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('kyc-aml-compliance.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p13" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p14" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p15" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p16" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p17" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('kyc-aml-compliance.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('kyc-aml-compliance.p18')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p19" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p20" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p21" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p22" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p23" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('kyc-aml-compliance.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('kyc-aml-compliance.p24')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p25" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p26" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p27" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p28" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p29" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('kyc-aml-compliance.h2_6')}</ArticleH2>

      <ArticleParagraph>
        {t('kyc-aml-compliance.p30')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p31" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p32" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p33" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="kyc-aml-compliance.p34" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans
          ns="articles"
          i18nKey="kyc-aml-compliance.p35"
          components={{
            LocalizedLink: <LocalizedLink to="/platform/id-verification" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('kyc-aml-compliance.p36')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
