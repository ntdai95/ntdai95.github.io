import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// A few slashed terms are standard industry usage, not compressed prose.
const SLASH_OK = ['CI/CD', 'A/B', 'I/O', 'TCP/IP', '24/7', 'and/or', 'fan-in/fan-out']
const stripKnownSlashes = (text) =>
  SLASH_OK.reduce((acc, term) => acc.split(term).join(term.replace('/', '')), text)

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const expectations = {
  'src/pages/Home.jsx': {
    'Selected Results': 3,
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
  ['Parallel Image Processing Engine', ['20%', '30%', 'fan-in/fan-out', 'bulk synchronous', '2D convolution']],
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
const shellCards = hackathons.filter(
  (project) => project.title === 'End-to-End Multi-Output Fuel Blending System'
)
for (const shellCard of shellCards) {
  if (shellCard.bullets.at(1) !== SHELL_MODEL_BULLET) {
    console.error('FAIL website: second Shell bullet drifted from approved wording')
    failed = true
  }
}
const compressed = /\b(?:\d+(?:\.\d+)?M-row|(?:8|20|200)-period|12-hour|60-second|four-condition|session-disjoint|capture-session|held-out|plain-English|feature-specific|density-aware|cross-service|reservation-rules|session-freshness|permission-scope|single-page|fetch-based|last-seen|per-session|class-weighted|quantum-transformed|loan-approval|12-qubit|false-positive|false-negative|bulk-synchronous|ticket-triage)\b/i
for (const project of projects) {
  if (project.count !== 3) {
    console.error(`FAIL ${projectsPath}: ${project.title} has ${project.count} bullets; expected 3`)
    failed = true
  }
  for (const [index, bullet] of project.bullets.entries()) {
    if (bullet !== SHELL_MODEL_BULLET && (bullet.length < 120 || bullet.length > 230)) {
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
  for (const project of matches) {
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
}
for (const project of projectCards) {
  if (!matchedProjectTitles.has(project.title)) {
    console.error(`FAIL website project parity: uncontracted project card '${project.title}'`)
    failed = true
  }
}

const expectedFeaturedOrder = [
  'Ocean Data ML Platform with RAG',
  'Multi-Stage IoT Intrusion Detection (Team of 7)',
  'Distributed Facility Reservation System (Team of 4)',
  'Auction Marketplace Microservices (Team of 4)',
  'Anomaly Detection at Scale on Species Data (Team of 3)',
]
const projectSource = fs.readFileSync(path.join(root, projectsPath), 'utf8')
const featuredOrder = [...projectSource.matchAll(/<TiltCard className="card project-card">(.*?)<\/TiltCard>/gs)]
  .filter((match) => match[1].includes('featured-badge'))
  .map((match) => match[1].match(/<h3>(.*?)<\/h3>/s)?.[1].trim())
if (JSON.stringify(featuredOrder) !== JSON.stringify(expectedFeaturedOrder)) {
  console.error(
    `FAIL ${projectsPath}: featured order is ${JSON.stringify(featuredOrder)}; expected ${JSON.stringify(expectedFeaturedOrder)}`
  )
  failed = true
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

// Project attribution convention, settled 2026-11-11. A card names its backing
// exactly one way: "Personal Project" when no institution and no event is behind
// it, otherwise the course and institution, or the event under its own full name
// (the year belongs to that name where the event carries one, as Shell.ai
// Hackathon 2025 and Uncommon Hacks 2021 do, and never otherwise). A team size
// rides in the title as "(Team of N)", never in the meta line, and working alone
// at an institution or an event is marked by nothing at all. Two cards shipped a
// "Solo" marker that appears in no resume and nothing here caught it, so the
// meta lines are contracted verbatim.
const attributionContract = [
  [
    projectsPath,
    {
      'Ocean Data ML Platform with RAG': 'Personal Project <br /> Feb 2026 – Mar 2026',
      'Multi-Stage IoT Intrusion Detection (Team of 7)':
        'Capstone Project (ECE 592B) <br /> University of Victoria, May 2026 – Aug 2026',
      'Distributed Facility Reservation System (Team of 4)':
        'Applied Software Engineering (MPCS 51220) <br /> University of Chicago, Apr 2021 – May 2021',
      'Auction Marketplace Microservices (Team of 4)':
        'Topics in Software Engineering (MPCS 51205) <br /> University of Chicago, Feb 2021 – Mar 2021',
      'Anomaly Detection at Scale on Species Data (Team of 3)':
        'Systems for Massive Datasets (CSC 502) <br /> University of Victoria, Mar 2026 – Apr 2026',
      'Stock Sentiment Analysis (Team of 4)':
        'Algorithms and Data Models (CSC 501) <br /> University of Victoria, Nov 2025 – Dec 2025',
      'Parallel Image Processing Engine': 'Personal Project <br /> Apr 2022 – May 2022',
      'Belay Real-Time Chat Application':
        'Web Development (MPCS 52553) <br /> University of Chicago, Jan 2022 – Feb 2022',
      'Support Ticket Triage (Team of 4)':
        'Selected Topics in Computer Engineering: AI (ECE 569A) <br /> University of Victoria, May 2026 – Jun 2026',
      'Loan Approval Classifier (Team of 6)':
        'Data Mining (CSC 503) <br /> University of Victoria, Jul 2026 – Aug 2026',
      'Automated Crypto Trading Bot': 'Personal Project <br /> Feb 2025 – Jul 2025',
    },
  ],
  [
    hackathonsPath,
    {
      'End-to-End Multi-Output Fuel Blending System': 'Shell.ai Hackathon 2025 · Jul 2025',
      'Algorithmic Trading &amp; Execution Optimization': 'IMC 64 Bids Coding Challenge · Oct 2021',
      'KoronaKiller (Team of 3)': 'Uncommon Hacks 2021 · Apr 2021',
    },
  ],
]

function projectCardAttributions(source) {
  return [...source.matchAll(/<TiltCard className="card project-card">(.*?)<\/TiltCard>/gs)].map(
    (card) => ({
      title: card[1]
        .match(/<h3>(.*?)<\/h3>/s)?.[1]
        .replace(/<.*?>/gs, '')
        .trim(),
      meta: card[1]
        .match(/<p className="edu-meta">(.*?)<\/p>/s)?.[1]
        .replace(/\s+/g, ' ')
        .trim(),
    })
  )
}

let attributionsChecked = 0
for (const [relativePath, expected] of attributionContract) {
  const cards = projectCardAttributions(fs.readFileSync(path.join(root, relativePath), 'utf8'))
  const seen = new Set()
  for (const card of cards) {
    if (!Object.prototype.hasOwnProperty.call(expected, card.title)) {
      console.error(`FAIL ${relativePath}: project card '${card.title}' has no attribution contract`)
      failed = true
      continue
    }
    seen.add(card.title)
    attributionsChecked += 1
    if (card.meta !== expected[card.title]) {
      console.error(
        `FAIL ${relativePath}: ${card.title} attribution is '${card.meta}'; expected '${expected[card.title]}'`
      )
      failed = true
    }
  }
  for (const title of Object.keys(expected)) {
    if (!seen.has(title)) {
      console.error(`FAIL ${relativePath}: contracted project card '${title}' is missing`)
      failed = true
    }
  }
}

// "Solo" is never an attribution, so it is banned outright rather than only on
// the cards the contract above enumerates.
for (const relativePath of [
  'src/pages/Home.jsx',
  'src/pages/Experience.jsx',
  projectsPath,
  hackathonsPath,
]) {
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8')
  if (/\bsolo\b/i.test(source)) {
    console.error(`FAIL ${relativePath}: 'Solo' is not an attribution; name the backing instead`)
    failed = true
  }
}

if (attributionsChecked !== 14) {
  console.error(`FAIL website attributions: checked ${attributionsChecked} cards; expected 14`)
  failed = true
}

if (failed) process.exit(1)
console.log(
  `PASS website bullet counts and resume parity: T-Mobile 4; ${projectCards.length} project cards covered; ${attributionsChecked} attributions contracted`
)
