import { useTranslation } from 'react-i18next'
import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { StudentIdEnabledFields } from '../types/documents'

interface StudentIdVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: StudentIdEnabledFields
}

export default function StudentIdVerifiedModal({ isOpen, onClose, enabledFields }: StudentIdVerifiedModalProps) {
  const { t } = useTranslation('government')
  
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: t('playground.modals.fields.firstName'), value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: t('playground.modals.fields.lastName'), value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'photograph', label: t('playground.modals.fields.idPhoto'), value: '', enabledKey: 'photograph', isPhoto: true },
    { key: 'dateOfBirth', label: t('playground.modals.fields.dateOfBirth'), value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'cardNumber', label: t('playground.modals.fields.cardNumber'), value: 'S7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: t('playground.modals.fields.issuingAuthority'), value: 'ID Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuedOn', label: t('playground.modals.fields.issuedOn'), value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: t('playground.modals.fields.expiryDate'), value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
    { key: 'faculty', label: t('playground.modals.fields.faculty'), value: 'Computer Science', enabledKey: 'faculty', isPhoto: false },
    { key: 'degree', label: 'Degree', value: 'Bachelor of Science', enabledKey: 'degree', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title={t('playground.documents.studentId')}
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}

