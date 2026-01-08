import { ReactNode } from 'react'
import Navbar from '../Navbar'
import FooterSection from '../sections/FooterSection'
import { usePageTitle } from '../../hooks/usePageTitle'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { getOgImageUrl } from '../../configs/ogImages'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

interface LegalPageLayoutProps {
  /** Page title - displayed as H1 */
  title: string
  /** Page description for meta tags */
  description: string
  /** Last updated date (e.g., "December 17, 2025") */
  lastUpdated: string
  /** Label for "Last updated" (for localization) */
  lastUpdatedLabel?: string
  /** URL slug for canonical URL (e.g., "terms" or "privacy") */
  slug: string
  /** Page content */
  children: ReactNode
}

/**
 * Shared layout component for legal pages (Terms of Use, Privacy Policy)
 * Simpler than BlogArticleLayout - no KeepReadingSection or Back button
 * 
 * Usage:
 * ```tsx
 * <LegalPageLayout
 *   title="Terms of Use"
 *   description="Terms and conditions for using Folio Wallet"
 *   lastUpdated="December 17, 2025"
 *   slug="terms"
 * >
 *   <ArticleH2>Introduction</ArticleH2>
 *   <ArticleParagraph>Welcome to Folio...</ArticleParagraph>
 * </LegalPageLayout>
 * ```
 */
export default function LegalPageLayout({
  title,
  description,
  lastUpdated,
  lastUpdatedLabel = 'Last updated',
  slug,
  children,
}: LegalPageLayoutProps) {
  useScrollToTop()
  const { currentLang } = useLocalizedPath()
  
  const ogImage = getOgImageUrl('folio-app-hero.png')
  const canonicalUrl = `https://folio.id/${currentLang}/${slug}`

  usePageTitle({
    title: `${title} | Folio`,
    description: description,
    ogType: 'website',
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl,
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
        name: title,
        item: canonicalUrl,
      },
    ],
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* BreadcrumbList schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbListSchema),
          }}
        />
        <section className="bg-white border-[#e5e5e5] border-b border-l-0 border-r-0 border-solid border-t-0 flex flex-col gap-6 items-center px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start justify-center px-6 md:px-6 py-0 relative shrink-0 w-full max-w-[768px]">
            {/* Header with title and last updated */}
            <div className="flex flex-col gap-4 md:gap-5 items-start relative shrink-0 w-full">
              {/* Last updated date */}
              <p className="text-sm text-[#737373] w-full text-center">
                {lastUpdatedLabel}: {lastUpdated}
              </p>

              {/* Title */}
              <h1 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] text-center w-full">
                {title}
              </h1>
            </div>

            {/* Page content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              {children}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

export type { LegalPageLayoutProps }
