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
                <img src="/images/ids-network.jpg" alt="Multi-Stage IoT Intrusion Detection" loading="lazy" />
              </div>
              <span className="featured-badge">★ Featured Project</span>
              <h3>Multi-Stage IoT Intrusion Detection (Team of 7)</h3>
              <p className="edu-meta">
                Capstone Project (ECE 592B)
                <br />
                University of Victoria, May 2026 – Aug 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Calibrated binary XGBoost to a 1% false positive budget, reaching
                  99.5% recall at a 0.94% false positive rate and 0.989 PR AUC, the
                  highest recall of six classifiers compared on 206,000 CIC IoT-DIAD
                  2024 flows.
                </li>
                <li>
                  Tested the models on four separate holdout conditions and identified capture sessions leaking into the benchmark. PR AUC fell from 0.981 to 0.125, with a 25.35% false positive rate.
                </li>
                <li>
                  Refit imputation, outlier handling and scaling on training rows only, after the original pipeline had used the label before splitting. The correction reordered the six models and changed which one was selected.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">PyTorch</span>
                <span className="tag">XGBoost</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">K-Means</span>
                <span className="tag">Autoencoder</span>
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
                <img src="/images/ocean-data.jpg" alt="Ocean Data ML Platform with RAG" loading="lazy" />
              </div>
              <span className="featured-badge">★ Featured Project</span>
              <h3>Ocean Data ML Platform with RAG</h3>
              <p className="edu-meta">
                Personal Project
                <br />
                Feb 2026 – Mar 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Ingested 10.8 million observations from NOAA and Ocean Networks Canada
                  into Bronze and Spark Silver layers, then built a Gold forecasting table
                  with 3.69 million rows.
                </li>
                <li>
                  Served model predictions and natural language search through FastAPI,
                  Qdrant and Ollama. Retrieval reached hit@k of 0.90 and term recall of
                  0.85 on queries held out for testing.
                </li>
                <li>
                  Tuned XGBoost with Optuna against a naive persistence baseline,
                  tracking every run in MLflow. Air temperature RMSE fell by 48% at the
                  twelve hour horizon, while the same pipeline found no forecast skill on
                  water temperature.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">Apache Spark</span>
                <span className="tag">PySpark</span>
                <span className="tag">XGBoost</span>
                <span className="tag">Optuna</span>
                <span className="tag">MLflow</span>
                <span className="tag">RAG</span>
                <span className="tag">Vector Search</span>
                <span className="tag">Sentence Transformers</span>
                <span className="tag">Qdrant</span>
                <span className="tag">Ollama</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Docker</span>
                <span className="tag">Streamlit</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/Resume-Projects/tree/main/Ocean%20Data%20ML%20Platform%20with%20RAG"
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
                <img src="/images/isolation-forest.jpg" alt="Anomaly Detection at Scale on Species Data" loading="lazy" />
              </div>
              <span className="featured-badge">★ Featured Project</span>
              <h3>Anomaly Detection at Scale on Species Data (Team of 3)</h3>
              <p className="edu-meta">
                Systems for Massive Datasets (CSC 502)
                <br />
                University of Victoria, Mar 2026 – Apr 2026
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
                  Identified uneven geographic density that made the model miss unusual records in crowded regions. Proposed rank transformation and sampling based on local density to address the problem.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
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
                <img src="/images/auction-microservices.jpg" alt="Auction Marketplace Microservices" loading="lazy" />
              </div>
              <h3>Auction Marketplace Microservices (Team of 4)</h3>
              <p className="edu-meta">
                Topics in Software Engineering (MPCS 51205)
                <br />
                University of Chicago, Feb 2021 – Mar 2021
              </p>
              <ul className="bullet-list">
                <li>
                  Split an auction platform into six Flask REST services covering items, users, auctions, transactions, watchlist and messaging, each behind its own MySQL database.
                </li>
                <li>
                  Routed events between services through RabbitMQ and stored delivered
                  messages in MongoDB, pairing a relational and a document store in the
                  same system.
                </li>
                <li>
                  Deployed all 14 containers with Docker Compose, sequencing startup so each service's database was ready before the service depending on it.
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
                <img src="/images/crypto-trading-bot.jpg" alt="Bitcoin price history chart" loading="lazy" />
              </div>
              <h3>Automated Crypto Trading Bot</h3>
              <p className="edu-meta">
                Personal Project
                <br />
                Feb 2025 – Jul 2025
              </p>
              <ul className="bullet-list">
                <li>
                  Implemented a mean reversion engine that polls live Coinbase data on a
                  fixed interval, keeps rolling one hour price windows in memory, buys
                  1% dips and sells on 2% rises.
                </li>
                <li>
                  Added a second strategy that buys only when the 8 period EMA is above the 20 period EMA, price is above the 200 period EMA and the trade still clears fees, with per market limits set in a CSV file.
                </li>
                <li>
                  Backtested both strategies on four months of polled Coinbase market data, then deployed the bot to AWS EC2 with per market thresholds, cooldowns and open trade caps driven from a CSV config.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">Coinbase Advanced Trade API</span>
                <span className="tag">AWS EC2</span>
                <span className="tag">AWS Lambda</span>
                <span className="tag">Amazon SNS</span>
                <span className="tag">boto3</span>
                <span className="tag">pandas</span>
                <span className="tag">Algorithmic Trading</span>
                <span className="tag">Automation</span>
              </div>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="/images/reservation-system.jpeg" alt="Distributed Facility Reservation System" loading="lazy" />
              </div>
              <h3>Distributed Facility Reservation System (Team of 4)</h3>
              <p className="edu-meta">
                Applied Software Engineering (MPCS 51220)
                <br />
                University of Chicago, Apr 2021 – May 2021
              </p>
              <ul className="bullet-list">
                <li>
                  Built the SQLite database layer and the FastAPI interoperability service
                  connecting our facility to four independently built peer systems, over 27
                  versioned REST endpoints with published OpenAPI docs.
                </li>
                <li>
                  Modeled users, reservations and transactions as half hour blocks for
                  conflict detection and cancellations, backed by 71 pytest tests across
                  the API, database and reservation rules.
                </li>
                <li>
                  Negotiated a shared HTTP contract with four other teams, tested against
                  their live implementations and secured each endpoint by checking the age
                  and permissions of every session.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">FastAPI</span>
                <span className="tag">SQLite</span>
                <span className="tag">OpenAPI</span>
                <span className="tag">REST API</span>
                <span className="tag">pytest</span>
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
                <img src="/images/stock-sentiment-analysis.jpg" alt="Stock Sentiment Analysis" loading="lazy" />
              </div>
              <h3>Stock Sentiment Analysis (Team of 4)</h3>
              <p className="edu-meta">
                Algorithms and Data Models (CSC 501)
                <br />
                University of Victoria, Nov 2025 – Dec 2025
              </p>
              <ul className="bullet-list">
                <li>
                  Built a sentiment pipeline over 15,194 raw tweets of which 861 were tied to 10 tech stocks,
                  combining X API data, SQLite and Neo4j storage, and FinTwitBERT sentiment
                  scoring.
                </li>
                <li>
                  Weighted daily sentiment by engagement and tested it against returns with
                  Granger causality, finding a statistically significant predictive effect
                  for NVIDIA but weak signal elsewhere.
                </li>
                <li>
                  Modeled volatility with GARCH(1,1) after checking stationarity for each series, and identified persistent volatility clustering across the major tech names.
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
                <img src="/images/belay-chat.jpg" alt="Belay Real-Time Chat Application" loading="lazy" />
              </div>
              <h3>Belay Real-Time Chat Application</h3>
              <p className="edu-meta">
                Web Development (MPCS 52553)
                <br />
                University of Chicago, Jan 2022 – Feb 2022
              </p>
              <ul className="bullet-list">
                <li>
                  Designed nested REST routes for channels, messages, and threaded replies,
                  backing a browser client that made ten fetch calls to a Flask API.
                </li>
                <li>
                  Modeled users, channels, messages, and membership across four SQLite
                  tables, including a join table that tracked the last message each user saw.
                </li>
                <li>
                  Routed the client with the History API so channel and thread URLs stayed
                  shareable, and secured accounts with hashed passwords and an authkey token
                  checked on every request.
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

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="/images/loan-approval.jpg" alt="Loan Approval Classifier" loading="lazy" />
              </div>
              <h3>Loan Approval Classifier (Team of 6)</h3>
              <p className="edu-meta">
                Data Mining (CSC 503)
                <br />
                University of Victoria, Jul 2026 – Aug 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Compared baseline, SMOTE, class weighting and a quantum feature transform
                  across tuned XGBoost and neural network classifiers on imbalanced loan
                  approval data.
                </li>
                <li>
                  Split rows into inlier and outlier partitions with Isolation Forest and
                  trained a specialist ensemble per partition, pooling their predictions as
                  a mixture of experts at evaluation time.
                </li>
                <li>
                  Added a PennyLane feature transform using 12 simulated qubits and wrapped
                  every tuned model in a Fairlearn constraint that balanced false positive
                  and false negative rates across age and income.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">XGBoost</span>
                <span className="tag">PennyLane</span>
                <span className="tag">Fairlearn</span>
                <span className="tag">SMOTE</span>
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
                <img src="/images/parallel-engine.jpg" alt="Parallel Image Processing Engine" loading="lazy" />
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
                  Implemented sequential, staged pipeline and bulk synchronous parallel execution models using goroutines, channels and sync.WaitGroup.
                </li>
                <li>
                  Reduced runtime by 20% with the staged pipeline and 30% with the
                  BSP model while processing batches of more than 30 images.
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
                <img src="/images/ticket-triage.jpg" alt="Support Ticket Triage" loading="lazy" />
              </div>
              <h3>Support Ticket Triage (Team of 4)</h3>
              <p className="edu-meta">
                Selected Topics in Computer Engineering: AI (ECE 569A)
                <br />
                University of Victoria, May 2026 – Jun 2026
              </p>
              <ul className="bullet-list">
                <li>
                  Compared three model families on the same ticket routing task: TF-IDF with a linear SVM, retrieval over a kNN index, and DistilBERT embeddings feeding a classifier.
                </li>
                <li>
                  Trained one DistilBERT encoder to label ticket type, priority and queue together, so the three labels stay consistent rather than drifting apart across three separate models.
                </li>
                <li>
                  Built a Streamlit demo that shows the retrieved neighbor tickets behind each prediction, so a reviewer can see why the model routed a ticket the way it did.
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
