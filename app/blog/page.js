import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { getAllPosts } from '../lib/blog'

export const metadata = {
  title: 'The Journal | Transcend Photography',
  description:
    'Stories, planning guides, and galleries on wedding, brand, and portrait photography in Los Angeles.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'The Journal | Transcend Photography',
    description:
      'Stories, planning guides, and galleries on wedding, brand, and portrait photography in Los Angeles.',
    url: '/blog',
    type: 'website',
  },
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <>
      <Nav variant="solid" />
      <Reveal />

      <header className="section wrap center" style={{ paddingTop: '160px', paddingBottom: '90px' }}>
        <div className="label reveal" style={{ marginBottom: '28px' }}>The journal</div>
        <h1 className="serif reveal" style={{ fontWeight: 300, fontSize: 'clamp(42px,6vw,82px)', lineHeight: 1.05 }}>
          Photography insights &amp; perspectives
        </h1>
      </header>

      <section className="section wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '60px' }}>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.slug} className="blog-card reveal">
                {post.featuredImage && (
                  <Link href={`/blog/${post.slug}`}>
                    <div className="blog-image" style={{ height: '240px', marginBottom: '24px', overflow: 'hidden', borderRadius: '2px', cursor: 'pointer' }}>
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.4s cubic-bezier(.22,1,.36,1)' }}
                      />
                    </div>
                  </Link>
                )}
                <div className="label" style={{ fontSize: '11px', marginBottom: '8px' }}>{post.category.toUpperCase()}</div>
                <h2 style={{ fontSize: '24px', fontFamily: 'var(--font-serif), serif', fontWeight: 400, marginBottom: '8px', lineHeight: 1.2 }}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--taupe)', marginBottom: '16px' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--espresso)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="arrow" style={{ display: 'inline-block' }}>
                  Read more
                </Link>
              </article>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', color: 'var(--taupe)' }}>
              No posts found
            </p>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
