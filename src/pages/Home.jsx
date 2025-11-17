function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="hero-kicker">
              Data Analytics · Machine Learning · Software Engineering
            </p>
            <h1>Tan Dai Ngo</h1>
            <p className="hero-subtitle">
              Data analyst and software developer with experience in predictive
              modeling, image processing, analytics dashboards, backend
              microservices, and algorithmic trading challenges. I enjoy
              turning data into decisions and building reliable systems
              end-to-end.
            </p>

            <div className="hero-actions">
              <a href="#/projects" className="btn primary">
                View Projects →
              </a>
              <a href="#contact" className="btn outline">
                Contact Me
              </a>
            </div>

            <div className="hero-meta">
              <span>📍 Victoria, BC</span>
              <span>📞 250-661-9530</span>
              <span>
                ✉️{' '}
                <a href="mailto:ngotandai95@gmail.com">
                  ngotandai95@gmail.com
                </a>
              </span>
            </div>

            <div className="hero-links">
              <a
                href="https://www.linkedin.com/in/ntdai95"
                target="_blank"
                rel="noreferrer"
                className="chip-link"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/ntdai95"
                target="_blank"
                rel="noreferrer"
                className="chip-link"
              >
                GitHub →
              </a>
              <a
                href="documents/Ngo Tan Dai - Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="chip-link"
              >
                Resume (PDF) →
              </a>
            </div>
          </div>

          {/* Profile photo */}
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
            I’m a data-driven problem solver with experience across analytics,
            predictive modeling, and backend software engineering. I’ve built
            ETL pipelines and dashboards in hospitality, developed microservices
            in the telecom domain, and taught computer science and Python
            programming at the college level.
          </p>
          <p>
            My background spans economics, computer science, and applied data
            science, and I’ve participated in competitive hackathons such as
            the Shell.ai Hackathon and IMC 64 Bids Coding Challenge. I value
            clean code, reproducible analysis, and clear communication with
            stakeholders.
          </p>

          <div className="highlight-grid">
            <div className="card">
              <h3>What I Work With</h3>
              <p className="muted">
                Python · SQL · R · Java · pandas · scikit-learn · gradient
                boosting · REST APIs · Docker · Kafka · Power BI · AWS ·
                microservices.
              </p>
            </div>
            <div className="card">
              <h3>Recent Highlights</h3>
              <ul className="bullet-list">
                <li>Google Advanced Data Analytics Specialization (Google, 2025).</li>
                <li>
                  Shell.ai Hackathon 2025 – predictive modeling for sustainable
                  fuel blending.
                </li>
                <li>
                  IMC 64 Bids Coding Challenge – final round (top 15%).
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
            {/* UVic */}
            <article className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img
                      src="images/uvic-logo.png"
                      alt="University of Victoria logo"
                    />
                  </div>
                </div>
                <div>
                  <h3>Master of Engineering (MEng), Applied Data Science</h3>
                  <p className="edu-meta">
                    University of Victoria · Sep 2025 – Aug 2026 (Expected)
                  </p>
                </div>
              </div>
            </article>

            {/* UChicago */}
            <article className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img
                      src="images/uchicago-logo.png"
                      alt="University of Chicago logo"
                    />
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

            {/* UW */}
            <article className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img
                      src="images/uw-logo.png"
                      alt="University of Washington logo"
                    />
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
      <section className="section section-alt">
        <div className="container section-inner">
          <h2>Recent Experience</h2>
          <div className="cards-grid three-col">
            <article className="card">
              <h3>Data Analyst</h3>
              <p className="edu-meta">
                Linh Dan Hotel · Apr 2023 – Aug 2025 · Ho Chi Minh City, Vietnam
                · Hybrid
              </p>
              <p className="muted">
                Built SQL ETL pipelines and Python/Power BI reporting workflows
                to support hotel operations, pricing, and cost optimization.
              </p>
              <ul className="bullet-list">
                <li>
                  20+ daily SQL queries and 1,000+ records integrated into
                  analysis-ready datasets.
                </li>
                <li>Automated reporting, reducing manual reporting time by 30%.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Software Developer</h3>
              <p className="edu-meta">
                T-Mobile (BeaconFire Inc.) · Jun 2022 – Feb 2023 · Bellevue, WA
                · Hybrid
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
              <h3>Computer Science Teacher</h3>
              <p className="edu-meta">
                APU American International Schools · Aug 2024 – Dec 2024 · Da
                Nang City, Vietnam · On-site
              </p>
              <p className="muted">
                Taught Python and web development to over 50 students through
                hands-on projects and real-world examples.
              </p>
              <ul className="bullet-list">
                <li>Emphasized top-down design, OOP, and debugging best practices.</li>
              </ul>
            </article>
          </div>

          <a href="#/experience" className="btn-link">
            View full experience →
          </a>
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
                From predictive models and image processing to backend
                microservices and interactive dashboards.
              </p>
              <a href="#/projects" className="btn-link">
                View all projects →
              </a>
            </article>
            <article className="card">
              <h3>Hackathons</h3>
              <p className="muted">
                Shell.ai, IMC Trading 64 Bids, and Uncommon Hacks game
                development.
              </p>
              <a href="#/hackathons" className="btn-link">
                View hackathon work →
              </a>
            </article>
            <article className="card">
              <h3>Courses &amp; Certificates</h3>
              <p className="muted">
                Graduate CS coursework, data science, and applied quantitative
                training.
              </p>
              <a href="#/courses" className="btn-link">
                View coursework →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container section-inner">
          <h2>Contact</h2>
          <p>
            If you’d like to discuss data science, analytics, or software
            engineering roles, feel free to reach out:
          </p>
          <ul className="contact-list">
            <li>
              ✉️ Email:{' '}
              <a href="mailto:ngotandai95@gmail.com">
                ngotandai95@gmail.com
              </a>
            </li>
            <li>📞 Phone: 250-661-9530</li>
            <li>
              🔗 LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/ntdai95"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ntdai95
              </a>
            </li>
            <li>
              🧑‍💻 GitHub:{' '}
              <a
                href="https://github.com/ntdai95"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ntdai95
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Home
