import { memo, useState } from 'react'
import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import { SectionHeader, Button, Breadcrumbs } from '../components/ui'
import AccordionItem from '../components/ui/AccordionItem'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'

interface FAQItem {
  q: string
  a: string
}

interface FAQCategory {
  id: string
  name: string
  items: FAQItem[]
}

// Comprehensive FAQ data organized by category
const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'product',
    name: 'Product',
    items: [
      {
        q: 'How do I organize my travel documents?',
        a: 'Folio automatically organizes your documents by type and date. You can create custom folders for specific trips, group documents by destination, and use the travel timeline to see all your upcoming and past trips in chronological order. Everything stays organized without manual sorting.',
      },
      {
        q: 'Can I add boarding passes and event tickets?',
        a: 'Yes. You can add boarding passes by scanning the barcode, importing a screenshot, forwarding the confirmation email to docs@folio.id, or importing .pkpass files directly. Event tickets work the same way. Folio extracts flight details, seat numbers, and gate information automatically.',
      },
      {
        q: 'How does the travel timeline work?',
        a: 'The travel timeline automatically arranges your flights, hotel bookings, train tickets, and events in chronological order. It shows your complete itinerary for each trip, highlights upcoming departures, and keeps a history of past travels. No manual entry required.',
      },
      {
        q: 'Can I scan multi-page documents?',
        a: 'Yes. When scanning passports or visas, you can capture multiple pages in one session. Folio keeps all pages together as a single document while extracting data from each page. This works great for visas that span multiple pages or passports with stamps you want to preserve.',
      },
      {
        q: 'How do I quickly find a specific document?',
        a: 'Use the search bar to find documents by name, number, or any extracted text. You can also filter by document type (passports, tickets, cards) or browse by category. Folio indexes all text from your documents, so searching for a flight number or hotel name works instantly.',
      },
      {
        q: 'Does Folio work with Apple Wallet passes?',
        a: 'Yes. You can import .pkpass files from Apple Wallet directly into Folio. Unlike Apple Wallet, Folio extracts and organizes the data, adds it to your travel timeline, and keeps everything searchable. Your passes remain accessible even without the original .pkpass file.',
      },
      {
        q: 'How do I import booking confirmations from email?',
        a: 'Forward any booking confirmation email to docs@folio.id. Folio automatically extracts flight details, hotel reservations, train tickets, and event bookings from the email. The parsed information appears in your app within seconds, already organized in your timeline.',
      },
      {
        q: 'Can I store loyalty and gift cards?',
        a: 'Yes. Add loyalty cards by scanning the barcode or entering the number manually. Folio stores the barcode for easy scanning at checkout. Gift cards work the same way, and you can track remaining balances. All cards are searchable and organized in the Cards section.',
      },
    ],
  },
  {
    id: 'security',
    name: 'Security',
    items: [
      {
        q: 'How does Folio protect my data?',
        a: 'Folio uses end-to-end encryption with AES-256, meaning your data is encrypted on your device before it leaves. Even Folio cannot access your documents. We also use zero-knowledge architecture, ensuring no one but you can see your data.',
      },
      {
        q: 'What is end-to-end encryption?',
        a: 'End-to-end encryption means your data is encrypted on your device before being sent anywhere. Only you hold the keys to decrypt it. Even if someone intercepts the data in transit or accesses our servers, they cannot read your documents.',
      },
      {
        q: 'What is zero-knowledge architecture?',
        a: 'Zero-knowledge architecture means we cannot access your data even if we wanted to. Your encryption keys are generated and stored only on your devices. We never see your documents, and we cannot recover them if you lose your keys.',
      },
      {
        q: 'Can Folio employees see my documents?',
        a: 'No. Due to our end-to-end encryption and zero-knowledge architecture, Folio employees cannot access your documents. Your data is encrypted with keys only you control.',
      },
      {
        q: 'What biometric protection does Folio support?',
        a: 'Folio supports Face ID, Touch ID on iOS, and fingerprint authentication on Android. You can require biometric verification every time you open the app for extra security.',
      },
      {
        q: 'Is cloud sync safe?',
        a: 'Yes. Even with cloud sync enabled, your documents remain end-to-end encrypted. The encrypted data is synced, but only your devices can decrypt it. No one, including Folio, can read your synced documents.',
      },
    ],
  },
  {
    id: 'privacy',
    name: 'Privacy',
    items: [
      {
        q: 'Does Folio collect my personal data?',
        a: 'Folio collects minimal data required to provide the service. Your documents are encrypted and never accessed by us. We collect basic analytics (app usage, crash reports) to improve the product, but never your document contents.',
      },
      {
        q: 'Does Folio sell my data to third parties?',
        a: 'No. Folio does not sell, rent, or share your personal data with third parties for marketing purposes. Your privacy is fundamental to our business model.',
      },
      {
        q: 'Is Folio GDPR compliant?',
        a: 'Yes. Folio is fully compliant with GDPR (General Data Protection Regulation). You have full control over your data, including the right to access, export, and delete your information at any time.',
      },
      {
        q: 'Can I delete my account and all my data?',
        a: 'Yes. You can delete your account and all associated data at any time from the app settings. Once deleted, your data cannot be recovered as we don\'t keep backups of your encrypted documents.',
      },
      {
        q: 'Where is my data stored?',
        a: 'Your documents are stored locally on your device. If you enable cloud sync, encrypted copies are stored on secure servers in the European Union. The data remains encrypted and inaccessible to anyone but you.',
      },
    ],
  },
  {
    id: 'technical',
    name: 'Technical',
    items: [
      {
        q: 'What file formats does Folio support?',
        a: 'Folio supports PDF, PNG, JPG, JPEG, and most common image formats. You can also import documents by taking photos directly in the app or forwarding emails.',
      },
      {
        q: 'How does document scanning work?',
        a: 'Folio uses AI-powered OCR (Optical Character Recognition) to extract text and key details from your documents. This processing happens on your device for privacy, and the extracted data is encrypted along with the images.',
      },
      {
        q: 'What happens if I lose my phone?',
        a: 'If you have cloud sync enabled, your encrypted documents are backed up and can be restored on a new device. If you don\'t use cloud sync, documents are only on your device and would be lost. We recommend enabling cloud sync for backup.',
      },
      {
        q: 'Can I export my documents from Folio?',
        a: 'Yes. You can export individual documents or all your data at any time. Exported documents include both the original files and extracted metadata in common formats.',
      },
      {
        q: 'Does Folio work with other apps?',
        a: 'Yes. Folio integrates with your device\'s share sheet, allowing you to import documents from other apps. You can also share documents from Folio to other applications when needed.',
      },
    ],
  },
  {
    id: 'identity-verification',
    name: 'Identity verification',
    items: [
      {
        q: 'What is identity verification?',
        a: 'Identity verification is the process of confirming that a person is who they claim to be. It typically involves checking government-issued IDs, comparing photos, and verifying information against trusted sources.',
      },
      {
        q: 'Does Folio offer identity verification for businesses?',
        a: 'Yes. Folio provides identity verification infrastructure for businesses, including ID document verification, liveness detection, face matching, and data source checks. Contact us to learn more about our B2B solutions.',
      },
      {
        q: 'What is liveness detection?',
        a: 'Liveness detection confirms that a real person is present during verification, not a photo, video, or mask. It prevents spoofing attacks and ensures the person completing verification is physically there.',
      },
      {
        q: 'What is face matching?',
        a: 'Face matching compares a live selfie with the photo on an identity document to confirm the person holding the document is the legitimate owner. It uses AI to analyze facial features and detect matches.',
      },
      {
        q: 'What countries\' IDs does Folio support?',
        a: 'Folio supports identity documents from over 200 countries and territories, including passports, national ID cards, driver\'s licenses, and residence permits. Coverage is continuously expanding.',
      },
    ],
  },
  {
    id: 'government',
    name: 'Government and digital ID',
    items: [
      {
        q: 'What is EUDI Wallet?',
        a: 'EUDI (European Union Digital Identity) Wallet is a digital identity framework being developed by the EU. It will allow citizens to store and use digital versions of their identity documents, driver\'s licenses, and other credentials across the EU.',
      },
      {
        q: 'Is Folio compatible with EUDI?',
        a: 'Yes. Folio is built to be compatible with the European Digital Identity Wallet Architecture and Reference Framework. Our Playground feature lets you test EUDI-compatible issuance and verification flows.',
      },
      {
        q: 'What is the Folio Playground?',
        a: 'Playground is a sandbox environment where governments and developers can test digital credential issuance and verification flows without using real user data. It demonstrates EUDI-compatible workflows in a safe environment.',
      },
      {
        q: 'Does Folio work with government digital ID programs?',
        a: 'Yes. Folio provides tools for governments to design, test, and deploy modern digital credentials aligned with global standards. We work with election commissions, national ID programs, and other government initiatives.',
      },
    ],
  },
]

// Flatten all FAQ items for schema generation
const ALL_FAQ_ITEMS = FAQ_CATEGORIES.flatMap(category => category.items)

function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>('product')
  const [openIndex, setOpenIndex] = useState<number>(0)

  usePageTitle({
    title: 'Frequently Asked Questions | Folio',
    description: 'Find answers to common questions about Folio Wallet, digital identity, security, privacy, and more. Learn how Folio protects your documents with end-to-end encryption.',
    ogTitle: 'Frequently Asked Questions | Folio',
    ogDescription: 'Find answers to common questions about Folio Wallet, digital identity, security, privacy, and more.',
    ogImage: getOgImageUrl('folio-app-hero.png'),
    ogUrl: 'https://folio.id/faq',
  })

  const currentCategory = FAQ_CATEGORIES.find(c => c.id === activeCategory) || FAQ_CATEGORIES[0]

  // Generate FAQPage schema for all questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ALL_FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setOpenIndex(0)
  }

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      return
    }
    setOpenIndex(index)
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      
      {/* FAQPage Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="flex-1 w-full">
        {/* Header Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-8 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full">
            {/* Breadcrumbs */}
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'FAQ', url: '/faq' },
              ]}
              className="w-full justify-center"
            />
            
            {/* Title */}
            <SectionHeader
              title="Frequently asked questions"
              description="Find answers to common questions about Folio, digital identity, security, and more."
              maxWidth="576px"
            />
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 items-center justify-center w-full">
              {FAQ_CATEGORIES.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'secondary' : 'ghost'}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="bg-white flex flex-col gap-6 items-center px-0 pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-start max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            {/* FAQ Accordion */}
            <div className="flex flex-col items-start relative shrink-0 w-full">
              {currentCategory.items.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  title={faq.q}
                  description={faq.a}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>
            
            {/* Total questions indicator */}
            <p className="text-sm text-[#737373] text-center w-full mt-4">
              {ALL_FAQ_ITEMS.length} questions across {FAQ_CATEGORIES.length} categories
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#fafafa] flex flex-col items-center px-0 py-16 md:py-24 relative w-full">
          <div className="flex flex-col gap-6 items-center max-w-[672px] px-6 w-full text-center">
            <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a]">
              Still have questions?
            </h2>
            <p className="font-normal leading-6 text-[#737373] text-base">
              Can&apos;t find what you&apos;re looking for? Reach out to our team and we&apos;ll get back to you.
            </p>
            <Button
              variant="primary"
              href="mailto:contact@folio.id"
            >
              Contact us
            </Button>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  )
}

export default memo(FaqPage)
