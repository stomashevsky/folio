import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ConfirmationModal from './ConfirmationModal'
import ModalShell from './modals/ModalShell'
import { MODAL_TWO_COLUMN_LAYOUT } from './modals/modalConfig'
import { TextInput, DateInput, FormField, INPUT_BASE_CLASSES } from './ui'
import { useInputDefaultValue } from '../hooks/useInputDefaultValue'
import { DOCUMENT_TYPES } from '../constants/documents'

interface StudentIdModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StudentIdModal({ isOpen, onClose }: StudentIdModalProps) {
  const { t } = useTranslation('government')
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const handleCardNumberBlur = useInputDefaultValue('S7654321')

  const handleContinue = () => {
    setIsConfirmationOpen(true)
  }

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false)
    onClose()
  }

  const handleBack = () => {
    setIsConfirmationOpen(false)
  }

  return (
    <>
      <ModalShell
        isOpen={isOpen}
        onClose={onClose}
        title={t('playground.modals.issue.studentId.title')}
        description={t('playground.modals.issue.studentId.description')}
        size="large"
        disableFocusTrap={isConfirmationOpen}
        footer={{
          secondary: { label: t('playground.modals.common.cancel'), onClick: onClose },
          primary: { label: t('playground.modals.common.continue'), onClick: handleContinue },
        }}
      >
        <div className={MODAL_TWO_COLUMN_LAYOUT}>
          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <FormField label={t('playground.modals.fields.firstName')}>
              <TextInput
                defaultValue="Carmen"
                placeholder={t('playground.modals.fields.firstName')}
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.lastName')}>
              <TextInput
                defaultValue="Muestra"
                placeholder={t('playground.modals.fields.lastName')}
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.dateOfBirth')}>
              <DateInput
                defaultValue="01/01/1980"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
          </div>

          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <FormField label={t('playground.modals.fields.cardNumber')}>
              <TextInput
                defaultValue="S7654321"
                placeholder={t('playground.modals.fields.cardNumber')}
                autoComplete="one-time-code"
                name="student-number"
                inputMode="text"
                data-1p-ignore
                data-lpignore="true"
                className={INPUT_BASE_CLASSES}
                onBlur={handleCardNumberBlur}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.issuingAuthority')}>
              <TextInput
                defaultValue="ID Authority"
                placeholder={t('playground.modals.fields.issuingAuthority')}
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.issuedOn')}>
              <DateInput
                defaultValue="15/12/2025"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.expiryDate')}>
              <DateInput
                defaultValue="15/12/2035"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.faculty')}>
              <TextInput
                defaultValue="Computer Science"
                placeholder={t('playground.modals.fields.faculty')}
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label="Degree">
              <TextInput
                defaultValue="Bachelor of Science"
                placeholder="Degree"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
          </div>
        </div>
      </ModalShell>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onBack={handleBack}
        documentType={DOCUMENT_TYPES.STUDENT_ID}
      />
    </>
  )
}

