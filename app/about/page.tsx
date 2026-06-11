import type { Metadata } from 'next'
import { assets, experience } from '@/lib/content'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Adrian M. Ross.',
}

export default function AboutPage() {
  return (
    <div className="py-16">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Badge>About</Badge>
          <h1 className="mt-5 text-4xl font-semibold md:text-6xl">Minimal outside, deliberate underneath.</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            I like software that explains itself through structure: clear content, resilient workflows, direct controls,
            and interfaces that give just enough feedback.
          </p>
        </div>
        <Card
          className="overflow-hidden"
          style={{ backgroundImage: `url(${assets.gridDataUri})`, backgroundSize: '36px 36px' }}
        >
          <CardHeader>
            <CardTitle>Working mode</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="build">
              <TabsList>
                <TabsTrigger value="build">Build</TabsTrigger>
                <TabsTrigger value="debug">Debug</TabsTrigger>
                <TabsTrigger value="ship">Ship</TabsTrigger>
              </TabsList>
              <TabsContent value="build">
                <p className="leading-7 text-[var(--muted)]">
                  Start with the real constraint, then reduce the implementation until the important behavior is easy to
                  inspect.
                </p>
              </TabsContent>
              <TabsContent value="debug">
                <p className="leading-7 text-[var(--muted)]">
                  Follow the runtime evidence first. A good fix should explain why the previous path failed.
                </p>
              </TabsContent>
              <TabsContent value="ship">
                <p className="leading-7 text-[var(--muted)]">
                  Prefer boring deploys, clear artifacts, and enough observability that future changes do not depend on
                  memory.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      <section className="mt-14 grid gap-4">
        {experience.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <CardTitle>{item.title}</CardTitle>
                <span className="mono text-xs text-[var(--muted)]">{item.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--muted)]">{item.company}</p>
              <p className="mt-3 leading-7">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
