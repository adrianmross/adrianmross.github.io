import Link from 'next/link'
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react'
import { assets, experience, projects, site } from '@/lib/content'
import { getPosts } from '@/lib/posts'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { MicroCommand } from './components/micro-command'
import { SpotlightCard } from './components/spotlight-card'

export default function Page() {
  const posts = getPosts().slice(0, 2)

  return (
    <div className="pb-10 pt-12 md:pt-20">
      <section className="grid min-h-[72vh] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Badge className="mb-6">Static portfolio / Vercel starter baseline</Badge>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] md:text-7xl">
            {site.name} builds quiet systems with sharp edges.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Developer, designer, and doer working where web interfaces, data workflows, and automation need to feel
            precise instead of loud.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/work">
                View work <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog">
                Read notes <Sparkles size={16} />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            className="signature absolute -top-14 right-0 h-20 w-72 opacity-15"
            style={{ backgroundImage: `url(${assets.signatureDataUri})`, backgroundSize: 'contain' }}
            aria-hidden="true"
          />
          <div
            className="rounded-lg border border-[var(--foreground)] bg-[var(--panel-strong)] p-3 shadow-[var(--shadow)]"
            style={{ backgroundImage: `url(${assets.gridDataUri})` }}
          >
            <MicroCommand />
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <SpotlightCard key={project.title}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase text-[var(--muted)]">{project.kicker}</p>
                <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
              </div>
              <span className="mono text-xs text-[var(--muted)]">{project.year}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <Badge key={metric}>{metric}</Badge>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-5">
            {experience.map((item) => (
              <div key={item.title} className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <span className="mono text-xs text-[var(--muted)]">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.company}</p>
                <p className="mt-3 text-sm leading-6">{item.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest notes</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="pressable rounded-lg border border-[var(--line)] bg-[var(--background)] p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <Badge>{post.tag}</Badge>
                  <ExternalLink size={15} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{post.summary}</p>
              </Link>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
