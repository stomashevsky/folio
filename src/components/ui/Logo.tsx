import logoIcon from '../../assets/icons/logo.svg'

interface LogoProps {
  className?: string
  size?: number
  name?: 'Folio' | 'Folio Wallet'
}

export default function Logo({ className = '', size = 28, name = 'Folio' }: LogoProps) {
  const isFolioWallet = name === 'Folio Wallet'
  
  if (isFolioWallet) {
    // For "Folio Wallet", use the full logo which already includes "Folio" text
    // The logo SVG is 133x28, so we maintain aspect ratio
    const aspectRatio = 133 / 28
    const height = size
    const width = height * aspectRatio
    
    return (
      <div className={`overflow-hidden relative shrink-0 ${className}`} style={{ width, height }}>
        <img 
          src={logoIcon} 
          alt="Folio Wallet Logo" 
          className="block max-w-none w-full h-full object-contain"
          style={{ width, height }}
        />
      </div>
    )
  }
  
  // For "Folio" only, show just the icon part (first 28px of the logo)
  return (
    <div className={`overflow-hidden relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 28 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="block max-w-none w-full h-full"
      >
        <g clipPath="url(#clip0_24509_4)">
          <circle cx="14" cy="14" r="14" fill="#0A0A0A"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M9.11249 7.23174C7.48163 7.07507 6.07031 8.35596 6.07031 9.99277V18.0072C6.07031 19.644 7.48163 20.9249 9.11249 20.7683L19.9659 19.7257C21.3897 19.5889 22.4766 18.3937 22.4766 16.9646V11.0354C22.4766 9.60628 21.3897 8.4111 19.9659 8.27432L9.11249 7.23174ZM19.7001 15.3869C20.3971 15.3869 20.9621 14.766 20.9621 14C20.9621 13.234 20.3971 12.6131 19.7001 12.6131C19.0031 12.6131 18.4381 13.234 18.4381 14C18.4381 14.766 19.0031 15.3869 19.7001 15.3869Z" fill="#FAFAFA"/>
        </g>
        <defs>
          <clipPath id="clip0_24509_4">
            <rect width="28" height="28" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

