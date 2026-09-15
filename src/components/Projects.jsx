import { useScrollReveal } from '../hooks/useScrollReveal'
import { createElement } from 'react'
import { Camera, ClipboardList, CloudSun, Code2, ExternalLink, Rocket, ShoppingCart, Sparkles } from 'lucide-react'
import ProjectCarousel from './ProjectCarousel'

const projects = [
  {
    title: 'KamerWork',
    description:
      'Projet photo KamerWork avec galerie défilante horizontale pour valoriser les prises de vue et les réalisations visuelles.',
    technologies: ['React', 'CSS', 'LARAVEL', 'MYSQL', "VITE"],
    color: '#9b879b',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: Camera,
    images: ['/kamerwork1.JPG', '/kamerwork2.JPG', '/kamerwork3.JPG', '/kamerwork4.JPG'],
  },
  {
    title: 'Modellux',
    description:
      'Site haut de gamme Modellux, avec présentation de projet et photos en défilement horizontal pour un look élégant.',
    technologies: ['React', 'CSS', 'PHP', 'MYSQL'],
    color: '#b09a72',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: Sparkles,
    images: ['/modellux.JPG', '/modellux2.JPG'],
  },
  {
    title: 'Gestion de Stock',
    description:
      'Application de gestion de stock collaborative avec authentification, tableaux de bord, et notifications en temps réel.',
    technologies: ['javascript', 'Bootstrap', 'MYSQL', 'PHP'],
    color: '#9a8f7b',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: ClipboardList,
    images : ['/geststock1.JPG', '/geststock2.JPG'],
  },
  {
    title: 'WeatherApp',
    description:
      'Application météo interactive affichant les prévisions en temps réel avec géolocalisation et visualisations graphiques.',
    technologies: ['JavaScript', 'API REST', 'CSS3', 'Chart.js'],
    color: '#7899a3',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: CloudSun,
  },
  {
    title: 'E-Shop Platform',
    description:
      'Plateforme e-commerce complète avec panier, système de paiement, gestion des stocks et tableau de bord administrateur.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: '#7fa394',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: ShoppingCart,
  },
  {
    title: 'Portfolio Personnel',
    description:
      'Ce portfolio moderne et responsive, conçu avec React et Vite, pour présenter mon parcours et mes réalisations.',
    technologies: ['React', 'Vite', 'CSS3', 'Responsive'],
    color: '#a9987d',
    github: 'https://github.com/deudak',
    demo: '#',
    icon: Rocket,
  },
  {
    title: 'Cahier Craie',
    description:
      'Plateforme éducative en ligne pensée pour faciliter l’accès aux ressources et accompagner l’apprentissage.',
    technologies: ['Next.js', 'React', 'CSS'],
    color: '#789b91',
    github: 'https://github.com/deudak',
    demo: 'https://cahiercraie.com',
    icon: ClipboardList,
    images: ['/cahiercraie1.JPG', '/cahiercraie2.JPG'],
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
          {projects.map(({ icon: Icon, ...project }, index) => (
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
                  {createElement(Icon, { size: 24, strokeWidth: 2 })}
                </span>
                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`Voir ${project.title} sur GitHub`}
                  >
                    <Code2 size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`Voir la démo de ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                {project.images && project.images.length > 0 && (
                  <ProjectCarousel images={project.images} title={project.title} />
                )}

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
