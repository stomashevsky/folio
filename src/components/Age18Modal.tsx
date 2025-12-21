import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ConfirmationModal from './ConfirmationModal'
import ModalShell from './modals/ModalShell'
import { TextInput, FormField, INPUT_BASE_CLASSES } from './ui'
import { DOCUMENT_TYPES } from '../constants/documents'
import { useInputDefaultValue } from '../hooks/useInputDefaultValue'

interface Age18ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Age18Modal({ isOpen, onClose }: Age18ModalProps) {
  const { t } = useTranslation('government')
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const handleCardNumberBlur = useInputDefaultValue('A7654321')

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
        title={t('playground.modals.issue.age18.title')}
        description={t('playground.modals.issue.age18.description')}
        size="small"
        disableFocusTrap={isConfirmationOpen}
        footer={{
          secondary: { label: t('playground.modals.common.cancel'), onClick: onClose },
          primary: { label: t('playground.modals.common.continue'), onClick: handleContinue },
        }}
      >
        <div className="flex flex-col gap-4 items-start w-full">
          <FormField label={t('playground.modals.fields.cardNumber')}>
            <TextInput
              defaultValue="A7654321"
              placeholder={t('playground.modals.fields.cardNumber')}
              autoComplete="one-time-code"
              name="age-18-number"
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
        </div>
      </ModalShell>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onBack={handleBack}
        documentType={DOCUMENT_TYPES.AGE_18}
      />
    </>
  )
}

