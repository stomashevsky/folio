import { useTranslation, Trans } from 'react-i18next'
import { LocalizedLink } from '../components/ui'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import digitalCredentialsCards from '../assets/images/blog-digital-credentials-cards.png'

export default function DigitalCredentialsGovernmentArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'digital-credentials-government'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jul 14, 2025"
      category="Company"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p2`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/blog/albanian-diaspora-voter-registration" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p3`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleImage
        src={digitalCredentialsCards}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p5`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p6`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p7`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p8`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p9`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p10`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p11`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p12`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p13`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p14`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p15`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p16`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p17`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p18`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p19`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p20`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p21`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_5`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p22`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p23`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p24`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/government" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
