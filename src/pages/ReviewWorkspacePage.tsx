import { useState } from 'react'
import Navbar from '../components/Navbar'
import { SectionHeader, Button, ToolCard, HeroTagline } from '../components/ui'
import ImageWithPlaceholder from '../components/ui/ImageWithPlaceholder'
import Accordion, { AccordionItemData } from '../components/ui/Accordion'
import FooterSection from '../components/sections/FooterSection'
import ExploreMoreSection from '../components/sections/ExploreMoreSection'
import { usePageTitle } from '../hooks/usePageTitle'
import { getOgImageUrl } from '../configs/ogImages'

// Icons
import zapIcon from '../assets/icons/Zap.svg'
import layersIcon from '../assets/icons/Layers.svg'
import shieldCheckIcon from '../assets/icons/ShieldCheck.svg'
import circleCheckBigIcon from '../assets/icons/CircleCheckBig.svg'
import briefcaseIcon from '../assets/icons/Briefcase.svg'
import listTodoIcon from '../assets/icons/ListTodo.svg'
import triangleAlertIcon from '../assets/icons/TriangleAlert.svg'
import refreshCcwIcon from '../assets/icons/RefreshCcw.svg'
import mousePointerClickIcon from '../assets/icons/MousePointerClick.svg'
import searchCheckIcon from '../assets/icons/SearchCheck.svg'

// Images
import reviewWorkspaceHero from '../assets/images/review-workspace-hero.png'
import reviewWorkspaceHowItWorks1 from '../assets/images/review-workspace-how-it-works-1.png'
import reviewWorkspaceHowItWorks2 from '../assets/images/review-workspace-how-it-works-2.png'
import reviewWorkspaceHowItWorks3 from '../assets/images/review-workspace-how-it-works-3.png'

// Background style using inline styles for complex multi-layer gradient
const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

// Feature highlights data
const featureHighlights = [
  {
    icon: zapIcon,
    title: 'Close cases faster',
    description: 'Resolve straightforward cases automatically and investigate complex ones more efficiently with tools designed for collaboration and speed.',
  },
  {
    icon: layersIcon,
    title: 'One source of context',
    description: 'Bring together active checks, passive signals, and behavioral data from internal and external sources in a single, consistent view.',
  },
  {
    icon: shieldCheckIcon,
    title: 'Compliance ready',
    description: 'Support regulatory workflows with detailed audit trails, reviewer checklists, and structured comments built into every case.',
  },
]

// How it works accordion items
const howItWorksItems: AccordionItemData[] = [
  {
    id: 'setup',
    title: 'Set up review workflows',
    description: 'Create case templates for different scenarios and define assignment rules, statuses, and ownership to match your internal processes.',
    desktopImage: reviewWorkspaceHowItWorks1,
  },
  {
    id: 'review',
    title: 'Review complex cases',
    description: 'Examine high-risk or failed checks by reviewing user or business data, verification results, and supporting evidence in one place.',
    desktopImage: reviewWorkspaceHowItWorks2,
  },
  {
    id: 'action',
    title: 'Take action with confidence',
    description: 'Approve, deny, or mark for review cases and manage follow-ups directly from the workspace, without switching tools.',
    desktopImage: reviewWorkspaceHowItWorks3,
  },
]

// Key features accordion items
const keyFeaturesItems: AccordionItemData[] = [
  {
    id: 'layouts',
    title: 'Flexible case layouts',
    description: 'Configure case views and sections to match different review scenarios and investigation needs.',
  },
  {
    id: 'tools',
    title: 'Built in investigation tools',
    description: 'Use ready to use tools like checklists, notes, and insights to review cases faster and more consistently.',
  },
  {
    id: 'priority',
    title: 'Priority handling and alerts',
    description: 'Automatically highlight urgent cases and keep reviews moving within defined response times.',
  },
  {
    id: 'routing',
    title: 'Smart routing and escalation',
    description: 'Route cases between teams or reviewers based on risk level, status, or review stage.',
  },
  {
    id: 'access',
    title: 'Role based data access',
    description: 'Control who can view or edit sensitive personal data with role specific permissions.',
  },
  {
    id: 'history',
    title: 'Full activity history',
    description: 'Keep a complete record of actions, decisions, and comments for every case.',
  },
  {
    id: 'unified',
    title: 'Unified data view',
    description: 'Bring together all relevant case information in one workspace without switching systems.',
  },
  {
    id: 'insights',
    title: 'Performance insights',
    description: 'Track review volume, turnaround time, and team efficiency to identify bottlenecks.',
  },
]

// Use cases data
const useCasesData = [
  {
    icon: circleCheckBigIcon,
    title: 'Manual identity review',
    description: 'Review users at any stage of the lifecycle, from onboarding and rechecks to account recovery and edge cases.',
  },
  {
    icon: briefcaseIcon,
    title: 'Business verification',
    description: 'Manage business reviews in one place, covering ownership, documents, and risk signals for KYB workflows.',
  },
  {
    icon: listTodoIcon,
    title: 'AML investigations and reporting',
    description: 'Handle AML cases, track investigation status, and prepare regulatory reports using structured case workflows.',
  },
  {
    icon: triangleAlertIcon,
    title: 'Fraud investigations',
    description: 'Investigate high risk users, analyze linked accounts, and resolve complex fraud scenarios with manual review.',
  },
  {
    icon: refreshCcwIcon,
    title: 'Fast process updates',
    description: 'Adapt review logic quickly by adjusting checks, rules, and thresholds as risks or regulations change.',
  },
  {
    icon: mousePointerClickIcon,
    title: 'Operational automation',
    description: 'Reduce manual effort by automating routine decisions and supporting operational teams with clear case flows.',
  },
]

export default function ReviewWorkspacePage() {
  usePageTitle({
    title: 'Review Workspace | Folio Wallet',
    description: 'Investigate users and businesses faster with flexible tools that adapt to your review process and reduce operational effort.',
    ogTitle: 'Review Workspace | Folio Wallet',
    ogDescription: 'Investigate users and businesses faster with flexible tools that adapt to your review process and reduce operational effort.',
    ogImage: getOgImageUrl('review-workspace-hero.png'),
    ogUrl: 'https://folio.id/platform/review-workspace'
  })

  const [activeHowItWorksId, setActiveHowItWorksId] = useState<string | null>('setup')
  const activeHowItWorksItem = howItWorksItems.find(item => item.id === activeHowItWorksId) || howItWorksItems[0]

  const handleGetInTouch = () => {
    window.location.href = 'mailto:contact@folio.id'
  }

  return (
    <div className="flex flex-col items-start min-h-screen relative w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-8 items-start relative min-w-0">
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
                <HeroTagline icon={searchCheckIcon}>Review workspace</HeroTagline>
                <h1 className="font-bold leading-[48px] text-[48px] text-[#0a0a0a] tracking-[0px]">
                  A simpler way to manage cases
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Investigate users and businesses faster with flexible tools that adapt to your review process and reduce operational effort.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square">
              <img
                src={reviewWorkspaceHero}
                alt="Review workspace preview"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-12 items-start justify-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-6 items-start relative shrink-0 w-full">
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <HeroTagline icon={searchCheckIcon}>Review workspace</HeroTagline>
                <h1 className="font-bold leading-9 text-[30px] text-[#0a0a0a] tracking-[0px]">
                  A simpler way to manage cases
                </h1>
                <p className="font-normal leading-6 text-[#737373] text-base w-full">
                  Investigate users and businesses faster with flexible tools that adapt to your review process and reduce operational effort.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-start relative shrink-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="aspect-square relative rounded-2xl shrink-0 w-full">
              <img
                src={reviewWorkspaceHero}
                alt="Review workspace preview"
                className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-12 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Review and investigate with confidence"
                maxWidth="576px"
              />
              <div className="flex flex-col md:flex-row gap-6 items-start relative shrink-0 w-full">
                {featureHighlights.map((item, index) => (
                  <FeatureItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <ImageWithPlaceholder
              src={activeHowItWorksItem.desktopImage || ''}
              alt={activeHowItWorksItem.title}
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full"
              containerClassName="flex-1 min-h-0 min-w-0 relative rounded-2xl aspect-square"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col gap-6 items-start relative min-w-0">
              <SectionHeader
                title="How it works"
                align="left"
                maxWidth="100%"
              />
              <Accordion
                items={howItWorksItems}
                defaultOpenId="setup"
                onItemChange={setActiveHowItWorksId}
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <SectionHeader
              title="How it works"
              align="left"
              maxWidth="100%"
            />
            <Accordion
              items={howItWorksItems}
              defaultOpenId="setup"
              onItemChange={setActiveHowItWorksId}
              showMobileImages={true}
            />
          </div>
        </section>

        {/* Key Features Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={BACKGROUND_STYLE}>
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-16 items-start max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-5 items-start relative min-w-0 max-w-[512px]">
              <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Design a clear and scalable case review process
              </p>
            </div>
            <div className="flex flex-1 flex-col items-start relative min-w-0">
              <Accordion
                items={keyFeaturesItems}
                defaultOpenId="layouts"
                showMobileImages={false}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-6 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-start relative shrink-0 w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                Key features
              </h2>
              <p className="font-normal leading-6 text-[#737373] text-base w-full">
                Design a clear and scalable case review process
              </p>
            </div>
            <Accordion
              items={keyFeaturesItems}
              defaultOpenId="layouts"
              showMobileImages={false}
            />
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
          <div className="flex flex-col gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
            <div className="flex flex-col gap-10 items-center relative shrink-0 w-full">
              <SectionHeader
                title="Case management workflows"
                maxWidth="576px"
              />
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start sm:items-stretch justify-center w-full min-w-0">
                {useCasesData.map((item, index) => (
                  <ToolCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col gap-6 items-center overflow-hidden px-0 py-0 md:pb-24 relative shrink-0 w-full bg-white">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center max-w-[1280px] px-6 relative shrink-0 w-full">
            <div className="flex gap-16 items-center p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
              <div className="flex flex-1 flex-col gap-4 items-start relative shrink-0 max-w-[576px] min-w-0">
                <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
                  Let's build better identity verification
                </h2>
                <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                  Talk to our team to explore how Folio can enhance your onboarding and verification experience.
                </p>
              </div>
              <div className="flex flex-1 flex-wrap gap-3 items-start justify-end relative min-w-0">
                <Button onClick={handleGetInTouch} variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
            <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
              <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
                Let's build better identity verification
              </h2>
              <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
                Talk to our team to explore how Folio can enhance your onboarding and verification experience.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center relative shrink-0">
              <Button onClick={handleGetInTouch} variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ExploreMoreSection currentPath="/platform/review-workspace" />
      <FooterSection />
    </div>
  )
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col gap-5 items-start relative shrink-0 w-full md:w-auto">
      <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center relative rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 size-10">
        <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full">
        <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
          {title}
        </p>
        <p className="font-normal relative shrink-0 text-[#737373] w-full">
          {description}
        </p>
      </div>
    </div>
  )
}
