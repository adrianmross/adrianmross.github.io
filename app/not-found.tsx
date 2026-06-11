import Link from 'next/link'
import { Button } from './components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center py-16">
      <p className="mono text-sm uppercase text-[var(--muted)]">404</p>
      <h1 className="mt-4 text-5xl font-semibold">This page is not in the static export.</h1>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  )
}
