import { useTranslation } from 'react-i18next'
import LocalizedLink from './LocalizedLink'
import { FOCUS_RING_CLASSES } from './focusStyles'
import ImageWithPlaceholder from './ImageWithPlaceholder'
import VideoWithPlaceholder from './VideoWithPlaceholder'

// Hero assets imports
import livenessCheckHero from '../../assets/images/liveness-check-hero.mp4'
import nfcIdentityScanHero from '../../assets/images/nfc-identity-scan-hero.png'
import idVerificationHero from '../../assets/images/id-verification-hero.png'
import documentIntelligenceHero from '../../assets/images/document-intelligence-hero.png'
import faceMatchHero from '../../assets/images/face-match-hero.png'
import ageVerificationHero from '../../assets/images/age-verification-hero.png'
import clientOnboardingHero from '../../assets/images/client-onboarding-hero.png'
import governmentSolutionsHero from '../../assets/images/government-solutions-hero.png'

// Mapping from page paths to hero assets
const HERO_ASSETS: Record<string, { src: string; type: 'image' | 'video' }> = {
  '/platform/liveness-check': { src: livenessCheckHero, type: 'video' },
  '/platform/nfc-identity-scan': { src: nfcIdentityScanHero, type: 'image' },
  '/platform/id-verification': { src: idVerificationHero, type: 'image' },
  '/platform/document-intelligence': { src: documentIntelligenceHero, type: 'image' },
  '/platform/face-match': { src: faceMatchHero, type: 'image' },
  '/solutions/age-compliance': { src: ageVerificationHero, type: 'image' },
  '/solutions/client-onboarding': { src: clientOnboardingHero, type: 'image' },
  '/government/': { src: governmentSolutionsHero, type: 'image' },
  '/government/playground': { src: governmentSolutionsHero, type: 'image' },
}

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
 * Includes hero images/videos from target pages for better visual appeal
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

  // Get hero asset for this path
  const heroAsset = HERO_ASSETS[to]

  // Button styling matching Button component secondary variant
  const buttonClasses = `h-9 px-4 py-2 text-sm bg-[#7676801f] text-[#171717] hover:bg-[#76768033] active:bg-[#76768040] ${FOCUS_RING_CLASSES} disabled:opacity-50 disabled:hover:bg-[#7676801f] font-medium leading-5 box-border flex gap-2 items-center justify-center rounded-full outline-none focus-visible:outline-none transition-colors duration-150 ease-out transform-gpu cursor-pointer whitespace-nowrap`

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center py-6 px-4 my-6 rounded-2xl bg-[#f5f5f5] w-full">
      {/* Text Content - Left on desktop, full width on mobile */}
      <div className="flex flex-col gap-3 items-center md:items-start flex-1 min-w-0">
        <p className="font-bold text-lg text-[#0a0a0a] text-center md:text-left">
          {title}
        </p>
        <p className="font-normal text-base text-[#737373] opacity-80 text-center md:text-left">
          {description}
        </p>
        <div className="flex items-center justify-center md:justify-start mt-2">
          <LocalizedLink to={to} className={buttonClasses}>
            {buttonLabel}
          </LocalizedLink>
        </div>
      </div>

      {/* Image/Video - Right on desktop, top on mobile */}
      {heroAsset && (
        <div className="flex-shrink-0 w-full md:w-[280px]">
          {heroAsset.type === 'video' ? (
            <VideoWithPlaceholder
              src={heroAsset.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl"
              containerClassName="aspect-square rounded-xl"
              lazy={true}
            />
          ) : (
            <ImageWithPlaceholder
              src={heroAsset.src}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
              containerClassName="aspect-square rounded-xl"
            />
          )}
        </div>
      )}
    </div>
  )
}
