import type { MetadataRoute } from 'next'
import { site } from '@/lib/content'
import { getPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/blog'].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }))

  const posts = getPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }))

  return [...routes, ...posts]
}
