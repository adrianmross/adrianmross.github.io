import type { Metadata } from 'next'
import { BlogPosts } from '../components/posts'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Short notes from Adrian M. Ross.',
}

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Writing</h1>
      <BlogPosts />
    </section>
  )
}
