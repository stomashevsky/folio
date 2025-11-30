/**
 * Modal window configurations for Issue and Verify flows
 * Uses constants instead of magic strings
 */

import { ComponentType } from 'react'
import { DocumentType, DOCUMENT_TYPES } from '../constants/documents'
import { FlowMode, FLOW_MODES } from '../constants/flows'
import DigitalIdentityModal from '../components/DigitalIdentityModal'
import StudentIdModal from '../components/StudentIdModal'
import DriversLicenseModal from '../components/DriversLicenseModal'
import Age18Modal from '../components/Age18Modal'
import HealthInsuranceModal from '../components/HealthInsuranceModal'
import ProofOfAddressModal from '../components/ProofOfAddressModal'
import MembershipCardModal from '../components/MembershipCardModal'
import LibraryCardModal from '../components/LibraryCardModal'
import VerifyDigitalIdentityModal from '../components/VerifyDigitalIdentityModal'
import VerifyStudentIdModal from '../components/VerifyStudentIdModal'
import VerifyDriversLicenseModal from '../components/VerifyDriversLicenseModal'
import VerifyAge18Modal from '../components/VerifyAge18Modal'
import VerifyHealthInsuranceModal from '../components/VerifyHealthInsuranceModal'
import VerifyProofOfAddressModal from '../components/VerifyProofOfAddressModal'
import VerifyMembershipCardModal from '../components/VerifyMembershipCardModal'
import VerifyLibraryCardModal from '../components/VerifyLibraryCardModal'

/**
 * Re-export types for convenience
 */
export type { DocumentType } from '../constants/documents'
export type { FlowMode } from '../constants/flows'

/**
 * Base props for modal windows
 */
export interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Modal component type
 */
export type ModalComponent = ComponentType<BaseModalProps>

/**
 * Mapping of flow modes to modal components
 */
export interface ModalMapping {
  [FLOW_MODES.ISSUE]: ModalComponent
  [FLOW_MODES.VERIFY]: ModalComponent
}

/**
 * Mapping of documents to their modal components
 * Used for dynamic modal rendering instead of long if-else chains
 */
export const MODAL_MAPPING: Record<DocumentType, ModalMapping> = {
  [DOCUMENT_TYPES.DIGITAL_IDENTITY]: {
    [FLOW_MODES.ISSUE]: DigitalIdentityModal,
    [FLOW_MODES.VERIFY]: VerifyDigitalIdentityModal,
  },
  [DOCUMENT_TYPES.STUDENT_ID]: {
    [FLOW_MODES.ISSUE]: StudentIdModal,
    [FLOW_MODES.VERIFY]: VerifyStudentIdModal,
  },
  [DOCUMENT_TYPES.DRIVERS_LICENSE]: {
    [FLOW_MODES.ISSUE]: DriversLicenseModal,
    [FLOW_MODES.VERIFY]: VerifyDriversLicenseModal,
  },
  [DOCUMENT_TYPES.AGE_18]: {
    [FLOW_MODES.ISSUE]: Age18Modal,
    [FLOW_MODES.VERIFY]: VerifyAge18Modal,
  },
  [DOCUMENT_TYPES.HEALTH_INSURANCE]: {
    [FLOW_MODES.ISSUE]: HealthInsuranceModal,
    [FLOW_MODES.VERIFY]: VerifyHealthInsuranceModal,
  },
  [DOCUMENT_TYPES.PROOF_OF_ADDRESS]: {
    [FLOW_MODES.ISSUE]: ProofOfAddressModal,
    [FLOW_MODES.VERIFY]: VerifyProofOfAddressModal,
  },
  [DOCUMENT_TYPES.MEMBERSHIP_CARD]: {
    [FLOW_MODES.ISSUE]: MembershipCardModal,
    [FLOW_MODES.VERIFY]: VerifyMembershipCardModal,
  },
  [DOCUMENT_TYPES.LIBRARY_CARD]: {
    [FLOW_MODES.ISSUE]: LibraryCardModal,
    [FLOW_MODES.VERIFY]: VerifyLibraryCardModal,
  },
}

/**
 * Get modal component by document type and mode
 */
export function getModalComponent(
  documentType: DocumentType,
  mode: FlowMode
): ModalComponent {
  return MODAL_MAPPING[documentType][mode]
}

