import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug: string
  title: string
  summary: string
  publishedAt: string
  tag: string
  body: string
}

export function getPosts(): Post[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(postsDirectory, file), 'utf8')
      const { data, content } = matter(raw)

      return {
        slug,
        title: String(data.title),
        summary: String(data.summary),
        publishedAt: String(data.publishedAt),
        tag: String(data.tag ?? 'Note'),
        body: content,
      }
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug)
}
