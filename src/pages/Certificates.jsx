import { Link } from 'react-router-dom'

function Certificates() {
  return (
    <section className="section">
      <div className="container section-inner">
        <h2>Certificates</h2>

        <div className="cards-grid">
          <article className="card">
            <h3>Google Advanced Data Analytics Specialization</h3>
            <p className="edu-meta">
              Issued by Google · Jun 2025 · Credential ID: QCVMY2HTFEJL
            </p>
            <p className="muted">
              End-to-end data analytics specialization: exploratory data
              analysis, visualization, statistical analysis, regression, and
              machine learning workflows using Python and industry-standard
              tooling.
            </p>
            <p>
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/QCVMY2HTFEJL"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View credential →
              </a>
            </p>
          </article>

          <article className="card">
            <h3>Certificate in Quantitative Managerial Economics</h3>
            <p className="edu-meta">
              Department of Economics, University of Washington · Apr 2019
            </p>
            <p className="muted">
              Coursework and applied training in microeconomics, quantitative
              methods, and managerial decision-making with emphasis on
              data-driven economic reasoning.
            </p>
            <p>
              <a
                href="documents/Quantitative Managerial Economics.JPG"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View certificate →
              </a>
            </p>
          </article>
        </div>
        <Link to="/" className="btn-link">
          Back to home →
        </Link>
      </div>
    </section>
  )
}

export default Certificates
