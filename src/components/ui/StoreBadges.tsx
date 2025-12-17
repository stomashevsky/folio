import { AnchorHTMLAttributes } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'

import appStoreBadgeOutline from '../../assets/images/app-store-badge.svg'
import appStoreBadgeOverlayVector from '../../assets/images/app-store-badge-overlay-vector.svg'
import appStoreBadgeOverlayGroup from '../../assets/images/app-store-badge-overlay-group.svg'
import googlePlayBadge from '../../assets/images/google-play-badge.svg'

import qrCodeAppStore from '../../assets/images/qr-code-app-store.png'
import qrCodeGooglePlay from '../../assets/images/qr-code-google-play.png'

type Store = 'ios' | 'android'

const STORE_URLS: Record<Store, string> = {
  ios: 'https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717',
  android: 'https://play.google.com/store/apps/details?id=com.folioltd',
}

const STORE_LABELS: Record<Store, string> = {
  ios: 'Download on the App Store',
  android: 'Get it on Google Play',
}

const STORE_BADGE_SIZES: Record<Store, { width: number; height: number }> = {
  ios: { width: 120, height: 40 },
  android: { width: 135, height: 40 },
}

function Anchor({
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { className?: string }) {
  return (
    <a
      {...props}
      className={`inline-flex shrink-0 rounded-lg ${FOCUS_RING_CLASSES} transition-opacity hover:opacity-90 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}

function AppStoreBadgeArtwork() {
  // The App Store badge in Figma is built from layered assets.
  return (
    <div className="relative h-[40px] w-[120px]">
      <img alt="" className="block h-full w-full" src={appStoreBadgeOutline} />
      <img
        alt=""
        className="absolute inset-[2.19%_0.73%_2.18%_0.73%] block h-auto w-auto"
        src={appStoreBadgeOverlayVector}
      />
      <img
        alt=""
        className="absolute inset-[21.09%_8.5%_16.27%_8.33%] block h-auto w-auto"
        src={appStoreBadgeOverlayGroup}
      />
    </div>
  )
}

export function StoreBadge({
  store,
  className = '',
  href,
}: {
  store: Store
  className?: string
  href?: string
}) {
  const url = href || STORE_URLS[store]
  const label = STORE_LABELS[store]
  const size = STORE_BADGE_SIZES[store]

  return (
    <Anchor href={url} aria-label={label} className={className}>
      {store === 'ios' ? (
        <AppStoreBadgeArtwork />
      ) : (
        <img
          alt=""
          className="block h-[40px] w-[135px]"
          src={googlePlayBadge}
          width={size.width}
          height={size.height}
        />
      )}
    </Anchor>
  )
}

export function StoreQrBadge({
  store,
  className = '',
}: {
  store: Store
  className?: string
}) {
  const isIos = store === 'ios'

  return (
    <div className={`flex flex-col items-center gap-4 ${isIos ? 'w-[171px]' : 'w-[199px]'} ${className}`}>
      <img
        src={isIos ? qrCodeAppStore : qrCodeGooglePlay}
        alt={isIos ? 'QR code for App Store download' : 'QR code for Google Play download'}
        className="size-[144px]"
        width={144}
        height={144}
        loading="lazy"
      />
      <StoreBadge store={store} />
    </div>
  )
}

