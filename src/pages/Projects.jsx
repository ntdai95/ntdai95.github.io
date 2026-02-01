import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section className="section">
      <div className="container section-inner">
        <h2>Projects</h2>

        <div className="cards-grid">
          <article className="card project-card">
            <div className="activity-header">
              <div className="activity-photo-wrapper">
                <div className="activity-photo">
                  <img
                    src="images/market-volatility-analysis.jpg"
                    alt="Social Signal Impact on Market Volatility"
                  />
                </div>
              </div>
              <div>
                <h3>Social Signal Impact on Market Volatility (Team of 4)</h3>
                <p className="edu-meta">
                  Algorithms and Data Models (CSC 501), University of 
                  Victoria · Nov 2025 – Dec 2025
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Built a data science pipeline integrating equity price data with 
                influencer driven social signals stored in SQLite and Neo4j to predict 
                next day rolling volatility across 2,200+ out of sample observations.
              </li>
              <li>
                Ran controlled experiments with temporal splits and feature ablations 
                to quantify market, social, and graph feature impact, achieving 59% 
                directional accuracy on held out data.
              </li>
              <li>
                Analyzed volatility regimes, showing price features dominate error 
                (MAE 0.0049) while social and influence weighted features provide 
                incremental directional gains during high volatility periods.
              </li>
            </ul>

            <div className="tag-list">
              <span className="tag">Python</span>
              <span className="tag">Neo4j</span>
              <span className="tag">SQLite</span>
              <span className="tag">Graph Analytics</span>
              <span className="tag">Time Series</span>
              <span className="tag">Feature Engineering</span>
            </div>

            <p>
              <a
                href="https://github.com/ntdai95/Resume-Projects/tree/main/Social%20Signal%20Impact%20on%20Market%20Volatility"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View Github code →
              </a>
            </p>
          </article>

          <article className="card project-card">
            <div className="activity-header">
              <div className="activity-photo-wrapper">
                <div className="activity-photo">
                  <img
                    src="images/handwritten-digit-recognition.jpg"
                    alt="Multi-class digit recognition with optimization"
                  />
                </div>
              </div>
              <div>
                <h3>Handwritten Digit Recognition System</h3>
                <p className="edu-meta">
                  Optimization for Machine Learning (ECE 503), University of 
                  Victoria · Nov 2025 – Dec 2025
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Developed a multiclass SVM and Softmax classification pipeline using a
                custom built ML-BFGS optimizer, achieving 97.65% accuracy with faster
                convergence than standard SGD.
              </li>
              <li>
                Applied HOG feature extraction and PCA to reduce 784 dimensional pixel
                inputs to 50 latent components, yielding a 10.2% accuracy improvement and
                40% faster training latency.
              </li>
              <li>
                Tuned regularization parameters (μ, C) and evaluated performance using
                10×10 confusion matrices to ensure robust generalization on 10,000 test
                samples.
              </li>
            </ul>

            <div className="tag-list">
              <span className="tag">Python</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Optimization</span>
              <span className="tag">SVM</span>
              <span className="tag">PCA</span>
              <span className="tag">ML-BFGS</span>
            </div>

            <p>
              <a
                href="https://github.com/ntdai95/Resume-Projects/tree/main/Handwritten%20Digit%20Recognition%20System"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View Github code →
              </a>
            </p>
          </article>
          
          <article className="card project-card">
            <div className="activity-header">
              <div className="activity-photo-wrapper">
                <div className="activity-photo">
                  <img
                    src="images/hr-onboarding.jpg"
                    alt="HR Onboarding Microservices Platform"
                  />
                </div>
              </div>
              <div>
                <h3>HR Onboarding Microservices Platform</h3>
                <p className="edu-meta">
                  Personal Project · Apr 2022 – May 2022
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Built microservices platform using Spring Boot and Spring 
                Cloud Gateway supporting scalable onboarding, visa, and 
                housing management workflows.
              </li>
              <li>
                Implemented intercommunication and service discovery using 
                OpenFeign across multiple backend services.
              </li>
              <li>
                Integrated MySQL, MongoDB, and AWS S3 storage while 
                achieving 80%+ unit test coverage.
              </li>
            </ul>
            <div className="tag-list">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">Microservices</span>
              <span className="tag">OpenFeign</span>
              <span className="tag">MySQL</span>
              <span className="tag">MongoDB</span>
              <span className="tag">AWS S3</span>
              <span className="tag">JUnit</span>
            </div>
            <p>
              <a
                href="https://github.com/ntdai95/Resume-Projects/tree/main/HR%20Onboarding%20Microservices%20Platform"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View Github code →
              </a>
            </p>
          </article>

          <article className="card project-card">
            <div className="activity-header">
              <div className="activity-photo-wrapper">
                <div className="activity-photo">
                  <img
                    src="images/parallel-engine.jpg"
                    alt="Parallel Image Processing Engine"
                  />
                </div>
              </div>
              <div>
                <h3>Parallel Image Processing Engine</h3>
                <p className="edu-meta">
                  Personal Project · Apr 2022 – May 2022
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Developed an image processing engine in Go, supporting
                grayscale, sharpening, blurring, and edge detection methods via
                custom 2D convolution kernels.
              </li>
              <li>
                Implemented sequential, fan-in/fan-out pipeline, and bulk
                synchronous parallel (BSP) execution models, using goroutines,
                channels, sync.WaitGroup, and atomic counters for task
                coordination.
              </li>
              <li>
                Reduced runtime by 20% with the fan-in/fan-out implementation
                and 30% with the BSP model when processing 30+ images,
                demonstrating effective parallelization and systems-level
                optimization.
              </li>
            </ul>
            <div className="tag-list">
              <span className="tag">Go</span>
              <span className="tag">Concurrency</span>
              <span className="tag">Goroutines</span>
              <span className="tag">Channels</span>
              <span className="tag">Parallel Computing</span>
              <span className="tag">Image Processing</span>
              <span className="tag">2D Convolution</span>
              <span className="tag">BSP</span>
              <span className="tag">Pipeline</span>
            </div>
            <p>
              <a
                href="https://github.com/ntdai95/Resume-Projects/tree/main/Parallel%20Image%20Processing%20Engine"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View Github code →
              </a>
            </p>
          </article>

          <article className="card project-card">
            <div className="activity-header">
              <div className="activity-photo-wrapper">
                <div className="activity-photo">
                  <img
                    src="images/reservation-backend.jpg"
                    alt="Reservation backend APIs"
                  />
                </div>
              </div>
              <div>
                <h3>Reservation Management System Backend (Team of 4)</h3>
                <p className="edu-meta">
                  Applied Software Engineering (MPCS 51220), University of
                  Chicago · Apr 2021 – Jun 2021
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Developed RESTful APIs with FastAPI (Python) to handle 50+
                daily workshop timeslot reservations and equipment purchase
                requests.
              </li>
              <li>
                Created and executed 100+ pytest cases to ensure API reliability
                and data integrity across endpoints.
              </li>
              <li>
                Collaborated with cross-functional teams to integrate data
                exchange workflows, enabling seamless real-time reservation
                tracking.
              </li>
            </ul>
            <div className="tag-list">
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">REST APIs</span>
              <span className="tag">pytest</span>
              <span className="tag">Backend</span>
            </div>
            <p>
              <a
                href="https://github.com/ntdai95/Resume-Projects/tree/main/Reservation%20Management%20System%20Backend"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View Github code →
              </a>
            </p>
          </article>

          <article className="card project-card">
            <div className="activity-header">
              <div className="activity-photo-wrapper">
                <div className="activity-photo">
                  <img
                    src="images/socioeconomic-dashboard.jpg"
                    alt="Socioeconomic data dashboard"
                  />
                </div>
              </div>
              <div>
                <h3>Socioeconomic Data Analysis and Visualization</h3>
                <p className="edu-meta">
                  Foundational Skills for Data Science (INFO 201), University of
                  Washington · May 2018 – Jun 2018
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Analyzed eviction rate and median income data (2000–2016) from
                evictionlab.org, applying linear regression to quantify
                socioeconomic relationships.
              </li>
              <li>
                Developed an interactive dashboard using R (ggplot2, dplyr, DT)
                with responsive filters, dynamic visualizations, and real-time
                data exploration.
              </li>
              <li>
                Deployed the application at
                ngotandai.shinyapps.io/a8-data-app-ntdai95-1565490, enabling
                public access to statistical insights.
              </li>
            </ul>
            <div className="tag-list">
              <span className="tag">R</span>
              <span className="tag">ggplot2</span>
              <span className="tag">dplyr</span>
              <span className="tag">Shiny</span>
              <span className="tag">Data Visualization</span>
              <span className="tag">Regression</span>
            </div>
            <p>
              <a
                href="https://ngotandai.shinyapps.io/a8-data-app-ntdai95-1565490"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View Shiny app →
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

export default Projects
