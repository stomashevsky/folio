/**
 * Card configurations for Issue and Verify flows
 * Uses constants instead of magic strings
 */

import { BadgeColorVariant } from '../components/ui/BadgeColor'
import { DOCUMENT_TYPES, DocumentType } from '../constants/documents'
import { ICON_NAMES, IconName } from '../constants/icons'

/**
 * Badge keys for translation lookup
 */
export const BADGE_KEYS = {
  CORE_IDENTIFICATION: 'coreIdentification',
  AUTHORIZATION: 'authorization',
  PRE_AUTHORIZED: 'preAuthorized',
  TRANSACTION_CODE: 'transactionCode',
  PRESENTATION: 'presentation',
} as const

export type BadgeKey = typeof BADGE_KEYS[keyof typeof BADGE_KEYS]

/**
 * Document keys for translation lookup
 */
export const DOCUMENT_KEYS: Record<DocumentType, string> = {
  [DOCUMENT_TYPES.DIGITAL_IDENTITY]: 'digitalIdentity',
  [DOCUMENT_TYPES.STUDENT_ID]: 'studentId',
  [DOCUMENT_TYPES.DRIVERS_LICENSE]: 'driversLicense',
  [DOCUMENT_TYPES.AGE_18]: 'age18',
  [DOCUMENT_TYPES.HEALTH_INSURANCE]: 'healthInsurance',
  [DOCUMENT_TYPES.PROOF_OF_ADDRESS]: 'proofOfAddress',
  [DOCUMENT_TYPES.MEMBERSHIP_CARD]: 'membershipCard',
  [DOCUMENT_TYPES.LIBRARY_CARD]: 'libraryCard',
}

/**
 * Type for card configuration
 */
export interface CardConfig {
  icon: IconName
  badgeKey?: BadgeKey
  badgeVariant?: 'primary' | 'secondary' | BadgeColorVariant
  documentType: DocumentType
  documentKey: string
}

/**
 * Card configurations for Issue flow
 */
export const issueCardConfigs: CardConfig[] = [
  {
    icon: ICON_NAMES.FINGERPRINT,
    badgeKey: BADGE_KEYS.CORE_IDENTIFICATION,
    badgeVariant: 'primary',
    documentType: DOCUMENT_TYPES.DIGITAL_IDENTITY,
    documentKey: 'digitalIdentity',
  },
  {
    icon: ICON_NAMES.BOOK,
    badgeKey: BADGE_KEYS.AUTHORIZATION,
    badgeVariant: 'Blue',
    documentType: DOCUMENT_TYPES.STUDENT_ID,
    documentKey: 'studentId',
  },
  {
    icon: ICON_NAMES.CAR,
    badgeKey: BADGE_KEYS.AUTHORIZATION,
    badgeVariant: 'Blue',
    documentType: DOCUMENT_TYPES.DRIVERS_LICENSE,
    documentKey: 'driversLicense',
  },
  {
    icon: ICON_NAMES.CALENDAR,
    badgeKey: BADGE_KEYS.PRE_AUTHORIZED,
    badgeVariant: 'Emerald',
    documentType: DOCUMENT_TYPES.AGE_18,
    documentKey: 'age18',
  },
  {
    icon: ICON_NAMES.SHIELD,
    badgeKey: BADGE_KEYS.PRE_AUTHORIZED,
    badgeVariant: 'Emerald',
    documentType: DOCUMENT_TYPES.HEALTH_INSURANCE,
    documentKey: 'healthInsurance',
  },
  {
    icon: ICON_NAMES.HOME,
    badgeKey: BADGE_KEYS.PRE_AUTHORIZED,
    badgeVariant: 'Emerald',
    documentType: DOCUMENT_TYPES.PROOF_OF_ADDRESS,
    documentKey: 'proofOfAddress',
  },
  {
    icon: ICON_NAMES.STAR,
    badgeKey: BADGE_KEYS.TRANSACTION_CODE,
    badgeVariant: 'Fuchsia',
    documentType: DOCUMENT_TYPES.MEMBERSHIP_CARD,
    documentKey: 'membershipCard',
  },
  {
    icon: ICON_NAMES.LIBRARY,
    badgeKey: BADGE_KEYS.PRESENTATION,
    badgeVariant: 'Amber',
    documentType: DOCUMENT_TYPES.LIBRARY_CARD,
    documentKey: 'libraryCard',
  },
]

/**
 * Card configurations for Verify flow
 */
export const verifyCardConfigs: CardConfig[] = [
  {
    icon: ICON_NAMES.FINGERPRINT,
    documentType: DOCUMENT_TYPES.DIGITAL_IDENTITY,
    documentKey: 'digitalIdentity',
  },
  {
    icon: ICON_NAMES.BOOK,
    documentType: DOCUMENT_TYPES.STUDENT_ID,
    documentKey: 'studentId',
  },
  {
    icon: ICON_NAMES.CAR,
    documentType: DOCUMENT_TYPES.DRIVERS_LICENSE,
    documentKey: 'driversLicense',
  },
  {
    icon: ICON_NAMES.CALENDAR,
    documentType: DOCUMENT_TYPES.AGE_18,
    documentKey: 'age18',
  },
  {
    icon: ICON_NAMES.SHIELD,
    documentType: DOCUMENT_TYPES.HEALTH_INSURANCE,
    documentKey: 'healthInsurance',
  },
  {
    icon: ICON_NAMES.HOME,
    documentType: DOCUMENT_TYPES.PROOF_OF_ADDRESS,
    documentKey: 'proofOfAddress',
  },
  {
    icon: ICON_NAMES.STAR,
    documentType: DOCUMENT_TYPES.MEMBERSHIP_CARD,
    documentKey: 'membershipCard',
  },
  {
    icon: ICON_NAMES.LIBRARY,
    documentType: DOCUMENT_TYPES.LIBRARY_CARD,
    documentKey: 'libraryCard',
  },
]

