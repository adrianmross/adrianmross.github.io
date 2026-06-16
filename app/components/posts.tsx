import Link from 'next/link'
import { getBlogPostPath, getPosts, type Post } from '@/lib/posts'
import { cn } from '@/lib/utils'

const fullDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

export function formatDate(date: string, includeRelative = false) {
  const normalizedDate = date.includes('T') ? date : `${date}T00:00:00.000Z`
  let targetDate = new Date(normalizedDate)
  let fullDate = fullDateFormatter.format(targetDate)

  if (!includeRelative) {
    return fullDate
  }

  let currentDate = new Date()

  let yearsAgo = currentDate.getUTCFullYear() - targetDate.getUTCFullYear()
  let monthsAgo = currentDate.getUTCMonth() - targetDate.getUTCMonth()
  let daysAgo = currentDate.getUTCDate() - targetDate.getUTCDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  return `${fullDate} (${formattedDate})`
}

type BlogPostsProps = {
  includeDrafts?: boolean
  showDraftStatus?: boolean
}

export function BlogPosts({ includeDrafts = false, showDraftStatus = false }: BlogPostsProps) {
  let allBlogs = getPosts({ includeDrafts })

  return (
    <div>
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className={cn(
            'flex flex-col space-y-1 mb-4',
            post.draft && 'opacity-45 hover:opacity-70',
          )}
          href={getBlogPostPath(post.slug)}
        >
          <BlogPostContent post={post} showDraftStatus={showDraftStatus} />
        </Link>
      ))}
    </div>
  )
}

function BlogPostContent({ post, showDraftStatus }: { post: Post; showDraftStatus: boolean }) {
  return (
    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
      <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
        {formatDate(post.publishedAt, false)}
      </p>
      <p className="text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2">
        <span>{post.title}</span>
        {post.draft && showDraftStatus ? (
          <span className="rounded-sm border border-neutral-300 px-1.5 py-0.5 text-[10px] font-medium uppercase leading-none text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
            draft
          </span>
        ) : null}
      </p>
    </div>
  )
}
