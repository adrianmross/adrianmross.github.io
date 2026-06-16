import type { MetadataRoute } from 'next'
import { site } from '@/site'
import { getBlogPostUrl, getPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/blog'].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }))

  const posts = getPosts().map((post) => ({
    url: getBlogPostUrl(post.slug, site.url),
    lastModified: new Date(post.publishedAt),
  }))

  return [...routes, ...posts]
}
