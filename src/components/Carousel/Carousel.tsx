import {
  Children,
  type HTMLAttributes,
  type ReactNode,
  useState,
} from 'react'

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  initialSlide?: number
  unstyled?: boolean
}

export function Carousel({
  children,
  initialSlide = 0,
  className = '',
  unstyled = false,
  ...props
}: CarouselProps) {
  const slides = Children.toArray(children)

  const safeInitialSlide =
    initialSlide >= 0 && initialSlide < slides.length
      ? initialSlide
      : 0

  const [activeSlide, setActiveSlide] = useState(safeInitialSlide)

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    )
  }

  const goToNext = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    )
  }

  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }

  if (slides.length === 0) {
    return null
  }

  const containerClasses = unstyled
    ? className
    : `relative w-full overflow-hidden rounded-lg ${className}`

  return (
    <div
      className={containerClasses}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      {...props}
    >
      <div
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeSlide + 1} of ${slides.length}`}
      >
        {slides[activeSlide]}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous slide"
            className={
              unstyled
                ? undefined
                : 'absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80'
            }
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className={
              unstyled
                ? undefined
                : 'absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80'
            }
          >
            <span aria-hidden="true">→</span>
          </button>

          <div
            className={
              unstyled
                ? undefined
                : 'absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2'
            }
            aria-label="Choose slide"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                className={
                  unstyled
                    ? undefined
                    : [
                        'h-2.5 w-2.5 rounded-full',
                        index === activeSlide
                          ? 'bg-white'
                          : 'bg-white/50 hover:bg-white/75',
                      ].join(' ')
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}