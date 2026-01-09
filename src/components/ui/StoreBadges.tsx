import { AnchorHTMLAttributes } from 'react'
import { FOCUS_RING_CLASSES } from './focusStyles'

import appStoreBadge from '../../assets/images/app-store-badge.svg'
import googlePlayBadge from '../../assets/images/google-play-badge.svg'

import qrCodeAppStore from '../../assets/images/qr-code-app-store.png'
import qrCodeGooglePlay from '../../assets/images/qr-code-google-play.png'

type Store = 'ios' | 'android'

const STORE_URLS: Record<Store, string> = {
  ios: 'https://apps.apple.com/app/folio-digital-wallet-app/id1266382717',
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
      <img
        alt=""
        className="block"
        src={store === 'ios' ? appStoreBadge : googlePlayBadge}
        width={size.width}
        height={size.height}
      />
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

