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
                Instructed 50+ high school and college students in python
                programming and web development via practical lessons.
              </li>
              <li>
                Designed coding projects that apply real-world software
                engineering principles such as top-down design and OOP.
              </li>
              <li>
                Mentored students in debugging and code optimization, fostering
                analytical reasoning and critical thinking skills.
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
                Collaborated with a team of 5 to develop enterprise microservices
                for the Roaming Business System (Spring Boot, Java Stream API),
                integrating with Jenkins CI/CD for deployments and Splunk for
                log monitoring.
              </li>
              <li>
                Designed and optimized Cassandra database schemas for partner and
                workflow management microservices, handling 100k+ records while
                maintaining query execution time under 3 seconds.
              </li>
              <li>
                Automated weekly reprocessing of 50+ roaming service tests with
                Kafka pipelines, cutting manual effort by 80%.
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
