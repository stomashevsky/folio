import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, FeatureBlock, HeroTagline } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import FooterSection from '../components/sections/FooterSection'
import GlobalPartnersSection from '../components/sections/GlobalPartnersSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToTop } from '../utils/scrollToTop'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import governmentSolutionsHero from '../assets/images/government-solutions-hero.png'
import governmentAlbaniaCaseStudy from '../assets/images/government-albania-case-study.png'
import governmentTestimonialAvatar from '../assets/images/government-testimonial-avatar.png'
import landmarkIcon from '../assets/icons/Landmark.svg'

// Background style using inline styles for complex multi-layer gradient
// This cannot be easily expressed in Tailwind CSS, so inline style is used
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function GovernmentPage() {
  const { t } = useTranslation('government')
  const navigate = useNavigate()
  const { getLocalizedPath, currentLang } = useLocalizedPath()
  
  const canonicalUrl = `https://folio.id/${currentLang}/government`

  usePageTitle({
    title: t('government.meta.title'),
    description: t('government.meta.description'),
    ogTitle: t('government.meta.title'),
    ogDescription: t('government.meta.description'),
    ogImage: getOgImageUrl('government-solutions-hero.png'),
    ogUrl: canonicalUrl,
    canonicalUrl: canonicalUrl
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <HeroTagline icon={landmarkIcon}>{t('government.hero.tagline')}</HeroTagline>
              <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                {t('government.hero.title')}
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('government.hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative">
              <Button
                onClick={() => {
                  navigate(getLocalizedPath('/government/playground'))
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
                variant="primary"
              >
                {t('government.cta.playgroundButton')}
              </Button>
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
                variant="outline"
              >
                {t('government.cta.button')}
              </Button>
            </div>
          </div>
          <ImageWithPlaceholder
            src={governmentSolutionsHero}
            alt={t('government.hero.tagline')}
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
              <HeroTagline icon={landmarkIcon}>{t('government.hero.tagline')}</HeroTagline>
              <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                {t('government.hero.title')}
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                {t('government.hero.description')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative shrink-0">
              <Button
                onClick={() => {
                  navigate(getLocalizedPath('/government/playground'))
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
                variant="primary"
              >
                {t('government.cta.playgroundButton')}
              </Button>
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
                variant="outline"
              >
                {t('government.cta.button')}
              </Button>
            </div>
          </div>
          <ImageWithPlaceholder
            src={governmentSolutionsHero}
            alt={t('government.hero.tagline')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="aspect-[240/240] relative rounded-2xl shrink-0 w-full"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <SectionHeader
            title={t('government.overview.title')}
            description={t('government.overview.description')}
            align="center"
            maxWidth="576px"
          />
        </div>
      </section>

      {/* Gov Features Section */}
      <section id="gov-features" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        <div className="flex flex-col gap-12 md:gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
            <SectionHeader
              title={t('government.features.title')}
              description={t('government.features.description')}
              align="center"
              maxWidth="576px"
            />
            <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
              <FeatureBlock
                icon="shield-check"
                title={t('government.features.standards.title')}
                description={t('government.features.standards.description')}
                align="left"
              />
              <FeatureBlock
                icon="qr-code"
                title={t('government.features.issuance.title')}
                description={t('government.features.issuance.description')}
                align="left"
              />
              <FeatureBlock
                icon="lock-keyhole"
                title={t('government.features.presentation.title')}
                description={t('government.features.presentation.description')}
                align="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <ImageWithPlaceholder
            src={governmentAlbaniaCaseStudy}
            alt={t('government.caseStudy.imageAlt')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/426.67]"
            loading="lazy"
          />
          <div className="flex flex-1 flex-col gap-12 items-start relative min-w-0">
            <SectionHeader
              title={t('government.caseStudy.title')}
              description={t('government.caseStudy.description')}
              align="left"
            />
            <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
              {/* Challenge */}
              <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full">
                <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                  {t('government.caseStudy.challenge.title')}
                </p>
                <p className="font-normal relative shrink-0 text-[#737373] w-full">
                  {t('government.caseStudy.challenge.description')}
                </p>
              </div>
              {/* Solution */}
              <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full">
                <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                  {t('government.caseStudy.solution.title')}
                </p>
                <p className="font-normal relative shrink-0 text-[#737373] w-full">
                  {t('government.caseStudy.solution.description')}
                </p>
              </div>
              {/* Results */}
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <p className="font-semibold leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full">
                  {t('government.caseStudy.results.title')}
                </p>
                <div className="flex gap-8 items-start relative shrink-0 w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start relative self-stretch shrink-0">
                    <p className="font-bold leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] w-full">
                      {t('government.caseStudy.results.stat1.value')}
                    </p>
                    <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                      {t('government.caseStudy.results.stat1.description')}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start relative self-stretch shrink-0">
                    <p className="font-bold leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] w-full">
                      {t('government.caseStudy.results.stat2.value')}
                    </p>
                    <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                      {t('government.caseStudy.results.stat2.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="border-l border-[#737373] border-r-0 border-t-0 border-b-0 box-border flex flex-col gap-3 items-start px-6 py-4 relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                {t('government.caseStudy.testimonial.quote')}
              </p>
              <div className="flex gap-4 items-start relative shrink-0 w-full">
                <div className="box-border flex gap-2 items-center px-0 py-3 relative shrink-0">
                  <div className="relative rounded-full shrink-0 w-8 h-8">
                    <img
                      src={governmentTestimonialAvatar}
                      alt={t('government.caseStudy.testimonial.name')}
                      className="absolute inset-0 max-w-none object-center object-cover rounded-full w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border flex flex-1 gap-2 items-center min-h-[56px] min-w-0 px-0 py-1 relative shrink-0">
                  <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base">
                    <span className="leading-6">{t('government.caseStudy.testimonial.name')}</span>
                    <span className="font-normal leading-6 text-[#737373]"> - {t('government.caseStudy.testimonial.title')}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Case Study Button */}
            <Button
              variant="secondary"
              onClick={() => navigate(getLocalizedPath('/blog/albanian-diaspora-voter-registration'))}
            >
              {t('government.caseStudy.button')}
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <SectionHeader
              title={t('government.caseStudy.title')}
              description={t('government.caseStudy.description')}
              align="left"
            />
            <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
              {/* Challenge */}
              <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full">
                <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                  {t('government.caseStudy.challenge.title')}
                </p>
                <p className="font-normal relative shrink-0 text-[#737373] w-full">
                  {t('government.caseStudy.challenge.description')}
                </p>
              </div>
              {/* Solution */}
              <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full">
                <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                  {t('government.caseStudy.solution.title')}
                </p>
                <p className="font-normal relative shrink-0 text-[#737373] w-full">
                  {t('government.caseStudy.solution.description')}
                </p>
              </div>
              {/* Results */}
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <p className="font-semibold leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full">
                  {t('government.caseStudy.results.title')}
                </p>
                <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
                    <p className="font-bold leading-8 relative shrink-0 text-[#0a0a0a] text-2xl w-full">
                      {t('government.caseStudy.results.stat1.value')}
                    </p>
                    <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                      {t('government.caseStudy.results.stat1.description')}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
                    <p className="font-bold leading-8 relative shrink-0 text-[#0a0a0a] text-2xl w-full">
                      {t('government.caseStudy.results.stat2.value')}
                    </p>
                    <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                      {t('government.caseStudy.results.stat2.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="border-l border-[#737373] border-r-0 border-t-0 border-b-0 box-border flex flex-col gap-3 items-start px-6 py-4 relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                {t('government.caseStudy.testimonial.quote')}
              </p>
              <div className="flex gap-4 items-start relative shrink-0 w-full">
                <div className="box-border flex gap-2 items-center px-0 py-3 relative shrink-0">
                  <div className="relative rounded-full shrink-0 w-8 h-8">
                    <img
                      src={governmentTestimonialAvatar}
                      alt={t('government.caseStudy.testimonial.name')}
                      className="absolute inset-0 max-w-none object-center object-cover rounded-full w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border flex flex-1 gap-2 items-center min-h-[56px] min-w-0 px-0 py-1 relative shrink-0">
                  <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base">
                    <span className="leading-6">{t('government.caseStudy.testimonial.name')}</span>
                    <span className="font-normal leading-6 text-[#737373]"> - {t('government.caseStudy.testimonial.title')}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Case Study Button */}
            <Button
              variant="secondary"
              onClick={() => navigate(getLocalizedPath('/blog/albanian-diaspora-voter-registration'))}
            >
              {t('government.caseStudy.button')}
            </Button>
          </div>
          <ImageWithPlaceholder
            src={governmentAlbaniaCaseStudy}
            alt={t('government.caseStudy.imageAlt')}
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
            containerClassName="aspect-[240/426.67] relative rounded-2xl shrink-0 w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Global Partners Section */}
      <GlobalPartnersSection />

      {/* CTA Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-0 md:pb-24 relative shrink-0 w-full bg-white">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center max-w-[1280px] px-6 relative shrink-0 w-full">
          <div className="flex gap-16 items-center p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
            <div className="flex flex-1 flex-col gap-4 items-start relative shrink-0 max-w-[576px] min-w-0">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                {t('government.cta.title')}
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                {t('government.cta.description')}
              </p>
            </div>
            <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
                variant="secondary"
              >
                {t('government.cta.button')}
              </Button>
              <Button
                onClick={() => {
                  navigate(getLocalizedPath('/government/playground'))
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
                variant="primary"
              >
                {t('government.cta.playgroundButton')}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
            <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
              {t('government.cta.title')}
            </h2>
            <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
              {t('government.cta.description')}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
            <Button
              onClick={() => {
                window.location.href = 'mailto:contact@folio.id'
              }}
              variant="secondary"
              fullWidth
            >
              {t('government.cta.button')}
            </Button>
            <Button
              onClick={() => {
                navigate(getLocalizedPath('/government/playground'))
                setTimeout(() => {
                  scrollToTop()
                }, 100)
              }}
              variant="primary"
              fullWidth
            >
              {t('government.cta.playgroundButton')}
            </Button>
          </div>
        </div>
      </section>
      </main>
      {/* Footer */}
      <FooterSection />
    </div>
  )
}
