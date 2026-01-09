import { useTranslation, Trans } from 'react-i18next';
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, ArticleSectionCTA } from '../components/ui';

import faceScanImage from '../assets/images/blog-biometric-face-scan.png';

export default function BiometricDataPrivacyArticlePage() {
  const { t } = useTranslation('articles');

  return (
    <BlogArticleLayout
      title={t('biometric-data-privacy.title')}
      description={t('biometric-data-privacy.description')}
      date="2025-01-16"
      category="Safety"
      slug="biometric-data-privacy"
    >
      <ArticleParagraph>
        {t('biometric-data-privacy.p1')}
      </ArticleParagraph>

      <ArticleImage
        src={faceScanImage}
        alt={t('biometric-data-privacy.img_alt1')}
      />

      <ArticleParagraph>
        {t('biometric-data-privacy.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('biometric-data-privacy.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('biometric-data-privacy.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('biometric-data-privacy.p4')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('biometric-data-privacy.p5')}
      </ArticleParagraph>

      <ArticleH2>{t('biometric-data-privacy.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('biometric-data-privacy.p6')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p7" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p8" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p9" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p10" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p11" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('biometric-data-privacy.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('biometric-data-privacy.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p13" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p14" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p15" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p16" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:biometric-data-privacy.p17" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('biometric-data-privacy.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('biometric-data-privacy.p18')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('biometric-data-privacy.p19')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('biometric-data-privacy.p20')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('biometric-data-privacy.p21')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:biometric-data-privacy.p22')}
      </ArticleParagraph>

      <ArticleSectionCTA
        to="/platform/liveness-check"
        titleKey="livenessCheck.hero.tagline"
        descriptionKey="livenessCheck.hero.description"
        namespace="platform"
      />
    </BlogArticleLayout>
  );
}
