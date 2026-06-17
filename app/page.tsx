import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  { icon: '🎙️', title: '100+ AI Voices', desc: 'Neutral, warm, energetic, meditative. Pick the voice that fits your content.' },
  { icon: '🌍', title: '50+ Languages', desc: 'English, French, Spanish, Arabic, Japanese, Hindi and dozens more.' },
  { icon: '🎭', title: 'Accents and Styles', desc: 'British, American, Australian and regional accents for every language.' },
  { icon: '🧘', title: 'Voice Themes', desc: 'Narrator, meditation guide, podcast host. Match tone to content type.' },
  { icon: '🪄', title: 'Voice Cloning', desc: 'Record once, generate forever. Audio that sounds exactly like you.' },
  { icon: '⚡', title: 'Instant Output', desc: 'Paste script, tap Generate. Studio-quality audio in seconds.' },
]

const useCases = [
  { icon: '▶️', label: 'YouTube' },
  { icon: '📱', label: 'TikTok and Reels' },
  { icon: '🎙️', label: 'Podcasts' },
  { icon: '💬', label: 'WhatsApp' },
  { icon: '📖', label: 'Audiobooks' },
  { icon: '🎓', label: 'E-Learning' },
]

const languages = [
  'English', 'French', 'Spanish', 'Arabic', 'Portuguese', 'German', 'Italian',
  'Japanese', 'Chinese', 'Hindi', 'Korean', 'Russian', 'Dutch', 'Polish',
  'Turkish', 'Swedish', 'Danish', 'Norwegian', 'Finnish', 'Greek', 'Hebrew',
  'Thai', 'Vietnamese', 'Indonesian', 'Bengali', 'Tamil', 'Ukrainian', 'Romanian',
  'Hungarian', 'Czech', 'Catalan', 'Farsi', 'Urdu', 'Malay', 'Tagalog',
]

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Labs AI - Text to Speech',
  operatingSystem: 'iOS',
  applicationCategory: 'UtilitiesApplication',
  description: '100+ AI voices, 50+ languages, voice cloning. Create studio-quality audio for YouTube, TikTok, podcasts and more.',
  url: 'https://labs.sedonatech.uk',
  downloadUrl: 'https://apps.apple.com/be/app/labs-ai-text-to-speech/id6741198402',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Labs AI', url: 'https://labs.sedonatech.uk' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Labs AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Labs AI is a text-to-speech app for iPhone. It converts any written text into natural-sounding audio using AI voices. It offers 100+ voices, 50+ languages, accent selection, and voice cloning.' },
    },
    {
      '@type': 'Question',
      name: 'Can I clone my own voice with Labs AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Labs AI includes a voice cloning feature. Record a short audio sample and the app creates a clone of your voice. You can then generate unlimited audio that sounds exactly like you.' },
    },
    {
      '@type': 'Question',
      name: 'What languages does Labs AI support?',
      acceptedAnswer: { '@type': 'Answer', text: 'Labs AI supports 50+ languages including English, French, Spanish, Arabic, Japanese, Chinese, Hindi, Portuguese, German, Italian, Korean, Russian, and many more.' },
    },
    {
      '@type': 'Question',
      name: 'What can I use Labs AI for?',
      acceptedAnswer: { '@type': 'Answer', text: 'Labs AI is used for creating voiceovers for YouTube videos, TikTok and Instagram Reels, podcasts, WhatsApp audio messages, audiobooks, e-learning courses, and any content that needs professional audio.' },
    },
    {
      '@type': 'Question',
      name: 'Is Labs AI free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Labs AI is free to download on the App Store. A free tier is available to try the app. Premium features are available via subscription.' },
    },
  ],
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f7', overflowX: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Background blobs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden', background: '#fafafc' }}>
        <div className="blob" style={{
          position: 'absolute', top: '-15%', left: '-5%',
          width: 800, height: 800, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(130,80,255,0.22) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div className="blob-2" style={{
          position: 'absolute', top: '10%', right: '-10%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,160,255,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div className="blob-3" style={{
          position: 'absolute', top: '40%', left: '30%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,50,120,0.13) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div className="blob" style={{
          position: 'absolute', bottom: '0%', right: '20%',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,200,255,0.14) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animationDelay: '3s',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* Hero */}
        <section style={{
          paddingTop: '9rem',
          paddingBottom: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          textAlign: 'center',
          maxWidth: 780,
          margin: '0 auto',
        }}>
          <div className="animate-fade-up-1" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div style={{ position: 'relative' }}>
              {/* Animated halo glow */}
              <div className="halo-pulse" style={{
                position: 'absolute', inset: -24,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(130,80,255,0.28) 0%, transparent 70%)',
                filter: 'blur(18px)',
              }} />
              <div className="animate-float" style={{
                position: 'relative',
                width: 110, height: 110,
                borderRadius: 28,
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 12px 48px rgba(100,60,255,0.18), 0 2px 8px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '14px 10px',
              }}>
                <Image src="/logo-trimmed.png" alt="Labs AI" width={90} height={51} style={{ display: 'block', width: '100%', height: 'auto' }} />
              </div>
            </div>
          </div>

          <h1 className="animate-fade-up-2" style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
            fontWeight: 500,
            lineHeight: 1.08,
            color: '#1d1d1f',
            letterSpacing: '-0.04em',
            marginBottom: '1.25rem',
          }}>
            Any text.<br />
            Any voice.<br />
            <span className="gradient-animated">Instant audio.</span>
          </h1>

          <p className="animate-fade-up-3" style={{
            fontSize: 19,
            color: '#515154',
            maxWidth: 520,
            margin: '0 auto 2.5rem',
            lineHeight: 1.65,
            letterSpacing: '-0.01em',
            fontWeight: 400,
          }}>
            100+ AI voices, 50+ languages, voice cloning. Create studio-quality audio for YouTube, TikTok, podcasts and more.
          </p>

          <div className="animate-fade-up-4" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://apps.apple.com/be/app/labs-ai-text-to-speech/id6741198402"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-hover"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: '#1d1d1f',
                color: '#fff',
                padding: '0.85rem 1.75rem',
                borderRadius: 99,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download Free
            </a>
            <Link
              href="/blog"
              className="pill-hover"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,0,0,0.09)',
                color: '#1d1d1f',
                padding: '0.85rem 1.75rem',
                borderRadius: 99,
                fontSize: 16,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              Read guides
            </Link>
          </div>
        </section>

        {/* Use cases */}
        <ScrollReveal>
          <section style={{ padding: '0 1.5rem 4.5rem', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
              {useCases.map((u) => (
                <div key={u.label} className="card-hover glass-shine" style={{
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.85)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderRadius: 99,
                  padding: '0.55rem 1.1rem',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#1d1d1f',
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  cursor: 'default',
                }}>
                  <span>{u.icon}</span> {u.label}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)', margin: '0 0 4rem' }} />

        {/* Features */}
        <section style={{ padding: '0 1.5rem 4rem', maxWidth: 1000, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{
              textAlign: 'center', fontSize: 12, fontWeight: 600,
              color: '#86868b', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '0.75rem',
            }}>
              Features
            </p>
            <h2 style={{
              textAlign: 'center', fontSize: 34, fontWeight: 600,
              color: '#1d1d1f', marginBottom: '0.5rem', letterSpacing: '-0.03em',
            }}>
              Everything in one app
            </h2>
            <p style={{ textAlign: 'center', color: '#86868b', marginBottom: '2.5rem', fontSize: 17, letterSpacing: '-0.01em' }}>
              No mic. No studio. No experience needed.
            </p>
          </ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}>
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.07}>
                <div className="card-hover glass-shine" style={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255,255,255,0.85)',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                  borderRadius: 20,
                  padding: '1.5rem',
                }}>
                  <div style={{ fontSize: 30, marginBottom: '0.75rem' }}>{f.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#1d1d1f', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{f.title}</h3>
                  <p style={{ color: '#86868b', lineHeight: 1.55, fontSize: 14, letterSpacing: '-0.01em' }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)', margin: '0 0 4rem' }} />

        {/* Voice Cloning */}
        <section style={{ padding: '0 1.5rem 4rem', maxWidth: 1000, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="glass-shine" style={{
              background: 'rgba(255,255,255,0.62)',
              backdropFilter: 'blur(30px) saturate(200%)',
              WebkitBackdropFilter: 'blur(30px) saturate(200%)',
              border: '1px solid rgba(255,255,255,0.9)',
              boxShadow: '0 4px 48px rgba(120,80,255,0.12)',
              borderRadius: 28,
              padding: '3.5rem 2rem',
              textAlign: 'center',
            }}>
              <div className="animate-float" style={{ fontSize: 52, marginBottom: '1rem' }}>🪄</div>
              <p style={{
                fontSize: 12, fontWeight: 600, color: '#7c3aed',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Voice Cloning
              </p>
              <h2 style={{
                fontSize: 34, fontWeight: 600, color: '#1d1d1f',
                marginBottom: '0.75rem', letterSpacing: '-0.03em',
              }}>
                Clone your voice.<br />Generate forever.
              </h2>
              <p style={{ color: '#515154', fontSize: 17, maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.65, letterSpacing: '-0.01em' }}>
                Record a few seconds. Labs AI clones it. Generate unlimited audio that sounds exactly like you, for every piece of content, forever.
              </p>
              <a
                href="https://apps.apple.com/be/app/labs-ai-text-to-speech/id6741198402"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-hover"
                style={{
                  display: 'inline-block',
                  background: '#1d1d1f',
                  color: '#fff',
                  padding: '0.8rem 1.75rem',
                  borderRadius: 99,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                }}
              >
                Try Voice Cloning
              </a>
            </div>
          </ScrollReveal>
        </section>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)', margin: '0 0 4rem' }} />

        {/* Languages */}
        <section style={{ padding: '0 1.5rem 4rem', maxWidth: 900, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{
              textAlign: 'center', fontSize: 12, fontWeight: 600,
              color: '#86868b', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: '0.75rem',
            }}>
              Languages
            </p>
            <h2 style={{
              textAlign: 'center', fontSize: 34, fontWeight: 600,
              color: '#1d1d1f', marginBottom: '0.5rem', letterSpacing: '-0.03em',
            }}>
              Speak any language
            </h2>
            <p style={{ textAlign: 'center', color: '#86868b', marginBottom: '2rem', fontSize: 16, letterSpacing: '-0.01em' }}>
              50+ languages. Reach a global audience.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {languages.map((lang) => (
                <span key={lang} className="pill-hover" style={{
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,0,0,0.07)',
                  color: '#1d1d1f',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 99,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'default',
                  display: 'inline-block',
                }}>
                  {lang}
                </span>
              ))}
              <span style={{
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,0,0,0.07)',
                color: '#86868b',
                padding: '0.35rem 0.85rem',
                borderRadius: 99,
                fontSize: 13,
                fontWeight: 500,
              }}>+ more</span>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <ScrollReveal>
          <section style={{ padding: '0 1.5rem 7rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '0.75rem', opacity: 0.18 }}>
              <Image src="/logo-trimmed.png" alt="Labs AI" width={32} height={18} style={{ display: 'inline-block' }} />
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600,
              color: '#1d1d1f', letterSpacing: '-0.04em', marginBottom: '0.75rem',
            }}>
              Start creating today
            </h2>
            <p style={{ color: '#86868b', fontSize: 17, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
              Free to download. No account needed to try.
            </p>
            <a
              href="https://apps.apple.com/be/app/labs-ai-text-to-speech/id6741198402"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-hover"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: '#1d1d1f',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: 99,
                fontSize: 17,
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Get Labs AI, Free on iOS
            </a>
          </section>
        </ScrollReveal>

        <Footer />
      </div>
    </div>
  )
}
