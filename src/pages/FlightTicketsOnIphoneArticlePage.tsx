import BlogArticleLayout from '../components/ui/BlogArticleLayout'
import { ArticleH2, ArticleParagraph } from '../components/ui'
import { Link } from 'react-router-dom'

export default function FlightTicketsOnIphoneArticlePage() {
  return (
    <BlogArticleLayout
      title="Flight tickets on iPhone"
      description="Keep your boarding passes organized and accessible. Discover the best ways to manage flight tickets on your iPhone."
      date="Jul 22, 2025"
      category="Product"
      slug="flight-tickets-on-iphone"
    >
      <ArticleParagraph>
        Your flight ticket arrives in an email. You download the PDF. Take a screenshot. Forward it to yourself. By the time you reach the airport, it's buried somewhere on your iPhone. Your boarding pass should be easy to find. Ready when you need it. Accessible even when you're rushing through security.
      </ArticleParagraph>

      <ArticleH2>
        The best ways to manage flight tickets on your iPhone
      </ArticleH2>

      <ArticleParagraph>
        <strong>Apple Wallet</strong> is built into your iPhone. Double-tap the side button or power button to access your boarding pass instantly. Even when your phone is locked. Many airlines automatically add boarding passes to Wallet when you check in. It updates automatically with gate changes and flight status. The limitation: not all airlines support Wallet. And if you have tickets from multiple airlines, they're scattered across different apps. There's no search or organization. Best for quick access to compatible airline tickets. Works great if you mostly fly with Wallet-supported airlines.
      </ArticleParagraph>

      <ArticleParagraph>
        Most major airlines have their own apps. United. Delta. American. British Airways. Each stores your tickets for flights booked directly with them. These apps show your upcoming flights, check-in reminders, and gate information. Some even send push notifications for delays and gate changes. The problem: you end up with multiple apps. One for each airline you fly. There's no single place to see all your trips. Searching across apps is tedious. Best if you only fly with one or two airlines and don't mind switching between apps.
      </ArticleParagraph>

      <ArticleParagraph>
        Your tickets arrive as PDF attachments in email. You can keep them there. Search your inbox when you need one. It works, but it's messy. Tickets mix with other emails. Finding the right one takes time. Opening PDFs isn't fast. And if you're offline, attachments might not load. Best only if you have very few flights and don't mind digging through email.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong><Link to="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Folio Wallet</Link></strong> accepts flight tickets from anywhere. Forward an email. Upload a PDF. Take a photo. It extracts the details and creates a clean, searchable ticket. All your flights live in one timeline. Past trips. Upcoming journeys. Multiple airlines. You can search by date, airline, or destination. Everything works offline. It also stores your travel documents. Passports. IDs. Hotel bookings. Travel insurance. All in one secure, encrypted place. Best for anyone who wants all flights organized in one place, regardless of which airline or booking site you used.
      </ArticleParagraph>

      <ArticleParagraph>
        At the airport, every second counts. You don't want to search through emails or switch between apps. You want your boarding pass ready. The right app keeps everything organized. You can see your upcoming flights at a glance. Access past tickets for expense reports. Find any trip quickly. It's not just about convenience. It's about peace of mind. Knowing your ticket is there when you need it. If you only fly occasionally and always with the same airline, their app might be enough. If you want quick access from your lock screen, use Apple Wallet. But if you fly with multiple airlines, need to organize past and future trips, or want everything in one searchable place, Folio Wallet gives you that flexibility. Your iPhone is powerful. Your flight tickets should be just as powerful. Organized. Accessible. Ready when you are.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
