import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const imagesDirectory = path.join(process.cwd(), 'public/blog-images')

function getGalleryImages(slug) {
  if (!fs.existsSync(imagesDirectory)) return []

  const files = fs.readdirSync(imagesDirectory)
  return files
    .filter(f => {
      // Match slug-N.jpg or slug-N.png (not featured)
      return f.match(new RegExp(`^${slug}-\\d+\\.(jpg|jpeg|png)$`, 'i'))
    })
    .sort((a, b) => {
      const numA = parseInt(a.replace(`${slug}-`, '').replace(/\.[^.]+$/, ''))
      const numB = parseInt(b.replace(`${slug}-`, '').replace(/\.[^.]+$/, ''))
      return numA - numB
    })
    .map(f => `/blog-images/${f}`)
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory)
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: file.replace(/\.md$/, ''),
        ...data,
        excerpt: data.excerpt || content.substring(0, 150) + '...',
      }
    })

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Strip any legacy ## Gallery sections from the markdown
  const cleanContent = content.replace(/## Gallery[\s\S]*$/m, '').replace(/\n---\n$/m, '')
  const htmlContent = marked(cleanContent)

  // Auto-detect gallery images from filesystem
  const galleryImages = getGalleryImages(slug)

  return {
    slug,
    ...data,
    content: htmlContent,
    galleryImages,
  }
}

export function getSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory)
  return files.filter(file => file.endsWith('.md')).map(file => file.replace(/\.md$/, ''))
}
