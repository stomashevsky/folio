import Navbar from '../components/Navbar'
import { SectionHeader, Button } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import checkIcon from '../assets/icons/check.svg'
import placeholderImage from '../assets/images/placeholder.png'
import arrowUpRightIcon from '../assets/icons/arrow-up-right.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function GovernmentPage() {
  usePageTitle({
    title: 'Government Solutions | Folio Wallet',
    description: 'Tools for governments to design, test and deploy next-generation digital credentials. Digital identity aligned with global standards.'
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
                Tools for governments to design, test and deploy next-generation digital credentials.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-start relative">
              <Button
                href="/identity-lab"
                variant="primary"
              >
                Explore Identity Lab
              </Button>
            </div>
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={placeholderImage} 
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
                Tools for governments to design, test and deploy next-generation digital credentials.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start relative shrink-0">
              <Button
                href="/identity-lab"
                variant="primary"
                fullWidth
              >
                Explore Identity Lab
              </Button>
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={placeholderImage} 
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

      {/* Standards & Compliance Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img 
              src={placeholderImage} 
              alt="Standards and compliance"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Standards & compliance"
              description="Aligned with trusted frameworks"
              align="left"
              maxWidth="100%"
            />
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FeatureListItem text="EUDI Wallet" />
              <FeatureListItem text="ISO 18013 mobile driving licence" />
              <FeatureListItem text="Verifiable Credentials" />
              <FeatureListItem text="Secure presentation flows" />
              <FeatureListItem text="Cryptographic verification" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Standards & compliance"
              description="Aligned with trusted frameworks"
              align="left"
            />
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FeatureListItem text="EUDI Wallet" />
              <FeatureListItem text="ISO 18013 mobile driving licence" />
              <FeatureListItem text="Verifiable Credentials" />
              <FeatureListItem text="Secure presentation flows" />
              <FeatureListItem text="Cryptographic verification" />
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img 
              src={placeholderImage} 
              alt="Standards and compliance"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Digital Issuing Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Digital issuing"
              description="Issue secure mobile credentials for IDs, certificates, permits and driving licences with controlled and verifiable distribution across your identity ecosystem."
              align="left"
            />
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={placeholderImage}
              alt="Digital issuing"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Digital issuing"
              description="Issue secure mobile credentials for IDs, certificates, permits and driving licences with controlled and verifiable distribution across your identity ecosystem."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={placeholderImage}
              alt="Digital issuing"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={placeholderImage}
              alt="Verification"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Verification"
              description="Perform trusted verification with cryptographic checks, scannable codes and offline-ready protection so credentials remain authentic and tamper resistant in any environment."
              align="left"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Verification"
              description="Perform trusted verification with cryptographic checks, scannable codes and offline-ready protection so credentials remain authentic and tamper resistant in any environment."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={placeholderImage}
              alt="Verification"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Presentation"
              description="Enable privacy-first identity sharing with minimal disclosure, clear user consent and secure communication channels across public and private services."
              align="left"
            />
          </div>
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={placeholderImage}
              alt="Presentation"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Presentation"
              description="Enable privacy-first identity sharing with minimal disclosure, clear user consent and secure communication channels across public and private services."
              align="left"
            />
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={placeholderImage}
              alt="Presentation"
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
          <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
            <img
              src={placeholderImage}
              alt="Identity Lab"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
            <SectionHeader
              title="Identity Lab"
              description="Test real digital identity flows in a safe sandbox where you can issue, verify and experiment with mobile credentials in a fully simulated environment."
              align="left"
            />
            <div className="flex gap-3 items-start relative shrink-0">
              <Button
                href="/identity-lab"
                variant="primary"
              >
                Open Identity Lab
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-start relative shrink-0 w-full">
            <SectionHeader
              title="Identity Lab"
              description="Test real digital identity flows in a safe sandbox where you can issue, verify and experiment with mobile credentials in a fully simulated environment."
              align="left"
            />
            <div className="flex gap-3 items-start relative shrink-0">
              <Button
                href="/identity-lab"
                variant="primary"
              >
                Open Identity Lab
              </Button>
            </div>
          </div>
          <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
            <img
              src={placeholderImage}
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
              <h2 className="font-bold leading-8 text-2xl text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
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
            <h2 className="font-bold leading-8 text-2xl text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
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

function FeatureListItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start relative shrink-0 w-full">
      <div className="box-border flex gap-2 items-center pb-0 pt-0.5 px-0 relative shrink-0 w-5">
        <div className="aspect-[24/24] flex-1 min-h-0 min-w-0 overflow-clip relative shrink-0">
          <img 
            src={checkIcon} 
            alt="" 
            aria-hidden="true"
            className="block max-w-none w-full h-full"
          />
        </div>
      </div>
      <p className="flex-1 font-medium leading-6 min-h-0 min-w-0 relative shrink-0 text-[#0a0a0a] text-base whitespace-pre-wrap">
        {text}
      </p>
    </div>
  )
}
