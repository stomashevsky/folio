import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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

export default function FAQSection({ 
  faqData,
  title,
  description,
  defaultOpenIndex,
}: FAQSectionProps) {
  const { t } = useTranslation('government')
  
  // Get FAQ items from translations if not provided
  const faqItems = faqData || (t('playground.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>).map(item => ({
    q: item.question,
    a: item.answer,
  }))
  
  const faqTitle = title || t('playground.faq.title')
  const [isFaqOpen, setIsFaqOpen] = useState<number | null>(
    defaultOpenIndex !== undefined && defaultOpenIndex !== null ? defaultOpenIndex : 0
  )

  const toggleFaq = (index: number) => {
    // If clicking on an already open section, do nothing
    if (isFaqOpen === index) {
      return
    }

    // If clicking on a closed section, open it (this will automatically close the previous open one)
    setIsFaqOpen(index)
  }

  // Generate FAQPage schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <div className="bg-white box-border flex flex-col gap-6 items-center px-0 py-16 md:py-24 relative shrink-0 w-full">
      {/* FAQPage Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="box-border flex flex-col gap-10 md:gap-16 items-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-4 md:gap-5 items-center relative shrink-0 w-full">
            <p className="font-bold leading-[36px] md:leading-[40px] min-w-full relative shrink-0 text-[#0a0a0a] text-[30px] md:text-[36px] text-center tracking-[0px] w-[min-content]">
              {faqTitle}
            </p>
            {description && (
              <p className="font-normal leading-6 min-w-full relative shrink-0 text-[#737373] text-base text-center w-[min-content]">
                {description}
              </p>
            )}
          </div>
          
          {/* Accordion */}
          <div className="flex flex-col items-start relative shrink-0 w-full">
            {faqItems.map((faq, index) => (
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

