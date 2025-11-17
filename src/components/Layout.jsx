import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Layout({ children }) {
  const [theme, setTheme] = useState('dark')
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  // Initialize theme on mount (no big flash)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      let nextTheme

      if (stored === 'light' || stored === 'dark') {
        nextTheme = stored
      } else if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
      ) {
        nextTheme = 'light'
      } else {
        nextTheme = 'dark'
      }

      setTheme(nextTheme)
      document.documentElement.setAttribute('data-theme', nextTheme)
      if (nextTheme === 'light') {
        document.documentElement.style.background =
          'linear-gradient(#eef1f6, #e4e7ec)'
      } else {
        document.documentElement.style.background =
          'radial-gradient(circle at top, #1e293b 0, #0f172a 55%)'
      }
    } catch (e) {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.style.background =
        'radial-gradient(circle at top, #1e293b 0, #0f172a 55%)'
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    try {
      localStorage.setItem('theme', nextTheme)
    } catch (e) {
      /* ignore */
    }
    if (nextTheme === 'light') {
      document.documentElement.style.background =
        'linear-gradient(#eef1f6, #e4e7ec)'
    } else {
      document.documentElement.style.background =
        'radial-gradient(circle at top, #1e293b 0, #0f172a 55%)'
    }
  }

  // Close mobile nav on route change
  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname])

  // 🔹 Scroll to top on route change so pages don't start at the bottom
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // use 'smooth' if you want extra smoothness
    })
  }, [location.pathname])

  // Route-level fade: fade <main> on every route change
  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return
    main.classList.remove('page-fade')
    // force reflow to restart animation
    // eslint-disable-next-line no-unused-expressions
    main.offsetWidth
    main.classList.add('page-fade')
  }, [location.pathname])

  // Scroll reveal on each page
  useEffect(() => {
    const revealSelectors = [
      '.hero-text',
      '.hero-photo-wrapper',
      '.section-inner > h2',
      '.section-inner > p',
      '.highlight-grid > *',
      '.cards-grid > .card',
      '.project-card',
      '.activity-header',
      '.tag-list',
      '.footer-inner'
    ]

    const elements = Array.from(
      document.querySelectorAll(revealSelectors.join(','))
    )

    if (!elements.length) return

    // Reset classes so we can re-apply animation per route
    elements.forEach((el) => {
      el.classList.remove(
        'reveal',
        'reveal-visible',
        'reveal-delay-1',
        'reveal-delay-2',
        'reveal-delay-3'
      )
    })

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal-visible'))
      return
    }

    let idx = 0
    elements.forEach((el) => {
      el.classList.add('reveal')
      const delayClass = `reveal-delay-${(idx % 3) + 1}`
      el.classList.add(delayClass)
      idx += 1
    })

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  const currentYear = new Date().getFullYear()

  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo" />

          <nav className="nav">
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="Toggle navigation"
              onClick={() => setNavOpen((v) => !v)}
            >
              ☰
            </button>
            <ul
              className={`nav-links ${navOpen ? 'open' : ''}`}
              id="navLinks"
            >
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience">Experience</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/hackathons">Hackathons</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/certificates">Certificates</NavLink>
              </li>
              <li>
                <NavLink to="/awards">Awards &amp; Languages</NavLink>
              </li>
            </ul>
          </nav>

          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            © <span id="year">{currentYear}</span> Tan Dai Ngo
          </span>
          <span>Data &amp; Software Portfolio</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
