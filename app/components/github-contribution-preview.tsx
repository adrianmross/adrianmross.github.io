import type { GitHubContributionLevel, GitHubContributionSource } from '@/lib/github'

type GitHubContributionPreviewProps = {
  levels: GitHubContributionLevel[]
  source: GitHubContributionSource
}

export function GitHubContributionPreview({ levels, source }: GitHubContributionPreviewProps) {
  return (
    <span className="github-bubble" aria-hidden="true">
      <span className="github-bubble-title">
        {source === 'github' ? 'GitHub activity' : 'activity motif'}
      </span>
      <span className="contrib-window">
        <span className="contrib-track">
          {levels.map((level, index) => (
            <span key={index} className={`contrib-cell level-${level}`} />
          ))}
        </span>
      </span>
    </span>
  )
}
