import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
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
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

// Fallback handler in case the script in index.html didn't run
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if URL still has the query string format ?/path
    // This is a fallback in case the script in index.html didn't execute
    const search = location.search
    
    if (search && search[1] === '/') {
      // Extract the path from query string (e.g., '/government' from '?/government')
      const pathWithParams = search.slice(1) // Removes '?' -> '/government'
      
      // Find where the actual path ends (before any additional query params)
      let pathEnd = pathWithParams.length
      for (let i = 0; i < pathWithParams.length - 1; i++) {
        if (pathWithParams[i] === '&') {
          // Check if this & is part of ~and~
          const before = i >= 4 ? pathWithParams.substring(i - 4, i) : ''
          if (before !== '~and') {
            // This is a real query param separator
            pathEnd = i
            break
          }
        }
      }
      
      // Extract just the path part
      let route = pathWithParams.substring(0, pathEnd)
      
      // Decode ~and~ back to &
      route = route.replace(/~and~/g, '&')
      
      // Ensure route starts with /
      if (!route.startsWith('/')) {
        route = '/' + route
      }
      
      // Extract additional query parameters if they exist
      const additionalParams = pathWithParams.substring(pathEnd)
      let finalPath = route
      if (additionalParams) {
        // Remove leading & and decode ~and~
        const cleanParams = additionalParams.replace(/^&/, '').replace(/~and~/g, '&')
        if (cleanParams) {
          finalPath = route + '?' + cleanParams
        }
      }
      
      // Navigate to the correct path (without basename, React Router will add it)
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
 * Redirects old URLs without language prefix to the default language
 * e.g., /wallet -> /en/wallet
 */
function LegacyRedirect() {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]
  
  // Check if the first segment is a valid language code
  const isLanguagePrefix = SUPPORTED_LANGUAGES.includes(firstSegment as typeof SUPPORTED_LANGUAGES[number])
  
  // If not a language prefix and not the root, redirect to default language
  if (!isLanguagePrefix && pathSegments.length > 0) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}${location.pathname}${location.search}${location.hash}`} replace />
  }
  
  return null
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
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="about" element={<AboutPage />} />
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
      <LegacyRedirect />
      <PrerenderReadyMarker />
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
              <LocalizedRoutes />
          </LanguageProvider>
          </LanguageBannerProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
