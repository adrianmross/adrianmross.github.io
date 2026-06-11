import type { Metadata } from 'next'
import type { HTMLAttributes } from 'react'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import { getPost, getPosts } from '@/lib/posts'
import { Badge } from '../../components/ui/badge'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
  }
}

function Code({ children, ...props }: HTMLAttributes<HTMLElement>) {
  const code = String(children)
  const html = highlight(code)
  return <code dangerouslySetInnerHTML={{ __html: html }} {...props} />
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl py-16">
      <Badge>{post.tag}</Badge>
      <h1 className="mt-5 text-4xl font-semibold md:text-6xl">{post.title}</h1>
      <p className="mono mt-4 text-sm text-[var(--muted)]">{post.publishedAt}</p>
      <div className="mdx mt-10">
        <MDXRemote source={post.body} components={{ code: Code }} />
      </div>
    </article>
  )
}
