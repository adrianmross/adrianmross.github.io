import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/content'
import { SpotlightCard } from '../components/spotlight-card'
import { Badge } from '../components/ui/badge'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects and systems by Adrian M. Ross.',
}

export default function WorkPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl">
        <Badge>Selected work</Badge>
        <h1 className="mt-5 text-4xl font-semibold md:text-6xl">Small surfaces, durable delivery paths.</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          A focused collection of interface, data, and deployment work. The through-line is simple: make the operating
          model visible, then make it pleasant to repeat.
        </p>
      </div>
      <div className="mt-10 grid gap-4">
        {projects.map((project) => (
          <SpotlightCard key={project.title} className="grid gap-6 md:grid-cols-[0.4fr_1fr_auto] md:items-start">
            <div>
              <p className="mono text-xs uppercase text-[var(--muted)]">{project.kicker}</p>
              <p className="mono mt-2 text-xs">{project.year}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <Badge key={metric}>{metric}</Badge>
                ))}
              </div>
            </div>
            <ArrowUpRight className="hidden md:block" size={18} />
          </SpotlightCard>
        ))}
      </div>
    </div>
  )
}
