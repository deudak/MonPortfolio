import { useState, useEffect } from 'react'

export default function ProjectCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!images || images.length <= 1 || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Scroll every 3 seconds

    return () => clearInterval(interval)
  }, [images, isHovered])

  if (!images || images.length === 0) return null

  if (images.length === 1) {
    return (
      <div className="project-carousel">
        <div className="project-carousel__item">
          <img src={images[0]} alt={title} />
        </div>
      </div>
    )
  }

  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      className="project-carousel project-carousel--multi"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="project-carousel__track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="project-carousel__item">
            <img src={src} alt={`${title} screenshot ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation arrows (visible on hover) */}
      <button
        onClick={handlePrev}
        className="project-carousel__btn project-carousel__btn--prev"
        aria-label="Image précédente"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="project-carousel__btn project-carousel__btn--next"
        aria-label="Image suivante"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Navigation dots */}
      <div className="project-carousel__dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`project-carousel__dot ${idx === currentIndex ? 'project-carousel__dot--active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setCurrentIndex(idx)
            }}
            aria-label={`Aller à l'image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
