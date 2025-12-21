import { useTranslation } from 'react-i18next'
import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { DriversLicenseEnabledFields } from '../types/documents'

interface DriversLicenseVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: DriversLicenseEnabledFields
}

export default function DriversLicenseVerifiedModal({ isOpen, onClose, enabledFields }: DriversLicenseVerifiedModalProps) {
  const { t } = useTranslation('government')
  
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: t('playground.modals.fields.firstName'), value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: t('playground.modals.fields.lastName'), value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'photograph', label: t('playground.modals.fields.idPhoto'), value: '', enabledKey: 'photograph', isPhoto: true },
    { key: 'dateOfBirth', label: t('playground.modals.fields.dateOfBirth'), value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'cardNumber', label: t('playground.modals.fields.cardNumber'), value: 'D7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: t('playground.modals.fields.issuingAuthority'), value: 'Transport Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuingCountry', label: t('playground.modals.fields.issuingCountry'), value: 'Country', enabledKey: 'issuingCountry', isPhoto: false },
    { key: 'issuedOn', label: t('playground.modals.fields.issuedOn'), value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: t('playground.modals.fields.expiryDate'), value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
    { key: 'categories', label: t('playground.modals.fields.categories'), value: 'B', enabledKey: 'categories', isPhoto: false },
    { key: 'restrictions', label: t('playground.modals.fields.restrictions'), value: 'None', enabledKey: 'restrictions', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.documents.driversLicense')}
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}

