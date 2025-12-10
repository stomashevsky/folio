import Navbar from '../components/Navbar'
import FooterSection from '../components/sections/FooterSection'
import KeepReadingSection from '../components/sections/KeepReadingSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function WhatIsADigitalWalletArticlePage() {
  const navigate = useNavigate()

  useScrollToTop()
  
  usePageTitle({
    title: 'What is a digital wallet? | Folio Blog',
    description: 'Learn what a digital wallet is, how it works, and how to use one. Discover the benefits, security features, and types of digital wallets available for Android and iPhone.',
    ogTitle: 'What is a digital wallet?',
    ogDescription: 'Learn what a digital wallet is, how it works, and how to use one. Discover the benefits, security features, and types of digital wallets available for Android and iPhone.',
    ogUrl: 'https://folio.id/blog/what-is-a-digital-wallet'
  })

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <section className="bg-white border-[#e5e5e5] border-b border-l-0 border-r-0 border-solid border-t-0 flex flex-col gap-6 items-center px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start justify-center px-6 md:px-6 py-0 relative shrink-0 w-full max-w-[768px]">
            {/* Meta information and Title */}
            <div className="flex flex-col gap-4 md:gap-5 items-start relative shrink-0 w-full">
              {/* Meta information */}
              <div className="flex flex-wrap gap-4 items-start justify-center leading-5 relative shrink-0 text-sm w-full">
                <p className="relative shrink-0 text-[#0a0a0a]">Aug 27, 2024</p>
                <Link 
                  to="/blog?category=Guides" 
                  className="relative shrink-0 text-[#737373] hover:text-[#0a0a0a] hover:underline transition-colors cursor-pointer"
                >
                  Guides
                </Link>
              </div>

              {/* Title and subtitle */}
              <div className="flex flex-col gap-4 md:gap-6 items-center relative shrink-0 text-center w-full whitespace-pre-wrap">
                <h1 className="font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] min-w-full relative shrink-0 w-[min-content]">
                  What is a digital wallet?
                </h1>
                <p className="font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg w-[min-content]">
                  Learn what a digital wallet is, how it works, and how to use one. Discover the benefits, security features, and types of digital wallets available for Android and iPhone.
                </p>
              </div>
            </div>

            {/* Article content */}
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                A digital wallet is a software application or online service that stores your payment information and other essential details securely on your smartphone, tablet, or computer. This allows you to make transactions electronically without needing physical cards or cash. Digital wallets are designed to simplify payments and enhance security. You can use them to store credit and debit cards, loyalty cards, gift cards, and even digital tickets. You know how it's always a hassle digging through your wallet for cards or IDs? Try to start using a wallet app, for instance, <strong>Folio Wallet</strong>, because it's been a game changer. It lets you store all that stuff in one place on your phone, which is so much easier. Plus, it's got strong encryption, so everything's super secure. You even get reminders when your gift cards are about to expire, and having your medical info handy in case of an emergency is a big plus. It's been really convenient, especially on days when you forget your wallet at home.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                How does a digital wallet work
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                To understand how a digital wallet works, it's crucial to delve into the technology behind it. When you add a credit or debit card to your digital wallet account, the app encrypts your payment details. Instead of transmitting your actual card number, the wallet generates a unique token for each transaction. This token is a random sequence of numbers that represents your card information. The merchant's payment terminal uses this token to process the payment, keeping your real card details hidden from potential thieves. This process is coupled with additional security layers such as biometric authentication (fingerprint or facial recognition) and secure PIN codes, ensuring that even if someone steals your device, they can't access your payment information without proper authorization.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                A digital wallet operates by securely linking your payment information to the retailer or service provider you wish to transact with. This connection can be established through various technologies. Near Field Communication (NFC) allows contactless payments by holding your device close to a compatible card reader. <strong>Apple Pay</strong> and <strong>Samsung Pay</strong> use this technology. Magnetic Secure Transmission (MST) creates a magnetic signal to mimic the magnetic stripe on a credit card, used by Samsung Pay. QR Codes allow you to scan a QR code with your smartphone to make payments, as seen with <strong>PayPal</strong>. When you pay with a digital wallet, your actual card number is not transmitted. Instead, a unique token or encrypted information is used, adding an extra layer of security.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Types of digital wallets
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Digital wallets come in several types, each suited to different needs. Closed wallets are issued by a specific company and can only be used with that company's products or services. For example, Amazon Pay is a closed wallet that only works with Amazon and affiliated retailers. Semi-closed wallets allow transactions at a list of approved merchants. They offer more flexibility than closed wallets but still require agreements with participating vendors. Open wallets are provided by banks or financial institutions and support a broad range of transactions, including ATM withdrawals and fund transfers. Examples include PayPal and Skrill.
              </p>

              <h2 className="pt-8 pb-0 px-0 font-semibold leading-9 text-[30px] text-[#0a0a0a] relative shrink-0 w-full whitespace-pre-wrap">
                Benefits and getting started
              </h2>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Opening a digital wallet is a straightforward process that begins with selecting a compatible app based on your device. To get started, download the app from your device's app store, then follow the setup instructions. You'll need to enter your payment details and possibly verify your identity through the app. Once your digital wallet account is set up, you can begin adding various payment methods, such as credit cards, debit cards, and even gift cards. To use a digital card, choose your digital wallet depending on your device, select a compatible wallet app. Enter your credit or debit card details into the wallet app, and your information will be encrypted for security. For in-store purchases, hold your device near the payment terminal. For online transactions, select the digital wallet at checkout and authorize the payment.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Using a digital card for payments is as simple as waving your device near a payment terminal or tapping a button on your screen. When you pay with a digital card, the process involves authenticating the payment via your digital wallet. For in-store transactions, ensure that the point-of-sale system supports contactless payments. With online purchases, select the digital wallet as your payment method at checkout, and authorize the payment. This method not only speeds up the checkout process but also enhances security by using encrypted tokens rather than your actual card details.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                One of the primary benefits of a wallet app on Android or iPhone is the ease of use and organization. A digital wallet allows you to consolidate various payment methods and important documents into one convenient app. This includes credit and debit cards, loyalty programs, and even event tickets. By managing these items digitally, you reduce the risk of losing physical cards and make transactions faster and more efficient. Additionally, the advanced security features such as encryption and tokenization provide peace of mind by protecting your sensitive information from fraud. Convenience is a major benefit: no need to carry physical cards or cash, just use your device to make payments. Security is another key advantage: advanced encryption and tokenization protect your payment details from theft. Organization is important too: store not just payment cards, but also tickets, coupons, and loyalty cards in one place.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                There are some potential drawbacks to consider. Limited acceptance means not all merchants accept digital wallet payments yet. Device dependency is another consideration: if your device is lost or runs out of battery, you lose access to your digital wallet. Many wallet apps are available for free. For instance, several popular wallet apps can be downloaded and used without any charge. However, while the app itself may be free, using certain features or making specific types of transactions might incur fees, like it's in PayPal, depending on the app's policies or the associated financial institutions. Always check the terms of service and fee structure for your chosen wallet payment method to avoid any unexpected costs. In general, the basic functionality of storing and using payment cards is free, making it an accessible option for most users. As we go back to <strong>Folio Wallet</strong>, it is totally free to download. It means that you do not need to pay for getting the app. All you have to do is to find it in the App Store or Google Play, tap the download button and enjoy. <a href="/#get-the-app" className="underline hover:text-[#0a0a0a] transition-colors">Available on iOS and Android.</a>
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Ensuring the security of your digital wallet account is vital. Besides encryption and tokenization, many wallet apps include features like automatic lock after inactivity, biometric access, and real-time transaction notifications. These security measures help monitor and protect your account from unauthorized access. It's also advisable to enable two-factor authentication for an added layer of protection, which requires a second form of verification in addition to your password or biometric data.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Another exciting development is the use of digital wallets in conjunction with Internet of Things (IoT) devices. For instance, smart home systems and wearables can now interface directly with your digital wallet to facilitate automatic payments. Imagine a smart refrigerator that can order groceries and process payments through your wallet app on Android or digital wallet on iPhone, all without requiring manual intervention. This level of integration highlights the growing role of digital wallets in creating a seamless, interconnected lifestyle. Moreover, the rise of digital wallet devices in the form of smartwatches and fitness trackers is redefining how we interact with our finances. These devices enable users to pay with a digital card directly from their wrists, making transactions as simple as a flick of the wrist. As this technology evolves, we can expect further enhancements in convenience and functionality, driving greater adoption of wallet payment methods across various sectors.
              </p>

              <p className="font-normal leading-6 relative shrink-0 text-[#0a0a0a] text-base w-full whitespace-pre-wrap">
                Digital wallets represent a significant advancement in how we handle payments, offering both convenience and security. Whether you're using a wallet app on Android, an iPhone, or a dedicated digital wallet device, these tools streamline transactions and protect your financial information. By understanding how digital wallets work and choosing the right type for your needs, you can simplify your daily transactions and enjoy the benefits of modern payment technology.
              </p>
            </div>

            {/* Back to blog button */}
            <div className="pt-8">
              <Button
                variant="secondary"
                onClick={() => navigate('/blog', { state: { restoreScroll: true } })}
                iconPosition="left"
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M7.99967 12.6666L3.33301 7.99992M3.33301 7.99992L7.99967 3.33325M3.33301 7.99992H12.6663" stroke="#171717" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              >
                Back to Blog
              </Button>
            </div>
          </div>

        </section>
        <KeepReadingSection currentArticleSlug="what-is-a-digital-wallet" />
      </main>
      <FooterSection />
    </div>
  )
}
