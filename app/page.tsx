import { BlogPosts } from './components/posts'
import { GitHubContributionPreview } from './components/github-contribution-preview'
import { getGitHubContributionLevels } from '@/lib/github'

export default async function Page() {
  const githubContributions = await getGitHubContributionLevels()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Adrian Ross</h1>
      <div className="intro-copy">
        <p>
          A software engineer currently building distributed systems 
          and platform-op tools. I&apos;m just lazy enough to automate 
          everything so I never have to again.
        </p>
        <p>
          I studied Computer Science &amp; Business at{' '}
          <a className="mi-blackletter" href="https://www.lehigh.edu" aria-label="Lehigh University">
            <span className="mi-blackletter__plain">Lehigh University</span>
            <span className="mi-blackletter__ornate" aria-hidden="true">
              𝔏𝔢𝔥𝔦𝔤𝔥 𝔘𝔫𝔦𝔳𝔢𝔯𝔰𝔦𝔱𝔶
            </span>
          </a>.
          When there I was part of the Scalable Systems &amp; Software 
          Research Group and Blockchain Lab.
        </p>
        <p>
          Most public work lives on{' '}
          <a
            className="mi-github-motif"
            href="https://github.com/adrianmross"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
            <GitHubContributionPreview {...githubContributions} />
          </a>
          ; the rest is mostly quiet notes, rough ideas, and the occasional{' '}
          <a
            className="mi-twitter-x"
            href="https://x.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="mi-twitter-x__old">Twitter</span>
            <span className="mi-twitter-x__new">X</span>
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
