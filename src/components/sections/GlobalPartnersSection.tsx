import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '../ui'

export default function GlobalPartnersSection() {
  const { t, i18n } = useTranslation('government')
  const currentLang = i18n.language || 'en'
  
  // Datawrapper supports localization via ?lang= parameter
  // https://www.datawrapper.de/localization
  const datawrapperUrl = `https://datawrapper.dwcdn.net/osJBZ/3/?lang=${currentLang}`
  
  useEffect(() => {
    // Datawrapper responsive iframe height handler
    // Using addEventListener directly instead of inline script to avoid CSP issues
    const handleMessage = (event: MessageEvent) => {
      // Only process messages from Datawrapper domain
      if (event.origin !== 'https://datawrapper.dwcdn.net') {
        return
      }

      if (event.data && typeof event.data === 'object' && 'datawrapper-height' in event.data) {
        const iframes = document.querySelectorAll('iframe')
        const heights = event.data['datawrapper-height']
        
        for (const chartId in heights) {
          for (let i = 0; i < iframes.length; i++) {
            const iframe = iframes[i] as HTMLIFrameElement
            if (iframe.id === 'datawrapper-chart-osJBZ' && iframe.contentWindow === event.source) {
              const height = heights[chartId] + 'px'
              iframe.style.height = height
              // Update container height to match iframe
              const container = iframe.parentElement
              if (container) {
                container.style.height = height
                container.style.minHeight = height
              }
            }
          }
        }
      }
    }

    window.addEventListener('message', handleMessage)
    
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <section className="bg-white flex flex-col gap-10 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
      <div className="flex flex-col gap-12 md:gap-16 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <SectionHeader
          title={t('government.globalPartners.title')}
          description={t('government.globalPartners.description')}
          align="center"
          maxWidth="576px"
        />
      </div>
      <div 
        className="relative w-full" 
        style={{ 
          width: '100%',
          paddingLeft: '24px',
          paddingRight: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div 
          className="relative w-full" 
          style={{ 
            width: '100%',
            height: '800px',
            minHeight: '800px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <iframe
            title="Global Partners Map"
            aria-label="Choropleth map"
            id="datawrapper-chart-osJBZ"
            src={datawrapperUrl}
            scrolling="no"
            frameBorder="0"
            allow="fullscreen"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
            data-external="1"
          />
        </div>
      </div>
    </section>
  )
}

