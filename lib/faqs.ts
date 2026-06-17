type FAQ = { question: string; answer: string }

const faqs: Record<string, FAQ[]> = {
  'ai-voice-for-tiktok-reels-shorts': [
    {
      question: 'What is the best AI voice for TikTok videos?',
      answer: 'Labs AI offers 100+ voices optimized for short-form content. Energetic voices work best for TikTok and Reels, while calm voices suit educational content.',
    },
    {
      question: 'Can I use AI voice for Instagram Reels?',
      answer: 'Yes. Labs AI exports audio files you can import into any video editor and sync with your Reels footage.',
    },
    {
      question: 'How do I add an AI voiceover to a YouTube Short?',
      answer: 'Write your script in Labs AI, generate the audio, export it, and sync it with your video in your editor. The whole process takes under 5 minutes.',
    },
    {
      question: 'Is Labs AI free for TikTok creators?',
      answer: 'Yes. Labs AI is free to download on the App Store and includes access to AI voices without requiring a subscription to get started.',
    },
  ],
  'best-text-to-speech-app-ios': [
    {
      question: 'What is the best text-to-speech app for iPhone?',
      answer: 'Labs AI is the top-rated TTS app on iOS with 100+ voices, 50+ languages, and voice cloning, all available in a free native app.',
    },
    {
      question: 'Is there a free text-to-speech app for iPhone?',
      answer: 'Yes. Labs AI is free to download on the App Store and includes access to many voices without requiring a paid subscription.',
    },
    {
      question: 'What TTS app has the most natural-sounding voices for iPhone?',
      answer: 'Labs AI uses ElevenLabs technology to deliver some of the most natural AI voices available on iOS, with human-like intonation and pacing.',
    },
    {
      question: 'Does Labs AI support multiple languages?',
      answer: 'Yes. Labs AI supports 50+ languages including English, French, Spanish, Arabic, Portuguese, German, and many more.',
    },
  ],
  'best-text-to-speech-for-meditation-content': [
    {
      question: 'What AI voice is best for guided meditation?',
      answer: 'A warm, slow, measured voice is ideal. Labs AI offers voices specifically built for calm, soothing narration suited to meditation and mindfulness content.',
    },
    {
      question: 'Can I use an AI voice to create a meditation app?',
      answer: 'Yes. Labs AI generates professional-quality meditation audio on iPhone without any recording equipment or voice actors.',
    },
    {
      question: 'What makes a text-to-speech voice good for meditation?',
      answer: 'The best meditation voices are slow, warm, and naturally inflected. Labs AI offers voices tuned for guided meditation, sleep, and relaxation content.',
    },
    {
      question: 'How do I create a guided meditation recording without a microphone?',
      answer: 'Write your script in Labs AI, choose a calm voice, tap Generate, and export the audio file. No recording setup needed.',
    },
  ],
  'elevenlabs-alternative-iphone': [
    {
      question: 'Is there an ElevenLabs app for iPhone?',
      answer: 'ElevenLabs does not have a native iOS app. Labs AI is a free iPhone app powered by ElevenLabs technology that works directly on your phone.',
    },
    {
      question: 'What is the best ElevenLabs alternative for mobile?',
      answer: 'Labs AI is the leading ElevenLabs alternative for iPhone, offering the same voice quality in a native iOS app without needing a browser.',
    },
    {
      question: 'Is Labs AI cheaper than ElevenLabs?',
      answer: 'Labs AI offers a free tier on iPhone with access to premium voices. ElevenLabs requires a paid subscription for full access, starting at $5/month.',
    },
    {
      question: 'Does Labs AI use ElevenLabs voices?',
      answer: 'Yes. Labs AI is built on ElevenLabs technology, which means you get the same high-quality AI voices directly on your iPhone.',
    },
  ],
  'how-to-make-a-podcast-with-ai-voice': [
    {
      question: 'Can I make a podcast without recording my voice?',
      answer: 'Yes. With Labs AI, you write your script, generate an AI voice, and upload the audio to any podcast platform without ever recording yourself.',
    },
    {
      question: 'What AI tool makes podcast voiceovers?',
      answer: 'Labs AI on iPhone lets you create broadcast-quality podcast audio from any text in seconds, with 100+ professional voices to choose from.',
    },
    {
      question: 'How much does it cost to make a podcast with AI voice?',
      answer: 'Labs AI is free to download on iOS. You can create full podcast episodes without any studio equipment or paid subscription.',
    },
    {
      question: 'Can I publish a podcast made with AI voice on Spotify?',
      answer: 'Yes. You can upload AI-generated audio to any podcast hosting platform including Spotify, Apple Podcasts, and Anchor.',
    },
  ],
  'how-to-make-youtube-videos-without-recording-voice': [
    {
      question: 'How do I make YouTube videos without recording my voice?',
      answer: 'Use Labs AI to generate a professional AI voiceover from your script, then pair it with stock footage or screen recordings in any video editor.',
    },
    {
      question: 'What is the best AI voiceover tool for YouTube?',
      answer: 'Labs AI is a free iPhone app that creates natural-sounding voiceovers for YouTube in seconds, with 100+ voices and 50+ languages.',
    },
    {
      question: 'Can faceless YouTube channels make money?',
      answer: 'Yes. Many faceless YouTube channels earn through AdSense, sponsorships, and affiliate marketing. AI voiceovers make it easy to scale production.',
    },
    {
      question: 'Do I need expensive software to create YouTube voiceovers?',
      answer: 'No. Labs AI is free on iPhone. You can generate professional voiceovers, export the audio, and add it to your video in any free editor.',
    },
  ],
  'send-voice-message-whatsapp-without-recording': [
    {
      question: 'Can you send a WhatsApp voice message without recording yourself?',
      answer: 'Yes. Use Labs AI to generate an AI voice audio file from your text, then share the file in WhatsApp as an audio attachment.',
    },
    {
      question: 'How do I send an AI voice note on WhatsApp?',
      answer: 'Generate your audio in Labs AI, save it to your iPhone, open WhatsApp, tap the attachment icon, and share the audio file.',
    },
    {
      question: 'Is there an app that converts text to WhatsApp voice messages?',
      answer: 'Labs AI on iPhone lets you type any message, generate it as realistic AI audio, and share it in WhatsApp in under a minute.',
    },
    {
      question: 'Does WhatsApp accept AI-generated audio files?',
      answer: 'Yes. WhatsApp accepts standard audio files (M4A, MP3, AAC). You can share Labs AI exports as audio attachments in any chat.',
    },
  ],
  'voice-cloning-app-iphone': [
    {
      question: 'Can you clone your voice on iPhone?',
      answer: 'Yes. Labs AI lets you clone your voice on iPhone with a 30-second audio sample. Any text you type is then converted to audio that sounds like you.',
    },
    {
      question: 'What is the best voice cloning app for iPhone?',
      answer: 'Labs AI is the top voice cloning app on iOS, using ElevenLabs technology to create a personalized voice model from a short recording.',
    },
    {
      question: 'How long does voice cloning take on iPhone?',
      answer: 'With Labs AI, voice cloning takes under a minute. Record a short sample, and your AI voice model is ready to use immediately.',
    },
    {
      question: 'Is voice cloning on iPhone free?',
      answer: 'Labs AI is free to download on the App Store and includes voice cloning features. You can create your voice model without an upfront cost.',
    },
  ],
}

export function getFaqsBySlug(slug: string): FAQ[] {
  return faqs[slug] ?? []
}
