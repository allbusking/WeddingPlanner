import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const PHILOSOPHY = [
  { icon: '🌹', title: 'Love is in Every Detail', desc: 'We obsess over the small things — because every petal, every fold of linen, every lighting cue tells your story.' },
  { icon: '🤝', title: 'Partnership Over Service', desc: "We don't just execute events. We become part of your family journey, from first call to final farewell." },
  { icon: '✨', title: 'Effortless Elegance', desc: "True luxury is invisible. Our goal is that everything flows seamlessly, leaving you free to be present." },
]

const MILESTONES = [
  { year: '2016', label: 'Founded in Kolkata' },
  { year: '2018', label: '100th Event Milestone' },
  { year: '2020', label: 'Expanded to Siliguri' },
  { year: '2021', label: 'Destination Weddings Launch' },
  { year: '2023', label: '500+ Events Celebrated' },
  { year: '2024', label: 'West Bengal\'s Top-Rated Planner' },
]

const WHY = [
  { icon: '🏆', title: 'Award-Winning Team', desc: 'Recognised as West Bengal\'s most trusted wedding studio.' },
  { icon: '📋', title: 'End-to-End Planning', desc: 'Vendor sourcing, logistics, styling — we handle it all.' },
  { icon: '❤️', title: 'Deeply Personal', desc: 'Your love story shapes every decision we make.' },
  { icon: '📞', title: '24/7 Support', desc: 'We\'re always just a message away, every step of the journey.' },
]

const TEAM = [
  { name: 'Shreya Banerjee', role: 'Lead Planner & Creative Director', img: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Shreya Banerjee, Lead Planner' },
  { name: 'Rahul Ghosh', role: 'Decor & Floral Designer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', alt: 'Rahul Ghosh, Decor Designer' },
  { name: 'Priyanka Das', role: 'Coordination Specialist', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', alt: 'Priyanka Das, Coordinator' },
  { name: 'Arnav Mukherjee', role: 'Vendor & Logistics Manager', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', alt: 'Arnav Mukherjee, Logistics' },
]

export default function About() {
  useScrollReveal()

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Page Hero */}
      <section className="page-hero" aria-label="About page hero">
        <div className="container">
          <span className="text-script">Our Story</span>
          <h1>Born from a Passion<br />for Beautiful Beginnings</h1>
          <div className="gold-divider" />
          <p>A boutique studio rooted in West Bengal's rich culture, dedicated to crafting celebrations that feel deeply personal and timelessly elegant.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" aria-label="Our story">
        <div className="container">
          <div className="about-story">
            <div className="about-portrait reveal">
              <img
                src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shreya Banerjee, founder of The Event Originators"
                loading="lazy"
              />
              <div className="about-portrait-badge">
                <span className="num">8+</span>
                <span className="lbl">Years of Love</span>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="text-script">A Message from Shreya</span>
              <h2>Planning Weddings is<br />My Life's Work & Joy</h2>
              <div className="gold-divider" style={{ margin: '1rem 0' }} />
              <p style={{ marginBottom: '1.25rem', lineHeight: '1.85' }}>
                I started The Event Originators in 2016 with a simple belief: every couple deserves a wedding that feels uniquely, authentically <em>them</em>. I had worked behind the scenes at dozens of events before that, and I kept seeing couples overwhelmed by decisions and vendors — unable to actually enjoy their own celebration.
              </p>
              <p style={{ marginBottom: '1.25rem', lineHeight: '1.85' }}>
                So I built a studio rooted in genuine partnership. We start by listening — to your story, your family, your dreams. Then we bring those dreams to life with every petal, every light, every carefully chosen detail.
              </p>
              <p style={{ lineHeight: '1.85' }}>
                Over 500 events later, the joy never gets old. Whether it's an intimate 50-guest ceremony in Darjeeling or a grand 800-guest celebration in Kolkata — we pour the same love into every single one.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary">Start Planning Together</Link>
                <Link to="/gallery" className="btn btn-outline">View Our Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section" style={{ background: 'var(--bg-section)' }} aria-label="Our philosophy">
        <div className="container">
          <span className="text-script text-center reveal">What We Believe</span>
          <h2 className="section-heading reveal">Our Philosophy</h2>
          <div className="gold-divider reveal" />
          <div className="philosophy-cards" style={{ marginTop: '3rem' }}>
            {PHILOSOPHY.map((p, i) => (
              <div key={p.title} className={`philosophy-card reveal reveal-delay-${i + 1}`}>
                <div className="icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" aria-label="Our milestones">
        <div className="container">
          <span className="text-script text-center reveal">Our Journey</span>
          <h2 className="section-heading reveal">Milestones We're Proud Of</h2>
          <div className="gold-divider reveal" />
          <div className="timeline reveal" style={{ marginTop: '4rem' }}>
            {MILESTONES.map(m => (
              <div key={m.year} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--bg-section)' }} aria-label="Why choose us">
        <div className="container">
          <span className="text-script text-center reveal">Why Couples Choose Us</span>
          <h2 className="section-heading reveal">The Difference You Can Feel</h2>
          <div className="why-grid" style={{ marginTop: '3rem' }}>
            {WHY.map((w, i) => (
              <div key={w.title} className={`why-item reveal reveal-delay-${i + 1}`}>
                <div className="why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" aria-label="Our team">
        <div className="container">
          <span className="text-script text-center reveal">The People Behind the Magic</span>
          <h2 className="section-heading reveal">Meet Our Team</h2>
          <div className="gold-divider reveal" />
          <div className="team-grid" style={{ marginTop: '3rem' }}>
            {TEAM.map((m, i) => (
              <div key={m.name} className={`team-card reveal reveal-delay-${i + 1}`}>
                <div className="team-card-photo">
                  <img src={m.img} alt={m.alt} loading="lazy" />
                </div>
                <div className="team-card-info">
                  <h4>{m.name}</h4>
                  <p className="role">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-label="Call to action">
        <div className="container">
          <h2>Let's Create Something Beautiful Together</h2>
          <p>Every great celebration begins with a single conversation.</p>
          <div className="btns">
            <Link to="/contact" className="btn btn-white">Schedule a Consultation</Link>
            <Link to="/packages" className="btn" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff' }}>Our Packages</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
