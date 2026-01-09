import { useTranslation, Trans } from 'react-i18next'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, ArticleSectionCTA } from '../components/ui'
import livenessDetectionFace from '../assets/images/blog-liveness-detection-face.png'

export default function WhatIsLivenessDetectionArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'what-is-liveness-detection'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Sep 30, 2025"
      category="Business"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

      <ArticleImage
        src={livenessDetectionFace}
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

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p15`)}</ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p16`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p17`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p18`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p19`)}</ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p20`} ns="articles" components={{ strong: <strong /> }} />
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

      <ArticleH2>{t(`${slug}.h2_5`)}</ArticleH2>

      <ArticleParagraph>{t(`${slug}.p24`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p25`)}</ArticleParagraph>

      <ArticleParagraph>{t(`${slug}.p26`)}</ArticleParagraph>

      <ArticleParagraph>
        {t(`${slug}.p27`, { ns: 'articles' })}
      </ArticleParagraph>

      <ArticleSectionCTA
        to="/platform/liveness-check"
        titleKey="livenessCheck.hero.tagline"
        descriptionKey="livenessCheck.hero.description"
        namespace="platform"
      />
    </BlogArticleLayout>
  )
}
