import { useTranslation, Trans } from 'react-i18next'
import { LocalizedLink } from '../components/ui'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleList } from '../components/ui'

export default function CompleteGuideIdentityVerificationArticlePage() {
  const { t } = useTranslation('articles')
  const slug = 'complete-guide-identity-verification'

  return (
    <BlogArticleLayout
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      date="Aug 25, 2025"
      category="Guides"
      slug={slug}
    >
      <ArticleParagraph>{t(`${slug}.p1`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p2`)}</ArticleParagraph>

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

      <ArticleList>
        <li><Trans i18nKey={`${slug}.li_1`} ns="articles" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey={`${slug}.li_2`} ns="articles" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey={`${slug}.li_3`} ns="articles" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey={`${slug}.li_4`} ns="articles" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey={`${slug}.li_5`} ns="articles" components={{ strong: <strong /> }} /></li>
      </ArticleList>

      <ArticleParagraph>{t(`${slug}.p10`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_3`)}</ArticleH2>
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

      <ArticleH2>{t(`${slug}.h2_4`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p15`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p16`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p17`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p18`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p19`)}</ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_5`)}</ArticleH2>
      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p20`}
          ns="articles"
          components={{
            strong: <strong />,
            LocalizedLink: <LocalizedLink to="/platform/kyc" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
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

      <ArticleH2>{t(`${slug}.h2_6`)}</ArticleH2>
      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p24`}
          ns="articles"
          components={{
            strong: <strong />,
            LocalizedLink: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p25`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>
      <ArticleParagraph>
        <Trans i18nKey={`${slug}.p26`} ns="articles" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t(`${slug}.h2_7`)}</ArticleH2>
      <ArticleParagraph>{t(`${slug}.p27`)}</ArticleParagraph>

      <ArticleList>
        <li><Trans i18nKey={`${slug}.li_6`} ns="articles" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey={`${slug}.li_7`} ns="articles" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey={`${slug}.li_8`} ns="articles" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey={`${slug}.li_9`} ns="articles" components={{ strong: <strong /> }} /></li>
        <li><Trans i18nKey={`${slug}.li_10`} ns="articles" components={{ strong: <strong /> }} /></li>
      </ArticleList>

      <ArticleParagraph>{t(`${slug}.p28`)}</ArticleParagraph>
      <ArticleParagraph>{t(`${slug}.p29`)}</ArticleParagraph>
      <ArticleParagraph>
        <Trans
          i18nKey={`${slug}.p30`}
          ns="articles"
          components={{
            LocalizedLink: <LocalizedLink to="/wallet#get-the-app" className="underline hover:text-[#737373] transition-colors" />
          }}
        />
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
