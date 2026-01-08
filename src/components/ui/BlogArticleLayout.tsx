import { ReactNode } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../Navbar'
import FooterSection from '../sections/FooterSection'
import KeepReadingSection from '../sections/KeepReadingSection'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { Button } from './index'
import arrowLeftIcon from '../../assets/icons/ArrowLeft.svg'
import { getBlogOgImageUrl } from '../../data/blogArticles'
import { getOgImageUrl } from '../../configs/ogImages'
import { DEFAULT_LANGUAGE } from '../../i18n'
import type { BlogCategory } from '../../data/blogArticles'

interface BlogArticleLayoutProps {
  /** Article title - displayed as H1 */
  title: string
  /** Article description/subtitle */
  description: string
  /** Publication date (e.g., "Sep 4, 2025") */
  date: string
  /** Article category */
  category: Exclude<BlogCategory, 'All'>
  /** Article slug for KeepReadingSection and meta URLs */
  slug: string
  /** Optional hero image */
  image?: string
  /** Optional custom OG title (defaults to title) */
  ogTitle?: string
  /** Optional custom OG description (defaults to description) */
  ogDescription?: string
  /** Article content */
  children: ReactNode
}

/**
 * Shared layout component for all blog articles
 * Includes Navbar, Footer, KeepReadingSection, meta tags, and Back to Blog button
 * 
 * Usage:
 * ```tsx
 * <BlogArticleLayout
 *   title="TripCase alternative: The travel organizer you'll love"
 *   description="TripCase is gone. Your next trip doesn't have to be chaos."
 *   date="Sep 4, 2025"
 *   category="Research"
 *   slug="tripcase-alternative"
 * >
 *   <ArticleParagraph>For years, TripCase was...</ArticleParagraph>
 *   <ArticleH2>Introducing Folio Wallet</ArticleH2>
 * </BlogArticleLayout>
 * ```
 */
export default function BlogArticleLayout({
  title,
  description,
  date,
  category,
  slug,
  ogTitle,
  ogDescription,
  children,
}: BlogArticleLayoutProps) {
  const { t } = useTranslation(['common', 'blog'])
  const { lang } = useParams<{ lang?: string }>()
  const navigate = useNavigate()
  const currentLang = lang || DEFAULT_LANGUAGE
  
  const getLocalizedPath = (path: string) => `/${currentLang}${path}`
  
  // Get translated title and description if available, fallback to props
  const titleKey = `blog:articles.${slug}.title`
  const descriptionKey = `blog:articles.${slug}.description`
  const translatedTitle = t(titleKey, { defaultValue: '' })
  const translatedDescription = t(descriptionKey, { defaultValue: '' })
  const displayTitle = translatedTitle && translatedTitle !== titleKey ? translatedTitle : title
  const displayDescription = translatedDescription && translatedDescription !== descriptionKey ? translatedDescription : description

  useScrollToTop()

  // Use the article cover image for sharing (no in-article hero rendering).
  const ogImage = getBlogOgImageUrl(slug) || getOgImageUrl('folio-app-hero.png')

  usePageTitle({
    title: `${displayTitle} | Folio Blog`,
    description: displayDescription,
    ogType: 'article',
    ogTitle: ogTitle || displayTitle,
    ogDescription: ogDescription || displayDescription,
    ogImage,
    ogUrl: `https://folio.id/${currentLang}/blog/${slug}`,
    canonicalUrl: `https://folio.id/${currentLang}/blog/${slug}`,
  })

  // BreadcrumbList schema for SEO
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://folio.id/${currentLang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `https://folio.id/${currentLang}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: displayTitle,
        item: `https://folio.id/${currentLang}/blog/${slug}`,
      },
    ],
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* BlogPosting schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: displayTitle,
              description: displayDescription,
              datePublished: date,
              image: ogImage,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://folio.id/${currentLang}/blog/${slug}`,
              },
              author: {
                '@type': 'Organization',
                name: 'Folio',
                url: 'https://folio.id',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Folio',
                url: 'https://folio.id',
              },
            }),
          }}
        />
        {/* BreadcrumbList schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbListSchema),
          }}
        />
        <section className="bg-white border-[#e5e5e5] border-b border-l-0 border-r-0 border-solid border-t-0 flex flex-col gap-6 items-center px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start justify-center px-6 md:px-6 py-0 relative shrink-0 w-full max-w-[768px]">
            {/* Meta information and Title */}
            <div className="flex flex-col gap-4 md:gap-5 items-start relative shrink-0 w-full">
              {/* Meta information */}
              <div className="flex flex-wrap gap-4 items-start justify-center leading-5 relative shrink-0 text-sm w-full">
                <p className="relative shrink-0 text-[#0a0a0a]">{date}</p>
                <Link
                  to={getLocalizedPath(`/blog?category=${category}`)}
                  className="relative shrink-0 text-[#737373] hover:text-[#0a0a0a] hover:underline transition-colors cursor-pointer"
                >
                  {t(`blog.categories.${category}`)}
                </Link>
              </div>

              {/* Title and subtitle */}
              <div className="flex flex-col gap-4 md:gap-6 items-center relative shrink-0 text-center w-full">
                <h1 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] min-w-full relative shrink-0 w-[min-content]">
                  {displayTitle}
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  {displayDescription}
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              {children}
            </div>

            {/* Back to blog button */}
            <div className="pt-8">
              <Button
                variant="secondary"
                onClick={() => navigate(getLocalizedPath('/blog'), { state: { restoreScroll: true } })}
                iconPosition="left"
                icon={
                  <img
                    src={arrowLeftIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-4 h-4 shrink-0"
                  />
                }
              >
                {t('blog.backToBlog')}
              </Button>
            </div>
          </div>
        </section>
        <KeepReadingSection currentArticleSlug={slug} />
      </main>
      <FooterSection />
    </div>
  )
}

export type { BlogArticleLayoutProps }

