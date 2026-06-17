import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Labs AI - Text to Speech App',
    template: '%s | Labs AI',
  },
  description: 'Convert any text to natural speech instantly. 100+ AI voices, 50+ languages, voice cloning. Perfect for YouTube, TikTok, podcasts and more.',
  keywords: ['text to speech', 'AI voice', 'voice cloning', 'TTS app', 'text to audio', 'AI narration', 'podcast creator', 'youtube voiceover'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://labs.sedonatech.uk',
    siteName: 'Labs AI',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 's2h7vE-9DqPlKVxfKQ2H9qD8DpYsWsygXAC27Mqg3Pg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
