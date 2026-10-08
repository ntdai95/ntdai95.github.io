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
  }
}

const projectsPath = 'src/pages/Projects.jsx'
const projects = bulletLists(fs.readFileSync(path.join(root, projectsPath), 'utf8'))
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
console.log(`PASS website bullet counts: T-Mobile 4; ${projects.length} projects and every other listed card 3`)
