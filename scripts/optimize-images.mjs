import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/images')
const blogImagesDir = path.join(__dirname, '../public/blog-images')

const MAX_WIDTH = 2400
const QUALITY = 82

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return

  const stat = fs.statSync(filePath)
  const sizeBefore = stat.size

  const tmpPath = filePath + '.tmp'

  try {
    const img = sharp(filePath)
    const meta = await img.metadata()

    if (meta.width <= MAX_WIDTH && sizeBefore < 400 * 1024) {
      // Already small enough
      return { skipped: true, file: path.basename(filePath), sizeBefore }
    }

    const pipeline = img.rotate() // auto-orient from EXIF

    if (meta.width > MAX_WIDTH) {
      pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true })
    }

    if (ext === '.png') {
      await pipeline.png({ quality: QUALITY, compressionLevel: 9 }).toFile(tmpPath)
    } else {
      await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tmpPath)
    }

    fs.renameSync(tmpPath, filePath)
    const sizeAfter = fs.statSync(filePath).size
    return { file: path.basename(filePath), sizeBefore, sizeAfter }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath)
    return { error: true, file: path.basename(filePath), message: err.message }
  }
}

async function optimizeDir(dir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir).map(f => path.join(dir, f))
  const results = await Promise.all(files.map(optimizeImage))
  return results.filter(Boolean)
}

const fmt = bytes => `${(bytes / 1024 / 1024).toFixed(1)}MB`

console.log('Optimizing /public/images ...')
const r1 = await optimizeDir(imagesDir)
console.log('Optimizing /public/blog-images ...')
const r2 = await optimizeDir(blogImagesDir)

let totalBefore = 0, totalAfter = 0, count = 0, skipped = 0, errors = 0

for (const r of [...(r1 || []), ...(r2 || [])]) {
  if (r.skipped) { skipped++; continue }
  if (r.error) { errors++; console.error(`  ERROR ${r.file}: ${r.message}`); continue }
  totalBefore += r.sizeBefore
  totalAfter += r.sizeAfter
  count++
  console.log(`  ✓ ${r.file.padEnd(55)} ${fmt(r.sizeBefore).padStart(7)} → ${fmt(r.sizeAfter).padStart(7)}`)
}

console.log(`\nDone. ${count} optimized, ${skipped} already small, ${errors} errors.`)
console.log(`Total saved: ${fmt(totalBefore)} → ${fmt(totalAfter)} (saved ${fmt(totalBefore - totalAfter)})`)
