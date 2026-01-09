import { useTranslation } from 'react-i18next'
import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout, HowToSchema } from '../components/ui'
import shareTravelImage from '../assets/images/blog-share-travel-folio.png'

export default function HowToShareTravelPlansArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jul 18, 2025"
      category="Product"
      slug={slug}
    >
      <HowToSchema
        name={t(`${slug}.title`)}
        description={t(`${slug}.description`)}
        totalTime="PT10M"
        steps={[
          { name: "Download Folio app", text: "Install Folio Wallet from the App Store or Google Play Store on your phone." },
          { name: "Create a shared folder", text: "Open Folio and create a new folder for your trip. Give it a descriptive name like 'Barcelona Trip 2025'." },
          { name: "Invite travel companions", text: "Tap the share button and invite your friends and family by sending them an invitation link." },
          { name: "Add your bookings", text: "Import bookings by forwarding confirmation emails to your Folio address, uploading PDFs, or photographing printouts." },
          { name: "Let others add their bookings", text: "Anyone in the shared folder can add their own bookings. All documents appear in a shared timeline visible to everyone." },
          { name: "Access documents during the trip", text: "During your trip, anyone can show any document at check-in, train stations, or venues. No need to wait for the person who booked." },
        ]}
      />
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p3`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p5`)}</ArticleParagraph>
      <ArticleParagraph>
        {t(`${slug}.p6`, { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleImage
        src={shareTravelImage}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleParagraph>{t(`${slug}.p7`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p8`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  )
}
