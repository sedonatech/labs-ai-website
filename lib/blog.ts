import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const blogsDirectory = path.join(process.cwd(), 'content/blog')

export const SUPPORTED_LOCALES = ['fr', 'es'] as const
export type Locale = typeof SUPPORTED_LOCALES[number]

export function getPostBySlugLocale(slug: string, locale: Locale): BlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, locale, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      readingTime: readingTime(content).text,
      content,
    }
  } catch {
    return null
  }
}

export function getAllPostsLocale(locale: Locale): BlogPost[] {
  const localeDir = path.join(blogsDirectory, locale)
  if (!fs.existsSync(localeDir)) return []
  const fileNames = fs.readdirSync(localeDir)
  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace('.mdx', '')
      const fullPath = path.join(localeDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        readingTime: readingTime(content).text,
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace('.mdx', '')
      const fullPath = path.join(blogsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        readingTime: readingTime(content).text,
        content,
      }
    })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      readingTime: readingTime(content).text,
      content,
    }
  } catch {
    return null
  }
}
