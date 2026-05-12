import { Link } from 'react-router-dom'

function Experience() {
  return (
    <section className="section">
      <div className="container section-inner">
        <h2>Professional Experience</h2>

        <div className="cards-grid">
          <article className="card">
            <h3>Math and Computer Science Teacher</h3>
            <p className="edu-meta">
              APU American International Schools · Aug 2024 – Dec 2024 · Da Nang
              City, Vietnam
            </p>
            <ul className="bullet-list">
              <li>
                Taught Python programming and core computer science concepts 
                to 50+ high school and college students through hands-on 
                coding projects.
              </li>
              <li>
                Designed project-based assignments emphasizing software 
                engineering fundamentals, including top-down design, OOP, 
                and code modularity.
              </li>
              <li>
                Mentored students in debugging, algorithmic reasoning, 
                and performance optimization, reinforcing strong analytical 
                problem-solving skills.
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

          <article className="card">
            <h3>Software Developer</h3>
            <p className="edu-meta">
              T-Mobile (via BeaconFire Inc.) · Jun 2022 – Apr 2024 · Bellevue, WA,
              USA
            </p>
            <ul className="bullet-list">
              <li>
                Automated Kafka reprocessing pipelines for 50+ weekly roaming 
                service tests, cutting manual intervention by 80%.
              </li>
              <li>
                Redesigned Cassandra schemas for partner/workflow microservices 
                (100k+ records), maintaining query latency under 3s.
              </li>
              <li>
                Developed Spring Boot microservices integrated with Jenkins 
                CI/CD and Splunk, enabling scalable downstream analytics.
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

          <article className="card">
            <h3>Accounting Intern</h3>
            <p className="edu-meta">
              Better Business Tax &amp; Accounting Corporation · Feb 2020 – May
              2020 · Renton, WA, USA
            </p>
            <ul className="bullet-list">
              <li>
                Managed 30+ client datasets in QuickBooks, processing 100+
                financial transactions daily with high data accuracy.
              </li>
              <li>
                Automated recurring payroll and tax reporting workflows, reducing
                manual effort while delivering 10+ monthly filings and quarterly
                compliance reports.
              </li>
              <li>
                Developed financial dashboards and profit/loss analyses,
                supporting data-driven insights into cash flow and client
                profitability.
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
        </div>
        <Link to="/" className="btn-link">
          Back to home →
        </Link>
      </div>
    </section>
  )
}

export default Experience
