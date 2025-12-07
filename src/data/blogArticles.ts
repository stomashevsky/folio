import blogAlbanianDiasporaVoterRegistration from '../assets/images/blog-albanian-diaspora-voter-registration.png'

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
    category: 'Company',
    date: 'Mar 28, 2025',
    title: 'Albanian diaspora voter registration surges 525% with Folio Digital Wallet',
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

