import fingerprintIcon from '../../assets/icons/Fingerprint.svg'
import bookOpenIcon from '../../assets/icons/BookOpen.svg'
import carIcon from '../../assets/icons/Car.svg'
import calendarCheckIcon from '../../assets/icons/CalendarCheck.svg'
import shieldPlusIcon from '../../assets/icons/ShieldPlus.svg'
import shieldCheckIcon from '../../assets/icons/ShieldCheck.svg'
import homeIcon from '../../assets/icons/Home.svg'
import starIcon from '../../assets/icons/Star.svg'
import bookMarkedIcon from '../../assets/icons/BookMarked.svg'
import keyRoundIcon from '../../assets/icons/KeyRound.svg'
import lockKeyholeIcon from '../../assets/icons/LockKeyhole.svg'
import checkIcon from '../../assets/icons/Check.svg'
import messageSquareMoreIcon from '../../assets/icons/MessageSquareMore.svg'
import fileQuestionIcon from '../../assets/icons/FileQuestion.svg'
import copyPlusIcon from '../../assets/icons/CopyPlus.svg'
import qrCodeIcon from '../../assets/icons/QrCode.svg'
import refreshCwIcon from '../../assets/icons/RefreshCw.svg'
import arrowRightIcon from '../../assets/icons/ArrowRight.svg'

export type IconName = 
  | 'fingerprint' 
  | 'book' 
  | 'car' 
  | 'calendar' 
  | 'shield' 
  | 'shield-check'
  | 'home' 
  | 'star' 
  | 'library'
  | 'key-round'
  | 'lock-keyhole'
  | 'check'
  | 'message-square-more'
  | 'file-question'
  | 'copy-plus'
  | 'qr-code'
  | 'refresh-cw'
  | 'arrow-right'

interface IconProps {
  name: IconName
  className?: string
  size?: number
}

const iconMap: Record<IconName, string> = {
  'fingerprint': fingerprintIcon,
  'book': bookOpenIcon,
  'car': carIcon,
  'calendar': calendarCheckIcon,
  'shield': shieldPlusIcon,
  'shield-check': shieldCheckIcon,
  'home': homeIcon,
  'star': starIcon,
  'library': bookMarkedIcon,
  'key-round': keyRoundIcon,
  'lock-keyhole': lockKeyholeIcon,
  'check': checkIcon,
  'message-square-more': messageSquareMoreIcon,
  'file-question': fileQuestionIcon,
  'copy-plus': copyPlusIcon,
  'qr-code': qrCodeIcon,
  'refresh-cw': refreshCwIcon,
  'arrow-right': arrowRightIcon,
}

export default function Icon({ name, className = '', size = 20 }: IconProps) {
  const iconSrc = iconMap[name]
  
  if (!iconSrc) {
    return null
  }

  return (
    <div className={`overflow-hidden relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img 
        src={iconSrc} 
        alt={name}
        className="w-full h-full object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  )
}
