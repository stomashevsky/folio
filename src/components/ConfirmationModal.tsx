import ModalShell from './modals/ModalShell'
import QRCodeDisplay from './modals/QRCodeDisplay'
import { DocumentType } from '../constants/documents'
import qrCodeImage from '../assets/images/qr-code-issue.png'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onBack: () => void
  documentType: DocumentType
}

export default function ConfirmationModal({ isOpen, onClose, onBack, documentType }: ConfirmationModalProps) {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title={`Issue ${documentType}`}
      description="Scan the QR code below to add the document."
      size="small"
      isNested={true}
      footer={{
        secondary: { label: 'Back', onClick: onBack },
        primary: { label: 'Done', onClick: onClose },
      }}
    >
      <QRCodeDisplay src={qrCodeImage} />
    </ModalShell>
  )
}

