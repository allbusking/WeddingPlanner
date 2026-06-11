import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const PACKAGES = [
  {
    tier: 'Essential',
    name: 'Essential',
    price: '₹25,000',
    subtitle: 'Day-of Coordination',
    featured: false,
    features: [
      'Day-of coordination (12 hrs)',
      'Vendor confirmations & timeline',
      'Ceremony & reception management',
      'Emergency kit provided',
      'Rehearsal coordination',
      '1 dedicated coordinator',
      'Email support (2 weeks prior)',
    ],
    cta: 'Get Started',
  },
  {
    tier: 'Signature',
    name: 'Signature',
    price: '₹75,000',
    subtitle: 'Partial Planning',
    featured: true,
    features: [
      'Everything in Essential +',
      'Venue sourcing & tours',
      'Vendor recommendations & negotiations',
      'Budget tracking & management',
      'Mood board & style curation',
      '3 planning meetings',
      '2 dedicated coordinators on day',
      'WhatsApp support throughout',
      'Decor consultation included',
    ],
    cta: 'Most Popular Choice',
  },
  {
    tier: 'Luxury',
    name: 'Luxury',
    price: '₹1,50,000',
    subtitle: 'Full-Service Planning',
    featured: false,
    features: [
      'Everything in Signature +',
      'Complete end-to-end planning',
      'All vendor management & coordination',
      'Custom decor & floral design',
      'Catering menu curation',
      'Photography briefing',
      'Guest management system',
      'Full weekend coverage',
      'Post-event breakdown',
      '3 coordinators on event day',
      'Dedicated WhatsApp hotline',
    ],
    cta: 'Plan My Luxury Event',
  },
]

const COMPARISON = [
  { feature: 'Day-of Coordination', essential: true, signature: true, luxury: true },
  { feature: 'Vendor Management', essential: false, signature: true, luxury: true },
  { feature: 'Venue Sourcing', essential: false, signature: true, luxury: true },
  { feature: 'Budget Management', essential: false, signature: true, luxury: true },
  { feature: 'Decor & Floral Design', essential: false, signature: '✦ Consult', luxury: true },
  { feature: 'Custom Mood Boards', essential: false, signature: true, luxury: true },
  { feature: 'Guest Management', essential: false, signature: false, luxury: true },
  { feature: 'Full Weekend Coverage', essential: false, signature: false, luxury: true },
  { feature: 'Coordinators on Day', essential: '1', signature: '2', luxury: '3' },
  { feature: 'Support Channel', essential: 'Email', signature: 'WhatsApp', luxury: 'Dedicated Hotline' },
]

const FAQS = [
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 6–12 months in advance for full-service planning, and 3–6 months for partial planning. For day-of coordination, we suggest a minimum of 8 weeks. Popular dates fill up quickly, especially for destination weddings.' },
  { q: 'Do you travel outside West Bengal for events?', a: 'Absolutely! We have planned destination weddings across India — Rajasthan, Goa, Kerala, and beyond. Travel and accommodation for our team is billed separately. Please contact us for a custom quote.' },
  { q: 'Can I customise a package for my specific needs?', a: 'Every couple\'s story is unique, and so are our offerings. All our packages are fully customisable. We offer à la carte additions like photography coordination, catering management, and more. Let\'s chat about what you need!' },
  { q: 'What is your payment structure?', a: 'We require a 30% booking deposit to hold your date, followed by 40% at the midpoint of planning, and the remaining 30% seven days before your event. We accept bank transfers, UPI, and online payment methods.' },
  { q: 'How do you handle vendor relationships?', a: 'We have an established network of trusted vendors in West Bengal — photographers, caterers, decorators, makeup artists, and more. We negotiate on your behalf to secure the best quality at the best price, and we manage all communications so you don\'t have to.' },
  { q: 'What if something goes wrong on the day?', a: 'This is exactly what we\'re here for. Every event we manage has a comprehensive contingency plan. Our team carries emergency kits, maintains backup vendor contacts, and is trained to handle everything from weather changes to late caterers — calmly and invisibly.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {q}
        <span className="faq-icon" aria-hidden="true">+</span>
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Packages() {
  useScrollReveal()

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="page-hero" aria-label="Packages page hero">
        <div className="container">
          <span className="text-script">Invest in Forever</span>
          <h1>Packages Designed<br />for Every Love Story</h1>
          <div className="gold-divider" />
          <p>Transparent pricing, bespoke planning, and the assurance that every detail is in the most caring hands.</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section" aria-label="Pricing packages">
        <div className="container">
          <span className="text-script text-center reveal">Choose Your Experience</span>
          <h2 className="section-heading reveal">Our Planning Packages</h2>
          <div className="gold-divider reveal" />

          <div className="packages-grid" style={{ marginTop: '3rem' }}>
            {PACKAGES.map((pkg, i) => (
              <div key={pkg.tier} className={`package-card reveal reveal-delay-${i + 1} ${pkg.featured ? 'featured' : ''}`}>
                {pkg.featured && <div className="popular-badge">Most Popular</div>}
                <div className="package-tier">{pkg.tier}</div>
                <div className="package-name">{pkg.name}</div>
                <div className="package-price">{pkg.price}</div>
                <div className="package-subtitle">{pkg.subtitle}</div>
                <ul className="package-features">
                  {pkg.features.map((f, j) => (
                    <li key={j}>
                      <span className="check" aria-hidden="true">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section" style={{ background: 'var(--bg-section)' }} aria-label="Package comparison">
        <div className="container">
          <span className="text-script text-center reveal">Side by Side</span>
          <h2 className="section-heading reveal">Feature Comparison</h2>
          <div className="comparison-table-wrap reveal" style={{ marginTop: '2.5rem' }}>
            <table className="comparison-table" aria-label="Package features comparison">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Essential</th>
                  <th>Signature</th>
                  <th>Luxury</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    {['essential', 'signature', 'luxury'].map(pkg => (
                      <td key={pkg}>
                        {row[pkg] === true ? <span className="yes" aria-label="Included">✦</span>
                          : row[pkg] === false ? <span className="no" aria-label="Not included">—</span>
                          : row[pkg]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Events */}
      <section className="section" aria-label="Custom event planning">
        <div className="container">
          <div
            className="reveal"
            style={{
              background: 'linear-gradient(135deg, var(--bg-section) 0%, var(--accent-lavender) 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '4rem 3rem',
              textAlign: 'center',
              border: '1px solid rgba(201,169,110,.2)',
            }}
          >
            <span className="text-script" style={{ fontSize: '1.5rem' }}>Something Unique in Mind?</span>
            <h2 style={{ marginBottom: '.75rem' }}>Custom Event Planning</h2>
            <div className="gold-divider" />
            <p style={{ maxWidth: '560px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
              Planning a large multi-day celebration, a corporate retreat, or something entirely one-of-a-kind? We'd love to create a bespoke proposal just for you.
            </p>
            <Link to="/contact" className="btn btn-primary">Request a Custom Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-section)' }} aria-label="Frequently asked questions">
        <div className="container">
          <span className="text-script text-center reveal">Common Questions</span>
          <h2 className="section-heading reveal">Frequently Asked Questions</h2>
          <div className="gold-divider reveal" />
          <div className="faq-list reveal" style={{ marginTop: '3rem' }}>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-label="Call to action">
        <div className="container">
          <span className="text-script" style={{ color: 'rgba(255,255,255,.8)' }}>Let's Make Magic</span>
          <h2>Ready to Begin Planning?</h2>
          <p>Schedule your complimentary consultation today — no obligation, just a beautiful conversation.</p>
          <div className="btns">
            <Link to="/contact" className="btn btn-white">Book Free Consultation</Link>
            <a href="https://wa.me/919800000000" className="btn" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff' }}>WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  )
}
