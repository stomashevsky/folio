import blogAlbanianDiasporaVoterRegistration from '../assets/images/blog-albanian-diaspora-voter-registration.png'
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

export const blogArticles: BlogArticle[] = sortArticlesByDate([
  {
    category: 'Research',
    date: 'Nov 21, 2025',
    title: 'Best ID scanner apps for Android and iPhone',
    description: 'Turn your phone into a secure ID scanner. Discover the best apps to digitize, store, and protect your identification documents.',
    slug: 'best-id-scanner-app',
    image: blogBestIdScannerApp,
  },
  {
    category: 'Research',
    date: 'Nov 12, 2025',
    title: 'Best document scanning apps for iPhone and Android',
    description: 'Turn your phone into a powerful scanner. Discover the best apps to scan, store, and organize your documents securely.',
    slug: 'best-document-scanning-apps',
    image: blogBestDocumentScanningApps,
  },
  {
    category: 'Research',
    date: 'Sep 23, 2025',
    title: "Wanderlog alternative: The best app for organizing trips and documents",
    description: "Wanderlog helps plan activities. But what about your tickets, passports, and bookings? Discover an app that keeps everything secure and organized.",
    slug: 'wanderlog-alternative',
    image: blogWanderlogAlternative,
  },
  {
    category: 'Research',
    date: 'Sep 18, 2025',
    title: "CheckMyTrip alternative: A smarter way to manage your travel",
    description: "CheckMyTrip organizes your bookings. But what about your passport, insurance, and event tickets? Discover an app that stores everything in one secure place.",
    slug: 'checkmytrip-alternative',
    image: blogCheckMyTripAlternative,
  },
  {
    category: 'Research',
    date: 'Sep 16, 2025',
    title: "App in the Air alternative: The best option after shutdown",
    description: "App in the Air shut down in September 2024. If you relied on it for flight tracking, here's the modern alternative that organizes all your travel documents.",
    slug: 'app-in-the-air-alternative',
    image: blogAppInTheAirAlternative,
  },
  {
    category: 'Research',
    date: 'Sep 10, 2025',
    title: "Pass2U alternative: A smarter way to organize your passes",
    description: "Pass2U extends Apple Wallet with custom cards. But what if you need more? Discover an app that organizes all your documents with real security.",
    slug: 'pass2u-alternative',
    image: blogPass2UAlternative,
  },
  {
    category: 'Research',
    date: 'Sep 20, 2025',
    title: "Tripsy alternative: A smarter way to organize your travels",
    description: "Looking beyond Tripsy? Discover a travel app that keeps your documents secure, your itinerary clear, and your journey stress-free.",
    slug: 'tripsy-alternative-travel-app',
    image: blogTripsyAlternative,
  },
  {
    category: 'Research',
    date: 'Sep 12, 2025',
    title: "TripIt alternative: A smarter way to organize your travels",
    description: "TripIt keeps your itinerary in order. But what if you need more? Discover an app that stores your bookings, documents, and tickets in one secure place.",
    slug: 'tripit-alternative',
    image: blogTripItAlternative,
  },
  {
    category: 'Research',
    date: 'Sep 4, 2025',
    title: "TripCase alternative: The travel organizer you'll love",
    description: "TripCase is gone. Your next trip doesn't have to be chaos. Meet the app that keeps every flight, hotel, and document in one beautiful place.",
    slug: 'tripcase-alternative',
    image: blogTripCaseAlternative,
  },
  {
    category: 'Company',
    date: 'Mar 28, 2025',
    title: 'Albanian diaspora voter registration surges 525% with Folio Wallet',
    description: 'Albania successfully enfranchised its diaspora to register to vote using a secure digital wallet solution, with over 245,000 Albanians abroad approved to vote in the upcoming parliamentary elections.',
    slug: 'albanian-diaspora-voter-registration',
    image: blogAlbanianDiasporaVoterRegistration,
  },
  {
    category: 'Research',
    date: 'Nov 27, 2024',
    title: 'Best digital wallet apps in Canada',
    description: 'Discover the best digital wallet apps available in Canada. Compare features, security, and use cases to find the perfect wallet for your needs.',
    slug: 'best-digital-wallet-apps-in-canada',
    image: blogBestDigitalWalletAppsInCanada,
  },
  {
    category: 'Research',
    date: 'Nov 25, 2024',
    title: 'Digital wallet apps for every need',
    description: 'Discover the best digital wallet apps for payments, document storage, and travel. Find the perfect app for your specific needs.',
    slug: 'digital-wallet-apps-for-every-need',
    image: blogDigitalWalletAppsForEveryNeed,
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
    date: 'Nov 14, 2024',
    title: 'Best gift card wallet apps for hassle-free digital organization',
    description: 'Discover the best gift card wallet apps for organizing and securing your cards digitally. Compare features and find the perfect solution for managing gift cards.',
    slug: 'best-gift-card-wallet-apps',
    image: blogBestGiftCardWalletApps,
  },
  {
    category: 'Research',
    date: 'Nov 3, 2024',
    title: 'Regular vs digital wallets: which is right for you?',
    description: 'Explore the differences between regular and digital wallets. Compare pros, cons, and features to choose the right wallet solution for your lifestyle.',
    slug: 'regular-vs-digital-wallets',
    image: blogRegularVsDigitalWallets,
  },
  {
    category: 'Safety',
    date: 'Oct 29, 2024',
    title: 'Are digital wallets safe to use?',
    description: 'Explore the security features, risks, and best practices of digital wallets. Learn how to protect your digital wallet and recognize secure wallet apps.',
    slug: 'are-digital-wallets-safe',
    image: blogAreDigitalWalletsSafe,
  },
  {
    category: 'Safety',
    date: 'Oct 20, 2024',
    title: 'Can a digital wallet be hacked?',
    description: 'Learn about digital wallet security risks and how to protect yourself. Discover what makes a wallet legit and secure, and what to do if your wallet is compromised.',
    slug: 'can-a-digital-wallet-be-hacked',
    image: blogCanADigitalWalletBeHacked,
  },
  {
    category: 'Safety',
    date: 'Oct 9, 2024',
    title: 'The ultimate guide to the safest digital wallet app',
    description: 'Discover the safest digital wallet apps and learn how to choose the most secure wallet for your needs. Explore security features, best practices, and why digital wallet security matters.',
    slug: 'the-ultimate-guide-to-the-safest-digital-wallet-app',
    image: blogTheUltimateGuideToTheSafestDigitalWalletApp,
  },
  {
    category: 'Product',
    date: 'Sep 27, 2024',
    title: "What is a digital driver's license?",
    description: "Learn about digital driver's licenses and how to get one. Discover the benefits, security features, and where you can use a DDL in 2024.",
    slug: 'what-is-a-digital-drivers-license',
    image: blogWhatIsADigitalDriversLicense,
  },
  {
    category: 'Product',
    date: 'Sep 9, 2024',
    title: 'How to add and store your medical card and health insurance in digital wallet',
    description: "Learn how to store your medical card and health insurance in a digital wallet. Discover the benefits, security features, and how to manage family members' health documents.",
    slug: 'how-to-add-and-store-your-medical-card',
    image: blogHowToAddAndStoreYourMedicalCard,
  },
  {
    category: 'Research',
    date: 'Sep 5, 2024',
    title: 'The best digital wallets for Android in 2024',
    description: 'Discover the best digital wallet apps for Android. Compare Google Wallet, Folio Wallet, Stocard, Curve, and Venmo to find the perfect wallet for your needs.',
    slug: 'the-best-digital-wallets-for-android',
    image: blogTheBestDigitalWalletsForAndroid,
  },
  {
    category: 'Research',
    date: 'Sep 4, 2024',
    title: 'How to store and use loyalty cards on an iPhone',
    description: 'Learn how to store and use loyalty cards on your iPhone with digital wallets. Compare Apple Wallet, Stocard, and Folio Wallet to find the best solution for managing your loyalty cards.',
    slug: 'how-to-store-and-use-loyalty-cards-on-your-iphone',
    image: blogHowToStoreAndUseLoyaltyCardsOnYourIphone,
  },
  {
    category: 'Research',
    date: 'Sep 1, 2024',
    title: 'The best digital wallets for iPhone in 2024',
    description: 'Discover the best digital wallet apps for iPhone. Compare Apple Wallet, Folio Wallet, Stocard, Curve, and Venmo to find the perfect wallet for your needs.',
    slug: 'the-best-digital-wallets-for-iphone',
    image: blogTheBestDigitalWalletsForIphone,
  },
  {
    category: 'Guides',
    date: 'Aug 27, 2024',
    title: 'What is a digital wallet?',
    description: 'Learn what a digital wallet is, how it works, and how to use one. Discover the benefits, security features, and types of digital wallets available for Android and iPhone.',
    slug: 'what-is-a-digital-wallet',
    image: blogWhatIsADigitalWallet,
  },
  {
    category: 'Product',
    date: 'Oct 21, 2024',
    title: 'Apple gift card add to wallet: a step-by-step guide',
    description: 'Learn how to add your Apple gift card to the Wallet app. Follow simple steps to streamline payments and track balances on your iPhone.',
    slug: 'apple-gift-card-add-to-wallet',
    image: blogAppleGiftCardAddToWallet,
  },
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
    date: 'Aug 20, 2025',
    title: '7 useful apps for planning your trip',
    description: 'From itineraries to expenses: seven apps that make travel planning effortless and keep everything organized.',
    slug: '7-useful-apps-for-planning-your-trip',
    image: blogSevenUsefulApps,
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
    date: 'Jul 24, 2025',
    title: 'The best event ticket apps',
    description: 'From concerts to conferences: discover apps that keep your tickets organized, accessible, and secure.',
    slug: 'the-best-event-ticket-apps',
    image: blogBestEventTicketApps,
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
    category: 'Product',
    date: 'Jul 18, 2025',
    title: 'How to share your travel plans with friends using a trip planner app',
    description: 'Planning a trip with others? Discover how trip planner apps make it easy to share itineraries, collaborate, and keep everyone in sync.',
    slug: 'how-to-share-your-travel-plans-with-friends-using-a-trip-planner-app',
    image: blogHowToShareTravelPlans,
  },
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
    date: 'Jun 18, 2025',
    title: 'You can now store tickets in Folio Wallet',
    description: 'Many of you already use Folio Wallet as a convenient place to keep your cards and personal documents. Now you can also store all of your travel-related paperwork in the same space.',
    slug: 'you-can-now-store-tickets-in-folio-wallet',
    image: blogYouCanNowStoreTickets,
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
    category: 'Research',
    date: 'May 14, 2025',
    title: 'Best Apple Wallet Alternatives',
    description: 'Apple Wallet is great for tap-to-pay and boarding passes, but it has limitations. Discover five powerful iOS apps that fill Wallet\'s gaps: secure document storage, multi-card management, and automated trip planning.',
    slug: 'best-apple-wallet-alternatives',
    image: blogBestAppleWalletAlternatives,
  },
  {
    category: 'Research',
    date: 'Aug 18, 2025',
    title: '10 travel hacks that actually work',
    description: 'Simple, practical tips that make travel smoother. Tested by real travelers. No fluff. Just results.',
    slug: '10-travel-hacks-that-actually-work',
    image: blogTenTravelHacks,
  },
])

