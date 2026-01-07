import { useTranslation, Trans } from 'react-i18next';
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage, LocalizedLink } from '../components/ui';

import walletAlternativesImg from '../assets/images/blog-best-google-wallet-alternatives.png';

export default function BestGoogleWalletAlternativesArticlePage() {
  const { t } = useTranslation('articles');

  return (
    <BlogArticleLayout
      title={t('best-google-wallet-alternatives.title')}
      description={t('best-google-wallet-alternatives.description')}
      date="2025-01-16"
      category="Guides"
      slug="best-google-wallet-alternatives"
    >
      <ArticleParagraph>
        {t('best-google-wallet-alternatives.p1')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-google-wallet-alternatives.p2')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-google-wallet-alternatives.p3')}
      </ArticleParagraph>

      <ArticleH2>{t('best-google-wallet-alternatives.h2_1')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-google-wallet-alternatives.p4" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleImage
        src={walletAlternativesImg}
        alt={t('best-google-wallet-alternatives.img_alt1')}
      />

      <ArticleParagraph>
        <Trans
          i18nKey="articles:best-google-wallet-alternatives.p5"
          components={{ LocalizedLink: <LocalizedLink to="/" className="underline hover:text-[#737373] transition-colors" /> }}
        />
      </ArticleParagraph>

      <ArticleH2>{t('best-google-wallet-alternatives.h2_2')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-google-wallet-alternatives.p6" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-google-wallet-alternatives.p7" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-google-wallet-alternatives.p8" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('best-google-wallet-alternatives.h2_3')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-google-wallet-alternatives.p9" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-google-wallet-alternatives.p10" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('best-google-wallet-alternatives.h2_4')}</ArticleH2>

      <ArticleParagraph>
        <Trans i18nKey="articles:best-google-wallet-alternatives.p11" components={{ strong: <strong /> }} />
      </ArticleParagraph>

      <ArticleH2>{t('best-google-wallet-alternatives.h2_5')}</ArticleH2>

      <ArticleParagraph>
        {t('best-google-wallet-alternatives.p12')}
      </ArticleParagraph>

      <ArticleParagraph>
        {t('best-google-wallet-alternatives.p13')}
      </ArticleParagraph>
    </BlogArticleLayout>
  );
}
