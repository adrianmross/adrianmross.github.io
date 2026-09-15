import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const draftsDirectory = path.join(process.cwd(), 'content/drafts')
const postSlugPattern = /^[a-z0-9-]+$/
const postFilenamePattern = /^[a-z0-9-]+\.mdx$/

export type Post = {
  slug: string
  title: string
  summary: string
  publishedAt: string
  tag: string
  draft: boolean
  body: string
}

type GetPostsOptions = {
  includeDrafts?: boolean
}

function readPostsFrom(directory: string, draft: boolean): Post[] {
  if (!fs.existsSync(directory)) {
    return []
  }

  return fs
    .readdirSync(directory)
    .filter((file) => postFilenamePattern.test(file))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(directory, file), 'utf8')
      const { data, content } = matter(raw)

      return {
        slug,
        title: String(data.title),
        summary: String(data.summary),
        publishedAt: String(data.publishedAt),
        tag: String(data.tag ?? 'Note'),
        draft,
        body: content,
      }
    })
}

export function getPosts({ includeDrafts = false }: GetPostsOptions = {}): Post[] {
  const posts = readPostsFrom(postsDirectory, false)
  const drafts = includeDrafts ? readPostsFrom(draftsDirectory, true) : []

  return [...posts, ...drafts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getPost(slug: string, options?: GetPostsOptions) {
  return getPosts(options).find((post) => post.slug === slug)
}

export function getBlogPostPath(slug: string) {
  if (!postSlugPattern.test(slug)) {
    throw new Error(`Invalid blog post slug: ${slug}`)
  }

  return `/blog/${encodeURIComponent(slug)}`
}

export function getBlogPostUrl(slug: string, baseUrl: string) {
  return new URL(getBlogPostPath(slug), baseUrl).toString()
}
