import { Link } from 'react-router-dom'

function Courses() {
  return (
    <section className="section">
      <div className="container section-inner">
        <h2>Relevant Coursework</h2>
        <p className="muted">
          Selected courses that built my foundation in algorithms, data science,
          machine learning, statistics, applied mathematics, and economics.
        </p>

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
                <h3>University of Victoria</h3>
                <p className="edu-meta">
                  Graduate-level Data Science coursework
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                <strong>Algorithms and Data Models</strong> (CSC 501)
              </li>
              <li>
                <strong>Information Theory</strong> (ECE 515)
              </li>
              <li>
                <strong>Optimization for Machine Learning</strong> (ECE 503)
              </li>
              <li>
                <strong>Systems for Massive Datasets</strong> (ECE 502)
              </li>
              <li>
                <strong>Data Analysis and Pattern Recognition</strong> (ECE 535)
              </li>
              <li>
                <strong>Music Retrieval Techniques</strong> (ECE 575)
              </li>
            </ul>
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
                <h3>University of Chicago</h3>
                <p className="edu-meta">
                  Graduate-level Computer Science coursework
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                <strong>Advanced Python Programming</strong> (MPCS 51052)
              </li>
              <li>
                <strong>Algorithms</strong> (MPCS 55001)
              </li>
              <li>
                <strong>Applied Software Engineering</strong> (MPCS 51220)
              </li>
              <li>
                <strong>Databases</strong> (MPCS 53001)
              </li>
              <li>
                <strong>Distributed Systems</strong> (MPCS 52040)
              </li>
              <li>
                <strong>
                  Mathematics for Computer Science: Discrete Mathematics
                </strong>{' '}
                (MPCS 50103)
              </li>
              <li>
                <strong>Networks</strong> (MPCS 54001)
              </li>
              <li>
                <strong>Topics in Software Engineering</strong> (MPCS 51205)
              </li>
              <li>
                <strong>Web Development</strong> (MPCS 52553)
              </li>
            </ul>
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
                <h3>University of Washington</h3>
                <p className="edu-meta">
                  Undergraduate-level Data, Statistics, Applied Mathematics, and
                  Economics coursework
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                <strong>Applied Linear Algebra and Numerical Analysis</strong>{' '}
                (AMATH 352)
              </li>
              <li>
                <strong>Beginning Scientific Computing</strong> (AMATH 301)
              </li>
              <li>
                <strong>
                  Computational Finance and Financial Econometrics
                </strong>{' '}
                (ECON 424)
              </li>
              <li>
                <strong>Databases and Data Modelling</strong> (INFO 330)
              </li>
              <li>
                <strong>Econometric Theory and Practice</strong> (ECON 482)
              </li>
              <li>
                <strong>Elements of Statistical Methods</strong> (STAT 311)
              </li>
              <li>
                <strong>Foundational Skills for Data Science</strong> (INFO 201)
              </li>
              <li>
                <strong>
                  Industrial Organization and Price Analysis
                </strong>{' '}
                (ECON 404)
              </li>
              <li>
                <strong>
                  Introduction to Differential Equations and Applications
                </strong>{' '}
                (AMATH 351)
              </li>
              <li>
                <strong>Investment, Capital, and Finance</strong> (ECON 422)
              </li>
              <li>
                <strong>
                  Partial Differential Equations and Waves
                </strong>{' '}
                (AMATH 353)
              </li>
            </ul>
          </article>
        </div>
        <Link to="/" className="btn-link">
          Back to home →
        </Link>
      </div>
    </section>
  )
}

export default Courses
