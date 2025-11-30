import { useState } from 'react'
import AccordionItem from '../ui/AccordionItem'

export interface FAQItem {
  q: string
  a: string
}

interface FAQSectionProps {
  faqData?: FAQItem[]
  title?: string
  description?: string
  defaultOpenIndex?: number | null
}

const DEFAULT_IDENTITY_LAB_FAQ: FAQItem[] = [
  {
    q: 'What is Identity Lab?',
    a: 'Identity Lab is a sandbox that lets you try EUDI compatible issuance and verification flows without real user data.',
  },
  {
    q: 'Are these real documents?',
    a: 'No. All documents here are demo samples for testing only. They have no legal effect and cannot be used in production.',
  },
  {
    q: 'Do I need a real EUDI Wallet?',
    a: 'You need Folio Wallet on your phone to scan QR codes and see the documents in action. You do not need an officially certified national wallet to use this sandbox.',
  },
  {
    q: 'Which standards does Identity Lab follow?',
    a: 'Flows are based on the European Digital Identity Wallet Architecture and Reference Framework and use OpenID for Verifiable Credential Issuance and Verifiable Presentations under the hood.',
  },
  {
    q: 'Why do I start with Digital Identity?',
    a: 'Digital Identity is the core document that other credentials can rely on. By issuing it once, you can reuse it in many verification scenarios.',
  },
  {
    q: 'Can I test verification without another device?',
    a: 'Yes. You can open Folio Wallet and Identity Lab on the same device or on two devices. QR codes work in both same device and cross device scenarios.',
  },
]

export default function FAQSection({ 
  faqData = DEFAULT_IDENTITY_LAB_FAQ,
  title = 'Frequently asked questions',
  description,
  defaultOpenIndex = 0,
}: FAQSectionProps) {
  const [isFaqOpen, setIsFaqOpen] = useState<number | null>(defaultOpenIndex)

  const toggleFaq = (index: number) => {
    setIsFaqOpen(isFaqOpen === index ? null : index)
  }

  return (
    <div className="bg-white box-border flex flex-col gap-6 items-center px-0 py-16 md:py-24 relative shrink-0 w-full">
      <div className="box-border flex flex-col gap-10 md:gap-16 items-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-10 md:gap-16 items-start relative shrink-0 w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-4 md:gap-5 items-center relative shrink-0 w-full">
            <p className="font-bold leading-[36px] md:leading-[40px] min-w-full relative shrink-0 text-[#0a0a0a] text-[30px] md:text-[36px] text-center tracking-[0px] w-[min-content] whitespace-pre-wrap">
              {title}
            </p>
            {description && (
              <p className="font-normal leading-6 min-w-full relative shrink-0 text-[#737373] text-base text-center w-[min-content] whitespace-pre-wrap">
                {description}
              </p>
            )}
          </div>
          
          {/* Accordion */}
          <div className="flex flex-col items-start relative shrink-0 w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                title={faq.q}
                description={faq.a}
                isOpen={isFaqOpen === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
          
          {/* Contact Card - Hidden */}
          {/* <div
            className="flex flex-col gap-6 items-center p-6 md:p-8 relative rounded-xl shrink-0 w-full"
            style={BACKGROUND_STYLE}
          >
            <div className="flex flex-col gap-2 items-start relative shrink-0 text-center w-full whitespace-pre-wrap">
              <p className="font-bold leading-[28px] md:leading-[32px] relative shrink-0 text-[#0a0a0a] text-xl md:text-2xl w-full">
                Still have questions?
              </p>
              <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                Share your use case and we will get back to you.
              </p>
            </div>
            <Button
              variant="primary"
              fullWidth
              className="md:w-auto"
              onClick={() => {
                window.location.href = 'mailto:contact@folio.id'
              }}
            >
              Contact us
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

