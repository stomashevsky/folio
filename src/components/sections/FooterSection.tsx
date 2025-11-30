import { Logo } from '../ui'
import FooterLink from '../ui/FooterLink'
import SocialIcon from '../ui/SocialIcon'

export default function FooterSection() {
  return (
    <div className="bg-white flex flex-col gap-8 items-center relative shrink-0 w-full">
      <div className="flex flex-col items-center max-w-[1280px] relative shrink-0 w-full">
        {/* Top separator */}
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none scale-y-[-100%] w-full">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px] border-t border-[#e5e5e5]"></div>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="box-border flex flex-col md:flex-row gap-12 md:gap-6 items-center md:items-start px-6 py-10 relative shrink-0 w-full">
          {/* Left column: Logo and contact info */}
          <div className="box-border flex flex-col gap-6 items-center md:items-start min-h-px min-w-[280px] md:min-w-[376px] pr-0 md:pr-12 py-0 relative shrink-0 w-full md:flex-[1_0_0] md:w-auto">
            <Logo size={28} />
            <div className="flex flex-col font-normal gap-1 items-center md:items-start justify-center leading-5 relative shrink-0 text-sm w-full whitespace-pre-wrap text-center md:text-left">
              <p className="font-normal relative shrink-0 text-[#737373] w-full">Address:</p>
              <p className="font-normal relative shrink-0 text-[#0a0a0a] w-full">
                88 Baker St, London W1U 6TQ, United Kingdom
              </p>
            </div>
            <div className="flex flex-col font-normal gap-1 items-center md:items-start justify-center leading-5 relative shrink-0 text-sm w-full whitespace-pre-wrap text-center md:text-left">
              <p className="font-normal relative shrink-0 text-[#737373] w-full">Contact:</p>
              <FooterLink href="mailto:contact@folio.id">
                contact@folio.id
              </FooterLink>
            </div>
          </div>

          {/* Folio Wallet column */}
          <div className="flex flex-col gap-4 items-center md:items-start justify-center min-h-px min-w-px relative shrink-0 w-full md:flex-[1_0_0] md:w-auto">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm whitespace-pre-wrap text-center md:text-left">
              Folio Wallet
            </p>
            <div className="flex flex-col gap-3 items-center md:items-start relative shrink-0">
              <FooterLink to="/">Personal Use</FooterLink>
              <FooterLink to="/business">Business</FooterLink>
              <FooterLink to="/government">Government</FooterLink>
              <FooterLink to="/identity-lab">Identity Lab</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </div>
          </div>

          {/* Get the app column */}
          <div className="flex flex-col gap-4 items-center md:items-start justify-center min-h-px min-w-px relative shrink-0 w-full md:flex-[1_0_0] md:w-auto">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm whitespace-pre-wrap text-center md:text-left">
              Get the app
            </p>
            <div className="flex flex-col gap-3 items-center md:items-start relative shrink-0">
              <FooterLink
                href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for iOS
              </FooterLink>
              <FooterLink
                href="https://play.google.com/store/apps/details?id=com.folioltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for Android
              </FooterLink>
            </div>
          </div>

          {/* Terms & Policies column */}
          <div className="flex flex-col gap-4 items-center md:items-start justify-center min-h-px min-w-px relative shrink-0 w-full md:flex-[1_0_0] md:w-auto">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm whitespace-pre-wrap text-center md:text-left">
              Terms & Policies
            </p>
            <div className="flex flex-col gap-3 items-center md:items-start relative shrink-0">
              <FooterLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // TODO: Add actual Terms of Use page URL
                  console.log('Terms of Use clicked')
                }}
              >
                Terms of Use
              </FooterLink>
              <FooterLink
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // TODO: Add actual Privacy Policy page URL
                  console.log('Privacy Policy clicked')
                }}
              >
                Privacy Policy
              </FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px] border-t border-[#e5e5e5]"></div>
        </div>

        {/* Bottom section: Copyright and social icons */}
        <div className="box-border flex flex-col md:flex-row items-center justify-between gap-6 p-6 relative shrink-0 w-full">
          <p className="font-normal leading-5 relative shrink-0 text-[#0a0a0a] text-sm text-center md:text-left">
            Folio Wallet © 2025
          </p>
          <div className="flex gap-4 items-center relative shrink-0">
            <SocialIcon name="instagram" href="https://instagram.com" />
            <SocialIcon name="facebook" href="https://facebook.com" />
            <SocialIcon name="linkedin" href="https://linkedin.com" />
            <SocialIcon name="x" href="https://x.com" />
          </div>
        </div>
      </div>
    </div>
  )
}

