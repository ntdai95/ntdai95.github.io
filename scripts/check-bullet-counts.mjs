import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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

let failed = false

function titleBefore(source, offset) {
  const matches = [...source.slice(0, offset).matchAll(/<h3>(.*?)<\/h3>/gs)]
  return matches.at(-1)?.[1].replace(/<.*?>/g, '').trim()
}

function bulletLists(source) {
  return [...source.matchAll(/<ul className="bullet-list">(.*?)<\/ul>/gs)].map((match) => ({
    title: titleBefore(source, match.index),
    count: [...match[1].matchAll(/<li(?:\s|>)/g)].length,
  }))
}

for (const [relativePath, expected] of Object.entries(expectations)) {
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8')
  const lists = bulletLists(source)
  for (const [title, count] of Object.entries(expected)) {
    const actual = lists.find((entry) => entry.title === title)?.count
    if (actual !== count) {
      console.error(`FAIL ${relativePath}: ${title} has ${actual ?? 0} bullets; expected ${count}`)
      failed = true
    }
  }
}

const projectsPath = 'src/pages/Projects.jsx'
const projects = bulletLists(fs.readFileSync(path.join(root, projectsPath), 'utf8'))
for (const project of projects) {
  if (project.count !== 3) {
    console.error(`FAIL ${projectsPath}: ${project.title} has ${project.count} bullets; expected 3`)
    failed = true
  }
}

if (failed) process.exit(1)
console.log(`PASS website bullet counts: T-Mobile 4; ${projects.length} projects and every other listed card 3`)
