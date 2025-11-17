import { Link } from 'react-router-dom'

function Awards() {
  return (
    <>
      <section className="section">
        <div className="container section-inner">
          <h2>Honors &amp; Awards</h2>

          <div className="cards-grid">
            <article className="card">
              <h3>IELTS Academic – Overall Band 8.0</h3>
              <p className="edu-meta">Issued by IDP IELTS · Jun 2024</p>
              <p className="muted">
                Listening: 7.5 · Reading: 8.5 · Writing: 7.5 · Speaking: 7.5
              </p>
              <p>
                <a
                  href="documents/IELTS.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  View score →
                </a>
              </p>
            </article>

            <article className="card">
              <h3>Annual Dean&apos;s List</h3>
              <p className="edu-meta">University of Washington · Aug 2019</p>
              <p className="muted">
                Recognized for academic excellence in undergraduate studies in
                Economics, Informatics, and Applied Mathematics.
              </p>
              <p>
                <a
                  href="documents/Annual Dean's List.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  View award →
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container section-inner">
          <h2>Languages</h2>
          <div className="cards-grid three-col">
            <article className="card">
              <h3>English</h3>
              <p className="muted">Full professional proficiency</p>
            </article>
            <article className="card">
              <h3>Hungarian</h3>
              <p className="muted">Native or bilingual proficiency</p>
            </article>
            <article className="card">
              <h3>Vietnamese</h3>
              <p className="muted">Limited working proficiency</p>
            </article>
          </div>
          <Link to="/" className="btn-link">
            Back to home →
          </Link>
        </div>
      </section>
    </>
  )
}

export default Awards
