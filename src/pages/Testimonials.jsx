import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const REVIEWS = [
  { initials: 'PR', name: 'Priya & Rohan', event: 'Wedding · Kolkata', stars: 5, review: 'From our first consultation to the final goodbye, The Event Originators were extraordinary. Shreya\'s eye for detail is unmatched — every flower arrangement was perfect, every transition seamless. Our guests still talk about how magical the evening felt.' },
  { initials: 'AS', name: 'Ananya & Siddharth', event: 'Sangeet & Wedding · Siliguri', stars: 5, review: 'They transformed our vision into reality so far beyond what we imagined. The sangeet setup was breathtaking — I genuinely cried when I saw the decor for the first time. Worth every rupee and more.' },
  { initials: 'MK', name: 'Meera & Karan', event: 'Engagement Ceremony', stars: 5, review: 'Professional, warm, and genuinely invested in our happiness. They managed every vendor and situation so calmly that my parents could actually relax and enjoy our engagement.' },
  { initials: 'IA', name: 'Isha & Arjun', event: 'Destination Wedding · Darjeeling', stars: 5, review: 'Our Darjeeling wedding was like a fairytale — misty mountains, fairy lights, and the most stunning floral arch I\'ve ever seen. The logistics were flawless. We felt completely taken care of.' },
  { initials: 'RV', name: 'Reshma & Vivek', event: 'Wedding · Durgapur', stars: 5, review: 'Every corner of our venue was a photo opportunity. The decor team\'s creativity and craftsmanship is at another level entirely. I\'ve recommended them to three friends already!' },
  { initials: 'DN', name: 'Deepika & Nikhil', event: 'Pre-Wedding · Sundarbans', stars: 5, review: 'Our pre-wedding shoot coordination was handled so thoughtfully. They scouted the most beautiful locations, briefed the photographer perfectly, and made the whole experience feel effortless and fun.' },
  { initials: 'SB', name: 'Soumya & Biswajit', event: 'Full Wedding · Kolkata', stars: 5, review: 'We were nervous about trusting a planner with our big day, but the team earned our trust within the first week. On the day itself, everything was so perfectly orchestrated — I actually got to enjoy my own wedding!' },
  { initials: 'AB', name: 'Aditi & Bhaskar', event: 'Anniversary Celebration', stars: 5, review: 'They planned our 25th anniversary surprise party and it was absolutely magical. My wife was in tears — happy tears! The attention to detail, the personalised touches, everything was beyond perfect.' },
  { initials: 'TN', name: 'Trisha & Neel', event: 'Wedding Weekend · Kolkata', stars: 5, review: 'Three days of celebrations — mehendi, sangeet, wedding — all managed flawlessly. The consistency of quality across all three events was remarkable. Truly professional, truly warm.' },
]

export default function Testimonials() {
  useScrollReveal()

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Quote */}
      <section className="testimonials-hero-quote" aria-label="Featured testimonial quote">
        <div className="container">
          <span className="text-script reveal">What Our Couples Say</span>
          <blockquote className="reveal">
            They didn't just plan our wedding — they gave us the most beautiful day of our lives, and the freedom to actually live it.
          </blockquote>
          <div className="testimonial-stars reveal" style={{ fontSize: '1.5rem', justifyContent: 'center', display: 'flex' }} aria-label="5 stars">★★★★★</div>
          <p className="reveal" style={{ marginTop: '.75rem', color: 'var(--accent-rose)', fontWeight: 500 }}>— Priya & Rohan, Wedding 2024</p>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{ background: 'var(--bg-page)', borderBottom: '1px solid rgba(58,46,46,.06)' }} aria-label="Review statistics">
        <div className="container">
          <div className="stats-row reveal">
            <div>
              <div className="stat-num">4.9 ★</div>
              <div className="stat-lbl">Average Rating</div>
            </div>
            <div>
              <div className="stat-num">200+</div>
              <div className="stat-lbl">Client Reviews</div>
            </div>
            <div>
              <div className="stat-num">98%</div>
              <div className="stat-lbl">Would Recommend</div>
            </div>
            <div>
              <div className="stat-num">500+</div>
              <div className="stat-lbl">Events Celebrated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Masonry */}
      <section className="section" aria-label="Client reviews">
        <div className="container">
          <span className="text-script text-center reveal">Stories of Love</span>
          <h2 className="section-heading reveal">Words From Our Couples</h2>
          <div className="gold-divider reveal" />

          <div className="reviews-masonry reveal" style={{ marginTop: '3rem' }}>
            {REVIEWS.map((r, i) => (
              <article key={i} className="review-card">
                <div className="review-card-header">
                  <div className="review-avatar" aria-hidden="true">{r.initials}</div>
                  <div className="review-meta">
                    <div className="name">{r.name}</div>
                    <div className="event">{r.event}</div>
                  </div>
                </div>
                <div className="review-stars" aria-label={`${r.stars} stars`}>{'★'.repeat(r.stars)}</div>
                <p>{r.review}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="section" style={{ background: 'var(--bg-section)' }} aria-label="Video testimonial">
        <div className="container">
          <span className="text-script text-center reveal">See For Yourself</span>
          <h2 className="section-heading reveal">Couples Share Their Story</h2>
          <div className="gold-divider reveal" />

          <div className="video-placeholder reveal" style={{ marginTop: '3rem' }} role="button" aria-label="Play video testimonial" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80"
              alt="Video testimonial thumbnail"
            />
            <div className="play-btn" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p style={{ position: 'relative', zIndex: 1, color: 'rgba(255,255,255,.8)', fontSize: '.9rem', marginTop: '.5rem' }}>
              Watch: Priya & Rohan's Wedding Story
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-label="Call to action">
        <div className="container">
          <span className="text-script" style={{ color: 'rgba(255,255,255,.8)' }}>Your Story Awaits</span>
          <h2>Ready to Create Your Own Beautiful Story?</h2>
          <p>Join over 200 couples who trusted us with their most special day.</p>
          <div className="btns">
            <Link to="/contact" className="btn btn-white">Begin Your Journey</Link>
            <Link to="/packages" className="btn" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff' }}>View Packages</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
