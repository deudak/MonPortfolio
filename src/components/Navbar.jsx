import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Parcours' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleSectionChange = (e) => {
      setActiveSection(e.detail.section)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('section-change', handleSectionChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('section-change', handleSectionChange)
    }
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Navigation principale">
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <span className="navbar__logo-icon">DY</span>
          <span className="navbar__logo-text">DEUDAK</span>
        </a>

        <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__burger ${isOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu de navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
