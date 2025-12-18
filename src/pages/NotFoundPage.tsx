import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import { Button } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle({ title: 'Page not found | Folio' })
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* 404 Section */}
      <section className="flex-1 flex flex-col gap-6 items-center justify-center px-6 py-16 md:py-24">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[576px] w-full">
          <div className="flex flex-col gap-4 md:gap-6 items-center w-full text-center">
            <h1 className="font-bold leading-9 md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a]">
              Page not found
            </h1>
            <p className="font-normal leading-7 text-lg text-[#737373]">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>
          <Button variant="primary" onClick={() => navigate('/')}>
            Go to homepage
          </Button>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}
