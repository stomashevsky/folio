import { useTranslation, Trans } from 'react-i18next'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, HowToSchema } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import blogOrganizeTicketsBookingsHero from '../assets/images/blog-organize-tickets-bookings-hero.png'

export default function OrganizeTicketsBookingsArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'organize-tickets-bookings'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jul 8, 2025"
      category="Research"
      slug={slug}
    >
      <HowToSchema
        name={t(`${slug}.title`)}
        description={t(`${slug}.description`)}
        totalTime="PT10M"
        steps={[
          { name: "Download Folio Wallet", text: "Install Folio Wallet from the App Store or Google Play Store on your smartphone." },
          { name: "Import PDF tickets", text: "Open PDF attachments from confirmation emails in Folio. The app extracts dates, times, and barcodes automatically." },
          { name: "Add screenshots and images", text: "Import QR codes or booking confirmations from your photo library. Folio extracts the relevant booking details." },
          { name: "Forward confirmation emails", text: "Forward booking confirmation emails to your Folio address. The app pulls out booking information automatically." },
          { name: "Review your timeline", text: "All bookings appear organized by date. See your entire trip at a glance: flights, trains, hotels, and events in chronological order." },
          { name: "Access tickets offline", text: "Your tickets work without internet. Open Folio at the airport, train station, or venue to show your QR codes even in airplane mode." },
        ]}
      />
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleImage
        src={blogOrganizeTicketsBookingsHero}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p3`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p4`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p5`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p6`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p7`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p8`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p9`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p12`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p13`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p14`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p15`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p16`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p17`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p18`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p19`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>
      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p20`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p21`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p22`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p23`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p24`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p25`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p26`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p27`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p28`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
