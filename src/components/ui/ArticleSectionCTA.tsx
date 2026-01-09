import { useTranslation } from 'react-i18next'
import LocalizedLink from './LocalizedLink'
import { FOCUS_RING_CLASSES } from './focusStyles'

interface ArticleSectionCTAProps {
  to: string
  titleKey: string
  descriptionKey: string
  namespace?: string
  buttonText?: string
}

/**
 * Compact CTA component for blog articles to link to internal site sections
 * Visually consistent with ArticleAppCTA but with a button for navigation
 */
export default function ArticleSectionCTA({
  to,
  titleKey,
  descriptionKey,
  namespace,
  buttonText,
}: ArticleSectionCTAProps) {
  // Auto-detect namespace from path if not provided
  const detectedNamespace = namespace || (() => {
    if (to.startsWith('/platform/')) return 'platform'
    if (to.startsWith('/solutions/')) return 'solutions'
    if (to.startsWith('/government/')) return 'government'
    return 'common'
  })()

  const { t } = useTranslation(detectedNamespace)
  const { t: tCommon } = useTranslation('common')

  const title = t(titleKey)
  const description = t(descriptionKey)
  const buttonLabel = buttonText || tCommon('articleSectionCta.learnMore', 'Learn more')

  // Button styling matching Button component secondary variant
  const buttonClasses = `h-9 px-4 py-2 text-sm bg-[#7676801f] text-[#171717] hover:bg-[#76768033] active:bg-[#76768040] ${FOCUS_RING_CLASSES} disabled:opacity-50 disabled:hover:bg-[#7676801f] font-medium leading-5 box-border flex gap-2 items-center justify-center rounded-full outline-none focus-visible:outline-none transition-colors duration-150 ease-out transform-gpu cursor-pointer whitespace-nowrap`

  return (
    <div className="flex flex-col gap-3 items-center py-6 px-4 my-6 rounded-2xl bg-[#f5f5f5] w-full">
      <p className="font-bold text-base text-[#0a0a0a]">
        {title}
      </p>
      <p className="font-normal text-sm text-[#737373] opacity-80 text-center">
        {description}
      </p>
      <div className="flex items-center justify-center mt-2">
        <LocalizedLink to={to} className={buttonClasses}>
          {buttonLabel}
        </LocalizedLink>
      </div>
    </div>
  )
}
