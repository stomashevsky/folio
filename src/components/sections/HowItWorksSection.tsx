import { useTranslation } from 'react-i18next'
import { SectionHeader, FeatureBlock } from '../ui'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function HowItWorksSection() {
  const { t } = useTranslation('government')

  return (
    <section
      className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full"
      style={BACKGROUND_STYLE}
    >
      <div className="flex flex-col gap-12 md:gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
          <SectionHeader
            title={t('playground.howItWorks.title')}
            description={t('playground.howItWorks.description')}
          />
          <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
            <FeatureBlock
              icon="copy-plus"
              title={t('playground.howItWorks.issuance.title')}
              description={t('playground.howItWorks.issuance.description')}
              align="left"
            />
            <FeatureBlock
              icon="qr-code"
              title={t('playground.howItWorks.presentation.title')}
              description={t('playground.howItWorks.presentation.description')}
              align="left"
            />
            <FeatureBlock
              icon="refresh-cw"
              title={t('playground.howItWorks.lifecycle.title')}
              description={t('playground.howItWorks.lifecycle.description')}
              align="left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
