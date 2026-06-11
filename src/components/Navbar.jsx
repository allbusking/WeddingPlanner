import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/packages', label: 'Packages' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const isHome = pathname === '/'

  const navClass = `navbar ${scrolled ? 'scrolled' : ''} ${isHome ? 'navbar-hero-mode' : ''}`

  return (
    <>
      <nav className={navClass} aria-label="Main navigation">
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
            The Event Originators
            <span>West Bengal's Premier Planners</span>
          </Link>

          <div className="nav-links" role="menubar">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                role="menuitem"
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ padding: '.55rem 1.4rem', fontSize: '.85rem' }}>
              Book Now
            </Link>
          </div>

          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            style={{ color: isHome && !scrolled ? '#fff' : 'var(--text-body)' }}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <button
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '1.5rem', color: 'var(--text-body)', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >✕</button>
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className="btn btn-primary"
          onClick={() => setMobileOpen(false)}
          style={{ marginTop: '1rem' }}
        >
          Book Now ✦
        </Link>
      </div>
    </>
  )
}
