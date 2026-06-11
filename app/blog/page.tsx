import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getPosts } from '@/lib/posts'
import { Badge } from '../components/ui/badge'
import { Card, CardContent } from '../components/ui/card'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Short notes from Adrian M. Ross.',
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="py-16">
      <Badge>Notes</Badge>
      <h1 className="mt-5 text-4xl font-semibold md:text-6xl">Short notes on interfaces and systems.</h1>
      <div className="mt-10 grid gap-4">
        {posts.map((post) => (
          <Card key={post.slug} className="pressable">
            <CardContent className="p-5">
              <Link href={`/blog/${post.slug}`} className="grid gap-5 md:grid-cols-[160px_1fr_auto] md:items-start">
                <div>
                  <Badge>{post.tag}</Badge>
                  <p className="mono mt-3 text-xs text-[var(--muted)]">{post.publishedAt}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{post.summary}</p>
                </div>
                <ArrowRight size={18} />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
