import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import FAQSection, { FAQItem } from '../components/sections/FAQSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToSection } from '../utils/scrollToSection'
import starIcon from '../assets/icons/Star.svg'
import creditCardIcon from '../assets/icons/CreditCard.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import scanTextIcon from '../assets/icons/ScanText.svg'
import tagIcon from '../assets/icons/Tag.svg'
import userRoundCheckIcon from '../assets/icons/UserRoundCheck.svg'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

const LOYALTY_CARD_FAQ: FAQItem[] = [
  {
    q: 'What types of loyalty cards can I store?',
    a: 'You can store any loyalty card, membership card, or reward card from any store or program. This includes supermarket cards, coffee shop rewards, airline miles, hotel points, gym memberships, and more.',
  },
  {
    q: 'How do I add my loyalty cards to Folio?',
    a: 'You can scan your physical card with your camera, upload a photo, or manually enter the card details. Folio will extract the barcode and card number automatically.',
  },
  {
    q: 'Can I use my digital loyalty card at the store?',
    a: 'Yes. When you check out, open Folio and show the barcode or QR code on your phone screen. The cashier can scan it just like your physical card.',
  },
  {
    q: 'Is Folio better than the store\'s own app?',
    a: 'Folio lets you keep ALL your loyalty cards in one place instead of downloading a separate app for each store. It\'s simpler and uses less storage on your phone.',
  },
  {
    q: 'Are my loyalty card details secure?',
    a: 'Yes. All your loyalty cards are encrypted with end-to-end encryption. Your data stays private with keys only you control.',
  },
]

function LoyaltyCardAppPage() {
  const navigate = useNavigate()
  
  usePageTitle({
    title: 'Loyalty card app - Membership and reward cards wallet app | Folio',
    description: 'Folio loyalty card app allows you to easily manage loyalty cards and membership cards. Keep everything safe with end-to-end encryption. Available on iOS and Android.',
    ogTitle: 'Loyalty card app | Folio',
    ogDescription: 'Store all your loyalty cards, membership cards, and reward cards in one secure digital wallet. Works on iPhone and Android.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/loyalty-card-app/'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <h1 className="font-bold leading-9 md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
              Loyalty card app
            </h1>
            <p className="font-normal leading-6 text-[#737373] text-base w-full">
              Keep all your loyalty cards, membership cards, and reward cards in one secure digital wallet. No more digging through your wallet or missing out on points. Folio works with any store and keeps your cards ready when you need them.
            </p>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <Button variant="primary" onClick={() => scrollToSection('get-the-app')}>
                Get the app
              </Button>
              <Button variant="secondary" onClick={() => navigate('/')}>
                Learn more
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="All your rewards in one place"
              description="Stop juggling multiple apps and physical cards. Folio keeps everything organized."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={starIcon}
                title="Any loyalty program"
                description="Works with supermarkets, coffee shops, airlines, hotels, pharmacies, and any other rewards program."
              />
              <ToolCard
                icon={scanTextIcon}
                title="Quick scan to add"
                description="Scan your card's barcode and Folio captures all the details instantly."
              />
              <ToolCard
                icon={tagIcon}
                title="Organized by category"
                description="Group your cards by type or create custom labels to find them quickly."
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title="Secure and private"
                description="Your loyalty card data is encrypted. Not even Folio can see your information."
              />
            </div>
          </div>
        </section>

        {/* Card Types Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Works with all your cards"
              description="Folio supports any card with a barcode, QR code, or membership number."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={starIcon}
                title="Store loyalty cards"
                description="Supermarket rewards, pharmacy points, and retail store memberships."
              />
              <ToolCard
                icon={creditCardIcon}
                title="Membership cards"
                description="Gym memberships, club cards, library cards, and subscription services."
              />
              <ToolCard
                icon={tagIcon}
                title="Reward programs"
                description="Coffee shop stamps, restaurant points, and cashback programs."
              />
              <ToolCard
                icon={smartphoneIcon}
                title="Travel rewards"
                description="Airline miles, hotel points, car rental rewards, and travel clubs."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="How to use Folio for loyalty cards"
              description="Adding and using your loyalty cards is quick and easy."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 items-start sm:items-stretch justify-center w-full max-w-[900px] min-w-0">
              <HowItWorksStep
                number="1"
                icon={scanTextIcon}
                title="Scan your card"
                description="Point your camera at any loyalty card to capture the barcode and details."
              />
              <HowItWorksStep
                number="2"
                icon={tagIcon}
                title="Organize"
                description="Add labels or let Folio automatically categorize your cards."
              />
              <HowItWorksStep
                number="3"
                icon={smartphoneIcon}
                title="Show at checkout"
                description="Open the card in Folio and let the cashier scan your screen."
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Why choose Folio for loyalty cards"
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={smartphoneIcon}
                title="One app for all cards"
                description="No need to download a separate app for each store. Keep everything in Folio."
              />
              <ToolCard
                icon={shieldCheckIcon}
                title="Privacy focused"
                description="Unlike store apps, Folio doesn't track your shopping or sell your data."
              />
              <ToolCard
                icon={userRoundCheckIcon}
                title="Share with family"
                description="Create a shared folder so your family can use the same loyalty cards."
              />
              <ToolCard
                icon={lockKeyholeIcon}
                title="Works offline"
                description="Access your loyalty cards even without internet. Perfect for stores with poor signal."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqData={LOYALTY_CARD_FAQ}
          title="Frequently asked questions"
          description="Common questions about using Folio as your loyalty card wallet."
        />

        {/* CTA Section */}
        <section id="get-the-app" className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-8 items-center max-w-[576px] px-6 py-0 relative shrink-0 w-full text-center">
            <SectionHeader
              title="Get the loyalty card app"
              description="Download Folio and start organizing your loyalty cards, membership cards, and reward cards today."
              maxWidth="576px"
            />
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <Button
                href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
                target="_blank"
                variant="primary"
              >
                Download for iOS
              </Button>
              <Button
                href="https://play.google.com/store/apps/details?id=com.folioltd"
                target="_blank"
                variant="primary"
              >
                Download for Android
              </Button>
            </div>
          </div>
        </section>
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

export default memo(LoyaltyCardAppPage)
