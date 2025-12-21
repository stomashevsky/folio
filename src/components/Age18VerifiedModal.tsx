import { useTranslation } from 'react-i18next'
import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { Age18EnabledFields } from '../types/documents'

interface Age18VerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: Age18EnabledFields
}

export default function Age18VerifiedModal({ isOpen, onClose, enabledFields }: Age18VerifiedModalProps) {
  const { t } = useTranslation('government')
  
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'confirmedAge', label: t('playground.modals.fields.age18Confirmed'), value: '18+', enabledKey: 'confirmedAge', isPhoto: false },
    { key: 'cardNumber', label: t('playground.modals.fields.cardNumber'), value: 'A7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: t('playground.modals.fields.issuingAuthority'), value: 'ID Authority', enabledKey: 'issuingAuthority', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.documents.age18')}
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}

