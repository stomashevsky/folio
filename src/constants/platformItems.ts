// Icons
import idCardIcon from '../assets/icons/IdCard.svg'
import sparklesIcon from '../assets/icons/Sparkles.svg'
import scanFaceIcon from '../assets/icons/ScanFace.svg'
import circleUserIcon from '../assets/icons/CircleUser.svg'
import databaseIcon from '../assets/icons/Database.svg'
import messageSquareMoreIcon from '../assets/icons/MessageSquareMore.svg'
import nfcIcon from '../assets/icons/Nfc.svg'
import gitForkIcon from '../assets/icons/GitFork.svg'
import waypointsIcon from '../assets/icons/Waypoints.svg'
import searchCheckIcon from '../assets/icons/SearchCheck.svg'
import badgeCheckIcon from '../assets/icons/BadgeCheck.svg'

// Hero images for photo cards
import idVerificationHero from '../assets/images/id-verification-hero.png'
import documentIntelligenceHero from '../assets/images/document-intelligence-hero.png'
import livenessCheckCard from '../assets/images/liveness-check-card.png'
import faceMatchHero from '../assets/images/face-match-hero.png'
import dataSourceChecksHero from '../assets/images/data-source-checks-hero.png'
import phoneEmailValidationHero from '../assets/images/phone-email-validation-hero.png'
import nfcIdentityScanHero from '../assets/images/nfc-identity-scan-hero.png'
import dynamicFlowHero from '../assets/images/dynamic-flow-hero.png'
import behaviorInsightsHero from '../assets/images/behavior-insights-hero.png'
import reviewWorkspaceHero from '../assets/images/review-workspace-hero.png'
import credentialIssuanceHero from '../assets/images/credential-issuance-hero.png'

export interface PlatformItem {
  label: string
  labelKey: string
  path: string
  icon: string
  image: string
  description: string
  descriptionKey: string
}

export const PLATFORM_ITEMS: PlatformItem[] = [
  // СБОР ДАННЫХ
  {
    label: 'ID verification',
    labelKey: 'footer.idVerification',
    path: '/platform/id-verification',
    icon: idCardIcon,
    image: idVerificationHero,
    description: 'Verify passports, ID cards, and other official documents.',
    descriptionKey: 'nav.idVerificationDesc'
  },
  {
    label: 'NFC identity scan',
    labelKey: 'footer.nfcIdentityScan',
    path: '/platform/nfc-identity-scan',
    icon: nfcIcon,
    image: nfcIdentityScanHero,
    description: 'Read secure chip data from compatible IDs and passports.',
    descriptionKey: 'nav.nfcIdentityScanDesc'
  },
  {
    label: 'Document intelligence',
    labelKey: 'footer.documentIntelligence',
    path: '/platform/document-intelligence',
    icon: sparklesIcon,
    image: documentIntelligenceHero,
    description: 'Extract and analyze data from submitted documents.',
    descriptionKey: 'nav.documentIntelligenceDesc'
  },
  // БИОМЕТРИЯ
  {
    label: 'Face match',
    labelKey: 'footer.faceMatch',
    path: '/platform/face-match',
    icon: circleUserIcon,
    image: faceMatchHero,
    description: 'Compare a selfie to an official photo to confirm identity.',
    descriptionKey: 'nav.faceMatchDesc'
  },
  {
    label: 'Liveness check',
    labelKey: 'footer.livenessCheck',
    path: '/platform/liveness-check',
    icon: scanFaceIcon,
    image: livenessCheckCard,
    description: 'Confirm that the user is physically present.',
    descriptionKey: 'nav.livenessCheckDesc'
  },
  // ПРОВЕРКА ДАННЫХ
  {
    label: 'Data source checks',
    labelKey: 'footer.dataSourceChecks',
    path: '/platform/data-source-checks',
    icon: databaseIcon,
    image: dataSourceChecksHero,
    description: 'Validate user information against trusted databases.',
    descriptionKey: 'nav.dataSourceChecksDesc'
  },
  {
    label: 'Phone and email validation',
    labelKey: 'footer.phoneAndEmailValidation',
    path: '/platform/phone-and-email-validation',
    icon: messageSquareMoreIcon,
    image: phoneEmailValidationHero,
    description: 'Confirm ownership and detect risky contact details.',
    descriptionKey: 'nav.phoneAndEmailValidationDesc'
  },
  {
    label: 'Behavior insights',
    labelKey: 'footer.behaviorInsights',
    path: '/platform/behavior-insights',
    icon: waypointsIcon,
    image: behaviorInsightsHero,
    description: 'Device and usage patterns for added context.',
    descriptionKey: 'nav.behaviorInsightsDesc'
  },
  // ОРКЕСТРАЦИЯ
  {
    label: 'Dynamic flow',
    labelKey: 'footer.dynamicFlow',
    path: '/platform/dynamic-flow',
    icon: gitForkIcon,
    image: dynamicFlowHero,
    description: 'Coordinate identity checks with flexible logic.',
    descriptionKey: 'nav.dynamicFlowDesc'
  },
  // РЕЗУЛЬТАТЫ
  {
    label: 'Review workspace',
    labelKey: 'footer.reviewWorkspace',
    path: '/platform/review-workspace',
    icon: searchCheckIcon,
    image: reviewWorkspaceHero,
    description: 'Organize and resolve verification cases.',
    descriptionKey: 'nav.reviewWorkspaceDesc'
  },
  {
    label: 'Credential issuance',
    labelKey: 'footer.credentialIssuance',
    path: '/platform/credential-issuance',
    icon: badgeCheckIcon,
    image: credentialIssuanceHero,
    description: 'Create and deliver verifiable credentials to wallets.',
    descriptionKey: 'nav.credentialIssuanceDesc'
  },
]
