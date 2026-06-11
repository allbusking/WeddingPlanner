import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import Lightbox from '../components/Lightbox'

// Each event section has a title, photos with varying span sizes, and a description
const EVENT_SECTIONS = [
  {
    id: 'weddings',
    title: 'Wedding Nights',
    titleStyle: 'serif',
    description: "Your wedding day is one of the most significant days of your life, and we ensure that every smile, tear, and joyous moment is curated beautifully. From traditional Bengali ceremonies to contemporary celebrations, we create timeless wedding experiences that tell your unique love story.",
    accentColor: '#C9898A',
    photos: [
      { src: 'https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Wedding couple at reception', span: 'col-1 row-2' },
      { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=80', alt: 'Outdoor wedding ceremony', span: 'col-2' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80', alt: 'Bridal portrait', span: 'col-1 row-2-right' },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Romantic couple portrait', span: 'col-1' },
      { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80', alt: 'Couple golden hour', span: 'col-1' },
      { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', alt: 'Wedding table decor', span: 'col-1' },
    ],
    layout: 'wedding',
  },
  {
    id: 'sangeet',
    title: 'Sangeet & Mehndi',
    titleStyle: 'script',
    description: "The nights before the wedding are filled with music, laughter, and vibrant colour. Our Sangeet and Mehndi events are a riot of joy — carefully choreographed to feel spontaneous, beautiful, and deeply personal. Every performance, every henna pattern, every decoration is part of a story only your family can tell.",
    accentColor: '#C9A96E',
    photos: [
      { src: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Sangeet night decor' },
      { src: 'https://images.unsplash.com/photo-1684813910513-11e6b30adc22?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mehndi ceremony' },
      { src: 'https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Sangeet celebration' },
      { src: 'https://images.unsplash.com/photo-1514178703120-3fa66528901d?q=80&w=953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mehndi evening decor' },
    ],
    layout: 'four-col',
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Stories',
    titleStyle: 'serif',
    description: "Before the vows, there's a love story worth telling. Our pre-wedding sessions capture the candid warmth between couples — stolen glances, shared laughter, quiet moments — across West Bengal's most picturesque locations. These photographs become the prologue to your forever.",
    accentColor: '#B5C4B1',
    photos: [
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80', alt: 'Pre-wedding couple portrait', span: 'wide' },
      { src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80', alt: 'Lakeside couple' },
      { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80', alt: 'Golden hour couple' },
      { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Romantic moment' },
    ],
    layout: 'pre-wedding',
  },
  {
    id: 'engagement',
    title: 'Engagement Ceremonies',
    titleStyle: 'script',
    description: "A ring, a promise, and a room full of the people you love most. We design engagement ceremonies that feel intimate and grand at the same time — where every detail from the floral backdrop to the lighting scheme is chosen to celebrate this milestone in your journey together.",
    accentColor: '#a394bfff',
    photos: [
      { src: 'https://images.unsplash.com/photo-1504257234803-3fa883dcdcc1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Ring ceremony' },
      { src: 'https://images.unsplash.com/photo-1708880119006-181f78d1d4e4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Engagement evening' },
      { src: 'https://images.unsplash.com/photo-1529519195486-16945f0fb37f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Engagement decor', span: 'tall' },
      { src: 'https://images.unsplash.com/photo-1729720667953-fe8f72ffaef6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Couple portrait' },
    ],
    layout: 'engagement',
  },
  {
    id: 'decor',
    title: 'Decor & Florals',
    titleStyle: 'serif',
    description: "Our decor philosophy is simple: every space should feel like it was made just for you. Whether it's a cascading floral arch, a candlelit table, or a grand mandap draped in marigolds and roses — we transform venues into immersive works of art that leave guests breathless.",
    accentColor: '#E8D5C4',
    photos: [
      { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=80', alt: 'Floral wedding decor' },
      { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', alt: 'Table decor setup' },
      { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Floral centrepiece' },
      { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=80', alt: 'Venue decoration' },
    ],
    layout: 'four-col',
  },
  {
    id: 'events',
    title: 'Corporate & Social Events',
    titleStyle: 'serif',
    description: "From intimate birthday soirées to large-scale corporate galas — we bring the same passion for detail and storytelling to every occasion. Because every celebration, however big or small, deserves to be extraordinary.",
    accentColor: '#C9898A',
    photos: [
      { src: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=700&q=80', alt: 'Corporate event' },
      { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'Birthday celebration' },
      { src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=700&q=80', alt: 'Evening event' },
    ],
    layout: 'three-col',
  },
]

// ── Clickable tile wrapper ───────────────────────────────────────────────────
function ClickTile({ className, onClick, children }) {
  return (
    <div
      className={`ev-tile${className ? ' ' + className : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{ cursor: 'zoom-in' }}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {children}
    </div>
  )
}

// ── Layout components ─────────────────────────────────────────────────────────
function WeddingLayout({ photos, onOpen }) {
  return (
    <div className="ev-grid ev-grid-wedding">
      <ClickTile className="ev-tall-left" onClick={() => onOpen(0)}>
        <img src={photos[0].src} alt={photos[0].alt} loading="lazy" />
      </ClickTile>
      <ClickTile className="ev-top-mid" onClick={() => onOpen(1)}>
        <img src={photos[1].src} alt={photos[1].alt} loading="lazy" />
      </ClickTile>
      <ClickTile className="ev-tall-right" onClick={() => onOpen(2)}>
        <img src={photos[2].src} alt={photos[2].alt} loading="lazy" />
      </ClickTile>
      <ClickTile className="ev-bot-left" onClick={() => onOpen(3)}>
        <img src={photos[3].src} alt={photos[3].alt} loading="lazy" />
      </ClickTile>
      <ClickTile className="ev-bot-mid" onClick={() => onOpen(4)}>
        <img src={photos[4].src} alt={photos[4].alt} loading="lazy" />
      </ClickTile>
      <ClickTile className="ev-bot-right-sm" onClick={() => onOpen(5)}>
        <img src={photos[5].src} alt={photos[5].alt} loading="lazy" />
      </ClickTile>
    </div>
  )
}

function FourColLayout({ photos, onOpen }) {
  return (
    <div className="ev-grid ev-grid-four">
      {photos.map((p, i) => (
        <ClickTile key={i} onClick={() => onOpen(i)}>
          <img src={p.src} alt={p.alt} loading="lazy" />
        </ClickTile>
      ))}
    </div>
  )
}

function PreWeddingLayout({ photos, onOpen }) {
  return (
    <div className="ev-grid ev-grid-prewedding">
      <ClickTile className="ev-wide-banner" onClick={() => onOpen(0)}>
        <img src={photos[0].src} alt={photos[0].alt} loading="lazy" />
      </ClickTile>
      <ClickTile onClick={() => onOpen(1)}>
        <img src={photos[1].src} alt={photos[1].alt} loading="lazy" />
      </ClickTile>
      <ClickTile onClick={() => onOpen(2)}>
        <img src={photos[2].src} alt={photos[2].alt} loading="lazy" />
      </ClickTile>
      <ClickTile onClick={() => onOpen(3)}>
        <img src={photos[3].src} alt={photos[3].alt} loading="lazy" />
      </ClickTile>
    </div>
  )
}

function EngagementLayout({ photos, onOpen }) {
  return (
    <div className="ev-grid ev-grid-engagement">
      <ClickTile onClick={() => onOpen(0)}>
        <img src={photos[0].src} alt={photos[0].alt} loading="lazy" />
      </ClickTile>
      <ClickTile className="ev-tall-center" onClick={() => onOpen(2)}>
        <img src={photos[2].src} alt={photos[2].alt} loading="lazy" />
      </ClickTile>
      <ClickTile onClick={() => onOpen(1)}>
        <img src={photos[1].src} alt={photos[1].alt} loading="lazy" />
      </ClickTile>
      <ClickTile onClick={() => onOpen(3)}>
        <img src={photos[3].src} alt={photos[3].alt} loading="lazy" />
      </ClickTile>
    </div>
  )
}

function ThreeColLayout({ photos, onOpen }) {
  return (
    <div className="ev-grid ev-grid-three">
      {photos.map((p, i) => (
        <ClickTile key={i} onClick={() => onOpen(i)}>
          <img src={p.src} alt={p.alt} loading="lazy" />
        </ClickTile>
      ))}
    </div>
  )
}

// ── EventSection with its own lightbox state ─────────────────────────────────
function EventSection({ section }) {
  const [lbIndex, setLbIndex] = useState(null)
  const photos = section.photos

  const open = useCallback((i) => setLbIndex(i), [])
  const close = useCallback(() => setLbIndex(null), [])
  const prev = useCallback(() => setLbIndex(i => (i - 1 + photos.length) % photos.length), [photos.length])
  const next = useCallback(() => setLbIndex(i => (i + 1) % photos.length), [photos.length])

  const renderLayout = () => {
    switch (section.layout) {
      case 'wedding':     return <WeddingLayout    photos={photos} onOpen={open} />
      case 'four-col':    return <FourColLayout     photos={photos} onOpen={open} />
      case 'pre-wedding': return <PreWeddingLayout  photos={photos} onOpen={open} />
      case 'engagement':  return <EngagementLayout  photos={photos} onOpen={open} />
      case 'three-col':   return <ThreeColLayout    photos={photos} onOpen={open} />
      default:            return <FourColLayout     photos={photos} onOpen={open} />
    }
  }

  return (
    <section className="ev-section reveal" id={section.id} aria-label={section.title}>
      {/* Section title */}
      <div className="ev-section-header">
        <h2
          className="ev-section-title"
          style={{
            fontFamily: section.titleStyle === 'script' ? 'var(--font-script)' : 'var(--font-display)',
            color: section.titleStyle === 'script' ? section.accentColor : 'var(--text-body)',
          }}
        >
          {section.title}
        </h2>
        <div className="ev-title-line" style={{ background: section.accentColor }} />
      </div>

      {/* Photo grid */}
      {renderLayout()}

      {/* Description */}
      <p className="ev-section-desc">{section.description}</p>

      {/* Lightbox for this section */}
      <Lightbox
        images={photos}
        index={lbIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}

export default function Gallery() {
  useScrollReveal()

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section className="page-hero gallery-page-hero" aria-label="Gallery page hero">
        <div className="container">
          {/* <span className="text-script">Visual Stories</span> */}
          <h1>A Gallery of<br />Unforgettable Moments</h1>
          <div className="gold-divider" />
          <p>Each frame tells a story of love, joy, and the extraordinary details that made it real.</p>
        </div>
      </section>

      {/* Jump links */}
      <nav className="ev-jump-nav" aria-label="Jump to gallery section">
        <div className="container">
          {EVENT_SECTIONS.map(s => (
            <a key={s.id} href={`#${s.id}`} className="ev-jump-pill">{s.title}</a>
          ))}
        </div>
      </nav>

      {/* Event sections */}
      <div className="ev-sections-wrap">
        <div className="container">
          {EVENT_SECTIONS.map(section => (
            <EventSection key={section.id} section={section} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="cta-band" aria-label="Call to action">
        <div className="container">
          <span className="text-script" style={{ color: 'rgba(255,255,255,.8)' }}>Let's Create Your Story</span>
          <h2>Your Celebration Could Be Next</h2>
          <p>Every photo in this gallery was once just a dream. Let's make yours a reality.</p>
          <div className="btns">
            <Link to="/contact" className="btn btn-white">Start Planning</Link>
            <Link to="/packages" className="btn" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff' }}>View Packages</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
