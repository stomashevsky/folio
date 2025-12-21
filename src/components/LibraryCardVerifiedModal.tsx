import { useTranslation } from 'react-i18next'
import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { LibraryCardEnabledFields } from '../types/documents'

interface LibraryCardVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: LibraryCardEnabledFields
}

export default function LibraryCardVerifiedModal({ isOpen, onClose, enabledFields }: LibraryCardVerifiedModalProps) {
  const { t } = useTranslation('government')
  
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: t('playground.modals.fields.firstName'), value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: t('playground.modals.fields.lastName'), value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'dateOfBirth', label: t('playground.modals.fields.dateOfBirth'), value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'cardNumber', label: t('playground.modals.fields.cardNumber'), value: 'L7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: t('playground.modals.fields.issuingAuthority'), value: 'Library', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuedOn', label: t('playground.modals.fields.issuedOn'), value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: t('playground.modals.fields.expiryDate'), value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
    { key: 'membershipType', label: t('playground.modals.fields.membershipType'), value: 'Student', enabledKey: 'membershipType', isPhoto: false },
    { key: 'status', label: 'Status', value: 'Active', enabledKey: 'status', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.documents.libraryCard')}
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}
