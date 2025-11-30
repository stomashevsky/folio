/**
 * Re-export types and functions from configs/modals.ts for backward compatibility
 * @deprecated Use directly from configs/modals.ts
 */

export type { DocumentType, ModalComponent } from '../../configs/modals'
export type { FlowMode as ModalMode } from '../../constants/flows'
export { MODAL_MAPPING, getModalComponent } from '../../configs/modals'

// Re-export constants for convenience
export { DOCUMENT_TYPES, FLOW_MODES } from '../../constants'

