import { useTranslation } from 'react-i18next'
import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { ProofOfAddressEnabledFields } from '../types/documents'

interface ProofOfAddressVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: ProofOfAddressEnabledFields
}

export default function ProofOfAddressVerifiedModal({ isOpen, onClose, enabledFields }: ProofOfAddressVerifiedModalProps) {
  const { t } = useTranslation('government')
  
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: t('playground.modals.fields.firstName'), value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: t('playground.modals.fields.lastName'), value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'residentialAddress', label: t('playground.modals.fields.residentialAddress'), value: '123 Main Street, City, Country', enabledKey: 'residentialAddress', isPhoto: false },
    { key: 'cardNumber', label: t('playground.modals.fields.cardNumber'), value: 'P7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: t('playground.modals.fields.issuingAuthority'), value: 'ID Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuedOn', label: t('playground.modals.fields.issuedOn'), value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: t('playground.modals.fields.expiryDate'), value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.documents.proofOfAddress')}
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}
