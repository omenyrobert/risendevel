import sharp from 'sharp'
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { extname, join } from 'node:path'

const dirs = [
  'src/assets/team/uganda',
  'src/assets/team/burundi',
  'src/assets/team/congo',
  'src/assets/team/international',
]

const MAX_TEAM_WIDTH = 900

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function optimize(filePath, maxWidth) {
  const before = statSync(filePath).size
  const ext = extname(filePath).toLowerCase()
  const buffer = await sharp(filePath).rotate().resize({ width: maxWidth, withoutEnlargement: true }).toBuffer()

  let pipeline = sharp(buffer)
  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9 })
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 78 })
  } else {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true })
  }

  const out = await pipeline.toBuffer()
  if (out.length < before) {
    let lastErr
    for (let i = 0; i < 20; i++) {
      try {
        writeFileSync(filePath, out)
        lastErr = null
        break
      } catch (err) {
        lastErr = err
        await sleep(500)
      }
    }
    if (lastErr) {
      console.warn(`  could not write ${filePath}: ${lastErr.code}`)
      return
    }
  }
  const after = statSync(filePath).size
  console.log(`${filePath}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`)
}

for (const dir of dirs) {
  const files = readdirSync(dir)
  for (const f of files) {
    const ext = extname(f).toLowerCase()
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue
    await optimize(join(dir, f), MAX_TEAM_WIDTH)
  }
}

console.log('Done.')
