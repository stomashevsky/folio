import { useTranslation } from 'react-i18next'
import { ArticleAppCTA, ArticleH2, ArticleImage, ArticleParagraph, BlogArticleLayout, HowToSchema } from '../components/ui'
import medicalScreen from '../assets/images/blog-medical-card-folio-screen.png'

export default function HowToAddAndStoreYourMedicalCardArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'how-to-add-and-store-your-medical-card'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jan 28, 2024"
      category="Product"
      slug={slug}
    >
      <HowToSchema
        name={t(`${slug}.title`)}
        description={t(`${slug}.description`)}
        totalTime="PT5M"
        steps={[
          { name: "Download Folio app", text: "Install Folio Wallet from the App Store or Google Play Store on your iPhone or Android device." },
          { name: "Open the app", text: "Launch Folio and create an account or sign in with your existing account." },
          { name: "Select health category", text: "Navigate to the health documents category in the app." },
          { name: "Scan your medical card", text: "Use your phone camera to scan your physical insurance card, or import an existing photo of the card." },
          { name: "Review extracted data", text: "Folio automatically extracts text including member ID, group number, and policy details. Verify the information is correct." },
          { name: "Save the card", text: "Save the card to your digital wallet. It will be stored securely with end-to-end encryption." },
        ]}
      />
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>

      <ArticleImage src={medicalScreen} alt={t(`${slug}.img_alt`)} />

      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>
      <ArticleParagraph>
        {t(`${slug}.p3`, { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p5`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p6`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p7`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p8`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>

      <ArticleAppCTA />
    </BlogArticleLayout>
  )
}
