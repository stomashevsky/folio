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
        q: 'What is Folio?',
        a: 'Folio is a digital identity wallet that securely stores your passports, IDs, tickets, and cards in one place. It uses end-to-end encryption and zero-knowledge architecture to protect your data. Available free on iOS and Android.',
      },
      {
        q: 'What types of documents can I store in Folio?',
        a: 'You can store passports, ID cards, driver\'s licenses, residence permits, travel tickets (flights, trains, hotels, events), payment cards, gift cards, loyalty cards, medical cards, insurance cards, and any other personal documents.',
      },
      {
        q: 'How do I add documents to Folio?',
        a: 'You can add documents by: scanning with your camera, uploading photos from your library, importing PDFs, or forwarding booking confirmation emails to docs@folio.id. Folio automatically extracts key details from each document.',
      },
      {
        q: 'Is Folio free to use?',
        a: 'Yes. Folio is completely free with unlimited document storage, travel timeline, expiry alerts, and all core features. There are no hidden fees or premium tiers.',
      },
      {
        q: 'What platforms is Folio available on?',
        a: 'Folio is available on iOS (iPhone and iPad) and Android devices. You can download it from the App Store or Google Play Store.',
      },
      {
        q: 'Can I access my documents offline?',
        a: 'Yes. All your documents are stored locally on your device and available without an internet connection. Cloud sync keeps everything updated when you reconnect.',
      },
      {
        q: 'Can I share documents with family members?',
        a: 'Yes. Folio allows you to create shared folders to safely share travel plans, tickets, or IDs with family and friends. Everyone with access sees the latest versions automatically.',
      },
      {
        q: 'Does Folio send expiry reminders?',
        a: 'Yes. Folio sends gentle reminders before your passport, ID, or any other document expires so you\'re never caught off guard. You can customize notification timing in settings.',
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
