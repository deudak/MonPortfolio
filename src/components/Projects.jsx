import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'TaskFlow',
    description:
      'Application de gestion de tâches collaborative avec authentification, tableaux Kanban, et notifications en temps réel.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    color: '#7c3aed',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: '📋',
  },
  {
    title: 'WeatherApp',
    description:
      'Application météo interactive affichant les prévisions en temps réel avec géolocalisation et visualisations graphiques.',
    technologies: ['JavaScript', 'API REST', 'CSS3', 'Chart.js'],
    color: '#06b6d4',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: '🌦️',
  },
  {
    title: 'E-Shop Platform',
    description:
      'Plateforme e-commerce complète avec panier, système de paiement, gestion des stocks et tableau de bord administrateur.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: '#10b981',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: '🛒',
  },
  {
    title: 'Portfolio Personnel',
    description:
      'Ce portfolio moderne et responsive, conçu avec React et Vite, pour présenter mon parcours et mes réalisations.',
    technologies: ['React', 'Vite', 'CSS3', 'Responsive'],
    color: '#f59e0b',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: '🚀',
  },
]

export default function Projects() {
  const sectionRef = useScrollReveal()

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header scroll-reveal">
          <span className="section__tag">Projets</span>
          <h2 className="section__title">
            Mes réalisations<span className="section__title-dot"> récentes</span>
          </h2>
          <p className="section__subtitle">
            Une sélection de projets qui illustrent mon approche technique et créative.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card scroll-reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className="project-card__header"
                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}
              >
                <span className="project-card__icon" style={{ background: `${project.color}20`, color: project.color }}>
                  {project.icon}
                </span>
                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`Voir ${project.title} sur GitHub`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`Voir la démo de ${project.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-card__tag" style={{ borderColor: `${project.color}40`, color: project.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
