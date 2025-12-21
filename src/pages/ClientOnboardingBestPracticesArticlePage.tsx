import { useTranslation, Trans } from 'react-i18next'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import onboardingScreens from '../assets/images/blog-client-onboarding-screens.png'

export default function ClientOnboardingBestPracticesArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'client-onboarding-best-practices'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Jun 9, 2025"
      category="Business"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleImage
        src={onboardingScreens}
        alt={t(`${slug}.img_alt`)}
      />

      <ArticleParagraph>{t(`${slug}.p3`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_1`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p4`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p5`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_2`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p6`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p7`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p8`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p9`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p11`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p12`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p13`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_5`)}</ArticleH2>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p14`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p15`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p16`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p17`)}</ArticleParagraph>
    </BlogArticleLayout>
  )
}
