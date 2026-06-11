import { BlogPosts } from './components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Adrian M. Ross</h1>
      <p className="mb-4">
        I build small, durable software surfaces: static sites, data-heavy
        workflows, internal tools, and automation that keeps its operating
        model visible. I keep the public pieces on{' '}
        <a
          className="github-word"
          href="https://github.com/adrianmross"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>G</span>
          <span>i</span>
          <span>t</span>
          <span>H</span>
          <span>u</span>
          <span>b</span>
        </a>
        .
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
