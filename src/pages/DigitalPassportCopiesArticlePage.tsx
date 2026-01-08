import { useTranslation, Trans } from 'react-i18next'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import blogDigitalPassportCopiesHero from '../assets/images/blog-digital-passport-copies-hero.png'

export default function DigitalPassportCopiesArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'digital-passport-copies'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jun 3, 2025"
      category="Safety"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleImage
        src={blogDigitalPassportCopiesHero}
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

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p10`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p11`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p12`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p13`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p14`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p15`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p16`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p17`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p18`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p19`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p20`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p21`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p22`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p23`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p24`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p25`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p26`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_5`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p27`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p28`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p29`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_6`)}</ArticleH2>
      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p30`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p31`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p32`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
