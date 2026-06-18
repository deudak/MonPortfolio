import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'deudakm2005@gmail.com',
    href: 'mailto:deudakm2005@gmail.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Téléphone',
    value: '+237 679 806 237',
    href: 'tel:+237679806237',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/deudak',
    href: 'https://github.com/deudak',
  },
]

export default function Contact() {
  const sectionRef = useScrollReveal()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header scroll-reveal">
          <span className="section__tag">Contact</span>
          <h2 className="section__title">
            Travaillons<span className="section__title-dot"> ensemble</span>
          </h2>
          <p className="section__subtitle">
            Vous avez un projet en tête ou une opportunité ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info scroll-reveal">
            <h3 className="contact__info-title">Mes coordonnées</h3>
            <p className="contact__info-text">
              Je suis disponible pour des collaborations, des stages ou des missions freelance.
              Contactez-moi et discutons de votre projet !
            </p>

            <div className="contact__cards">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact__card"
                >
                  <span className="contact__card-icon">{info.icon}</span>
                  <div>
                    <span className="contact__card-label">{info.label}</span>
                    <span className="contact__card-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form scroll-reveal" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Nom complet</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="contact__input"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="contact__input"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject" className="contact__label">Sujet</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
                className="contact__input"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Décrivez votre projet ou votre demande..."
                className="contact__input contact__textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              <span>Envoyer le message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>

            {status === 'success' && (
              <div className="contact__success">
                <span>✅</span> Message envoyé avec succès ! Je vous répondrai rapidement.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
