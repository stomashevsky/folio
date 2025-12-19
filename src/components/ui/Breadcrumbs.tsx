import { Link } from 'react-router-dom'

export type BreadcrumbItem = {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumbs component with BreadcrumbList schema.org markup for SEO.
 * 
 * @example
 * <Breadcrumbs items={[
 *   { name: 'Home', url: '/' },
 *   { name: 'Blog', url: '/blog' },
 *   { name: 'Article Title', url: '/blog/article-slug' }
 * ]} />
 */
export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (items.length === 0) return null

  // Generate BreadcrumbList schema for SEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://folio.id${item.url}`,
    })),
  }

  return (
    <>
      {/* BreadcrumbList Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center gap-2 text-sm ${className}`}
      >
        <ol className="flex items-center gap-2 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            
            return (
              <li key={item.url} className="flex items-center gap-2">
                {isLast ? (
                  <span 
                    className="text-[#737373]" 
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link 
                      to={item.url} 
                      className="text-[#0a0a0a] hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                    <span className="text-[#a3a3a3]" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
