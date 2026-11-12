// Compare the deployed site against the build in ./dist.
//
// A GitHub Pages deployment is last-writer-wins: actions/deploy-pages carries no
// staleness check, so a workflow run created from an older commit will happily
// replace a newer deployment if it ever dispatches. A run orphaned by a GitHub
// incident keeps its own frozen copy of the workflow file, so no guard added to
// deploy-pages.yml later can reach it. This script is the other half of the
// answer: it detects a site that no longer matches the default branch, and the
// workflow around it redeploys. A scheduled run always uses the default
// branch's latest commit, so this check cannot itself be rolled back.
//
// Writes `drifted=true|false` to GITHUB_OUTPUT. A network failure is reported as
// `false`, never as drift, so a transient outage cannot trigger a pointless
// redeploy. Run `node scripts/check-live-parity.mjs` locally after a build to
// see the same verdict.
//
// Nothing here calls process.exit(): on Windows, exiting while a fetch handle is
// still closing aborts Node with a libuv assertion and exit code 127, which a
// CI job reads as a failed check rather than as a clean drift verdict.

import { createHash } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = 'https://ntdai95.github.io'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ATTEMPTS = 3

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex')
const assetPaths = (html) => [...html.matchAll(/(?:src|href)="\/(assets\/[^"]+)"/g)].map((m) => m[1])

function report(drifted, reason) {
  console.log(`${drifted ? 'DRIFT' : 'PARITY'}: ${reason}`)
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `drifted=${drifted}\n`)
  }
}

// Pages sits behind a CDN, so every request carries a cache-buster.
async function fetchLive(relativePath) {
  let lastError
  for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(`${SITE}/${relativePath}?parity=${Date.now()}-${attempt}`, {
        cache: 'no-store',
        headers: { 'cache-control': 'no-cache' },
      })
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      return Buffer.from(await response.arrayBuffer())
    } catch (error) {
      lastError = error
      if (attempt < ATTEMPTS) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 2000))
      }
    }
  }
  throw new Error(`could not read ${relativePath} after ${ATTEMPTS} attempts: ${lastError.message}`)
}

async function main() {
  if (!fs.existsSync(path.join(dist, 'index.html'))) {
    console.error('FAIL no ./dist/index.html; run the build before this check')
    return 1
  }

  const builtAssets = assetPaths(fs.readFileSync(path.join(dist, 'index.html'), 'utf8'))
  if (builtAssets.length === 0) {
    console.error('FAIL the built index.html references no /assets/ files; the check cannot run')
    return 1
  }

  let liveHtml
  try {
    liveHtml = (await fetchLive('index.html')).toString('utf8')
  } catch (error) {
    // Unreachable is unknown, not stale. Say so and change nothing.
    report(false, `live site unreachable, treating as no drift (${error.message})`)
    return 0
  }

  // Vite names each asset by a hash of its contents, so the filenames alone
  // settle it: a different name is different content.
  const liveAssets = assetPaths(liveHtml)
  const missing = builtAssets.filter((asset) => !liveAssets.includes(asset))
  const extra = liveAssets.filter((asset) => !builtAssets.includes(asset))
  if (missing.length > 0 || extra.length > 0) {
    report(
      true,
      `asset sets differ; live serves ${JSON.stringify(liveAssets)}, this build produces ${JSON.stringify(builtAssets)}`
    )
    return 0
  }

  // Same names, so verify the bytes rather than trusting the hash in the name.
  for (const asset of builtAssets) {
    let liveBytes
    try {
      liveBytes = await fetchLive(asset)
    } catch (error) {
      report(false, `could not read ${asset}, treating as no drift (${error.message})`)
      return 0
    }
    const builtHash = sha256(fs.readFileSync(path.join(dist, asset)))
    const liveHash = sha256(liveBytes)
    if (builtHash !== liveHash) {
      report(true, `${asset} differs; live ${liveHash.slice(0, 16)}, built ${builtHash.slice(0, 16)}`)
      return 0
    }
    console.log(`  ok ${asset} ${builtHash.slice(0, 16)}`)
  }

  report(false, `${builtAssets.length} assets match the deployed site byte for byte`)
  return 0
}

process.exitCode = await main()
