import { useTranslation } from 'react-i18next'
import { PLATFORM_ITEMS } from '../../constants/platformItems'
import HorizontalScrollCarousel from '../ui/HorizontalScrollCarousel'
import PhotoCard from '../ui/PhotoCard'

interface ExploreMoreSectionProps {
  currentPath: string
}

export default function ExploreMoreSection({ currentPath }: ExploreMoreSectionProps) {
  const { t } = useTranslation('common')
  
  // Filter out current page
  const otherItems = PLATFORM_ITEMS.filter(item => item.path !== currentPath)

  return (
    <section className="bg-[#f5f5f5] flex flex-col items-center overflow-hidden py-16 md:py-24 relative w-full">
      <HorizontalScrollCarousel title={t('exploreMore')}>
        {otherItems.map((item) => (
          <PhotoCard
            key={item.path}
            image={item.image}
            title={t(item.labelKey)}
            description={t(item.descriptionKey)}
            to={item.path}
            carouselMode
          />
        ))}
      </HorizontalScrollCarousel>
    </section>
  )
}
