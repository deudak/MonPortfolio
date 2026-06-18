import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    period: '2025 — Présent',
    title: 'Étudiant en Génie Logiciel — 2ème année',
    organization: 'Formation Universitaire',
    description:
      'Approfondissement des concepts d\'architecture logicielle, bases de données avancées, développement web full-stack, et gestion de projets agile. Réalisation de projets en équipe avec des méthodologies professionnelles.',
    tags: ['Architecture', 'Full-Stack', 'Agile', 'UML'],
    type: 'education',
  },
  {
    period: '2024 — 2025',
    title: 'Étudiant en Génie Logiciel — 1ère année',
    organization: 'Formation Universitaire',
    description:
      'Acquisition des fondamentaux en programmation (Java, Python, C), algorithmique, structures de données, et introduction au développement web. Premiers projets académiques.',
    tags: ['Java', 'Python', 'Algorithmique', 'Web'],
    type: 'education',
  },
  {
    period: '2024',
    title: 'Projets personnels & Open Source',
    organization: 'GitHub — github.com/deudak',
    description:
      'Développement de projets personnels pour renforcer mes compétences pratiques : applications web, scripts d\'automatisation, et contributions à des projets open source.',
    tags: ['React', 'Node.js', 'Git', 'Open Source'],
    type: 'project',
  },
]

export default function Experience() {
  const sectionRef = useScrollReveal()

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header scroll-reveal">
          <span className="section__tag">Parcours</span>
          <h2 className="section__title">
            Mon parcours<span className="section__title-dot"> académique</span>
          </h2>
          <p className="section__subtitle">
            Les étapes clés de ma formation et de mon développement professionnel.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline__line" aria-hidden="true"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline__item scroll-reveal ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="timeline__dot" aria-hidden="true">
                <span>{exp.type === 'education' ? '🎓' : '💻'}</span>
              </div>

              <div className="timeline__card">
                <span className="timeline__period">{exp.period}</span>
                <h3 className="timeline__title">{exp.title}</h3>
                <span className="timeline__org">{exp.organization}</span>
                <p className="timeline__description">{exp.description}</p>
                <div className="timeline__tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="timeline__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
