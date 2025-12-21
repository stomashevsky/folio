import { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToSection } from '../utils/scrollToSection'
import { useLocalizedPath } from '../i18n/useLocalizedPath'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import globeIcon from '../assets/icons/Globe.svg'
import usersIcon from '../assets/icons/SquareUser.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import mailIcon from '../assets/icons/Mail.svg'
import mapPinIcon from '../assets/icons/MapPin.svg'

// Background style matching other sections
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

function AboutPage() {
  const { t } = useTranslation('pages')
  const navigate = useNavigate()
  const location = useLocation()
  const { getLocalizedPath } = useLocalizedPath()

  usePageTitle({
    title: t('about.meta.title'),
    description: t('about.meta.description'),
    ogTitle: t('about.meta.ogTitle'),
    ogDescription: t('about.meta.ogDescription'),
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/about'
  })

  const handleGetApp = () => {
    const isWalletPage = location.pathname.endsWith('/wallet')
    if (isWalletPage) {
      scrollToSection('get-the-app')
    } else {
      navigate(getLocalizedPath('/wallet'))
      setTimeout(() => {
        scrollToSection('get-the-app')
      }, 100)
    }
  }

  const storyParagraphs = t('about.story.paragraphs', { returnObjects: true }) as string[]

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <h1 className="font-bold leading-9 md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
              {t('about.hero.title')}
            </h1>
            <p className="font-normal leading-6 text-[#737373] text-base w-full">
              {t('about.hero.description')}
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-8 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('about.story.title')}
              maxWidth="768px"
            />
            <div className="flex flex-col gap-6 text-[#737373] text-base leading-6">
              {storyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('about.stats.title')}
              maxWidth="576px"
            />
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full">
              <StatItem value="1M+" label={t('about.stats.documents')} />
              <StatItem value="120+" label={t('about.stats.countries')} />
              <StatItem value="4.7★" label={t('about.stats.rating')} />
              <StatItem value="365K+" label={t('about.stats.albania')} />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title={t('about.values.title')}
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={lockKeyholeIcon}
                title={t('about.values.privacy.title')}
                description={t('about.values.privacy.description')}
              />
              <ToolCard
                icon={shieldCheckIcon}
                title={t('about.values.security.title')}
                description={t('about.values.security.description')}
              />
              <ToolCard
                icon={globeIcon}
                title={t('about.values.global.title')}
                description={t('about.values.global.description')}
              />
              <ToolCard
                icon={usersIcon}
                title={t('about.values.everyone.title')}
                description={t('about.values.everyone.description')}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            {/* Desktop Layout */}
            <div className="hidden md:flex gap-16 items-start justify-center w-full">
              {/* Left: Title + Description + Buttons */}
              <div className="flex flex-1 flex-col gap-8 items-start max-w-[576px]">
                <div className="flex flex-col gap-5 items-start w-full">
                  <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                    {t('about.contact.title')}
                  </h2>
                  <p className="font-normal leading-6 text-[#737373] text-base">
                    {t('about.contact.description')}
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Button variant="primary" href="mailto:contact@folio.id">
                    {t('about.contact.contactUs')}
                  </Button>
                  <Button variant="outline" onClick={handleGetApp}>
                    {t('about.contact.getApp')}
                  </Button>
                </div>
              </div>

              {/* Right: Contact Card */}
              <div className="flex flex-1 flex-col gap-12 items-start p-12 rounded-xl" style={BACKGROUND_STYLE}>
                <ContactItem
                  icon={mailIcon}
                  title={t('about.contact.email.title')}
                  value={t('about.contact.email.value')}
                  href="mailto:contact@folio.id"
                />
                <ContactItem
                  icon={mapPinIcon}
                  title={t('about.contact.address.title')}
                  value={t('about.contact.address.value')}
                  href="https://maps.google.com/?q=88+Baker+St,+London+W1U+6TQ,+United+Kingdom"
                />
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden flex-col gap-8 items-center w-full">
              {/* Contacts */}
              <div className="flex flex-col gap-8 items-center w-full">
                <ContactItem
                  icon={mailIcon}
                  title={t('about.contact.email.title')}
                  value={t('about.contact.email.value')}
                  href="mailto:contact@folio.id"
                  centered
                />
                <ContactItem
                  icon={mapPinIcon}
                  title={t('about.contact.address.title')}
                  value={t('about.contact.address.value')}
                  href="https://maps.google.com/?q=88+Baker+St,+London+W1U+6TQ,+United+Kingdom"
                  centered
                />
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-[#e5e5e5]" />

              {/* Title + Description + Buttons */}
              <div className="flex flex-col gap-8 items-center w-full text-center">
                <div className="flex flex-col gap-4 items-center max-w-[576px]">
                  <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                    {t('about.contact.title')}
                  </h2>
                  <p className="font-normal leading-6 text-[#737373] text-base">
                    {t('about.contact.description')}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Button variant="primary" href="mailto:contact@folio.id">
                    {t('about.contact.contactUs')}
                  </Button>
                  <Button variant="outline" onClick={handleGetApp}>
                    {t('about.contact.getApp')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 items-center text-center">
      <p className="font-bold leading-[36px] text-[30px] text-[#0a0a0a]">
        {value}
      </p>
      <p className="font-normal leading-6 text-[#737373] text-base">
        {label}
      </p>
    </div>
  )
}

function ContactItem({ 
  icon, 
  title, 
  value, 
  href, 
  centered = false 
}: { 
  icon: string
  title: string
  value: string
  href: string
  centered?: boolean
}) {
  return (
    <div className={`flex gap-5 items-start w-full ${centered ? 'flex-col items-center text-center' : ''}`}>
      <div className="bg-white border border-[#e5e5e5] flex items-center justify-center rounded-lg shrink-0 size-10 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
        <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      </div>
      <div className={`flex flex-col gap-1 items-start leading-6 text-base ${centered ? 'items-center' : ''}`}>
        <p className="font-semibold text-[#0a0a0a]">
          {title}
        </p>
        <a 
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="font-normal text-[#737373] underline hover:text-[#0a0a0a] transition-colors"
        >
          {value}
        </a>
      </div>
    </div>
  )
}

export default memo(AboutPage)
