import { LocalizedLink } from '../components/ui'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import ageVerificationFlow from '../assets/images/blog-age-verification-flow.png'

export default function AgeVerificationRequirementsArticlePage() {
  return (
    <BlogArticleLayout
      title="How age verification actually works online"
      description="From buying wine online to signing up for apps, age checks are everywhere. Learn how different verification methods work, why some are more private than others, and what happens to your data."
      date="Sep 27, 2025"
      category="Business"
      slug="age-verification-requirements"
    >
      <ArticleParagraph>
        You've probably clicked "I am 18 or older" hundreds of times without thinking about it. But that's changing. Governments around the world are pushing for real age verification, not just a button click. Whether you're buying alcohol online, signing up for a new app, or accessing certain websites, you might soon need to actually prove your age.
      </ArticleParagraph>

      <ArticleParagraph>
        This isn't just about rules and regulations. It's about how you'll prove who you are online while keeping your personal information safe. Here's what you need to know about how age verification works, what methods exist, and which ones actually protect your privacy.
      </ArticleParagraph>

      <ArticleImage 
        src={ageVerificationFlow} 
        alt="Age verification flow in Folio: verify your age screen, face verification with checklist, and document selection with passport and driving licence options"
      />

      <ArticleH2>Why age verification is getting serious</ArticleH2>

      <ArticleParagraph>
        The "click to confirm" approach never really worked. Anyone could lie about their age, and everyone knew it. Now regulators are requiring actual verification for gambling sites, alcohol delivery, adult content, and increasingly, social media. The UK's Online Safety Act, the EU's Digital Services Act, and new laws in US states all push for verification methods that provide real confidence, not just a checkbox.
      </ArticleParagraph>

      <ArticleParagraph>
        For users, this means more friction when accessing age-restricted services. But it also means more protection for young people online. The challenge is finding verification methods that work without creating massive privacy risks or excluding legitimate users.
      </ArticleParagraph>

      <ArticleH2>The five ways to verify age online</ArticleH2>

      <ArticleParagraph>
        <strong>Self-declaration</strong> is what you're used to: clicking a button or entering a birth date. It's fast and easy, but it proves nothing. Regulators increasingly reject this as insufficient. If a service still relies only on self-declaration, they're either in an unregulated space or taking a risk.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Database checks</strong> verify your information against existing records like credit bureaus or voter rolls. You enter your name, address, and birth date; the system checks if it matches someone real. This works well if you have a credit history, but young adults and people new to a country often can't be verified this way.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Document verification</strong> means uploading your ID, passport, or driver's license. The service scans the document, extracts your birth date, and often matches your face to the photo. This provides high confidence but raises obvious privacy concerns: do you really want to give your passport to every website?
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Face-based age estimation</strong> uses AI to guess your age from a selfie. You don't upload any documents; the system just estimates whether you look old enough. It's quick and doesn't reveal your identity, but it's less accurate. Someone who looks young might get rejected even if they're 30, while a mature-looking 16-year-old might slip through.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Reusable age credentials</strong> are the privacy-focused option. You verify your age once with a trusted provider, then receive a digital credential that proves "this person is over 18" without revealing your name, birth date, or any other details. Each time you need to prove your age, you share just that one fact.
      </ArticleParagraph>

      <ArticleH2>Privacy tradeoffs you should know about</ArticleH2>

      <ArticleParagraph>
        Here's the uncomfortable truth: most age verification creates a record of what you're trying to access. If you upload your passport to verify age on an adult website, that site now has your identity linked to your visit. Database checks create logs. Even face scans can be stored.
      </ArticleParagraph>

      <ArticleParagraph>
        This is why privacy advocates push for anonymous age credentials. With this approach, the verification provider confirms your age but doesn't know which services you're accessing. The service confirms you're old enough but doesn't learn your identity. No one has the complete picture.
      </ArticleParagraph>

      <ArticleParagraph>
        When choosing how to verify your age, consider: what information am I sharing? Who stores it? Can they link my identity to my activity? The answers vary dramatically between methods.
      </ArticleParagraph>

      <ArticleH2>Where you'll encounter age verification</ArticleH2>

      <ArticleParagraph>
        <strong>Gambling and gaming</strong> have the strictest requirements. Online casinos and betting sites in most countries must verify your identity before you can play, not just your age. This typically means full document verification plus address confirmation. Video games with loot boxes are increasingly included in these rules.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Alcohol and tobacco delivery</strong> requires verification at checkout and often again at delivery. When your wine arrives, the courier may need to scan your ID before handing it over. Some services let you pre-verify, so deliveries become smoother over time.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Social media</strong> is the new battleground. Several countries are pushing for age verification on major platforms to protect children. This is contentious because it could require millions of people to verify their identity just to use everyday apps. How this plays out will shape the future of online privacy.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Adult content</strong> is where the strongest new laws apply. The UK and several US states now require robust age verification for pornographic websites. Simple age gates no longer comply. This has driven rapid development in privacy-preserving verification methods, since users understandably don't want to upload their passport to these sites.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Financial services</strong> verify age as part of broader identity checks. When you open a bank account or sign up for a crypto exchange, age verification happens automatically alongside identity verification. You rarely notice it as a separate step.
      </ArticleParagraph>

      <ArticleH2>What good age verification looks like</ArticleH2>

      <ArticleParagraph>
        The best age verification systems share a few characteristics. They're quick, completing in seconds rather than days. They work on mobile, since that's where most people are. They're accessible, not excluding people who don't have driver's licenses or credit histories. And they minimize data collection, asking only for what's necessary.
      </ArticleParagraph>

      <ArticleParagraph>
        For privacy-conscious users, look for services that offer anonymous age credentials or face-based estimation. These prove your age without creating a permanent record of your identity linked to the service. For high-stakes situations like gambling or financial services, expect more thorough verification and understand that's appropriate given the risks involved.
      </ArticleParagraph>

      <ArticleParagraph>
        Folio supports all these verification methods. For businesses, it means choosing the right approach for each situation, using thorough verification where regulations require it, and lighter methods where privacy matters more. For users, it means one verification can work across multiple services through reusable credentials, so you're not uploading your passport to every site that asks. Learn more about <LocalizedLink to="/solutions/age-compliance" className="underline hover:text-[#737373] transition-colors">Folio's age compliance solutions</LocalizedLink>.
      </ArticleParagraph>

      <ArticleParagraph>
        Age verification is becoming a standard part of life online. The technology exists to do it well, protecting young people while respecting everyone's privacy. The question is whether businesses and regulators will choose the approaches that balance both, or settle for methods that create unnecessary privacy risks.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
