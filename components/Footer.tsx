import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,0,0,0.08)',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      color: '#86868b',
      fontSize: 13,
    }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <Link href="/" style={{ color: '#86868b', textDecoration: 'none' }}>Home</Link>
        <Link href="/blog" style={{ color: '#86868b', textDecoration: 'none' }}>Blog</Link>
        <a
          href="https://apps.apple.com/be/app/labs-ai-text-to-speech/id6741198402"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#86868b', textDecoration: 'none' }}
        >
          App Store
        </a>
      </div>
      <p>© {new Date().getFullYear()} Labs AI. All rights reserved.</p>
    </footer>
  )
}
