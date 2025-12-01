import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, FeatureBlock } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { scrollToTop } from '../utils/scrollToTop'
import governmentHeroImage from '../assets/images/government-hero.png'
import governmentIdentityLabImage from '../assets/images/government-identity-lab.png'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function GovernmentPage() {
  const navigate = useNavigate()
  
  usePageTitle({
    title: 'Government Solutions | Folio Wallet',
    description: 'Tools for governments to design, test and deploy modern digital credentials. Digital identity aligned with global standards.',
    ogTitle: 'Government Solutions | Folio Wallet',
    ogDescription: 'Tools for governments to design, test and deploy modern digital credentials. Digital identity aligned with global standards.',
    ogImage: 'https://folio.id/src/assets/images/government-hero.png',
    ogUrl: 'https://folio.id/government'
  })

  return (
    <div className="flex flex-col items-start relative w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Digital identity aligned with global standards
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                Tools for governments to design, test and deploy modern digital credentials.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative">
              <Button
                onClick={() => {
                  navigate('/identity-lab')
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
                variant="primary"
              >
                Explore Identity Lab
              </Button>
            </div>
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={governmentHeroImage} 
              alt="Digital identity credentials preview" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
              <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Digital identity aligned with global standards
              </h1>
              <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                Tools for governments to design, test and deploy modern digital credentials.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start relative shrink-0">
              <Button
                onClick={() => {
                  navigate('/identity-lab')
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
                variant="primary"
                fullWidth
              >
                Explore Identity Lab
              </Button>
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={governmentHeroImage} 
              alt="Digital identity credentials preview" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <SectionHeader
            title="Modern infrastructure for national digital identity"
            description="Support secure authentication and mobile credentials for public services."
            align="center"
            maxWidth="576px"
          />
        </div>
      </section>

      {/* Gov Features Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        <div className="flex flex-col gap-12 md:gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
            <SectionHeader
              title="Built on trusted digital identity foundations"
              description="Provide citizens with secure, modern and interoperable digital credentials that follow global standards and work across identity systems. Designed for national-scale programs with a focus on security, privacy and real-world usability."
              align="center"
              maxWidth="576px"
            />
            <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
              <FeatureBlock
                icon="shield-check"
                title="Standards & compliance"
                description="Aligned with EUDI Wallet, ISO mobile driving licence and Verifiable Credentials specifications to ensure compatibility, interoperability and long-term reliability across public services."
                align="left"
              />
              <FeatureBlock
                icon="qr-code"
                title="Issuing & verification"
                description="Support secure issuance of IDs, permits and certificates with cryptographic validation, QR and barcode scanning, and offline-ready verification for real-world environments."
                align="left"
              />
              <FeatureBlock
                icon="lock-keyhole"
                title="Presentation"
                description="Enable privacy-focused identity sharing with minimal disclosure, clear user consent and secure channels that ensure citizens control their data at every step."
                align="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Identity Lab Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={governmentIdentityLabImage}
              alt="Identity Lab"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Experiment with digital identity flows"
              description="Issue, verify and test credentials in a safe sandbox environment."
              align="left"
            />
            <div className="flex gap-3 items-start relative shrink-0">
              <Button
                onClick={() => {
                  navigate('/identity-lab')
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
                variant="primary"
              >
                Explore Identity Lab
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Experiment with digital identity flows"
              description="Issue, verify and test credentials in a safe sandbox environment."
              align="left"
            />
            <div className="flex gap-3 items-start relative shrink-0">
              <Button
                onClick={() => {
                  navigate('/identity-lab')
                  setTimeout(() => {
                    scrollToTop()
                  }, 100)
                }}
                variant="primary"
              >
                Explore Identity Lab
              </Button>
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={governmentIdentityLabImage}
              alt="Identity Lab"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-0 md:pb-24 relative shrink-0 w-full bg-white">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center max-w-[1280px] px-6 relative shrink-0 w-full">
          <div className="flex gap-16 items-center p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
            <div className="flex flex-1 flex-col gap-4 items-start relative shrink-0 max-w-[576px] min-w-0">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Supporting national-scale programs
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                Work with us on pilots, integrations and modernization efforts.
              </p>
            </div>
            <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
              <Button
                variant="primary"
              >
                Contact Government Team
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
            <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
              Supporting national-scale programs
            </h2>
            <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
              Work with us on pilots, integrations and modernization efforts.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center relative shrink-0 w-full">
            <Button
              variant="primary"
            >
              Contact Government Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
