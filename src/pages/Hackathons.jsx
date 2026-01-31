import { Link } from 'react-router-dom'

function Hackathons() {
  return (
    <section className="section">
      <div className="container section-inner">
        <h2>Hackathons &amp; Coding Challenges</h2>

        <div className="cards-grid">
          <article className="card project-card">
            <div className="activity-header">
              <div className="activity-photo-wrapper">
                <div className="activity-photo">
                  <img
                    src="images/shell-fuel.jpg"
                    alt="Sustainable fuel blending graphs"
                  />
                </div>
              </div>
              <div>
                <h3>End-to-End Machine Learning System for Multi-Output Fuel Blending</h3>
                <p className="edu-meta">Shell.ai Hackathon 2025 · Jul 2025</p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Deployed a production ready machine learning system using FastAPI, 
                Docker, and AWS EC2 to serve real time multi-output regression 
                predictions for 10 chemical blend properties.
              </li>
              <li>
                Benchmarked XGBoost vs. CatBoost using 5-fold cross-validation, 
                selecting CatBoost after achieving lower error (MAPE 0.64 vs. 1.29) 
                and productionizing the best performing model.
              </li>
              <li>
                Engineered robust feature and inference pipelines using weighted 
                property aggregation, entropy based mixture metrics, and 
                serialized preprocessing to ensure consistent production inference.
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
            <p>
              <a
                href="https://github.com/ntdai95/Shell.ai-Hackathon-2025"
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
                    src="images/imc-trading.jpg"
                    alt="Trading candlestick chart"
                  />
                </div>
              </div>
              <div>
                <h3>Algorithmic Trading &amp; Execution Optimization</h3>
                <p className="edu-meta">
                  IMC 64 Bids Coding Challenge · Oct 2021
                </p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Implemented Java based algorithmic trading solutions to optimize
                order execution and portfolio rebalancing under time
                constraints.
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
          </article>

          <article className="card project-card">
            <div className="activity-header">
              <div className="activity-photo-wrapper">
                <div className="activity-photo">
                  <img
                    src="images/koronakiller-game.jpg"
                    alt="KoronaKiller 2D game screenshot"
                  />
                </div>
              </div>
              <div>
                <h3>KoronaKiller (Game Developer)</h3>
                <p className="edu-meta">Uncommon Hacks · Apr 2021</p>
              </div>
            </div>

            <ul className="bullet-list">
              <li>
                Collaborated in a cross-functional team of 3 to prototype
                KoronaKiller, a Python based 2D simulation that models player
                health dynamics and event driven interactions in real time.
              </li>
              <li>
                Applied algorithmic design and logic optimization to implement
                continuous background scrolling, randomized object generation,
                and collision detection mechanisms for efficient gameplay
                execution.
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
            <p>
              <a
                href="https://devpost.com/software/koronakiller"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                View on Devpost →
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

export default Hackathons
