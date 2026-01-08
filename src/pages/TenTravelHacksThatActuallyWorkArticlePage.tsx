import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import folioScreensImage from '../assets/images/blog-10-hacks-folio-screens.png'
import { useTranslation, Trans } from 'react-i18next'

export default function TenTravelHacksThatActuallyWorkArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])

  return (
    <BlogArticleLayout
      title={t('blog:articles.10-travel-hacks-that-actually-work.title', '10 travel hacks that actually work (and 3 that don\'t)')}
      description={t('blog:articles.10-travel-hacks-that-actually-work.description', 'Most travel tips are useless. These ten actually save time and money. Plus three popular hacks that sound good but rarely work in practice.')}
      date="Aug 10, 2025"
      category="Research"
      slug="10-travel-hacks-that-actually-work"
    >
      <ArticleParagraph>
        {t('articles:10-travel-hacks-that-actually-work.intro')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:10-travel-hacks-that-actually-work.p1')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:10-travel-hacks-that-actually-work.h2_1')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p2" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p3" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p4" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p5" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:10-travel-hacks-that-actually-work.p6"
          components={{ 0: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" /> }}
        />
      </ArticleParagraph>

      <ArticleImage
        src={folioScreensImage}
        alt={t('articles:10-travel-hacks-that-actually-work.img_alt')}
      />

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p7" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p8" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p9" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p10" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p11" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:10-travel-hacks-that-actually-work.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p12" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p13" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:10-travel-hacks-that-actually-work.p14" />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:10-travel-hacks-that-actually-work.p15')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
