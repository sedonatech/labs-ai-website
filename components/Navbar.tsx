import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      width: 'calc(100% - 48px)',
      maxWidth: 900,
      padding: '0.75rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(255,255,255,0.6)',
      borderRadius: 20,
      boxShadow: '0 2px 24px rgba(0,0,0,0.08)',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <Image src="/logo-transparent.png" alt="Labs AI" width={44} height={25} style={{ display: 'block' }} />
        <span style={{ fontWeight: 700, fontSize: 17, color: '#1d1d1f', letterSpacing: '-0.02em' }}>Labs AI</span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link href="/blog" style={{ color: '#515154', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Blog</Link>
        <a
          href="https://apps.apple.com/be/app/labs-ai-text-to-speech/id6741198402"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#1d1d1f',
            color: '#fff',
            padding: '0.5rem 1.1rem',
            borderRadius: 99,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          Download
        </a>
      </div>
    </nav>
  )
}
