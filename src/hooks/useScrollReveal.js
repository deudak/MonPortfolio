import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    )

    // Observe the element itself and all children with scroll-reveal classes
    const revealElements = element.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
    )

    revealElements.forEach((el) => observer.observe(el))

    // Also observe the element itself if it has a reveal class
    if (
      element.classList.contains('scroll-reveal') ||
      element.classList.contains('scroll-reveal-left') ||
      element.classList.contains('scroll-reveal-right')
    ) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

export function useActiveSection(sectionIds) {
  const activeSectionRef = useRef('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSectionRef.current = entry.target.id
            // Dispatch custom event for navbar
            window.dispatchEvent(
              new CustomEvent('section-change', {
                detail: { section: entry.target.id },
              })
            )
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px',
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSectionRef
}
