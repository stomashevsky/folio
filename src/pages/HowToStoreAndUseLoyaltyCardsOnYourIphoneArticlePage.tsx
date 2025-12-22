import { useTranslation, Trans } from 'react-i18next'
import { LocalizedLink } from '../components/ui'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, HowToSchema } from '../components/ui'
import loyaltyScreen from '../assets/images/blog-loyalty-cards-folio-screen.png'

export default function HowToStoreAndUseLoyaltyCardsOnYourIphoneArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'how-to-store-and-use-loyalty-cards-on-your-iphone'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Mar 5, 2024"
      category="Research"
      slug={slug}
    >
      <HowToSchema
        name={t(`${slug}.title`)}
        description={t(`${slug}.description`)}
        totalTime="PT5M"
        steps={[
          { name: "Choose a digital wallet app", text: "Select a wallet app that supports loyalty cards. Options include Apple Wallet (for supported retailers), Stocard, or Folio for any card type." },
          { name: "Open the app and add a card", text: "Launch the app and tap the add or plus button to start adding a new loyalty card." },
          { name: "Scan your physical card", text: "Use your phone camera to scan the barcode on your physical loyalty card. The app will capture and store the barcode." },
          { name: "Verify the card details", text: "Check that the barcode was captured correctly. Some apps automatically recognize the retailer and add the logo." },
          { name: "Use at checkout", text: "At the store, open the app, find your card, and show the barcode on screen for the cashier to scan." },
        ]}
      />
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p3`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p5`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p6`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p7`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleImage
        src={loyaltyScreen}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p8`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
