import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import Lightbox from '../components/Lightbox'

const TESTIMONIALS = [
  { quote: "From the very first meeting, we knew we were in the best hands. Every detail was thoughtfully planned — our guests are still talking about the flowers!", author: "Priya & Rohan", event: "Wedding · Kolkata", stars: 5 },
  { quote: "The Event Originators turned our dream sangeet into a reality we couldn't have imagined. Pure magic from start to finish.", author: "Ananya & Siddharth", event: "Sangeet & Wedding · Siliguri", stars: 5 },
  { quote: "Professional, warm, and incredibly creative. They managed every vendor flawlessly so we could actually enjoy our own engagement party.", author: "Meera & Karan", event: "Engagement Ceremony", stars: 5 },
  { quote: "Our destination wedding in Darjeeling was breathtaking — beyond anything we could have planned ourselves. Forever grateful.", author: "Isha & Arjun", event: "Destination Wedding · Darjeeling", stars: 5 },
  { quote: "The decor was absolutely stunning. Each corner was a photo moment. They have an incredible eye for detail and luxury.", author: "Reshma & Vivek", event: "Wedding · Durgapur", stars: 5 },
]

// Rich tiled gallery — varying spans for visual interest
const GALLERY_TEASER = [
  { src: 'https://images.unsplash.com/photo-1729720667953-fe8f72ffaef6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Grand wedding reception', label: 'Reception', col: 'span 2', row: 'span 2' },
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', alt: 'Elegant decor setup', label: 'Decor', col: '', row: '' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Bridal portrait', label: 'Bridal', col: '', row: '' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Romantic couple pre-wedding', label: 'Pre-Wedding', col: '', row: '' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Wedding florals', label: 'Florals', col: '', row: '' },
  { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80', alt: 'Couple golden hour', label: 'Portraits', col: '', row: '' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', alt: 'Garden ceremony', label: 'Ceremony', col: 'span 2', row: '' },
  { src: 'https://images.unsplash.com/photo-1529519195486-16945f0fb37f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Engagement ring ceremony', label: 'Engagement', col: '', row: '' },
]

const SERVICES_PREVIEW = [
  { icon: '💍', title: 'Wedding Planning', desc: 'From intimate ceremonies to grand celebrations — every detail, perfectly orchestrated.' },
  { icon: '🌸', title: 'Decor & Florals', desc: 'Lush floral installations, exquisite table settings, and immersive thematic experiences.' },
  { icon: '✈️', title: 'Destination Weddings', desc: 'Curated venues across West Bengal and beyond — where your love story unfolds.' },
]

function StatCounter({ end, suffix = '', label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(end / (1800 / 16))
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Home() {
  useScrollReveal()
  const [slide, setSlide] = useState(0)
  const total = TESTIMONIALS.length
  const [lbIndex, setLbIndex] = useState(null)
  const openLb  = useCallback((i) => setLbIndex(i), [])
  const closeLb  = useCallback(() => setLbIndex(null), [])
  const prevLb   = useCallback(() => setLbIndex(i => (i - 1 + GALLERY_TEASER.length) % GALLERY_TEASER.length), [])
  const nextLb   = useCallback(() => setLbIndex(i => (i + 1) % GALLERY_TEASER.length), [])

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % total), 5000)
    return () => clearInterval(timer)
  }, [total])

  return (
    <main>
      {/* Hero — left-aligned content */}
      <section className="hero" aria-label="Hero banner">
        <div className="hero-bg" role="img" aria-label="Elegant wedding photography background" />
        {/* Stronger left gradient for text legibility */}
        <div className="hero-gradient-left" aria-hidden="true" />
        <div className="hero-content hero-content-left">
          {/* <span className="hero-script">✦ West Bengal's Premier Event Studio ✦</span> */}
          <h1>We Make Love<br />Look Beautiful</h1>
          <p>Crafting unforgettable celebrations with elegance, warmth, and an eye for every extraordinary detail.</p>
          <div className="hero-btns">
            <Link to="/packages" className="btn btn-primary">Explore Packages</Link>
            <Link to="/gallery" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,.6)', color: '#fff' }}>View Our Work</Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">Scroll</div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip" aria-label="Business statistics">
        <div className="container">
          <div className="stats-grid">
            <StatCounter end={500} suffix="+" label="Events Executed" />
            <StatCounter end={8} suffix="+" label="Years of Excellence" />
            <StatCounter end={200} suffix="+" label="Couples Celebrated" />
            <StatCounter end={50} suffix="+" label="Trusted Vendors" />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section" aria-label="About us preview">
        <div className="container">
          <div className="about-teaser">
            <div className="about-teaser-img reveal">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
                alt="Wedding planner with couple"
                loading="lazy"
              />
            </div>
            <div className="about-teaser-content reveal reveal-delay-2">
              <span className="text-script">Our Story</span>
              <h2>Where Every Celebration Becomes a Masterpiece</h2>
              <div className="gold-divider" />
              <p>With over 8 years of curating bespoke events across West Bengal, The Event Originators blends artistic vision with seamless logistics — so you can be present in every precious moment.</p>
              <p>We believe every love story deserves its own unique chapter. From the very first consultation to the final farewell, we are your devoted partners in creating magic.</p>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '.5rem' }}>Discover Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview" aria-label="Services overview">
        <div className="container">
          <div className="section-label reveal">
            <span className="text-script" style={{ marginBottom: 0 }}>What We Do</span>
          </div>
          <h2 className="section-heading reveal">Crafted for Every Celebration</h2>
          <p className="section-subheading reveal">From intimate engagements to grand destination weddings — we do it all with devotion.</p>
          <div className="services-grid">
            {SERVICES_PREVIEW.map((s, i) => (
              <div key={s.title} className={`service-card reveal reveal-delay-${i + 1}`}>
                <div className="service-icon" aria-hidden="true">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary reveal">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Gallery Teaser — rich mosaic tiles */}
      <section className="section" aria-label="Gallery preview">
        <div className="container">
          <span className="text-script text-center reveal">Our Portfolio</span>
          <h2 className="section-heading reveal">Moments We've Crafted</h2>
          <div className="gold-divider reveal" />

          <div className="gallery-mosaic reveal" style={{ marginBottom: '2rem', marginTop: '2rem' }}>
            {GALLERY_TEASER.map((item, i) => (
              <div
                key={i}
                className="gallery-tile"
                style={{
                  gridColumn: item.col || '',
                  gridRow: item.row || '',
                  cursor: 'zoom-in',
                }}
                onClick={() => openLb(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.label} photo`}
                onKeyDown={(e) => e.key === 'Enter' && openLb(i)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery-tile-overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-outline reveal">Explore Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Home gallery lightbox */}
      <Lightbox
        images={GALLERY_TEASER}
        index={lbIndex}
        onClose={closeLb}
        onPrev={prevLb}
        onNext={nextLb}
      />

      {/* Testimonials */}
      <section className="section testimonial-section" aria-label="Client testimonials">
        <div className="container">
          <span className="text-script text-center reveal">Words of Love</span>
          <h2 className="section-heading reveal">What Our Couples Say</h2>
          <div className="gold-divider reveal" />
          <div className="testimonial-carousel reveal">
            <div className="testimonial-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="testimonial-slide">
                  <div className="testimonial-stars" aria-label={`${t.stars} stars`}>{'★'.repeat(t.stars)}</div>
                  <blockquote>{t.quote}</blockquote>
                  <div className="testimonial-author">
                    <span className="name">{t.author}</span>
                    <span className="event">{t.event}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-dots" role="tablist">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === slide ? 'active' : ''}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  role="tab"
                  aria-selected={i === slide}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Strip */}
      <section className="section" aria-label="Instagram feed">
        <div className="container">
          <span className="text-script text-center reveal">Follow Our Journey</span>
          <h2 className="section-heading reveal">
            <a href="https://instagram.com/theeventoriginators" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              @theeventoriginators
            </a>
          </h2>
          <div className="insta-strip reveal" style={{ marginTop: '2rem' }}>
            {[
              'photo-1519741347686-c1e0aadf4611',
              'photo-1511285560929-80b456fea0bc',
              'photo-1606800052052-a08af7148866',
              'photo-1583939003579-730e3918a45a',
              'photo-1465495976277-4387d4b0b4c6',
              'photo-1532712938310-34cb3982ef74',
            ].map((id, i) => (
              <a key={i} href="https://instagram.com/theeventoriginators" target="_blank" rel="noopener noreferrer" className="insta-tile" aria-label={`Instagram post ${i + 1}`}>
                <img src={`https://images.unsplash.com/${id}?w=400&q=70`} alt={`Instagram post ${i + 1}`} loading="lazy" />
                <div className="insta-tile-overlay">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band" aria-label="Call to action">
        <div className="container">
          <span className="text-script" style={{ color: 'rgba(255,255,255,.8)', marginBottom: '.5rem' }}>Let's Begin</span>
          <h2>Ready to Create Your Dream Celebration?</h2>
          <p>Schedule a complimentary consultation and let's start crafting your story.</p>
          <div className="btns">
            <Link to="/contact" className="btn btn-white">Book a Free Consultation</Link>
            <Link to="/packages" className="btn" style={{ borderColor: 'rgba(255,255,255,.5)', color: '#fff', border: '2px solid rgba(255,255,255,.5)' }}>View Packages</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
