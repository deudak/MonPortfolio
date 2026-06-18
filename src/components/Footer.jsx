const footerLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">DY</span>
            <span className="footer__name">DEUDAK YANGOUE</span>
            <p className="footer__tagline">
              Étudiant en Génie Logiciel · Développeur passionné
            </p>
          </div>

          <nav className="footer__nav" aria-label="Navigation du pied de page">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__links">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <h4 className="footer__nav-title">Contact</h4>
            <ul className="footer__links">
              <li>
                <a href="mailto:deudakm2005@gmail.com" className="footer__link">
                  deudakm2005@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+237679806237" className="footer__link">
                  +237 679 806 237
                </a>
              </li>
              <li>
                <a href="https://github.com/deudak" target="_blank" rel="noopener noreferrer" className="footer__link">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} DEUDAK YANGOUE MIUEL — Fait avec
            <span className="footer__heart" aria-label="amour"> ❤️</span> et React.
          </p>
        </div>
      </div>
    </footer>
  )
}
