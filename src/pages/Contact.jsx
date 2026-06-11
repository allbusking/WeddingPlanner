import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const EVENT_TYPES = [
  'Wedding Planning',
  'Pre-Wedding Coordination',
  'Engagement Ceremony',
  'Sangeet & Mehndi',
  'Destination Wedding',
  'Birthday & Anniversary',
  'Corporate Event',
  'Decor & Floral Design',
  'Other',
]

export default function Contact() {
  useScrollReveal()

  const [form, setForm] = useState({
    name: '', partner: '', email: '', phone: '',
    eventType: '', date: '', guests: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // In a real app, you'd send this to a backend/email service
    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="page-hero" aria-label="Contact page hero">
        <div className="container">
          <span className="text-script">Let's Connect</span>
          <h1>Start Planning<br />Your Dream Celebration</h1>
          <div className="gold-divider" />
          <p>Reach out and let's have our first conversation. No pressure — just warmth, and a shared love for beautiful events.</p>
        </div>
      </section>

      {/* Contact Split */}
      <section className="section" aria-label="Contact information and inquiry form">
        <div className="container">
          <div className="contact-split">
            {/* Left: Info */}
            <div className="reveal">
              <span className="text-script">Get in Touch</span>
              <h2 style={{ marginBottom: '1.5rem' }}>We'd Love to Hear From You</h2>
              <div className="gold-divider" style={{ margin: '0 0 2rem' }} />

              <div className="contact-info-cards">
                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">📞</div>
                  <div>
                    <h5>Phone</h5>
                    <a href="tel:+919800000000">+91 98000 00000</a>
                    <p style={{ fontSize: '.8rem', color: 'var(--text-hint)', marginTop: '.2rem' }}>Mon–Sat, 10am – 7pm</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">✉️</div>
                  <div>
                    <h5>Email</h5>
                    <a href="mailto:hello@theeventoriginators.in">hello@theeventoriginators.in</a>
                    <p style={{ fontSize: '.8rem', color: 'var(--text-hint)', marginTop: '.2rem' }}>We respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">📍</div>
                  <div>
                    <h5>Location</h5>
                    <p style={{ color: 'var(--text-body)', fontSize: '.95rem' }}>West Bengal, India</p>
                    <p style={{ fontSize: '.8rem', color: 'var(--text-hint)', marginTop: '.2rem' }}>Serving all of West Bengal & beyond</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon" aria-hidden="true">📸</div>
                  <div>
                    <h5>Instagram</h5>
                    <a href="https://instagram.com/theeventoriginators" target="_blank" rel="noopener noreferrer">@theeventoriginators</a>
                    <p style={{ fontSize: '.8rem', color: 'var(--text-hint)', marginTop: '.2rem' }}>Follow our daily celebrations</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919800000000?text=Hello%2C%20I%27m%20interested%20in%20your%20event%20planning%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat with Us on WhatsApp
              </a>

              <div className="social-icons" aria-label="Social media links">
                <a href="https://instagram.com/theeventoriginators" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Pinterest">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal reveal-delay-2">
              <div className="inquiry-form">
                {!submitted ? (
                  <>
                    <h3 style={{ fontStyle: 'italic', fontWeight: 300, marginBottom: '1.75rem' }}>Send Us an Inquiry</h3>
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="partner">Partner's Name *</label>
                          <input
                            id="partner"
                            name="partner"
                            type="text"
                            placeholder="Partner's name"
                            value={form.partner}
                            onChange={handleChange}
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number *</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 00000 00000"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="eventType">Event Type *</label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={form.eventType}
                            onChange={handleChange}
                            required
                            aria-required="true"
                          >
                            <option value="">Select event type</option>
                            {EVENT_TYPES.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="date">Event Date</label>
                          <input
                            id="date"
                            name="date"
                            type="date"
                            value={form.date}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group full">
                          <label htmlFor="guests">Approximate Guest Count</label>
                          <input
                            id="guests"
                            name="guests"
                            type="number"
                            placeholder="e.g. 150"
                            value={form.guests}
                            onChange={handleChange}
                            min="1"
                          />
                        </div>
                        <div className="form-group full">
                          <label htmlFor="message">Tell Us About Your Vision</label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Share your dream event details, theme ideas, special requirements..."
                            value={form.message}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <button type="submit" className="form-submit" id="inquiry-submit-btn">
                        Send My Inquiry ✦
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="form-success">
                    <div className="success-icon">💌</div>
                    <h3>Thank You for Reaching Out!</h3>
                    <div className="gold-divider" />
                    <p>We've received your inquiry and our team will get back to you within 24 hours. In the meantime, feel free to follow us on Instagram for daily inspiration.</p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                      <a href="https://instagram.com/theeventoriginators" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Follow on Instagram</a>
                      <a href="https://wa.me/919800000000" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Us</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-embed reveal" style={{ marginTop: '5rem' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471469.1322742066!2d87.85056795000001!3d22.892348399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
              title="The Event Originators location — West Bengal, India"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
