const relatedMap: Record<string, string[]> = {
  'ai-voice-for-tiktok-reels-shorts': [
    'how-to-make-youtube-videos-without-recording-voice',
    'how-to-make-a-podcast-with-ai-voice',
    'best-text-to-speech-app-ios',
  ],
  'best-text-to-speech-app-ios': [
    'elevenlabs-alternative-iphone',
    'voice-cloning-app-iphone',
    'ai-voice-for-tiktok-reels-shorts',
  ],
  'best-text-to-speech-for-meditation-content': [
    'best-text-to-speech-app-ios',
    'voice-cloning-app-iphone',
    'how-to-make-a-podcast-with-ai-voice',
  ],
  'elevenlabs-alternative-iphone': [
    'best-text-to-speech-app-ios',
    'voice-cloning-app-iphone',
    'ai-voice-for-tiktok-reels-shorts',
  ],
  'how-to-make-a-podcast-with-ai-voice': [
    'how-to-make-youtube-videos-without-recording-voice',
    'ai-voice-for-tiktok-reels-shorts',
    'best-text-to-speech-app-ios',
  ],
  'how-to-make-youtube-videos-without-recording-voice': [
    'ai-voice-for-tiktok-reels-shorts',
    'how-to-make-a-podcast-with-ai-voice',
    'best-text-to-speech-app-ios',
  ],
  'send-voice-message-whatsapp-without-recording': [
    'best-text-to-speech-app-ios',
    'voice-cloning-app-iphone',
    'elevenlabs-alternative-iphone',
  ],
  'voice-cloning-app-iphone': [
    'best-text-to-speech-app-ios',
    'elevenlabs-alternative-iphone',
    'labs-ai-vs-elevenlabs',
  ],
  'labs-ai-vs-speechify': [
    'best-text-to-speech-app-ios',
    'labs-ai-vs-naturalreader',
    'labs-ai-vs-elevenlabs',
  ],
  'labs-ai-vs-naturalreader': [
    'best-text-to-speech-app-ios',
    'labs-ai-vs-speechify',
    'labs-ai-vs-elevenlabs',
  ],
  'labs-ai-vs-elevenlabs': [
    'elevenlabs-alternative-iphone',
    'voice-cloning-app-iphone',
    'labs-ai-vs-speechify',
  ],
  'what-is-text-to-speech': [
    'best-text-to-speech-app-ios',
    'voice-cloning-app-iphone',
    'ai-voice-for-tiktok-reels-shorts',
  ],
  'what-is-voice-cloning': [
    'voice-cloning-app-iphone',
    'elevenlabs-alternative-iphone',
    'what-is-text-to-speech',
  ],
}

  'ai-voice-for-audiobooks': [
    'best-text-to-speech-app-ios',
    'voice-cloning-app-iphone',
    'elevenlabs-alternative-iphone',
  ],

export function getRelatedSlugs(slug: string): string[] {
  return relatedMap[slug] ?? []
}
