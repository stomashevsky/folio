import { useTranslation } from 'react-i18next'
import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { DigitalIdentityEnabledFields } from '../types/documents'

interface DigitalIdentityVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: DigitalIdentityEnabledFields
}

export default function DigitalIdentityVerifiedModal({ isOpen, onClose, enabledFields }: DigitalIdentityVerifiedModalProps) {
  const { t } = useTranslation('government')
  
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: t('playground.modals.fields.firstName'), value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: t('playground.modals.fields.lastName'), value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'photograph', label: t('playground.modals.fields.idPhoto'), value: '', enabledKey: 'photograph', isPhoto: true },
    { key: 'dateOfBirth', label: t('playground.modals.fields.dateOfBirth'), value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'placeOfBirth', label: t('playground.modals.fields.placeOfBirth'), value: 'City, Country', enabledKey: 'placeOfBirth', isPhoto: false },
    { key: 'nationality', label: t('playground.modals.fields.nationality'), value: 'Not specified', enabledKey: 'nationality', isPhoto: false },
    { key: 'residentialAddress', label: t('playground.modals.fields.residentialAddress'), value: '123 Main Street, City, Country', enabledKey: 'residentialAddress', isPhoto: false },
    { key: 'cardNumber', label: t('playground.modals.fields.cardNumber'), value: 'ID7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: t('playground.modals.fields.issuingAuthority'), value: 'ID Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuingCountry', label: t('playground.modals.fields.issuingCountry'), value: 'Country', enabledKey: 'issuingCountry', isPhoto: false },
    { key: 'documentType', label: t('playground.modals.fields.documentType'), value: 'ID card', enabledKey: 'documentType', isPhoto: false },
    { key: 'issuedOn', label: t('playground.modals.fields.issuedOn'), value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: t('playground.modals.fields.expiryDate'), value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.documents.digitalIdentity')}
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}

