import { Link } from 'react-router-dom'
import { BlogArticleLayout, ArticleH2, ArticleParagraph, ArticleImage } from '../components/ui'
import folioScreens from '../assets/images/blog-what-is-digital-wallet-folio-screens.png'

export default function WhatIsADigitalWalletArticlePage() {
  return (
    <BlogArticleLayout
      title="What is a digital wallet?"
      description="Learn what a digital wallet is, how it works, and how to use one. Discover the benefits, security features, and types of digital wallets available for Android and iPhone."
      date="Jan 15, 2024"
      category="Guides"
      slug="what-is-a-digital-wallet"
    >
      <ArticleParagraph>
        You're at the checkout counter. The cashier says your total. You reach for your phone instead of your wallet, tap it against the terminal, and the payment goes through. No fumbling for cards, no counting cash, no signature required. That's a digital wallet in action, but tap-to-pay is just the beginning of what these apps can do.
      </ArticleParagraph>

      <ArticleParagraph>
        A digital wallet is an app that stores information you'd normally keep in a physical wallet: payment cards, IDs, tickets, loyalty cards, insurance documents. The difference is that everything lives on your phone, protected by encryption and biometric authentication. Some digital wallets focus on payments. Others handle documents. The best ones do both.
      </ArticleParagraph>

      <ArticleH2>How digital wallets work</ArticleH2>

      <ArticleParagraph>
        When you add a credit card to a digital wallet, the app doesn't store your actual card number. Instead, it creates a token: a random string of characters that represents your card for transactions. When you tap to pay, the terminal receives this token, not your real card details. If someone intercepts the transaction, they get useless data. Your actual card number stays hidden.
      </ArticleParagraph>

      <ArticleParagraph>
        This tokenization happens alongside encryption. Your card details are scrambled before being stored, and only your device can unscramble them. Add biometric authentication (Face ID, fingerprint) and you have multiple layers of security that physical cards simply can't match. A stolen credit card can be used immediately. A stolen phone with a digital wallet requires your face or fingerprint to unlock.
      </ArticleParagraph>

      <ArticleH2>Types of digital wallets</ArticleH2>

      <ArticleParagraph>
        <strong>Payment wallets</strong> like Apple Pay, Google Pay, and Samsung Pay focus on contactless payments. They work at any terminal that accepts tap-to-pay, which is most retailers now. These wallets also store boarding passes, transit cards, and event tickets from participating providers. The limitation: they're picky about what they accept. If a document doesn't come from an approved source in the right format, you can't add it.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Peer-to-peer wallets</strong> like Venmo, PayPal, and Cash App handle money transfers between people. Splitting dinner, paying rent to a roommate, sending a birthday gift: these apps make it instant. Some also offer debit cards linked to your balance for spending at stores.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong>Document wallets</strong> store what payment wallets won't: passports, driver's licenses, insurance cards, medical records, visa documents. These apps focus on organization and secure storage rather than payments.
      </ArticleParagraph>

      <ArticleImage
        src={folioScreens}
        alt="Folio digital wallet showing organized documents including payment cards, IDs, and travel documents with folder organization"
      />

      <ArticleParagraph>
        <strong>Folio</strong> falls into this last category but goes further than most. It stores any document you can photograph or import: IDs, passports, insurance policies, tickets, loyalty cards, even handwritten notes. Everything is encrypted end-to-end and protected with passkeys, meaning only you can access your documents. Folio can't read them, and neither can anyone who might breach their servers. The app also extracts text from documents automatically, so you can copy passport numbers or policy details without typing them. Expiration reminders keep you from being caught with an outdated ID. Shared folders let family members access travel documents without texting screenshots. <Link to="/#get-the-app" className="underline hover:text-[#737373] transition-colors">Available free on iOS and Android.</Link>
      </ArticleParagraph>

      <ArticleH2>Why use a digital wallet</ArticleH2>

      <ArticleParagraph>
        The practical benefits are obvious: less bulk in your pocket, faster checkouts, documents always with you. But the security advantages matter more. Physical cards can be skimmed, cloned, or stolen. Physical documents can be lost, damaged, or left at home when you need them. Digital versions protected by encryption and biometrics solve both problems.
      </ArticleParagraph>

      <ArticleParagraph>
        There's also the organization factor. Your physical wallet holds maybe a dozen cards before it becomes unwieldy. A digital wallet holds hundreds without getting thicker. Every loyalty card from every store, every insurance policy, every ticket: searchable, sortable, always accessible.
      </ArticleParagraph>

      <ArticleParagraph>
        The main limitation is acceptance. Not every situation accepts digital IDs yet. Some transactions still require physical cards. Battery death means no access. For now, most people use digital wallets alongside physical ones rather than replacing them entirely. But the trend is clear: more businesses accept digital payments every year, more governments issue digital IDs, more services go paperless. The wallet in your pocket is slowly becoming optional.
      </ArticleParagraph>
    </BlogArticleLayout>
  )
}
