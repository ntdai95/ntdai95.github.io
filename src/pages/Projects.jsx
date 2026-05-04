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
                    src="images/ocean-data.jpg"
                    alt="Oceanographic Data Analysis and Visualization"
                  />
                </div>
              </div>
              <div>
                <h3>Distributed Ocean Data ML Platform with RAG</h3>
                <p className="edu-meta">
                  Systems for Massive Datasets (ECE 502), University of 
                  Victoria · Feb 2026 – Mar 2026
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Built an end-to-end distributed ML pipeline using Apache Spark (Bronze → 
                Silver → Gold architecture) to ingest and harmonize 10M+ NOAA and ONC 
                ocean sensor observations for scalable feature engineering and time series 
                forecasting.
              </li>
              <li>
                Developed and tuned XGBoost forecasting models using Optuna and MLflow, 
                applying chronological holdout validation on temporally correlated ocean 
                data (RMSE: 0.00586, R²: 0.9999).
              </li>
              <li>
                Deployed FastAPI services for prediction and RAG-based querying using 
                Sentence Transformers, Qdrant/FAISS, and Ollama, with retrieval benchmarking 
                (hit@k: 1.0, term recall: 0.875), and a Streamlit dashboard for interactive 
                exploration.
              </li>
            </ul>

            <div className="tag-list">
              <span className="tag">Apache Spark</span>
              <span className="tag">XGBoost</span>
              <span className="tag">RAG</span>
              <span className="tag">Vector Search</span>
              <span className="tag">Sentence Transformers</span>
              <span className="tag">Qdrant</span>
              <span className="tag">FastAPI</span>
              <span className="tag">MLflow</span>
              <span className="tag">Ollama LLM</span>
              <span className="tag">Optuna</span>
              <span className="tag">Streamlit</span>
            </div>

            <p>
              <a
                href="https://github.com/ntdai95/Resume-Projects/tree/main/Distributed%20Ocean%20Data%20ML%20Platform%20with%20RAG"
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
                    src="images/stock-sentiment-analysis.jpg"
                    alt="Stock Sentiment Analysis"
                  />
                </div>
              </div>
              <div>
                <h3>Stock Sentiment Analysis (Team of 4)</h3>
                <p className="edu-meta">
                  Algorithms and Data Models (CSC 501), University of 
                  Victoria · Nov 2025 – Dec 2025
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Built a sentiment analysis pipeline over 15k+ tweets across 10 tech 
                stocks, enabling large-scale market sentiment analysis, by integrating 
                X API data, SQLite/Neo4j storage, and FinTwitBERT modeling.
              </li>
              <li>
                Identified measurable sentiment-return relationships, including 
                statistically significant predictive effects for NVIDIA, by 
                implementing engagement-weighted sentiment aggregation and Granger 
                causality testing.
              </li>
              <li>
                Analyzed equity volatility dynamics across major tech stocks, revealing 
                persistent volatility clustering, by applying GARCH(1,1) modeling and 
                automated cross-stock analysis workflows.
              </li>
            </ul>

            <div className="tag-list">
              <span className="tag">Python</span>
              <span className="tag">Neo4j</span>
              <span className="tag">SQLite</span>
              <span className="tag">Graph Analytics</span>
              <span className="tag">Time Series</span>
              <span className="tag">FinTwitBERT</span>
            </div>

            <p>
              <a
                href="https://github.com/ntdai95/Resume-Projects/tree/main/Stock%20Sentiment%20Analysis"
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
                    src="images/isolation-forest.jpg"
                    alt="Anomaly Detection with Isolation Forest"
                  />
                </div>
              </div>
              <div>
                <h3>Anomaly Detection with Isolation Forest on High Volume Bird Observation Data (Team of 3)</h3>
                <p className="edu-meta">
                  Systems for Massive Datasets (ECE 502), University of 
                  Victoria · Mar 2026 – Apr 2026
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Built an anomaly detection system on a distributed eBird dataset (1M+ 
                observations) using a custom implementation of Isolation Forest with 
                data processing in PySpark.
              </li>
              <li>
                Designed an end-to-end ML pipeline including feature engineering 
                (species frequency, geospatial features, cyclical time encoding) and 
                stratified sampling to preserve data distribution.
              </li>
              <li>
                Evaluated model performance using ROC AUC and runtime metrics, 
                identifying limitations of Isolation Forest in skewed datasets 
                (feature specific swamping).
              </li>
            </ul>

            <div className="tag-list">
              <span className="tag">PySpark</span>
              <span className="tag">Isolation Forest</span>
              <span className="tag">Anomaly Detection</span>
              <span className="tag">Feature Engineering</span>
              <span className="tag">Stratified Sampling</span>
              <span className="tag">ROC AUC</span>
              <span className="tag">Data Pipeline</span>
              <span className="tag">Experimentation</span>
            </div>

            <p>
              <a
                href="https://github.com/ntdai95/CSC502-Final-Project"
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
