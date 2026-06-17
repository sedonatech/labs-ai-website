import { getAllPosts } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Text to Speech Guides & Tips',
  description: 'Guides, tutorials, and tips for content creators using AI text-to-speech. Learn how to create YouTube videos, TikTok content, podcasts, and more with Labs AI.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f7' }}>
      <Navbar />
      <div style={{ maxWidth: 740, margin: '0 auto', padding: '7.5rem 1.5rem 4rem' }}>
        <h1 style={{
          fontSize: 48, fontWeight: 800, color: '#1d1d1f',
          marginBottom: '0.5rem', letterSpacing: '-0.04em',
        }}>
          Blog
        </h1>
        <p style={{ color: '#86868b', fontSize: 17, marginBottom: '3rem', letterSpacing: '-0.01em' }}>
          Guides for creators using AI voice.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.8)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                borderRadius: 20,
                padding: '1.5rem',
              }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.65rem' }}>
                  <span style={{
                    background: 'rgba(0,0,0,0.06)',
                    color: '#515154',
                    padding: '0.2rem 0.7rem',
                    borderRadius: 99,
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#86868b', fontSize: 13 }}>{post.readingTime}</span>
                </div>
                <h2 style={{
                  fontSize: 19, fontWeight: 700, color: '#1d1d1f',
                  marginBottom: '0.4rem', letterSpacing: '-0.02em',
                }}>
                  {post.title}
                </h2>
                <p style={{ color: '#86868b', fontSize: 14, lineHeight: 1.55, letterSpacing: '-0.01em' }}>
                  {post.description}
                </p>
                <div style={{ marginTop: '1rem', color: '#515154', fontSize: 14, fontWeight: 600 }}>
                  Read →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
