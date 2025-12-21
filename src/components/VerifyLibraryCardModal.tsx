import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import VerifyConfirmationModal from './VerifyConfirmationModal'
import LibraryCardVerifiedModal from './LibraryCardVerifiedModal'
import ModalShell from './modals/ModalShell'
import { Switch, TextInput } from './ui'
import { DOCUMENT_TYPES } from '../constants/documents'

interface VerifyLibraryCardModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VerifyLibraryCardModal({ isOpen, onClose }: VerifyLibraryCardModalProps) {
  const { t } = useTranslation('government')
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isVerifiedModalOpen, setIsVerifiedModalOpen] = useState(false)
  const [switches, setSwitches] = useState({
    fullName: true,
    dateOfBirth: false,
    cardNumber: true,
    issuingAuthority: false,
    issuedOn: false,
    expiryDate: true,
    membershipType: true,
    status: true,
  })


  const handleSwitchChange = (key: keyof typeof switches, checked: boolean) => {
    setSwitches((prev) => ({ ...prev, [key]: checked }))
  }

  const hasAtLeastOneEnabled = Object.values(switches).some((value) => value === true)

  const handleContinue = () => {
    setIsConfirmationOpen(true)
  }

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false)
  }

  const handleAutoClose = () => {
    setIsConfirmationOpen(false)
    setIsVerifiedModalOpen(true)
  }

  const handleVerifiedModalClose = () => {
    setIsVerifiedModalOpen(false)
    onClose()
  }

  return (
    <>
      {!isVerifiedModalOpen && (
        <ModalShell
          isOpen={isOpen}
          onClose={onClose}
          title={t('playground.modals.verify.libraryCard.title')}
          description={t('playground.modals.verify.libraryCard.description')}
          size="small"
          disableFocusTrap={isConfirmationOpen || isVerifiedModalOpen}
          footer={{
            secondary: { label: t('playground.modals.common.cancel'), onClick: onClose },
            primary: { label: t('playground.modals.common.continue'), onClick: handleContinue, disabled: !hasAtLeastOneEnabled },
          }}
        >
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col gap-2 items-start w-full">
                <label htmlFor="requester-name-library-card" className="font-medium leading-5 text-sm text-[#0a0a0a]">
                  {t('playground.modals.fields.requesterName')}
                </label>
                <TextInput
                  id="requester-name-library-card"
                  defaultValue="Library"
                  placeholder={t('playground.modals.fields.requesterName')}
                  className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
              <Switch
                label={t('playground.modals.fields.fullName')}
                checked={switches.fullName}
                onChange={(checked) => handleSwitchChange('fullName', checked)}
              />
              <Switch
                label={t('playground.modals.fields.dateOfBirth')}
                checked={switches.dateOfBirth}
                onChange={(checked) => handleSwitchChange('dateOfBirth', checked)}
              />
              <Switch
                label={t('playground.modals.fields.cardNumber')}
                checked={switches.cardNumber}
                onChange={(checked) => handleSwitchChange('cardNumber', checked)}
              />
              <Switch
                label={t('playground.modals.fields.issuingAuthority')}
                checked={switches.issuingAuthority}
                onChange={(checked) => handleSwitchChange('issuingAuthority', checked)}
              />
              <Switch
                label={t('playground.modals.fields.issuedOn')}
                checked={switches.issuedOn}
                onChange={(checked) => handleSwitchChange('issuedOn', checked)}
              />
              <Switch
                label={t('playground.modals.fields.expiryDate')}
                checked={switches.expiryDate}
                onChange={(checked) => handleSwitchChange('expiryDate', checked)}
              />
              <Switch
                label={t('playground.modals.fields.membershipType')}
                checked={switches.membershipType}
                onChange={(checked) => handleSwitchChange('membershipType', checked)}
              />
              <Switch
                label="Status"
                checked={switches.status}
                onChange={(checked) => handleSwitchChange('status', checked)}
              />
            </div>
          </div>
        </ModalShell>
      )}

      <VerifyConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onAutoClose={handleAutoClose}
        documentType={DOCUMENT_TYPES.LIBRARY_CARD}
      />

      <LibraryCardVerifiedModal
        isOpen={isVerifiedModalOpen}
        onClose={handleVerifiedModalClose}
        enabledFields={switches}
      />
    </>
  )
}

