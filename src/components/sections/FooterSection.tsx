import FooterLink from '../ui/FooterLink'
import SocialIcon from '../ui/SocialIcon'
import { Logo } from '../ui'

export default function FooterSection() {
  return (
    <div className="bg-white flex flex-col items-center relative shrink-0 w-full">
      <div className="flex flex-col items-center max-w-[1280px] relative shrink-0 w-full">
        {/* Top separator */}
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none scale-y-[-100%] w-full">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px] border-t border-[#e5e5e5]"></div>
            </div>
          </div>
        </div>

        {/* Main content grid - responsive flex-wrap, columns adjust based on screen width */}
        <div className="box-border flex flex-wrap gap-x-6 gap-y-12 items-start px-6 py-10 relative shrink-0 w-full">
          {/* Folio Wallet column */}
          <div className="flex flex-col gap-4 items-start justify-center min-w-[200px] flex-1 relative shrink-0">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full">
              Folio Wallet
            </p>
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FooterLink to="/">Folio app</FooterLink>
              <FooterLink to="/government">Government</FooterLink>
              <FooterLink to="/government/playground">Playground</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </div>
          </div>

          {/* Platform column */}
          <div className="flex flex-col gap-4 items-start justify-center min-w-[200px] flex-1 relative shrink-0">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full">
              Platform
            </p>
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FooterLink to="/platform/id-verification">ID Verification</FooterLink>
              <FooterLink to="/platform/document-intelligence">Document Intelligence</FooterLink>
              <FooterLink to="/platform/liveness-check">Liveness Check</FooterLink>
              <FooterLink to="/platform/face-match">Face Match</FooterLink>
              <FooterLink to="/platform/data-source-checks">Data Source Checks</FooterLink>
              <FooterLink to="/platform/phone-and-email-validation">Phone and Email Validation</FooterLink>
              <FooterLink to="/platform/nfc-identity-scan">NFC Identity Scan</FooterLink>
              <FooterLink to="/platform/dynamic-flow">Dynamic Flow</FooterLink>
            </div>
          </div>

          {/* Solutions column */}
          <div className="flex flex-col gap-4 items-start justify-center min-w-[200px] flex-1 relative shrink-0">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full">
              Solutions
            </p>
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FooterLink to="/solutions/age-compliance">Age Compliance</FooterLink>
              <FooterLink to="/solutions/digital-ticketing">Digital Ticketing</FooterLink>
            </div>
          </div>

          {/* Get the app column */}
          <div className="flex flex-col gap-4 items-start justify-center min-w-[200px] flex-1 relative shrink-0">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full">
              Get the app
            </p>
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
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
          <div className="flex flex-col gap-4 items-start justify-center min-w-[200px] flex-1 relative shrink-0">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full">
              Terms & Policies
            </p>
            <div className="flex flex-col gap-3 items-start relative shrink-0 w-full">
              <FooterLink href="#">Terms of Use</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px] border-t border-[#e5e5e5]"></div>
        </div>

        {/* Bottom section: Logo, Address, Contact, Social icons, Copyright */}
        <div className="box-border flex flex-wrap gap-6 items-center justify-between p-6 relative shrink-0 w-full">
          {/* Left side: Logo, Address, Contact */}
          <div className="flex flex-wrap gap-6 items-start min-w-[240px] flex-1">
            {/* Logo */}
            <Logo size={28} />

            {/* Address */}
            <div className="flex flex-col gap-1 items-start justify-center leading-5 text-sm flex-1 min-w-[200px]">
              <p className="font-normal text-[#737373] w-full">Address:</p>
              <p className="font-normal text-[#0a0a0a] w-full">
                88 Baker St, London W1U 6TQ, United Kingdom
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1 items-start justify-center leading-5 text-sm flex-1 min-w-[150px]">
              <p className="font-normal text-[#737373] w-full">Contact:</p>
              <FooterLink href="mailto:contact@folio.id">contact@folio.id</FooterLink>
            </div>
          </div>

          {/* Right side: Social icons and Copyright - column layout */}
          <div className="flex flex-col gap-4 items-end">
            {/* Social icons */}
            <div className="flex gap-4 items-center">
              <SocialIcon name="instagram" href="https://www.instagram.com/foliowalletapp" />
              <SocialIcon name="facebook" href="https://www.facebook.com/foliowalletapp" />
              <SocialIcon name="linkedin" href="https://www.linkedin.com/company/folioltd/" />
            </div>
            {/* Copyright */}
            <p className="font-normal leading-5 text-[#0a0a0a] text-sm text-nowrap">
              Folio Wallet © 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
