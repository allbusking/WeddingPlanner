import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import Lightbox from '../components/Lightbox'

const SERVICES = [
  {
    icon: '💍',
    title: 'Wedding Planning',
    tagline: 'Your Perfect Day, Perfectly Planned',
    desc: 'Full-service wedding management from venue selection to final send-off. We coordinate every vendor, timeline, and detail so you can be fully present in your most precious moments.',
    price: 'Starting ₹75,000',
    photos: [
      { src: 'https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Grand wedding ceremony' },
      { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'Wedding reception' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Bride portrait' },
      { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80', alt: 'Couple portrait' },
    ],
    features: ['Venue scouting & booking', 'Full vendor management', 'Day-of coordination', 'Budget planning & tracking'],
    flip: false,
  },
  {
    icon: '🌸',
    title: 'Decor & Floral Design',
    tagline: 'Spaces That Take Your Breath Away',
    desc: 'Lush floral arches, curated centrepieces, immersive lighting installations — we transform spaces into breathtaking works of art that your guests will never forget.',
    price: 'Starting ₹18,000',
    photos: [
      { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Floral decor' },
      { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', alt: 'Table setting decor' },
      { src: 'https://images.unsplash.com/photo-1561489396-888724a1543d?w=600&q=80', alt: 'Dessert table' },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Couple amid flowers' },
    ],
    features: ['Custom floral installations', 'Lighting & draping design', 'Table centrepieces', 'Stage & mandap styling'],
    flip: true,
  },
  {
    icon: '🎶',
    title: 'Sangeet & Mehndi',
    tagline: 'Vibrant Nights, Timeless Memories',
    desc: 'Vibrant, joyful, and filled with music and colour. We design Sangeet and Mehndi nights that your family will reminisce about for decades — a perfect prelude to the big day.',
    price: 'Starting ₹30,000',
    photos: [
      { src: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Sangeet night decor' },
      { src: 'https://images.unsplash.com/photo-1684813910513-11e6b30adc22?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mehndi ceremony' },
      { src: 'https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Sangeet celebration' },
      { src: 'https://images.unsplash.com/photo-1514178703120-3fa66528901d?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mehndi evening decor' },
    ],
    features: ['Themed stage decor', 'Performer coordination', 'Mehndi artist booking', 'Photobooth setup'],
    flip: false,
  },
  {
    icon: '✈️',
    title: 'Destination Weddings',
    tagline: 'Love Knows No Boundaries',
    desc: 'From the misty hills of Darjeeling to royal heritage venues — we plan and execute destination weddings across West Bengal and India with flawless logistics and breathtaking aesthetics.',
    price: 'Starting ₹2,00,000',
    photos: [
      { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80', alt: 'Destination lakeside' },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Outdoor couple shoot' },
      { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80', alt: 'Scenic wedding' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Event venue' },
    ],
    features: ['Venue scouting across India', 'Guest travel & stay coordination', 'Local vendor network', 'Multi-day event management'],
    flip: true,
  },
  {
    icon: '💫',
    title: 'Engagement & Pre-Wedding',
    tagline: 'The Beginning of Your Story',
    desc: 'A perfectly styled ring ceremony and pre-wedding coordination — engagement shoots, mehendi prep, pre-wedding dinners — handled with the same care and precision as the day itself.',
    price: 'Starting ₹20,000',
    photos: [
      { src: 'https://images.unsplash.com/photo-1529519195486-16945f0fb37f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Engagement decor' },
      { src: 'https://images.unsplash.com/photo-1729720667953-fe8f72ffaef6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Couple portrait' },
      { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80', alt: 'Golden hour couple' },
      { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Romantic moment' },
    ],
    features: ['Ring ceremony planning', 'Pre-wedding shoot coordination', 'Engagement party decor', 'Guest management'],
    flip: false,
  },
  {
    icon: '🏢',
    title: 'Corporate & Social Events',
    tagline: 'Elevated Experiences for Every Occasion',
    desc: 'Product launches, galas, award nights, conferences, birthdays, anniversaries — elevated with our signature aesthetic and impeccable project management. Every event deserves the best.',
    price: 'Starting ₹15,000',
    photos: [
      { src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80', alt: 'Corporate gala' },
      { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Birthday event' },
      { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', alt: 'Social celebration' },
      { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'Event hall' },
    ],
    features: ['AV & technical setup', 'Catering management', 'Decor & branding', 'Guest experience design'],
    flip: true,
  },
]

const PROCESS = [
  { num: '01', title: 'Discovery Call', desc: 'We begin with a warm conversation to understand your vision, guest count, budget, and dreams.' },
  { num: '02', title: 'Bespoke Proposal', desc: 'Within 48 hours, we craft a personalised proposal including venue suggestions, mood boards, and investment breakdown.' },
  { num: '03', title: 'Planning & Curation', desc: 'We orchestrate every vendor, timeline, and detail — handling negotiations so you never have to worry.' },
  { num: '04', title: 'Flawless Execution', desc: 'On the day, our team ensures every element comes together seamlessly while you celebrate freely.' },
]

// ── Photo tile grid with click-to-lightbox ───────────────────────────────────
function ServicePhotoTiles({ photos, onOpen }) {
  return (
    <div className="service-photo-grid">
      {/* Top row: 2 equal tiles */}
      <div className="spg-top">
        <div className="spg-tile" onClick={() => onOpen(0)} style={{ cursor: 'zoom-in' }} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(0)}>
          <img src={photos[0].src} alt={photos[0].alt} loading="lazy" />
        </div>
        <div className="spg-tile" onClick={() => onOpen(1)} style={{ cursor: 'zoom-in' }} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(1)}>
          <img src={photos[1].src} alt={photos[1].alt} loading="lazy" />
        </div>
      </div>
      {/* Bottom row: wide + narrow */}
      <div className="spg-bottom">
        <div className="spg-tile spg-wide" onClick={() => onOpen(2)} style={{ cursor: 'zoom-in' }} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(2)}>
          <img src={photos[2].src} alt={photos[2].alt} loading="lazy" />
        </div>
        <div className="spg-tile spg-narrow" onClick={() => onOpen(3)} style={{ cursor: 'zoom-in' }} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(3)}>
          <img src={photos[3].src} alt={photos[3].alt} loading="lazy" />
        </div>
      </div>
    </div>
  )
}

// ── Service section with its own lightbox state ───────────────────────────────
function ServiceSection({ s }) {
  const [lbIndex, setLbIndex] = useState(null)
  const open  = useCallback((i) => setLbIndex(i), [])
  const close = useCallback(() => setLbIndex(null), [])
  const prev  = useCallback(() => setLbIndex(i => (i - 1 + s.photos.length) % s.photos.length), [s.photos.length])
  const next  = useCallback(() => setLbIndex(i => (i + 1) % s.photos.length), [s.photos.length])

  return (
    <article
      className={`service-split reveal ${s.flip ? 'service-split-flip' : ''}`}
      aria-label={s.title}
    >
      {/* Photo tiles */}
      <div className={`service-split-photos ${s.flip ? 'reveal-delay-2' : 'reveal-delay-1'}`}>
        <ServicePhotoTiles photos={s.photos} onOpen={open} />
      </div>

      {/* Content */}
      <div className={`service-split-content ${s.flip ? 'reveal-delay-1' : 'reveal-delay-2'}`}>
        <div className="service-split-icon" aria-hidden="true">{s.icon}</div>
        <span className="text-script" style={{ marginBottom: '.25rem' }}>{s.tagline}</span>
        <h2 className="service-split-title">{s.title}</h2>
        <div className="gold-divider" style={{ margin: '1rem 0' }} />
        <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>{s.desc}</p>
        <ul className="service-split-features">
          {s.features.map(f => (
            <li key={f}>
              <span className="feature-check" aria-hidden="true">✦</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="service-split-footer">
          <span className="service-price">{s.price}</span>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '.65rem 1.5rem', fontSize: '.9rem' }}>
            Enquire Now
          </Link>
        </div>
      </div>

      {/* Lightbox for this service's photos */}
      <Lightbox
        images={s.photos}
        index={lbIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </article>
  )
}

export default function Services() {
  useScrollReveal()

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="page-hero" aria-label="Services page hero">
        <div className="container">
          <span className="text-script">What We Offer</span>
          <h1>Services Crafted<br />with Heart &amp; Detail</h1>
          <div className="gold-divider" />
          <p>Six signature services — each delivered with the precision of professionals and the warmth of family.</p>
        </div>
      </section>

      {/* Services — split layout: photo tiles + text */}
      <section className="section" aria-label="All services">
        <div className="container">
          {SERVICES.map((s) => (
            <ServiceSection key={s.title} s={s} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section process-section" aria-label="How we work">
        <div className="container">
          <span className="text-script text-center reveal">Our Approach</span>
          <h2 className="section-heading reveal">How We Work</h2>
          <p className="section-subheading reveal">A thoughtful four-step process designed to make planning effortless and exciting for you.</p>
          <div className="process-steps">
            {PROCESS.map((p, i) => (
              <div key={p.num} className={`process-step reveal reveal-delay-${i + 1}`}>
                <div className="step-number">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-label="Call to action">
        <div className="container">
          <span className="text-script" style={{ color: 'rgba(255,255,255,.8)' }}>Begin Your Journey</span>
          <h2>Which Service Speaks to Your Heart?</h2>
          <p>Every beautiful celebration begins with a single conversation. Let's have ours.</p>
          <div className="btns">
            <Link to="/contact" className="btn btn-white">Get a Custom Quote</Link>
            <Link to="/packages" className="btn" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff' }}>View Packages</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
