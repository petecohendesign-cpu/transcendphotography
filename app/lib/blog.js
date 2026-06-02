import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/posts')

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

  // Extract gallery images before rendering
  const galleryMatch = content.match(/## Gallery\n\n([\s\S]*?)(?:\n\n|$)/)
  const galleryImages = []

  if (galleryMatch) {
    const galleryContent = galleryMatch[1]
    const imgMatches = galleryContent.matchAll(/<img[^>]+src="([^">]+)"[^>]*\/?>/g)
    for (const match of imgMatches) {
      galleryImages.push(match[1])
    }
  }

  // Remove gallery section from content before rendering
  const contentWithoutGallery = content.replace(/## Gallery[\s\S]*$/m, '').replace(/\n---\n$/m, '')
  const htmlContent = marked(contentWithoutGallery)

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
