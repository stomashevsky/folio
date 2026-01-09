import { useTranslation } from 'react-i18next'
import { StoreBadge } from './StoreBadges'

/**
 * Compact CTA component for blog articles to download Folio Wallet app
 * Visually consistent with GetTheAppSection but more compact for inline use in articles
 */
export default function ArticleAppCTA() {
  const { t } = useTranslation('common')
  
  return (
    <div className="flex flex-col gap-3 items-center py-6 px-4 my-6 rounded-2xl bg-[#f5f5f5] w-full">
      <p className="font-bold text-base text-[#0a0a0a]">
        {t('getTheApp.articleCta.title')}
      </p>
      <p className="font-normal text-sm text-[#737373] opacity-80">
        {t('getTheApp.articleCta.subtitle')}
      </p>
      <div className="flex flex-wrap gap-3 items-center justify-center mt-2">
        <StoreBadge store="ios" />
        <StoreBadge store="android" />
      </div>
    </div>
  )
}
