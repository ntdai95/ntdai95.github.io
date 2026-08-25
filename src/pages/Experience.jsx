import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { FadeIn, StaggerGrid, StaggerItem } from '../components/FadeIn'

function Experience() {
  useEffect(() => { document.title = 'Experience | Tan Dai Ngo' }, [])
  return (
    <PageTransition>
      <section className="section">
        <div className="container section-inner">
          <FadeIn><h2>Professional Experience</h2></FadeIn>

          <StaggerGrid className="timeline">
            <StaggerItem className="timeline-item">
              <article className="card">
                <h3>Mathematics and Computer Science Teacher</h3>
                <p className="edu-meta">
                  APU American International Schools · Aug 2024 – Dec 2024 · Da Nang City, Vietnam
                </p>
                <ul className="bullet-list">
                  <li>
                    Explained technical material to 50+ students with no prior
                    background, adjusting the pitch in real time.
                  </li>
                  <li>
                    Designed project-based assignments around top-down design,
                    OOP, and code modularity, adjusting the pace and depth of
                    each explanation live based on how the class responded.
                  </li>
                  <li>
                    Mentored students one-on-one on debugging and algorithmic
                    reasoning, walking through their own broken code instead of
                    handing them the fix.
                  </li>
                </ul>
                <div className="tag-list">
                  <span className="tag">Python</span>
                  <span className="tag">Algorithms</span>
                  <span className="tag">Data Structures</span>
                  <span className="tag">Web Development</span>
                  <span className="tag">Problem Solving</span>
                  <span className="tag">Analytical Thinking</span>
                  <span className="tag">Mentorship</span>
                </div>
              </article>
            </StaggerItem>

            <StaggerItem className="timeline-item">
              <article className="card">
                <h3>Software Developer</h3>
                <p className="edu-meta">
                  T-Mobile (via BeaconFire Inc.) · Jun 2022 – Apr 2024 · Bellevue, WA, USA
                </p>
                <ul className="bullet-list">
                  <li>
                    Documented the root cause of 20+ defects traced across
                    service boundaries, so each fix outlived the ticket.
                  </li>
                  <li>
                    Built and maintained REST endpoints across 5+ RBS
                    (Roaming Business System) services using Java and Spring
                    Boot.
                  </li>
                  <li>
                    Deployed features to production through Jenkins across
                    50+ releases.
                  </li>
                  <li>
                    Maintained report response times under 3 seconds on SQL
                    joins spanning multiple source databases.
                  </li>
                  <li>
                    Cut manual effort on recurring dataset builds and validation
                    runs by 80% by automating both in Python.
                  </li>
                </ul>
                <div className="tag-list">
                  <span className="tag">Java</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">Kafka</span>
                  <span className="tag">Cassandra</span>
                  <span className="tag">Jenkins</span>
                  <span className="tag">Splunk</span>
                  <span className="tag">Data Pipelines</span>
                  <span className="tag">Automation</span>
                  <span className="tag">CI/CD</span>
                </div>
              </article>
            </StaggerItem>

            <StaggerItem className="timeline-item">
              <article className="card">
                <h3>Accounting Intern</h3>
                <p className="edu-meta">
                  Better Business Tax &amp; Accounting Corporation · Feb 2020 – May 2020 · Renton, WA, USA
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
                <div className="tag-list">
                  <span className="tag">Data Analysis</span>
                  <span className="tag">QuickBooks</span>
                  <span className="tag">Automation</span>
                  <span className="tag">Financial Dashboards</span>
                  <span className="tag">Tax Reporting</span>
                </div>
              </article>
            </StaggerItem>
          </StaggerGrid>

          <p style={{ marginTop: '2.5rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <strong>Interested in working together?</strong>
            <a href="mailto:ngotandai95@gmail.com" className="btn secondary">Send Email</a>
            <a href="https://linkedin.com/in/ntdai95" target="_blank" rel="noreferrer" className="btn secondary">Connect on LinkedIn</a>
          </p>
          <Link to="/" className="btn primary">← Back to home</Link>
        </div>
      </section>
    </PageTransition>
  )
}

export default Experience
