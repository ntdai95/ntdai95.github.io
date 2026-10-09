import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// A few slashed terms are standard industry usage, not compressed prose.
const SLASH_OK = ['CI/CD', 'A/B', 'I/O', 'TCP/IP', '24/7', 'and/or']
const stripKnownSlashes = (text) =>
  SLASH_OK.reduce((acc, term) => acc.split(term).join(term.replace('/', '')), text)

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const expectations = {
  'src/pages/Home.jsx': {
    'Recent Highlights': 3,
    'Math and Computer Science Teacher': 3,
    'Software Developer': 4,
    'Accounting Intern': 3,
  },
  'src/pages/Experience.jsx': {
    'Math and Computer Science Teacher': 3,
    'Software Developer': 4,
    'Accounting Intern': 3,
  },
}

const TEACHING_MENTORSHIP =
  'Mentored students one-on-one on debugging and algorithmic reasoning by working through their own broken code.'
const TEACHING_ASSIGNMENTS =
  'Designed progressive assignments on top-down design, object-oriented programming, and code modularity.'
const SHELL_MODEL_BULLET =
  'Advanced CatBoost to deployment based on 5-fold cross-validation with a MAPE of 0.64 versus XGBoost’s 1.29.'

const normalize = (text) =>
  text
    .replaceAll('&amp;', '&')
    .replace(/[\-\u2010-\u2015]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()

// Stable identity facts shared with cv.md and resume_master.json. The Python
// cross-surface verifier checks all three sources; this local guard stops a
// website-only edit from bypassing that contract during build and deployment.
const projectContract = [
  ['Multi-Stage IoT Intrusion Detection', ['206,000', '99.5%', '0.94%', '0.981', '0.125', '60 second']],
  ['Ocean Data ML Platform with RAG', ['water temperature', 'persistence', 'seven', 'horizons', 'air temperature', '48%', 'hit@k', '0.9', 'term recall', '0.85', 'FastAPI', 'Qdrant', 'Ollama']],
  ['Anomaly Detection at Scale on Species Data', ['Isolation Forest', 'PySpark', 'geographic', 'density']],
  ['Auction Marketplace Microservices', ['Flask REST services', 'MySQL', 'RabbitMQ', 'MongoDB', '14 containers', 'Docker Compose']],
  ['Automated Crypto Trading Bot', ['1%', '2%', '8 period', '20', '200 period', 'four months', 'AWS EC2', 'CSV', 'cooldowns', 'open trade']],
  ['Distributed Facility Reservation System', ['27', 'OpenAPI', '71', 'pytest', 'session', 'permission']],
  ['End-to-End Multi-Output Fuel Blending System', ['10', 'blend properties', 'FastAPI', 'Docker', 'AWS EC2', 'CatBoost', 'XGBoost', '0.64', '1.29', 'entropy', 'serialized', 'preprocessing']],
  ['Stock Sentiment Analysis', ['15,194', '861', '10 tech stocks', 'NVIDIA', 'GARCH(1,1)', 'SQLite', 'Neo4j']],
  ['Belay Real-Time Chat Application', ['nested REST routes', 'History API', 'hashed passwords', 'authkey', 'fetch']],
  ['Loan Approval Classifier', ['XGBoost', 'SMOTE', 'quantum', 'Isolation Forest', 'mixture of experts', '12', 'Fairlearn', 'age', 'income']],
  ['Parallel Image Processing Engine', ['20%', '30%', 'staged pipeline', 'bulk synchronous', '2D convolution']],
  ['Support Ticket Triage', ['TF IDF', 'SVM', 'kNN', 'DistilBERT', 'type', 'priority', 'queue', 'Streamlit', 'retrieved']],
  ['Algorithmic Trading & Execution Optimization', ['Java', 'order execution', 'portfolio rebalancing', 'final round', 'top 250', '1,500']],
  ['KoronaKiller', ['team of 3', 'Python', '2D simulation', 'player health', 'event driven', 'continuous background scrolling', 'randomized object', 'collision detection', '48 hour']],
]

let failed = false

function titleBefore(source, offset) {
  const matches = [...source.slice(0, offset).matchAll(/<h3>(.*?)<\/h3>/gs)]
  return matches.at(-1)?.[1].replace(/<.*?>/g, '').trim()
}

function bulletLists(source) {
  return [...source.matchAll(/<ul className="bullet-list">(.*?)<\/ul>/gs)].map((match) => ({
    title: titleBefore(source, match.index),
    count: [...match[1].matchAll(/<li(?:\s|>)/g)].length,
    bullets: [...match[1].matchAll(/<li>(.*?)<\/li>/gs)].map((item) =>
      item[1].replace(/<.*?>/gs, '').replace(/\s+/g, ' ').trim()
    ),
  }))
}

for (const [relativePath, expected] of Object.entries(expectations)) {
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8')
  const lists = bulletLists(source)
  for (const [title, count] of Object.entries(expected)) {
    const entry = lists.find((item) => item.title === title)
    const actual = entry?.count
    if (actual !== count) {
      console.error(`FAIL ${relativePath}: ${title} has ${actual ?? 0} bullets; expected ${count}`)
      failed = true
    }
    if (title === 'Math and Computer Science Teacher' && entry?.bullets.at(-1) !== TEACHING_MENTORSHIP) {
      console.error(
        `FAIL ${relativePath}: final teaching bullet drifted; expected exact resume wording`
      )
      failed = true
    }
    if (title === 'Math and Computer Science Teacher' && entry?.bullets.at(1) !== TEACHING_ASSIGNMENTS) {
      console.error(
        `FAIL ${relativePath}: second teaching bullet drifted; expected exact resume wording`
      )
      failed = true
    }
  }
}

const projectsPath = 'src/pages/Projects.jsx'
const projects = bulletLists(fs.readFileSync(path.join(root, projectsPath), 'utf8'))
const hackathonsPath = 'src/pages/Hackathons.jsx'
const hackathons = bulletLists(fs.readFileSync(path.join(root, hackathonsPath), 'utf8'))
const projectCards = [...projects, ...hackathons]
const shellCard = hackathons.find(
  (project) => project.title === 'End-to-End Multi-Output Fuel Blending System'
)
if (shellCard?.bullets.at(1) !== SHELL_MODEL_BULLET) {
  console.error('FAIL src/pages/Hackathons.jsx: second Shell bullet drifted from approved wording')
  failed = true
}
const compressed = /\b(?:\d+(?:\.\d+)?M-row|(?:8|20|200)-period|12-hour|60-second|four-condition|session-disjoint|capture-session|held-out|plain-English|feature-specific|density-aware|cross-service|reservation-rules|session-freshness|permission-scope|single-page|fetch-based|last-seen|per-session|class-weighted|quantum-transformed|loan-approval|12-qubit|false-positive|false-negative|bulk-synchronous|ticket-triage)\b|fan-in\/fan-out/i
for (const project of projects) {
  if (project.count !== 3) {
    console.error(`FAIL ${projectsPath}: ${project.title} has ${project.count} bullets; expected 3`)
    failed = true
  }
  for (const [index, bullet] of project.bullets.entries()) {
    if (bullet.length < 120 || bullet.length > 230) {
      console.error(
        `FAIL ${projectsPath}: ${project.title} bullet ${index + 1} has ${bullet.length} characters; expected 120-230`
      )
      failed = true
    }
    if (stripKnownSlashes(bullet).includes('/') || bullet.includes(';')) {
      console.error(
        `FAIL ${projectsPath}: ${project.title} bullet ${index + 1} uses compressed slash or semicolon prose`
      )
      failed = true
    }
    const hit = bullet.match(compressed)
    if (hit) {
      console.error(
        `FAIL ${projectsPath}: ${project.title} bullet ${index + 1} contains compressed fragment '${hit[0]}'`
      )
      failed = true
    }
  }
}

const matchedProjectTitles = new Set()
for (const [canonicalTitle, facts] of projectContract) {
  const matches = projectCards.filter((project) =>
    normalize(project.title).includes(normalize(canonicalTitle))
  )
  if (matches.length !== 1) {
    console.error(
      `FAIL website project parity: expected one '${canonicalTitle}' card; found ${matches.length}`
    )
    failed = true
    continue
  }
  const project = matches[0]
  matchedProjectTitles.add(project.title)
  const text = normalize(`${project.title} ${project.bullets.join(' ')}`)
  for (const fact of facts) {
    if (!text.includes(normalize(fact))) {
      console.error(
        `FAIL website project parity: ${canonicalTitle} is missing resume fact '${fact}'`
      )
      failed = true
    }
  }
}
for (const project of projectCards) {
  if (!matchedProjectTitles.has(project.title)) {
    console.error(`FAIL website project parity: uncontracted project card '${project.title}'`)
    failed = true
  }
}

for (const relativePath of ['src/pages/Home.jsx', 'src/pages/Experience.jsx', 'src/pages/Hackathons.jsx']) {
  const lists = bulletLists(fs.readFileSync(path.join(root, relativePath), 'utf8'))
  for (const list of lists) {
    for (const [index, bullet] of list.bullets.entries()) {
      if (stripKnownSlashes(bullet).includes('/') || bullet.includes(';')) {
        console.error(
          `FAIL ${relativePath}: ${list.title} bullet ${index + 1} uses compressed slash or semicolon prose`
        )
        failed = true
      }
      const hit = bullet.match(compressed)
      if (hit) {
        console.error(
          `FAIL ${relativePath}: ${list.title} bullet ${index + 1} contains compressed fragment '${hit[0]}'`
        )
        failed = true
      }
    }
  }
}

if (failed) process.exit(1)
console.log(`PASS website bullet counts and resume parity: T-Mobile 4; ${projectCards.length} project cards covered`)
