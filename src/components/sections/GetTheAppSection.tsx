import { StoreBadge, StoreQrBadge } from '../ui'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function GetTheAppSection() {
  return (
    <section id="get-the-app" className="flex flex-col gap-6 items-center overflow-hidden px-0 py-0 md:pb-24 relative shrink-0 w-full bg-white">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center max-w-[1280px] px-6 relative shrink-0 w-full">
        <div className="flex gap-16 items-center p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
          <div className="flex flex-1 flex-col gap-4 items-start relative shrink-0 max-w-[576px] min-w-0">
            <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
              Take Folio with you, wherever you go
            </h2>
            <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
              Your documents stay organized, synced and instantly accessible on iOS and Android.
            </p>
          </div>
          <div className="flex shrink-0 gap-12 items-start justify-end relative">
            <StoreQrBadge store="ios" />
            <StoreQrBadge store="android" />
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:flex lg:hidden items-center max-w-[1280px] px-6 relative shrink-0 w-full">
        <div className="flex flex-col gap-8 items-center p-16 relative shrink-0 w-full rounded-2xl bg-[#f5f5f5] min-w-0">
          <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full min-w-0">
            <h2 className="font-bold leading-[40px] text-[36px] text-[#0a0a0a] tracking-[0px]">
              Take Folio with you, wherever you go
            </h2>
            <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
              Your documents stay organized, synced and instantly accessible on iOS and Android.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 items-center justify-center relative shrink-0 w-full">
            <StoreQrBadge store="ios" />
            <StoreQrBadge store="android" />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-8 items-center w-full px-6 py-16 relative shrink-0" style={BACKGROUND_STYLE}>
        <div className="flex flex-col gap-4 items-center relative shrink-0 text-center w-full">
          <h2 className="font-bold leading-[36px] text-[30px] text-[#0a0a0a] tracking-[0px]">
            Take Folio with you, wherever you go
          </h2>
          <p className="font-normal leading-6 text-base text-[#737373] opacity-80 w-full">
            Your documents stay organized, synced and instantly accessible on iOS and Android.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 items-start justify-center relative shrink-0 w-full">
          <StoreBadge store="ios" />
          <StoreBadge store="android" />
        </div>
      </div>
    </section>
  )
}
