import { useTranslation, Trans } from 'react-i18next'
import { LegalPageLayout, ArticleH2, ArticleParagraph, ArticleList, LocalizedLink } from '../components/ui'

export default function TermsPage() {
  const { t } = useTranslation(['pages', 'common', 'articles'])

  return (
    <LegalPageLayout
      title={t('pages:terms.title')}
      description={t('pages:terms.description')}
      lastUpdated={t('pages:terms.lastUpdated')}
      lastUpdatedLabel={t('common:legal.lastUpdated')}
      slug="terms"
    >
      <ArticleParagraph>
        {t('articles:terms.intro')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:terms.intro_privacy_link"
          components={[
            <LocalizedLink to="/privacy" className="underline hover:text-[#737373] transition-colors" />
          ]}
        />
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.who_we_are.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.who_we_are.content')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.registration.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.registration.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:terms.registration.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.services.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.services.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:terms.services.p2')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:terms.services.list.item1')}</li>
        <li>{t('articles:terms.services.list.item2')}</li>
        <li>{t('articles:terms.services.list.item3')}</li>
        <li>{t('articles:terms.services.list.item4')}</li>
      </ArticleList>

      <ArticleH2>{t('articles:terms.usage.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.usage.p1')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:terms.usage.list.item1')}</li>
        <li>{t('articles:terms.usage.list.item2')}</li>
        <li>{t('articles:terms.usage.list.item3')}</li>
        <li>{t('articles:terms.usage.list.item4')}</li>
        <li>{t('articles:terms.usage.list.item5')}</li>
        <li>{t('articles:terms.usage.list.item6')}</li>
      </ArticleList>

      <ArticleH2>{t('articles:terms.security.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.security.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:terms.security.p2">
          <strong>Important:</strong> Due to our zero-knowledge security architecture, we cannot access your encrypted data. If you lose your Recovery Code and cannot authenticate, we will be unable to help you recover your account or data. We strongly recommend storing your Recovery Code in a secure location, such as a password manager or a physical safe.
        </Trans>
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.privacy.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.privacy.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:terms.privacy.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.disclaimers.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.disclaimers.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:terms.disclaimers.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.liability.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.liability.p1')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:terms.liability.list.item1')}</li>
        <li>{t('articles:terms.liability.list.item2')}</li>
        <li>{t('articles:terms.liability.list.item3')}</li>
        <li>{t('articles:terms.liability.list.item4')}</li>
        <li>{t('articles:terms.liability.list.item5')}</li>
      </ArticleList>

      <ArticleParagraph>
        {t('articles:terms.liability.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.ip.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.ip.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.changes.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.changes.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.termination.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.termination.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.law.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:terms.law.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:terms.contact.title')}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:terms.contact.p1"
          components={[
            <a href="mailto:support@folio.id" className="underline hover:text-[#737373] transition-colors" />,
            <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors" />
          ]}
        />
      </ArticleParagraph>
    </LegalPageLayout>
  )
}
