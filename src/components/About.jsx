import { useScrollReveal } from '../hooks/useScrollReveal'

const profileData = [
  { icon: '📍', label: 'Localisation', value: 'Cameroun' },
  { icon: '🎓', label: 'Formation', value: 'Génie Logiciel — 2ème année' },
  { icon: '💼', label: 'Statut', value: 'Étudiant & Développeur' },
  { icon: '🎯', label: 'Objectif', value: 'Devenir ingénieur logiciel innovant' },
]

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header scroll-reveal">
          <span className="section__tag">À propos</span>
          <h2 className="section__title">
            Qui suis-je<span className="section__title-dot">?</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__intro scroll-reveal">
            <div className="about__avatar">
              <img
                src="/maphotos.jpeg"
                alt="DEUDAK YANGOUE MIGUEL"
                className="about__avatar-img"
              />
            </div>
            <h3 className="about__name">DEUDAK YANGOUE MIGUEL</h3>
            <p className="about__role">Étudiant en Génie Logiciel</p>
            <div className="about__socials">
              <a href="https://github.com/deudak" target="_blank" rel="noopener noreferrer" className="about__social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:deudakm2005@gmail.com" className="about__social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              <a href="tel:+237679806237" className="about__social-link" aria-label="Téléphone">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="about__content scroll-reveal">
            <p className="about__text">
              Passionné par l'informatique et le développement logiciel, je suis actuellement
              en <strong>2ème année de Génie Logiciel</strong>. Mon parcours m'a permis de
              développer des compétences solides en programmation, conception d'architectures
              logicielles et gestion de projets.
            </p>
            <p className="about__text">
              J'aime relever des défis techniques, collaborer en équipe et créer des solutions
              qui ont un impact réel. Mon objectif est de devenir un ingénieur logiciel accompli,
              capable de concevoir des applications innovantes et performantes.
            </p>

            <div className="about__info-grid">
              {profileData.map((item) => (
                <div key={item.label} className="about__info-card">
                  <span className="about__info-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <span className="about__info-label">{item.label}</span>
                    <span className="about__info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__cta">
              <a
                href="/CV_Deudak_Yangoue_Miguel.pdf"
                download="CV_Deudak_Yangoue_Miguel.pdf"
                className="btn btn--primary"
              >
                <span>Télécharger mon CV</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
