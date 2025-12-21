import { useTranslation } from 'react-i18next'
import { SectionHeader, ToolCard } from '../ui'
import shieldHalfIcon from '../../assets/icons/ShieldHalf.svg'
import fingerprintIcon from '../../assets/icons/Fingerprint.svg'
import globeIcon from '../../assets/icons/Globe.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function PasskeysSection() {
  const { t } = useTranslation('wallet')

  return (
    <section
      id="passkeys"
      className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full"
      style={BACKGROUND_STYLE}
    >
      <div className="flex flex-col gap-12 md:gap-16 items-center justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
          <SectionHeader
            title={t('passkeys.title')}
            description={t('passkeys.description')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <ToolCard
              icon={shieldHalfIcon}
              title={t('passkeys.privateByDesign.title')}
              description={t('passkeys.privateByDesign.description')}
            />
            <ToolCard
              icon={fingerprintIcon}
              title={t('passkeys.simpleToUse.title')}
              description={t('passkeys.simpleToUse.description')}
            />
            <ToolCard
              icon={globeIcon}
              title={t('passkeys.worksEverywhere.title')}
              description={t('passkeys.worksEverywhere.description')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
