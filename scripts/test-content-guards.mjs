import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-guard-'))
const guardedFiles = [
  'src/pages/Home.jsx',
  'src/pages/Experience.jsx',
  'src/pages/Projects.jsx',
  'src/pages/Hackathons.jsx',
]

const originals = new Map(
  guardedFiles.map((relativePath) => [
    relativePath,
    fs.readFileSync(path.join(root, relativePath), 'utf8'),
  ])
)

function restoreFixtures() {
  for (const [relativePath, source] of originals) {
    const destination = path.join(temporaryRoot, relativePath)
    fs.mkdirSync(path.dirname(destination), { recursive: true })
    fs.writeFileSync(destination, source)
  }
}

function runGuard() {
  return spawnSync(process.execPath, [path.join(temporaryRoot, 'scripts/check-bullet-counts.mjs')], {
    encoding: 'utf8',
  })
}

function assertMutationBlocked(label, relativePath, before, after, expectedMessage) {
  restoreFixtures()
  const target = path.join(temporaryRoot, relativePath)
  const source = fs.readFileSync(target, 'utf8')
  if (!source.includes(before)) {
    throw new Error(`${label}: mutation anchor is absent`)
  }
  fs.writeFileSync(target, source.replace(before, after))
  const result = runGuard()
  const output = `${result.stdout ?? ''}${result.stderr ?? ''}`
  if (result.status === 0 || !output.includes(expectedMessage)) {
    throw new Error(`${label}: guard did not block the mutation\n${output}`)
  }
  console.log(`PASS mutation blocked: ${label}`)
}

try {
  fs.mkdirSync(path.join(temporaryRoot, 'scripts'), { recursive: true })
  fs.copyFileSync(
    path.join(root, 'scripts/check-bullet-counts.mjs'),
    path.join(temporaryRoot, 'scripts/check-bullet-counts.mjs')
  )
  restoreFixtures()

  const baseline = runGuard()
  if (baseline.status !== 0) {
    throw new Error(`clean fixtures failed the content guard\n${baseline.stdout}${baseline.stderr}`)
  }
  console.log('PASS clean website accepted')

  assertMutationBlocked(
    'teaching assignment wording drift',
    'src/pages/Home.jsx',
    'Designed progressive assignments on top-down design, object-oriented programming, and code modularity.',
    'Designed assignments about programming and modularity.',
    'second teaching bullet drifted'
  )
  assertMutationBlocked(
    'Ocean result drift',
    'src/pages/Projects.jsx',
    'RMSE by 48% at twelve hours.',
    'RMSE by 47% at twelve hours.',
    "Ocean Data ML Platform with RAG is missing resume fact '48%'"
  )
  assertMutationBlocked(
    'fuel project title drift',
    'src/pages/Hackathons.jsx',
    '<h3>End-to-End Multi-Output Fuel Blending System</h3>',
    '<h3>Fuel Blending Prediction Model</h3>',
    "expected one 'End-to-End Multi-Output Fuel Blending System' card"
  )
  assertMutationBlocked(
    'Shell model-selection wording drift',
    'src/pages/Hackathons.jsx',
    'Advanced CatBoost to deployment based on 5-fold cross-validation with a',
    'Benchmarked CatBoost against XGBoost with 5-fold cross-validation and',
    'second Shell bullet drifted from approved wording'
  )
} finally {
  const resolvedTemporaryRoot = path.resolve(temporaryRoot)
  const resolvedSystemTemp = path.resolve(os.tmpdir())
  const safeTemporaryRoot =
    resolvedTemporaryRoot.startsWith(`${resolvedSystemTemp}${path.sep}`) &&
    path.basename(resolvedTemporaryRoot).startsWith('portfolio-guard-')
  if (!safeTemporaryRoot) {
    throw new Error(`refusing to remove unexpected path: ${resolvedTemporaryRoot}`)
  }
  fs.rmSync(resolvedTemporaryRoot, { recursive: true, force: true })
}

