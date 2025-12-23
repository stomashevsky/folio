import { useTranslation } from 'react-i18next'
import { SectionHeader } from '../ui'

interface Review {
  name: string
  rating: number
  text: string
  source: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-[#facc15]' : 'text-[#e5e5e5]'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-[#e5e5e5] border-solid w-full min-w-0 relative rounded-2xl shrink-0 flex flex-col">
      <div className="flex flex-col gap-4 items-start p-6 w-full flex-1 min-w-0">
        {/* Rating and Source */}
        <div className="flex items-center justify-between w-full">
          <StarRating rating={review.rating} />
          <span className="text-xs font-medium text-[#737373]">
            {review.source}
          </span>
        </div>
        
        {/* Review Text */}
        <p className="font-normal leading-6 text-sm text-[#525252] flex-1">
          "{review.text}"
        </p>
        
        {/* Reviewer Name */}
        <p className="font-semibold text-sm text-[#0a0a0a]">
          {review.name}
        </p>
      </div>
    </div>
  )
}

export default function ReviewsSection() {
  const { t } = useTranslation('wallet')
  const reviews = t('reviews.items', { returnObjects: true }) as Review[]

  return (
    <section className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
      <div className="flex flex-col gap-10 md:gap-12 items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <SectionHeader
          title={t('reviews.title')}
          description={t('reviews.description')}
          maxWidth="576px"
        />
        
        {/* Desktop: 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-stretch w-full">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        
        {/* Mobile: single column */}
        <div className="flex md:hidden flex-col gap-4 w-full">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
