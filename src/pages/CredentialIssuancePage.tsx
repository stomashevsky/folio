import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import FAQSection, { FAQItem } from '../components/sections/FAQSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'

// Icons
import badgeCheckIcon from '../assets/icons/BadgeCheck.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import refreshCwIcon from '../assets/icons/RefreshCw.svg'
import idCardIcon from '../assets/icons/IdCard.svg'
import awardIcon from '../assets/icons/Award.svg'
import fileSpreadsheetIcon from '../assets/icons/FileSpreadsheet.svg'

// Images
import credentialIssuanceHero from '../assets/images/credential-issuance-hero.png'
import credentialIssuanceHowItWorks1 from '../assets/images/credential-issuance-how-it-works-1.png'
import credentialIssuanceHowItWorks2 from '../assets/images/credential-issuance-how-it-works-2.png'
import credentialIssuanceHowItWorks3 from '../assets/images/credential-issuance-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// How it works accordion items
const howItWorksItems: AccordionItemData[] = [
  {
    id: 'define',
    title: 'Define your credential',
    description: 'Set up the schema, claims and validity rules for your credential type. Choose which attributes to include and how long credentials remain valid.',
    desktopImage: credentialIssuanceHowItWorks1,
  },
  {
    id: 'issue',
    title: 'Issue to users',
    description: 'Generate credentials through a simple API call or batch process. Each credential is cryptographically signed and tamper-proof.',
    desktopImage: credentialIssuanceHowItWorks2,
  },
  {
    id: 'deliver',
    title: 'Deliver securely',
    description: 'Send credentials directly to user wallets via QR codes, deep links or push notifications. Users receive and store credentials instantly.',
    desktopImage: credentialIssuanceHowItWorks3,
  },
]

// Key features accordion items
const keyFeaturesItems: AccordionItemData[] = [
  {
    id: 'w3c',
    title: 'W3C Verifiable Credentials',
    description: 'Issue credentials that follow the W3C Verifiable Credentials standard for maximum interoperability across systems and providers.',
  },
  {
    id: 'openid4vci',
    title: 'OpenID4VCI protocol',
    description: 'Use the OpenID for Verifiable Credential Issuance protocol to deliver credentials securely to any compatible wallet.',
  },
  {
    id: 'selective-disclosure',
    title: 'Selective disclosure',
    description: 'Enable users to share only the specific claims they choose, protecting their privacy while still proving what they need to.',
  },
  {
    id: 'revocation',
    title: 'Revocation support',
    description: 'Revoke credentials instantly when needed. Verifiers can check revocation status in real time to ensure credentials are still valid.',
  },
  {
    id: 'expiration',
    title: 'Automatic expiration',
    description: 'Set expiration dates on credentials so they automatically become invalid after a specified period without manual intervention.',
  },
  {
    id: 'batch',
    title: 'Batch issuance',
    description: 'Issue thousands of credentials at once through batch processing. Ideal for organizations issuing credentials to large groups.',
  },
  {
    id: 'api-sdk',
    title: 'REST API and SDK',
    description: 'Integrate credential issuance into your existing systems using our developer-friendly REST API or native SDKs.',
  },
  {
    id: 'audit',
    title: 'Audit trail',
    description: 'Track every credential issued, revoked or updated with detailed logs for compliance and reporting purposes.',
  },
  {
    id: 'formats',
    title: 'Multiple credential formats',
    description: 'Support for JWT, SD-JWT, mDL and other credential formats to meet different use cases and regulatory requirements.',
  },
]

// Use cases data
const useCasesData = [
  {
    icon: idCardIcon,
    title: 'Digital identity',
    description: 'Issue national IDs, employee badges and membership cards that users can store and present from their digital wallet.',
  },
  {
    icon: awardIcon,
    title: 'Certificates',
    description: 'Create verifiable certificates for education, professional qualifications and health records that cannot be forged.',
  },
  {
    icon: fileSpreadsheetIcon,
    title: 'Permits and licenses',
    description: 'Issue driver licenses, building permits and professional licenses with built-in expiration and revocation controls.',
  },
]

// FAQ data
const CREDENTIAL_ISSUANCE_FAQ: FAQItem[] = [
  {
    q: 'What credential formats are supported?',
    a: 'Folio supports W3C Verifiable Credentials in JWT and JSON-LD formats, SD-JWT for selective disclosure, and ISO 18013-5 mDL format for mobile driver licenses. You can choose the format that best fits your use case and regulatory requirements.',
  },
  {
    q: 'How do I issue credentials via API?',
    a: 'Use our REST API to issue credentials programmatically. Define your credential schema, prepare the claims data, and make a POST request to the issuance endpoint. The API returns a signed credential that you can deliver to the user.',
  },
  {
    q: 'Can credentials be revoked?',
    a: 'Yes. You can revoke any credential at any time through the API or dashboard. Revocation takes effect immediately and verifiers can check revocation status in real time using standard protocols.',
  },
  {
    q: 'How are credentials delivered to users?',
    a: 'Credentials can be delivered via QR codes that users scan with their wallet app, deep links that open directly in the wallet, or push notifications for users who already have your app installed.',
  },
  {
    q: 'What standards does Folio follow?',
    a: 'Folio implements W3C Verifiable Credentials, W3C DID specifications, OpenID for Verifiable Credential Issuance (OpenID4VCI), and EUDI Wallet Architecture standards. This ensures interoperability with other compliant systems.',
  },
  {
    q: 'Can I customize credential schemas?',
    a: 'Yes. You can define custom schemas with the exact claims and data types your use case requires. You can also use standard schemas from schema.org or other registries for common credential types.',
  },
  {
    q: 'Is there batch issuance support?',
    a: 'Yes. The batch issuance API lets you issue thousands of credentials in a single request. This is useful for organizations issuing credentials to employees, students, or members at scale.',
  },
]

export default function CredentialIssuancePage() {
  usePageTitle({
    title: 'Credential Issuance | Folio Wallet',
    description: 'Issue verifiable credentials at scale. Create tamper-proof digital credentials and deliver them to user wallets with full lifecycle control.',
    ogTitle: 'Credential Issuance | Folio Wallet',
    ogDescription: 'Issue verifiable credentials at scale. Create tamper-proof digital credentials and deliver them to user wallets with full lifecycle control.',
    ogImage: getOgImageUrl('credential-issuance-hero.png'),
    ogUrl: 'https://folio.id/platform/credential-issuance'
  })

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('define')
  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

  const handleGetInTouch = () => {
    window.location.href = 'mailto:contact@folio.id'
  }

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
                <HeroTagline icon={badgeCheckIcon}>Credential issuance</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Issue verifiable credentials at scale
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Create tamper-proof digital credentials for identities, certificates and permits. Deliver them to user wallets with full lifecycle control.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={credentialIssuanceHero}
              alt="Credential issuance interface showing digital credentials being created and delivered to wallets"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <HeroTagline icon={badgeCheckIcon}>Credential issuance</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Issue verifiable credentials at scale
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Create tamper-proof digital credentials for identities, certificates and permits. Deliver them to user wallets with full lifecycle control.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <ImageWithPlaceholder
              src={credentialIssuanceHero}
              alt="Credential issuance interface showing digital credentials being created and delivered to wallets"
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="aspect-square relative rounded-2xl shrink-0 w-full"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Trusted credential infrastructure"
                maxWidth="576px"
              />
              <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
                <FeatureItem
                  icon={shieldCheckIcon}
                  title="Standards compliance"
                  description="Issue credentials that follow W3C, EUDI and OpenID4VCI standards for maximum interoperability and future-proofing."
                />
                <FeatureItem
                  icon={smartphoneIcon}
                  title="Flexible delivery"
                  description="Deliver credentials via QR codes, deep links or direct wallet integration. Users receive credentials instantly."
                />
                <FeatureItem
                  icon={refreshCwIcon}
                  title="Lifecycle control"
                  description="Manage credential validity with expiration dates, revocation and real-time status updates."
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <ImageWithPlaceholder
              src={activeHowItWorksItem.desktopImage || ''}
              alt={activeHowItWorksItem.title}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="How it works"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="define"
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
              defaultOpenId="define"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Key Features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-5 items-start relative min-w-0 max-w-[512px]">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Everything you need to issue, manage and deliver verifiable credentials
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start relative min-w-0">
              <Accordion
                items={keyFeaturesItems}
                defaultOpenId="w3c"
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Everything you need to issue, manage and deliver verifiable credentials
              </p>
            </div>
            <Accordion
              items={keyFeaturesItems}
              defaultOpenId="w3c"
              showMobileImages={false}
            />
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Where credential issuance makes an impact"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {useCasesData.map((item, index) => (
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
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  Let's build your credential ecosystem
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  Talk to our team to explore how Folio can help you issue and manage verifiable credentials.
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                Let's build your credential ecosystem
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                Talk to our team to explore how Folio can help you issue and manage verifiable credentials.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0">
              <Button onClick={handleGetInTouch} variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqData={CREDENTIAL_ISSUANCE_FAQ} />
      </main>
      <ExploreMoreSection currentPath="/platform/credential-issuance" />
      <FooterSection />
    </div>
  )
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col gap-5 items-start relative shrink-0 w-full md:w-auto">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 size-10">
        <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full">
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

