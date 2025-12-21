import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleBlockquote, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import albaniaVoterRegistration from '../assets/images/blog-albanian-diaspora-voter-registration.png'
import { useTranslation, Trans } from 'react-i18next'

export default function AlbanianDiasporaArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title="Albanian diaspora voter registration surges 525% with Folio Wallet"
      description="In a historic milestone for digital democracy, Albania has successfully enfranchised its diaspora to register to vote using a secure digital wallet solution, with over 245,000 Albanians abroad approved to vote in the upcoming May 11 parliamentary elections."
      date="Mar 28, 2025"
      category="Company"
      slug="albanian-diaspora-voter-registration"
    >
      <ArticleParagraph>
        <Trans i18nKey="articles:albanian-diaspora-voter-registration.p1" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:albanian-diaspora-voter-registration.p2" />
      </ArticleParagraph>

      <ArticleImage
        src={albaniaVoterRegistration}
        alt={t('articles:albanian-diaspora-voter-registration.img_alt')}
      />

      <ArticleH2>{t('articles:albanian-diaspora-voter-registration.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:albanian-diaspora-voter-registration.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:albanian-diaspora-voter-registration.p4" />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:albanian-diaspora-voter-registration.p5')}
      </ArticleParagraph>

      <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
        <li><Trans i18nKey="articles:albanian-diaspora-voter-registration.list1_item1" /></li>
        <li><Trans i18nKey="articles:albanian-diaspora-voter-registration.list1_item2" /></li>
        <li><Trans i18nKey="articles:albanian-diaspora-voter-registration.list1_item3" /></li>
        <li><Trans i18nKey="articles:albanian-diaspora-voter-registration.list1_item4" />
          <ul className="ml-6 mt-2 space-y-1 list-disc">
            <li>{t('articles:albanian-diaspora-voter-registration.list1_item4_sub1')}</li>
            <li>{t('articles:albanian-diaspora-voter-registration.list1_item4_sub2')}</li>
            <li>{t('articles:albanian-diaspora-voter-registration.list1_item4_sub3')}</li>
          </ul>
        </li>
      </ul>

      <ArticleH2>{t('articles:albanian-diaspora-voter-registration.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:albanian-diaspora-voter-registration.p6" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:albanian-diaspora-voter-registration.p7" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:albanian-diaspora-voter-registration.p8" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:albanian-diaspora-voter-registration.p9" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:albanian-diaspora-voter-registration.h2_3')}</ArticleH2>

      <ArticleBlockquote>
        {t('articles:albanian-diaspora-voter-registration.blockquote')}
      </ArticleBlockquote>

      <ArticleParagraph>
        <Trans i18nKey="articles:albanian-diaspora-voter-registration.p10" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:albanian-diaspora-voter-registration.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:albanian-diaspora-voter-registration.p11')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:albanian-diaspora-voter-registration.h2_5')}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:albanian-diaspora-voter-registration.p12"
          components={{ 0: <LocalizedLink to="/#get-the-app" className="underline hover:text-[#737373] transition-colors" /> }}
        />
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
