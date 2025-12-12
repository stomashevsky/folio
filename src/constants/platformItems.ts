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

export interface PlatformItem {
  label: string
  path: string
  icon: string
  description: string
}

// Order matches Figma design: alternating Left/Right columns
// Left column items at even indices (0,2,4,6,8), Right column at odd indices (1,3,5,7,9)
export const PLATFORM_ITEMS: PlatformItem[] = [
  // Row 1
  {
    label: 'ID verification',
    path: '/platform/id-verification',
    icon: idCardIcon,
    description: 'Verify passports, ID cards, and other official documents.'
  },
  {
    label: 'Phone and email validation',
    path: '/platform/phone-and-email-validation',
    icon: messageSquareMoreIcon,
    description: 'Confirm ownership and detect risky contact details.'
  },
  // Row 2
  {
    label: 'Document intelligence',
    path: '/platform/document-intelligence',
    icon: sparklesIcon,
    description: 'Extract and analyze data from submitted documents.'
  },
  {
    label: 'NFC identity scan',
    path: '/platform/nfc-identity-scan',
    icon: nfcIcon,
    description: 'Read secure chip data from compatible IDs and passports.'
  },
  // Row 3
  {
    label: 'Liveness check',
    path: '/platform/liveness-check',
    icon: scanFaceIcon,
    description: 'Confirm that the user is physically present.'
  },
  {
    label: 'Dynamic flow',
    path: '/platform/dynamic-flow',
    icon: gitForkIcon,
    description: 'Coordinate identity checks with flexible logic.'
  },
  // Row 4
  {
    label: 'Face match',
    path: '/platform/face-match',
    icon: circleUserIcon,
    description: 'Compare a selfie to an official photo to confirm identity.'
  },
  {
    label: 'Behavior insights',
    path: '/platform/behavior-insights',
    icon: waypointsIcon,
    description: 'Device and usage patterns for added context.'
  },
  // Row 5
  {
    label: 'Data source checks',
    path: '/platform/data-source-checks',
    icon: databaseIcon,
    description: 'Validate user information against trusted databases.'
  },
  {
    label: 'Review workspace',
    path: '/platform/review-workspace',
    icon: searchCheckIcon,
    description: 'Organize and resolve verification cases.'
  },
]

