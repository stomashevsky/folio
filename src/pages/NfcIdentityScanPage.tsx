import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'

// Icons
import triangleAlertIcon from '../assets/icons/TriangleAlert.svg'
import nfcIcon from '../assets/icons/Nfc.svg'
import circleArrowUpIcon from '../assets/icons/CircleArrowUp.svg'
import smartphoneNfcIcon from '../assets/icons/SmartphoneNfc.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import checkCheckIcon from '../assets/icons/CheckCheck.svg'

// Images
import nfcHero from '../assets/images/nfc-identity-scan-hero.png'
import nfcHowItWorks1 from '../assets/images/nfc-identity-scan-how-it-works-1.png'
import nfcHowItWorks2 from '../assets/images/nfc-identity-scan-how-it-works-2.png'
import nfcHowItWorks3 from '../assets/images/nfc-identity-scan-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const howItWorksItems: AccordionItemData[] = [
  {
    id: 'add-nfc',
    title: 'Add NFC to your KYC flow',
    description: 'Offer NFC scanning as an additional verification step for supported devices and documents, enhancing accuracy without adding friction.',
    desktopImage: nfcHowItWorks1,
  },
  {
    id: 'extract-data',
    title: 'Extract data automatically',
    description: 'Users photograph their passport or ID and tap their phone to read the NFC chip. The system pulls structured data instantly for quick review.',
    desktopImage: nfcHowItWorks2,
  },
  {
    id: 'confirm-identities',
    title: 'Confirm identities seamlessly',
    description: 'After a successful NFC scan, users continue through your verification flow. If issues arise, you can request more details, escalate, or route to manual review.',
    desktopImage: nfcHowItWorks3,
  },
]

const keyFeatures = [
  {
    id: 'stronger-security',
    title: 'Stronger security',
    description: 'NFC reads data directly from the encrypted RFID chip, allowing you to verify information at its source and reduce reliance on visual checks.',
  },
  {
    id: 'fast-verification',
    title: 'Fast, seamless verification',
    description: 'Users tap their smartphone to the document and instantly confirm the extracted data, speeding up onboarding without added friction.',
  },
  {
    id: 'smart-detection',
    title: 'Smart device autodetection',
    description: 'The system automatically detects when a device and document support NFC, enabling a smooth experience without extra user steps.',
  },
  {
    id: 'worldwide-support',
    title: 'Worldwide support',
    description: 'NFC passport and ID reading works across more than 120 countries, all through the same lightweight mobile integration.',
  },
]

const useCases = [
  {
    icon: smartphoneNfcIcon,
    title: 'KYC enhancement',
    description: 'Enable users in supported regions to verify their passports through NFC, strengthening your KYC process with secure, chip-based identity data.',
  },
  {
    icon: shieldCheckIcon,
    title: 'Fraud prevention',
    description: 'Extract tamper-proof identity data from the RFID chip and verify the person through selfie matching, reducing the risk of forged or altered documents.',
  },
  {
    icon: checkCheckIcon,
    title: 'Step-up checks',
    description: 'Use NFC as an additional verification layer during risky actions or high-value transactions, adding assurance without disrupting the user journey.',
  },
]

export default function NfcIdentityScanPage() {
  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('add-nfc')
  const [activeKeyFeatureId, setActiveKeyFeatureId] = useState<string | null>('stronger-security')
  
  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

  usePageTitle({
    title: 'NFC Identity Scan | Folio Wallet',
    description: 'Spot passport and ID fraud instantly. Use NFC to read embedded passport and ID chip data, adding an extra security layer without adding user friction.',
    ogTitle: 'NFC Identity Scan | Folio Wallet',
    ogDescription: 'Spot passport and ID fraud instantly. Use NFC to read embedded passport and ID chip data, adding an extra security layer without adding user friction.',
    ogUrl: 'https://folio.id/platform/nfc-identity-scan'
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
                <HeroTagline icon={nfcIcon}>NFC identity scan</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Spot passport and ID fraud instantly
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Use NFC to read embedded passport and ID chip data, adding an extra security layer without adding user friction.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={nfcHero} 
                alt="NFC identity scan preview" 
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
                <HeroTagline icon={nfcIcon}>NFC identity scan</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                  Spot passport and ID fraud instantly
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full whitespace-pre-wrap">
                  Use NFC to read embedded passport and ID chip data, adding an extra security layer without adding user friction.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img 
                src={nfcHero} 
                alt="NFC identity scan preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Stronger passport and ID verification with NFC Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Stronger passport and ID verification with NFC"
                maxWidth="576px"
              />
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={triangleAlertIcon}
                  title="Detect forged documents"
                  description="Go beyond visual checks by reading the secure RFID chip inside a passport or ID card, helping you reveal digitally altered or counterfeit documents quickly."
                />
                <FeatureHighlight
                  icon={nfcIcon}
                  title="Automatic passport Ll checks"
                  description="Use NFC to determine the passport verification, reduce manual review time and automate fraud detection, spotting compare and high risk fraud cases."
                />
                <FeatureHighlight
                  icon={circleArrowUpIcon}
                  title="Boost user completion"
                  description="Guide users through a simple, seamless NFC flow that streamlines identity validation and leads to higher overall verification completion rates."
                />
              </div>
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-10 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={triangleAlertIcon}
                  title="Detect forged documents"
                  description="Go beyond visual checks by reading the secure RFID chip inside a passport or ID card, helping you reveal digitally altered or counterfeit documents quickly."
                />
                <FeatureHighlight
                  icon={nfcIcon}
                  title="Automatic passport Ll checks"
                  description="Use NFC to determine the passport verification, reduce manual review time and automate fraud detection, spotting compare and high risk fraud cases."
                />
                <FeatureHighlight
                  icon={circleArrowUpIcon}
                  title="Boost user completion"
                  description="Guide users through a simple, seamless NFC flow that streamlines identity validation and leads to higher overall verification completion rates."
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={activeHowItWorksItem.desktopImage} 
                alt={activeHowItWorksItem.title}
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="How it works"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="add-nfc"
                onItemChange={setActiveHowItWorksId}
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="How it works"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={howItWorksItems}
              defaultOpenId="add-nfc"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Key features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start max-w-full md:max-w-[512px] relative shrink-0 w-full md:w-auto md:flex-1 whitespace-pre-wrap">
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] w-full">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Securely read identity data from NFC-enabled passports and IDs with a fast, intuitive flow.
              </p>
            </div>
            <div className="flex flex-col gap-0 items-start relative shrink-0 w-full md:flex-1">
              {keyFeatures.map((feature) => (
                <KeyFeatureItem
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  isOpen={activeKeyFeatureId === feature.id}
                  onClick={() => setActiveKeyFeatureId(activeKeyFeatureId === feature.id ? null : feature.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Powerful uses of NFC verification Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Powerful uses of NFC verification"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {useCases.map((item, index) => (
                  <ToolCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
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
                  Build a stronger identity layer
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                  Talk with our team to see how Folio can elevate your verification flow and protect your users at every step.
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap">
                Build a stronger identity layer
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full whitespace-pre-wrap">
                Talk with our team to see how Folio can elevate your verification flow and protect your users at every step.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0">
              <Button variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ExploreMoreSection currentPath="/platform/nfc-identity-scan" />
      <FooterSection />
    </div>
  )
}

function FeatureHighlight({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col gap-5 items-start relative shrink-0">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-md shrink-0 size-10 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
        <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
        <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
          {title}
        </p>
        <p className="font-normal relative shrink-0 text-[#737373] w-full">
          {description}
        </p>
      </div>
    </div>
  )
}

function KeyFeatureItem({ title, description, isOpen, onClick }: { title: string; description: string; isOpen: boolean; onClick: () => void }) {
  return (
    <button 
      className="flex flex-col items-start border-b border-[#e5e5e5] py-4 w-full text-left cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full">
        <p className="font-normal leading-7 text-lg text-[#0a0a0a] text-left flex-1">
          {title}
        </p>
        <svg 
          className={`w-4 h-4 text-[#737373] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <p className="font-normal leading-5 text-sm text-[#737373] text-left w-full pt-2 pb-2">
          {description}
        </p>
      )}
    </button>
  )
}
