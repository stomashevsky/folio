import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, FeatureBlock } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { scrollToTop } from '../utils/scrollToTop'
import governmentHeroImage from '../assets/images/government-hero.png'
import governmentIdentityLabImage from '../assets/images/government-identity-lab.png'
import governmentCaseStudyImage from '../assets/images/government-case-study.png'
import governmentAvatarImage from '../assets/images/government-avatar.png'

// Background style using inline styles for complex multi-layer gradient
// This cannot be easily expressed in Tailwind CSS, so inline style is used
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
      <main className="w-full">
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

      {/* Case Study Section */}
      <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/426.67]">
            <img
              src={governmentCaseStudyImage}
              alt="Albania case study map"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-12 items-start relative min-w-0">
            <SectionHeader
              title="Real results at national scale"
              description="How Albania enabled secure remote voter registration for its diaspora with Folio's digital identity wallet."
              align="left"
            />
            <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
              {/* Challenge */}
              <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
                <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                  Challenge
                </p>
                <p className="font-normal relative shrink-0 text-[#737373] w-full">
                  Albania needed a secure way for more than 1.6M citizens living abroad to register to vote remotely, while meeting strict security and transparency requirements.
                </p>
              </div>
              {/* Solution */}
              <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
                <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                  Solution
                </p>
                <p className="font-normal relative shrink-0 text-[#737373] w-full">
                  The Central Election Commission launched a remote registration platform powered by Folio: mobile and web channels with secure identity verification and a digital voter card that shows application status.
                </p>
              </div>
              {/* Results */}
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                <p className="font-semibold leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                  Results
                </p>
                <div className="flex gap-8 items-start relative shrink-0 w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start relative self-stretch shrink-0 whitespace-pre-wrap">
                    <p className="font-bold leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] w-full">
                      525%
                    </p>
                    <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                      increase in diaspora participation vs previous election
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start relative self-stretch shrink-0 whitespace-pre-wrap">
                    <p className="font-bold leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] w-full">
                      365,000+
                    </p>
                    <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                      profiles created across mobile and web channels
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="border-l border-[#737373] border-r-0 border-t-0 border-b-0 box-border flex flex-col gap-3 items-start px-6 py-4 relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full whitespace-pre-wrap">
                "Working with Folio has been a transformative experience… they set a new standard of excellence for how digital identity solutions should be delivered."
              </p>
              <div className="flex gap-4 items-start relative shrink-0 w-full">
                <div className="box-border flex gap-2 items-center px-0 py-3 relative shrink-0">
                  <div className="relative rounded-full shrink-0 w-8 h-8">
                    <img
                      src={governmentAvatarImage}
                      alt="Ilirjan Celibashi"
                      className="absolute inset-0 max-w-none object-center object-cover rounded-full w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border flex flex-1 gap-2 items-center min-h-[56px] min-w-0 px-0 py-1 relative shrink-0">
                  <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base whitespace-pre-wrap">
                    <span className="leading-6">Ilirjan Celibashi</span>
                    <span className="font-normal leading-6 text-[#737373]"> - State Election Commissioner, Albania</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Real results at national scale"
              description="How Albania enabled secure remote voter registration for its diaspora with Folio's digital identity wallet."
              align="left"
            />
            <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
              {/* Challenge */}
              <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
                <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                  Challenge
                </p>
                <p className="font-normal relative shrink-0 text-[#737373] w-full">
                  Albania needed a secure way for more than 1.6M citizens living abroad to register to vote remotely, while meeting strict security and transparency requirements.
                </p>
              </div>
              {/* Solution */}
              <div className="flex flex-col gap-1 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
                <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                  Solution
                </p>
                <p className="font-normal relative shrink-0 text-[#737373] w-full">
                  The Central Election Commission launched a remote registration platform powered by Folio: mobile and web channels with secure identity verification and a digital voter card that shows application status.
                </p>
              </div>
              {/* Results */}
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <p className="font-semibold leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                  Results
                </p>
                <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                  <div className="flex flex-col gap-1 items-start relative shrink-0 w-full whitespace-pre-wrap">
                    <p className="font-bold leading-8 relative shrink-0 text-[#0a0a0a] text-2xl w-full">
                      525%
                    </p>
                    <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                      increase in diaspora participation vs previous election
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 items-start relative shrink-0 w-full whitespace-pre-wrap">
                    <p className="font-bold leading-8 relative shrink-0 text-[#0a0a0a] text-2xl w-full">
                      365,000+
                    </p>
                    <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                      profiles created across mobile and web channels
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full whitespace-pre-wrap">
                "Working with Folio has been a transformative experience… they set a new standard of excellence for how digital identity solutions should be delivered."
              </p>
              <div className="flex gap-4 items-start relative shrink-0 w-full">
                <div className="box-border flex gap-2 items-center px-0 py-3 relative shrink-0">
                  <div className="relative rounded-full shrink-0 w-8 h-8">
                    <img
                      src={governmentAvatarImage}
                      alt="Ilirjan Celibashi"
                      className="absolute inset-0 max-w-none object-center object-cover rounded-full w-full h-full"
                    />
                  </div>
                </div>
                <div className="box-border flex flex-1 gap-2 items-center min-h-[56px] min-w-0 px-0 py-1 relative shrink-0">
                  <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base whitespace-pre-wrap">
                    <span className="leading-6">Ilirjan Celibashi</span>
                    <span className="font-normal leading-6 text-[#737373]"> - State Election Commissioner, Albania</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-[240/426.67] relative rounded-2xl shrink-0 w-full">
            <img
              src={governmentCaseStudyImage}
              alt="Albania case study map"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Identity Lab Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
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
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={governmentIdentityLabImage}
              alt="Identity Lab"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
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
      </main>
      {/* Footer */}
      <FooterSection />
    </div>
  )
}
