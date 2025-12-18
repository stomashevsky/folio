import { getOgImageUrl } from '../configs/ogImages'
import blogAlbanianDiasporaVoterRegistration from '../assets/images/blog-albanian-diaspora-voter-registration.png'
import blogWhatIsLivenessDetection from '../assets/images/blog-what-is-liveness-detection.png'
import blogFaceMatchingTechnology from '../assets/images/blog-face-matching-technology.png'
import blogNfcIdentityVerification from '../assets/images/blog-nfc-identity-verification.png'
import blogDocumentIntelligence from '../assets/images/blog-document-intelligence.png'
import blogKycAmlCompliance from '../assets/images/blog-kyc-aml-compliance.png'
import blogAgeVerificationRequirements from '../assets/images/blog-age-verification-requirements.png'
import blogClientOnboardingBestPractices from '../assets/images/blog-client-onboarding-best-practices.png'
import blogOrganizeTicketsBookings from '../assets/images/blog-organize-tickets-bookings.png'
import blogEudiWallet from '../assets/images/blog-eudi-wallet.png'
import blogMobileDriversLicense from '../assets/images/blog-mobile-drivers-license.png'
import blogDigitalCredentialsGovernment from '../assets/images/blog-digital-credentials-government.png'
import blogEndToEndEncryption from '../assets/images/blog-end-to-end-encryption.png'
import blogBiometricDataPrivacy from '../assets/images/blog-biometric-data-privacy.png'
import blogDigitalPassportCopies from '../assets/images/blog-digital-passport-copies.png'
import blogManagingFamilyTravelDocuments from '../assets/images/blog-managing-family-travel-documents.png'
import blogTripCaseAlternative from '../assets/images/blog-tripcase-alternative.png'
import blogTripsyAlternative from '../assets/images/blog-tripsy-alternative.png'
import blogTripItAlternative from '../assets/images/blog-tripit-alternative.png'
import blogPass2UAlternative from '../assets/images/blog-pass2u-alternative.png'
import blogAppInTheAirAlternative from '../assets/images/blog-app-in-the-air-alternative.png'
import blogCheckMyTripAlternative from '../assets/images/blog-checkmytrip-alternative.png'
import blogWanderlogAlternative from '../assets/images/blog-wanderlog-alternative.png'
import blogBestDocumentScanningApps from '../assets/images/blog-best-document-scanning-apps.png'
import blogBestIdScannerApp from '../assets/images/blog-best-id-scanner-app.png'
import blogSevenUsefulApps from '../assets/images/blog-7-useful-apps-for-planning-your-trip.png'
import blogTenTravelHacks from '../assets/images/blog-10-travel-hacks-that-actually-work.png'
import blogBestAppsToPlanTravel from '../assets/images/blog-best-apps-to-plan-travel.png'
import blogBestEventTicketApps from '../assets/images/blog-best-event-ticket-apps.png'
import blogFlightTicketsOnIphone from '../assets/images/blog-flight-tickets-on-iphone.png'
import blogHowToShareTravelPlans from '../assets/images/blog-how-to-share-travel-plans.png'
import blogYouCanNowStoreTickets from '../assets/images/blog-you-can-now-store-tickets-in-folio-wallet.png'
import blogBestGoogleWalletAlternatives from '../assets/images/blog-best-google-wallet-alternatives.png'
import blogBestAppleWalletAlternatives from '../assets/images/blog-best-apple-wallet-alternatives.png'
import blogAccessYourDigitalWalletAnywhere from '../assets/images/blog-access-your-digital-wallet-anywhere.png'
import blogHowToAddGiftCardsToYourWalletApp from '../assets/images/blog-how-to-add-gift-cards-to-your-wallet-app.png'
import blogBestDigitalWalletAppsInCanada from '../assets/images/blog-best-digital-wallet-apps-in-canada.png'
import blogDigitalWalletAppsForEveryNeed from '../assets/images/blog-digital-wallet-apps-for-every-need.png'
import blogHowToSecureYourWalletOnIphone from '../assets/images/blog-how-to-secure-your-wallet-on-iphone.png'
import blogBestGiftCardWalletApps from '../assets/images/blog-best-gift-card-wallet-apps.png'
import blogRegularVsDigitalWallets from '../assets/images/blog-regular-vs-digital-wallets.png'
import blogAreDigitalWalletsSafe from '../assets/images/blog-are-digital-wallets-safe.png'
import blogAppleGiftCardAddToWallet from '../assets/images/blog-apple-gift-card-add-to-wallet.png'
import blogCanADigitalWalletBeHacked from '../assets/images/blog-can-a-digital-wallet-be-hacked.png'
import blogTheUltimateGuideToTheSafestDigitalWalletApp from '../assets/images/blog-the-ultimate-guide-to-the-safest-digital-wallet-app.png'
import blogWhatIsADigitalDriversLicense from '../assets/images/blog-what-is-a-digital-drivers-license.png'
import blogHowToAddAndStoreYourMedicalCard from '../assets/images/blog-how-to-add-and-store-your-medical-card.png'
import blogTheBestDigitalWalletsForAndroid from '../assets/images/blog-the-best-digital-wallets-for-android.png'
import blogHowToStoreAndUseLoyaltyCardsOnYourIphone from '../assets/images/blog-how-to-store-and-use-loyalty-cards-on-your-iphone.png'
import blogTheBestDigitalWalletsForIphone from '../assets/images/blog-the-best-digital-wallets-for-iphone.png'
import blogWhatIsADigitalWallet from '../assets/images/blog-what-is-a-digital-wallet.png'

export type BlogCategory = 'All' | 'Company' | 'Product' | 'Guides' | 'Research' | 'Safety'

export interface BlogArticle {
  category: Exclude<BlogCategory, 'All'>
  date: string
  title: string
  description: string
  slug?: string
  image?: string
}

// Helper function to parse date string "MMM DD, YYYY" to Date object
export const parseDate = (dateStr: string): Date => {
  return new Date(dateStr)
}

// Helper function to sort articles by date (newest first)
export const sortArticlesByDate = (articles: BlogArticle[]): BlogArticle[] => {
  return [...articles].sort((a, b) => {
    const dateA = parseDate(a.date)
    const dateB = parseDate(b.date)
    return dateB.getTime() - dateA.getTime() // Descending order (newest first)
  })
}

const BLOG_OG_IMAGE_BY_SLUG: Record<string, string> = {
  '10-travel-hacks-that-actually-work': 'blog-10-travel-hacks-that-actually-work.png',
  '7-useful-apps-for-planning-your-trip': 'blog-7-useful-apps-for-planning-your-trip.png',
  'access-your-digital-wallet-anywhere': 'blog-access-your-digital-wallet-anywhere.png',
  'age-verification-requirements': 'blog-age-verification-requirements.png',
  'albanian-diaspora-voter-registration': 'blog-albanian-diaspora-voter-registration.png',
  'app-in-the-air-alternative': 'blog-app-in-the-air-alternative.png',
  'apple-gift-card-add-to-wallet': 'blog-apple-gift-card-add-to-wallet.png',
  'are-digital-wallets-safe': 'blog-are-digital-wallets-safe.png',
  'best-apple-wallet-alternatives': 'blog-best-apple-wallet-alternatives.png',
  'best-apps-to-plan-travel': 'blog-best-apps-to-plan-travel.png',
  'best-digital-wallet-apps-in-canada': 'blog-best-digital-wallet-apps-in-canada.png',
  'best-document-scanning-apps': 'blog-best-document-scanning-apps.png',
  'best-gift-card-wallet-apps': 'blog-best-gift-card-wallet-apps.png',
  'best-google-wallet-alternatives': 'blog-best-google-wallet-alternatives.png',
  'best-id-scanner-app': 'blog-best-id-scanner-app.png',
  'biometric-data-privacy': 'blog-biometric-data-privacy.png',
  'can-a-digital-wallet-be-hacked': 'blog-can-a-digital-wallet-be-hacked.png',
  'checkmytrip-alternative': 'blog-checkmytrip-alternative.png',
  'client-onboarding-best-practices': 'blog-client-onboarding-best-practices.png',
  'digital-credentials-government': 'blog-digital-credentials-government.png',
  'digital-passport-copies': 'blog-digital-passport-copies.png',
  'organize-tickets-bookings': 'blog-organize-tickets-bookings.png',
  'digital-wallet-apps-for-every-need': 'blog-digital-wallet-apps-for-every-need.png',
  'document-intelligence': 'blog-document-intelligence.png',
  'end-to-end-encryption': 'blog-end-to-end-encryption.png',
  'eudi-wallet': 'blog-eudi-wallet.png',
  'face-matching-technology': 'blog-face-matching-technology.png',
  'flight-tickets-on-iphone': 'blog-flight-tickets-on-iphone.png',
  'how-to-add-and-store-your-medical-card': 'blog-how-to-add-and-store-your-medical-card.png',
  'how-to-add-gift-cards-to-your-wallet-app': 'blog-how-to-add-gift-cards-to-your-wallet-app.png',
  'how-to-secure-your-wallet-on-iphone': 'blog-how-to-secure-your-wallet-on-iphone.png',
  'how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app': 'blog-how-to-share-travel-plans.png',
  'how-to-store-and-use-loyalty-cards-on-your-iphone': 'blog-how-to-store-and-use-loyalty-cards-on-your-iphone.png',
  'kyc-aml-compliance': 'blog-kyc-aml-compliance.png',
  'managing-family-travel-documents': 'blog-managing-family-travel-documents.png',
  'mobile-drivers-license': 'blog-mobile-drivers-license.png',
  'nfc-identity-verification': 'blog-nfc-identity-verification.png',
  'pass2u-alternative': 'blog-pass2u-alternative.png',
  'regular-vs-digital-wallets': 'blog-regular-vs-digital-wallets.png',
  'the-best-digital-wallets-for-android': 'blog-the-best-digital-wallets-for-android.png',
  'the-best-digital-wallets-for-iphone': 'blog-the-best-digital-wallets-for-iphone.png',
  'the-best-event-ticket-apps': 'blog-best-event-ticket-apps.png',
  'the-ultimate-guide-to-the-safest-digital-wallet-app': 'blog-the-ultimate-guide-to-the-safest-digital-wallet-app.png',
  'tripcase-alternative': 'blog-tripcase-alternative.png',
  'tripit-alternative': 'blog-tripit-alternative.png',
  'tripsy-alternative-travel-app': 'blog-tripsy-alternative.png',
  'wanderlog-alternative': 'blog-wanderlog-alternative.png',
  'what-is-a-digital-drivers-license': 'blog-what-is-a-digital-drivers-license.png',
  'what-is-a-digital-wallet': 'blog-what-is-a-digital-wallet.png',
  'what-is-liveness-detection': 'blog-what-is-liveness-detection.png',
  'you-can-now-store-tickets-in-folio-wallet': 'blog-you-can-now-store-tickets-in-folio-wallet.png',
}

export function getBlogOgImageUrl(slug: string): string | undefined {
  const filename = BLOG_OG_IMAGE_BY_SLUG[slug]
  return filename ? getOgImageUrl(filename) : undefined
}

export const blogArticles: BlogArticle[] = sortArticlesByDate([
  // ===== 2024 ARTICLES =====
  // Q1 2024
  {
    category: 'Guides',
    date: 'Jan 15, 2024',
    title: 'What is a digital wallet?',
    description: 'Learn what a digital wallet is, how it works, and how to use one. Discover the benefits, security features, and types of digital wallets available for Android and iPhone.',
    slug: 'what-is-a-digital-wallet',
    image: blogWhatIsADigitalWallet,
  },
  {
    category: 'Research',
    date: 'Feb 8, 2024',
    title: 'The best digital wallets for iPhone in 2024',
    description: 'Discover the best digital wallet apps for iPhone. Compare Apple Wallet, Folio Wallet, Stocard, Curve, and Venmo to find the perfect wallet for your needs.',
    slug: 'the-best-digital-wallets-for-iphone',
    image: blogTheBestDigitalWalletsForIphone,
  },
  {
    category: 'Research',
    date: 'Mar 5, 2024',
    title: 'How to store and use loyalty cards on an iPhone',
    description: 'Learn how to store and use loyalty cards on your iPhone with digital wallets. Compare Apple Wallet, Stocard, and Folio Wallet to find the best solution for managing your loyalty cards.',
    slug: 'how-to-store-and-use-loyalty-cards-on-your-iphone',
    image: blogHowToStoreAndUseLoyaltyCardsOnYourIphone,
  },
  // Q2 2024
  {
    category: 'Research',
    date: 'Apr 12, 2024',
    title: 'Regular vs digital wallets: which is right for you?',
    description: 'Explore the differences between regular and digital wallets. Compare pros, cons, and features to choose the right wallet solution for your lifestyle.',
    slug: 'regular-vs-digital-wallets',
    image: blogRegularVsDigitalWallets,
  },
  {
    category: 'Research',
    date: 'May 3, 2024',
    title: 'The best digital wallets for Android in 2024',
    description: 'Discover the best digital wallet apps for Android. Compare Google Wallet, Folio Wallet, Stocard, Curve, and Venmo to find the perfect wallet for your needs.',
    slug: 'the-best-digital-wallets-for-android',
    image: blogTheBestDigitalWalletsForAndroid,
  },
  {
    category: 'Product',
    date: 'Jun 7, 2024',
    title: 'How to add and store your medical card and health insurance in digital wallet',
    description: "Learn how to store your medical card and health insurance in a digital wallet. Discover the benefits, security features, and how to manage family members' health documents.",
    slug: 'how-to-add-and-store-your-medical-card',
    image: blogHowToAddAndStoreYourMedicalCard,
  },
  // Q3 2024
  {
    category: 'Safety',
    date: 'Jul 18, 2024',
    title: 'Are digital wallets safe to use?',
    description: 'Explore the security features, risks, and best practices of digital wallets. Learn how to protect your digital wallet and recognize secure wallet apps.',
    slug: 'are-digital-wallets-safe',
    image: blogAreDigitalWalletsSafe,
  },
  {
    category: 'Safety',
    date: 'Aug 6, 2024',
    title: 'Can a digital wallet be hacked?',
    description: 'Learn about digital wallet security risks and how to protect yourself. Discover what makes a wallet legit and secure, and what to do if your wallet is compromised.',
    slug: 'can-a-digital-wallet-be-hacked',
    image: blogCanADigitalWalletBeHacked,
  },
  {
    category: 'Safety',
    date: 'Sep 10, 2024',
    title: 'The ultimate guide to the safest digital wallet app',
    description: 'Discover the safest digital wallet apps and learn how to choose the most secure wallet for your needs. Explore security features, best practices, and why digital wallet security matters.',
    slug: 'the-ultimate-guide-to-the-safest-digital-wallet-app',
    image: blogTheUltimateGuideToTheSafestDigitalWalletApp,
  },
  {
    category: 'Product',
    date: 'Sep 24, 2024',
    title: "What is a digital driver's license?",
    description: "Learn about digital driver's licenses and how to get one. Discover the benefits, security features, and where you can use a DDL in 2024.",
    slug: 'what-is-a-digital-drivers-license',
    image: blogWhatIsADigitalDriversLicense,
  },
  // Q4 2024
  {
    category: 'Product',
    date: 'Oct 2, 2024',
    title: 'Apple gift card add to wallet: a step-by-step guide',
    description: 'Learn how to add your Apple gift card to the Wallet app. Follow simple steps to streamline payments and track balances on your iPhone.',
    slug: 'apple-gift-card-add-to-wallet',
    image: blogAppleGiftCardAddToWallet,
  },
  {
    category: 'Research',
    date: 'Oct 22, 2024',
    title: 'Digital wallet apps for every need',
    description: 'Discover the best digital wallet apps for payments, document storage, and travel. Find the perfect app for your specific needs.',
    slug: 'digital-wallet-apps-for-every-need',
    image: blogDigitalWalletAppsForEveryNeed,
  },
  {
    category: 'Research',
    date: 'Nov 5, 2024',
    title: 'Best gift card wallet apps for hassle-free digital organization',
    description: 'Discover the best gift card wallet apps for organizing and securing your cards digitally. Compare features and find the perfect solution for managing gift cards.',
    slug: 'best-gift-card-wallet-apps',
    image: blogBestGiftCardWalletApps,
  },
  {
    category: 'Guides',
    date: 'Nov 19, 2024',
    title: 'How to secure your wallet on iPhone',
    description: 'Learn how to secure your digital wallet on iPhone with built-in features and best practices. Protect your cards, IDs, and documents.',
    slug: 'how-to-secure-your-wallet-on-iphone',
    image: blogHowToSecureYourWalletOnIphone,
  },
  {
    category: 'Research',
    date: 'Dec 3, 2024',
    title: 'Best digital wallet apps in Canada',
    description: 'Discover the best digital wallet apps available in Canada. Compare features, security, and use cases to find the perfect wallet for your needs.',
    slug: 'best-digital-wallet-apps-in-canada',
    image: blogBestDigitalWalletAppsInCanada,
  },
  // ===== 2025 ARTICLES =====
  // Q1 2025
  {
    category: 'Product',
    date: 'Jan 6, 2025',
    title: 'How to add gift cards to your wallet app',
    description: 'Managing physical gift cards can be a hassle. Learn how to store and organize your gift cards digitally in Folio Wallet with simple steps.',
    slug: 'how-to-add-gift-cards-to-your-wallet-app',
    image: blogHowToAddGiftCardsToYourWalletApp,
  },
  {
    category: 'Research',
    date: 'Jan 21, 2025',
    title: "TripCase alternative: The travel organizer you'll love",
    description: "TripCase is gone. Your next trip doesn't have to be chaos. Meet the app that keeps every flight, hotel, and document in one beautiful place.",
    slug: 'tripcase-alternative',
    image: blogTripCaseAlternative,
  },
  {
    category: 'Product',
    date: 'Feb 11, 2025',
    title: 'Document intelligence: AI-powered document processing explained',
    description: 'Document intelligence uses AI to automatically classify, extract, and verify information from documents. Learn how this technology streamlines business processes and improves compliance.',
    slug: 'document-intelligence',
    image: blogDocumentIntelligence,
  },
  {
    category: 'Research',
    date: 'Feb 25, 2025',
    title: "Pass2U alternative: A smarter way to organize your passes",
    description: "Pass2U extends Apple Wallet with custom cards. But what if you need more? Discover an app that organizes all your documents with real security.",
    slug: 'pass2u-alternative',
    image: blogPass2UAlternative,
  },
  {
    category: 'Guides',
    date: 'Mar 14, 2025',
    title: 'KYC and AML compliance: a complete guide for businesses',
    description: 'KYC (Know Your Customer) and AML (Anti-Money Laundering) requirements affect businesses across industries. Learn what these regulations require and how to build compliant verification processes.',
    slug: 'kyc-aml-compliance',
    image: blogKycAmlCompliance,
  },
  {
    category: 'Company',
    date: 'Mar 28, 2025',
    title: 'Albanian diaspora voter registration surges 525% with Folio Wallet',
    description: 'Albania successfully enfranchised its diaspora to register to vote using a secure digital wallet solution, with over 245,000 Albanians abroad approved to vote in the upcoming parliamentary elections.',
    slug: 'albanian-diaspora-voter-registration',
    image: blogAlbanianDiasporaVoterRegistration,
  },
  // Q2 2025
  {
    category: 'Research',
    date: 'Apr 8, 2025',
    title: "TripIt alternative: A smarter way to organize your travels",
    description: "TripIt keeps your itinerary in order. But what if you need more? Discover an app that stores your bookings, documents, and tickets in one secure place.",
    slug: 'tripit-alternative',
    image: blogTripItAlternative,
  },
  {
    category: 'Product',
    date: 'Apr 22, 2025',
    title: 'Face matching technology: how businesses verify identity online',
    description: "Face matching compares a live selfie to an ID photo to confirm identity. Learn how this technology works, where it's used, and what makes it different from face recognition.",
    slug: 'face-matching-technology',
    image: blogFaceMatchingTechnology,
  },
  {
    category: 'Research',
    date: 'May 6, 2025',
    title: "CheckMyTrip alternative: A smarter way to manage your travel",
    description: "CheckMyTrip organizes your bookings. But what about your passport, insurance, and event tickets? Discover an app that stores everything in one secure place.",
    slug: 'checkmytrip-alternative',
    image: blogCheckMyTripAlternative,
  },
  {
    category: 'Research',
    date: 'May 14, 2025',
    title: 'Best Apple Wallet Alternatives',
    description: 'Apple Wallet is great for tap-to-pay and boarding passes, but it has limitations. Discover five powerful iOS apps that fill Wallet\'s gaps: secure document storage, multi-card management, and automated trip planning.',
    slug: 'best-apple-wallet-alternatives',
    image: blogBestAppleWalletAlternatives,
  },
  {
    category: 'Research',
    date: 'May 26, 2025',
    title: 'The best Google Wallet alternatives you can install in 2025',
    description: 'Google Wallet is great, but it\'s not enough. Discover seven powerful alternatives that fill Wallet\'s gaps: secure document storage, multi-currency payments, and automated trip planning.',
    slug: 'best-google-wallet-alternatives',
    image: blogBestGoogleWalletAlternatives,
  },
  {
    category: 'Guides',
    date: 'Jun 9, 2025',
    title: 'Client onboarding best practices: digital vs traditional',
    description: 'Digital client onboarding transforms how businesses verify and activate new customers. Learn the key differences from traditional methods and best practices for implementing effective onboarding workflows.',
    slug: 'client-onboarding-best-practices',
    image: blogClientOnboardingBestPractices,
  },
  {
    category: 'Product',
    date: 'Jun 18, 2025',
    title: 'You can now store tickets in Folio Wallet',
    description: 'Many of you already use Folio Wallet as a convenient place to keep your cards and personal documents. Now you can also store all of your travel-related paperwork in the same space.',
    slug: 'you-can-now-store-tickets-in-folio-wallet',
    image: blogYouCanNowStoreTickets,
  },
  // Q3 2025
  {
    category: 'Product',
    date: 'Jul 1, 2025',
    title: 'Access your digital wallet anywhere',
    description: 'A simpler way to keep every document with you on iOS and Android',
    slug: 'access-your-digital-wallet-anywhere',
    image: blogAccessYourDigitalWalletAnywhere,
  },
  {
    category: 'Product',
    date: 'Oct 25, 2025',
    title: "The EU is giving everyone a digital ID wallet. Here's what that means.",
    description: "By 2026, every EU country must offer citizens a free digital identity wallet. Prove your age without showing your birth date, open bank accounts without photocopying your passport.",
    slug: 'eudi-wallet',
    image: blogEudiWallet,
  },
  {
    category: 'Product',
    date: 'Jul 18, 2025',
    title: 'How to share your travel plans with friends using a trip planner app',
    description: 'Planning a trip with others? Discover how trip planner apps make it easy to share itineraries, collaborate, and keep everyone in sync.',
    slug: 'how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app',
    image: blogHowToShareTravelPlans,
  },
  {
    category: 'Product',
    date: 'Jul 22, 2025',
    title: 'Flight tickets on iPhone',
    description: 'Keep your boarding passes organized and accessible. Discover the best ways to manage flight tickets on your iPhone.',
    slug: 'flight-tickets-on-iphone',
    image: blogFlightTicketsOnIphone,
  },
  {
    category: 'Research',
    date: 'Jul 24, 2025',
    title: 'The best event ticket apps',
    description: 'From concerts to conferences: discover apps that keep your tickets organized, accessible, and secure.',
    slug: 'the-best-event-ticket-apps',
    image: blogBestEventTicketApps,
  },
  {
    category: 'Research',
    date: 'Jul 29, 2025',
    title: 'Best apps to plan travel: 2025 guide',
    description: 'Planning a trip can be both exciting and stressful. These apps will save you time, money, and a lot of headaches.',
    slug: 'best-apps-to-plan-travel',
    image: blogBestAppsToPlanTravel,
  },
  {
    category: 'Research',
    date: 'Aug 5, 2025',
    title: "Tripsy plans your trip. But where do you keep your tickets?",
    description: "Tripsy is great for deciding what to do. But once you've booked flights, hotels, and activities, you need somewhere to store them.",
    slug: 'tripsy-alternative-travel-app',
    image: blogTripsyAlternative,
  },
  {
    category: 'Product',
    date: 'Aug 12, 2025',
    title: "Your driver's license is going digital. Here's what that actually means.",
    description: "Mobile driver's licenses are rolling out across the US. But this isn't just a photo on your phone. It's actually more private and secure than the plastic card in your wallet.",
    slug: 'mobile-drivers-license',
    image: blogMobileDriversLicense,
  },
  {
    category: 'Research',
    date: 'Aug 10, 2025',
    title: "10 travel hacks that actually work (and 3 that don't)",
    description: "Most travel tips are useless. These ten actually save time and money. Plus three popular hacks that sound good but rarely work.",
    slug: '10-travel-hacks-that-actually-work',
    image: blogTenTravelHacks,
  },
  {
    category: 'Research',
    date: 'Aug 20, 2025',
    title: "7 apps that actually help when you're traveling (and what each one does best)",
    description: "Every travel app claims to be essential. Here's an honest look at seven that solve real problems, what they're good at, and where they fall short.",
    slug: '7-useful-apps-for-planning-your-trip',
    image: blogSevenUsefulApps,
  },
  {
    category: 'Research',
    date: 'Sep 27, 2025',
    title: 'How age verification actually works online',
    description: "From buying wine online to signing up for apps, age checks are everywhere. Learn how different verification methods work, why some are more private than others, and what happens to your data.",
    slug: 'age-verification-requirements',
    image: blogAgeVerificationRequirements,
  },
  {
    category: 'Research',
    date: 'Sep 2, 2025',
    title: 'How to keep all your tickets and bookings in one app',
    description: 'Flights, trains, hotels, concerts: stop searching through emails. Keep all your travel tickets and bookings organized in one secure app.',
    slug: 'organize-tickets-bookings',
    image: blogOrganizeTicketsBookings,
  },
  {
    category: 'Research',
    date: 'Sep 16, 2025',
    title: "App in the Air shut down. Here's where frequent flyers are going instead.",
    description: "After years of tracking flights for millions of travelers, App in the Air is gone. If you're looking for a replacement that does even more, Folio Wallet is the answer.",
    slug: 'app-in-the-air-alternative',
    image: blogAppInTheAirAlternative,
  },
  {
    category: 'Research',
    date: 'Aug 23, 2025',
    title: "Wanderlog plans your trip. But where do you keep the actual tickets?",
    description: "Wanderlog is great for deciding what to do. But once you've booked flights, hotels, and activities, you need somewhere to keep them.",
    slug: 'wanderlog-alternative',
    image: blogWanderlogAlternative,
  },
  {
    category: 'Product',
    date: 'Sep 30, 2025',
    title: 'How liveness detection stops fraudsters from using your photo',
    description: "Someone has your photo. Can they use it to pass identity verification? With liveness detection, the answer is no. Learn how this technology tells the difference between you and a picture of you.",
    slug: 'what-is-liveness-detection',
    image: blogWhatIsLivenessDetection,
  },
  // Q4 2025
  {
    category: 'Safety',
    date: 'Oct 7, 2025',
    title: "Why even Folio can't see your documents",
    description: "Your documents in Folio are protected by a secret only you know. Without your Passkey or Recovery Code, no one can access your data, not even us.",
    slug: 'end-to-end-encryption',
    image: blogEndToEndEncryption,
  },
  {
    category: 'Safety',
    date: 'Sep 20, 2025',
    title: 'What happens to your face data after identity verification',
    description: "When you take a selfie for identity verification, where does that image go? Who sees it? How long is it kept? Here's what you should know about biometric data.",
    slug: 'biometric-data-privacy',
    image: blogBiometricDataPrivacy,
  },
  {
    category: 'Company',
    date: 'Sep 10, 2025',
    title: 'How governments are replacing paper documents with digital credentials',
    description: "What if you could vote from abroad, prove your age without showing your ID, or access government services without waiting in line? Digital credentials are making this happen.",
    slug: 'digital-credentials-government',
    image: blogDigitalCredentialsGovernment,
  },
  {
    category: 'Product',
    date: 'Oct 28, 2025',
    title: 'How NFC chip scanning verifies your passport in seconds',
    description: "Your passport has a chip that proves it's genuine. Learn how NFC scanning works, what it verifies, and why it's the most secure way to confirm document authenticity.",
    slug: 'nfc-identity-verification',
    image: blogNfcIdentityVerification,
  },
  {
    category: 'Safety',
    date: 'Sep 9, 2025',
    title: 'Why you need a digital copy of your passport',
    description: 'Discover the benefits of keeping a digital passport copy: instant access, emergency backup, faster check-ins, and secure storage. Essential for every traveler.',
    slug: 'digital-passport-copies',
    image: blogDigitalPassportCopies,
  },
  {
    category: 'Research',
    date: 'Apr 29, 2025',
    title: 'Best document scanning apps for iPhone and Android',
    description: 'Turn your phone into a powerful scanner. Discover the best apps to scan, store, and organize your documents securely.',
    slug: 'best-document-scanning-apps',
    image: blogBestDocumentScanningApps,
  },
  {
    category: 'Guides',
    date: 'Aug 7, 2025',
    title: 'The airport nightmare every parent knows (and how to avoid it)',
    description: "You're at security with two kids, a stroller, and four passports somewhere in your bag. There's a better way to travel with family.",
    slug: 'managing-family-travel-documents',
    image: blogManagingFamilyTravelDocuments,
  },
  {
    category: 'Research',
    date: 'Jun 25, 2025',
    title: 'Best ID scanner apps for Android and iPhone',
    description: 'Turn your phone into a secure ID scanner. Discover the best apps to digitize, store, and protect your identification documents.',
    slug: 'best-id-scanner-app',
    image: blogBestIdScannerApp,
  },
])

