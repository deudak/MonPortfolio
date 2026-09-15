import { useScrollReveal } from '../hooks/useScrollReveal'
import { createElement } from 'react'
import { BriefcaseBusiness, Code2, Download, GraduationCap, Mail, MapPin, Phone, Target } from 'lucide-react'

const profileData = [
  { icon: MapPin, label: 'Localisation', value: 'Cameroun' },
  { icon: GraduationCap, label: 'Formation', value: 'Génie Logiciel — 2ème année' },
  { icon: BriefcaseBusiness, label: 'Statut', value: 'Étudiant & Développeur' },
  { icon: Target, label: 'Objectif', value: 'Devenir ingénieur logiciel innovant' },
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
                <Code2 size={20} />
              </a>
              <a href="mailto:deudakm2005@gmail.com" className="about__social-link" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+237679806237" className="about__social-link" aria-label="Téléphone">
                <Phone size={20} />
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
              {profileData.map(({ icon: Icon, label, value }) => (
                <div key={label} className="about__info-card">
                  <span className="about__info-icon" aria-hidden="true">{createElement(Icon, { size: 21 })}</span>
                  <div>
                    <span className="about__info-label">{label}</span>
                    <span className="about__info-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__cta">
              <a
                href="/CV%20DEUDAK%20YANGOUE%20MIGUEL.pdf"
                download="CV DEUDAK YANGOUE MIGUEL.pdf"
                className="btn btn--primary"
              >
                <span>Télécharger mon CV</span>
                <Download size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
