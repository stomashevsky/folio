import facebookIcon from '../../assets/icons/Facebook.svg'
import instagramIcon from '../../assets/icons/Instagram.svg'
import linkedinIcon from '../../assets/icons/LinkedIn.svg'
import xTwitterIcon from '../../assets/icons/XTwitter.svg'
import { FOCUS_STYLES } from './focusStyles'

interface SocialIconProps {
  name: 'instagram' | 'facebook' | 'linkedin' | 'x'
  className?: string
  size?: number
  href?: string
  target?: string
  rel?: string
}

/**
 * SocialIcon component for social media icons in footer
 * Uses SVG files as resources for Instagram, Facebook, LinkedIn, and X (Twitter)
 */
export default function SocialIcon({
  name,
  className = '',
  size = 20,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
}: SocialIconProps) {
  const iconMap = {
    instagram: instagramIcon,
    facebook: facebookIcon,
    linkedin: linkedinIcon,
    x: xTwitterIcon,
  }

  const iconSrc = iconMap[name]

  const icon = (
    <div className={`overflow-hidden relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img
        src={iconSrc}
        alt={`${name} icon`}
        className="block max-w-none w-full h-full object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`transition-opacity duration-150 hover:opacity-70 rounded-md ${FOCUS_STYLES}`}
        aria-label={`${name} social media link`}
      >
        {icon}
      </a>
    )
  }

  return icon
}

