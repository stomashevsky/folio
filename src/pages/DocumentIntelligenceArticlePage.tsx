import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '../components/ui'
import { LocalizedLink } from '../components/ui'
import { useTranslation, Trans } from 'react-i18next'

export default function DocumentIntelligenceArticlePage() {
  const { t } = useTranslation(['articles', 'blog'])
  return (
    <BlogArticleLayout
      title={t('blog:articles.document-intelligence.title', 'Document intelligence: AI-powered document processing explained')}
      description={t('blog:articles.document-intelligence.description', 'Document intelligence uses AI to automatically classify, extract, and verify information from documents. Learn how this technology streamlines business processes and improves compliance.')}
      date="Feb 11, 2025"
      category="Business"
      slug="document-intelligence"
    >
      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p1" />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:document-intelligence.p2')}
      </ArticleParagraph>

      <ArticleH2>{t('articles:document-intelligence.h2_1')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:document-intelligence.p3')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:document-intelligence.p4')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p5" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p6" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p7" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p8" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:document-intelligence.h2_2')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:document-intelligence.p9')}
      </ArticleParagraph>

      <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
        <li><Trans i18nKey="articles:document-intelligence.li1" /></li>
        <li><Trans i18nKey="articles:document-intelligence.li2" /></li>
        <li><Trans i18nKey="articles:document-intelligence.li3" /></li>
        <li><Trans i18nKey="articles:document-intelligence.li4" /></li>
        <li><Trans i18nKey="articles:document-intelligence.li5" /></li>
        <li><Trans i18nKey="articles:document-intelligence.li6" /></li>
      </ul>

      <ArticleH2>{t('articles:document-intelligence.h2_3')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:document-intelligence.p10')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:document-intelligence.p11')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p12" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p13" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p14" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p15" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p16" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:document-intelligence.h2_4')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:document-intelligence.p17')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p18" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p19" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p20" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p21" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:document-intelligence.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('articles:document-intelligence.p22')}
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p23" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p24" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p25" />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:document-intelligence.p26" />
      </ArticleParagraph>

      <ArticleH2>{t('articles:document-intelligence.h2_6')}</ArticleH2>

      <ArticleParagraph>
        <Trans
          i18nKey="articles:document-intelligence.p27"
          components={{ 0: <LocalizedLink to="/platform/document-intelligence" className="underline hover:text-[#737373] transition-colors" /> }}
        />
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:document-intelligence.p28')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:document-intelligence.p29')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('articles:document-intelligence.p30')}
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
