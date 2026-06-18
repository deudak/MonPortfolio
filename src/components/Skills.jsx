import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 75 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'PHP', level: 70 },
      { name: 'Node.js', level: 65 },
    ],
  },
  {
    title: 'Base de données',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 60 },
      { name: 'PostgreSQL', level: 55 },
      { name: 'Firebase', level: 50 },
    ],
  },
  {
    title: 'Outils & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 70 },
      { name: 'Docker', level: 45 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useScrollReveal()

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header scroll-reveal">
          <span className="section__tag">Compétences</span>
          <h2 className="section__title">
            Mon arsenal<span className="section__title-dot"> technique</span>
          </h2>
          <p className="section__subtitle">
            Les technologies et outils que je maîtrise pour donner vie à vos projets.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="skills__card scroll-reveal"
              style={{ transitionDelay: `${catIndex * 0.1}s` }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon" aria-hidden="true">{category.icon}</span>
                <h3 className="skills__card-title">{category.title}</h3>
              </div>

              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{ '--skill-level': `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${skill.name}: ${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
