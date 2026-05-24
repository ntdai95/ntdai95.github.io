import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => { document.title = 'Tan Dai Ngo — Data Scientist & ML Engineer' }, [])

  return (
    <>
      {/* HERO */}
      <section className="section hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="badge-available">
              <span className="badge-pulse" />
              Available · Co-op Jan – Dec 2027 · Canada (Remote OK)
            </span>
            <p className="hero-kicker">
              Data Science · Machine Learning · Software Engineering
            </p>
            <h1>Tan Dai Ngo</h1>
            <p className="hero-subtitle">
              Data scientist and software engineer with experience in
              predictive modeling, distributed ML systems, backend
              microservices, and analytics dashboards. Actively seeking
              co-op/internship roles in data science, ML engineering,
              or software development — open to remote or relocating
              anywhere in Canada.
            </p>

            <div className="hero-actions">
              <a href="documents/Ngo Tan Dai - Resume.pdf" target="_blank" rel="noreferrer" className="btn primary">
                Resume (PDF) →
              </a>
              <Link to="/projects" className="btn primary">
                View Projects →
              </Link>
              <a href="#contact" className="btn outline">
                Contact Me
              </a>
            </div>

            <div className="metrics-strip">
              <div className="metric">
                <span className="metric-value">2</span>
                <span className="metric-label">Graduate Degrees</span>
              </div>
              <div className="metric">
                <span className="metric-value">2+</span>
                <span className="metric-label">Yrs Industry</span>
              </div>
              <div className="metric">
                <span className="metric-value">3</span>
                <span className="metric-label">Hackathons</span>
              </div>
              <div className="metric">
                <span className="metric-value">8.68</span>
                <span className="metric-label">Current GPA / 9</span>
              </div>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="hero-photo">
              <img src="images/profile.jpg" alt="Photo of Tan Dai Ngo" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container section-inner">
          <h2>About</h2>
          <p>
            I'm a data scientist and software engineer with experience in
            predictive modeling, distributed ML systems, ETL pipelines,
            and backend microservices. My background spans economics,
            computer science, and applied data science across industry,
            academia, and competitive settings. I value clean code,
            reproducible analysis, and clear communication with stakeholders.
          </p>

          <div className="highlight-grid">
            <div className="card">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-row">
                  <span className="skill-label">Languages</span>
                  <div className="skill-tags">
                    <span className="tag">Python</span>
                    <span className="tag">SQL</span>
                    <span className="tag">R</span>
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
                    <span className="tag">MLflow</span>
                    <span className="tag">Optuna</span>
                    <span className="tag">RAG</span>
                    <span className="tag">Sentence Transformers</span>
                  </div>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Data Eng</span>
                  <div className="skill-tags">
                    <span className="tag">Apache Spark</span>
                    <span className="tag">Kafka</span>
                    <span className="tag">Cassandra</span>
                    <span className="tag">Docker</span>
                    <span className="tag">AWS</span>
                  </div>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Backend</span>
                  <div className="skill-tags">
                    <span className="tag">Spring Boot</span>
                    <span className="tag">FastAPI</span>
                    <span className="tag">REST APIs</span>
                    <span className="tag">microservices</span>
                    <span className="tag">Qdrant</span>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section-alt">
        <div className="container section-inner">
          <h2>Education</h2>

          <div className="cards-grid">
            <article className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uvic-logo.png" alt="University of Victoria logo" />
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
            </article>

            <article className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uchicago-logo.png" alt="University of Chicago logo" />
                  </div>
                </div>
                <div>
                  <h3>Master of Science (MS), Computer Science</h3>
                  <p className="edu-meta">
                    University of Chicago · Sep 2020 – Mar 2022
                  </p>
                </div>
              </div>
            </article>

            <article className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uw-logo.png" alt="University of Washington logo" />
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
            </article>
          </div>
        </div>
      </section>

      {/* RECENT EXPERIENCE */}
      <section className="section section-darker">
        <div className="container section-inner">
          <h2>Recent Experience</h2>
          <div className="cards-grid three-col">
            <article className="card">
              <h3>Math and Computer Science Teacher</h3>
              <p className="edu-meta">
                APU American International Schools · Aug 2024 – Dec 2024 · Da Nang City, Vietnam
              </p>
              <p className="muted">
                Taught Python programming and core computer science concepts
                to 50+ high school and college students through hands-on coding
                projects.
              </p>
              <ul className="bullet-list">
                <li>
                  Designed project-based assignments emphasizing software
                  engineering fundamentals, including top-down design, OOP, and
                  code modularity.
                </li>
                <li>
                  Mentored students in debugging, algorithmic reasoning, and
                  performance optimization, reinforcing strong analytical
                  problem-solving skills.
                </li>
              </ul>
            </article>

            <article className="card">
              <h3>Software Developer</h3>
              <p className="edu-meta">
                T-Mobile (via BeaconFire Inc.) · Jun 2022 – Apr 2024 · Bellevue, WA, USA
              </p>
              <p className="muted">
                Developed microservices for the Roaming Business System using
                Spring Boot, Cassandra, Jenkins CI/CD, and Kafka pipelines.
              </p>
              <ul className="bullet-list">
                <li>
                  Designed and optimized Cassandra database schemas for partner
                  and workflow management microservices, handling 100k+ records
                  while maintaining query execution time under 3 seconds.
                </li>
                <li>
                  Automated weekly reprocessing of 50+ roaming service tests,
                  cutting manual effort by 80%.
                </li>
              </ul>
            </article>

            <article className="card">
              <h3>Accounting Intern</h3>
              <p className="edu-meta">
                Better Business Tax &amp; Accounting Corporation · Feb 2020 –
                May 2020 · Renton, WA, USA
              </p>
              <p className="muted">
                Managed 30+ client datasets in QuickBooks, processing 100+
                financial transactions daily with high data accuracy.
              </p>
              <ul className="bullet-list">
                <li>
                  Automated recurring payroll and tax reporting workflows,
                  reducing manual effort while delivering 10+ monthly filings
                  and quarterly compliance reports.
                </li>
                <li>
                  Developed financial dashboards and profit/loss analyses,
                  supporting data-driven insights into cash flow and client
                  profitability.
                </li>
              </ul>
            </article>
          </div>

          <Link to="/experience" className="btn-link">
            View full experience →
          </Link>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="section section-alt">
        <div className="container section-inner">
          <h2>Explore My Work</h2>
          <div className="cards-grid three-col">
            <article className="card">
              <h3>Projects</h3>
              <p className="muted">
                From predictive models and data analysis to
                image processing and interactive dashboards.
              </p>
              <Link to="/projects" className="btn-link">
                View all projects →
              </Link>
            </article>
            <article className="card">
              <h3>Hackathons</h3>
              <p className="muted">
                Shell.ai, IMC Trading 64 Bids, and Uncommon Hacks game
                development.
              </p>
              <Link to="/hackathons" className="btn-link">
                View hackathon work →
              </Link>
            </article>
            <article className="card">
              <h3>Credentials</h3>
              <p className="muted">
                Graduate CS coursework, data science certifications, awards,
                and applied quantitative training.
              </p>
              <Link to="/credentials" className="btn-link">
                View credentials →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container section-inner">
          <h2>Get In Touch</h2>
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
                className="btn outline"
              >
                Connect on LinkedIn
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
        </div>
      </section>
    </>
  )
}

export default Home
