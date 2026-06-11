import { BlogPosts } from './components/posts'

export default function Page() {
  const intro =
    'I build small, durable software surfaces: static sites, data-heavy workflows, internal tools, and automation that keeps its operating model visible.'

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Adrian M. Ross</h1>
      <p className="mb-4">
        {intro.split(' ').map((word, index) => (
          <span key={`${word}-${index}`} className="intro-word">
            {word}
            {index === intro.split(' ').length - 1 ? '' : ' '}
          </span>
        ))}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
