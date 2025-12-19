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
import cardScannerAppHero from '../assets/images/card-scanner-app-hero.png'
import scanTextIcon from '../assets/icons/ScanText.svg'
import cameraIcon from '../assets/icons/Camera.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import fileSpreadsheetIcon from '../assets/icons/FileSpreadsheet.svg'
import creditCardIcon from '../assets/icons/CreditCard.svg'
import idCardIcon from '../assets/icons/IdCard.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const CARD_SCANNER_FAQ: FAQItem[] = [
  {
    q: 'What can I scan with Folio card scanner?',
    a: 'You can scan ID cards, passports, driver licenses, credit cards, debit cards, gift cards, loyalty cards, membership cards, and any document with text or barcodes.',
  },
  {
    q: 'Does Folio use OCR to extract text from cards?',
    a: 'Yes. Folio uses advanced OCR technology to automatically extract text, numbers, dates, and other information from your scanned cards and documents.',
  },
  {
    q: 'Is the card scanner free to use?',
    a: 'Yes. Folio card scanner is completely free with unlimited scans. There are no hidden fees or premium features locked behind a paywall.',
  },
  {
    q: 'Can I scan cards on both iPhone and Android?',
    a: 'Yes. Folio card scanner app is available on both iOS and Android devices. Your scanned cards sync across all your devices automatically.',
  },
  {
    q: 'Are my scanned cards stored securely?',
    a: 'Yes. All scanned cards are encrypted with end-to-end encryption. Your data is protected with keys only you control, and not even Folio can access your information.',
  },
]

function CardScannerAppPage() {
  const navigate = useNavigate()
  
  usePageTitle({
    title: 'Card scanner app for iPhone and Android | Folio',
    description: 'Folio card scanner app allows you to easily scan cards and documents. Keep everything safe with end-to-end encryption. Available on iOS and Android.',
    ogTitle: 'Card scanner app | Folio',
    ogDescription: 'Scan and organize your cards and documents with Folio. OCR extracts details automatically. End-to-end encrypted.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/card-scanner-app/'
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
                <HeroTagline icon={scanTextIcon}>Card scanner</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  Card scanner app
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Scan any card or document with your phone camera. Folio automatically extracts important details using OCR and stores everything securely with end-to-end encryption. Available free on iPhone and Android.
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
                src={cardScannerAppHero}
                alt="Card scanner app preview"
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
                <HeroTagline icon={scanTextIcon}>Card scanner</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  Card scanner app
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Scan any card or document with your phone camera. Folio automatically extracts important details using OCR and stores everything securely with end-to-end encryption. Available free on iPhone and Android.
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
                src={cardScannerAppHero}
                alt="Card scanner app preview"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* What You Can Scan Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Scan any card or document"
              description="Folio card scanner works with all types of cards and documents you need to organize."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={idCardIcon}
                title="ID cards and passports"
                description="Scan government IDs, passports, driver licenses, and residence permits."
              />
              <ToolCard
                icon={creditCardIcon}
                title="Payment cards"
                description="Scan credit cards, debit cards, and prepaid cards to store card details securely."
              />
              <ToolCard
                icon={fileSpreadsheetIcon}
                title="Tickets and bookings"
                description="Scan boarding passes, event tickets, hotel confirmations, and travel documents."
              />
              <ToolCard
                icon={scanTextIcon}
                title="Any document"
                description="Scan receipts, warranties, insurance cards, membership cards, and more."
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Smart scanning features"
              description="More than just a scanner. Folio understands your documents."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={scanTextIcon}
                title="OCR text extraction"
                description="Automatically extract names, numbers, dates, and other text from scanned cards."
              />
              <ToolCard
                icon={cameraIcon}
                title="High-quality capture"
                description="Smart camera guidance helps you capture clear, readable scans every time."
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title="Secure storage"
                description="All scans are encrypted end-to-end. Only you can access your data."
              />
              <ToolCard
                icon={smartphoneIcon}
                title="Cross-device sync"
                description="Scanned cards sync securely across all your iPhone and Android devices."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="How to scan cards"
              description="Scanning and organizing your cards takes just seconds."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 items-start sm:items-stretch justify-center w-full max-w-[900px] min-w-0">
              <HowItWorksStep
                number="1"
                icon={cameraIcon}
                title="Point and scan"
                description="Open Folio and point your camera at any card or document."
              />
              <HowItWorksStep
                number="2"
                icon={scanTextIcon}
                title="Auto-extract"
                description="Folio automatically detects edges and extracts all important information."
              />
              <HowItWorksStep
                number="3"
                icon={shieldCheckIcon}
                title="Securely stored"
                description="Your card is encrypted and organized, ready to access anytime."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqData={CARD_SCANNER_FAQ}
          title="Frequently asked questions"
          description="Common questions about Folio card scanner app."
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

export default memo(CardScannerAppPage)
