import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import BlogGallery from '../../components/BlogGallery'
import { getPostBySlug, getSlugs, getAllPosts } from '../../lib/blog'
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

  // Pull 3 other posts for "More from the Journal"
  const allPosts = getAllPosts()
  const related = allPosts.filter(p => p.slug !== params.slug).slice(0, 3)

  return (
    <>
      <Nav variant="solid" />
      <Reveal />

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>

        {/* Breadcrumb */}
        <div style={{ paddingTop: '120px', paddingBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link href="/blog" className="arrow" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>
            ← The Journal
          </Link>
          <span style={{ color: 'var(--taupe)', fontSize: '11px', opacity: 0.5 }}>/</span>
          <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--taupe)', textTransform: 'uppercase' }}>
            {post.category}
          </span>
        </div>

        <header style={{ paddingBottom: '60px' }}>
          <h1 style={{ fontSize: 'clamp(36px,6vw,56px)', fontFamily: 'var(--font-serif), serif', fontWeight: 300, lineHeight: 1.1, marginBottom: '24px' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--taupe)' }}>
            {post.date && new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {post.featuredImage && (
          <div style={{ marginBottom: '60px' }}>
            <img
              src={post.featuredImage}
              alt={`${post.title}, Pete Cohen Photography, Los Angeles`}
              style={{ width: '100%', borderRadius: '2px' }}
            />
          </div>
        )}

        <div
          className="blog-content"
          style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: 'var(--espresso)', paddingBottom: '60px' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.galleryImages && post.galleryImages.length > 0 && (
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-serif), serif', fontWeight: 300, marginBottom: '24px' }}>
              Gallery
            </h2>
            <BlogGallery
              images={post.galleryImages.map((src, i) => ({
                src,
                alt: `${post.title}, photo ${i + 1} by Pete Cohen, Los Angeles photographer`,
              }))}
            />
          </div>
        )}

        {/* Back to journal link after content */}
        <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: '48px', paddingBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/blog" className="arrow">← Back to the Journal</Link>
        </div>
      </article>

      {/* More from the Journal */}
      {related.length > 0 && (
        <section style={{ background: 'var(--bone-2)', padding: '80px 48px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="label reveal" style={{ marginBottom: '16px', textAlign: 'center' }}>Keep reading</div>
            <h2 className="reveal" style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: 'clamp(28px,4vw,42px)', textAlign: 'center', marginBottom: '56px' }}>
              More from the Journal
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} className="reveal">
                  {p.featuredImage && (
                    <div style={{ height: '200px', overflow: 'hidden', borderRadius: '2px', marginBottom: '20px' }}>
                      <img src={p.featuredImage} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.4s cubic-bezier(.22,1,.36,1)' }} className="blog-card-img" />
                    </div>
                  )}
                  <div className="label" style={{ fontSize: '10px', marginBottom: '8px' }}>{p.category?.toUpperCase()}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 400, fontSize: '20px', lineHeight: 1.2, marginBottom: '12px' }}>{p.title}</h3>
                  <span className="arrow" style={{ fontSize: '11px' }}>Read more</span>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '56px' }}>
              <Link href="/blog" className="btn">View all posts</Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
