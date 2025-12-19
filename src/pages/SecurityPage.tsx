import { memo } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, ToolCard, Button } from '../components/ui'
import FooterSection from '../components/sections/FooterSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'
import { scrollToTop } from '../utils/scrollToTop'
import { useNavigate } from 'react-router-dom'
import lockKeyholeIcon from '../assets/icons/LockKeyhole.svg'
import keyRoundIcon from '../assets/icons/KeyRound.svg'
import smartphoneIcon from '../assets/icons/Smartphone.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import shieldPlusIcon from '../assets/icons/ShieldPlus.svg'
import fingerprintIcon from '../assets/icons/Fingerprint.svg'

// Background style matching other sections
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

function SecurityPage() {
  const navigate = useNavigate()
  
  usePageTitle({
    title: 'Security | Folio Wallet',
    description: 'Learn how Folio protects your documents with end-to-end encryption, zero-knowledge architecture, and industry-leading security standards.',
    ogTitle: 'Security | Folio Wallet',
    ogDescription: 'Your data stays yours. Folio uses end-to-end encryption and zero-knowledge architecture to keep your documents private and secure.',
    ogImage: getOgImageUrl('security-hero.png'),
    ogUrl: 'https://folio.id/security'
  })

  const handleGetApp = () => {
    navigate('/')
    setTimeout(() => {
      scrollToTop()
    }, 100)
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <h1 className="font-bold leading-9 md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px]">
              Your data stays yours
            </h1>
            <p className="font-normal leading-6 text-[#737373] text-base w-full">
              Folio is built on the principle that your personal documents belong to you alone. We use end-to-end encryption and zero-knowledge architecture to ensure that only you can access your data. Not even Folio can read your documents.
            </p>
          </div>
        </section>

        {/* Key Security Features */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="How we protect your data"
              description="Every layer of Folio is designed with security and privacy at its core."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
              <ToolCard
                icon={lockKeyholeIcon}
                title="End-to-end encryption"
                description="Your documents are encrypted before they leave your device. Only you hold the keys to decrypt them."
              />
              <ToolCard
                icon={keyRoundIcon}
                title="Zero-knowledge architecture"
                description="We never see your data. Our servers store only encrypted information that we cannot read or access."
              />
              <ToolCard
                icon={smartphoneIcon}
                title="Local-first storage"
                description="Your documents live on your device first. They're always available, even without internet."
              />
              <ToolCard
                icon={shieldCheckIcon}
                title="Secure cloud sync"
                description="When you sync across devices, your data travels encrypted. We facilitate the transfer but cannot view the contents."
              />
            </div>
          </div>
        </section>

        {/* Detailed Security Explanation */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 md:gap-16 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full">
            <SecurityBlock
              icon={lockKeyholeIcon}
              title="Encryption you can trust"
              description="Every document, card, and piece of personal information you store in Folio is encrypted using modern cryptographic standards. Your encryption keys are derived from credentials only you know. This means your data remains private even if our servers were ever compromised."
            />
            <SecurityBlock
              icon={keyRoundIcon}
              title="We cannot access your data"
              description="Folio operates on a zero-knowledge model. We store only encrypted blobs and cryptographic hashes on our servers. Without your personal keys, this data is meaningless. We cannot decrypt it, read it, or share it with anyone. Your privacy is not a policy choice, it is a technical guarantee."
            />
            <SecurityBlock
              icon={smartphoneIcon}
              title="Your device, your data"
              description="Folio stores your documents locally on your device first. This means you always have access to your important information, whether you're online or offline. Cloud sync is optional and always encrypted. You stay in control of where your data lives."
            />
            <SecurityBlock
              icon={fingerprintIcon}
              title="Biometric protection"
              description="Add an extra layer of security with Face ID or fingerprint authentication. Even if someone has your phone, they cannot access your Folio without your biometric confirmation."
            />
          </div>
        </section>

        {/* Compliance Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="Compliance and certifications"
              description="We maintain rigorous security standards and comply with international data protection regulations."
              maxWidth="576px"
            />
            
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full max-w-[900px] min-w-0">
              <ToolCard
                icon={shieldCheckIcon}
                title="ISO 27001"
                description="Certified information security management ensuring systematic protection of sensitive data."
              />
              <ToolCard
                icon={shieldPlusIcon}
                title="SOC 2 Type II"
                description="Independent verification of our security controls, availability, and confidentiality practices."
              />
              <ToolCard
                icon={shieldCheckIcon}
                title="GDPR compliant"
                description="Full compliance with European data protection regulations, giving you control over your personal data."
              />
            </div>
          </div>
        </section>

        {/* Recovery Code Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-6 items-center max-w-[768px] px-6 py-0 relative shrink-0 w-full text-center">
            <SectionHeader
              title="Your recovery code matters"
              description="During setup, Folio generates a unique Recovery Code. This code is the only way to restore your account if you lose access to your devices. Because of our zero-knowledge design, we cannot help you recover your data without it. Store your Recovery Code somewhere safe, like a password manager or a secure physical location."
              maxWidth="768px"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-8 items-center max-w-[576px] px-6 py-0 relative shrink-0 w-full text-center">
            <SectionHeader
              title="Ready to secure your documents?"
              description="Download Folio and experience document storage that puts your privacy first."
              maxWidth="576px"
            />
            <Button variant="primary" onClick={handleGetApp}>
              Get the app
            </Button>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

function SecurityBlock({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start w-full">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-lg shrink-0 size-12 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
        <img src={icon} alt="" aria-hidden="true" className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-2 items-start flex-1 min-w-0">
        <h3 className="font-semibold leading-7 text-lg text-[#0a0a0a]">
          {title}
        </h3>
        <p className="font-normal leading-6 text-base text-[#737373]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default memo(SecurityPage)
