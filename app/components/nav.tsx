import Link from 'next/link'
import { Github, Mail } from 'lucide-react'
import { navItems, site } from '@/lib/content'
import { Button } from './ui/button'

export function Nav() {
  return (
    <header className="page-shell sticky top-0 z-30 border-b border-[var(--line)] bg-[rgb(247_245_239/0.78)] py-3 backdrop-blur-xl">
      <nav className="flex items-center justify-between gap-4">
        <Link href="/" className="mono text-sm font-medium uppercase">
          {site.name}
        </Link>
        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="link-underline mono text-xs uppercase text-[var(--muted)]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href="https://github.com/adrianmross">
              <Github size={16} />
            </a>
          </Button>
          <Button asChild size="icon" aria-label="Email">
            <a href="mailto:adrian@adrianmross.com">
              <Mail size={16} />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}
