import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import VerifyConfirmationModal from './VerifyConfirmationModal'
import ProofOfAddressVerifiedModal from './ProofOfAddressVerifiedModal'
import ModalShell from './modals/ModalShell'
import { Switch, TextInput } from './ui'
import { DOCUMENT_TYPES } from '../constants/documents'

interface VerifyProofOfAddressModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VerifyProofOfAddressModal({ isOpen, onClose }: VerifyProofOfAddressModalProps) {
  const { t } = useTranslation('government')
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isVerifiedModalOpen, setIsVerifiedModalOpen] = useState(false)
  const [switches, setSwitches] = useState({
    fullName: true,
    residentialAddress: true,
    cardNumber: true,
    issuingAuthority: true,
    issuedOn: false,
    expiryDate: true,
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
          title={t('playground.modals.verify.proofOfAddress.title')}
          description={t('playground.modals.verify.proofOfAddress.description')}
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
                <label htmlFor="requester-name-proof-of-address" className="font-medium leading-5 text-sm text-[#0a0a0a]">
                  {t('playground.modals.fields.requesterName')}
                </label>
                <TextInput
                  id="requester-name-proof-of-address"
                  defaultValue="Bank"
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
                label={t('playground.modals.fields.residentialAddress')}
                checked={switches.residentialAddress}
                onChange={(checked) => handleSwitchChange('residentialAddress', checked)}
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
            </div>
          </div>
        </ModalShell>
      )}

      <VerifyConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onAutoClose={handleAutoClose}
        documentType={DOCUMENT_TYPES.PROOF_OF_ADDRESS}
      />

      <ProofOfAddressVerifiedModal
        isOpen={isVerifiedModalOpen}
        onClose={handleVerifiedModalClose}
        enabledFields={switches}
      />
    </>
  )
}

