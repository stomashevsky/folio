import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui'
import { scrollToTop } from '../utils/scrollToTop'
import blogAlbanianDiaspora from '../assets/images/blog-albanian-diaspora-voter-registration.png'

export default function AlbanianDiasporaArticlePage() {
  const navigate = useNavigate()
  
  usePageTitle({
    title: 'Albanian Diaspora Voter Registration Surges 525% With Folio Wallet | Folio Blog',
    description: 'Albania successfully enfranchised its diaspora to register to vote using a secure digital wallet solution, with over 245,000 Albanians abroad approved to vote.',
    ogTitle: 'Albanian Diaspora Voter Registration Surges 525% With Folio Wallet',
    ogDescription: 'Albania successfully enfranchised its diaspora to register to vote using a secure digital wallet solution, with over 245,000 Albanians abroad approved to vote.',
    ogUrl: 'https://folio.id/blog/albanian-diaspora-voter-registration'
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
                <p className="relative shrink-0 text-[#0a0a0a]">Mar 28, 2025</p>
                <p className="relative shrink-0 text-[#737373]">Company</p>
              </div>

              {/* Title and subtitle */}
              <div className="flex flex-col gap-4 md:gap-6 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
              <h1 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] min-w-full relative shrink-0 w-[min-content]">
                Albanian diaspora voter registration surges 525% with Folio Wallet
              </h1>
              <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                In a historic milestone for digital democracy, Albania has successfully enfranchised its diaspora to register to vote using a secure digital wallet solution, with over 245,000 Albanians abroad approved to vote in the upcoming May 11 parliamentary elections.
              </p>
            </div>
            </div>

            {/* Hero image */}
            <div className="w-full">
              <img 
                src={blogAlbanianDiaspora} 
                alt="Albanian diaspora voter registration with Folio Wallet" 
                className="w-full rounded-xl aspect-[240/150] object-cover"
              />
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                The initiative, led by the <strong>Central Election Commission (CEC)</strong> in partnership with <strong>Folio Technologies</strong>, exceeded its original registration target of 100,000 by over 300%, representing a <strong>525% increase</strong> compared to estimated previous diaspora participation in the last election.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                "This is a historic moment for elections in Albania, as for the first time, our fellow citizens residing outside the Republic of Albania will have the opportunity to vote from where they live," said <strong>Ilirjan Celibashi</strong>, State Election Commissioner. "Working with Folio has been a transformative experience. Their innovative approach and unwavering commitment didn't just help us exceed our goals for voter registration, they set a new standard of excellence for how digital identity solutions should be delivered in Albania and worldwide."
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Enabling a borderless democracy
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Albania is home to an estimated 1.6 million diaspora citizens, many of whom face practical and financial barriers to participating in elections. In anticipation of the 2025 national election, the CEC selected Folio Technologies through a public tender to develop and deliver a secure, accessible, and transparent remote registration system.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                The solution leveraged the <strong>Folio Remote Registration Platform and Digital Wallet</strong> to provide a seamless voter registration experience via mobile and web channels, offering identity verification, address validation, and a digital voter card to track registration status.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Highlights of the Initiative:
              </p>

              <ul className="block font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full space-y-2 pl-6 list-disc">
                <li><strong>Total Profiles Created</strong>: 365,166</li>
                <li><strong>Applications Submitted</strong>: 294,155</li>
                <li><strong>Registrations Approved</strong>: 245,975</li>
                <li><strong>Primary Registration Channels</strong>:
                  <ul className="ml-6 mt-2 space-y-1 list-disc">
                    <li>Mobile App: 49%</li>
                    <li>Mobile Web: 46%</li>
                    <li>Desktop: 5%</li>
                  </ul>
                </li>
              </ul>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Key features and solutions
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Frictionless User Experience:</strong> The Folio platform enabled citizens to complete their registration securely and easily across devices, with biometric verification and real-time application updates.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Omnichannel Accessibility:</strong> The system supported mobile and desktop use, with most users choosing Folio wallet, in which an official registration card provided users with the live status of their application.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>High-Trust Identity Verification:</strong> Folio incorporated facial recognition, liveness detection, government document matching, and AI-powered document processing to ensure legitimacy.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Data Protection by Design:</strong> Using advanced edge-based encryption, all personal data remained within government-controlled infrastructure, safeguarding citizen privacy.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Voices from the diaspora
              </h2>

              <div className="border-l-2 border-[#e5e5e5] pl-6 pr-0 py-0 relative shrink-0 w-full">
                <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap italic">
                  "The online platform made it easy for me to register to vote without traveling back to Albania. It was straightforward and secure," said one registrant living in Italy.
                </p>
              </div>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                <strong>Jona Josifi</strong>, CEC Project Lead, added: "Folio's expertise was critical in developing a secure and user-friendly platform that met our stringent requirements."
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                A model for global digital democracy
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                With the success of Albania's diaspora registration, Folio has not only delivered a robust technical platform but also created a new benchmark for international digital enfranchisement. This initiative demonstrates how governments can effectively engage global citizens through secure, mobile-first technology.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                About Folio Technologies
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Folio is a next-generation digital identity and credential platform enabling secure, user-controlled identity services across public and private sectors. <a href="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio's digital wallet app is rated 4.6 stars on Google Play and 4.8 stars on the App Store</a> and is used in over 120 countries worldwide.
              </p>
            </div>

            {/* Back to blog button */}
            <div className="pt-8">
              <Button
                variant="secondary"
                onClick={() => {
                  navigate('/blog')
                  setTimeout(() => scrollToTop(), 100)
                }}
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
        <KeepReadingSection currentArticleSlug="albanian-diaspora-voter-registration" />
      </main>
      <FooterSection />
    </div>
  )
}

