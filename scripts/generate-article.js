const Anthropic = require('@anthropic-ai/sdk').default
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const blogDir = path.join(root, 'content/blog')
const existingSlugs = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.mdx'))
  .map(f => f.replace('.mdx', ''))

const topics = JSON.parse(fs.readFileSync(path.join(__dirname, 'topics.json'), 'utf8'))
const nextTopic = topics.find(t => !existingSlugs.includes(t.slug))

if (!nextTopic) {
  console.log('All topics published. Add more topics to topics.json.')
  process.exit(0)
}

console.log(`Generating: ${nextTopic.title}`)

const today = new Date().toISOString().split('T')[0]

async function run() {
  const prompt = `You are an expert SEO content writer for Labs AI, a free text-to-speech iPhone app powered by ElevenLabs. Labs AI offers 100+ voices, 50+ languages, and voice cloning, free on iOS.

Write a complete SEO and GEO-optimized blog article:
- Title: ${nextTopic.title}
- Slug: ${nextTopic.slug}
- Category: ${nextTopic.category}
- Focus keywords: ${nextTopic.keywords.join(', ')}
- Date: ${today}

Existing articles for internal linking (pick 3 most relevant): ${existingSlugs.join(', ')}

STRICT RULES:
- NO em-dashes (use colons or commas instead)
- Use **bold** for emphasis, never raw asterisks as text
- Use - for bullet lists only
- Start with **TL;DR:** [direct 2-3 sentence answer]
- Use ## and ### headings
- 650-900 words
- Mention Labs AI naturally as the iOS solution
- End with: **Download Labs AI free on the App Store.**

Return ONLY raw JSON (no markdown, no backticks):
{
  "content": "full MDX with YAML frontmatter and article body",
  "faqs": [
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."}
  ],
  "relatedSlugs": ["slug1", "slug2", "slug3"],
  "redditTitle": "short natural Reddit post title (no promotional tone, sounds like a real user sharing a tip)",
  "redditBody": "2-4 paragraph Reddit post body. Sounds like a real person sharing a workflow or discovery. Mention Labs AI naturally once. End with a genuine question to invite replies. NO em-dashes, NO promotional language."
}`

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  })

  let raw = response.content[0].text.trim()
  if (raw.startsWith('```')) {
    raw = raw.replace(/^```[a-z]*\n?/, '').replace(/\n?```$/, '')
  }

  const data = JSON.parse(raw)

  // Write MDX
  fs.writeFileSync(path.join(blogDir, `${nextTopic.slug}.mdx`), data.content)
  console.log(`Written: content/blog/${nextTopic.slug}.mdx`)

  // Update lib/faqs.ts — inject inside the object before closing }
  const faqsPath = path.join(root, 'lib/faqs.ts')
  let faqsContent = fs.readFileSync(faqsPath, 'utf8')
  const faqEntry = `  '${nextTopic.slug}': [\n${data.faqs.map(f =>
    `    {\n      question: ${JSON.stringify(f.question)},\n      answer: ${JSON.stringify(f.answer)},\n    },`
  ).join('\n')}\n  ],\n`
  faqsContent = faqsContent.replace(
    /\n}\n\nexport function getFaqsBySlug/,
    `\n${faqEntry}}\n\nexport function getFaqsBySlug`
  )
  fs.writeFileSync(faqsPath, faqsContent)
  console.log('Updated lib/faqs.ts')

  // Update lib/related.ts — inject inside the object before closing }
  const relatedPath = path.join(root, 'lib/related.ts')
  let relatedContent = fs.readFileSync(relatedPath, 'utf8')
  const relatedEntry = `  '${nextTopic.slug}': [\n${data.relatedSlugs.map(s => `    '${s}',`).join('\n')}\n  ],\n`
  relatedContent = relatedContent.replace(
    /\n}\n\nexport function getRelatedSlugs/,
    `\n${relatedEntry}}\n\nexport function getRelatedSlugs`
  )
  fs.writeFileSync(relatedPath, relatedContent)
  console.log('Updated lib/related.ts')

  // Append Reddit draft to docs/reddit-drafts.md
  if (data.redditTitle && data.redditBody) {
    const draftsPath = path.join(root, 'docs/reddit-drafts.md')
    const draftsExist = fs.existsSync(draftsPath)
    const draftEntry = `\n---\n\n## ${today} - ${nextTopic.title}\n\n**Titre Reddit :** ${data.redditTitle}\n\n**Corps du post :**\n\n${data.redditBody}\n`
    if (draftsExist) {
      fs.appendFileSync(draftsPath, draftEntry)
    } else {
      fs.writeFileSync(draftsPath, `# Brouillons Reddit - Labs AI\n\nUn post par mois maximum. Copier-coller dans r/iphone ou r/productivity.\n${draftEntry}`)
    }
    console.log('Updated docs/reddit-drafts.md')
  }

  console.log(`Done: "${nextTopic.title}"`)
}

run().catch(e => { console.error(e); process.exit(1) })
