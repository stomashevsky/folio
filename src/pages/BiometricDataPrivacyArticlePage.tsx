import { LocalizedLink } from '../components/ui'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import faceScanImage from '../assets/images/blog-biometric-face-scan.png'

export default function BiometricDataPrivacyArticlePage() {
  return (
    <BlogArticleLayout
      title="What happens to your face data after identity verification"
      description="When you take a selfie for identity verification, where does that image go? Who sees it? How long is it kept? Here's what you should know about biometric data and what to ask before sharing it."
      date="Aug 18, 2025"
      category="Safety"
      slug="biometric-data-privacy"
    >
      <ArticleParagraph>
        You're signing up for a new service, and they ask for a selfie. You hold up your phone, snap the photo, and wait for verification. But here's a question worth asking: what happens to that image of your face? Where does it go? Who can see it? And how long will it exist on someone else's servers?
      </ArticleParagraph>

      <ArticleImage 
        src={faceScanImage} 
        alt="Identity verification selfie screen: Position your face within the frame"
      />

      <ArticleParagraph>
        We're writing about this because Folio uses face matching for identity verification. When you verify your identity with us, we process your selfie to confirm you're the person on your ID document. That's biometric data, and it deserves special care. We think you should understand what happens to it, not just with us, but with any service that asks for your face.
      </ArticleParagraph>

      <ArticleH2>Why face data is different from other data</ArticleH2>

      <ArticleParagraph>
        If your password leaks, you change it. If your email address gets exposed, you can create a new one. But you can't change your face. Biometric data is permanent. Once it's out there, it's out there forever.
      </ArticleParagraph>

      <ArticleParagraph>
        Privacy laws recognize this. Under GDPR (the EU's privacy regulation), biometric data is classified as "special category" data, meaning it requires extra protection. Similar laws exist in California, Illinois, Brazil, and many other places. The rules are stricter because the stakes are higher.
      </ArticleParagraph>

      <ArticleParagraph>
        Here's what makes your selfie "biometric data" in legal terms: it's not just about storing a photo. It becomes biometric data when that photo is processed through systems that can identify you, like face matching or facial recognition. A photo sitting in a folder is just an image. That same photo run through face matching software is biometric data with special legal protections.
      </ArticleParagraph>

      <ArticleH2>Questions to ask before sharing your face</ArticleH2>

      <ArticleParagraph>
        Not all services handle biometric data responsibly. Before you take that selfie, here's what to consider:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Why do they need it?</strong> Face verification makes sense for opening a bank account or accessing sensitive information. It makes less sense for signing up to comment on a blog. If the service doesn't clearly explain why biometric verification is necessary, that's a red flag.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>What do they keep?</strong> Some services store your actual face image. Others convert it to a mathematical template that can't be reversed back into a photo. Templates are safer because even if they leak, no one can recreate your face from them. Ask what format they store and for how long.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Who processes it?</strong> Many services use third-party vendors for identity verification. That means your face data might travel to a company you've never heard of. Find out who handles your data and what protections they provide.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Can you delete it?</strong> Under GDPR and similar laws, you have the right to request deletion of your biometric data. A service that makes this difficult or impossible is either poorly designed or deliberately hiding something.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>What if they get hacked?</strong> Every company says they take security seriously. But breaches happen. Ask about encryption, access controls, and what happens to your data if the worst occurs.
      </ArticleParagraph>

      <ArticleH2>How responsible services handle your face data</ArticleH2>

      <ArticleParagraph>
        Good practices exist. Here's what to look for:
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Minimal collection.</strong> A responsible service captures only what's needed. If they're matching your selfie to your ID, they need one clear photo, not a video of you from multiple angles. More data isn't better; it's more risk.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Clear purpose.</strong> They tell you exactly why they need your face data and don't use it for anything else. Your verification selfie shouldn't end up training their AI or being analyzed for marketing insights.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Limited retention.</strong> Once verification is complete, the raw face image should be deleted. Some services keep it for days, others for years, and some forever. Shorter is better. The best services delete images immediately after processing and keep only the verification result.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Strong encryption.</strong> Your face data should be encrypted when it's sent over the internet and when it's stored. This protects it from interception and reduces damage if servers are breached.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Real consent.</strong> You should explicitly agree to biometric processing before it happens, not buried in a terms of service you never read. And you should be able to withdraw consent and request deletion whenever you want.
      </ArticleParagraph>

      <ArticleH2>How Folio handles your biometric data</ArticleH2>

      <ArticleParagraph>
        Since we ask for your face during identity verification, here's exactly what we do with it:
      </ArticleParagraph>

      <ArticleParagraph>
        When you take a selfie for verification, it's compared to the photo on your ID document to confirm you're the same person. This comparison produces a match score. We use that score to verify your identity, then delete the raw facial images. We don't keep your selfie sitting on a server indefinitely.
      </ArticleParagraph>

      <ArticleParagraph>
        We don't use your face data for anything except verification. We don't train AI models on it, we don't analyze it for insights, we don't share it with advertisers. The purpose is verification, period.
      </ArticleParagraph>

      <ArticleParagraph>
        All biometric processing happens with your explicit consent. You know exactly what's happening and why. And if you want your data deleted, you can request it, and we'll honor that request.
      </ArticleParagraph>

      <ArticleParagraph>
        We're transparent about this because we think everyone should be. If a service asks for your face and can't clearly explain what happens to it, consider whether you really need to use that service. Your biometric data is uniquely yours. It deserves to be treated with care. Learn more about how we handle identity verification in our <LocalizedLink to="/platform/liveness-check" className="underline hover:text-[#737373] transition-colors">liveness check</LocalizedLink> and <LocalizedLink to="/platform/face-match" className="underline hover:text-[#737373] transition-colors">face match</LocalizedLink> documentation.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
