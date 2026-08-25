import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { FadeIn, StaggerGrid, StaggerItem } from '../components/FadeIn'

function Credentials() {
  useEffect(() => { document.title = 'Credentials | Tan Dai Ngo' }, [])
  return (
    <PageTransition>
      {/* CERTIFICATES */}
      <section className="section">
        <div className="container section-inner">
          <FadeIn><h2>Certificates</h2></FadeIn>

          <StaggerGrid className="cards-grid">
            <StaggerItem as="article" className="card">
              <h3>Google Advanced Data Analytics Specialization</h3>
              <p className="edu-meta">
                Issued by Google · Jun 2025 · Credential ID: QCVMY2HTFEJL
              </p>
              <p className="muted">
                Specialization covering exploratory data analysis, visualization,
                statistical analysis, regression, and machine learning workflows
                in Python.
              </p>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">EDA</span>
                <span className="tag">Statistics</span>
                <span className="tag">Regression</span>
                <span className="tag">Machine Learning</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/QCVMY2HTFEJL"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View credential →
                </a>
              </p>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <h3>Certificate in Quantitative Managerial Economics</h3>
              <p className="edu-meta">
                Department of Economics, University of Washington · Apr 2019
              </p>
              <p className="muted">
                Coursework in microeconomics, quantitative methods, and
                managerial decision-making.
              </p>
              <div className="tag-list">
                <span className="tag">Microeconomics</span>
                <span className="tag">Quantitative Methods</span>
                <span className="tag">Econometrics</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="documents/Quantitative Managerial Economics.JPG"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View certificate →
                </a>
              </p>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* COURSEWORK */}
      <section className="section section-alt">
        <div className="container section-inner">
          <FadeIn><h2>Relevant Coursework</h2></FadeIn>
          <FadeIn delay={0.05}>
            <p className="muted">
              Selected courses that built my foundation in algorithms, data science,
              machine learning, statistics, applied mathematics, and economics.
            </p>
          </FadeIn>

          <StaggerGrid className="cards-grid" style={{ marginTop: '1.5rem' }}>
            <StaggerItem as="article" className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uvic-logo.png" alt="University of Victoria logo" loading="lazy" />
                  </div>
                </div>
                <div>
                  <h3>University of Victoria</h3>
                  <p className="edu-meta">Graduate-level Data Science coursework</p>
                </div>
              </div>
              <ul className="bullet-list">
                <li><strong>Algorithms and Data Models</strong> (CSC 501)</li>
                <li><strong>Information Theory</strong> (ECE 515)</li>
                <li><strong>Optimization for Machine Learning</strong> (ECE 503)</li>
                <li><strong>Systems for Massive Datasets</strong> (ECE 502)</li>
                <li><strong>Data Analysis and Pattern Recognition</strong> (ECE 535)</li>
                <li><strong>Data Mining</strong> (CSC 503)</li>
                <li><strong>Selected Topics in Computer Engineering: Artificial Intelligence</strong> (ECE 569A)</li>
                <li><strong>Applied Data Analysis</strong> (ECE 537)</li>
              </ul>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uchicago-logo.png" alt="University of Chicago logo" loading="lazy" />
                  </div>
                </div>
                <div>
                  <h3>University of Chicago</h3>
                  <p className="edu-meta">Graduate-level Computer Science coursework</p>
                </div>
              </div>
              <ul className="bullet-list">
                <li><strong>Advanced Python Programming</strong> (MPCS 51052)</li>
                <li><strong>Algorithms</strong> (MPCS 55001)</li>
                <li><strong>Applied Software Engineering</strong> (MPCS 51220)</li>
                <li><strong>Databases</strong> (MPCS 53001)</li>
                <li><strong>Distributed Systems</strong> (MPCS 52040)</li>
                <li><strong>Mathematics for Computer Science: Discrete Mathematics</strong> (MPCS 50103)</li>
                <li><strong>Networks</strong> (MPCS 54001)</li>
                <li><strong>Topics in Software Engineering</strong> (MPCS 51205)</li>
                <li><strong>Web Development</strong> (MPCS 52553)</li>
              </ul>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <div className="activity-header">
                <div className="activity-photo-wrapper">
                  <div className="activity-photo">
                    <img src="images/uw-logo.png" alt="University of Washington logo" loading="lazy" />
                  </div>
                </div>
                <div>
                  <h3>University of Washington</h3>
                  <p className="edu-meta">Undergraduate Data, Statistics, Applied Mathematics, and Economics coursework</p>
                </div>
              </div>
              <ul className="bullet-list">
                <li><strong>Applied Linear Algebra and Numerical Analysis</strong> (AMATH 352)</li>
                <li><strong>Beginning Scientific Computing</strong> (AMATH 301)</li>
                <li><strong>Computational Finance and Financial Econometrics</strong> (ECON 424)</li>
                <li><strong>Databases and Data Modelling</strong> (INFO 330)</li>
                <li><strong>Econometric Theory and Practice</strong> (ECON 482)</li>
                <li><strong>Elements of Statistical Methods</strong> (STAT 311)</li>
                <li><strong>Foundational Skills for Data Science</strong> (INFO 201)</li>
                <li><strong>Industrial Organization and Price Analysis</strong> (ECON 404)</li>
                <li><strong>Introduction to Differential Equations and Applications</strong> (AMATH 351)</li>
                <li><strong>Investment, Capital, and Finance</strong> (ECON 422)</li>
                <li><strong>Partial Differential Equations and Waves</strong> (AMATH 353)</li>
              </ul>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* AWARDS & LANGUAGES */}
      <section className="section">
        <div className="container section-inner">
          <FadeIn><h2>Honors, Awards &amp; Languages</h2></FadeIn>

          <StaggerGrid className="cards-grid">
            <StaggerItem as="article" className="card">
              <h3>IELTS Academic – Overall Band 8.0</h3>
              <p className="edu-meta">Issued by IDP IELTS · Jun 2024</p>
              <p className="muted">
                Listening: 7.5 · Reading: 8.5 · Writing: 7.5 · Speaking: 7.5
              </p>
              <p style={{ marginTop: '1rem' }}>
                <a href="documents/IELTS.pdf" target="_blank" rel="noreferrer" className="btn primary">
                  View score →
                </a>
              </p>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <h3>Annual Dean's List</h3>
              <p className="edu-meta">University of Washington · Aug 2019</p>
              <p className="muted">
                Recognized for academic excellence in undergraduate studies in
                Economics, Informatics, and Applied Mathematics.
              </p>
              <p style={{ marginTop: '1rem' }}>
                <a href="documents/Annual Dean's List.jpg" target="_blank" rel="noreferrer" className="btn primary">
                  View award →
                </a>
              </p>
            </StaggerItem>

            <StaggerItem as="article" className="card">
              <h3>FIDE Rating – 1825</h3>
              <p className="edu-meta">FIDE · Jan 2008</p>
              <p className="muted">
                Competitive chess player with official international rating.
              </p>
              <p style={{ marginTop: '1rem' }}>
                <a href="https://ratings.fide.com/profile/707937" target="_blank" rel="noreferrer" className="btn primary">
                  View profile →
                </a>
              </p>
            </StaggerItem>
          </StaggerGrid>

          <StaggerGrid className="cards-grid three-col" style={{ marginTop: '1.25rem' }}>
            <StaggerItem as="article" className="card">
              <h3>English</h3>
              <p className="muted">Full professional proficiency</p>
            </StaggerItem>
            <StaggerItem as="article" className="card">
              <h3>Hungarian</h3>
              <p className="muted">Native or bilingual proficiency</p>
            </StaggerItem>
            <StaggerItem as="article" className="card">
              <h3>Vietnamese</h3>
              <p className="muted">Limited working proficiency</p>
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

export default Credentials
