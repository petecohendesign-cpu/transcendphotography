import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import BlogGallery from '../../components/BlogGallery'
import { getPostBySlug, getSlugs } from '../../lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Transcend Photography`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    alternates: {
      canonical: `https://www.transcendphoto.net/blog/${params.slug}`,
    },
  }
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }


  return (
    <>
      <Nav variant="solid" />
      <Reveal />

      <article style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>{post.category?.toUpperCase()}</div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,56px)', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, lineHeight: 1.1, marginBottom: '24px' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--taupe)' }}>
            {post.date && new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {post.featuredImage && (
          <div style={{ marginBottom: '60px' }}>
            <img src={post.featuredImage} alt={post.title} style={{ width: '100%', borderRadius: '2px' }} />
          </div>
        )}

        <div
          className="blog-content"
          style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: 'var(--espresso)', paddingBottom: '60px' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.galleryImages && post.galleryImages.length > 0 && (
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '28px', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, marginBottom: '24px' }}>
              Gallery
            </h2>
            <BlogGallery images={post.galleryImages} />
          </div>
        )}
      </article>

      <Footer />
    </>
  )
}
