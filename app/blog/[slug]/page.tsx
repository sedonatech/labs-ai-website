import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { getFaqsBySlug } from '@/lib/faqs'
import { getRelatedSlugs } from '@/lib/related'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function inline(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#1d1d1f;font-weight:600">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} style={{ fontSize: 24, fontWeight: 700, color: '#1d1d1f', marginTop: '2.5rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }} dangerouslySetInnerHTML={{ __html: inline(line.slice(3)) }} />)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} style={{ fontSize: 19, fontWeight: 700, color: '#1d1d1f', marginTop: '1.75rem', marginBottom: '0.5rem', letterSpacing: '-0.02em' }} dangerouslySetInnerHTML={{ __html: inline(line.slice(4)) }} />)
    } else if (line.startsWith('- ')) {
      elements.push(<li key={i} style={{ color: '#515154', lineHeight: 1.7, marginBottom: '0.4rem', marginLeft: '1.25rem' }} dangerouslySetInnerHTML={{ __html: inline(line.slice(2)) }} />)
    } else if (line.match(/^\d+\. /)) {
      elements.push(<li key={i} style={{ color: '#515154', lineHeight: 1.7, marginBottom: '0.4rem', marginLeft: '1.25rem' }} dangerouslySetInnerHTML={{ __html: inline(line.replace(/^\d+\. /, '')) }} />)
    } else if (line.trim() === '') {
      elements.push(<br key={i} />)
    } else {
      elements.push(<p key={i} style={{ color: '#515154', lineHeight: 1.75, marginBottom: '1rem', fontSize: 16, letterSpacing: '-0.01em' }} dangerouslySetInnerHTML={{ __html: inline(line) }} />)
    }
    i++
  }
  return elements
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const faqs = getFaqsBySlug(slug)
  const relatedSlugs = getRelatedSlugs(slug)
  const relatedPosts = relatedSlugs.map((s) => getPostBySlug(s)).filter(Boolean)
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Labs AI', url: 'https://labs.sedonatech.uk' },
    publisher: { '@type': 'Organization', name: 'Labs AI', url: 'https://labs.sedonatech.uk' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://labs.sedonatech.uk/blog/${slug}` },
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f7' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />
      <article style={{ maxWidth: 680, margin: '0 auto', padding: '7.5rem 1.5rem 4rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/blog" style={{ color: '#515154', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
            ← Blog
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1.25rem' }}>
          <span style={{
            background: 'rgba(0,0,0,0.06)',
            color: '#515154',
            padding: '0.2rem 0.7rem',
            borderRadius: 99,
            fontSize: 12,
            fontWeight: 600,
          }}>
            {post.category}
          </span>
          <span style={{ color: '#86868b', fontSize: 13 }}>{post.readingTime}</span>
          <span style={{ color: '#86868b', fontSize: 13 }}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 2.75rem)',
          fontWeight: 800, color: '#1d1d1f',
          lineHeight: 1.1, marginBottom: '1.25rem',
          letterSpacing: '-0.04em',
        }}>
          {post.title}
        </h1>
        <p style={{
          fontSize: 18, color: '#86868b', lineHeight: 1.65,
          marginBottom: '2.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          letterSpacing: '-0.01em',
        }}>
          {post.description}
        </p>
        <div>{renderMarkdown(post.content)}</div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', marginBottom: '1rem' }}>
              Related articles
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {relatedPosts.map((related) => related && (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  style={{
                    display: 'block',
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 14,
                    padding: '1rem 1.25rem',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {related.category}
                  </span>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#1d1d1f', marginTop: '0.25rem', letterSpacing: '-0.01em' }}>
                    {related.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{
          marginTop: '3rem',
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.9)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          borderRadius: 20,
          padding: '2rem',
          textAlign: 'center',
        }}>
          <p style={{ color: '#1d1d1f', fontWeight: 700, fontSize: 18, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
            Try Labs AI for free
          </p>
          <p style={{ color: '#86868b', marginBottom: '1.25rem', fontSize: 14, letterSpacing: '-0.01em' }}>
            100+ voices, 50+ languages, voice cloning. iOS only.
          </p>
          <a
            href="https://apps.apple.com/be/app/labs-ai-text-to-speech/id6741198402"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#1d1d1f',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: 99,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Download on the App Store
          </a>
        </div>
      </article>
      <Footer />
    </div>
  )
}
