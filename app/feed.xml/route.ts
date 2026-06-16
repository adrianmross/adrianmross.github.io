import { site } from '@/site'
import { getBlogPostUrl, getPosts } from '@/lib/posts'

export const dynamic = 'force-static'

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => {
    switch (character) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case "'":
        return '&apos;'
      case '"':
        return '&quot;'
      default:
        return character
    }
  })
}

export function GET() {
  const posts = getPosts()
  const items = posts
    .map((post) => {
      const postUrl = getBlogPostUrl(post.slug, site.url)

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${escapeXml(postUrl)}</link>
          <guid>${escapeXml(postUrl)}</guid>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <description>${escapeXml(post.summary)}</description>
        </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(site.name)}</title>
        <link>${escapeXml(site.url)}</link>
        <description>${escapeXml(site.description)}</description>
        ${items}
      </channel>
    </rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  })
}
