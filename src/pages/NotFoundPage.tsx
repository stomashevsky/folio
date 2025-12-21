import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import { Button } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'
import { useLocalizedPath } from '../i18n/useLocalizedPath'

export default function NotFoundPage() {
  const { t } = useTranslation('pages')
  usePageTitle({ title: t('notFound.meta.title') })
  const navigate = useNavigate()
  const { getLocalizedPath } = useLocalizedPath()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* 404 Section */}
      <section className="flex-1 flex flex-col gap-6 items-center justify-center px-6 py-16 md:py-24">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[576px] w-full">
          <div className="flex flex-col gap-4 md:gap-6 items-center w-full text-center">
            <h1 className="font-bold leading-9 md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a]">
              {t('notFound.title')}
            </h1>
            <p className="font-normal leading-7 text-lg text-[#737373]">
              {t('notFound.description')}
            </p>
          </div>
          <Button variant="primary" onClick={() => navigate(getLocalizedPath('/'))}>
            {t('notFound.backHome')}
          </Button>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
