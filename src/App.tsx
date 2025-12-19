import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import WalletPage from './pages/WalletPage'
import PlaygroundPage from './pages/PlaygroundPage'
import DigitalTicketingPage from './pages/DigitalTicketingPage'
import AgeCompliancePage from './pages/AgeCompliancePage'
import ClientOnboardingPage from './pages/ClientOnboardingPage'
import GovernmentPage from './pages/GovernmentPage'
import IdVerificationPage from './pages/IdVerificationPage'
import DocumentIntelligencePage from './pages/DocumentIntelligencePage'
import LivenessCheckPage from './pages/LivenessCheckPage'
import FaceMatchPage from './pages/FaceMatchPage'
import DataSourceChecksPage from './pages/DataSourceChecksPage'
import PhoneAndEmailValidationPage from './pages/PhoneAndEmailValidationPage'
import NfcIdentityScanPage from './pages/NfcIdentityScanPage'
import DynamicFlowPage from './pages/DynamicFlowPage'
import BehaviorInsightsPage from './pages/BehaviorInsightsPage'
import ReviewWorkspacePage from './pages/ReviewWorkspacePage'
import BlogPage from './pages/BlogPage'
import AlbanianDiasporaArticlePage from './pages/AlbanianDiasporaArticlePage'
import TripCaseAlternativeArticlePage from './pages/TripCaseAlternativeArticlePage'
import TripItAlternativeArticlePage from './pages/TripItAlternativeArticlePage'
import Pass2UAlternativeArticlePage from './pages/Pass2UAlternativeArticlePage'
import AppInTheAirAlternativeArticlePage from './pages/AppInTheAirAlternativeArticlePage'
import CheckMyTripAlternativeArticlePage from './pages/CheckMyTripAlternativeArticlePage'
import WanderlogAlternativeArticlePage from './pages/WanderlogAlternativeArticlePage'
import BestDocumentScanningAppsArticlePage from './pages/BestDocumentScanningAppsArticlePage'
import BestIdScannerAppArticlePage from './pages/BestIdScannerAppArticlePage'
import TenTravelHacksThatActuallyWorkArticlePage from './pages/TenTravelHacksThatActuallyWorkArticlePage'
import BestAppsToPlanTravelArticlePage from './pages/BestAppsToPlanTravelArticlePage'
import BestEventTicketAppsArticlePage from './pages/BestEventTicketAppsArticlePage'
import FlightTicketsOnIphoneArticlePage from './pages/FlightTicketsOnIphoneArticlePage'
import HowToShareTravelPlansArticlePage from './pages/HowToShareTravelPlansArticlePage'
import YouCanNowStoreTicketsInFolioWalletArticlePage from './pages/YouCanNowStoreTicketsInFolioWalletArticlePage'
import BestGoogleWalletAlternativesArticlePage from './pages/BestGoogleWalletAlternativesArticlePage'
import BestAppleWalletAlternativesArticlePage from './pages/BestAppleWalletAlternativesArticlePage'
import AccessYourDigitalWalletAnywhereArticlePage from './pages/AccessYourDigitalWalletAnywhereArticlePage'
import BestDigitalWalletAppsInCanadaArticlePage from './pages/BestDigitalWalletAppsInCanadaArticlePage'
import DigitalWalletAppsForEveryNeedArticlePage from './pages/DigitalWalletAppsForEveryNeedArticlePage'
import BestGiftCardWalletAppsArticlePage from './pages/BestGiftCardWalletAppsArticlePage'
import RegularVsDigitalWalletsArticlePage from './pages/RegularVsDigitalWalletsArticlePage'
import HowToAddAndStoreYourMedicalCardArticlePage from './pages/HowToAddAndStoreYourMedicalCardArticlePage'
import WhatIsADigitalWalletArticlePage from './pages/WhatIsADigitalWalletArticlePage'
import HowToStoreAndUseLoyaltyCardsOnYourIphoneArticlePage from './pages/HowToStoreAndUseLoyaltyCardsOnYourIphoneArticlePage'
import AppleGiftCardAddToWalletArticlePage from './pages/AppleGiftCardAddToWalletArticlePage'
import WhatIsLivenessDetectionArticlePage from './pages/WhatIsLivenessDetectionArticlePage'
import FaceMatchingTechnologyArticlePage from './pages/FaceMatchingTechnologyArticlePage'
import NfcIdentityVerificationArticlePage from './pages/NfcIdentityVerificationArticlePage'
import DocumentIntelligenceArticlePage from './pages/DocumentIntelligenceArticlePage'
import KycAmlComplianceArticlePage from './pages/KycAmlComplianceArticlePage'
import AgeVerificationRequirementsArticlePage from './pages/AgeVerificationRequirementsArticlePage'
import ClientOnboardingBestPracticesArticlePage from './pages/ClientOnboardingBestPracticesArticlePage'
import OrganizeTicketsBookingsArticlePage from './pages/OrganizeTicketsBookingsArticlePage'
import EudiWalletArticlePage from './pages/EudiWalletArticlePage'
import MobileDriversLicenseArticlePage from './pages/MobileDriversLicenseArticlePage'
import DigitalCredentialsGovernmentArticlePage from './pages/DigitalCredentialsGovernmentArticlePage'
import EndToEndEncryptionArticlePage from './pages/EndToEndEncryptionArticlePage'
import BiometricDataPrivacyArticlePage from './pages/BiometricDataPrivacyArticlePage'
import DigitalPassportCopiesArticlePage from './pages/DigitalPassportCopiesArticlePage'
import ManagingFamilyTravelDocumentsArticlePage from './pages/ManagingFamilyTravelDocumentsArticlePage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import SecurityPage from './pages/SecurityPage'
import IdWalletAppPage from './pages/IdWalletAppPage'
import CardScannerAppPage from './pages/CardScannerAppPage'
import LoyaltyCardAppPage from './pages/LoyaltyCardAppPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import CookieConsent from './components/CookieConsent'

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

function App() {
  // Detect deploy base at runtime so the same build works on:
  // - https://folio.id/ (root)
  // - https://stomashevsky.github.io/folio/ (GitHub Pages project site)
  const runtimeBase =
    typeof window !== 'undefined' && window.location.pathname.startsWith('/folio') ? '/folio' : undefined
  
  return (
    <BrowserRouter basename={runtimeBase}>
      <ScrollToTop />
      <RedirectHandler />
      <PrerenderReadyMarker />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/government/playground" element={<PlaygroundPage />} />
        <Route path="/solutions/digital-ticketing" element={<DigitalTicketingPage />} />
        <Route path="/solutions/age-compliance" element={<AgeCompliancePage />} />
        <Route path="/solutions/client-onboarding" element={<ClientOnboardingPage />} />
        <Route path="/business" element={<Navigate to="/solutions/digital-ticketing" replace />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/platform/id-verification" element={<IdVerificationPage />} />
        <Route path="/platform/document-intelligence" element={<DocumentIntelligencePage />} />
        <Route path="/platform/liveness-check" element={<LivenessCheckPage />} />
        <Route path="/platform/face-match" element={<FaceMatchPage />} />
        <Route path="/platform/data-source-checks" element={<DataSourceChecksPage />} />
        <Route path="/platform/phone-and-email-validation" element={<PhoneAndEmailValidationPage />} />
        <Route path="/platform/nfc-identity-scan" element={<NfcIdentityScanPage />} />
        <Route path="/platform/dynamic-flow" element={<DynamicFlowPage />} />
        <Route path="/platform/behavior-insights" element={<BehaviorInsightsPage />} />
        <Route path="/platform/review-workspace" element={<ReviewWorkspacePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/albanian-diaspora-voter-registration" element={<AlbanianDiasporaArticlePage />} />
        <Route path="/blog/tripcase-alternative" element={<TripCaseAlternativeArticlePage />} />
        <Route path="/blog/tripit-alternative" element={<TripItAlternativeArticlePage />} />
        <Route path="/blog/pass2u-alternative" element={<Pass2UAlternativeArticlePage />} />
        <Route path="/blog/app-in-the-air-alternative" element={<AppInTheAirAlternativeArticlePage />} />
        <Route path="/blog/checkmytrip-alternative" element={<CheckMyTripAlternativeArticlePage />} />
        <Route path="/blog/wanderlog-alternative" element={<WanderlogAlternativeArticlePage />} />
        <Route path="/blog/best-document-scanning-apps" element={<BestDocumentScanningAppsArticlePage />} />
        <Route path="/blog/best-id-scanner-app" element={<BestIdScannerAppArticlePage />} />
        <Route path="/blog/10-travel-hacks-that-actually-work" element={<TenTravelHacksThatActuallyWorkArticlePage />} />
        <Route path="/blog/best-apps-to-plan-travel" element={<BestAppsToPlanTravelArticlePage />} />
        <Route path="/blog/the-best-event-ticket-apps" element={<BestEventTicketAppsArticlePage />} />
        <Route path="/blog/flight-tickets-on-iphone" element={<FlightTicketsOnIphoneArticlePage />} />
        <Route path="/blog/how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app" element={<HowToShareTravelPlansArticlePage />} />
        <Route path="/blog/you-can-now-store-tickets-in-folio-wallet" element={<YouCanNowStoreTicketsInFolioWalletArticlePage />} />
        <Route path="/blog/access-your-digital-wallet-anywhere" element={<AccessYourDigitalWalletAnywhereArticlePage />} />
        <Route path="/blog/best-google-wallet-alternatives" element={<BestGoogleWalletAlternativesArticlePage />} />
        <Route path="/blog/best-apple-wallet-alternatives" element={<BestAppleWalletAlternativesArticlePage />} />
        <Route path="/blog/best-digital-wallet-apps-in-canada" element={<BestDigitalWalletAppsInCanadaArticlePage />} />
        <Route path="/blog/digital-wallet-apps-for-every-need" element={<DigitalWalletAppsForEveryNeedArticlePage />} />
        <Route path="/blog/best-gift-card-wallet-apps" element={<BestGiftCardWalletAppsArticlePage />} />
        <Route path="/blog/regular-vs-digital-wallets" element={<RegularVsDigitalWalletsArticlePage />} />
        <Route path="/blog/how-to-add-and-store-your-medical-card" element={<HowToAddAndStoreYourMedicalCardArticlePage />} />
        <Route path="/blog/what-is-a-digital-wallet" element={<WhatIsADigitalWalletArticlePage />} />
        <Route path="/blog/how-to-store-and-use-loyalty-cards-on-your-iphone" element={<HowToStoreAndUseLoyaltyCardsOnYourIphoneArticlePage />} />
        <Route path="/blog/apple-gift-card-add-to-wallet" element={<AppleGiftCardAddToWalletArticlePage />} />
        <Route path="/blog/what-is-liveness-detection" element={<WhatIsLivenessDetectionArticlePage />} />
        <Route path="/blog/face-matching-technology" element={<FaceMatchingTechnologyArticlePage />} />
        <Route path="/blog/nfc-identity-verification" element={<NfcIdentityVerificationArticlePage />} />
        <Route path="/blog/document-intelligence" element={<DocumentIntelligenceArticlePage />} />
        <Route path="/blog/kyc-aml-compliance" element={<KycAmlComplianceArticlePage />} />
        <Route path="/blog/age-verification-requirements" element={<AgeVerificationRequirementsArticlePage />} />
        <Route path="/blog/client-onboarding-best-practices" element={<ClientOnboardingBestPracticesArticlePage />} />
        <Route path="/blog/organize-tickets-bookings" element={<OrganizeTicketsBookingsArticlePage />} />
        <Route path="/blog/eudi-wallet" element={<EudiWalletArticlePage />} />
        <Route path="/blog/mobile-drivers-license" element={<MobileDriversLicenseArticlePage />} />
        <Route path="/blog/digital-credentials-government" element={<DigitalCredentialsGovernmentArticlePage />} />
        <Route path="/blog/end-to-end-encryption" element={<EndToEndEncryptionArticlePage />} />
        <Route path="/blog/biometric-data-privacy" element={<BiometricDataPrivacyArticlePage />} />
        <Route path="/blog/digital-passport-copies" element={<DigitalPassportCopiesArticlePage />} />
        <Route path="/blog/managing-family-travel-documents" element={<ManagingFamilyTravelDocumentsArticlePage />} />
        <Route path="/id-wallet-app" element={<IdWalletAppPage />} />
        <Route path="/card-scanner-app" element={<CardScannerAppPage />} />
        <Route path="/loyalty-card-app" element={<LoyaltyCardAppPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

