import type { Metadata } from 'next'
import type { HTMLAttributes } from 'react'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import { getPost, getPosts } from '@/lib/posts'
import { formatDate } from '../../components/posts'

type PageProps = {
  params: Promise<{ slug: string }>
}

const isDevelopment = process.env.NODE_ENV === 'development'

export function generateStaticParams() {
  return getPosts({ includeDrafts: isDevelopment }).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug, { includeDrafts: isDevelopment })
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
  const post = getPost(slug, { includeDrafts: isDevelopment })
  if (!post) notFound()

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">{post.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.publishedAt)}</p>
      </div>
      <article className="prose">
        <MDXRemote source={post.body} components={{ code: Code }} />
      </article>
    </section>
  )
}
