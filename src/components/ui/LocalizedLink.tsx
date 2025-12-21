import { Link, LinkProps } from 'react-router-dom'
import { useLocalizedPath } from '../../i18n/useLocalizedPath'

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string
}

/**
 * LocalizedLink component that automatically adds the current language prefix to paths
 * Use this instead of Link for internal navigation to maintain language consistency
 */
export default function LocalizedLink({ to, children, ...props }: LocalizedLinkProps) {
  const { getLocalizedPath } = useLocalizedPath()
  
  return (
    <Link to={getLocalizedPath(to)} {...props}>
      {children}
    </Link>
  )
}

