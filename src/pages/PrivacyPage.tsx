import { useTranslation, Trans } from 'react-i18next'
import { LegalPageLayout, ArticleH2, ArticleH3, ArticleParagraph, ArticleList } from '../components/ui'

export default function PrivacyPage() {
  const { t } = useTranslation(['pages', 'common', 'articles'])

  return (
    <LegalPageLayout
      title={t('pages:privacy.title')}
      description={t('pages:privacy.description')}
      lastUpdated={t('pages:privacy.lastUpdated')}
      lastUpdatedLabel={t('common:legal.lastUpdated')}
      slug="privacy"
    >
      <ArticleParagraph>
        {t('articles:privacy_page.intro')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:privacy_page.commitment">
          <strong>Our commitment:</strong> We operate on a zero-knowledge architecture. Your personal documents are encrypted in your wallet, and we cannot access or view your private information. We will never share your personal data with third parties without your explicit consent.
        </Trans>
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.who_we_are.title')}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:privacy_page.who_we_are.p1"
          components={[
            <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors" />
          ]}
        />
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.collect.title')}</ArticleH2>

      <ArticleH3>{t('articles:privacy_page.collect.provide.title')}</ArticleH3>

      <ArticleParagraph>
        {t('articles:privacy_page.collect.provide.p1')}
      </ArticleParagraph>

      <ArticleH3>{t('articles:privacy_page.collect.auto.title')}</ArticleH3>

      <ArticleParagraph>
        {t('articles:privacy_page.collect.auto.p1')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:privacy_page.collect.auto.list.item1')}</li>
        <li>{t('articles:privacy_page.collect.auto.list.item2')}</li>
        <li>{t('articles:privacy_page.collect.auto.list.item3')}</li>
      </ArticleList>

      <ArticleH2>{t('articles:privacy_page.use.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:privacy_page.use.p1')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:privacy_page.use.list.item1')}</li>
        <li>{t('articles:privacy_page.use.list.item2')}</li>
        <li>{t('articles:privacy_page.use.list.item3')}</li>
        <li>{t('articles:privacy_page.use.list.item4')}</li>
        <li>{t('articles:privacy_page.use.list.item5')}</li>
      </ArticleList>

      <ArticleParagraph>
        {t('articles:privacy_page.use.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.security.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:privacy_page.security.p1')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:privacy_page.security.list.item1')}</li>
        <li>{t('articles:privacy_page.security.list.item2')}</li>
        <li>{t('articles:privacy_page.security.list.item3')}</li>
        <li>{t('articles:privacy_page.security.list.item4')}</li>
        <li>{t('articles:privacy_page.security.list.item5')}</li>
        <li>{t('articles:privacy_page.security.list.item6')}</li>
      </ArticleList>

      <ArticleParagraph>
        <Trans i18nKey="articles:privacy_page.security.p2">
          <strong>Account recovery:</strong> During registration, you will be prompted to save a Recovery Code. Due to our zero-knowledge architecture, we cannot help you recover your account or data if you lose this code. Please store it securely.
        </Trans>
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.disclosure.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:privacy_page.disclosure.p1')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:privacy_page.disclosure.list.item1')}</li>
        <li>{t('articles:privacy_page.disclosure.list.item2')}</li>
        <li>{t('articles:privacy_page.disclosure.list.item3')}</li>
        <li>{t('articles:privacy_page.disclosure.list.item4')}</li>
      </ArticleList>

      <ArticleParagraph>
        {t('articles:privacy_page.disclosure.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.transfers.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:privacy_page.transfers.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.retention.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:privacy_page.retention.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.rights.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:privacy_page.rights.p1')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:privacy_page.rights.list.item1')}</li>
        <li>{t('articles:privacy_page.rights.list.item2')}</li>
        <li>{t('articles:privacy_page.rights.list.item3')}</li>
        <li>{t('articles:privacy_page.rights.list.item4')}</li>
        <li>{t('articles:privacy_page.rights.list.item5')}</li>
        <li>{t('articles:privacy_page.rights.list.item6')}</li>
        <li>{t('articles:privacy_page.rights.list.item7')}</li>
      </ArticleList>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:privacy_page.rights.p2"
          components={[
            <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors" />
          ]}
        />
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.cookies.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:privacy_page.cookies.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:privacy_page.cookies.p2')}
      </ArticleParagraph>

      <ArticleList>
        <li>{t('articles:privacy_page.cookies.list.item1')}</li>
        <li>{t('articles:privacy_page.cookies.list.item2')}</li>
        <li>{t('articles:privacy_page.cookies.list.item3')}</li>
      </ArticleList>

      <ArticleParagraph>
        {t('articles:privacy_page.cookies.p3')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.children.title')}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:privacy_page.children.p1"
          components={[
            <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors" />
          ]}
        />
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.changes.title')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:privacy_page.changes.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:privacy_page.contact.title')}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:privacy_page.contact.p1"
          components={[
            <a href="mailto:privacy@folio.id" className="underline hover:text-[#737373] transition-colors" />,
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#737373] transition-colors" />
          ]}
        />
      </ArticleParagraph>
    </LegalPageLayout>
  )
}
