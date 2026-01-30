import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Issue from '../components/Issue'
import IssuanceTypesSection from '../components/sections/IssuanceTypesSection'
import FAQSection from '../components/sections/FAQSection'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { SkipToContentLink, Button } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import governmentSolutionsHero from '../assets/images/government-solutions-hero.png'

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

  const scrollToFaq = () => {
    const faqSection = document.getElementById('faq-section')
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'auto' })
    }
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <SkipToContentLink />
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <span className="font-medium leading-5 text-sm text-[#737373]">
                  {t('playground.hero.tagline')}
                </span>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  {t('playground.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('playground.hero.description')}
                </p>
              </div>
              <Button
                onClick={scrollToFaq}
                variant="outline"
              >
                {t('playground.hero.button')}
              </Button>
            </div>
            <ImageWithPlaceholder
              src={governmentSolutionsHero}
              alt={t('playground.hero.tagline')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <span className="font-medium leading-5 text-sm text-[#737373]">
                  {t('playground.hero.tagline')}
                </span>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  {t('playground.hero.title')}
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  {t('playground.hero.description')}
                </p>
              </div>
              <Button
                onClick={scrollToFaq}
                variant="outline"
              >
                {t('playground.hero.button')}
              </Button>
            </div>
            <ImageWithPlaceholder
              src={governmentSolutionsHero}
              alt={t('playground.hero.tagline')}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* Issue Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 w-full">
            <Issue />
          </div>
        </section>
        <IssuanceTypesSection />
        <FAQSection id="faq-section" />
      </main>
      <FooterSection />
    </div>
  )
}
