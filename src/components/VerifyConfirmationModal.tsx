import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import ModalShell from './modals/ModalShell'
import QRCodeDisplay from './modals/QRCodeDisplay'
import { DocumentType, DOCUMENT_TYPES } from '../constants/documents'
import qrCodeImage from '../assets/images/qr-code-verify.png'

interface VerifyConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onAutoClose?: () => void
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

export default function VerifyConfirmationModal({ isOpen, onClose, onAutoClose, documentType }: VerifyConfirmationModalProps) {
  const { t } = useTranslation('government')
  const documentKey = DOCUMENT_KEY_MAP[documentType]
  const translatedDocumentType = t(`playground.documents.${documentKey}`)

  useEffect(() => {
    if (isOpen && onAutoClose) {
      // Auto-close after 3 seconds
      const timer = setTimeout(() => {
        onAutoClose()
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isOpen, onAutoClose])

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.modals.confirmation.verify.title', { documentType: translatedDocumentType })}
      description={t('playground.modals.confirmation.verify.description')}
      size="small"
      isNested={true}
      disableEscapeClose={false}
      footer={{
        secondary: { label: t('playground.modals.common.cancel'), onClick: onClose },
      }}
    >
      <QRCodeDisplay src={qrCodeImage} />
    </ModalShell>
  )
}

