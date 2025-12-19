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
import blogTripItAlternative from '../assets/images/blog-tripit-alternative.png'
import blogPass2UAlternative from '../assets/images/blog-pass2u-alternative.png'
import blogAppInTheAirAlternative from '../assets/images/blog-app-in-the-air-alternative.png'
import blogCheckMyTripAlternative from '../assets/images/blog-checkmytrip-alternative.png'
import blogWanderlogAlternative from '../assets/images/blog-wanderlog-alternative.png'
import blogBestDocumentScanningApps from '../assets/images/blog-best-document-scanning-apps.png'
import blogBestIdScannerApp from '../assets/images/blog-best-id-scanner-app.png'
import blogTenTravelHacks from '../assets/images/blog-10-travel-hacks-that-actually-work.png'
import blogBestAppsToPlanTravel from '../assets/images/blog-best-apps-to-plan-travel.png'
import blogBestEventTicketApps from '../assets/images/blog-best-event-ticket-apps.png'
import blogFlightTicketsOnIphone from '../assets/images/blog-flight-tickets-on-iphone.png'
import blogHowToShareTravelPlans from '../assets/images/blog-how-to-share-travel-plans.png'
import blogYouCanNowStoreTickets from '../assets/images/blog-you-can-now-store-tickets-in-folio-wallet.png'
import blogBestGoogleWalletAlternatives from '../assets/images/blog-best-google-wallet-alternatives.png'
import blogBestAppleWalletAlternatives from '../assets/images/blog-best-apple-wallet-alternatives.png'
import blogAccessYourDigitalWalletAnywhere from '../assets/images/blog-access-your-digital-wallet-anywhere.png'
import blogBestDigitalWalletAppsInCanada from '../assets/images/blog-best-digital-wallet-apps-in-canada.png'
import blogDigitalWalletAppsForEveryNeed from '../assets/images/blog-digital-wallet-apps-for-every-need.png'
import blogBestGiftCardWalletApps from '../assets/images/blog-best-gift-card-wallet-apps.png'
import blogRegularVsDigitalWallets from '../assets/images/blog-regular-vs-digital-wallets.png'
import blogAppleGiftCardAddToWallet from '../assets/images/blog-apple-gift-card-add-to-wallet.png'
import blogHowToAddAndStoreYourMedicalCard from '../assets/images/blog-how-to-add-and-store-your-medical-card.png'
import blogHowToStoreAndUseLoyaltyCardsOnYourIphone from '../assets/images/blog-how-to-store-and-use-loyalty-cards-on-your-iphone.png'
import blogWhatIsADigitalWallet from '../assets/images/blog-what-is-a-digital-wallet.png'

export type BlogCategory = 'All' | 'Company' | 'Product' | 'Guides' | 'Research' | 'Safety' | 'Business'

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
  'access-your-digital-wallet-anywhere': 'blog-access-your-digital-wallet-anywhere.png',
  'age-verification-requirements': 'blog-age-verification-requirements.png',
  'albanian-diaspora-voter-registration': 'blog-albanian-diaspora-voter-registration.png',
  'app-in-the-air-alternative': 'blog-app-in-the-air-alternative.png',
  'apple-gift-card-add-to-wallet': 'blog-apple-gift-card-add-to-wallet.png',
  'best-apple-wallet-alternatives': 'blog-best-apple-wallet-alternatives.png',
  'best-apps-to-plan-travel': 'blog-best-apps-to-plan-travel.png',
  'best-digital-wallet-apps-in-canada': 'blog-best-digital-wallet-apps-in-canada.png',
  'best-document-scanning-apps': 'blog-best-document-scanning-apps.png',
  'best-gift-card-wallet-apps': 'blog-best-gift-card-wallet-apps.png',
  'best-google-wallet-alternatives': 'blog-best-google-wallet-alternatives.png',
  'best-id-scanner-app': 'blog-best-id-scanner-app.png',
  'biometric-data-privacy': 'blog-biometric-data-privacy.png',
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
  'how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app': 'blog-how-to-share-travel-plans.png',
  'how-to-store-and-use-loyalty-cards-on-your-iphone': 'blog-how-to-store-and-use-loyalty-cards-on-your-iphone.png',
  'kyc-aml-compliance': 'blog-kyc-aml-compliance.png',
  'managing-family-travel-documents': 'blog-managing-family-travel-documents.png',
  'mobile-drivers-license': 'blog-mobile-drivers-license.png',
  'nfc-identity-verification': 'blog-nfc-identity-verification.png',
  'pass2u-alternative': 'blog-pass2u-alternative.png',
  'regular-vs-digital-wallets': 'blog-regular-vs-digital-wallets.png',
  'the-best-event-ticket-apps': 'blog-best-event-ticket-apps.png',
  'tripcase-alternative': 'blog-tripcase-alternative.png',
  'tripit-alternative': 'blog-tripit-alternative.png',
  'wanderlog-alternative': 'blog-wanderlog-alternative.png',
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
    category: 'Product',
    date: 'Jun 7, 2024',
    title: 'How to store your medical card in a digital wallet',
    description: "Learn how to store your medical card and health insurance in a digital wallet. Discover the benefits, security features, and how to manage family members' health documents.",
    slug: 'how-to-add-and-store-your-medical-card',
    image: blogHowToAddAndStoreYourMedicalCard,
  },
  // Q3 2024
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
    category: 'Research',
    date: 'Jan 21, 2025',
    title: "TripCase alternative: The travel organizer you'll love",
    description: "TripCase is gone. Your next trip doesn't have to be chaos. Meet the app that keeps every flight, hotel, and document in one beautiful place.",
    slug: 'tripcase-alternative',
    image: blogTripCaseAlternative,
  },
  {
    category: 'Business',
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
    category: 'Business',
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
    category: 'Business',
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
    title: 'Best Apple Wallet alternatives',
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
    category: 'Business',
    date: 'Jun 9, 2025',
    title: 'Client onboarding best practices: digital vs traditional',
    description: 'Digital client onboarding transforms how businesses verify and activate new customers. Learn the key differences from traditional methods and best practices for implementing effective onboarding workflows.',
    slug: 'client-onboarding-best-practices',
    image: blogClientOnboardingBestPractices,
  },
  {
    category: 'Product',
    date: 'Jun 18, 2025',
    title: "Bus, train, concert. Three tickets from three apps. Where's the barcode?",
    description: "Real trips have tickets scattered everywhere. Here's how to stop searching at every gate.",
    slug: 'you-can-now-store-tickets-in-folio-wallet',
    image: blogYouCanNowStoreTickets,
  },
  // Q3 2025
  {
    category: 'Product',
    date: 'Jul 1, 2025',
    title: 'One app for your passport, tickets, and everything in between',
    description: "Your passport is a PDF. Your boarding pass is in email. Your hotel confirmation is a screenshot. Here's a better way.",
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
    title: "Your friend booked the hotel. Now they're stuck in traffic. Do you have the confirmation?",
    description: "Group trips fall apart when one person has all the bookings. Here's how to make sure everyone has access to everything.",
    slug: 'how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app',
    image: blogHowToShareTravelPlans,
  },
  {
    category: 'Product',
    date: 'Jul 22, 2025',
    title: 'You have 30 seconds to find your boarding pass. Where is it?',
    description: "The gate is closing, your phone has 47 PDFs, and the barcode is somewhere. Here's how to never lose a boarding pass again.",
    slug: 'flight-tickets-on-iphone',
    image: blogFlightTicketsOnIphone,
  },
  {
    category: 'Research',
    date: 'Jul 24, 2025',
    title: 'Where did I put that ticket? (The event ticket organization problem)',
    description: 'Concert in Ticketmaster, conference badge in email, theme park as a screenshot. Here\'s how to stop losing tickets.',
    slug: 'the-best-event-ticket-apps',
    image: blogBestEventTicketApps,
  },
  {
    category: 'Research',
    date: 'Jul 29, 2025',
    title: 'The only travel apps you actually need (and which to skip)',
    description: "Most travel app lists include 20 apps you'll never use. Here are the ones that solve real problems.",
    slug: 'best-apps-to-plan-travel',
    image: blogBestAppsToPlanTravel,
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
    category: 'Business',
    date: 'Sep 27, 2025',
    title: 'How age verification actually works online',
    description: "From buying wine online to signing up for apps, age checks are everywhere. Learn how different verification methods work, why some are more private than others, and what happens to your data.",
    slug: 'age-verification-requirements',
    image: blogAgeVerificationRequirements,
  },
  {
    category: 'Research',
    date: 'Jul 8, 2025',
    title: 'How to keep all your tickets and bookings in one app',
    description: 'Flights, trains, hotels, concerts: stop searching through emails. Keep all your travel tickets and bookings organized in one secure app.',
    slug: 'organize-tickets-bookings',
    image: blogOrganizeTicketsBookings,
  },
  {
    category: 'Research',
    date: 'Aug 26, 2025',
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
    category: 'Business',
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
    date: 'Aug 18, 2025',
    title: 'What happens to your face data after identity verification',
    description: "When you take a selfie for identity verification, where does that image go? Who sees it? How long is it kept? Here's what you should know about biometric data.",
    slug: 'biometric-data-privacy',
    image: blogBiometricDataPrivacy,
  },
  {
    category: 'Company',
    date: 'Jul 14, 2025',
    title: 'How governments are replacing paper documents with digital credentials',
    description: "What if you could vote from abroad, prove your age without showing your ID, or access government services without waiting in line? Digital credentials are making this happen.",
    slug: 'digital-credentials-government',
    image: blogDigitalCredentialsGovernment,
  },
  {
    category: 'Business',
    date: 'Oct 28, 2025',
    title: 'How NFC chip scanning verifies your passport in seconds',
    description: "Your passport has a chip that proves it's genuine. Learn how NFC scanning works, what it verifies, and why it's the most secure way to confirm document authenticity.",
    slug: 'nfc-identity-verification',
    image: blogNfcIdentityVerification,
  },
  {
    category: 'Safety',
    date: 'Jun 3, 2025',
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
    title: 'Your wallet got stolen abroad. Do you have a copy of your license?',
    description: "Nobody thinks about digital ID copies until they need one. Here are the situations where you'll thank yourself for having them.",
    slug: 'best-id-scanner-app',
    image: blogBestIdScannerApp,
  },
])

