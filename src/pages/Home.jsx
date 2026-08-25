import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import AnimatedNumber from '../components/AnimatedNumber'
import SplitText from '../components/SplitText'
import MagneticWrap from '../components/MagneticWrap'
import { FadeIn, StaggerGrid, StaggerItem } from '../components/FadeIn'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = ['Data Scientist', 'Machine Learning Engineer', 'Software Engineer']

const TECHS = [
  'Python', 'SQL', 'Java', 'Go',
  'scikit-learn', 'XGBoost', 'CatBoost', 'PyTorch', 'MLflow', 'Optuna',
  'Apache Spark', 'Kafka', 'Cassandra', 'Docker', 'AWS',
  'Spring Boot', 'Flask', 'FastAPI', 'RAG', 'Qdrant', 'Sentence Transformers',
  'Neo4j', 'MongoDB', 'RabbitMQ', 'PySpark', 'FinTwitBERT', 'DistilBERT',
  'Ollama', 'Streamlit',
]

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
}

function Home() {
  useEffect(() => { document.title = 'Tan Dai Ngo | Data Scientist & ML Engineer' }, [])
  const role = useTypewriter(ROLES, 80, 45, 2000)

  // Parallax on scroll
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <PageTransition>
      {/* HERO */}
      <section ref={heroRef} className="section hero">
        <div className="hero-glow" aria-hidden="true" />
        <motion.div
          className="container hero-grid"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          style={{ opacity: heroOpacity }}
        >
          <motion.div className="hero-text" variants={heroItem} style={{ y: textY }}>
            <span className="badge-available">
              <span className="badge-pulse" />
              Available · Co-op Jan – Dec 2027 · Canada (Remote OK)
            </span>
            <h1 style={{ margin: '0 0 0.2rem' }}>
              <SplitText delay={0.35}>Tan Dai Ngo</SplitText>
            </h1>
            <p className="hero-kicker">
              <span aria-live="polite" aria-atomic="true">{role}</span><span className="type-cursor" aria-hidden="true" />
            </p>
            <p className="hero-subtitle">
              Data scientist and software engineer with experience in
              predictive modeling, distributed ML systems, backend
              microservices, and analytics dashboards. Actively seeking
              co-op / internship roles in data science, ML engineering,
              or software development, open to remote work or relocating
              anywhere in Canada.
            </p>

            <div className="hero-actions">
              <MagneticWrap>
                <a href="documents/Ngo Tan Dai - Resume.pdf" target="_blank" rel="noreferrer" className="btn primary">
                  Resume (PDF) →
                </a>
              </MagneticWrap>
              <MagneticWrap>
                <Link to="/projects" className="btn primary">
                  View Projects →
                </Link>
              </MagneticWrap>
              <MagneticWrap>
                <a href="#contact" className="btn secondary">
                  Contact Me
                </a>
              </MagneticWrap>
            </div>

            <div className="metrics-strip">
              <div className="metric">
                <span className="metric-value">
                  <AnimatedNumber to={2} duration={1000} />
                </span>
                <span className="metric-label">Graduate Degrees</span>
              </div>
              <div className="metric">
                <span className="metric-value">
                  <AnimatedNumber to={2} suffix="+" duration={1000} />
                </span>
                <span className="metric-label">Years Industry</span>
              </div>
              <div className="metric">
                <span className="metric-value">
                  <AnimatedNumber to={3} duration={1200} />
                </span>
                <span className="metric-label">Hackathons</span>
              </div>
              <div className="metric">
                <span className="metric-value">
                  <AnimatedNumber to={8.68} from={8} decimals={2} suffix=" / 9.00" duration={1600} />
                </span>
                <span className="metric-label">Current GPA</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="hero-photo-wrapper" variants={heroItem} style={{ y: photoY }}>
            <div className="hero-photo">
              <img src="images/profile.jpg" alt="Photo of Tan Dai Ngo" fetchPriority="high" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* TECH MARQUEE */}
      <div className="marquee-section" aria-label="Technologies">
        <div className="marquee-track">
          {[...TECHS, ...TECHS].map((t, i) => (
            <span key={i} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="container section-inner">
          <FadeIn><h2>About</h2></FadeIn>
          <FadeIn delay={0.05}>
            <p>
              I'm a data scientist and software engineer whose work runs
              through predictive modeling, distributed ML systems, ETL
              pipelines, and backend microservices. I also have an economics
              degree, which comes up more often than people expect. I've
              built this across a production job, two graduate programs, and
              a handful of competitions. Given the choice, I'd rather ship
              something small and correct than something large and untested.
            </p>
          </FadeIn>

          <StaggerGrid className="highlight-grid">
            <StaggerItem>
              <div className="card">
                <h3>Technical Skills</h3>
                <div className="skills-grid">
                  <div className="skill-row">
                    <span className="skill-label">Languages</span>
                    <div className="skill-tags">
                      <span className="tag">Python</span>
                      <span className="tag">SQL</span>
                      <span className="tag">Java</span>
                      <span className="tag">Go</span>
                    </div>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">ML / DS</span>
                    <div className="skill-tags">
                      <span className="tag">scikit-learn</span>
                      <span className="tag">XGBoost</span>
                      <span className="tag">CatBoost</span>
                      <span className="tag">PyTorch</span>
                      <span className="tag">MLflow</span>
                      <span className="tag">Optuna</span>
                      <span className="tag">RAG</span>
                      <span className="tag">Sentence Transformers</span>
                      <span className="tag">DistilBERT</span>
                    </div>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">Data Eng</span>
                    <div className="skill-tags">
                      <span className="tag">Apache Spark</span>
                      <span className="tag">Kafka</span>
                      <span className="tag">Cassandra</span>
                      <span className="tag">MongoDB</span>
                      <span className="tag">RabbitMQ</span>
                      <span className="tag">Docker</span>
                      <span className="tag">AWS</span>
                    </div>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">Backend</span>
                    <div className="skill-tags">
                      <span className="tag">Spring Boot</span>
                      <span className="tag">Flask</span>
                      <span className="tag">FastAPI</span>
                      <span className="tag">REST APIs</span>
                      <span className="tag">microservices</span>
                      <span className="tag">Qdrant</span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card">
                <h3>Recent Highlights</h3>
                <ul className="bullet-list">
                  <li>Google Advanced Data Analytics Specialization (Google, 2025)</li>
                  <li>
                    Shell.ai Hackathon 2025 – end-to-end machine learning system for sustainable fuel blending
                  </li>
                  <li>
                    IMC 64 Bids Coding Challenge – final round (top 15% of 1,500 participants)
                  </li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section-alt">
        <div className="container section-inner">
          <FadeIn><h2>Education</h2></FadeIn>

          <StaggerGrid className="cards-grid">
            <StaggerItem as="article" className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uvic-logo.png" alt="University of Victoria logo" loading="lazy" />
                  </div>
                </div>
                <div>
                  <h3>Master of Engineering (MEng), Applied Data Science</h3>
                  <p className="edu-meta">
                    University of Victoria · Sep 2025 – Dec 2027 (Expected)
                    <br />
                    GPA: 8.68 / 9.00
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uchicago-logo.png" alt="University of Chicago logo" loading="lazy" />
                  </div>
                </div>
                <div>
                  <h3>Master of Science (MS), Computer Science</h3>
                  <p className="edu-meta">
                    University of Chicago · Sep 2020 – Mar 2022
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uw-logo.png" alt="University of Washington logo" loading="lazy" />
                  </div>
                </div>
                <div>
                  <h3>Bachelor of Science (BS), Economics</h3>
                  <p className="edu-meta">
                    University of Washington · Sep 2015 – Aug 2019
                    <br />
                    Minors: Informatics, Applied Mathematics · GPA: 3.57 / 4.00
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* RECENT EXPERIENCE */}
      <section className="section section-darker">
        <div className="container section-inner">
          <FadeIn><h2>Recent Experience</h2></FadeIn>
          <StaggerGrid className="cards-grid three-col">
            <StaggerItem as="article" className="card">
              <h3>Mathematics and Computer Science Teacher</h3>
              <p className="edu-meta">
                APU American International Schools
                <br />
                Aug 2024 – Dec 2024 · Da Nang City, Vietnam
              </p>
              <ul className="bullet-list">
                <li>
                  Explained technical material to 50+ students with no prior
                  background, adjusting the pitch in real time.
                </li>
                <li>
                  Designed project-based assignments around top-down design,
                  OOP, and code modularity.
                </li>
                <li>
                  Mentored students one-on-one on debugging and algorithmic
                  reasoning, walking through their own broken code instead of
                  handing them the fix.
                </li>
              </ul>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <h3>Software Developer</h3>
              <p className="edu-meta">
                T-Mobile (via BeaconFire Inc.)
                <br />
                Jun 2022 – Apr 2024 · Bellevue, WA, USA
              </p>
              <ul className="bullet-list">
                <li>
                  Built and maintained REST endpoints across 5+ RBS
                  (Roaming Business System) microservices in Java and Spring
                  Boot, keeping Cassandra query response times under 3
                  seconds across multiple data sources.
                </li>
                <li>
                  Traced 20+ cross-service defects to their root cause and
                  deployed features via Jenkins across 50+ releases.
                </li>
                <li>
                  Automated reprocessing of rejected roaming tests with
                  weekly retries using Kafka, cutting manual effort by 80%.
                </li>
              </ul>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <h3>Accounting Intern</h3>
              <p className="edu-meta">
                Better Business Tax &amp; Accounting Corporation
                <br />
                Feb 2020 – May 2020 · Renton, WA, USA
              </p>
              <ul className="bullet-list">
                <li>
                  Managed 30+ client datasets in QuickBooks, processing 100+
                  financial transactions a day.
                </li>
                <li>
                  Automated recurring payroll and tax reporting workflows,
                  delivering 10+ monthly filings and quarterly compliance
                  reports on schedule.
                </li>
                <li>
                  Built profit/loss dashboards clients used to track cash flow
                  and profitability month to month.
                </li>
              </ul>
            </StaggerItem>
          </StaggerGrid>

          <Link to="/experience" className="btn primary" style={{ marginTop: '1.5rem' }}>
            View full experience →
          </Link>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="section section-alt">
        <div className="container section-inner">
          <FadeIn><h2>Explore My Work</h2></FadeIn>
          <StaggerGrid className="cards-grid three-col">
            <StaggerItem as="article" className="card">
              <h3>Projects</h3>
              <p className="muted">
                Ten projects spanning network security, distributed data
                platforms, NLP, and financial modeling, each with GitHub
                code behind it.
              </p>
              <Link to="/projects" className="btn primary">
                View all projects →
              </Link>
            </StaggerItem>
            <StaggerItem as="article" className="card">
              <h3>Hackathons</h3>
              <p className="muted">
                Shell.ai's fuel-blending challenge, IMC's 64 Bids trading
                competition, and a 48-hour game jam.
              </p>
              <Link to="/hackathons" className="btn primary">
                View hackathon work →
              </Link>
            </StaggerItem>
            <StaggerItem as="article" className="card">
              <h3>Credentials</h3>
              <p className="muted">
                Coursework from three universities, a Google data analytics
                certificate, and honors spanning academics and competitive
                chess.
              </p>
              <Link to="/credentials" className="btn primary">
                View credentials →
              </Link>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container section-inner">
          <FadeIn><h2>Get In Touch</h2></FadeIn>
          <FadeIn delay={0.08}>
            <div className="cta-card">
              <h3>Let's work together</h3>
              <p>
                I'm actively seeking co-op / internship roles in data science, ML engineering,
                or software development (Jan – Dec 2027). Open to remote or relocating
                anywhere in Canada.
              </p>
              <div className="cta-actions">
                <a href="mailto:ngotandai95@gmail.com" className="btn primary">
                  Send Email →
                </a>
                <a
                  href="https://www.linkedin.com/in/ntdai95"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  Connect on LinkedIn →
                </a>
              </div>
              <div className="cta-links">
                <a href="mailto:ngotandai95@gmail.com" className="cta-link-item">
                  <span>✉️</span>
                  ngotandai95@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ntdai95"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-link-item"
                >
                  <span>🔗</span>
                  linkedin.com/in/ntdai95
                </a>
                <a
                  href="https://github.com/ntdai95"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-link-item"
                >
                  <span>🧑‍💻</span>
                  github.com/ntdai95
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
