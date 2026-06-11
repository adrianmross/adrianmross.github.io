import { site } from '@/lib/content'
import { getPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export function GET() {
  const posts = getPosts()
  const items = posts
    .map(
      (post) => `
        <item>
          <title>${post.title}</title>
          <link>${site.url}/blog/${post.slug}</link>
          <guid>${site.url}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <description>${post.summary}</description>
        </item>`,
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${site.name}</title>
        <link>${site.url}</link>
        <description>${site.description}</description>
        ${items}
      </channel>
    </rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  })
}
