import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop'
import FolioAppPage from './pages/FolioAppPage'
import PlaygroundPage from './pages/PlaygroundPage'
import TicketIssuancePage from './pages/TicketIssuancePage'
import IdentityVerificationPage from './pages/IdentityVerificationPage'
import BusinessOnboardingPage from './pages/BusinessOnboardingPage'
import AgeVerificationPage from './pages/AgeVerificationPage'
import GovernmentPage from './pages/GovernmentPage'
import BlogPage from './pages/BlogPage'
import AlbanianDiasporaArticlePage from './pages/AlbanianDiasporaArticlePage'
import TripCaseAlternativeArticlePage from './pages/TripCaseAlternativeArticlePage'
import TripsyAlternativeArticlePage from './pages/TripsyAlternativeArticlePage'
import TripItAlternativeArticlePage from './pages/TripItAlternativeArticlePage'
import Pass2UAlternativeArticlePage from './pages/Pass2UAlternativeArticlePage'
import AppInTheAirAlternativeArticlePage from './pages/AppInTheAirAlternativeArticlePage'
import CheckMyTripAlternativeArticlePage from './pages/CheckMyTripAlternativeArticlePage'
import WanderlogAlternativeArticlePage from './pages/WanderlogAlternativeArticlePage'
import BestDocumentScanningAppsArticlePage from './pages/BestDocumentScanningAppsArticlePage'
import BestIdScannerAppArticlePage from './pages/BestIdScannerAppArticlePage'
import SevenUsefulAppsForPlanningTripArticlePage from './pages/SevenUsefulAppsForPlanningTripArticlePage'
import TenTravelHacksThatActuallyWorkArticlePage from './pages/TenTravelHacksThatActuallyWorkArticlePage'
import BestAppsToPlanTravelArticlePage from './pages/BestAppsToPlanTravelArticlePage'
import BestEventTicketAppsArticlePage from './pages/BestEventTicketAppsArticlePage'
import FlightTicketsOnIphoneArticlePage from './pages/FlightTicketsOnIphoneArticlePage'
import HowToShareTravelPlansArticlePage from './pages/HowToShareTravelPlansArticlePage'
import YouCanNowStoreTicketsInFolioWalletArticlePage from './pages/YouCanNowStoreTicketsInFolioWalletArticlePage'
import BestGoogleWalletAlternativesArticlePage from './pages/BestGoogleWalletAlternativesArticlePage'
import BestAppleWalletAlternativesArticlePage from './pages/BestAppleWalletAlternativesArticlePage'
import AccessYourDigitalWalletAnywhereArticlePage from './pages/AccessYourDigitalWalletAnywhereArticlePage'
import HowToAddGiftCardsToYourWalletAppArticlePage from './pages/HowToAddGiftCardsToYourWalletAppArticlePage'
import BestDigitalWalletAppsInCanadaArticlePage from './pages/BestDigitalWalletAppsInCanadaArticlePage'

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
      let pathWithParams = search.slice(1) // Removes '?' -> '/government'
      
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

function App() {
  // Use Vite's BASE_URL which matches the base config
  // In dev: '/', in production build: '/folio'
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'
  
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<FolioAppPage />} />
        <Route path="/government/playground" element={<PlaygroundPage />} />
        <Route path="/solutions/ticket-issuance" element={<TicketIssuancePage />} />
        <Route path="/solutions/identity-verification" element={<IdentityVerificationPage />} />
        <Route path="/solutions/business-onboarding" element={<BusinessOnboardingPage />} />
        <Route path="/solutions/age-verification" element={<AgeVerificationPage />} />
        <Route path="/business" element={<Navigate to="/solutions/ticket-issuance" replace />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/albanian-diaspora-voter-registration" element={<AlbanianDiasporaArticlePage />} />
        <Route path="/blog/tripcase-alternative" element={<TripCaseAlternativeArticlePage />} />
        <Route path="/blog/tripsy-alternative-travel-app" element={<TripsyAlternativeArticlePage />} />
        <Route path="/blog/tripit-alternative" element={<TripItAlternativeArticlePage />} />
        <Route path="/blog/pass2u-alternative" element={<Pass2UAlternativeArticlePage />} />
        <Route path="/blog/app-in-the-air-alternative" element={<AppInTheAirAlternativeArticlePage />} />
        <Route path="/blog/checkmytrip-alternative" element={<CheckMyTripAlternativeArticlePage />} />
        <Route path="/blog/wanderlog-alternative" element={<WanderlogAlternativeArticlePage />} />
        <Route path="/blog/best-document-scanning-apps" element={<BestDocumentScanningAppsArticlePage />} />
        <Route path="/blog/best-id-scanner-app" element={<BestIdScannerAppArticlePage />} />
        <Route path="/blog/7-useful-apps-for-planning-your-trip" element={<SevenUsefulAppsForPlanningTripArticlePage />} />
        <Route path="/blog/10-travel-hacks-that-actually-work" element={<TenTravelHacksThatActuallyWorkArticlePage />} />
        <Route path="/blog/best-apps-to-plan-travel" element={<BestAppsToPlanTravelArticlePage />} />
        <Route path="/blog/the-best-event-ticket-apps" element={<BestEventTicketAppsArticlePage />} />
        <Route path="/blog/flight-tickets-on-iphone" element={<FlightTicketsOnIphoneArticlePage />} />
        <Route path="/blog/how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app" element={<HowToShareTravelPlansArticlePage />} />
        <Route path="/blog/you-can-now-store-tickets-in-folio-wallet" element={<YouCanNowStoreTicketsInFolioWalletArticlePage />} />
        <Route path="/blog/access-your-digital-wallet-anywhere" element={<AccessYourDigitalWalletAnywhereArticlePage />} />
        <Route path="/blog/how-to-add-gift-cards-to-your-wallet-app" element={<HowToAddGiftCardsToYourWalletAppArticlePage />} />
        <Route path="/blog/best-google-wallet-alternatives" element={<BestGoogleWalletAlternativesArticlePage />} />
        <Route path="/blog/best-apple-wallet-alternatives" element={<BestAppleWalletAlternativesArticlePage />} />
        <Route path="/blog/best-digital-wallet-apps-in-canada" element={<BestDigitalWalletAppsInCanadaArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

