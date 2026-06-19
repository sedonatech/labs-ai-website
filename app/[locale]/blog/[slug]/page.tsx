import { getPostBySlugLocale, getAllPostsLocale, SUPPORTED_LOCALES, type Locale } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of SUPPORTED_LOCALES) {
    const posts = getAllPostsLocale(locale)
    for (const post of posts) {
      params.push({ locale, slug: post.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!SUPPORTED_LOCALES.includes(locale as Locale)) return {}
  const post = getPostBySlugLocale(slug, locale as Locale)
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
    alternates: {
      canonical: `https://labs.sedonatech.uk/${locale}/blog/${slug}`,
      languages: {
        'en': `https://labs.sedonatech.uk/blog/${slug}`,
        'fr': `https://labs.sedonatech.uk/fr/blog/${slug}`,
        'es': `https://labs.sedonatech.uk/es/blog/${slug}`,
      },
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

const CTA: Record<Locale, { heading: string; sub: string; btn: string }> = {
  fr: {
    heading: 'Essayez Labs AI gratuitement',
    sub: '100+ voix, 50+ langues, clonage vocal. iOS uniquement.',
    btn: 'Télécharger sur l\'App Store',
  },
  es: {
    heading: 'Prueba Labs AI gratis',
    sub: '100+ voces, 50+ idiomas, clonación de voz. Solo iOS.',
    btn: 'Descargar en el App Store',
  },
}

export default async function LocaleBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!SUPPORTED_LOCALES.includes(locale as Locale)) notFound()
  const post = getPostBySlugLocale(slug, locale as Locale)
  if (!post) notFound()

  const cta = CTA[locale as Locale]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale,
    author: { '@type': 'Organization', name: 'Labs AI', url: 'https://labs.sedonatech.uk' },
    publisher: { '@type': 'Organization', name: 'Labs AI', url: 'https://labs.sedonatech.uk' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://labs.sedonatech.uk/${locale}/blog/${slug}` },
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f7' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
            {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
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
            {cta.heading}
          </p>
          <p style={{ color: '#86868b', marginBottom: '1.25rem', fontSize: 14, letterSpacing: '-0.01em' }}>
            {cta.sub}
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
            {cta.btn}
          </a>
        </div>
      </article>
      <Footer />
    </div>
  )
}
