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
  const [mobileOpenPath, setMobileOpenPath] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrolled(false)
  }, [pathname])

  const isHome = pathname === '/'
  const isSolidNav = scrolled || !isHome
  const isMobileOpen = mobileOpen && mobileOpenPath === pathname
  const openMobileMenu = () => {
    setMobileOpenPath(pathname)
    setMobileOpen(true)
  }
  const closeMobileMenu = () => setMobileOpen(false)
  const toggleMobileMenu = () => {
    if (isMobileOpen) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }

  const navClass = `navbar ${isSolidNav ? 'scrolled' : ''} ${isHome ? 'navbar-hero-mode' : ''}`

  return (
    <>
      <nav className={navClass} aria-label="Main navigation">
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
            className={`hamburger ${isMobileOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            style={{ color: isHome && !isSolidNav ? '#fff' : 'var(--text-body)' }}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <button
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '1.5rem', color: 'var(--text-body)', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >✕</button>
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={closeMobileMenu}
          >
            {item.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className="btn btn-primary"
          onClick={closeMobileMenu}
          style={{ marginTop: '1rem' }}
        >
          Book Now ✦
        </Link>
      </div>
    </>
  )
}
