import { useTranslation } from 'react-i18next'
import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { HealthInsuranceEnabledFields } from '../types/documents'

interface HealthInsuranceVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: HealthInsuranceEnabledFields
}

export default function HealthInsuranceVerifiedModal({ isOpen, onClose, enabledFields }: HealthInsuranceVerifiedModalProps) {
  const { t } = useTranslation('government')
  
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: t('playground.modals.fields.firstName'), value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: t('playground.modals.fields.lastName'), value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'dateOfBirth', label: t('playground.modals.fields.dateOfBirth'), value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'cardNumber', label: t('playground.modals.fields.cardNumber'), value: 'H7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: t('playground.modals.fields.issuingAuthority'), value: 'Insurance Fund', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuedOn', label: t('playground.modals.fields.issuedOn'), value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: t('playground.modals.fields.expiryDate'), value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
    { key: 'coverageType', label: t('playground.modals.fields.coverageType'), value: 'Full', enabledKey: 'coverageType', isPhoto: false },
    { key: 'status', label: 'Status', value: 'Active', enabledKey: 'status', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.documents.healthInsurance')}
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}
