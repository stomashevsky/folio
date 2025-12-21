import { useTranslation } from 'react-i18next'
import ModalShell from './modals/ModalShell'
import QRCodeDisplay from './modals/QRCodeDisplay'
import { DocumentType, DOCUMENT_TYPES } from '../constants/documents'
import qrCodeImage from '../assets/images/qr-code-issue.png'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onBack: () => void
  documentType: DocumentType
}

// Map document types to translation keys
const DOCUMENT_KEY_MAP: Record<DocumentType, string> = {
  [DOCUMENT_TYPES.DIGITAL_IDENTITY]: 'digitalIdentity',
  [DOCUMENT_TYPES.STUDENT_ID]: 'studentId',
  [DOCUMENT_TYPES.DRIVERS_LICENSE]: 'driversLicense',
  [DOCUMENT_TYPES.AGE_18]: 'age18',
  [DOCUMENT_TYPES.HEALTH_INSURANCE]: 'healthInsurance',
  [DOCUMENT_TYPES.PROOF_OF_ADDRESS]: 'proofOfAddress',
  [DOCUMENT_TYPES.MEMBERSHIP_CARD]: 'membershipCard',
  [DOCUMENT_TYPES.LIBRARY_CARD]: 'libraryCard',
}

export default function ConfirmationModal({ isOpen, onClose, onBack, documentType }: ConfirmationModalProps) {
  const { t } = useTranslation('government')
  const documentKey = DOCUMENT_KEY_MAP[documentType]
  const translatedDocumentType = t(`playground.documents.${documentKey}`)
  
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.modals.confirmation.issue.title', { documentType: translatedDocumentType })}
      description={t('playground.modals.confirmation.issue.description')}
      size="small"
      isNested={true}
      footer={{
        secondary: { label: t('playground.modals.common.back'), onClick: onBack },
        primary: { label: t('playground.modals.common.done'), onClick: onClose },
      }}
    >
      <QRCodeDisplay src={qrCodeImage} />
    </ModalShell>
  )
}

