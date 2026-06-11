import { BlogPosts } from './components/posts'

const contributionLevels = Array.from({ length: 364 }, (_, index) => {
  const week = Math.floor(index / 7)
  const day = index % 7
  const signal = (week * 13 + day * 17 + week * day) % 19

  if (signal > 15) {
    return 4
  }

  if (signal > 11) {
    return 3
  }

  if (signal > 7) {
    return 2
  }

  if (signal > 4) {
    return 1
  }

  return 0
})

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Adrian M. Ross</h1>
      <div className="intro-copy">
        <p>
          I&apos;m Adrian Michael Ross, a developer, designer, and doer who
          builds small, durable software surfaces. I like static sites,
          data-heavy workflows, and automation that makes its operating model
          visible.
        </p>
        <p>
          I studied Computer Science &amp; Business at{' '}
          <a className="gleam-link" href="https://www.lehigh.edu">
            Lehigh University
          </a>, where the honors program sits between engineering and business. I
          also worked with the Scalable Systems &amp; Software Research Group
          in the Blockchain Lab and served as president of the CSBA.
        </p>
        <p>
          At Lockton, I built an AzureML forecasting prototype for PowerBI that
          handled nearly 3,000 daily multi-source transactions and targeted
          end-of-day revenue predictions.
        </p>
        <p>
          Public work lives on{' '}
          <a
            className="github-link"
            href="https://github.com/adrianmross"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
            <span className="github-bubble" aria-hidden="true">
              <span className="github-bubble-title">contribution graph</span>
              <span className="contrib-window">
                <span className="contrib-track">
                  {contributionLevels.map((level, index) => (
                    <span
                      key={index}
                      className={`contrib-cell level-${level}`}
                    />
                  ))}
                </span>
              </span>
            </span>
          </a>
          ; the rest is mostly quiet notes, rough ideas, and the occasional{' '}
          <a
            className="twitter-x"
            href="https://x.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="twitter-old">Twitter</span>
            <span className="twitter-new">X</span>
          </a>
          .
        </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
