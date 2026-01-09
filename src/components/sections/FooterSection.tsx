import { useTranslation } from 'react-i18next'
import FooterLink from '../ui/FooterLink'
import SocialIcon from '../ui/SocialIcon'
import { Logo, LanguageSwitcher } from '../ui'

export default function FooterSection() {
  const { t } = useTranslation('common')

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
              <p className="font-normal text-[#737373]">{t('footer.address')}</p>
              <p className="font-normal text-[#0a0a0a]">
                {t('footer.addressValue')}
              </p>
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-1 items-start leading-5 text-sm w-full">
              <p className="font-normal text-[#737373]">{t('footer.contact')}</p>
              <FooterLink href="mailto:contact@folio.id">contact@folio.id</FooterLink>
            </div>
          </div>

          {/* Column 2: Folio + Features */}
          <div className="flex flex-col gap-10 items-start min-w-[200px] flex-1">
            {/* Folio section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                {t('footer.folio')}
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink to="/wallet">{t('footer.folioApp')}</FooterLink>
                <FooterLink to="/blog">{t('footer.blog')}</FooterLink>
                <FooterLink to="/government">{t('footer.government')}</FooterLink>
                <FooterLink to="/about">{t('footer.about')}</FooterLink>
              </div>
            </div>
            {/* Features section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                {t('footer.features')}
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink to="/id-wallet-app">{t('footer.idWallet')}</FooterLink>
                <FooterLink to="/card-scanner-app">{t('footer.cardScanner')}</FooterLink>
                <FooterLink to="/loyalty-card-app">{t('footer.loyaltyCards')}</FooterLink>
                <FooterLink to="/gift-card-app">{t('footer.giftCards')}</FooterLink>
                <FooterLink to="/trip-planner-app">{t('footer.tripPlanner')}</FooterLink>
              </div>
            </div>
          </div>

          {/* Column 3: Platform */}
          <div className="flex flex-col gap-4 items-start min-w-[200px] flex-1">
            <p className="font-normal leading-5 text-[#737373] text-sm w-full">
              {t('footer.platform')}
            </p>
            <div className="flex flex-col gap-3 items-start w-full">
              <FooterLink to="/platform/id-verification">{t('footer.idVerification')}</FooterLink>
              <FooterLink to="/platform/nfc-identity-scan">{t('footer.nfcIdentityScan')}</FooterLink>
              <FooterLink to="/platform/document-intelligence">{t('footer.documentIntelligence')}</FooterLink>
              <FooterLink to="/platform/face-match">{t('footer.faceMatch')}</FooterLink>
              <FooterLink to="/platform/liveness-check">{t('footer.livenessCheck')}</FooterLink>
              <FooterLink to="/platform/data-source-checks">{t('footer.dataSourceChecks')}</FooterLink>
              <FooterLink to="/platform/phone-and-email-validation">{t('footer.phoneAndEmailValidation')}</FooterLink>
              <FooterLink to="/platform/behavior-insights">{t('footer.behaviorInsights')}</FooterLink>
              <FooterLink to="/platform/dynamic-flow">{t('footer.dynamicFlow')}</FooterLink>
              <FooterLink to="/platform/review-workspace">{t('footer.reviewWorkspace')}</FooterLink>
              <FooterLink to="/platform/credential-issuance">{t('footer.credentialIssuance')}</FooterLink>
            </div>
          </div>

          {/* Column 4: Solutions + Terms & Policies + Get the app */}
          <div className="flex flex-col gap-10 items-start min-w-[200px] flex-1">
            {/* Solutions section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                {t('footer.solutions')}
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink to="/solutions/client-onboarding">{t('footer.clientOnboarding')}</FooterLink>
                <FooterLink to="/solutions/age-compliance">{t('footer.ageCompliance')}</FooterLink>
                <FooterLink to="/solutions/digital-ticketing">{t('footer.digitalTicketing')}</FooterLink>
              </div>
            </div>
            {/* Terms & Policies section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                {t('footer.termsAndPolicies')}
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink to="/terms">{t('footer.termsOfUse')}</FooterLink>
                <FooterLink to="/privacy">{t('footer.privacyPolicy')}</FooterLink>
                <FooterLink to="/security">{t('footer.security')}</FooterLink>
              </div>
            </div>
            {/* Get the app section */}
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-normal leading-5 text-[#737373] text-sm w-full">
                {t('footer.getTheApp')}
              </p>
              <div className="flex flex-col gap-3 items-start w-full">
                <FooterLink
                  href="https://apps.apple.com/app/folio-digital-wallet-app/id1266382717"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.downloadIOS')}
                </FooterLink>
                <FooterLink
                  href="https://play.google.com/store/apps/details?id=com.folioltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.downloadAndroid')}
                </FooterLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className="w-full h-px bg-[#e5e5e5]" />

        {/* Bottom section: Social icons (left), Copyright (center), Language (right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-6 py-6 w-full items-center">
          {/* Social icons - left on desktop, centered on mobile */}
          <div className="flex gap-4 items-center justify-center md:justify-start order-2 md:order-1">
            <SocialIcon name="instagram" href="https://www.instagram.com/foliowalletapp" />
            <SocialIcon name="facebook" href="https://www.facebook.com/foliowalletapp" />
            <SocialIcon name="linkedin" href="https://www.linkedin.com/company/folioltd/" />
          </div>

          {/* Copyright - center */}
          <p className="font-normal leading-5 text-[#737373] text-sm text-center order-3 md:order-2">
            {t('footer.copyright')}
          </p>

          {/* Language switcher - right on desktop, centered on mobile */}
          <div className="flex justify-center md:justify-end order-1 md:order-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  )
}
