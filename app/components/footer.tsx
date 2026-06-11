import Link from 'next/link'
import { navItems, site } from '@/lib/content'

export function Footer() {
  return (
    <footer className="page-shell mt-24 border-t border-[var(--line)] py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="mono text-xs uppercase text-[var(--muted)]">
          Static export for <span className="text-[var(--foreground)]">adrianmross.github.io</span>
        </p>
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="link-underline mono text-xs uppercase">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-6 text-sm text-[var(--muted)]">© 2026 {site.name}</p>
    </footer>
  )
}
