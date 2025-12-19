import { ReactNode } from 'react'

interface AISummaryItem {
  question: string
  answer: string
}

interface AISummaryProps {
  /** Main title/heading for the summary section */
  title?: string
  /** Brief description under the title */
  description?: string
  /** Array of Q&A items for AI citation */
  items: AISummaryItem[]
  /** Optional className for styling */
  className?: string
}

/**
 * AI-optimized summary component for structured content.
 * 
 * This component creates content in a format that AI systems 
 * can easily parse and cite:
 * - Clear Q&A structure
 * - Semantic HTML (definition lists)
 * - Visually hidden but accessible to crawlers
 * 
 * Usage:
 * ```tsx
 * <AISummary
 *   title="About Folio"
 *   items={[
 *     { question: "What is Folio?", answer: "Folio is a digital wallet..." },
 *     { question: "Is Folio free?", answer: "Yes, Folio is free..." }
 *   ]}
 * />
 * ```
 */
export default function AISummary({ title, description, items, className = '' }: AISummaryProps) {
  return (
    <section className={`bg-[#fafafa] rounded-xl p-6 md:p-8 ${className}`}>
      {title && (
        <h2 className="font-semibold text-lg md:text-xl text-[#0a0a0a] mb-2">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-[#737373] text-base mb-6">
          {description}
        </p>
      )}
      <dl className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-[#e5e5e5] pb-4 last:border-0 last:pb-0">
            <dt className="font-medium text-[#0a0a0a] text-base mb-1">
              {item.question}
            </dt>
            <dd className="text-[#525252] text-base leading-relaxed">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

interface AIDefinitionProps {
  /** The term being defined */
  term: string
  /** The definition */
  definition: string
  /** Optional additional content */
  children?: ReactNode
}

/**
 * AI-optimized definition component for key terms.
 * 
 * Creates semantic HTML that AI systems can easily parse
 * for definitions and explanations.
 */
export function AIDefinition({ term, definition, children }: AIDefinitionProps) {
  return (
    <div className="bg-[#fafafa] rounded-xl p-6 md:p-8">
      <dl>
        <dt className="font-semibold text-lg text-[#0a0a0a] mb-2">
          {term}
        </dt>
        <dd className="text-[#525252] text-base leading-relaxed">
          {definition}
          {children && <div className="mt-4">{children}</div>}
        </dd>
      </dl>
    </div>
  )
}

interface AIFeatureListProps {
  /** Title for the feature list */
  title: string
  /** Array of features with name and description */
  features: Array<{
    name: string
    description: string
  }>
}

/**
 * AI-optimized feature list component.
 * 
 * Creates structured content for product features
 * that AI can easily parse and cite.
 */
export function AIFeatureList({ title, features }: AIFeatureListProps) {
  return (
    <section className="bg-[#fafafa] rounded-xl p-6 md:p-8">
      <h3 className="font-semibold text-lg text-[#0a0a0a] mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3">
            <span className="text-[#0a0a0a] font-medium shrink-0">•</span>
            <span>
              <strong className="text-[#0a0a0a]">{feature.name}:</strong>{' '}
              <span className="text-[#525252]">{feature.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export type { AISummaryItem, AISummaryProps, AIDefinitionProps, AIFeatureListProps }
