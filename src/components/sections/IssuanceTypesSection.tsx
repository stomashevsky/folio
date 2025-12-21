import { useTranslation } from 'react-i18next'
import { SectionHeader, FeatureBlock } from '../ui'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function IssuanceTypesSection() {
  const { t } = useTranslation('government')
  
  return (
    <section
      id="issuance-types"
      className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full"
      style={BACKGROUND_STYLE}
    >
      <div className="flex flex-col gap-12 md:gap-16 items-center justify-center max-w-[672px] md:max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
          <SectionHeader
            title={t('playground.issuanceTypes.title')}
            description={t('playground.issuanceTypes.description')}
          />
          <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-center md:items-start relative shrink-0 w-full">
            <FeatureBlock
              icon="key-round"
              title={t('playground.issuanceTypes.authorization.title')}
              description={t('playground.issuanceTypes.authorization.description')}
              align="center"
            />
            <FeatureBlock
              icon="check"
              title={t('playground.issuanceTypes.preAuthorized.title')}
              description={t('playground.issuanceTypes.preAuthorized.description')}
              align="center"
            />
            <FeatureBlock
              icon="message-square-more"
              title={t('playground.issuanceTypes.transactionCode.title')}
              description={t('playground.issuanceTypes.transactionCode.description')}
              align="center"
            />
            <FeatureBlock
              icon="file-question"
              title={t('playground.issuanceTypes.presentation.title')}
              description={t('playground.issuanceTypes.presentation.description')}
              align="center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

