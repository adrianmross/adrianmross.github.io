export type GitHubContributionSource = 'github' | 'fallback'
export type GitHubContributionLevel = 0 | 1 | 2 | 3 | 4

type GitHubContributionDay = {
  contributionLevel: 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE'
}

type GitHubContributionResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks?: Array<{
            contributionDays?: GitHubContributionDay[]
          }>
        }
      }
    }
  }
  errors?: Array<{ message: string }>
}

const contributionLevelMap: Record<GitHubContributionDay['contributionLevel'], GitHubContributionLevel> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

export const fallbackContributionLevels: GitHubContributionLevel[] = Array.from({ length: 364 }, (_, index) => {
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

function getGitHubToken() {
  return process.env.GITHUB_CONTRIBUTIONS_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_TOKEN
}

export async function getGitHubContributionLevels(username = 'adrianmross'): Promise<{
  levels: GitHubContributionLevel[]
  source: GitHubContributionSource
}> {
  const token = getGitHubToken()

  if (!token) {
    return { levels: fallbackContributionLevels, source: 'fallback' }
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query ContributionCalendar($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      contributionLevel
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username },
      }),
      cache: 'force-cache',
    })

    if (!response.ok) {
      return { levels: fallbackContributionLevels, source: 'fallback' }
    }

    const payload = (await response.json()) as GitHubContributionResponse

    if (payload.errors?.length) {
      return { levels: fallbackContributionLevels, source: 'fallback' }
    }

    const days =
      payload.data?.user?.contributionsCollection?.contributionCalendar?.weeks?.flatMap(
        (week) => week.contributionDays ?? [],
      ) ?? []

    const levels = days.map((day) => contributionLevelMap[day.contributionLevel])

    if (!levels.length) {
      return { levels: fallbackContributionLevels, source: 'fallback' }
    }

    return { levels, source: 'github' }
  } catch {
    return { levels: fallbackContributionLevels, source: 'fallback' }
  }
}
