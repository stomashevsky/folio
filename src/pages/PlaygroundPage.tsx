import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Issue from '../components/Issue'
import IssuanceTypesSection from '../components/sections/IssuanceTypesSection'
import FAQSection from '../components/sections/FAQSection'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { SkipToContentLink } from '../components/ui'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

export default function PlaygroundPage() {
  const { t } = useTranslation('government')
  const { currentLang } = useLocalizedPath()
  const canonicalUrl = `https://folio.id/${currentLang}/government/playground`
  
  usePageTitle({
    title: t('playground.meta.title'),
    description: t('playground.meta.description'),
    ogTitle: t('playground.meta.title'),
    ogDescription: t('playground.meta.description'),
    ogImage: getOgImageUrl('identity-lab-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })
  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <SkipToContentLink />
      <Navbar />
      <main className="flex-1 w-full">
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 w-full">
            <Issue />
          </div>
        </section>
        <IssuanceTypesSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  )
}
