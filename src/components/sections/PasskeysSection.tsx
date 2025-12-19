import { SectionHeader, ToolCard } from '../ui'
import shieldHalfIcon from '../../assets/icons/ShieldHalf.svg'
import fingerprintIcon from '../../assets/icons/Fingerprint.svg'
import globeIcon from '../../assets/icons/Globe.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function PasskeysSection() {
  return (
    <section
      id="passkeys"
      className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full"
      style={BACKGROUND_STYLE}
    >
      <div className="flex flex-col gap-12 md:gap-16 items-center justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
          <SectionHeader
            title="Secure access with Passkeys"
            description="Passkeys keep your documents encrypted and accessible only to you. Your data stays on your device, protected by your biometric credentials, and even Folio cannot unlock your files."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <ToolCard
              icon={shieldHalfIcon}
              title="Private by design"
              description="Every document is encrypted on your device and can be opened only with your Face ID, Touch ID or device passcode. We do not store passwords and cannot access your information."
            />
            <ToolCard
              icon={fingerprintIcon}
              title="Simple to use"
              description="Sign in instantly with your device biometrics. No passwords to create, remember or reset. Your access is always fast and effortless."
            />
            <ToolCard
              icon={globeIcon}
              title="Works everywhere"
              description="Use your passkey across iPhone, Android and modern browsers. Your secure access follows you on any device."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

