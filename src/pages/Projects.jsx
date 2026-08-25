import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { FadeIn, StaggerGrid } from '../components/FadeIn'
import TiltCard from '../components/TiltCard'

function Projects() {
  useEffect(() => { document.title = 'Projects | Tan Dai Ngo' }, [])
  return (
    <PageTransition>
      <section className="section">
        <div className="container section-inner">
          <FadeIn><h2>Projects</h2></FadeIn>

          <StaggerGrid className="cards-grid two-col">
            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/ids-network.jpg" alt="Multi-Stage IoT Intrusion Detection" loading="lazy" />
              </div>
              <span className="featured-badge">★ Featured Project</span>
              <h3>Multi-Stage IoT Intrusion Detection (Team of 7)</h3>
              <p className="edu-meta">
                Capstone Project (ECE 592B), University of Victoria
                <br />
                May 2026 – Aug 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Compared six detection models on 200K+ CIC IoT-DIAD 2024 network flows
                  using a two-stage pipeline: unsupervised packet scoring feeding a
                  supervised flow classifier, with the best XGBoost model reaching 92.5%
                  recall at 0.96% false-positive rate under a 1% FPR budget.
                </li>
                <li>
                  Ran a four-condition holdout experiment and found the benchmark leaks
                  capture-session identity: benign and attack traffic were recorded on
                  different days, and the capture window is predictable from flow features
                  alone at ROC-AUC 0.922.
                </li>
                <li>
                  Reported the honest cost of closing that leak instead of the headline
                  number. PR-AUC drops from 0.927 to 0.630 and the FPR budget blows out to
                  32% under a session-disjoint split. Wrote an integrity check confirming
                  every engineered feature stayed causal and label-free.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">XGBoost</span>
                <span className="tag">PyTorch</span>
                <span className="tag">Anomaly Detection</span>
                <span className="tag">Data Leakage Auditing</span>
                <span className="tag">Model Evaluation</span>
                <span className="tag">Network Security</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/ECE592B-Capstone-Project"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/ocean-data.jpg" alt="Distributed Ocean Data ML Platform with RAG" loading="lazy" />
              </div>
              <span className="featured-badge">★ Featured Project</span>
              <h3>Distributed Ocean Data ML Platform with RAG</h3>
              <p className="edu-meta">
                Personal Project
                <br />
                Feb 2026 – Mar 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Built a distributed ML pipeline in Apache Spark (Bronze → Silver → Gold
                  layers) to harmonize 10M+ NOAA and ONC ocean sensor observations into one
                  queryable model for feature engineering and forecasting.
                </li>
                <li>
                  Tuned XGBoost forecasting models with Optuna and tracked runs in MLflow,
                  validating on chronological holdouts rather than random splits
                  (RMSE: 0.00586, R²: 0.9999).
                </li>
                <li>
                  Served forecasts and RAG search behind a FastAPI backend using Sentence
                  Transformers, Qdrant, and Ollama, evaluated against a held-out query set
                  (hit@k: 1.0, term recall: 0.875), with a Streamlit front end.
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
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/Resume-Projects/tree/main/Distributed%20Ocean%20Data%20ML%20Platform%20with%20RAG"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/reservation-system.jpeg" alt="Distributed Facility Reservation System" loading="lazy" />
              </div>
              <span className="featured-badge">★ Featured Project</span>
              <h3>Distributed Facility Reservation System (Team of 4)</h3>
              <p className="edu-meta">
                Applied Software Engineering (MPCS 51220), University of Chicago
                <br />
                Apr 2021 – May 2021
              </p>
              <ul className="bullet-list">
                <li>
                  Built the SQLite database layer and the FastAPI interoperability service
                  connecting our facility to four independently built peer systems, over 27
                  versioned REST endpoints with published OpenAPI docs.
                </li>
                <li>
                  Modeled users, reservations, and transactions as 30-minute blocks to
                  support conflict detection and cancellations, then backed it with 71
                  pytest tests across the API, database, and rules layers.
                </li>
                <li>
                  Negotiated a shared HTTP contract with the other four teams and tested our
                  service against their live implementations rather than mocks.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">FastAPI</span>
                <span className="tag">SQLite</span>
                <span className="tag">REST API</span>
                <span className="tag">Distributed Systems</span>
                <span className="tag">Service Interoperability</span>
                <span className="tag">Database Design</span>
                <span className="tag">Session Authentication</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/Resume-Projects/tree/main/Distributed%20Facility%20Reservation%20System"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/isolation-forest.jpg" alt="Anomaly Detection with Isolation Forest" loading="lazy" />
              </div>
              <span className="featured-badge">★ Featured Project</span>
              <h3>Anomaly Detection with Isolation Forest on High Volume Bird Observation Data (Team of 3)</h3>
              <p className="edu-meta">
                Systems for Massive Datasets (CSC 502), University of Victoria
                <br />
                Mar 2026 – Apr 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Implemented Isolation Forest from the published algorithm rather than a
                  library, then ran it on 1,093,203 eBird observations from British
                  Columbia using PySpark for distributed processing.
                </li>
                <li>
                  Engineered features from species frequency, geospatial position, and
                  cyclical time encoding, using stratified sampling across eight quantile
                  bins to keep the class distribution honest.
                </li>
                <li>
                  Found a previously undescribed geographic variant of feature-specific
                  swamping: skewed spatial density made the model miss anomalies in dense
                  regions. Proposed rank transformation and density-aware subsampling to
                  fix it.
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
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/CSC502-Final-Project"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/auction-microservices.jpg" alt="Auction Marketplace Microservices" loading="lazy" />
              </div>
              <h3>Auction Marketplace Microservices (Team of 4)</h3>
              <p className="edu-meta">
                Topics in Software Engineering (MPCS 51205), University of Chicago
                <br />
                Feb 2021 – Mar 2021
              </p>
              <ul className="bullet-list">
                <li>
                  Split an auction platform into six Flask REST services (items, users,
                  auctions, transactions, watchlist, and messaging), each with its own
                  MySQL database so one schema change couldn't break another service.
                </li>
                <li>
                  Routed cross-service events through RabbitMQ and stored delivered
                  messages in MongoDB, pairing a relational and a document store in the
                  same system.
                </li>
                <li>
                  Orchestrated all ten containers with Docker Compose, sequencing startup
                  so each service's database was ready before the service depending on it.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">Flask</span>
                <span className="tag">MySQL</span>
                <span className="tag">MongoDB</span>
                <span className="tag">RabbitMQ</span>
                <span className="tag">Docker Compose</span>
                <span className="tag">Microservices</span>
                <span className="tag">REST API</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/Auction-Website"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/stock-sentiment-analysis.jpg" alt="Stock Sentiment Analysis" loading="lazy" />
              </div>
              <h3>Stock Sentiment Analysis (Team of 4)</h3>
              <p className="edu-meta">
                Algorithms and Data Models (CSC 501), University of Victoria
                <br />
                Nov 2025 – Dec 2025
              </p>
              <ul className="bullet-list">
                <li>
                  Built a sentiment pipeline over 15K+ tweets across 10 tech stocks,
                  combining X API data, SQLite and Neo4j storage, and FinTwitBERT sentiment
                  scoring.
                </li>
                <li>
                  Weighted daily sentiment by engagement and tested it against returns with
                  Granger causality, finding a statistically significant predictive effect
                  for NVIDIA but weak signal elsewhere.
                </li>
                <li>
                  Modeled volatility with GARCH(1,1) after checking stationarity, and found
                  persistent volatility clustering across the major tech names.
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
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/Resume-Projects/tree/main/Stock%20Sentiment%20Analysis"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/parallel-engine.jpg" alt="Parallel Image Processing Engine" loading="lazy" />
              </div>
              <h3>Parallel Image Processing Engine</h3>
              <p className="edu-meta">
                Personal Project
                <br />
                Apr 2022 – May 2022
              </p>
              <ul className="bullet-list">
                <li>
                  Built an image processing engine in Go supporting grayscale, sharpening,
                  blurring, and edge detection through custom 2D convolution kernels.
                </li>
                <li>
                  Implemented sequential, fan-in/fan-out, and bulk-synchronous parallel
                  (BSP) execution models using goroutines, channels, sync.WaitGroup, and
                  atomic counters for coordination.
                </li>
                <li>
                  Cut runtime 20% with the fan-in/fan-out pipeline and 30% with the BSP
                  model when processing 30+ images.
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
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/Resume-Projects/tree/main/Parallel%20Image%20Processing%20Engine"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/loan-approval.jpg" alt="Loan Approval Classifier" loading="lazy" />
              </div>
              <h3>Loan Approval Classifier (Team of 6)</h3>
              <p className="edu-meta">
                Data Mining (CSC 503), University of Victoria
                <br />
                Jul 2026 – Aug 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Tuned a neural classifier by randomized search under 5-fold
                  cross-validation on an imbalanced loan-approval dataset, scoring on F1
                  instead of accuracy so the majority class couldn't inflate the number.
                </li>
                <li>
                  Applied SMOTE inside the training folds only, keeping resampled rows out
                  of every validation split to avoid leaking synthetic examples into
                  evaluation.
                </li>
                <li>
                  Compared resampling before and after normalization and showed the
                  ordering changes the result, then benchmarked the tuned network against
                  an XGBoost baseline on identical splits.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">XGBoost</span>
                <span className="tag">SMOTE</span>
                <span className="tag">Cross-Validation</span>
                <span className="tag">Imbalanced Classification</span>
                <span className="tag">Credit Risk</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/CSC503-Final-Project"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/ticket-triage.jpg" alt="Support Ticket Triage" loading="lazy" />
              </div>
              <h3>Support Ticket Triage (Team of 4)</h3>
              <p className="edu-meta">
                Selected Topics in Computer Engineering: AI (ECE 569A), University of Victoria
                <br />
                May 2026 – Jun 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Compared three model families on the same ticket-triage task: TF-IDF
                  with a linear SVM, retrieval by cosine similarity over a kNN index, and
                  DistilBERT embeddings feeding a small classifier.
                </li>
                <li>
                  Trained one DistilBERT embedding to predict ticket type, priority, and
                  queue together instead of building three separate models.
                </li>
                <li>
                  Built a Streamlit demo that shows the retrieved neighbor tickets behind
                  each prediction, so a reviewer can see why the model made a call.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">DistilBERT</span>
                <span className="tag">TF-IDF</span>
                <span className="tag">kNN</span>
                <span className="tag">NLP</span>
                <span className="tag">Streamlit</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/ECE569A-Final-Project"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/belay-chat.jpg" alt="Belay Real-Time Chat Application" loading="lazy" />
              </div>
              <h3>Belay Real-Time Chat Application</h3>
              <p className="edu-meta">
                Web Development (MPCS 52553), University of Chicago
                <br />
                Jan 2022 – Feb 2022
              </p>
              <ul className="bullet-list">
                <li>
                  Designed nested REST routes for channels, messages, and threaded replies,
                  backing a single-page client with ten fetch-based calls against a Flask API.
                </li>
                <li>
                  Modeled users, channels, messages, and membership across four SQLite
                  tables, including a last-seen join table used to compute unread counts.
                </li>
                <li>
                  Routed the client with the History API so channel and thread URLs stayed
                  shareable, and secured accounts with hashed passwords and per-session
                  authkey tokens checked on every request.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">Flask</span>
                <span className="tag">SQLite</span>
                <span className="tag">JavaScript</span>
                <span className="tag">REST API</span>
                <span className="tag">Session Authentication</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/Personal-Projects/tree/main/Belay"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View GitHub code →
                </a>
              </p>
            </TiltCard>
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

export default Projects
