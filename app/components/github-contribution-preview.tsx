import type { GitHubContributionLevel, GitHubContributionSource } from '@/lib/github'

type GitHubContributionPreviewProps = {
  levels: GitHubContributionLevel[]
  source: GitHubContributionSource
}

export function GitHubContributionPreview({ levels, source }: GitHubContributionPreviewProps) {
  return (
    <span className="mi-github-motif__bubble" aria-hidden="true">
      <span className="mi-github-motif__title">
        {source === 'github' ? 'GitHub activity' : 'activity motif'}
      </span>
      <span className="mi-github-motif__window">
        <span className="mi-github-motif__track">
          {levels.map((level, index) => (
            <span key={index} className={`mi-github-motif__cell mi-github-motif__cell--level-${level}`} />
          ))}
        </span>
      </span>
    </span>
  )
}
