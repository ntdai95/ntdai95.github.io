import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import CustomCursor from './CustomCursor'
import Preloader from './Preloader'
import BackToTop from './BackToTop'

function Layout({ children }) {
  const [theme, setTheme] = useState('dark')
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()
  const spotlightRef = useRef(null)
  const lenisRef = useRef(null)

  // ── Theme ──────────────────────────────────────────────────
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const next =
        stored === 'light' || stored === 'dark'
          ? stored
          : window.matchMedia?.('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark'
      applyTheme(next)
      setTheme(next)
    } catch {
      applyTheme('dark')
      setTheme('dark')
    }
  }, [])

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t)
    document.documentElement.style.background =
      t === 'light'
        ? 'linear-gradient(#eef1f6, #e4e7ec)'
        : 'radial-gradient(circle at top, #1e293b 0, #0f172a 55%)'
  }

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    try { localStorage.setItem('theme', next) } catch {}
  }

  // ── Lenis smooth scroll ────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenisRef.current = lenis

    // Wire lenis scroll to the progress bar
    lenis.on('scroll', ({ progress }) => {
      const bar = document.getElementById('progress-bar')
      if (bar) bar.style.width = `${progress * 100}%`
    })

    let rafId
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)

    return () => { cancelAnimationFrame(rafId); lenis.destroy(); lenisRef.current = null }
  }, [])

  // ── Close nav + scroll to top on route change ──────────────
  useEffect(() => { setNavOpen(false) }, [location.pathname])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname])

  // ── Spotlight cursor overlay ───────────────────────────────
  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return
    const onMove = (e) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(56,189,248,0.042), transparent 40%)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <div>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Preloader />
      <CustomCursor />

      {/* Spotlight overlay */}
      <div ref={spotlightRef} className="spotlight" aria-hidden="true" />

      {/* Film grain texture */}
      <div className="grain-overlay" aria-hidden="true" />

      <div id="progress-bar" className="progress-bar" />

      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-dot" />
            Tan Dai Ngo
          </Link>

          <nav className="nav" aria-label="Main navigation">
            <button
              type="button"
              className="nav-toggle"
              id="navToggle"
              aria-label="Toggle navigation"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span className={`hamburger ${navOpen ? 'open' : ''}`} aria-hidden="true">
                <span /><span /><span />
              </span>
            </button>
            <ul className={`nav-links ${navOpen ? 'open' : ''}`} id="navLinks">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/experience">Experience</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/hackathons">Hackathons</NavLink></li>
              <li><NavLink to="/credentials">Credentials</NavLink></li>
            </ul>
          </nav>

          <button
            type="button"
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <BackToTop />

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {currentYear} Tan Dai Ngo</span>
          <div className="footer-links">
            <a href="mailto:ngotandai95@gmail.com">Email</a>
            <a href="https://linkedin.com/in/ntdai95" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ntdai95" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <span>Data &amp; Software Portfolio</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
