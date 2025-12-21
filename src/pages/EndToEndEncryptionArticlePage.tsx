import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import e2eEncryptionRecovery from '../assets/images/blog-e2e-encryption-recovery.png'
import { useTranslation, Trans } from 'react-i18next'

export default function EndToEndEncryptionArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])
  return (
    <BlogArticleLayout
      title={t('blog:articles.end-to-end-encryption.title', 'Why even Folio can\'t see your documents')}
      description={t('blog:articles.end-to-end-encryption.description', 'Your documents in Folio are protected by a secret only you know. Without your Passkey or Recovery Code, no one can access your data, not even us. Here\'s how it works.')}
      date="Oct 7, 2025"
      category="Safety"
      slug="end-to-end-encryption"
    >
      <ArticleParagraph>
        {t('articles:end-to-end-encryption.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p2" />
      </ArticleParagraph>

      <ArticleImage
        src={e2eEncryptionRecovery}
        alt={t('articles:end-to-end-encryption.img_alt')}
      />

      <ArticleH2>{t('articles:end-to-end-encryption.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:end-to-end-encryption.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p4" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p5" />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:end-to-end-encryption.p6')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:end-to-end-encryption.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:end-to-end-encryption.p7')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p8" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p9" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p10" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p11" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:end-to-end-encryption.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:end-to-end-encryption.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:end-to-end-encryption.p13')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:end-to-end-encryption.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:end-to-end-encryption.p14')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p15" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p16" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:end-to-end-encryption.p17" />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:end-to-end-encryption.p18')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
