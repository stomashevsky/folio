import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import ScrollToTop from './components/ScrollToTop'
import { LanguageRedirect, LanguageProvider } from './i18n/LanguageProvider'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './i18n'
import CookieConsent from './components/CookieConsent'
import LanguageSuggestionBanner, { BannerSpacer } from './components/LanguageSuggestionBanner'
import { LanguageBannerProvider } from './contexts/LanguageBannerContext'

// Eager load HomePage for fast initial render (LCP)
import HomePage from './pages/HomePage'

// Lazy load all other pages for code splitting
const WalletPage = lazy(() => import('./pages/WalletPage'))
const PlaygroundPage = lazy(() => import('./pages/PlaygroundPage'))
const DigitalTicketingPage = lazy(() => import('./pages/DigitalTicketingPage'))
const AgeCompliancePage = lazy(() => import('./pages/AgeCompliancePage'))
const ClientOnboardingPage = lazy(() => import('./pages/ClientOnboardingPage'))
const GovernmentPage = lazy(() => import('./pages/GovernmentPage'))
const IdVerificationPage = lazy(() => import('./pages/IdVerificationPage'))
const DocumentIntelligencePage = lazy(() => import('./pages/DocumentIntelligencePage'))
const LivenessCheckPage = lazy(() => import('./pages/LivenessCheckPage'))
const FaceMatchPage = lazy(() => import('./pages/FaceMatchPage'))
const DataSourceChecksPage = lazy(() => import('./pages/DataSourceChecksPage'))
const PhoneAndEmailValidationPage = lazy(() => import('./pages/PhoneAndEmailValidationPage'))
const NfcIdentityScanPage = lazy(() => import('./pages/NfcIdentityScanPage'))
const DynamicFlowPage = lazy(() => import('./pages/DynamicFlowPage'))
const BehaviorInsightsPage = lazy(() => import('./pages/BehaviorInsightsPage'))
const ReviewWorkspacePage = lazy(() => import('./pages/ReviewWorkspacePage'))
const CredentialIssuancePage = lazy(() => import('./pages/CredentialIssuancePage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const AlbanianDiasporaArticlePage = lazy(() => import('./pages/AlbanianDiasporaArticlePage'))
const TripCaseAlternativeArticlePage = lazy(() => import('./pages/TripCaseAlternativeArticlePage'))
const TripItAlternativeArticlePage = lazy(() => import('./pages/TripItAlternativeArticlePage'))
const Pass2UAlternativeArticlePage = lazy(() => import('./pages/Pass2UAlternativeArticlePage'))
const AppInTheAirAlternativeArticlePage = lazy(() => import('./pages/AppInTheAirAlternativeArticlePage'))
const CheckMyTripAlternativeArticlePage = lazy(() => import('./pages/CheckMyTripAlternativeArticlePage'))
const WanderlogAlternativeArticlePage = lazy(() => import('./pages/WanderlogAlternativeArticlePage'))
const BestDocumentScanningAppsArticlePage = lazy(() => import('./pages/BestDocumentScanningAppsArticlePage'))
const BestIdScannerAppArticlePage = lazy(() => import('./pages/BestIdScannerAppArticlePage'))
const TenTravelHacksThatActuallyWorkArticlePage = lazy(() => import('./pages/TenTravelHacksThatActuallyWorkArticlePage'))
const BestAppsToPlanTravelArticlePage = lazy(() => import('./pages/BestAppsToPlanTravelArticlePage'))
const BestEventTicketAppsArticlePage = lazy(() => import('./pages/BestEventTicketAppsArticlePage'))
const FlightTicketsOnIphoneArticlePage = lazy(() => import('./pages/FlightTicketsOnIphoneArticlePage'))
const HowToShareTravelPlansArticlePage = lazy(() => import('./pages/HowToShareTravelPlansArticlePage'))
const YouCanNowStoreTicketsInFolioWalletArticlePage = lazy(() => import('./pages/YouCanNowStoreTicketsInFolioWalletArticlePage'))
const BestGoogleWalletAlternativesArticlePage = lazy(() => import('./pages/BestGoogleWalletAlternativesArticlePage'))
const BestAppleWalletAlternativesArticlePage = lazy(() => import('./pages/BestAppleWalletAlternativesArticlePage'))
const AccessYourDigitalWalletAnywhereArticlePage = lazy(() => import('./pages/AccessYourDigitalWalletAnywhereArticlePage'))
const BestDigitalWalletAppsInCanadaArticlePage = lazy(() => import('./pages/BestDigitalWalletAppsInCanadaArticlePage'))
const DigitalWalletAppsForEveryNeedArticlePage = lazy(() => import('./pages/DigitalWalletAppsForEveryNeedArticlePage'))
const BestGiftCardWalletAppsArticlePage = lazy(() => import('./pages/BestGiftCardWalletAppsArticlePage'))
const RegularVsDigitalWalletsArticlePage = lazy(() => import('./pages/RegularVsDigitalWalletsArticlePage'))
const HowToAddAndStoreYourMedicalCardArticlePage = lazy(() => import('./pages/HowToAddAndStoreYourMedicalCardArticlePage'))
const WhatIsADigitalWalletArticlePage = lazy(() => import('./pages/WhatIsADigitalWalletArticlePage'))
const HowToStoreAndUseLoyaltyCardsOnYourIphoneArticlePage = lazy(() => import('./pages/HowToStoreAndUseLoyaltyCardsOnYourIphoneArticlePage'))
const AppleGiftCardAddToWalletArticlePage = lazy(() => import('./pages/AppleGiftCardAddToWalletArticlePage'))
const WhatIsLivenessDetectionArticlePage = lazy(() => import('./pages/WhatIsLivenessDetectionArticlePage'))
const FaceMatchingTechnologyArticlePage = lazy(() => import('./pages/FaceMatchingTechnologyArticlePage'))
const NfcIdentityVerificationArticlePage = lazy(() => import('./pages/NfcIdentityVerificationArticlePage'))
const DocumentIntelligenceArticlePage = lazy(() => import('./pages/DocumentIntelligenceArticlePage'))
const KycAmlComplianceArticlePage = lazy(() => import('./pages/KycAmlComplianceArticlePage'))
const AgeVerificationRequirementsArticlePage = lazy(() => import('./pages/AgeVerificationRequirementsArticlePage'))
const ClientOnboardingBestPracticesArticlePage = lazy(() => import('./pages/ClientOnboardingBestPracticesArticlePage'))
const OrganizeTicketsBookingsArticlePage = lazy(() => import('./pages/OrganizeTicketsBookingsArticlePage'))
const EudiWalletArticlePage = lazy(() => import('./pages/EudiWalletArticlePage'))
const MobileDriversLicenseArticlePage = lazy(() => import('./pages/MobileDriversLicenseArticlePage'))
const DigitalCredentialsGovernmentArticlePage = lazy(() => import('./pages/DigitalCredentialsGovernmentArticlePage'))
const EndToEndEncryptionArticlePage = lazy(() => import('./pages/EndToEndEncryptionArticlePage'))
const BiometricDataPrivacyArticlePage = lazy(() => import('./pages/BiometricDataPrivacyArticlePage'))
const DigitalPassportCopiesArticlePage = lazy(() => import('./pages/DigitalPassportCopiesArticlePage'))
const ManagingFamilyTravelDocumentsArticlePage = lazy(() => import('./pages/ManagingFamilyTravelDocumentsArticlePage'))
const BestIdentityVerificationPlatformsArticlePage = lazy(() => import('./pages/BestIdentityVerificationPlatformsArticlePage'))
const CompleteGuideIdentityVerificationArticlePage = lazy(() => import('./pages/CompleteGuideIdentityVerificationArticlePage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const SecurityPage = lazy(() => import('./pages/SecurityPage'))
const IdWalletAppPage = lazy(() => import('./pages/IdWalletAppPage'))
const CardScannerAppPage = lazy(() => import('./pages/CardScannerAppPage'))
const LoyaltyCardAppPage = lazy(() => import('./pages/LoyaltyCardAppPage'))
const TripPlannerAppPage = lazy(() => import('./pages/TripPlannerAppPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

// Map of legacy slugs to new paths
const LEGACY_MAPPING: Record<string, string> = {
  // Main
  'about-us': '/about',
  'business': '/solutions/digital-ticketing',
  'for-government': '/government',
  'contact-us': '/about#contact',
  'faq': '/',
  'career': '/about',
  // Products
  'secure-wallet-app': '/wallet',
  'id-wallet-app': '/id-wallet-app',
  'card-scanner-app': '/card-scanner-app',
  'loyalty-card-app': '/loyalty-card-app',
  'gift-card-wallet': '/wallet',
  'passport-wallet-app': '/id-wallet-app',
  'health-wallet-app': '/wallet',
  'event-ticket-scanner': '/solutions/digital-ticketing',
  // Travel
  'travel-wallet-app': '/trip-planner-app',
  'travel-trip-planner': '/trip-planner-app',
  'flight-ticket-travel': '/blog/flight-tickets-on-iphone',
  'train-ticket-travel': '/blog/organize-tickets-bookings',
  'bus-ticket-travel': '/blog/organize-tickets-bookings',
  'hotel-bookings-travel': '/blog/organize-tickets-bookings',
  // Legal
  'folio-terms-conditions': '/terms',
  'privacy-policy': '/privacy',
  // Blog mappings
  'what-is-a-digital-wallet': '/blog/what-is-a-digital-wallet',
  'what-is-a-digital-drivers-license': '/blog/mobile-drivers-license',
  'app-in-the-air-alternative': '/blog/app-in-the-air-alternative',
  'albanian-diaspora': '/blog/albanian-diaspora-voter-registration',
  'tripit-alternative': '/blog/tripit-alternative',
  'top-10-digital-wallet-apps': '/blog/digital-wallet-apps-for-every-need',
  'wanderlog-alternative': '/blog/wanderlog-alternative',
  'tripcase-alternative': '/blog/tripcase-alternative',
  'best-id-scanner-app': '/blog/best-id-scanner-app',
  'forgemytrip-alternative': '/blog',
  'how-to-access-your-digital-wallet-on-iphone': '/blog/access-your-digital-wallet-anywhere',
  'best-google-wallet-alternatives': '/blog/best-google-wallet-alternatives',
  'how-to-share-your-travel-plans': '/blog/how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app',
  'polarsteps-alternative': '/blog',
  'the-ultimate-guide-to-the-safest-digital-wallet-app': '/wallet',
  'best-gift-card-wallet-apps': '/blog/best-gift-card-wallet-apps',
  'the-best-event-ticket-apps': '/blog/the-best-event-ticket-apps',
  'how-to-add-and-store-your-medical-card': '/blog/how-to-add-and-store-your-medical-card',
  '10-travel-hacks-that-actually-work': '/blog/10-travel-hacks-that-actually-work',
  'best-document-scanning-apps': '/blog/best-document-scanning-apps',
  'how-to-add-gift-cards-to-your-wallet-app': '/blog/best-gift-card-wallet-apps',
  'flight-tickets-on-iphone': '/blog/flight-tickets-on-iphone',
  'checkmytrip-alternative': '/blog/checkmytrip-alternative',
  '7-useful-apps-for-planning-your-trip': '/blog/best-apps-to-plan-travel',
  'exploring-the-security-of-digital-wallets': '/security',
  'stippl-alternative': '/blog',
  'can-a-digital-wallet-be-hacked': '/security',
  'best-apps-to-plan-travel': '/blog/best-apps-to-plan-travel',
  'tripsy-alternative': '/blog',
  'you-can-now-store-tickets-in-folio-wallet': '/blog/you-can-now-store-tickets-in-folio-wallet',
  'how-to-secure-your-wallet-on-iphone': '/security',
  'using-loyalty-card-on-your-iphone': '/blog/how-to-store-and-use-loyalty-cards-on-your-iphone',
  'regular-vs-digital-wallets': '/blog/regular-vs-digital-wallets',
  'the-best-digital-wallets-for-android': '/blog/best-google-wallet-alternatives',
  'apple-gift-card-add-to-wallet': '/blog/apple-gift-card-add-to-wallet',
  'best-digital-wallet-apps-in-canada': '/blog/best-digital-wallet-apps-in-canada',
  'the-best-digital-wallets-for-iphone': '/blog/best-apple-wallet-alternatives',
  'pass2u-alternative': '/blog/pass2u-alternative',
  'best-apple-wallet-alternatives': '/blog/best-apple-wallet-alternatives',
  // Marketing/misc pages from old site
  'app-card': '/',
  'producthunt': '/',
  'support': '/about#contact',
  'delete_account_request': '/privacy',
  // Legal agreement pages
  'folio-sdk-license-agreement': '/terms',
  'folio-data-processing-agreement': '/privacy',
  'folio-api-license-agreement': '/terms',
  'folio-platform-terms-of-service': '/terms',
  // Blog article with changed slug
  'albanian-diaspora-voter-registration-surges-525-with-folio-digital-wallet': '/blog/albanian-diaspora-voter-registration'
}

// Fallback handler for GitHub Pages query string redirect (?/path)
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const search = location.search
    if (search && search[1] === '/') {
      const pathWithParams = search.slice(1)
      let pathEnd = pathWithParams.length
      for (let i = 0; i < pathWithParams.length - 1; i++) {
        if (pathWithParams[i] === '&') {
          const before = i >= 4 ? pathWithParams.substring(i - 4, i) : ''
          if (before !== '~and') {
            pathEnd = i
            break
          }
        }
      }

      let route = pathWithParams.substring(0, pathEnd).replace(/~and~/g, '&')
      if (!route.startsWith('/')) route = '/' + route

      const additionalParams = pathWithParams.substring(pathEnd)
      let finalPath = route
      if (additionalParams) {
        const cleanParams = additionalParams.replace(/^&/, '').replace(/~and~/g, '&')
        if (cleanParams) finalPath = route + '?' + cleanParams
      }

      navigate(finalPath, { replace: true })
    }
  }, [location.search, navigate])

  return null
}

function PrerenderReadyMarker() {
  const location = useLocation()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Used by build-time prerendering to know when the page is fully rendered.
    // Double rAF helps ensure layout + effects (like meta tags) are applied.
    setReady(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setReady(true)
      })
    })
  }, [location.pathname, location.search, location.hash])

  return ready ? <span id="prerender-ready" style={{ display: 'none' }} /> : null
}

/**
 * Redirects URLs with trailing slash to versions without trailing slash (301 redirect)
 * Exceptions: root paths (/en/, /es/, etc.) should keep trailing slash
 * Only applies to clean paths (without query parameters or hash)
 */
function TrailingSlashRedirect() {
  const location = useLocation()
  const pathname = location.pathname
  
  // Skip if pathname doesn't end with slash
  if (!pathname.endsWith('/')) {
    return null
  }
  
  // Allow root paths to keep trailing slash: /, /en/, /es/, etc.
  const pathSegments = pathname.split('/').filter(Boolean)
  if (pathSegments.length <= 1) {
    // Root path or language root (e.g., /en/) - keep trailing slash
    return null
  }
  
  // Remove trailing slash and redirect (301)
  const newPathname = pathname.replace(/\/$/, '')
  const newUrl = `${newPathname}${location.search}${location.hash}`
  
  return <Navigate to={newUrl} replace />
}

/**
 * Redirects old URLs without language prefix to the default language
 * Handles legacy URL patterns from the old folio.id site
 */
function LegacyRedirect() {
  const location = useLocation()
  const path = location.pathname || '/'
  const pathSegments = path.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]

  // Skip if already has a valid language prefix
  const isLanguagePrefix = SUPPORTED_LANGUAGES.includes(firstSegment as typeof SUPPORTED_LANGUAGES[number])
  if (isLanguagePrefix || pathSegments.length === 0) {
    return null
  }

  // Try different matching strategies in order of specificity
  const lastSegment = pathSegments[pathSegments.length - 1]

  // 1. First try matching the first segment (for main pages like /about-us, /business)
  let mappedPath = LEGACY_MAPPING[firstSegment]

  // 2. Then try matching the last segment (for blog slugs like /blog/article-name)
  if (!mappedPath && lastSegment !== firstSegment) {
    mappedPath = LEGACY_MAPPING[lastSegment]
  }

  if (mappedPath) {
    // Build target URL with language prefix
    const target = mappedPath.startsWith('/')
      ? `/${DEFAULT_LANGUAGE}${mappedPath}`
      : `/${DEFAULT_LANGUAGE}/${mappedPath}`
    return <Navigate to={`${target}${location.search}${location.hash}`} replace />
  }

  // Fallback: prepend language prefix to current path
  const newPath = `/${DEFAULT_LANGUAGE}${path}`
  return <Navigate to={`${newPath}${location.search}${location.hash}`} replace />
}


/**
 * Ensuring that the :lang parameter is a valid supported language.
 * If not, it allows LegacyRedirect to handle it.
 */
function LanguageGuard({ children }: { children: React.ReactNode }) {
  const { lang } = useParams()
  const isLanguagePrefix = SUPPORTED_LANGUAGES.includes(lang as typeof SUPPORTED_LANGUAGES[number])

  if (!isLanguagePrefix) {
    return <LegacyRedirect />
  }

  return <>{children}</>
}

/**
 * All localized routes - these are rendered under /:lang
 */
function LocalizedRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="government/playground" element={<PlaygroundPage />} />
        <Route path="solutions/digital-ticketing" element={<DigitalTicketingPage />} />
        <Route path="solutions/age-compliance" element={<AgeCompliancePage />} />
        <Route path="solutions/client-onboarding" element={<ClientOnboardingPage />} />
        <Route path="government" element={<GovernmentPage />} />
        <Route path="platform/id-verification" element={<IdVerificationPage />} />
        <Route path="platform/document-intelligence" element={<DocumentIntelligencePage />} />
        <Route path="platform/liveness-check" element={<LivenessCheckPage />} />
        <Route path="platform/face-match" element={<FaceMatchPage />} />
        <Route path="platform/data-source-checks" element={<DataSourceChecksPage />} />
        <Route path="platform/phone-and-email-validation" element={<PhoneAndEmailValidationPage />} />
        <Route path="platform/nfc-identity-scan" element={<NfcIdentityScanPage />} />
        <Route path="platform/dynamic-flow" element={<DynamicFlowPage />} />
        <Route path="platform/behavior-insights" element={<BehaviorInsightsPage />} />
        <Route path="platform/review-workspace" element={<ReviewWorkspacePage />} />
        <Route path="platform/credential-issuance" element={<CredentialIssuancePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/albanian-diaspora-voter-registration" element={<AlbanianDiasporaArticlePage />} />
        <Route path="blog/tripcase-alternative" element={<TripCaseAlternativeArticlePage />} />
        <Route path="blog/tripit-alternative" element={<TripItAlternativeArticlePage />} />
        <Route path="blog/pass2u-alternative" element={<Pass2UAlternativeArticlePage />} />
        <Route path="blog/app-in-the-air-alternative" element={<AppInTheAirAlternativeArticlePage />} />
        <Route path="blog/checkmytrip-alternative" element={<CheckMyTripAlternativeArticlePage />} />
        <Route path="blog/wanderlog-alternative" element={<WanderlogAlternativeArticlePage />} />
        <Route path="blog/best-document-scanning-apps" element={<BestDocumentScanningAppsArticlePage />} />
        <Route path="blog/best-id-scanner-app" element={<BestIdScannerAppArticlePage />} />
        <Route path="blog/10-travel-hacks-that-actually-work" element={<TenTravelHacksThatActuallyWorkArticlePage />} />
        <Route path="blog/best-apps-to-plan-travel" element={<BestAppsToPlanTravelArticlePage />} />
        <Route path="blog/the-best-event-ticket-apps" element={<BestEventTicketAppsArticlePage />} />
        <Route path="blog/flight-tickets-on-iphone" element={<FlightTicketsOnIphoneArticlePage />} />
        <Route path="blog/how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app" element={<HowToShareTravelPlansArticlePage />} />
        <Route path="blog/you-can-now-store-tickets-in-folio-wallet" element={<YouCanNowStoreTicketsInFolioWalletArticlePage />} />
        <Route path="blog/access-your-digital-wallet-anywhere" element={<AccessYourDigitalWalletAnywhereArticlePage />} />
        <Route path="blog/best-google-wallet-alternatives" element={<BestGoogleWalletAlternativesArticlePage />} />
        <Route path="blog/best-apple-wallet-alternatives" element={<BestAppleWalletAlternativesArticlePage />} />
        <Route path="blog/best-digital-wallet-apps-in-canada" element={<BestDigitalWalletAppsInCanadaArticlePage />} />
        <Route path="blog/digital-wallet-apps-for-every-need" element={<DigitalWalletAppsForEveryNeedArticlePage />} />
        <Route path="blog/best-gift-card-wallet-apps" element={<BestGiftCardWalletAppsArticlePage />} />
        <Route path="blog/regular-vs-digital-wallets" element={<RegularVsDigitalWalletsArticlePage />} />
        <Route path="blog/how-to-add-and-store-your-medical-card" element={<HowToAddAndStoreYourMedicalCardArticlePage />} />
        <Route path="blog/what-is-a-digital-wallet" element={<WhatIsADigitalWalletArticlePage />} />
        <Route path="blog/how-to-store-and-use-loyalty-cards-on-your-iphone" element={<HowToStoreAndUseLoyaltyCardsOnYourIphoneArticlePage />} />
        <Route path="blog/apple-gift-card-add-to-wallet" element={<AppleGiftCardAddToWalletArticlePage />} />
        <Route path="blog/what-is-liveness-detection" element={<WhatIsLivenessDetectionArticlePage />} />
        <Route path="blog/face-matching-technology" element={<FaceMatchingTechnologyArticlePage />} />
        <Route path="blog/nfc-identity-verification" element={<NfcIdentityVerificationArticlePage />} />
        <Route path="blog/document-intelligence" element={<DocumentIntelligenceArticlePage />} />
        <Route path="blog/kyc-aml-compliance" element={<KycAmlComplianceArticlePage />} />
        <Route path="blog/age-verification-requirements" element={<AgeVerificationRequirementsArticlePage />} />
        <Route path="blog/client-onboarding-best-practices" element={<ClientOnboardingBestPracticesArticlePage />} />
        <Route path="blog/organize-tickets-bookings" element={<OrganizeTicketsBookingsArticlePage />} />
        <Route path="blog/eudi-wallet" element={<EudiWalletArticlePage />} />
        <Route path="blog/mobile-drivers-license" element={<MobileDriversLicenseArticlePage />} />
        <Route path="blog/digital-credentials-government" element={<DigitalCredentialsGovernmentArticlePage />} />
        <Route path="blog/end-to-end-encryption" element={<EndToEndEncryptionArticlePage />} />
        <Route path="blog/biometric-data-privacy" element={<BiometricDataPrivacyArticlePage />} />
        <Route path="blog/digital-passport-copies" element={<DigitalPassportCopiesArticlePage />} />
        <Route path="blog/managing-family-travel-documents" element={<ManagingFamilyTravelDocumentsArticlePage />} />
        <Route path="blog/best-identity-verification-platforms" element={<BestIdentityVerificationPlatformsArticlePage />} />
        <Route path="blog/complete-guide-identity-verification" element={<CompleteGuideIdentityVerificationArticlePage />} />
        <Route path="id-wallet-app" element={<IdWalletAppPage />} />
        <Route path="card-scanner-app" element={<CardScannerAppPage />} />
        <Route path="loyalty-card-app" element={<LoyaltyCardAppPage />} />
        <Route path="trip-planner-app" element={<TripPlannerAppPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* Legacy URL redirects for slugs accessed with language prefix */}
        <Route path="about-us" element={<Navigate to="../about" replace />} />
        <Route path="business" element={<Navigate to="../solutions/digital-ticketing" replace />} />
        <Route path="for-government" element={<Navigate to="../government" replace />} />
        <Route path="secure-wallet-app" element={<Navigate to="../wallet" replace />} />
        <Route path="what-is-a-digital-wallet" element={<Navigate to="../blog/what-is-a-digital-wallet" replace />} />
        <Route path="privacy-policy" element={<Navigate to="../privacy" replace />} />
        <Route path="folio-terms-conditions" element={<Navigate to="../terms" replace />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Suspense>
  )
}

function App() {
  // Detect deploy base at runtime so the same build works on:
  // - https://folio.id/ (root)
  // - https://stomashevsky.github.io/folio/ (GitHub Pages project site)
  const runtimeBase =
    typeof window !== 'undefined' &&
      (window.location.pathname === '/folio' || window.location.pathname.startsWith('/folio/'))
      ? '/folio'
      : undefined

  return (
    <BrowserRouter basename={runtimeBase}>
      <ScrollToTop />
      <RedirectHandler />
      <PrerenderReadyMarker />
      {/* TrailingSlashRedirect disabled: CloudFront automatically adds trailing slash,
          and _redirects rules don't work on CloudFront (only Netlify).
          Accepting trailing slash as standard to avoid double redirects. */}
      {/* <TrailingSlashRedirect /> */}
      <CookieConsent />
      <Routes>
        {/* Root path redirects to user's preferred language */}
        <Route path="/" element={<LanguageRedirect />} />

        {/* All localized routes under /:lang/* */}
        <Route path="/:lang/*" element={
          <LanguageBannerProvider>
            <LanguageProvider>
              <LanguageSuggestionBanner />
              <BannerSpacer />
              <LanguageGuard>
                <LocalizedRoutes />
              </LanguageGuard>
            </LanguageProvider>
          </LanguageBannerProvider>
        } />
        <Route path="*" element={<LegacyRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
