import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, ArticleSectionCTA } from '../components/ui'
import nfcScanningFlow from '../assets/images/blog-nfc-scanning-flow.png'
import { useTranslation, Trans } from 'react-i18next'

export default function NfcIdentityVerificationArticlePage() {
  const { t } = useTranslation('articles')

  return (
    <BlogArticleLayout
      title={t('nfc-identity-verification.title')}
      description={t('nfc-identity-verification.description')}
      date="Oct 20, 2025"
      category="Business"
      slug="nfc-identity-verification"
    >
      <ArticleParagraph>
        {t('nfc-identity-verification.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('nfc-identity-verification.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('nfc-identity-verification.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('nfc-identity-verification.p3')}
      </ArticleParagraph>

      <ArticleImage
        src={nfcScanningFlow}
        alt={t('nfc-identity-verification.img_alt')}
      />

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p4" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p5" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p6" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('nfc-identity-verification.p7')}
      </ArticleParagraph>

      <ArticleH2>{t('nfc-identity-verification.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('nfc-identity-verification.p8')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p9" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p10" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p11" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p12" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('nfc-identity-verification.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('nfc-identity-verification.p13')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p14" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p15" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p16" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans ns="articles" i18nKey="nfc-identity-verification.p17" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('nfc-identity-verification.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('nfc-identity-verification.p18')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('nfc-identity-verification.p19')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('nfc-identity-verification.p20')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('nfc-identity-verification.p21', { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleSectionCTA
        to="/platform/nfc-identity-scan"
        titleKey="nfcIdentityScan.hero.tagline"
        descriptionKey="nfcIdentityScan.hero.description"
        namespace="platform"
      />
    </BlogArticleLayout>
  )
}
