import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CheckCircle2, Code2, Mail, Phone, Send, XCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'deudakm2005@gmail.com',
    href: 'mailto:deudakm2005@gmail.com',
  },
  {
    icon: <Phone size={22} />,
    label: 'Téléphone',
    value: '+237 679 806 237',
    href: 'tel:+237679806237',
  },
  {
    icon: <Code2 size={22} />,
    label: 'GitHub',
    value: 'github.com/deudak',
    href: 'https://github.com/deudak',
  },
]

// Pour recevoir réellement les e-mails sur deudakm2005@gmail.com :
// 1. Créez un compte gratuit sur https://formspree.io/
// 2. Créez un nouveau formulaire et copiez son ID (ex: "xvgonzry")
// 3. Remplacez 'YOUR_FORMSPREE_FORM_ID' ci-dessous par cet ID
const FORMSPREE_FORM_ID = 'xgojejgl'

export default function Contact() {
  const sectionRef = useScrollReveal()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const emailAddress = 'deudakm2005@gmail.com'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Fallback mailto si Formspree n'est pas encore configuré
    if (!FORMSPREE_FORM_ID || FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_FORM_ID') {
      const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`
      window.location.href = mailto
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
      return
    }

    setStatus('sending')
    try {
      const formId = FORMSPREE_FORM_ID.includes('/')
        ? FORMSPREE_FORM_ID.split('/').pop()
        : FORMSPREE_FORM_ID

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus(null), 5000)
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

            <button type="submit" className="btn btn--primary contact__submit" disabled={status === 'sending'}>
              <span>{status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}</span>
              {status !== 'sending' && <Send size={20} />}
            </button>

            {status === 'success' && (
              <div className="contact__success">
                <CheckCircle2 size={20} /> Message envoyé avec succès ! Je vous répondrai rapidement.
              </div>
            )}

            {status === 'error' && (
              <div className="contact__error">
                <XCircle size={20} /> Une erreur est survenue lors de l'envoi. Veuillez réessayer.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
