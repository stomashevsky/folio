import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button, HeroTagline } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import FAQSection, { FAQItem } from '../components/sections/FAQSection'
import GetTheAppSection from '../components/sections/GetTheAppSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToSection } from '../utils/scrollToSection'
import idWalletAppHero from '../assets/images/id-wallet-app-hero.png'
import idCardIcon from '../assets/icons/IdCard.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import scanTextIcon from '../assets/icons/ScanText.svg'
import imagesIcon from '../assets/icons/Images.svg'
import refreshCwIcon from '../assets/icons/RefreshCw.svg'
import userRoundCheckIcon from '../assets/icons/UserRoundCheck.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const ID_WALLET_FAQ: FAQItem[] = [
  {
    q: 'What types of ID cards can I store in Folio?',
    a: 'You can store passports, national ID cards, driver\'s licenses, residence permits, and any other government-issued identification documents.',
  },
  {
    q: 'Is it safe to store my ID card in a digital wallet?',
    a: 'Yes. Folio uses end-to-end encryption to protect your ID cards. Your documents are encrypted on your device with keys only you control. Not even Folio can access your data.',
  },
  {
    q: 'Can I use Folio as a driver license wallet?',
    a: 'Yes. Folio is perfect for storing your driver\'s license digitally. You can scan your license, and Folio will extract all important details like expiry date, license number, and categories.',
  },
  {
    q: 'Will Folio remind me when my ID expires?',
    a: 'Yes. Folio automatically detects expiry dates from your ID cards and sends you reminders before they expire, so you\'re never caught off guard.',
  },
  {
    q: 'Can I share my ID with someone else?',
    a: 'Yes. You can create shared folders to safely share your ID documents with family members or trusted contacts. They\'ll always see the latest version.',
  },
]

function IdWalletAppPage() {
  const navigate = useNavigate()
  
  usePageTitle({
    title: 'ID card wallet app - Digital card holder for driver license | Folio',
    description: 'Folio ID card wallet app allows you to easily manage ID cards and driver licenses. Keep everything safe with end-to-end encryption. Available on iOS and Android.',
    ogTitle: 'ID card wallet app | Folio',
    ogDescription: 'Store your passports, ID cards, and driver licenses securely in one digital wallet. End-to-end encrypted.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/id-wallet-app/'
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
                <HeroTagline icon={idCardIcon}>ID wallet</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  ID card wallet app
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Keep your passports, ID cards, and driver licenses organized in one secure digital wallet. Folio extracts key details automatically, reminds you before documents expire, and keeps everything protected with end-to-end encryption.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                  Get the app
                </Button>
                <Button variant="secondary" onClick={() => navigate('/wallet')}>
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-[240/240]">
              <img
                src={idWalletAppHero}
                alt="ID card wallet app preview"
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
                <HeroTagline icon={idCardIcon}>ID wallet</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  ID card wallet app
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Keep your passports, ID cards, and driver licenses organized in one secure digital wallet. Folio extracts key details automatically, reminds you before documents expire, and keeps everything protected with end-to-end encryption.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0 w-full">
                <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                  Get the app
                </Button>
                <Button variant="secondary" onClick={() => navigate('/wallet')}>
                  Learn more
                </Button>
              </div>
            </div>
            <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full">
              <img
                src={idWalletAppHero}
                alt="ID card wallet app preview"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Everything you need in an ID wallet"
              description="Folio is designed to store and manage your most important identification documents securely."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={idCardIcon}
                title="All your IDs in one place"
                description="Store passports, national IDs, driver licenses, and residence permits in a clean, organized format."
              />
              <ToolCard
                icon={scanTextIcon}
                title="Smart data extraction"
                description="Scan your ID and Folio automatically extracts names, dates, document numbers, and other key details."
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title="End-to-end encrypted"
                description="Your ID documents are encrypted with keys only you control. Not even Folio can read your data."
              />
              <ToolCard
                icon={refreshCwIcon}
                title="Expiry reminders"
                description="Get notified before your passport, ID, or driver license expires so you can renew on time."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="How to add your ID cards"
              description="Adding your identification documents to Folio takes just seconds."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 items-start sm:items-stretch justify-center w-full max-w-[900px] min-w-0">
              <HowItWorksStep
                number="1"
                icon={scanTextIcon}
                title="Scan or upload"
                description="Use your camera to scan your ID card, or upload a photo from your library."
              />
              <HowItWorksStep
                number="2"
                icon={idCardIcon}
                title="Review details"
                description="Folio extracts all important information automatically. Verify and edit if needed."
              />
              <HowItWorksStep
                number="3"
                icon={smartphoneIcon}
                title="Access anywhere"
                description="Your ID is now securely stored and synced across all your devices."
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Why use Folio as your ID wallet"
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={shieldCheckIcon}
                title="Bank-level security"
                description="Zero-knowledge architecture means your ID documents remain private, even from us."
              />
              <ToolCard
                icon={imagesIcon}
                title="Original photos saved"
                description="Keep the original scans attached to each document for reference when needed."
              />
              <ToolCard
                icon={userRoundCheckIcon}
                title="Family sharing"
                description="Create shared folders to manage ID documents for your entire family in one place."
              />
              <ToolCard
                icon={smartphoneIcon}
                title="Works offline"
                description="Access your ID cards anytime, even without internet connection."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqData={ID_WALLET_FAQ}
          title="Frequently asked questions"
          description="Common questions about using Folio as your ID card wallet app."
        />

        {/* Get the App Section */}
        <GetTheAppSection />
      </main>
      <FooterSection />
    </div>
  )
}

function HowItWorksStep({ number, icon, title, description }: { number: string; icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <div className="relative">
        <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-xl shrink-0 size-14">
          <img src={icon} alt="" aria-hidden="true" className="w-6 h-6" />
        </div>
        <div className="absolute -top-2 -right-2 bg-[#0a0a0a] text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-base text-[#0a0a0a]">{title}</h3>
        <p className="font-normal text-sm text-[#737373] leading-5">{description}</p>
      </div>
    </div>
  )
}

export default memo(IdWalletAppPage)
