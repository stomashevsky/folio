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

export type BlogCategory = 'All' | 'Company' | 'Research' | 'Product' | 'Safety'

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
    category: 'Product',
    date: 'Nov 21, 2025',
    title: 'Best ID scanner apps for Android and iPhone',
    description: 'Turn your phone into a secure ID scanner. Discover the best apps to digitize, store, and protect your identification documents.',
    slug: 'best-id-scanner-app',
    image: blogBestIdScannerApp,
  },
  {
    category: 'Product',
    date: 'Nov 12, 2025',
    title: 'Best document scanning apps for iPhone and Android',
    description: 'Turn your phone into a powerful scanner. Discover the best apps to scan, store, and organize your documents securely.',
    slug: 'best-document-scanning-apps',
    image: blogBestDocumentScanningApps,
  },
  {
    category: 'Product',
    date: 'Sep 23, 2025',
    title: "Wanderlog alternative: The best app for organizing trips and documents",
    description: "Wanderlog helps plan activities. But what about your tickets, passports, and bookings? Discover an app that keeps everything secure and organized.",
    slug: 'wanderlog-alternative',
    image: blogWanderlogAlternative,
  },
  {
    category: 'Product',
    date: 'Sep 18, 2025',
    title: "CheckMyTrip alternative: A smarter way to manage your travel",
    description: "CheckMyTrip organizes your bookings. But what about your passport, insurance, and event tickets? Discover an app that stores everything in one secure place.",
    slug: 'checkmytrip-alternative',
    image: blogCheckMyTripAlternative,
  },
  {
    category: 'Product',
    date: 'Sep 16, 2025',
    title: "App in the Air alternative: The best option after shutdown",
    description: "App in the Air shut down in September 2024. If you relied on it for flight tracking, here's the modern alternative that organizes all your travel documents.",
    slug: 'app-in-the-air-alternative',
    image: blogAppInTheAirAlternative,
  },
  {
    category: 'Product',
    date: 'Sep 10, 2025',
    title: "Pass2U alternative: A smarter way to organize your passes",
    description: "Pass2U extends Apple Wallet with custom cards. But what if you need more? Discover an app that organizes all your documents with real security.",
    slug: 'pass2u-alternative',
    image: blogPass2UAlternative,
  },
  {
    category: 'Product',
    date: 'Sep 2, 2025',
    title: "Tripsy alternative: A smarter way to organize your travels",
    description: "Looking beyond Tripsy? Discover a travel app that keeps your documents secure, your itinerary clear, and your journey stress-free.",
    slug: 'tripsy-alternative-travel-app',
    image: blogTripsyAlternative,
  },
  {
    category: 'Product',
    date: 'Sep 8, 2025',
    title: "TripIt alternative: A smarter way to organize your travels",
    description: "TripIt keeps your itinerary in order. But what if you need more? Discover an app that stores your bookings, documents, and tickets in one secure place.",
    slug: 'tripit-alternative',
    image: blogTripItAlternative,
  },
  {
    category: 'Product',
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
    category: 'Company',
    date: 'Feb 15, 2025',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Research',
    date: 'Jan 22, 2025',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Product',
    date: 'Aug 20, 2025',
    title: '7 useful apps for planning your trip',
    description: 'From itineraries to expenses: seven apps that make travel planning effortless and keep everything organized.',
    slug: '7-useful-apps-for-planning-your-trip',
    image: blogSevenUsefulApps,
  },
  {
    category: 'Product',
    date: 'Dec 10, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Safety',
    date: 'Nov 5, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Company',
    date: 'Oct 18, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Research',
    date: 'Sep 3, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Product',
    date: 'Aug 14, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Company',
    date: 'Jul 7, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Safety',
    date: 'Jun 20, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
  {
    category: 'Research',
    date: 'May 12, 2024',
    title: 'Short and clear engaging headline for an article',
    description: 'Add a concise value statement that captures reader interest and previews content value. Focus on benefits while keeping it under two lines. Align with your blog categories.',
  },
])

