import FooterLink from '../ui/FooterLink'
import SocialIcon from '../ui/SocialIcon'
import { Logo } from '../ui'

export default function FooterSection() {
  return (
    <footer className="bg-white flex flex-col items-center relative shrink-0 w-full">
      {/* Top separator - edge to edge */}
      <div className="w-full h-px bg-[#e5e5e5]" />
      
      <div className="flex flex-col items-center max-w-[1280px] relative shrink-0 w-full">

        {/* Main content grid */}
        <div className="flex flex-wrap gap-x-6 gap-y-12 items-start px-6 py-10 w-full">
          {/* Column 1: Logo, Address, Contact */}
          <div className="flex flex-col gap-4 items-start min-w-[200px] flex-1">
            <Logo size={28} />
            {/* Address */}
            <div className="flex flex-col gap-1 items-start leading-5 text-sm w-full">
              <p className="font-normal text-[#737373]">Address:</p>
              <p className="font-normal text-[#0a0a0a]">
                88 Baker St, London W1U 6TQ, United Kingdom
              </p>
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-1 items-start leading-5 text-sm w-full">
              <p className="font-normal text-[#737373]">Contact:</p>
              <FooterLink href="mailto:contact@folio.id">contact@folio.id</FooterLink>
            </div>
          </div>

          {/* Column 2: Folio + Features + Get the app */}
          <div className="flex flex-col gap-10 items-start min-w-[200px] flex-1">
            {/* Folio section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                Folio
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink to="/wallet">Folio app</FooterLink>
                <FooterLink to="/blog">Blog</FooterLink>
                <FooterLink to="/government">Government</FooterLink>
                <FooterLink to="/about">About</FooterLink>
              </div>
            </div>
            {/* Features section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                Features
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink to="/id-wallet-app">ID wallet</FooterLink>
                <FooterLink to="/card-scanner-app">Card scanner</FooterLink>
                <FooterLink to="/loyalty-card-app">Loyalty cards</FooterLink>
              </div>
            </div>
            {/* Get the app section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                Get the app
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
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
          </div>

          {/* Column 3: Platform */}
          <div className="flex flex-col gap-4 items-start min-w-[200px] flex-1">
            <p className="font-normal leading-5 text-[#737373] text-sm w-full">
              Platform
            </p>
            <div className="flex flex-col gap-3 items-start w-full">
              <FooterLink to="/platform/id-verification">ID verification</FooterLink>
              <FooterLink to="/platform/document-intelligence">Document intelligence</FooterLink>
              <FooterLink to="/platform/liveness-check">Liveness check</FooterLink>
              <FooterLink to="/platform/face-match">Face match</FooterLink>
              <FooterLink to="/platform/data-source-checks">Data source checks</FooterLink>
              <FooterLink to="/platform/phone-and-email-validation">Phone and email validation</FooterLink>
              <FooterLink to="/platform/nfc-identity-scan">NFC identity scan</FooterLink>
              <FooterLink to="/platform/dynamic-flow">Dynamic flow</FooterLink>
              <FooterLink to="/platform/behavior-insights">Behavior insights</FooterLink>
              <FooterLink to="/platform/review-workspace">Review workspace</FooterLink>
            </div>
          </div>

          {/* Column 4: Solutions + Terms & Policies */}
          <div className="flex flex-col gap-10 items-start min-w-[200px] flex-1">
            {/* Solutions section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                Solutions
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink to="/solutions/age-compliance">Age compliance</FooterLink>
                <FooterLink to="/solutions/client-onboarding">Client onboarding</FooterLink>
                <FooterLink to="/solutions/digital-ticketing">Digital ticketing</FooterLink>
              </div>
            </div>
            {/* Terms & Policies section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                Terms & Policies
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink to="/terms">Terms of Use</FooterLink>
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
                <FooterLink to="/security">Security</FooterLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="w-full h-px bg-[#e5e5e5]" />

        {/* Bottom section: Copyright and Social icons */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6 px-6 py-6 w-full">
          {/* Copyright */}
          <p className="font-normal leading-5 text-[#0a0a0a] text-sm">
            Folio Wallet © 2025
          </p>
          {/* Social icons */}
          <div className="flex gap-4 items-center">
            <SocialIcon name="instagram" href="https://www.instagram.com/foliowalletapp" />
            <SocialIcon name="facebook" href="https://www.facebook.com/foliowalletapp" />
            <SocialIcon name="linkedin" href="https://www.linkedin.com/company/folioltd/" />
          </div>
        </div>
      </div>
    </footer>
  )
}
