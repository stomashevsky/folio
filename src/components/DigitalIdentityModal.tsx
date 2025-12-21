import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ConfirmationModal from './ConfirmationModal'
import ModalShell from './modals/ModalShell'
import { MODAL_TWO_COLUMN_LAYOUT } from './modals/modalConfig'
import { TextInput, DateInput, FormField, INPUT_BASE_CLASSES } from './ui'
import { useInputDefaultValue } from '../hooks/useInputDefaultValue'
import { DOCUMENT_TYPES } from '../constants/documents'

interface DigitalIdentityModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DigitalIdentityModal({ isOpen, onClose }: DigitalIdentityModalProps) {
  const { t } = useTranslation('government')
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const handleCardNumberBlur = useInputDefaultValue('ID7654321')

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
        title={t('playground.modals.issue.digitalIdentity.title')}
        description={t('playground.modals.issue.digitalIdentity.description')}
        size="large"
        disableFocusTrap={isConfirmationOpen}
        footer={{
          secondary: { label: t('playground.modals.common.cancel'), onClick: onClose },
          primary: { label: t('playground.modals.common.continue'), onClick: handleContinue },
        }}
      >
        <div className={MODAL_TWO_COLUMN_LAYOUT}>
          {/* Left Column */}
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
            <FormField label={t('playground.modals.fields.placeOfBirth')}>
              <TextInput
                defaultValue="City, Country"
                placeholder={t('playground.modals.fields.placeOfBirth')}
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.nationality')}>
              <TextInput
                defaultValue="Not specified"
                placeholder={t('playground.modals.fields.nationality')}
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.residentialAddress')}>
              <TextInput
                defaultValue="123 Main Street, City, Country"
                placeholder={t('playground.modals.fields.residentialAddress')}
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <FormField label={t('playground.modals.fields.cardNumber')}>
              <TextInput
                defaultValue="ID7654321"
                placeholder={t('playground.modals.fields.cardNumber')}
                autoComplete="one-time-code"
                name="document-number"
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
            <FormField label={t('playground.modals.fields.issuingCountry')}>
              <TextInput
                defaultValue="Country"
                placeholder={t('playground.modals.fields.issuingCountry')}
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label={t('playground.modals.fields.documentType')}>
              <TextInput
                defaultValue="ID card"
                placeholder={t('playground.modals.fields.documentType')}
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
          </div>
        </div>
      </ModalShell>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onBack={handleBack}
        documentType={DOCUMENT_TYPES.DIGITAL_IDENTITY}
      />
    </>
  )
}

