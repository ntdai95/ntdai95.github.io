import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { FadeIn, StaggerGrid } from '../components/FadeIn'
import TiltCard from '../components/TiltCard'

function Hackathons() {
  useEffect(() => { document.title = 'Hackathons | Tan Dai Ngo' }, [])
  return (
    <PageTransition>
      <section className="section">
        <div className="container section-inner">
          <FadeIn><h2>Hackathons &amp; Coding Challenges</h2></FadeIn>

          <StaggerGrid className="cards-grid two-col">
            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/shell-fuel.jpg" alt="Sustainable fuel blending graphs" loading="lazy" />
              </div>
              <span className="featured-badge">★ Featured</span>
              <h3>End-to-End Machine Learning System for Multi-Output Fuel Blending</h3>
              <p className="edu-meta">Shell.ai Hackathon 2025 · Jul 2025</p>
              <ul className="bullet-list">
                <li>
                  Built and deployed a production ML system for multi-output regression
                  across 10 chemical blend properties using FastAPI, Docker, and AWS EC2
                  for real-time inference.
                </li>
                <li>
                  Benchmarked XGBoost and CatBoost using 5-fold cross-validation, selecting
                  CatBoost after achieving significantly lower error (MAPE: 0.64 vs. 1.29).
                </li>
                <li>
                  Designed feature engineering and inference pipelines using weighted
                  aggregation, mixture metrics based on entropy, and serialized preprocessing
                  to ensure consistent production predictions.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">CatBoost</span>
                <span className="tag">XGBoost</span>
                <span className="tag">Exploratory Data Analysis</span>
                <span className="tag">Feature Engineering</span>
                <span className="tag">Docker</span>
                <span className="tag">AWS EC2</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.com/ntdai95/Shell.ai-Hackathon-2025"
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
                <img src="images/imc-trading.jpg" alt="Trading candlestick chart" loading="lazy" />
              </div>
              <h3>Algorithmic Trading &amp; Execution Optimization</h3>
              <p className="edu-meta">IMC 64 Bids Coding Challenge · Oct 2021</p>
              <ul className="bullet-list">
                <li>
                  Implemented Java based algorithmic trading solutions to optimize
                  order execution and portfolio rebalancing under time constraints.
                </li>
                <li>
                  Gained foundational knowledge in quantitative trading concepts
                  while thoroughly testing and optimizing Java code for
                  correctness and performance.
                </li>
                <li>
                  Advanced to the final round, ranking in the top 15% (top 250
                  out of 1,500 participants) in a globally competitive trading
                  algorithms competition.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Java</span>
                <span className="tag">Algorithmic Trading</span>
                <span className="tag">Optimization</span>
              </div>
            </TiltCard>

            <TiltCard className="card project-card">
              <div className="project-card-img-wrap">
                <img src="images/koronakiller-game.jpg" alt="KoronaKiller 2D game screenshot" loading="lazy" />
              </div>
              <h3>KoronaKiller (Game Developer)</h3>
              <p className="edu-meta">Uncommon Hacks · Apr 2021</p>
              <ul className="bullet-list">
                <li>
                  Collaborated in a cross-functional team of 3 to prototype
                  KoronaKiller, a Python based 2D simulation that models player
                  health dynamics and event driven interactions in real time.
                </li>
                <li>
                  Applied algorithmic design and logic optimization to implement
                  continuous background scrolling, randomized object generation,
                  and collision detection mechanisms for efficient gameplay execution.
                </li>
                <li>
                  Delivered a functional demo within a 48 hour hackathon,
                  demonstrating rapid prototyping, debugging, and teamwork skills
                  essential for data driven product development.
                </li>
              </ul>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">Pygame / 2D</span>
                <span className="tag">Simulation</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://devpost.com/software/koronakiller"
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View on Devpost →
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

export default Hackathons
