import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import { Link } from 'react-router-dom'
import idScannerImage from '../assets/images/blog-id-scanner-folio.png'

export default function BestIdScannerAppArticlePage() {
  return (
    <BlogArticleLayout
      title="Your wallet got stolen abroad. Do you have a copy of your license?"
      description="Nobody thinks about digital ID copies until they need one. Here are the situations where you'll thank yourself for having them."
      date="Jun 25, 2025"
      category="Research"
      slug="best-id-scanner-app"
    >
      <ArticleParagraph>
        You're at the car rental counter in Barcelona. Your wallet was stolen from your bag on the metro. The rental is prepaid, the car is waiting, but they need to see your driver's license. You don't have it. The physical card is gone.
      </ArticleParagraph>

      <ArticleParagraph>
        If you had a digital copy on your phone, you could show them. Many rental companies accept a clear scan for pickup, especially when you can also show a police report. Without one, you're stuck calling banks, canceling cards, and figuring out how to get around a foreign city without a car.
      </ArticleParagraph>

      <ArticleH2>When you'll need a digital ID copy</ArticleH2>

      <ArticleParagraph>
        The scenarios are more common than you'd think. Hotels often want a passport copy at check-in. Instead of handing over your actual passport (which you then need to remember to retrieve), you can show a digital copy and keep the original locked in the room safe. Some hotels will accept the scan; others will still want the physical document, but at least you have options.
      </ArticleParagraph>

      <ArticleParagraph>
        Online applications increasingly require ID uploads. Bank accounts, government services, visa applications, apartment rentals. Having a clean, readable scan ready means you're not scrambling to take a photo with your phone camera at the last minute.
      </ArticleParagraph>

      <ArticleParagraph>
        Emergencies are the worst time to realize you don't have a copy. If you need to prove your identity to police, a hospital, or an embassy, a digital copy can help while you sort out replacing the physical document. It's not always accepted as a legal substitute, but it's better than nothing when you're stuck.
      </ArticleParagraph>

      <ArticleImage
        src={idScannerImage}
        alt="Folio app scanning passport photo page and ID card with automatic edge detection and clear capture instructions"
      />

      <ArticleH2>Why a regular photo isn't enough</ArticleH2>

      <ArticleParagraph>
        Take a photo of your driver's license with your phone camera right now. Look at it. There's probably glare from the overhead light. The edges aren't straight. Part of the text is in shadow. The holographic security features create weird reflections. When someone needs to read the license number or verify the expiry date, they're squinting at a blurry image.
      </ArticleParagraph>

      <ArticleParagraph>
        Scanner apps fix this. They detect the document edges automatically, correct the perspective so everything is rectangular, adjust the lighting to remove shadows, and enhance contrast so text is readable. The MRZ code at the bottom of your passport (those two lines of letters and numbers) needs to be machine-readable. A good scan makes it so; a photo usually doesn't.
      </ArticleParagraph>

      <ArticleH2>Where not to store your ID scans</ArticleH2>

      <ArticleParagraph>
        Your camera roll is the worst place. The scan gets buried among thousands of photos. No security: anyone who picks up your unlocked phone can scroll through. And if your phone is backed up to cloud photos, your ID is now sitting on a server, unencrypted.
      </ArticleParagraph>

      <ArticleParagraph>
        Emailing scans to yourself is common but risky. That email sits in your inbox forever, searchable. If your email account is compromised, so is your ID. Same problem with unencrypted cloud drives: convenient but exposed.
      </ArticleParagraph>

      <ArticleH2>A better approach</ArticleH2>

      <ArticleParagraph>
        <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Folio</Link> is built for this. Point your camera at your passport or ID card, and it captures a clean scan with automatic edge detection. The app extracts key details: your name, document number, expiry date. Everything is encrypted on your device. Biometric lock means even if someone has your phone, they can't access your documents.
      </ArticleParagraph>

      <ArticleParagraph>
        Your IDs are organized separately from your photos. Passport, driver's license, national ID, residence permit: each has its own card with the important information visible. When you need to show one, you open the app, authenticate with Face ID or fingerprint, and there it is.
      </ArticleParagraph>

      <ArticleParagraph>
        Works offline. No internet required to access your documents. Useful when you're abroad without data, in airplane mode, or somewhere with poor connectivity. The scan is on your phone, not on a server you need to reach.
      </ArticleParagraph>

      <ArticleParagraph>
        Spend five minutes scanning your IDs now. The next time you're at a counter, a border, or an emergency, you'll have a backup that might save hours of frustration.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
