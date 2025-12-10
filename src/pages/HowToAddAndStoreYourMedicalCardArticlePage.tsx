import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function HowToAddAndStoreYourMedicalCardArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: 'How to add and store your medical card and health insurance in digital wallet | Folio Blog',
    description: "Learn how to store your medical card and health insurance in a digital wallet. Discover the benefits, security features, and how to manage family members' health documents.",
    ogTitle: 'How to add and store your medical card and health insurance in digital wallet',
    ogDescription: "Learn how to store your medical card and health insurance in a digital wallet. Discover the benefits, security features, and how to manage family members' health documents.",
    ogUrl: 'https://folio.id/blog/how-to-add-and-store-your-medical-card'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="bg-white border-[#e5e5e5] border-b border-l-0 border-r-0 border-solid border-t-0 flex flex-col gap-6 items-center px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start justify-center px-6 md:px-6 py-0 relative shrink-0 w-full max-w-[768px]">
            {/* Meta information and Title */}
            <div className="flex flex-col gap-4 md:gap-5 items-start relative shrink-0 w-full">
              {/* Meta information */}
              <div className="flex flex-wrap gap-4 items-start justify-center leading-5 relative shrink-0 text-sm w-full">
                <p className="relative shrink-0 text-[#0a0a0a]">Sep 9, 2024</p>
                <Link 
                  to="/blog?category=Product" 
                  className="relative shrink-0 text-[#737373] hover:text-[#0a0a0a] hover:underline transition-colors cursor-pointer"
                >
                  Product
                </Link>
              </div>

              {/* Title and subtitle */}
              <div className="flex flex-col gap-4 md:gap-6 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
                <h1 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] min-w-full relative shrink-0 w-[min-content]">
                  How to add and store your medical card and health insurance in digital wallet
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Learn how to store your medical card and health insurance in a digital wallet. Discover the benefits, security features, and how to manage family members' health documents.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Storing your medical card and health insurance in a digital wallet provides unparalleled convenience and security. Whether you're seeking to access your insurance details on the go or to have emergency information readily available, these apps simplify the process. Digital wallets allow you to store health insurance cards on your iPhone or other mobile devices, ensuring easy access during emergencies. With Folio, your insurance card is not just a photo in your gallery: it's a secure, organized document that can be quickly retrieved and used. Moreover, Folio's automatic text extraction feature allows you to copy and paste important information, making form filling and sharing with healthcare providers seamless.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio supports a wide range of documents, allowing you to upload your medical card, health insurance details, and more. You can add both digital versions of these documents from other apps or scan physical cards directly with Folio. If you already have images stored in your photo gallery, they can be manually uploaded as well, making it easy to store all your health-related documents in one secure place.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                How to add your medical card to Folio
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Adding your medical card to Folio is straightforward. Start by downloading Folio from the app store and creating your account. Navigate to the appropriate category in Folio, where you can store your health insurance card on your iPhone securely. Use Folio's document scanner to capture an image of your physical medical card, or upload an existing image from your photo gallery. After scanning, Folio extracts text from the document automatically, allowing you to copy and paste the information as needed. Save the document under the correct category and assign labels for easy organization and quick access. This process ensures that your medical information is always within reach when you need it most.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Managing family members' medical documents
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio makes it easy to manage and organize multiple documents, including those of your family members. You can create categories and labels for each family member's medical card and health insurance details, ensuring that all essential information is stored securely and accessed easily when needed. This feature is particularly useful for parents managing their children's health documents or caregivers organizing medical information for elderly family members. With proper categorization, you can quickly find the right document for the right person without confusion.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Security and organization features
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio uses end-to-end encryption to protect your documents, ensuring that only you can view your medical card and insurance information. This high level of security makes Folio a trusted option for storing sensitive health data. With Folio, your insurance card and other important documents are safe from unauthorized access. The encryption technology ensures that your personal health information remains private and secure, giving you peace of mind when storing sensitive medical details.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio is not just for everyday health insurance: it's also perfect for storing your travel health insurance details. By digitizing your travel insurance card and other related documents, you ensure that even when you're abroad, your essential health information is just a tap away. This can be particularly useful in emergencies, where quick access to your insurance details is crucial. Having your travel insurance information readily available can make a significant difference when dealing with medical situations in foreign countries.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio is a versatile digital wallet that allows you to organize a wide range of documents beyond your medical card and health insurance. Consider storing your Driver's License, Passport, ID, Resident Permit, Payment Cards, Gift Cards, Loyalty Cards, Membership Cards, Birth Certificate, Marriage Certificate, SIM Card, and Passwords. This comprehensive approach to document management reduces clutter and ensures that all your important information is secure and easily accessible. By centralizing all your documents in one secure location, you eliminate the need to carry physical copies and reduce the risk of losing important papers.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio provides a secure, convenient, and organized way to store your medical card, health insurance, and other essential documents. By using Folio, you not only add your medical card to a wallet but also gain peace of mind knowing that your information is protected and accessible whenever you need it. Whether for everyday use or during travel, Folio makes managing your health and insurance information easier than ever. <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Start using Folio today</a> to digitize and secure your health documents, ensuring they are always within reach.
              </p>
            </div>

            {/* Back to blog button */}
            <div className="pt-8">
              <Button
                variant="secondary"
                onClick={() => navigate('/blog', { state: { restoreScroll: true } })}
                iconPosition="left"
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M7.99967 12.6666L3.33301 7.99992M3.33301 7.99992L7.99967 3.33325M3.33301 7.99992H12.6663" stroke="#171717" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              >
                Back to Blog
              </Button>
            </div>
          </div>

        </section>
        <KeepReadingSection currentArticleSlug="how-to-add-and-store-your-medical-card" />
      </main>
      <FooterSection />
    </div>
  )
}
