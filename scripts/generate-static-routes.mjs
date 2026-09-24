import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const routes = [
  'experience',
  'projects',
  'hackathons',
  'credentials',
  'courses',
  'certificates',
  'awards',
]

for (const route of routes) {
  const directory = join('dist', route)
  await mkdir(directory, { recursive: true })
  await copyFile(join('dist', 'index.html'), join(directory, 'index.html'))
}

console.log(`generated static entry points for ${routes.length} routes`)
