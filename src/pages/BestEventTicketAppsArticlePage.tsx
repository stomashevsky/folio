import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import eventTicketsImage from '../assets/images/blog-best-event-ticket-apps.png'
import { useTranslation, Trans } from 'react-i18next'

export default function BestEventTicketAppsArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:the-best-event-ticket-apps.title')}
      description={t('blog:the-best-event-ticket-apps.description')}
      date="Jul 22, 2025"
      category="Research"
      slug="the-best-event-ticket-apps"
    >
      <ArticleParagraph>
        {t('articles:the-best-event-ticket-apps.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:the-best-event-ticket-apps.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:the-best-event-ticket-apps.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:the-best-event-ticket-apps.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:the-best-event-ticket-apps.p4')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:the-best-event-ticket-apps.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:the-best-event-ticket-apps.p5" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:the-best-event-ticket-apps.p6" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:the-best-event-ticket-apps.p7" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('articles:the-best-event-ticket-apps.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:the-best-event-ticket-apps.p8" components={[<LocalizedLink key="0" to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</LocalizedLink>]} />
      </ArticleParagraph>

      <ArticleImage
        src={eventTicketsImage}
        alt={t('articles:the-best-event-ticket-apps.img_alt')}
      />

      <ArticleParagraph>
        {t('articles:the-best-event-ticket-apps.p9')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:the-best-event-ticket-apps.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:the-best-event-ticket-apps.p11')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
