import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'

// Icons
import shieldHalfIcon from '../assets/icons/ShieldHalf.svg'
import circleCheckBigIcon from '../assets/icons/CircleCheckBig.svg'
import circleArrowUpIcon from '../assets/icons/CircleArrowUp.svg'
import globeIcon from '../assets/icons/Globe.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import mailCheckIcon from '../assets/icons/MailCheck.svg'
import triangleAlertIcon from '../assets/icons/TriangleAlert.svg'
import passcodeLockIcon from '../assets/icons/PasscodeLock.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import searchCheckIcon from '../assets/icons/SearchCheck.svg'
import messageSquareMoreIcon from '../assets/icons/MessageSquareMore.svg'

// Images
import phoneEmailHero from '../assets/images/phone-email-validation-hero.png'
import phoneEmailHowItWorks1 from '../assets/images/phone-email-validation-how-it-works-1.png'
import phoneEmailHowItWorks2 from '../assets/images/phone-email-validation-how-it-works-2.png'
import phoneEmailHowItWorks3 from '../assets/images/phone-email-validation-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const howItWorksItems: AccordionItemData[] = [
  {
    id: 'collect-details',
    title: 'Collect contact details',
    description: 'Users enter their phone number or email address.',
    desktopImage: phoneEmailHowItWorks1,
  },
  {
    id: 'send-code',
    title: 'Send a verification code',
    description: 'A code is automatically delivered via text or email.',
    desktopImage: phoneEmailHowItWorks2,
  },
  {
    id: 'confirm-ownership',
    title: 'Confirm ownership',
    description: 'Users enter the code to verify that the phone or email belongs to them.',
    desktopImage: phoneEmailHowItWorks3,
  },
]

const verificationMethods = [
  {
    icon: smartphoneIcon,
    title: 'Phone number verification (2FA)',
    description: 'Verify the ownership of a phone number by sending a one-time code via call or text. This ensures the number is active, reachable, and truly belongs to the person attempting to authenticate.',
  },
  {
    icon: globeIcon,
    title: 'Phone ownership check',
    description: "Confirm a user's legal name and associated phone number by cross-referencing global carrier databases. This adds an extra layer of trust by validating telecom-verified identity information.",
  },
  {
    icon: mailCheckIcon,
    title: 'Email verification (2FA)',
    description: 'Authenticate the ownership of an email address by delivering a one-time code or secure link. This confirms that the user controls the inbox and can receive sensitive communications.',
  },
  {
    icon: triangleAlertIcon,
    title: 'Risk assessment',
    description: 'Evaluate the trustworthiness of a phone number or email by analyzing activity patterns, abuse signals, and reputation insights to identify risky identities before they enter your system.',
  },
]

const riskSignals = [
  {
    icon: passcodeLockIcon,
    title: 'Two-factor authentication',
    description: "Strengthen account security by sending a one-time verification code to the user's phone number or email, ensuring only the rightful owner can proceed.",
  },
  {
    icon: shieldCheckIcon,
    title: 'Account takeover prevention',
    description: 'Block unauthorized access attempts by layering multiple security checks, helping prevent attackers from gaining control of user accounts.',
  },
  {
    icon: searchCheckIcon,
    title: 'Risk assessment',
    description: 'Evaluate the trustworthiness of a phone number or email by analyzing reputation, unusual patterns, and known risk indicators during onboarding.',
  },
]

export default function PhoneAndEmailValidationPage() {
  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('collect-details')
  
  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

  const handleGetInTouch = () => {
    window.location.href = 'mailto:contact@folio.id'
  }

  usePageTitle({
    title: 'Phone and Email Validation | Folio Wallet',
    description: 'Fast phone and email validation. Check whether phone numbers and email addresses are real and truly belong to your users.',
    ogTitle: 'Phone and Email Validation | Folio Wallet',
    ogDescription: 'Fast phone and email validation. Check whether phone numbers and email addresses are real and truly belong to your users.',
    ogImage: getOgImageUrl('phone-email-validation-hero.png'),
    ogUrl: 'https://folio.id/platform/phone-and-email-validation'
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
                <HeroTagline icon={messageSquareMoreIcon}>Phone and email validation</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Fast phone and email validation
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Check whether phone numbers and email addresses are real and truly belong to your users.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img 
                src={phoneEmailHero} 
                alt="Phone and email validation preview" 
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
                <HeroTagline icon={messageSquareMoreIcon}>Phone and email validation</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Fast phone and email validation
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Check whether phone numbers and email addresses are real and truly belong to your users.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img 
                src={phoneEmailHero} 
                alt="Phone and email validation preview" 
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Why verify phone and email Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Why verify phone and email"
                maxWidth="576px"
              />
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title="Secure accounts"
                  description="Prevent unauthorized access by confirming that phone numbers and emails truly belong to each user."
                />
                <FeatureHighlight
                  icon={circleCheckBigIcon}
                  title="Easy for users"
                  description="Reduce drop-offs with simple, low-friction flows that let users verify their details in seconds."
                />
                <FeatureHighlight
                  icon={circleArrowUpIcon}
                  title="Higher completion rates"
                  description="Help legitimate users pass verification by offering fallback methods when the first attempt fails."
                />
              </div>
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-10 items-start relative shrink-0 w-full">
                <FeatureHighlight
                  icon={shieldHalfIcon}
                  title="Secure accounts"
                  description="Prevent unauthorized access by confirming that phone numbers and emails truly belong to each user."
                />
                <FeatureHighlight
                  icon={circleCheckBigIcon}
                  title="Easy for users"
                  description="Reduce drop-offs with simple, low-friction flows that let users verify their details in seconds."
                />
                <FeatureHighlight
                  icon={circleArrowUpIcon}
                  title="Higher completion rates"
                  description="Help legitimate users pass verification by offering fallback methods when the first attempt fails."
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
                defaultOpenId="collect-details"
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
              defaultOpenId="collect-details"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Explore verification methods Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Explore verification methods"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {verificationMethods.map((item, index) => (
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

        {/* Prevent fraud with additional risk signals Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Prevent fraud with additional risk signals"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {riskSignals.map((item, index) => (
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
                  Build a stronger identity layer
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  Talk with our team to see how Folio can elevate your verification flow and protect your users at every step.
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
                Build a stronger identity layer
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                Talk with our team to see how Folio can elevate your verification flow and protect your users at every step.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0">
              <Button onClick={handleGetInTouch} variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ExploreMoreSection currentPath="/platform/phone-and-email-validation" />
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
