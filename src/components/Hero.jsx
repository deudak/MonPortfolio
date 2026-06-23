import { useState, useEffect } from 'react'

const titles = [
  'Étudiant en Génie Logiciel',
  'Développeur Full-Stack',
  'Passionné d\'Innovation',
  'Créateur de Solutions',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timeout

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTitleIndex((prev) => (prev + 1) % titles.length)
    } else {
      const speed = isDeleting ? 40 : 80
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  const handleScroll = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Decorative elements */}
      <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--2" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--3" aria-hidden="true"></div>
      <div className="hero__grid-bg" aria-hidden="true"></div>

      <div className="hero__content">
        <p className="hero__greeting">
          <span className="hero__wave" aria-hidden="true">👋</span>
          Bonjour, je suis
        </p>

        <h1 className="hero__name">
          DEUDAK YANGOUE
          <span className="hero__name-highlight"> MIGUEL</span>
        </h1>

        <div className="hero__typing">
          <span className="hero__typing-text">{displayText}</span>
          <span className="hero__typing-cursor" aria-hidden="true">|</span>
        </div>

        <p className="hero__description">
          Étudiant en 2ème année de Génie Logiciel, passionné par le développement
          d'applications innovantes et la résolution de problèmes complexes.
          Je transforme les idées en solutions numériques performantes.
        </p>

        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary" onClick={(e) => handleScroll(e, 'contact')}>
            <span>Me contacter</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#projects" className="btn btn--secondary" onClick={(e) => handleScroll(e, 'projects')}>
            <span>Voir mes projets</span>
          </a>
          <a href="/CV_Deudak_Yangoue_Miguel.pdf" download="CV_Deudak_Yangoue_Miguel.pdf" className="btn btn--secondary">
            <span>Télécharger mon CV</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">10+</span>
            <span className="hero__stat-label">Projets</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">2ème</span>
            <span className="hero__stat-label">Année GL</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">5+</span>
            <span className="hero__stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot"></div>
        </div>
      </div>
    </section>
  )
}
