import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import blogOrganizeEventTicketsHero from '../assets/images/blog-organize-tickets-bookings-hero.png'
import { useTranslation, Trans } from 'react-i18next'

export default function OrganizeEventTicketsArticlePage() {
  const { t } = useTranslation('articles')

  return (
    <BlogArticleLayout
      title={t('organize-tickets-bookings.title')}
      description={t('organize-tickets-bookings.description')}
      date="Sep 2, 2025"
      category="Research"
      slug="organize-event-tickets"
    >
      <ArticleParagraph>
        {t('organize-tickets-bookings.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p2')}
      </ArticleParagraph>

      <ArticleImage
        src={blogOrganizeEventTicketsHero}
        alt={t('organize-tickets-bookings.img_alt')}
      />

      <ArticleH2>{t('organize-tickets-bookings.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p4" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p5" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p6" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p7" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p8" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p9" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('organize-tickets-bookings.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p11')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p13')}
      </ArticleParagraph>

      <ArticleH2>{t('organize-tickets-bookings.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p14')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p15" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p16" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p17" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p18" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p19" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('organize-tickets-bookings.h2_4')}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey="organize-tickets-bookings.p20"
          components={{
            LocalizedLink: <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p21" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p22" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p23" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="organize-tickets-bookings.p24" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p25')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p26')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p27')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('organize-tickets-bookings.p28')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
